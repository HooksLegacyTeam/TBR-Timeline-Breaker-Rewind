param(
    [string]$Owner,
    [string]$Repo,
    [string]$Token,
    [string]$Tag,
    [string]$AppVersion,
    [string]$EditorVersion,
    [string]$EditorAsset,
    [string]$StagingDir
)
$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$appAsset = "TimelineBreaker-Rewind_v$AppVersion.apk"
$apkFile = Join-Path $StagingDir $appAsset
$zipFile = Join-Path $StagingDir $EditorAsset
if (-not (Test-Path $apkFile)) { throw "Asset mancante: $apkFile" }
if (-not (Test-Path $zipFile)) { throw "Asset mancante: $zipFile" }

$releaseBody = @{
    tag_name   = $Tag
    name       = "Timeline Breaker Rewind v$AppVersion"
    body       = "## Download`n`n- App Android (APK): **$appAsset**`n- Editor Story Forge v$EditorVersion (Windows): **$EditorAsset**`n`nLink diretti:`n- https://github.com/$Owner/$Repo/releases/latest/download/$appAsset`n- https://github.com/$Owner/$Repo/releases/latest/download/$EditorAsset"
    draft      = $false
    prerelease = $false
} | ConvertTo-Json

$jsonFile = Join-Path $StagingDir 'release.json'
[System.IO.File]::WriteAllText($jsonFile, $releaseBody, (New-Object System.Text.UTF8Encoding($false)))

$api = "https://api.github.com/repos/$Owner/$Repo/releases"
Write-Host "Creo la release $Tag ..."
$resp = & curl.exe -sS -X POST -H "Authorization: token $Token" -H "Content-Type: application/json" --data "@$jsonFile" $api
$rel = $resp | ConvertFrom-Json
if (-not $rel.id) { throw "Creazione release fallita: $resp" }

$uploadBase = $rel.upload_url -replace '\{\?name,label\}', ''
foreach ($asset in @($apkFile, $zipFile)) {
    $name = [System.IO.Path]::GetFileName($asset)
    Write-Host "Upload $name ..."
    $out = & curl.exe -sS -X POST -H "Authorization: token $Token" -H "Content-Type: application/octet-stream" --data-binary "@$asset" "$uploadBase?name=$name"
    $up = $out | ConvertFrom-Json
    if (-not $up.id) { throw "Upload fallito per $name : $out" }
    Write-Host "OK  $name"
}
Write-Host "Release pronta: https://github.com/$Owner/$Repo/releases/tag/$Tag"
