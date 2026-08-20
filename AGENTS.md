# AGENTS.md — Time Travel Game / Site

## Project Overview

- **Repo**: `HooksLegacyTeam/TBR-Timeline-Breaker-Rewind` (GitHub Pages)
- **Site URL**: `https://hookslegacyteam.github.io/TBR-Timeline-Breaker-Rewind/`
- **App**: Android APK — `TimelineBreaker-Rewind_vX.Y.Z.apk`
- **Editor**: Windows desktop — `StoryForge_Editor_vX.Y.Z_test_YYYY-MM-DD.zip`
- **Languages**: IT (default) / EN toggle via i18n system (`data-i18n` + `main.js`)
- **Source code** lives in `C:\Users\danie\Desktop\PYTHON\TIME TRAVEL GAME\app\` and `editor\`
- **Site** lives in `C:\Users\danie\Desktop\PYTHON\TIME TRAVEL GAME\Site\`

## Build & Release Workflow

### Step 1: Build Editor

```
"C:\Users\danie\Desktop\PYTHON\TIME TRAVEL GAME\editor\Crea_Pacchetto_Editor.bat" package
```

- Takes the existing `flutter build windows --release` output from `editor\build\windows\x64\runner\Release\`
- Copies it to `editor\dist\package\`
- Adds VC++ runtime DLLs, LEGGIMI.txt
- Compresses to `editor\dist\StoryForge_Editor_vX.Y.Z_test_YYYY-MM-DD.zip`

If you need a fresh build first:
```
"C:\Users\danie\Desktop\PYTHON\TIME TRAVEL GAME\editor\Crea_Pacchetto_Editor.bat" build
```

### Step 2: Update Site

1. Update `Site/data/versions.json` with new version, date, asset name, sizeMB
2. Update fallback versions in `Site/index.html` (search for old version numbers)
3. Commit and push:
   ```
   cd "C:\Users\danie\Desktop\PYTHON\TIME TRAVEL GAME\Site"
   git add -A && git commit -m "Update to vX.Y.Z" && git push
   ```

### Step 3: Create GitHub Release

Upload APK + ZIP via GitHub API. The release body includes download links.

- Token: stored in `uploader/uploader_config.txt` (not committed)
- Tag format: `vX.Y.Z`
- APK source: `app\build\app\outputs\flutter-apk\app-release.apk`
- ZIP source: `editor\dist\StoryForge_Editor_vX.Y.Z_test_YYYY-MM-DD.zip`

Or use the all-in-one script:
```
"C:\Users\danie\Desktop\PYTHON\TIME TRAVEL GAME\Site\uploader\Crea_Release_E_Carica_Sito.bat" all
```

## Key Files

| File | Purpose |
|------|---------|
| `Site/index.html` | Home page with download cards |
| `Site/data/versions.json` | Version metadata loaded by `main.js` |
| `Site/assets/js/main.js` | i18n system (`innerHTML`), version loading, lang toggle |
| `Site/assets/js/wiki-i18n.js` | Wiki page i18n dictionary (~385 keys, IT/EN) |
| `Site/assets/js/wiki.js` | TOC scroll-spy + back-to-top |
| `Site/assets/css/style.css` | Main site theme (dark, brand vars) |
| `Site/assets/css/wiki.css` | Wiki-specific styles |
| `Site/guide-editor.html` | Wiki manual (17 sections) |
| `Site/guide-app.html` | App installation guide |
| `Site/privacy.html` | GDPR privacy policy |
| `Site/404.html` | Custom 404 |
| `Site/uploader/` | Upload automation scripts |

## Important Conventions

- **i18n**: All translatable text uses `data-i18n="key"` + `main.js` I18N dictionary
- **innerHTML**: `applyLang()` uses `innerHTML` (not `textContent`) to preserve `<strong>`, `<code>`, etc.
- **Script load order**: `main.js` → `wiki-i18n.js` → `wiki.js`
- **Brand colors**: seed `#5B3DF5` (violet), accent `#FF3DF5` (magenta)
- **No cookies, no analytics, no forms** — only `localStorage` (`tbr-lang`)
- Git identity: `user.name=HooksLegacyTeam`, `user.email=HooksLegacyTeam@users.noreply.github.com`
- `uploader_config.txt` is `.gitignored` — never commit it
