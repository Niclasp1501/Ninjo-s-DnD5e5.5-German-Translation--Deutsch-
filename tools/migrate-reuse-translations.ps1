param(
  [Parameter(Mandatory = $false)]
  [string]$OldDePath = "C:\Users\nicla\Documents\Playground\foundryvtt-dnd5e-lang-de\languages\de.json",

  [Parameter(Mandatory = $false)]
  [string]$EnPath = "C:\Users\nicla\Documents\Playground\dnd5e\lang\en.json",

  [Parameter(Mandatory = $false)]
  [string]$OutPath = "languages/de.json",

  [Parameter(Mandatory = $false)]
  [string]$BlocklistPath = "config/scope-blocklist.json",

  [Parameter(Mandatory = $false)]
  [string]$ReportPath = "tools/migration-report.json"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Flatten-Json {
  param(
    [Parameter(Mandatory = $true)] $Node,
    [Parameter(Mandatory = $true)] [string]$Prefix,
    [Parameter(Mandatory = $true)] [hashtable]$Map
  )

  if ($Node -is [System.Collections.IDictionary]) {
    foreach ($k in $Node.Keys) {
      $next = if ([string]::IsNullOrEmpty($Prefix)) { [string]$k } else { "$Prefix.$k" }
      Flatten-Json -Node $Node[$k] -Prefix $next -Map $Map
    }
    return
  }

  if ($Node -is [PSCustomObject]) {
    foreach ($p in $Node.PSObject.Properties) {
      $next = if ([string]::IsNullOrEmpty($Prefix)) { [string]$p.Name } else { "$Prefix.$($p.Name)" }
      Flatten-Json -Node $p.Value -Prefix $next -Map $Map
    }
    return
  }

  $Map[$Prefix] = $Node
}

function Set-NestedValue {
  param(
    [Parameter(Mandatory = $true)] [hashtable]$Root,
    [Parameter(Mandatory = $true)] [string]$Path,
    [Parameter(Mandatory = $true)] $Value
  )

  $parts = $Path -split "\."
  $cursor = $Root
  for ($i = 0; $i -lt ($parts.Length - 1); $i++) {
    $part = $parts[$i]
    if (-not $cursor.ContainsKey($part) -or -not ($cursor[$part] -is [System.Collections.IDictionary])) {
      $cursor[$part] = @{}
    }
    $cursor = $cursor[$part]
  }
  $cursor[$parts[$parts.Length - 1]] = $Value
}

function Is-BlockedKey {
  param(
    [Parameter(Mandatory = $true)] [string]$Key,
    [Parameter(Mandatory = $true)] [string[]]$BlockedPrefixes
  )

  foreach ($prefix in $BlockedPrefixes) {
    if ($Key -eq $prefix -or $Key.StartsWith("$prefix.")) {
      return $true
    }
  }
  return $false
}

if (-not (Test-Path -LiteralPath $OldDePath)) { throw "Old DE file not found: $OldDePath" }
if (-not (Test-Path -LiteralPath $EnPath)) { throw "EN file not found: $EnPath" }
if (-not (Test-Path -LiteralPath $BlocklistPath)) { throw "Blocklist file not found: $BlocklistPath" }

$oldDe = Get-Content -Raw -Encoding utf8 -LiteralPath $OldDePath | ConvertFrom-Json
$en = Get-Content -Raw -Encoding utf8 -LiteralPath $EnPath | ConvertFrom-Json
$blocked = Get-Content -Raw -Encoding utf8 -LiteralPath $BlocklistPath | ConvertFrom-Json

$oldFlat = @{}
$enFlat = @{}
Flatten-Json -Node $oldDe -Prefix "" -Map $oldFlat
Flatten-Json -Node $en -Prefix "" -Map $enFlat

$result = @{}
$reused = 0
$missing = 0
$blockedCount = 0

foreach ($key in $enFlat.Keys) {
  if (Is-BlockedKey -Key $key -BlockedPrefixes $blocked) {
    $blockedCount++
    continue
  }

  $enValue = $enFlat[$key]
  if ($enValue -isnot [string]) {
    continue
  }

  if ($oldFlat.ContainsKey($key) -and ($oldFlat[$key] -is [string])) {
    Set-NestedValue -Root $result -Path $key -Value $oldFlat[$key]
    $reused++
  } else {
    $missing++
  }
}

$jsonUtf8NoBom = [System.Text.UTF8Encoding]::new($false)
$outDir = Split-Path -Parent $OutPath
if ($outDir -and -not (Test-Path -LiteralPath $outDir)) {
  New-Item -ItemType Directory -Path $outDir | Out-Null
}
[System.IO.File]::WriteAllText($OutPath, ($result | ConvertTo-Json -Depth 100), $jsonUtf8NoBom)

$report = [ordered]@{
  generatedAt = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ssK")
  sourceOldDe = $OldDePath
  sourceEn = $EnPath
  output = $OutPath
  blockedPrefixes = $blocked
  totalEnLeafKeys = $enFlat.Keys.Count
  blockedLeafKeys = $blockedCount
  reusedKeys = $reused
  missingKeys = $missing
}

$reportDir = Split-Path -Parent $ReportPath
if ($reportDir -and -not (Test-Path -LiteralPath $reportDir)) {
  New-Item -ItemType Directory -Path $reportDir | Out-Null
}
[System.IO.File]::WriteAllText($ReportPath, ($report | ConvertTo-Json -Depth 10), $jsonUtf8NoBom)

Write-Output ("Reused keys: {0}" -f $reused)
Write-Output ("Missing keys: {0}" -f $missing)
Write-Output ("Blocked keys: {0}" -f $blockedCount)
Write-Output ("Output: {0}" -f $OutPath)
Write-Output ("Report: {0}" -f $ReportPath)

