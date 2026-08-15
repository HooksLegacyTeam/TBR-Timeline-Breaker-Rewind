param(
    [string]$SiteDir,
    [string]$AppDir,
    [string]$EditorDir,
    [string]$AppVersion,
    [string]$EditorVersion,
    [string]$AppAsset,
    [string]$EditorAsset,
    [string]$Repo
)
$ErrorActionPreference = 'Stop'

function Format-MB([double]$Bytes) {
    [math]::Round($Bytes / 1MB, 1)
}

$apkPath = Join-Path $AppDir 'build\app\outputs\flutter-apk\app-release.apk'
if (-not (Test-Path $apkPath)) { throw "APK non trovato: $apkPath" }
$apkFile = Get-Item $apkPath

$zipFile = Get-ChildItem (Join-Path $EditorDir 'dist') -Filter $EditorAsset -File -ErrorAction SilentlyContinue |
    Sort-Object LastWriteTime -Descending | Select-Object -First 1
if (-not $zipFile) { throw "ZIP non trovato in $(Join-Path $EditorDir 'dist') : $EditorAsset" }

$dataFile = Join-Path $SiteDir 'data\versions.json'
$data = $null
if (Test-Path $dataFile) {
    try { $data = Get-Content -Raw -Encoding UTF8 $dataFile | ConvertFrom-Json } catch { $data = $null }
}
if (-not $data) {
    $data = [pscustomobject]@{
        repo = $Repo
        editor = [pscustomobject]@{
            version = '0.0.0'; date = ''; asset = ''; sizeMB = 0; platform = 'windows'
            tagline = [pscustomobject]@{ it = ''; en = '' }
            features = [pscustomobject]@{ it = @(); en = @() }
        }
        app = [pscustomobject]@{
            version = '0.0.0'; date = ''; asset = ''; sizeMB = 0; platform = 'android'
            tagline = [pscustomobject]@{ it = ''; en = '' }
            features = [pscustomobject]@{ it = @(); en = @() }
        }
    }
}

$data.repo = $Repo
$data.editor.version = $EditorVersion
$data.editor.date = $zipFile.LastWriteTime.ToString('yyyy-MM-dd')
$data.editor.asset = $EditorAsset
$data.editor.sizeMB = Format-MB $zipFile.Length

$data.app.version = $AppVersion
$data.app.date = $apkFile.LastWriteTime.ToString('yyyy-MM-dd')
$data.app.asset = $AppAsset
$data.app.sizeMB = Format-MB $apkFile.Length

$json = $data | ConvertTo-Json -Depth 12
[System.IO.File]::WriteAllText($dataFile, $json, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "versions.json aggiornato: app v$AppVersion, editor v$EditorVersion"
