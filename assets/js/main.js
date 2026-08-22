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
    "nav.privacy": { it: "Privacy", en: "Privacy" },

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
    },

    /* ---- privacy / GDPR ---- */
    "nav.home": { it: "Home", en: "Home" },
    "privacy.breadcrumb.home": { it: "Home", en: "Home" },
    "privacy.breadcrumb.privacy": { it: "Privacy e GDPR", en: "Privacy & GDPR" },
    "privacy.title": { it: "Informativa sulla Privacy e Cookie Policy", en: "Privacy Policy and Cookie Policy" },
    "privacy.sub": { it: "Ultimo aggiornamento: 19 agosto 2026", en: "Last updated: August 19, 2026" },
    "privacy.controller.title": { it: "1. Titolare del Trattamento", en: "1. Data Controller" },
    "privacy.controller.p1": { it: "Hooks Legacy Team", en: "Hooks Legacy Team" },
    "privacy.controller.p2": { it: "Contatto: GitHub Issues", en: "Contact: GitHub Issues" },
    "privacy.data.title": { it: "2. Dati Raccolti", en: "2. Data Collected" },
    "privacy.data.intro": { it: "Questo sito raccoglie dati minimi e strettamente necessari al funzionamento:", en: "This site collects minimal data strictly necessary for its operation:" },
    "privacy.data.localStorage.title": { it: "localStorage", en: "localStorage" },
    "privacy.data.localStorage.p1": { it: "Il sito utilizza il localStorage del browser per memorizzare due preferenze:", en: "The site uses the browser localStorage to store two preferences:" },
    "privacy.data.fonts.title": { it: "Google Fonts", en: "Google Fonts" },
    "privacy.data.fonts.p1": { it: "Il sito utilizza Google Fonts per caricare i font Inter e Space Grotesk. Quando visiti il sito, il tuo indirizzo IP e le informazioni del browser vengono inviati ai server di Google per consegnare i font.", en: "The site uses Google Fonts to load the Inter and Space Grotesk fonts. When you visit the site, your IP address and browser information are sent to Google servers to deliver the fonts." },
    "privacy.data.noCookies.title": { it: "Cookie", en: "Cookies" },
    "privacy.data.noCookies.p1": { it: "Il sito non utilizza cookie di tracciamento ne cookie analitici. L'unico dato memorizzato nel browser e il consenso cookie (tbr-cookie-consent), che serve a ricordare se hai accettato o rifiutato l'uso di Google Fonts.", en: "The site does not use tracking cookies or analytics cookies. The only data stored in the browser is the cookie consent (tbr-cookie-consent), which remembers whether you accepted or declined Google Fonts." },
    "privacy.data.noAnalytics.title": { it: "Analytics e Tracciamento", en: "Analytics and Tracking" },
    "privacy.data.noAnalytics.p1": { it: "Il sito non utilizza Google Analytics, Facebook Pixel, o qualsiasi altro sistema di tracciamento o analisi delle visite.", en: "The site does not use Google Analytics, Facebook Pixel, or any other tracking or analytics system." },
    "privacy.data.noForms.title": { it: "Formulari", en: "Forms" },
    "privacy.data.noForms.p1": { it: "Il sito non contiene formulari di contatto, registrazione, login o invio di dati personali. Non vengono raccolte email, nomi, numeri di telefono o altre informazioni personali.", en: "The site does not contain contact, registration, login or personal data submission forms. No emails, names, phone numbers or other personal information are collected." },
    "privacy.purpose.title": { it: "3. Finalita del Trattamento", en: "3. Purpose of Processing" },
    "privacy.purpose.p1": { it: "I dati minimi raccolti vengono utilizzati esclusivamente per:", en: "The minimal data collected is used exclusively for:" },
    "privacy.purpose.1": { it: "Ricordare la preferenza linguistica — il valore tbr-lang in localStorage serve a mantenere la lingua scelta tra le visite.", en: "Remember language preference — the tbr-lang value in localStorage serves to maintain the chosen language between visits." },
    "privacy.purpose.2": { it: "Consegnare i font — Google Fonts serve a visualizzare correttamente la tipografia del sito.", en: "Deliver fonts — Google Fonts serves to correctly display the site typography." },
    "privacy.legal.title": { it: "4. Base Giuridica del Trattamento", en: "4. Legal Basis for Processing" },
    "privacy.legal.p1": { it: "Il trattamento si basa sul consenso dell'interessato (art. 6 par. 1 lettera a del Regolamento UE 2016/679) per quanto riguarda Google Fonts, espresso tramite il banner di consenso cookie. Il localStorage strettamente necessario al funzionamento (lingua e consenso) si basa sul legittimo interesse (art. 6 par. 1 lettera f).", en: "Processing is based on the data subject's consent (Art. 6(1)(a) of EU Regulation 2016/679) for Google Fonts, given via the cookie consent banner. localStorage strictly necessary for operation (language and consent) is based on legitimate interest (Art. 6(1)(f))." },
    "privacy.rights.title": { it: "5. Tuoi Diritti (GDPR)", en: "5. Your Rights (GDPR)" },
    "privacy.rights.intro": { it: "In conformita al Regolamento Europeo sulla Protezione dei Dati Personali (GDPR - Reg. UE 2016/679), hai diritto a:", en: "In accordance with the European General Data Protection Regulation (GDPR - Reg. EU 2016/679), you have the right to:" },
    "privacy.rights.1": { it: "Accesso (art. 15) — sapere se trattiamo i tuoi dati e ottenere una copia.", en: "Access (Art. 15) — know whether we process your data and obtain a copy." },
    "privacy.rights.2": { it: "Rettifica (art. 16) — correggere dati inesatti.", en: "Rectification (Art. 16) — correct inaccurate data." },
    "privacy.rights.3": { it: "Cancellazione (art. 17) — richiedere la cancellazione dei tuoi dati.", en: "Erasure (Art. 17) — request deletion of your data." },
    "privacy.rights.4": { it: "Limitazione (art. 18) — limitare il trattamento.", en: "Restriction (Art. 18) — restrict processing." },
    "privacy.rights.5": { it: "Portabilita (art. 20) — ricevere i tuoi dati in formato strutturato.", en: "Portability (Art. 20) — receive your data in a structured format." },
    "privacy.rights.6": { it: "Opposizione (art. 21) — opporsi al trattamento.", en: "Objection (Art. 21) — object to processing." },
    "privacy.rights.7": { it: "Reclamo (art. 77) — presentare reclamo al Garante per la Protezione dei Dati Personali.", en: "Complaint (Art. 77) — lodge a complaint with the Data Protection Authority." },
    "privacy.retention.title": { it: "6. Periodo di Conservazione", en: "6. Data Retention Period" },
    "privacy.retention.p1": { it: "I dati tbr-lang e tbr-cookie-consent vengono conservati nel tuo browser fino a quando non li cancelli manualmente, o fino a quando non cancelli i dati del sito dal tuo browser. Non esiste alcun server che conserva i tuoi dati.", en: "The tbr-lang and tbr-cookie-consent data is stored in your browser until you manually delete it, or until you clear the site data from your browser. There is no server that stores your data." },
    "privacy.transfer.title": { it: "7. Trasferimento Dati Extra-UE", en: "7. Extra-EU Data Transfer" },
    "privacy.transfer.p1": { it: "Google Fonts puo comportare il trasferimento dell'indirizzo IP verso server situati negli Stati Uniti. Google ha aderito al framework EU-US Data Privacy Framework (Decisione di adeguatezza del 10 luglio 2023).", en: "Google Fonts may involve transferring your IP address to servers located in the United States. Google has adhered to the EU-US Data Privacy Framework (Adequacy Decision of July 10, 2023)." },
    "privacy.minors.title": { it: "8. Minori", en: "8. Minors" },
    "privacy.minors.p1": { it: "Il sito non e diretto a minori di 16 anni e non raccoglie intenzionalmente dati personali di minori. Se ritieni che un minore abbia fornito dati personali, contattaci immediatamente.", en: "The site is not directed to minors under 16 and does not intentionally collect personal data from minors. If you believe a minor has provided personal data, contact us immediately." },
    "privacy.changes.title": { it: "9. Modifiche alla Presente Informativa", en: "9. Changes to This Policy" },
    "privacy.changes.p1": { it: "Ci riserviamo il diritto di aggiornare questa informativa. Le modifiche verranno pubblicate su questa pagina con la data di ultimo aggiornamento in alto.", en: "We reserve the right to update this policy. Changes will be published on this page with the last updated date at the top." },
    "privacy.contact.title": { it: "10. Contatti", en: "10. Contacts" },
    "privacy.contact.p1": { it: "Per qualsiasi domanda relativa alla privacy o per esercitare i tuoi diritti, apri un'issue su GitHub.", en: "For any privacy-related questions or to exercise your rights, open an issue on GitHub." },
    "privacy.back": { it: "Torna alla home", en: "Back to home" },

    /* ---- cookie banner ---- */
    "cookie.title": { it: "Questo sito utilizza Google Fonts", en: "This site uses Google Fonts" },
    "cookie.text": {
      it: "Il sito utilizza Google Fonts (Inter, Space Grotesk) per caricare la tipografia. Quando visiti il sito, il tuo indirizzo IP viene inviato ai server di Google. Nessun altro cookie o tracciamento e utilizzato.",
      en: "The site uses Google Fonts (Inter, Space Grotesk) to load typography. When you visit the site, your IP address is sent to Google servers. No other cookies or tracking are used."
    },
    "cookie.accept": { it: "Accetta", en: "Accept" },
    "cookie.decline": { it: "Rifiuta", en: "Decline" },
    "cookie.settings": { it: "Impostazioni", en: "Settings" },
    "cookie.detail.title": { it: "Dettagli", en: "Details" },
    "cookie.detail.fonts": { it: "<strong>Google Fonts</strong> — font Inter e Space Grotesk. Invia il tuo IP a Google.", en: "<strong>Google Fonts</strong> — Inter and Space Grotesk fonts. Sends your IP to Google." },
    "cookie.detail.local": { it: "<strong>localStorage</strong> — preferenza lingua e consenso cookie. Nessun dato lascia il tuo browser.", en: "<strong>localStorage</strong> — language preference and cookie consent. No data leaves your browser." },
    "cookie.detail.no": { it: "Nessun analytics, nessun tracciamento, nessun altro cookie.", en: "No analytics, no tracking, no other cookies." },
    "cookie.manage": { it: "Gestisci consenso", en: "Manage consent" },

    /* ---- changelog ---- */
    "cl.breadcrumb": { it: "Aggiornamenti", en: "Updates" },
    "cl.title": { it: "Cronologia Aggiornamenti", en: "Update History" },
    "cl.sub": { it: "Tutte le versioni rilasciate di Timeline Breaker Rewind e Story Forge.", en: "All released versions of Timeline Breaker Rewind and Story Forge." },
    "cl.tag.both": { it: "App + Editor", en: "App + Editor" },
    "cl.tag.app": { it: "App", en: "App" },
    "cl.tag.editor": { it: "Editor", en: "Editor" },
    "cl.app": { it: "App", en: "App" },
    "cl.editor": { it: "Editor", en: "Editor" },
    "cl.v118.app.1": { it: "Supporto multilingue per 5 lingue: italiano, inglese, spagnolo, tedesco e francese", en: "Multilingual support for 5 languages: Italian, English, Spanish, German and French" },
    "cl.v118.app.2": { it: "Bugfix per DeadEnd", en: "Bugfix for DeadEnd" },
    "cl.v118.app.3": { it: "Bugfix commenti al ritorno alla home e continuando la storia", en: "Bugfix comments when returning to home and continuing the story" },
    "cl.v118.ed.1": { it: "Bugfix sulla traduzione automatica", en: "Bugfix on automatic translation" },
    "cl.v118.ed.2": { it: "Storyboard: nuove maniglie per movimento frecce e area infinita per posizionare le schede", en: "Storyboard: new arrow handles and infinite area for card placement" },
    "cl.v118.ed.3": { it: "Foto: le nuove foto vengono importate con tag NEW ed e possibile usare il filtro per vedere solo quelle", en: "Photos: new photos imported with NEW tag and dedicated filter" },
    "cl.v118.ed.4": { it: "I post permettono piu dead end che vengono anche evidenziati in grigio", en: "Posts support multiple dead ends highlighted in gray" },
    "cl.v118.ed.5": { it: "Fix grafici e di posizionamento dei campi di input", en: "Graphics and input field positioning fixes" },
    "cl.v119.app.1": { it: "Piccole modifiche all'interfaccia grafica", en: "Small UI tweaks" },
    "cl.v119.app.2": { it: "Aggiornati i bottoni ai Social", en: "Updated social buttons" },
    "cl.v119.app.3": { it: "Nuovi commenti nelle stories e fix su un post della storia principale", en: "New comments in stories and fix on a main story post" },
    "cl.v119.ed.1": { it: "Bugfix sulla gestione della traduzione automatica con LLM", en: "Bugfix on automatic translation management with LLM" },
    "cl.v119.ed.2": { it: "Ora e possibile muovere i Commenti nell'ordine", en: "Comments can now be reordered" },
    "cl.v117.1": { it: "Aggiornamento generale di stabilita e prestazioni", en: "General stability and performance update" },
    "cl.v116.1": { it: "Prima release pubblica dell'app Timeline Breaker Rewind", en: "First public release of the Timeline Breaker Rewind app" },
    "cl.v116.2": { it: "Feed social interattivo con post, commenti e transizioni", en: "Interactive social feed with posts, comments and transitions" },
    "cl.v116.3": { it: "Funzione Rewind per tornare indietro nel tempo", en: "Rewind function to go back in time" },
    "cl.v116.4": { it: "Importazione storie .sfpkg", en: ".sfpkg story import" },
    "cl.v100.1": { it: "Prima release dell'editor Story Forge", en: "First release of the Story Forge editor" },
    "cl.v100.2": { it: "Editor di post, commenti e transizioni con grafo delle storie", en: "Post, comments and transitions editor with a story graph" },
    "cl.v100.3": { it: "Storyboard interattivo con drag and drop", en: "Interactive storyboard with drag and drop" },
    "cl.v100.4": { it: "Workbench LLM per bozze assistite da AI", en: "LLM Workbench for AI-assisted drafts" },
    "cl.v100.5": { it: "Esportazione pacchetti .sfpkg", en: ".sfpkg pack export" },
    "nav.changelog": { it: "Aggiornamenti", en: "Updates" }
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
        el.innerHTML = I18N[key][lang];
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

  /* ---- cookie consent ---- */
  var CONSENT_KEY = "tbr-cookie-consent";
  var CONSENT_VALUE = "accepted";
  var DECLINED_VALUE = "declined";

  function getConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }

  function setConsent(val) {
    try { localStorage.setItem(CONSENT_KEY, val); } catch (e) {}
  }

  function loadGoogleFonts() {
    if (document.getElementById("gfonts-consent")) return;
    var pre1 = document.createElement("link");
    pre1.rel = "preconnect";
    pre1.href = "https://fonts.googleapis.com";
    document.head.appendChild(pre1);
    var pre2 = document.createElement("link");
    pre2.rel = "preconnect";
    pre2.href = "https://fonts.gstatic.com";
    pre2.crossOrigin = "anonymous";
    document.head.appendChild(pre2);
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap";
    link.id = "gfonts-consent";
    document.head.appendChild(link);
  }

  function removeGoogleFonts() {
    var el = document.getElementById("gfonts-consent");
    if (el) el.remove();
    document.querySelectorAll('link[href*="fonts.googleapis.com"], link[href*="fonts.gstatic.com"]').forEach(function(l) { l.remove(); });
  }

  function buildCookieBanner() {
    if (document.getElementById("cookie-banner")) return;
    var banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.className = "cookie-banner";
    banner.innerHTML =
      '<div class="cookie-banner-inner">' +
        '<div class="cookie-banner-text">' +
          '<strong data-i18n="cookie.title">' + (I18N["cookie.title"][currentLang]) + '</strong>' +
          '<span data-i18n="cookie.text">' + (I18N["cookie.text"][currentLang]) + '</span>' +
          '<button type="button" class="cookie-detail-toggle" id="cookieDetailToggle" data-i18n="cookie.detail.title">' + (I18N["cookie.detail.title"][currentLang]) + '</button>' +
          '<div class="cookie-details" id="cookieDetails" style="display:none">' +
            '<ul>' +
              '<li data-i18n="cookie.detail.fonts">' + (I18N["cookie.detail.fonts"][currentLang]) + '</li>' +
              '<li data-i18n="cookie.detail.local">' + (I18N["cookie.detail.local"][currentLang]) + '</li>' +
              '<li data-i18n="cookie.detail.no">' + (I18N["cookie.detail.no"][currentLang]) + '</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="cookie-banner-actions">' +
          '<button type="button" class="btn cookie-accept" id="cookieAccept" data-i18n="cookie.accept">' + (I18N["cookie.accept"][currentLang]) + '</button>' +
          '<button type="button" class="btn cookie-decline" id="cookieDecline" data-i18n="cookie.decline">' + (I18N["cookie.decline"][currentLang]) + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);

    document.getElementById("cookieAccept").addEventListener("click", function () {
      setConsent(CONSENT_VALUE);
      loadGoogleFonts();
      banner.remove();
    });
    document.getElementById("cookieDecline").addEventListener("click", function () {
      setConsent(DECLINED_VALUE);
      removeGoogleFonts();
      banner.remove();
    });
    document.getElementById("cookieDetailToggle").addEventListener("click", function () {
      var det = document.getElementById("cookieDetails");
      det.style.display = det.style.display === "none" ? "block" : "none";
    });
  }

  function showManageConsentButton() {
    if (document.getElementById("manageConsentBtn")) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.id = "manageConsentBtn";
    btn.className = "manage-consent-btn";
    btn.textContent = I18N["cookie.manage"][currentLang] || "Manage consent";
    btn.addEventListener("click", function () {
      setConsent(null);
      removeGoogleFonts();
      buildCookieBanner();
    });
    document.body.appendChild(btn);
  }

  /* ---- init ---- */
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.dataset.lang);
      });
    });

    applyLang(detectLang());

    /* cookie consent */
    var consent = getConsent();
    if (consent === CONSENT_VALUE) {
      loadGoogleFonts();
      showManageConsentButton();
    } else if (consent === DECLINED_VALUE) {
      removeGoogleFonts();
      showManageConsentButton();
    } else {
      buildCookieBanner();
    }

    loadVersions();
    initGallery();
  });
})();
