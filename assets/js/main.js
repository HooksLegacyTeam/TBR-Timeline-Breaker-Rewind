/* Timeline Breaker Rewind — sito ufficiale
   Gestione lingua (IT/EN) + caricamento versioni da data/versions.json */

(function () {
  "use strict";

  const FALLBACK_REPO = "HooksLegacyTeam/TBR-Timeline-Breaker-Rewind";

  const I18N = {
    /* ---- comune ---- */
    "nav.app": { it: "App", en: "App" },
    "nav.editor": { it: "Editor", en: "Editor" },
    "nav.guideApp": { it: "Guida App", en: "App Guide" },
    "nav.guideEditor": { it: "Guida Editor", en: "Editor Guide" },
    "nav.how": { it: "Come funziona", en: "How it works" },

    /* ---- hero ---- */
    "hero.badge": { it: "Ultima versione disponibile", en: "Latest version available" },
    "hero.title.line1": { it: "Il tempo si è rotto.", en: "Time is broken." },
    "hero.title.line2": { it: "Riscrivi la storia.", en: "Rewrite the timeline." },
    "hero.tagline": {
      it: "Timeline Breaker Rewind è un gioco di viaggi nel tempo nascosto in un feed social: scorri, commenta e cambia il destino.",
      en: "Timeline Breaker Rewind is a time-travel game hidden inside a social feed: scroll, comment and change fate."
    },
    "hero.cta.app": { it: "Scarica l'App", en: "Download the App" },
    "hero.cta.editor": { it: "Scarica l'Editor", en: "Download the Editor" },
    "hero.meta": {
      it: "App Android · Editor Windows · Solo download ufficiali",
      en: "Android App · Windows Editor · Official downloads only"
    },

    /* ---- app ---- */
    "app.eyebrow": { it: "Il gioco", en: "The Game" },
    "app.title": { it: "Timeline Breaker Rewind", en: "Timeline Breaker Rewind" },
    "app.sub": {
      it: "Un feed social che nasconde un gioco: ogni post è un evento, ogni commento cambia il futuro.",
      en: "A social feed that hides a game: every post is an event, every comment changes the future."
    },
    "app.featuresTitle": { it: "Cosa puoi fare", en: "What you can do" },
    "app.downloadTitle": { it: "Ultima versione", en: "Latest version" },
    "app.verLabel": { it: "Versione", en: "Version" },
    "app.dateLabel": { it: "Data", en: "Date" },
    "app.sizeLabel": { it: "Peso", en: "Size" },
    "app.platformLabel": { it: "Piattaforma", en: "Platform" },
    "app.dl": { it: "Scarica l'APK", en: "Download the APK" },
    "app.dlNote": {
      it: "Installabile su Android 7.0 o successivo. Puoi ricevere storie .sfpkg dai tuoi amici.",
      en: "Installable on Android 7.0 or later. You can receive .sfpkg stories from your friends."
    },
    "app.guideLink": { it: "Guida all'installazione", en: "Installation guide" },
    "app.android": { it: "Android", en: "Android" },

    /* ---- editor ---- */
    "editor.eyebrow": { it: "Lo strumento", en: "The Tool" },
    "editor.title": { it: "Story Forge", en: "Story Forge" },
    "editor.sub": {
      it: "L'editor desktop per creare, tradurre ed esportare le storie di Timeline Breaker Rewind.",
      en: "The desktop editor to create, translate and export Timeline Breaker Rewind stories."
    },
    "editor.downloadTitle": { it: "Ultima versione", en: "Latest version" },
    "editor.verLabel": { it: "Versione", en: "Version" },
    "editor.dateLabel": { it: "Data", en: "Date" },
    "editor.sizeLabel": { it: "Peso", en: "Size" },
    "editor.platformLabel": { it: "Piattaforma", en: "Platform" },
    "editor.dl": { it: "Scarica per Windows", en: "Download for Windows" },
    "editor.dlNote": {
      it: "ZIP autoconsistente: estrai ed esegui story_forge.exe, nessuna installazione.",
      en: "Self-contained ZIP: extract and run story_forge.exe, no install needed."
    },
    "editor.guideLink": { it: "Guida all'avvio", en: "Getting started" },
    "editor.windows": { it: "Windows", en: "Windows" },

    /* ---- come funziona ---- */
    "how.eyebrow": { it: "Come funziona", en: "How it works" },
    "how.title": { it: "Scorri. Commenta. Cambia il destino.", en: "Scroll. Comment. Change fate." },
    "how.sub": {
      it: "Il loop di gioco è lo stesso dei social che già usi ogni giorno.",
      en: "The gameplay loop is the same as the social apps you already use daily."
    },
    "how.s1.title": { it: "Scorri il feed", en: "Scroll the feed" },
    "how.s1.text": {
      it: "Ogni gesto rivela l'evento successivo nella timeline.",
      en: "Every gesture reveals the next event in the timeline."
    },
    "how.s2.title": { it: "Commenta l'evento", en: "Comment on the event" },
    "how.s2.text": {
      it: "Scegli una reazione: il tuo commento non è decorativo.",
      en: "Pick a reaction: your comment is not decorative."
    },
    "how.s3.title": { it: "L'effetto farfalla", en: "The butterfly effect" },
    "how.s3.text": {
      it: "Piccole scelte generano conseguenze inaspettate.",
      en: "Small choices create unexpected consequences."
    },
    "how.s4.title": { it: "Riavvolgi e riprova", en: "Rewind and retry" },
    "how.s4.text": {
      it: "Riavvolgi la timeline e affronta di nuovo le tue decisioni.",
      en: "Rewind the timeline and face your decisions again."
    },

    /* ---- footer ---- */
    "footer.desc": {
      it: "Un gioco di viaggi nel tempo nascosto in un feed social, e l'editor per creare nuove storie.",
      en: "A time-travel game hidden in a social feed, and the editor to create new stories."
    },
    "footer.linksTitle": { it: "Link", en: "Links" },
    "footer.downloadsTitle": { it: "Download", en: "Downloads" },
    "footer.rights": {
      it: "© 2026 Hooks Legacy Team · Timeline Breaker Rewind e Story Forge",
      en: "© 2026 Hooks Legacy Team · Timeline Breaker Rewind and Story Forge"
    },

    /* ---- guida app ---- */
    "guideApp.title": { it: "Installa l'App", en: "Install the App" },
    "guideApp.sub": {
      it: "Come installare Timeline Breaker Rewind sul tuo telefono Android.",
      en: "How to install Timeline Breaker Rewind on your Android phone."
    },
    "guideApp.s1.title": { it: "1 · Scarica l'APK", en: "1 · Download the APK" },
    "guideApp.s1.text": {
      it: "Scarica il file .apk dalla sezione App della home page. Puoi aprire il sito dal telefono e toccare il pulsante di download.",
      en: "Download the .apk file from the App section of the home page. Open the site on your phone and tap the download button."
    },
    "guideApp.s2.title": { it: "2 · Consenti origini sconosciute", en: "2 · Allow unknown sources" },
    "guideApp.s2.text": {
      it: "Android ti chiederà il permesso di installare app da fonti sconosciute. Tocca Impostazioni e abilitalo per il browser o l'app file che stai usando.",
      en: "Android will ask for permission to install apps from unknown sources. Tap Settings and enable it for the browser or file app you are using."
    },
    "guideApp.s3.title": { it: "3 · Installa il file", en: "3 · Install the file" },
    "guideApp.s3.text": {
      it: "Apri il file .apk scaricato e conferma l'installazione. Potresti vedere un avviso di app non firmata: è normale per le build di test, tocca Installa comunque.",
      en: "Open the downloaded .apk file and confirm the installation. You may see an unsigned-app warning: that is normal for test builds, tap Install anyway."
    },
    "guideApp.s4.title": { it: "4 · Gioca e importa storie", en: "4 · Play and import stories" },
    "guideApp.s4.text": {
      it: "Avvia l'app e scegli un account. Per giocare storie create con Story Forge, apri un file .sfpkg dal telefono (Download, WhatsApp o Telegram) e seleziona Timeline Breaker Rewind.",
      en: "Launch the app and pick an account. To play stories created with Story Forge, open a .sfpkg file on your phone (Download, WhatsApp or Telegram) and select Timeline Breaker Rewind."
    },
    "guideApp.req.title": { it: "Requisiti", en: "Requirements" },
    "guideApp.req.1": { it: "Android 7.0 (API 24) o successivo", en: "Android 7.0 (API 24) or later" },
    "guideApp.req.2": { it: "Circa 60 MB di spazio libero", en: "About 60 MB of free space" },
    "guideApp.req.3": {
      it: "Nessuna connessione internet necessaria: le storie incluse sono nel pacchetto",
      en: "No internet connection required: the bundled stories are included"
    },
    "guideApp.tip.1": {
      it: "Le storie .sfpkg importate si possono eliminare dal menu iniziale. Le storie incluse nell'app non si eliminano.",
      en: "Imported .sfpkg stories can be deleted from the start menu. The stories bundled with the app cannot be deleted."
    },
    "guideApp.warn.1": {
      it: "Disinstallare l'app elimina salvataggi e progressi presenti sul dispositivo.",
      en: "Uninstalling the app deletes saves and progress stored on the device."
    },
    "guideApp.back": { it: "← Torna alla home", en: "← Back to home" },

    /* ---- guida editor ---- */
    "guideEditor.title": { it: "Avvia Story Forge", en: "Run Story Forge" },
    "guideEditor.sub": {
      it: "Come aprire l'editor su Windows e creare il tuo primo pacchetto.",
      en: "How to open the editor on Windows and create your first pack."
    },
    "guideEditor.s1.title": { it: "1 · Scarica e estrai", en: "1 · Download and extract" },
    "guideEditor.s1.text": {
      it: "Scarica lo ZIP dalla sezione Editor della home page, poi estrai l'intera cartella. Non avviare mai il programma dentro lo ZIP.",
      en: "Download the ZIP from the Editor section of the home page, then extract the whole folder. Never run the program from inside the ZIP."
    },
    "guideEditor.s2.title": { it: "2 · Avvia story_forge.exe", en: "2 · Launch story_forge.exe" },
    "guideEditor.s2.text": {
      it: "Entra nella cartella estratta e fai doppio click su story_forge.exe. Non spostare i file singolarmente: l'eseguibile, le DLL e la cartella data devono restare insieme.",
      en: "Open the extracted folder and double-click story_forge.exe. Do not move files individually: the executable, the DLLs and the data folder must stay together."
    },
    "guideEditor.s3.title": { it: "3 · SmartScreen: esegui comunque", en: "3 · SmartScreen: run anyway" },
    "guideEditor.s3.text": {
      it: "Windows potrebbe mostrare «Editore sconosciuto». Clicca Ulteriori informazioni e poi Esegui comunque. È normale: l'eseguibile non è firmato, è una build di test.",
      en: "Windows may show “Unknown publisher”. Click More info, then Run anyway. This is normal: the executable is unsigned, it is a test build."
    },
    "guideEditor.s4.title": { it: "4 · Crea ed esporta una storia", en: "4 · Create and export a story" },
    "guideEditor.s4.text": {
      it: "Usa l'editor per scrivere post, commenti e transizioni. Con Export crei un pacchetto .sfpkg da inviare a chi gioca sul telefono.",
      en: "Use the editor to write posts, comments and transitions. With Export you create a .sfpkg pack to send to anyone playing on a phone."
    },
    "guideEditor.req.title": { it: "Requisiti", en: "Requirements" },
    "guideEditor.req.1": { it: "Windows 10 o 11 a 64 bit", en: "Windows 10 or 11, 64-bit" },
    "guideEditor.req.2": { it: "Circa 50 MB di spazio libero", en: "About 50 MB of free space" },
    "guideEditor.req.3": {
      it: "Nessuna installazione: Python, Dart e i runtime sono già inclusi nella cartella",
      en: "No installation: Python, Dart and the runtimes are already included in the folder"
    },
    "guideEditor.tip.1": {
      it: "La lingua dell'interfaccia segue il sistema: se è in inglese, i menu si vedranno in inglese.",
      en: "The interface language follows the system: if it is English, menus will show in English."
    },
    "guideEditor.warn.1": {
      it: "Le modifiche non salvate vengono perse alla chiusura: l'editor chiede conferma se ci sono file non salvati.",
      en: "Unsaved changes are lost on close: the editor asks for confirmation if there are unsaved files."
    },
    "guideEditor.back": { it: "← Torna alla home", en: "← Back to home" },

    /* ---- 404 ---- */
    "nf.title": { it: "Timeline spezzata", en: "Timeline broken" },
    "nf.text": {
      it: "La pagina che cerchi non esiste in questa linea temporale.",
      en: "The page you are looking for does not exist in this timeline."
    },
    "nf.btn": { it: "Torna alla home", en: "Back to home" },

    /* ---- toast ---- */
    "toast.release": {
      it: "La release non è ancora pubblicata su GitHub. Riprova più tardi.",
      en: "The release is not published on GitHub yet. Try again later."
    }
  };

  /* Esposto per wiki-i18n.js (caricato dopo) */
  window.I18N = I18N;

  let currentLang = "it";

  function detectLang() {
    var saved = null;
    try {
      saved = localStorage.getItem("tbr-lang");
    } catch (e) {
      saved = null;
    }
    if (saved === "it" || saved === "en") return saved;
    return (navigator.language || "").toLowerCase().startsWith("en") ? "en" : "it";
  }

  function applyLang(lang) {
    currentLang = lang;
    try {
      localStorage.setItem("tbr-lang", lang);
    } catch (e) {
      /* ignore */
    }
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (I18N[key] && I18N[key][lang]) {
        el.textContent = I18N[key][lang];
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr");
      spec.split(",").forEach(function (pair) {
        var parts = pair.split(":");
        var attr = parts[0];
        var key = parts.slice(1).join(":");
        if (I18N[key] && I18N[key][lang]) {
          el.setAttribute(attr, I18N[key][lang]);
        }
      });
    });

    document.querySelectorAll("[data-i18n-replace]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-replace");
      if (I18N[key] && I18N[key][lang]) {
        el.innerHTML = I18N[key][lang];
      }
    });

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    renderVersions();
  }

  /* ---- versioni ---- */
  var VERSIONS = null;

  function versionInfo(which, lang) {
    var v = VERSIONS[which];
    return {
      version: v.version,
      date: formatDate(v.date, lang),
      size: v.sizeMB.toLocaleString(lang, { maximumFractionDigits: 1 }) + " MB",
      platform: v.platform,
      href: "https://github.com/" + (VERSIONS.repo || FALLBACK_REPO) + "/releases/latest/download/" + v.asset,
      releaseHref: "https://github.com/" + (VERSIONS.repo || FALLBACK_REPO) + "/releases/latest",
      features: v.features[lang] || v.features.it
    };
  }

  function formatDate(iso, lang) {
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString(lang === "en" ? "en-GB" : "it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  }

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function renderVersions() {
    if (!VERSIONS) return;
    var lang = currentLang;

    if (VERSIONS.app) {
      var a = versionInfo("app", lang);
      setText("appVersion", a.version);
      setText("appDate", a.date);
      setText("appSize", a.size);
      setText("appPlatform", I18N["app.android"][lang]);
      var btnApp = document.getElementById("appDownload");
      if (btnApp) btnApp.href = a.href;
      var featsApp = document.getElementById("appFeatures");
      if (featsApp) {
        featsApp.innerHTML = a.features
          .map(function (f) { return '<li><span class="check check-app">✓</span>' + f + "</li>"; })
          .join("");
      }
    }

    if (VERSIONS.editor) {
      var e = versionInfo("editor", lang);
      setText("editorVersion", e.version);
      setText("editorDate", e.date);
      setText("editorSize", e.size);
      setText("editorPlatform", I18N["editor.windows"][lang]);
      var btnEditor = document.getElementById("editorDownload");
      if (btnEditor) btnEditor.href = e.href;
      var featsEditor = document.getElementById("editorFeatures");
      if (featsEditor) {
        featsEditor.innerHTML = e.features
          .map(function (f) { return '<li><span class="check check-editor">✓</span>' + f + "</li>"; })
          .join("");
      }
    }
  }

  function loadVersions() {
    fetch("data/versions.json", { cache: "no-store" })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function (data) {
        VERSIONS = data;
        renderVersions();
      })
      .catch(function () {
        showToast(I18N["toast.release"][currentLang] || "Release not ready yet.");
      });
  }

  /* ---- toast ---- */
  var toastTimer = null;
  function showToast(msg) {
    var el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove("show");
    }, 4200);
  }

  /* ---- gallery telefono ---- */
  function initGallery() {
    var imgs = document.querySelectorAll(".phone-screen img");
    var dots = document.querySelectorAll(".phone-dots button");
    if (!imgs.length) return;

    var idx = 0;
    var timer = setInterval(next, 3600);

    function show(i) {
      idx = (i + imgs.length) % imgs.length;
      imgs.forEach(function (img, k) {
        img.classList.toggle("active", k === idx);
      });
      dots.forEach(function (d, k) {
        d.classList.toggle("active", k === idx);
      });
    }

    function next() {
      show(idx + 1);
    }

    dots.forEach(function (d, k) {
      d.addEventListener("click", function () {
        show(k);
        clearInterval(timer);
        timer = setInterval(next, 3600);
      });
    });

    show(0);
  }

  /* ---- init ---- */
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.dataset.lang);
      });
    });

    applyLang(detectLang());
    loadVersions();
    initGallery();
  });
})();
