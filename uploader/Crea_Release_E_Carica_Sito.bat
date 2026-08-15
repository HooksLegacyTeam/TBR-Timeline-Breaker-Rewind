@echo off
setlocal EnableExtensions EnableDelayedExpansion
chcp 65001 >nul

rem ============================================================
rem  TBR - UPLOADER AUTOMATICO GITHUB
rem  Crea la Release (APK + ZIP) e/o carica il sito su GitHub.
rem  Richiede un Personal Access Token in uploader_config.txt
rem  (vedi uploader_config.txt.example).
rem ============================================================

set "UPLOADER=%~dp0"
set "SITE_DIR=%~dp0.."
set "ROOT=%~dp0..\.."
set "APP_DIR=%ROOT%\app"
set "EDITOR_DIR=%ROOT%\editor"
set "CONFIG=%UPLOADER%uploader_config.txt"
set "STAGING=%UPLOADER%staging"

title TBR - Uploader GitHub

rem Uso da riga di comando:
rem   Crea_Release_E_Carica_Sito.bat all      -> tutto
rem   Crea_Release_E_Carica_Sito.bat sito     -> solo sito
rem   Crea_Release_E_Carica_Sito.bat release  -> solo release
if /i "%~1"=="all"     (set "MODE=all"     & goto prepare)
if /i "%~1"=="sito"    (set "MODE=sito"    & goto prepare)
if /i "%~1"=="release" (set "MODE=release" & goto prepare)

echo ============================================================
echo   TBR - UPLOADER AUTOMATICO GITHUB
echo ============================================================
echo.
echo   [1] Tutto: aggiorna sito + crea Release (APK e ZIP)
echo   [2] Solo sito: aggiorna versions.json e carica su GitHub
echo   [3] Solo Release: crea/pubblica Release con APK e ZIP
echo.
choice /c 123 /n /m "Scegli [1-3]: "
if errorlevel 3 goto mode_release
if errorlevel 2 goto mode_sito
set "MODE=all"
goto prepare

:mode_sito
set "MODE=sito"
goto prepare

:mode_release
set "MODE=release"
goto prepare

:prepare
echo.

rem ---------- prerequisiti ----------
where curl >nul 2>nul
if errorlevel 1 (
    echo [ERRORE] curl non trovato. Serve Windows 10 1803 o successivo.
    goto fail
)
where git >nul 2>nul
if errorlevel 1 (
    echo [ERRORE] git non trovato nel PATH.
    goto fail
)

rem ---------- config ----------
if not exist "%CONFIG%" (
    echo [ERRORE] File config non trovato: %CONFIG%
    echo Copia uploader_config.txt.example in uploader_config.txt
    echo e inserisci il token. Istruzioni nel file example.
    goto fail
)

set "OWNER="
set "REPO="
set "TOKEN="
for /f "usebackq tokens=1,* delims==" %%A in ("%CONFIG%") do (
    if /i "%%A"=="owner" set "OWNER=%%B"
    if /i "%%A"=="repo"  set "REPO=%%B"
    if /i "%%A"=="token" set "TOKEN=%%B"
)
if not defined OWNER set "OWNER=HooksLegacyTeam"
if not defined REPO  set "REPO=TBR-Timeline-Breaker-Rewind"
if not defined TOKEN (
    echo [ERRORE] Token mancante in %CONFIG%
    echo Genera un token qui:  https://github.com/settings/tokens
    echo Permessi richiesti:  repo  (e workflow se serve^)
    goto fail
)
echo [OK] Config: %OWNER%/%REPO%

rem ---------- verifica token ----------
if not exist "%STAGING%" mkdir "%STAGING%"
echo.
echo [AUTH] Verifico il token...
set "AUTH_CODE="
for /f "delims=" %%C in ('curl -sS -o "%STAGING%\auth.json" -w "%%{http_code}" -H "Authorization: token %TOKEN%" "https://api.github.com/user"') do set "AUTH_CODE=%%C"
if not "!AUTH_CODE!"=="200" (
    echo [ERRORE] Token non valido ^(HTTP !AUTH_CODE!^).
    echo Rigenera il token o controlla i permessi.
    goto fail
)
echo [OK] Token valido.

rem ---------- versioni da pubspec.yaml ----------
set "APP_VER="
for /f "tokens=2" %%V in ('findstr /b "version:" "%APP_DIR%\pubspec.yaml" 2^>nul') do set "APP_VER=%%V"
if not defined APP_VER set "APP_VER=0.0.0"
for /f "delims=+" %%P in ("!APP_VER!") do set "APP_VER=%%P"

set "EDITOR_VER="
for /f "tokens=2" %%V in ('findstr /b "version:" "%EDITOR_DIR%\pubspec.yaml" 2^>nul') do set "EDITOR_VER=%%V"
if not defined EDITOR_VER set "EDITOR_VER=0.0.0"
for /f "delims=+" %%P in ("!EDITOR_VER!") do set "EDITOR_VER=%%P"

echo [INFO] App:    v!APP_VER!
echo [INFO] Editor: v!EDITOR_VER!

rem ---------- individua i binari ----------
set "APK_SRC=%APP_DIR%\build\app\outputs\flutter-apk\app-release.apk"
if not exist "%APK_SRC%" (
    echo [ERRORE] APK non trovato: %APK_SRC%
    echo Esegui prima app\installa_telefono.bat ^(opzione 1^) per compilare.
    goto fail
)

set "ZIP_SRC="
for /f "delims=" %%F in ('dir /b /o-d "%EDITOR_DIR%\dist\StoryForge_Editor_*.zip" 2^>nul') do (
    if not defined ZIP_SRC set "ZIP_SRC=%EDITOR_DIR%\dist\%%F"
)
if not defined ZIP_SRC (
    echo [ERRORE] Nessuno ZIP editor in %EDITOR_DIR%\dist
    echo Esegui prima editor\Crea_Pacchetto_Editor.bat per generarlo.
    goto fail
)

set "APP_ASSET=TimelineBreaker-Rewind_v!APP_VER!.apk"
set "EDITOR_ASSET="
for %%F in ("!ZIP_SRC!") do set "EDITOR_ASSET=%%~nxF"

rem ---------- staging degli asset ----------
echo.
echo [COPY] Preparo gli asset nella cartella staging...
if exist "%STAGING%" rd /s /q "%STAGING%"
mkdir "%STAGING%"
copy /y "!APK_SRC!"  "%STAGING%\!APP_ASSET!" >nul
if errorlevel 1 (
    echo [ERRORE] Copia APK fallita.
    goto fail
)
copy /y "!ZIP_SRC!"  "%STAGING%\!EDITOR_ASSET!" >nul
if errorlevel 1 (
    echo [ERRORE] Copia ZIP fallita.
    goto fail
)
echo [OK] APK  : !APP_ASSET!
echo [OK] ZIP  : !EDITOR_ASSET!

rem ---------- aggiorna versions.json (skip in modalita release) ----------
if "!MODE!"=="release" goto release
echo.
echo [VERS] Aggiorno data\versions.json...
powershell -NoProfile -ExecutionPolicy Bypass -File "%UPLOADER%Update-Versions.ps1" -SiteDir "%SITE_DIR%" -AppDir "%APP_DIR%" -EditorDir "%EDITOR_DIR%" -AppVersion "!APP_VER!" -EditorVersion "!EDITOR_VER!" -AppAsset "!APP_ASSET!" -EditorAsset "!EDITOR_ASSET!" -Repo "!OWNER!/!REPO!"
if errorlevel 1 (
    echo [ERRORE] Aggiornamento versions.json fallito.
    goto fail
)
echo [OK] versions.json aggiornato.

if "!MODE!"=="sito" goto sito

rem ============================================================
rem  RELEASE: verifica/elimina esistente, poi crea e carica
rem ============================================================
:release
echo.
echo [REL] Verifico se esiste la release v!APP_VER!...
set "HTTP="
for /f "delims=" %%C in ('curl -sS -o "%STAGING%\check.json" -w "%%{http_code}" -H "Authorization: token %TOKEN%" "https://api.github.com/repos/%OWNER%/%REPO%/releases/tags/v!APP_VER!"') do set "HTTP=%%C"

if "!HTTP!"=="200" (
    echo [INFO] Release v!APP_VER! esiste gia'.
    choice /c SN /m "Sovrascrivere la release esistente? (S=Si, N=No) "
    if errorlevel 2 (
        echo [ANNULLATO] Release non toccata. Nessuna modifica inviata.
        goto end
    )
    set "REL_ID="
    for /f "usebackq delims=" %%I in (`powershell -NoProfile -Command "(Get-Content -Raw -Encoding UTF8 '%STAGING%\check.json' | ConvertFrom-Json).id"`) do set "REL_ID=%%I"
    if not defined REL_ID (
        echo [ERRORE] Impossibile leggere l'id della release esistente.
        goto fail
    )
    echo [REL] Elimino la release esistente...
    curl -sS -X DELETE -H "Authorization: token %TOKEN%" "https://api.github.com/repos/%OWNER%/%REPO%/releases/!REL_ID!" -o NUL
    curl -sS -X DELETE -H "Authorization: token %TOKEN%" "https://api.github.com/repos/%OWNER%/%REPO%/git/refs/tags/v!APP_VER!" -o NUL
) else (
    if not "!HTTP!"=="404" echo [AVVISO] Risposta inattesa dal controllo release ^(HTTP !HTTP!^), provo comunque.
)

if "!MODE!"=="release" goto do_release

rem ============================================================
rem  SITO: git add/commit/push
rem ============================================================
:sito
echo.
echo [GIT] Preparo il push del sito su %OWNER%/%REPO%...
pushd "%SITE_DIR%"

if not exist ".git\config" (
    echo [GIT] Inizializzo il repository locale...
    git init -b main >nul
    if errorlevel 1 (
        echo [ERRORE] git init fallito.
        popd & goto fail
    )
    git remote add origin "https://github.com/%OWNER%/%REPO%.git" >nul 2>nul
) else (
    git remote set-url origin "https://github.com/%OWNER%/%REPO%.git" >nul 2>nul
)

for /f "delims=" %%B in ('git branch --show-current 2^>nul') do set "CUR_BRANCH=%%B"
if not "!CUR_BRANCH!"=="main" (
    git branch -M main >nul
)

git add -A >nul 2>nul
git diff --cached --quiet
if errorlevel 1 (
    echo [GIT] Creo il commit delle modifiche...
    git -c user.name="%OWNER%" -c user.email="%OWNER%@users.noreply.github.com" commit -m "Update sito: app v!APP_VER!, editor v!EDITOR_VER!" >nul 2>nul
    if errorlevel 1 (
        echo [ERRORE] Commit fallito.
        popd & goto fail
    )
) else (
    echo [GIT] Nessuna modifica da caricare.
)

echo [GIT] Push su GitHub...
git push "https://%TOKEN%@github.com/%OWNER%/%REPO%.git" main
if errorlevel 1 (
    echo.
    echo [AVVISO] Il push e' fallito (magari il ramo remoto diverge^).
    choice /c SN /m "Forzare il push (S=Si, N=No) "
    if errorlevel 2 (
        echo [ANNULLATO] Push non eseguito.
        popd & goto fail
    )
    git push --force "https://%TOKEN%@github.com/%OWNER%/%REPO%.git" main
    if errorlevel 1 (
        echo [ERRORE] Push forzata fallita. Controlla token e permessi.
        popd & goto fail
    )
)
popd
echo [OK] Sito pubblicato su https://%OWNER%.github.io/%REPO%/

if "!MODE!"=="all" goto do_release
goto end

rem ============================================================
rem  RELEASE: crea la release e carica gli asset
rem ============================================================
:do_release
echo.
echo [REL] Creo la release e carico gli asset...
powershell -NoProfile -ExecutionPolicy Bypass -File "%UPLOADER%Crea-Release.ps1" -Owner "%OWNER%" -Repo "%REPO%" -Token "%TOKEN%" -Tag "v!APP_VER!" -AppVersion "!APP_VER!" -EditorVersion "!EDITOR_VER!" -EditorAsset "!EDITOR_ASSET!" -StagingDir "%STAGING%"
if errorlevel 1 (
    echo [ERRORE] Creazione release fallita.
    goto fail
)
echo [OK] Release pubblicata.
goto end

:fail
echo.
echo ============================================================
echo   OPERAZIONE ANNULLATA - correggi l'errore e riprova
echo ============================================================
pause
exit /b 1

:end
echo.
echo ============================================================
echo   TUTTO FATTO - ultima versione online!
echo ============================================================
echo   Sito:  https://%OWNER%.github.io/%REPO%/
echo   Release: https://github.com/%OWNER%/%REPO%/releases
echo.
pause
exit /b 0
