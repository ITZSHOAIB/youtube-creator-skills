param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$Source,

    [string]$Output,
    [string]$Model = "small",
    [string]$Language,
    [double]$SampleSeconds = 55,
    [string]$PythonExe,
    [string]$NodeExe
)

$ErrorActionPreference = "Stop"
$workspaceRoot = (Get-Location).Path
$environmentPath = Join-Path $workspaceRoot ".youtube-manager\asr-venv"
$pythonCandidates = @()

if ($PythonExe) {
    $pythonCandidates += $PythonExe
} else {
    $pyLauncher = Get-Command py -ErrorAction SilentlyContinue
    $pythonCommand = Get-Command python -ErrorAction SilentlyContinue
    if ($pyLauncher) { $pythonCandidates += "py" }
    if ($pythonCommand) { $pythonCandidates += $pythonCommand.Source }
}

if (-not (Test-Path $environmentPath)) {
    if (-not $pythonCandidates) {
        throw "Python 3.9+ was not found. Use the agent's bundled Python runtime, or install Python and rerun this helper."
    }

    $created = $false
    foreach ($candidate in $pythonCandidates) {
        if ($candidate -eq "py") {
            & py -3 -m venv $environmentPath
        } else {
            & $candidate -m venv $environmentPath
        }
        if ($LASTEXITCODE -eq 0 -and (Test-Path (Join-Path $environmentPath "Scripts\python.exe"))) {
            $created = $true
            break
        }
    }
    if (-not $created) { throw "Could not create the local ASR virtual environment at $environmentPath" }
}

$venvPython = Join-Path $environmentPath "Scripts\python.exe"
if (-not (Test-Path $venvPython)) { throw "The ASR virtual environment exists but its Python executable is missing: $venvPython" }

& $venvPython -m pip install --upgrade pip
if ($LASTEXITCODE -ne 0) { throw "Could not prepare pip in the project-local ASR environment." }
& $venvPython -m pip install faster-whisper "yt-dlp[default]"
if ($LASTEXITCODE -ne 0) { throw "Could not install open-source ASR dependencies in $environmentPath" }

# yt-dlp may need a JavaScript runtime for current YouTube extraction.
if ($NodeExe) { $env:PATH = "$(Split-Path -Parent $NodeExe);$env:PATH" }

$transcriber = Join-Path $PSScriptRoot "transcribe_youtube.py"
$transcribeArgs = @($transcriber, $Source, "--model", $Model, "--sample-seconds", $SampleSeconds)
if ($Language) { $transcribeArgs += @("--language", $Language) }
if ($Output) { $transcribeArgs += @("--output", $Output) }
& $venvPython @transcribeArgs
if ($LASTEXITCODE -ne 0) { throw "Local ASR did not complete. Read the preceding error and report the exact blocker." }
