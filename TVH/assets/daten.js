/* ==============================================================
   TVH · ZENTRALE DATEN — HIER ALLES PFLEGEN
   ==============================================================
   Diese eine Datei steuert alle wiederkehrenden Inhalte der
   Website. Etwas hier ändern + speichern = es ändert sich
   automatisch auf ALLEN Seiten, auf denen es eingebunden ist.

   INHALT
   1. NEWS      → „Aktuelles" (1. groß + alle als Liste) und die
                  3 neuesten auf der Startseite. Jede News hat
                  einen Link zur Berichtseite.
   2. TRAINING  → alle Trainingszeiten-Tabellen + Footer
   3. TEAMS     → Kurzinfos auf den Team-Karten
   4. HALLEN    → Spielstätten auf der Seite „Volleyball"
   5. TERMINE   → „Heimspiele & Termine" auf der Seite „Aktuelles"
   6. TICKER    → Laufband ganz oben auf der Startseite
   7. KONTAKT   → Adresse & Links im Footer (alle Seiten)
   8. FAQ       → Fragen-Blöcke (Volleyball + Mitglied werden)
   9. HERREN    → Steckbrief, nächstes Heimspiel, Kader,
                  Trainerteam, letzte Ergebnisse
  10. MIXED     → Steckbrief, nächster Spieltermin, Trainerteam
  11. TARIFE    → Beitrags-Karten auf „Mitglied werden"

   TIPPS
   – Text immer zwischen die Anführungszeichen "..." schreiben.
   – Eine Zeile (= ein Eintrag) endet meist mit },
   – Einträge löschen: die ganze Zeile { ... }, entfernen.
   – Neue Einträge: eine bestehende Zeile kopieren und anpassen.
   ============================================================== */

window.TVH_DATEN = {

  /* ============================================================
     1. NEWS  — der NEUESTE Beitrag steht ganz OBEN.
     · erscheint groß als Aufmacher auf „Aktuelles"
     · ALLE Beiträge erscheinen darunter als Liste
     · die ersten 3 erscheinen zusätzlich auf der Startseite

     Felder:
       datum     z. B. "22. März 2026"
       kategorie "News", "Spielbericht", "Jugend", "Verein", "Mixed"
       titel     Überschrift
       text      Kurztext (1–2 Sätze) – die Vorschau
       textLang  (optional) längerer Vorschautext nur für den
                 großen Aufmacher
       foto      Beschriftung des Foto-Platzhalters
       link      Pfad zur Berichtseite, z. B.
                 "berichte/bericht-herren1-klassenerhalt.html"
                 Leer lassen ("") = Karte ohne „Weiterlesen".

     HINWEIS: Reihenfolge in dieser Liste = Reihenfolge auf der
     Seite (oben = neueste). Die Berichtseiten selbst liegen im
     Ordner „berichte/" und werden dort separat angepasst.
     ============================================================ */
  news: [
    
    {
      datum: "07. Februar 2026",
      kategorie: "News",
      titel: "TVH in der Zeitung RuH",
      text: "In der neuen Ausgabe der RuH (Rund um Hermeskeil) wurde uns ein großer Beitrag über das sensationelle Spiel gegen Bad Salzig gewidmet.",
      foto: "Foto · Bericht",
      link: "berichte/bericht-neue-trikots.html"
    },
    {
      datum: "07. Februar 2026",
      kategorie: "Spielbericht",
      titel: "Sensationelles Ligaspiel unserer Herren",
      text: "In einem unserer bisher wichtigsten Spiele gegen den TV Bad Salzig wurden knallharte Ballwechsel ausgetauscht.",
      foto: "Foto · Spiel5",
      link: "berichte/bericht-herren1-mendig.html"
    },
    {
      datum: "19. Mai 2026",
      kategorie: "Verein",
      titel: "Beach-Saison im Freibad eröffnet",
      text: "Zwei Beachfelder, lockeres Training und Grillen – die Sommerrunde läuft.",
      foto: "Foto · Beachfeld",
      link: "berichte/bericht-beach-saison.html"
    },
    {
      datum: "28. Mai 2026",
      kategorie: "Jugend",
      titel: "Jugendtraining in Planung – jetzt vormerken",
      text: "Der TVH plant eine eigene Jugendmannschaft – Interessierte können sich schon vormerken.",
      foto: "Foto · Jugendtraining",
      link: "berichte/bericht-jugend-geplant.html"
    },
    {
      datum: "11. Mai 2026",
      kategorie: "Mixed",
      titel: "Offener Mixed-Abend lockt neue Gesichter",
      text: "Volle Halle am Spielabend: Das Mixed Team wächst weiter.",
      foto: "Foto · Mixed-Spielabend",
      link: "berichte/bericht-mixed-abend.html"
    },
    {
      datum: "03. Mai 2026",
      kategorie: "Verein",
      titel: "Neuer Abteilungsvorstand gewählt",
      text: "Die Mitgliederversammlung bestätigt das Team und setzt neue Ziele.",
      foto: "Foto · Mitgliederversammlung",
      link: "berichte/bericht-vorstand.html"
    }
  ],

  /* ============================================================
     2. TRAINING — eine Zeile pro Trainingseinheit.
       tag     "Di", "Mi", ... ("–" für noch ohne Termin)
       gruppe  "Herren", "Mixed" oder "Jugend" (exakt so)
       titel   Bezeichnung auf der Teamseite
       halle   Name der Halle
       zeit    z. B. "18:30 – 22:00"
       hinweis (optional) kleiner Zusatz, z. B. "in Planung"
     ============================================================ */
  training: [
    { tag: "Di", gruppe: "Herren", titel: "Hallentraining",   halle: "Gymnasium Hermeskeil",      zeit: "18:30 – 22:00" },
    { tag: "Mi", gruppe: "Mixed",  titel: "Training & Spiel",  halle: "IGS Sporthalle Hermeskeil", zeit: "19:30 – 21:45" },
    { tag: "Do", gruppe: "Mixed",  titel: "Training & Spiel",  halle: "Stadthalle Hermeskeil",     zeit: "19:00 – 22:00" },
    { tag: "Fr", gruppe: "Herren", titel: "Hallentraining",    halle: "Gymnasium Hermeskeil",      zeit: "18:30 – 22:00" },
    { tag: "–",  gruppe: "Jugend", titel: "Jugendtraining",    halle: "Coming Soon",               zeit: "–", hinweis: "in Planung" }
  ],

  /* ============================================================
     3. TEAMS — Kurzangabe „Training" auf den Team-Karten.
     ============================================================ */
  teams: {
    herren: "Di + Fr · 18:30 – 22:00",
    mixed:  "Mi + Do · ab 19:00",
    jugend: "In Planung · Jetzt vormerken"
  },

  /* ============================================================
     4. HALLEN — Spielstätten-Karten auf der Seite „Volleyball".
       label, name, adresse, info, foto
       ghost: true = graues statt rotes Etikett
     ============================================================ */
  hallen: [
    { label: "Training Herren", name: "Gymnasium Hermeskeil",      adresse: "54411 Hermeskeil",                 info: "Trainingshalle der Herren · dienstags & freitags", foto: "Karte / Foto · Gymnasium" },
    { label: "Training Mixed",  name: "IGS Sporthalle Hermeskeil", adresse: "54411 Hermeskeil",                 info: "Trainingshalle des Mixed Teams · mittwochs",       foto: "Karte / Foto · IGS Sporthalle" },
    { label: "Heimhalle",       name: "Stadthalle Hermeskeil",     adresse: "Trierer Str., 54411 Hermeskeil",   info: "Mixed-Abend donnerstags · Heimspiele der Herren 1", foto: "Karte / Foto · Stadthalle" }
  ],

  /* ============================================================
     5. TERMINE — „Heimspiele & Termine" unter „Aktuelles".
     ACHTUNG: noch BEISPIELE – bitte echte Termine eintragen.
     Leere Liste = der Abschnitt wird ausgeblendet.
       tagNr ("14"), monat ("Jun"), label, titel, ort, zeit
     ============================================================ */
  termine: [
    { tagNr: "18", monat: "Jun", label: "Mixed · Offener Abend", titel: "Mixed Team · Spielabend für alle", ort: "Stadthalle Hermeskeil", zeit: "19:00" },
    { tagNr: "20", monat: "Jun", label: "Bezirksliga · Heim",    titel: "Herren 1 vs. TV Saarburg",         ort: "Stadthalle Hermeskeil", zeit: "19:00" },
    { tagNr: "28", monat: "Jun", label: "Verein",                titel: "Saisonabschluss & Grillfest",      ort: "Beachfeld Freibad",     zeit: "15:00" },
    { tagNr: "05", monat: "Jul", label: "Beach · Turnier",       titel: "Hochwald Beach Cup",               ort: "Freibad Hermeskeil",    zeit: "10:00" }
  ],

  /* ============================================================
     6. TICKER — Laufband oben auf der Startseite.
     ============================================================ */
  ticker: [
    "Meisterschaft! Herren 1 steigt in die Bezirksliga auf",
    "TVH in der Zeitung RuH – großer Bericht über das Spiel gegen Bad Salzig",
    "Jugendtraining in Planung – jetzt vormerken",
    "Probetraining jederzeit möglich"
  ],

  /* ============================================================
     7. KONTAKT — Footer auf allen Seiten.
     ============================================================ */
  kontakt: {
    adresse: ["Stadthalle Hermeskeil", "Trierer Str., 54411 Hermeskeil"],
    email: "hallo@tv-hermeskeil.de",
    kurabu: "https://tv-hermeskeil.kurabu.com/de/login",
    instagram: "@tvh_volleys",
    instagramUrl: "https://www.instagram.com/tvh_volleys/"
  },

  /* ============================================================
     8. FAQ — Fragen-Blöcke. Nach Gruppen sortiert, damit jede
     Seite ihren passenden Block zeigt und du ihn nur EINMAL
     pflegst. „training" steht auf Volleyball, „mitglied" auf
     Mitglied werden. Pro Eintrag: q = Frage, a = Antwort.
     ============================================================ */
  faq: {
    training: [
      { q: "Kann ich einfach zum Probetraining kommen?", a: "Ja, jederzeit. Schreib uns kurz eine Mail oder komm direkt zur passenden Trainingszeit. Die ersten zwei Einheiten sind kostenlos und unverbindlich." },
      { q: "Brauche ich Vorerfahrung?", a: "Nein. Wir haben Gruppen für komplette Einsteiger ebenso wie für erfahrene Spielerinnen und Spieler. Sag uns einfach dein Level, dann finden wir die richtige Gruppe." },
      { q: "Ab welchem Alter kann mein Kind mitmachen?", a: "Eine eigene Jugendmannschaft ist aktuell in Planung (Coming Soon). Schreib uns eine Mail – wir merken dein Kind unverbindlich vor und melden uns, sobald es losgeht." },
      { q: "Was kostet die Mitgliedschaft?", a: "Die Beiträge findest du auf der Seite „Mitglied werden“ – für Kinder, Erwachsene und Familien gibt es jeweils eigene Tarife." },
      { q: "Spielt ihr auch im Sommer?", a: "Ja. Sobald die Hallensaison endet, ziehen wir auf die Beachfelder im Freibad um – lockeres Training, Turniere und Grillabende inklusive." }
    ],
    mitglied: [
      { q: "Ist das Probetraining wirklich kostenlos?", a: "Ja. Du kannst zweimal kostenlos und unverbindlich mittrainieren, bevor du dich entscheidest." },
      { q: "Wie kündige ich die Mitgliedschaft?", a: "Die Mitgliedschaft läuft pro Vereinsjahr und kann formlos zum Jahresende per Mail gekündigt werden." },
      { q: "Gibt es Ermäßigungen?", a: "Für Familien gibt es mehrere vergünstigte Tarife – alle Details findest du auf KURABU. Bei finanziellen Engpässen finden wir gemeinsam eine Lösung – sprich uns einfach an." },
      { q: "Brauche ich eine eigene Ausrüstung?", a: "Nur Hallenschuhe und Sportkleidung. Bälle, Netze und alles Weitere stellt der Verein." }
    ]
  },

  /* ============================================================
     9. HERREN — Inhalte der Seite „Herren 1".
     ============================================================ */
  herren: {
    /* Steckbrief-Kacheln oben. v darf <em>…</em> enthalten (rot). */
    facts: [
      { k: "Liga",         v: "Bezirksliga" },
      { k: "Tabellenplatz", v: "<em>3.</em> / 12" },
      { k: "Kader",        v: "12 Spieler" },
      { k: "Saison",       v: "2025 / 26" }
    ],

    /* Nächstes Heimspiel (mit Countdown).
       iso = Datum/Uhrzeit für den Countdown (Format
       JJJJ-MM-TTThh:mm:ss). BEISPIEL – echtes Spiel eintragen. */
    nextMatch: {
      ghost:   "VS",
      kicker:  "Nächstes Heimspiel",
      title:   "TVH Herren 1 <span style=\"color:var(--muted-dark)\">vs.</span> TV Saarburg",
      meta:    ["Sa · 20. Juni 2026", "19:00 Uhr", "Stadthalle Hermeskeil"],
      iso:     "2026-06-20T19:00:00",
      endText: "Anpfiff!",
      endSub:  "Viel Erfolg, TVH"
    },

    /* Kader. role (optional) = Sonderrolle wie Kapitän/Libero. */
    roster: [
      { nr: "1",  name: "Lukas Berg",      role: "Kapitän", pos: "Zuspiel" },
      { nr: "4",  name: "Jonas Weber",     pos: "Außenangriff" },
      { nr: "5",  name: "Tim Hofer",       pos: "Diagonal" },
      { nr: "6",  name: "Niklas Arnold",   pos: "Mittelblock" },
      { nr: "7",  name: "David Klein",     pos: "Außenangriff" },
      { nr: "8",  name: "Fabian Krause",   role: "Libero", pos: "Libero" },
      { nr: "9",  name: "Marco Reuter",    pos: "Mittelblock" },
      { nr: "10", name: "Sebastian Vogt",  pos: "Zuspiel" },
      { nr: "11", name: "Philipp Lang",    pos: "Diagonal" },
      { nr: "12", name: "Daniel Schäfer",  pos: "Außenangriff" },
      { nr: "14", name: "Erik Brandt",     pos: "Mittelblock" },
      { nr: "17", name: "Moritz Engel",    pos: "Libero" }
    ],

    /* Trainerteam / Betreuerstab. */
    staff: [
      { role: "Cheftrainer", name: "Michael Becker", text: "B-Lizenz, seit 2019 an der Linie. Steht für strukturiertes Angriffsspiel und einen variablen Aufschlag." },
      { role: "Co-Trainer",  name: "Andreas Wolf",   text: "Verantwortlich für Athletik und Videoanalyse – und für die gefürchteten Konditionseinheiten am Donnerstag." },
      { role: "Teammanager", name: "Stefan Roth",    text: "Kümmert sich um Spielplan, Schiedsrichter und alles, was rund um den Spieltag organisiert werden muss." }
    ],

    /* Letzte Ergebnisse. erg: "win" = grün, "loss" = rot. */
    results: [
      { datum: "07. Jun", gegner: "TG Konz",     ha: "Auswärts", satz: "3 : 1", erg: "win" },
      { datum: "31. Mai", gegner: "VC Wittlich",  ha: "Heim",     satz: "3 : 0", erg: "win" },
      { datum: "24. Mai", gegner: "TuS Mayen",    ha: "Auswärts", satz: "2 : 3", erg: "loss" },
      { datum: "17. Mai", gegner: "SV Mendig",    ha: "Heim",     satz: "3 : 2", erg: "win" },
      { datum: "10. Mai", gegner: "TV Bitburg",   ha: "Auswärts", satz: "1 : 3", erg: "loss" }
    ]
  },

  /* ============================================================
    10. MIXED — Inhalte der Seite „Mixed Team".
     ============================================================ */
  mixed: {
    facts: [
      { k: "Spielbetrieb",  v: "Ohne Liga" },
      { k: "Mitspielende",  v: "<em>14</em> aktiv" },
      { k: "Trainingstage", v: "Mi + Do" },
      { k: "Modus",         v: "Mixed 3 + 3" }
    ],

    /* Nächster Spieltermin (mit Countdown). BEISPIEL. */
    nextMatch: {
      ghost:   "MX",
      kicker:  "Nächster Spielabend",
      title:   "Offener Mixed-Abend",
      text:    "Jede:r ist willkommen – komm einfach vorbei, Hallenschuhe nicht vergessen.",
      meta:    ["Do · 18. Juni 2026", "19:00 Uhr", "Stadthalle Hermeskeil"],
      iso:     "2026-06-18T19:00:00",
      endText: "Los geht's!",
      endSub:  "Bis gleich in der Halle"
    },

    /* Übungsleiter / Trainerteam. */
    staff: [
      { role: "Übungsleiter",     name: "Andreas Wagner", text: "Leitet die Spielabende, ist erste Anlaufstelle für Neue und behält den Überblick über die Truppe." },
      { role: "Material & Halle", name: "Kevin Roth",     text: "Kümmert sich um Bälle, Netze und darum, dass die Halle startklar ist." },
      { role: "Events & Soziales", name: "Sabrina Wolf",  text: "Organisiert Grillabende, das Sommer-Beachturnier und hält die Truppe zusammen." }
    ]
  },

  /* ============================================================
    11. TARIFE — Beitrags-Karten auf „Mitglied werden".
       name, preis, per, items[], cta{label,href}
       feat: true = hervorgehobene Karte (volle Farbe + Pfeil)
       flag: kleines Etikett oben (z. B. "Beliebt"), optional
     ============================================================ */
  tarife: [
    {
      name: "Jugend & junge Erwachsene", preis: "15 €", per: "pro Quartal · bis 27 Jahre",
      items: ["Herren- & Mixed-Training", "Ligabetrieb bei den Herren", "Geplante Jugendgruppe inklusive", "Beachfeld im Sommer"],
      cta: { label: "Online beitreten", href: "https://tv-hermeskeil.kurabu.com/de/join/prelude" }
    },
    {
      name: "Erwachsene", preis: "21 €", per: "pro Quartal · ab 27 Jahre", feat: true, flag: "Beliebt",
      items: ["Herren- & Mixed-Training", "Ligabetrieb bei den Herren", "Vereinsveranstaltungen", "Beachfeld im Sommer"],
      cta: { label: "Online beitreten", href: "https://tv-hermeskeil.kurabu.com/de/join/prelude" }
    },
    {
      name: "Familie", preis: "Vergünstigt", per: "verschiedene Familientarife",
      items: ["Für Eltern + alle Kinder", "Mehrere Kombinationen möglich", "Vergünstigte Konditionen", "Alle Tarife auf KURABU"],
      cta: { label: "Tarife auf KURABU ansehen", href: "https://tv-hermeskeil.kurabu.com/de/join/prelude" }
    }
  ]

};
