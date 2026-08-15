# Timeline Breaker Rewind — Sito ufficiale

Sito statico (HTML/CSS/JS) per GitHub Pages: pagina da cui si scaricano **solo i binari** (APK dell'app e ZIP dell'editor), **senza sorgenti**.

URL pubblicato: `https://hookslegacyteam.github.io/TBR-Timeline-Breaker-Rewind/`

## Struttura

```
├── index.html              → home con download di App ed Editor
├── guide-app.html          → guida installazione app Android
├── guide-editor.html       → guida avvio editor Windows
├── 404.html                → pagina di errore
├── data/versions.json      → versioni, date, pesi e nomi asset (DA AGGIORNARE)
├── assets/
│   ├── css/style.css
│   ├── js/main.js          → lingua IT/EN + caricamento versions.json
│   └── img/                → favicon e anteprime gameplay
├── uploader/               → script automatici (vedi sezione "Uploader automatico")
└── .github/workflows/pages.yml → deploy automatico su GitHub Pages
```

## Come si pubblica

1. Crea un repository GitHub chiamato `TBR-Timeline-Breaker-Rewind` (proprietà: **HooksLegacyTeam**).
2. Carica **il contenuto di questa cartella** come ramo `main` (non serve Git: trascina i file nella web UI).
3. Vai su **Settings → Pages** e imposta `Source: GitHub Actions`. Da quel momento ogni push pubblica il sito.
4. Il sito sarà visibile su `https://hookslegacyteam.github.io/TBR-Timeline-Breaker-Rewind/`.

## Come si crea una Release (il download "ultima versione")

I pulsanti puntano a:
`https://github.com/HooksLegacyTeam/TBR-Timeline-Breaker-Rewind/releases/latest/download/<nome-asset>`

Quindi il nome dei file caricati nella release **deve coincidere** con il campo `asset` in `data/versions.json`.

1. Vai su **Releases → Draft a new release**.
2. Crea un tag (es. `v1.0.0`).
3. Carica come asset:
   - l'APK dell'app rinominato `TimelineBreaker-Rewind_v1.15.0.apk`
   - lo ZIP dell'editor rinominato `StoryForge_Editor_v1.0.0_test_2026-08-08.zip`
4. Pubblica la release.

## Come si aggiornano versioni e link

A ogni nuova build, aggiorna `data/versions.json`:

| Campo | Cosa mettere |
|---|---|
| `editor.version` / `app.version` | versione da `pubspec.yaml` (es. `1.15.0`) |
| `editor.date` / `app.date` | data di build `YYYY-MM-DD` |
| `editor.sizeMB` / `app.sizeMB` | peso del file in MB |
| `editor.asset` / `app.asset` | **nome esatto** del file caricato nella Release |

Il sito legge questo file a runtime e aggiorna badge, date, pesi, elenchi di funzioni e link di download automaticamente. Se il file manca o la release non esiste, appare un avviso.

> Nota: l'app da distribuire è l'APK in `app/build/app/outputs/flutter-apk/app-release.apk` (da rinominare). L'editor è lo ZIP in `editor/dist/`.

## Uploader automatico (`.bat`)

Tutto in un click: aggiorna `data/versions.json`, carica il sito su GitHub e crea la Release con APK + ZIP.

```
uploader/
├── Crea_Release_E_Carica_Sito.bat   ← avvia l'uploader
├── Update-Versions.ps1              ← aggiorna versions.json (usato dal .bat)
├── Crea-Release.ps1                 ← crea la release e carica gli asset (usato dal .bat)
└── uploader_config.txt.example      ← modello per la configurazione
```

### Primo utilizzo

1. Genera un **Personal Access Token**: https://github.com/settings/tokens
   - "Tokens (classic)" → **Generate new token (classic)**
   - Seleziona il permesso **`repo`** (completo) e, se serve, **`workflow`**
   - Copia il token e incollalo nel campo `token=` di `uploader/uploader_config.txt`
     (il file NON va mai committato: è già escluso da `.gitignore`)
2. Doppio click su `Crea_Release_E_Carica_Sito.bat` e scegli:
   - **[1] Tutto**: aggiorna sito + crea Release (APK e ZIP)
   - **[2] Solo sito**: aggiorna versions.json e carica su GitHub
   - **[3] Solo Release**: crea/pubblica Release con APK e ZIP

Da riga di comando: `Crea_Release_E_Carica_Sito.bat all` (o `sito`, `release`).

### Cosa fa esattamente (modalità 1)

1. Legge le versioni da `app\pubspec.yaml` e `editor\pubspec.yaml`
2. Trova l'APK (`app-release.apk`) e lo ZIP più recente in `editor\dist`
3. Li copia rinominati nella cartella `staging` (temporanea, ignorata da git)
4. Aggiorna `data/versions.json` (versione, data, peso, nome asset)
5. Inizializza il repo se serve e fa `git add / commit / push` del sito su `main`
6. Crea la Release `v<versione-app>` con tag omonimo e carica APK + ZIP come asset
7. Se la release col tag esiste già, chiede se sovrascriverla (elimina e ricrea)

La prima volta il push può chiedere conferma se il ramo remoto diverge (conferma per forzare).

## Lingue

Default: italiano, con toggle IT/EN in alto a destra (memorizzato nel browser). Le traduzioni sono in `assets/js/main.js`; i testi dinamici (versioni, funzionalità) arrivano da `data/versions.json`.

## Immagini

Le anteprime nella home sono immagini di gioco WebP copiate da `app/assets/gameplay/`. Sostituiscile con veri screenshot quando disponibili (sempre WebP o JPG, tenute leggere).
