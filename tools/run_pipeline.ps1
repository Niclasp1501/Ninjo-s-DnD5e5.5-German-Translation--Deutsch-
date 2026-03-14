param(
  [string]$EnPath = "C:/Users/nicla/Documents/Playground/dnd5e/lang/en.json",
  [int]$BatchSize = 5,
  [int]$SleepMs = 3000,
  [int]$MaxRetries = 7,
  [int]$InitialBackoffMs = 3000,
  [int]$MaxBatches = 5
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
Set-Location $root

$logDir = Join-Path $root "tools/logs"
if (-not (Test-Path -LiteralPath $logDir)) {
  New-Item -ItemType Directory -Path $logDir | Out-Null
}
$ts = Get-Date -Format "yyyyMMdd-HHmmss"
$logFile = Join-Path $logDir ("pipeline-" + $ts + ".log")

function Write-Stage($msg) {
  Write-Host ""
  Write-Host "=== $msg ===" -ForegroundColor Cyan
}

Write-Host "DnD5e DE Translation Pipeline" -ForegroundColor Green
Write-Host "Workspace: $root"
Write-Host "Log: $logFile"

if ([string]::IsNullOrWhiteSpace($env:GEMINI_API_KEY)) {
  Write-Host "ERROR: GEMINI_API_KEY is not set in this process." -ForegroundColor Red
  Write-Host "Set it in this window: `$env:GEMINI_API_KEY='...key...'"
  exit 1
}

Write-Stage "1/4 Gemini suggestions"
$cmd1 = "python -u tools/translate_missing_gemini.py --missing tools/missing-keys.json --out languages/de.suggestions.json --batch-size $BatchSize --sleep-ms $SleepMs --max-retries $MaxRetries --initial-backoff-ms $InitialBackoffMs --max-batches $MaxBatches"
Write-Host $cmd1
Invoke-Expression $cmd1 2>&1 | Tee-Object -FilePath $logFile -Append

Write-Stage "2/4 Validate suggestions"
$cmd2 = "python -u tools/validate_suggestions.py --en `"$EnPath`" --suggestions languages/de.suggestions.json --metric-policy config/metric-policy.json --out tools/validation-report.json"
Write-Host $cmd2
Invoke-Expression $cmd2 2>&1 | Tee-Object -FilePath $logFile -Append

Write-Stage "3/4 Merge suggestions"
$cmd3 = "python -u tools/merge_suggestions.py --base languages/de.json --suggestions languages/de.suggestions.json --out languages/de.json"
Write-Host $cmd3
Invoke-Expression $cmd3 2>&1 | Tee-Object -FilePath $logFile -Append

Write-Stage "4/4 Refresh missing keys"
$cmd4 = "python -u tools/extract_missing_keys.py --en `"$EnPath`" --de languages/de.json --out tools/missing-keys.json"
Write-Host $cmd4
Invoke-Expression $cmd4 2>&1 | Tee-Object -FilePath $logFile -Append

Write-Stage "Summary"
python -c "import json, pathlib; m=json.loads(pathlib.Path('tools/missing-keys.json').read_text(encoding='utf-8')); v=json.loads(pathlib.Path('tools/validation-report.json').read_text(encoding='utf-8')); t=json.loads(pathlib.Path('tools/translation-report.json').read_text(encoding='utf-8')); print('missing_keys=', m['count']); print('validation_issues=', v['issues']); print('translated_total_in_suggestions=', t.get('translatedTotalInSuggestions'))" 2>&1 | Tee-Object -FilePath $logFile -Append

Write-Host ""
Write-Host "Done. Log written to: $logFile" -ForegroundColor Green

