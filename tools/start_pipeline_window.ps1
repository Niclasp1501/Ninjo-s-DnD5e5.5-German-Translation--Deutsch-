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

$runner = (Resolve-Path (Join-Path $PSScriptRoot "run_pipeline.ps1")).Path

$args = @(
  "-NoExit",
  "-ExecutionPolicy", "Bypass",
  "-File", "`"$runner`"",
  "-EnPath", "`"$EnPath`"",
  "-BatchSize", "$BatchSize",
  "-SleepMs", "$SleepMs",
  "-MaxRetries", "$MaxRetries",
  "-InitialBackoffMs", "$InitialBackoffMs",
  "-MaxBatches", "$MaxBatches"
)

Start-Process -FilePath "powershell.exe" -ArgumentList $args | Out-Null
Write-Host "Pipeline window started." -ForegroundColor Green
