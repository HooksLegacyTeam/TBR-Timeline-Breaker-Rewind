# Cartella `assets/gameplay`

Qui vive il contenuto di gioco (file di gameplay + foto). Convenzioni da rispettare.

## Struttura

```
assets/gameplay/
├── manifest.json              ← elenco degli account disponibili
└── <account_id>/
    ├── story.json             ← file di gameplay della storia
    ├── avatar.webp            ← foto profilo dell'account
    └── <post_id>.webp         ← foto del post (es. p001.webp)
```

## Come devono chiamarsi le foto

- Formato: **WebP** (es. `p001.webp`), rapporti consigliati `4:5` (feed) o `9:16` (storia).
- Il nome file deve essere **identico al campo `image` del post** dentro `story.json`
  (es. se il post ha `"image": "p001.webp"`, il file si chiama `p001.webp`).
- I file `manifest.json` e `story.json` non vanno rinominati.
- Finché una foto manca, l'app mostra un **placeholder con il nome del file atteso**.

## Per aggiungere un nuovo account

1. Crea la cartella `assets/gameplay/<nuovo_id>/`
2. Copia `story.json` da `luna_voyager` e modificalo (post, transizioni, commenti)
3. Aggiungi `<nuovo_id>` alla lista `"accounts"` in `manifest.json`
4. Inserisci le foto con i nomi definiti in `story.json`
