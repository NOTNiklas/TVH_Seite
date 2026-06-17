window.TVH_DATEN = {

  /* ---------------------------------------------------------------
     NEWS / BERICHTE  — zentrale Pflege aller Beiträge.

     Jeder Eintrag erscheint als Karte (Start + Aktuelles) und – sobald
     ein "slug" gesetzt ist – zusätzlich als eigene Berichtsseite
     berichte/bericht-<slug>.html. ALLE Inhalte dieser Seite (Tag,
     Titel, Datum, Bild, Text und die "Weitere Beiträge" unten) kommen
     aus dem jeweiligen Objekt hier – die HTML-Datei ist nur eine
     leere Vorlage.

       datum     "07. Februar 2026"          Anzeige-Datum
       kategorie "Spielbericht"              Tag oben (Verein, News, Spielbericht …)
       titel     "…"                         Überschrift
       text      "…"                         Vorschautext (Karte) + Einleitung im Bericht
       foto      "Foto · Spiel5"             Platzhalter-Beschriftung, FALLS kein Bild
       bild      "berichte/photos/x.jpeg"    echtes Foto, Pfad ab Projekt-Root  ← anpassen!
       slug      "saisonstart"              erzeugt die Detailseite (optional)
       lead      "…"                         eigener Einleitungssatz (sonst = text) (optional)
       inhalt    [ … ]                       Fließtext der Detailseite (optional). Elemente:
                   "Ein Absatz als Text"
                   { h: "Zwischenüberschrift" }
                   { liste: ["Punkt 1", "Punkt 2"] }
                   { pull: "Hervorgehobenes Zitat", quelle: "Name" }
     --------------------------------------------------------------- */
  news: [

    {
      datum: "22. März 2026",
      kategorie: "News",
      titel: "TVH in der Zeitung RuH 2.0",
      text: "In einer weiteren Ausgabe der RuH (Rund um Hermeskeil) wird ein Artikel über unseren Saisonverlauf und die Meisterschaft geschrieben.",
      foto: "Foto · Bericht",
      bild: "berichte/photos/Bericht RuH_2.jpeg",
      slug: "ruh-2"
    },
    {
      datum: "22. März 2026",
      kategorie: "News",
      titel: "Meisterschaftstitel gesichert!",
      text: "Die erste Saison ist rum und der erste Titel ist in der Tasche.",
      foto: "Foto · Meisterschaftsfeier",
      bild: "assets/Pyramiden Foto.jpeg",
      slug: "meisterschaft"
    },
    {
      datum: "15. März 2026",
      kategorie: "Verein",
      titel: "Mitgliederversammlung: Vorstand neu aufgestellt",
      text: "Bei der gut besuchten Mitgliederversammlung hat die Abteilung ihren Vorstand neu gewählt und sich klare Ziele gesetzt.",
      foto: "Foto · Mitgliederversammlung",
      bild: "assets/2 Reihen Foto.jpeg",
      slug: "vorstand",
      lead: "Bei der gut besuchten Mitgliederversammlung hat die Volleyball-Abteilung ihren Vorstand neu aufgestellt und sich ehrgeizige Ziele für die kommenden Jahre gesetzt.",
      inhalt: [
        "Die Mitglieder bestätigten ein engagiertes Team, das die Geschicke der Abteilung in den nächsten zwei Jahren lenkt. Schwerpunkte der gemeinsamen Arbeit sollen die Nachwuchsförderung, verlässliche Hallenzeiten und der weitere Ausbau des Beach-Angebots sein.",
        { h: "Das neue Team" },
        { liste: [
          "Abteilungsleitung: Stefan Roth",
          "Stellvertretung & Sport: Sandra Hoffmann",
          "Kasse: Petra Adam",
          "Jugendwart: Jana Berger"
        ] },
        "Ein großer Dank ging an die scheidenden Vorstandsmitglieder, die die Abteilung über viele Jahre geprägt und durch herausfordernde Zeiten geführt haben.",
        { pull: "Wir wollen die Abteilung breiter aufstellen und gleichzeitig sportlich oben dranbleiben.", quelle: "Stefan Roth, Abteilungsleiter" },
        "Konkrete Projekte sollen schon zur neuen Saison starten."
      ]
    },
    {
      datum: "07. Februar 2026",
      kategorie: "News",
      titel: "TVH in der Zeitung RuH",
      text: "In der neuen Ausgabe der RuH (Rund um Hermeskeil) wurde uns ein großer Beitrag über das sensationelle Spiel gegen Bad Salzig gewidmet.",
      foto: "Foto · Bericht",
      bild: "berichte/photos/Bericht RuH_1.jpeg",
      slug: "ruh"
    },
    {
      datum: "07. Februar 2026",
      kategorie: "Spielbericht",
      titel: "Sensationelles Ligaspiel unserer Herren",
      text: "In einem unserer bisher wichtigsten Spiele gegen den TV Bad Salzig wurden knallharte Ballwechsel ausgetauscht.",
      foto: "Foto · Spiel5",
      bild: "berichte/photos/Spiel 5 Foto.jpeg",
      slug: "bad-salzig"
    },
    {
      datum: "01. Januar 2026",
      kategorie: "Verein",
      titel: "Die Volleyballabteilung wünscht ein frohes neues Jahr!",
      text: "",
      foto: "Foto · NeuJahr",
      bild: ""
    },
    {
      datum: "22. November 2025",
      kategorie: "Spielbericht",
      titel: "Zweiter Heimspieltag, erneut zwei Punkte.",
      text: "Zwei weitere Siege sicherten uns Abstand auf der Tabellenspitze.",
      foto: "Foto · Spiel4",
      bild: "berichte/photos/Spiel 4 Foto.JPG",
      slug: "heimspieltag-2"
    },
    {
      datum: "08. November 2025",
      kategorie: "Spielbericht",
      titel: "Auswärtssieg in Kaisersesch",
      text: "Einen Monat Pause warf die Herren nicht aus dem Konzept!",
      foto: "Foto · Spiel3",
      bild: "berichte/photos/Spiel 3 Foto.jpeg",
      slug: "kaisersesch"
    },
    {
      datum: "20. September 2025",
      kategorie: "Spielbericht",
      titel: "Die nächsten drei Punkte auf unserem Konto!",
      text: "Die Herrenmannschaft kassiert weiterhin Punkte ab. ",
      foto: "Foto · Spiel2",
      bild: "berichte/photos/Spiel 2 Foto.jpeg",
      slug: "drei-punkte"
    },
    {
      datum: "13. September 2025",
      kategorie: "Spielbericht",
      titel: "Perfekter Saisonstart",
      text: "Das erste Heimspiel. Zwei Spiele, Zwei Siege!",
      foto: "Foto · Spiel1",
      bild: "berichte/photos/Spiel 1 Foto.jpeg",
      slug: "saisonstart"
    },
    {
      datum: "16. Juli 2025",
      kategorie: "Verein",
      titel: "Neue Trikots für unsere Herren!",
      text: "Für die kommende Saison stellt der Verein in Zusammenarbeit mit SPORTINN ein neues Trikotset.",
      foto: "Foto · Trikots",
      bild: "",
      slug: "trikots"
    },
    {
      datum: "12. Juli 2025",
      kategorie: "Verein",
      titel: "Neue Herrenmannschaft gemeldet",
      text: "Eine neue Ära beginnt. Der TVH startet in den Liga Spielbetrieb.",
      foto: "Foto · Mannschaft",
      bild: "assets/Pyramiden Foto - Kopie.jpeg",
      slug: "neue-mannschaft"
    }
  ],


  training: [
    { tag: "Di", gruppe: "Herren", titel: "Hallentraining",   halle: "Gymnasium Hermeskeil",      zeit: "18:30 – 22:00" },
    { tag: "Mi", gruppe: "Mixed",  titel: "Training & Spiel",  halle: "IGS Sporthalle Hermeskeil", zeit: "19:30 – 21:45" },
    { tag: "Do", gruppe: "Mixed",  titel: "Training & Spiel",  halle: "Stadthalle Hermeskeil",     zeit: "19:00 – 22:00" },
    { tag: "Fr", gruppe: "Herren", titel: "Hallentraining",    halle: "Gymnasium Hermeskeil",      zeit: "18:30 – 22:00" },
  ],


  teams: {
    herren: "Di + Fr · 18:30 – 22:00",
    mixed:  "Mi + Do · ab 19:00",
  },

  hallen: [
    { label: "Training Herren", name: "Gymnasium Hermeskeil",  info: "Trainingshalle der Herren", foto: "Karte / Foto · Gymnasium" },
    { label: "Training Mixed",  name: "IGS Sporthalle Hermeskeil", info: "Trainingshalle des Mixed Teams · mittwochs",       foto: "Karte / Foto · IGS Sporthalle" },
    { label: "Training Mixed",  name: "Stadthalle Hermeskeil", info: "Trainingshalle des Mixed Teams · donnerstags", foto: "Karte / Foto · Stadthalle" }
  ],

  termine: [
    { tagNr: "18", monat: "Jun", label: "Mixed · Offener Abend", titel: "Mixed Team · Spielabend für alle", ort: "Stadthalle Hermeskeil", zeit: "19:00" },
    { tagNr: "20", monat: "Jun", label: "Bezirksliga · Heim",    titel: "Herren 1 vs. TV Saarburg",         ort: "Stadthalle Hermeskeil", zeit: "19:00" },
    { tagNr: "28", monat: "Jun", label: "Verein",                titel: "Saisonabschluss & Grillfest",      ort: "Beachfeld Freibad",     zeit: "15:00" },
    { tagNr: "05", monat: "Jul", label: "Beach · Turnier",       titel: "Hochwald Beach Cup",               ort: "Freibad Hermeskeil",    zeit: "10:00" }
  ],


  ticker: [
    "    ",
    "Meisterschaft! Herren 1 steigt in die Bezirksliga auf",
    "TVH in der Zeitung RuH – großer Bericht über das Spiel gegen Bad Salzig",
    "Jugendtraining in Planung – jetzt vormerken",
    "Probetraining jederzeit möglich"
  ],


  kontakt: {
    adresse: ["Stadthalle Hermeskeil", "Trierer Str., 54411 Hermeskeil"],
    email: "hallo@tv-hermeskeil.de",
    kurabu: "https://tv-hermeskeil.kurabu.com/de/login",
    instagram: "@tvh_volleys",
    instagramUrl: "https://www.instagram.com/tvh_volleys/"
  },

  faq: {
    training: [
      { q: "Kann ich einfach zum Probetraining kommen?", a: "Ja, jederzeit. Schreib uns kurz eine Mail oder komm direkt zur passenden Trainingszeit. Die ersten zwei Einheiten sind kostenlos und unverbindlich." },
      { q: "Brauche ich Vorerfahrung?", a: "Nein. Wir haben Gruppen für komplette Einsteiger ebenso wie für erfahrene Spielerinnen und Spieler. Sag uns einfach dein Level, dann finden wir die richtige Gruppe." },
      { q: "Ab welchem Alter kann mein Kind mitmachen?", a: "Generell sind jede Altersgruppen bei uns wilkommen. Da der Altersdurchschnitt ein wenig höher liegt, würden wir das Mixedtraining ab 14 Jahren empfehlen. Herren ab 16." },
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


  herren: {
    /* Steckbrief-Kacheln oben. v darf <em>…</em> enthalten (rot). */
    facts: [
      { k: "Liga",         v: "Bezirksliga" },
      { k: "Tabellenplatz", v: "<em>1.</em> / 10" },
      { k: "Kader",        v: "12 Spieler" },
      { k: "Saison",       v: "2025 / 26" }
    ],

    /* Nächstes Heimspiel (mit Countdown).
       iso = Datum/Uhrzeit für den Countdown (Format
       JJJJ-MM-TTThh:mm:ss) */
    nextMatch: {
      ghost:   "VS",
      kicker:  "Nächstes Heimspiel",
      title:   "TV-Hermeskeil <span style=\"color:var(--muted-dark)\">vs.</span> ???",
      meta:    ["01.09.2026", "19:00 Uhr", "Gymnasium Hermeskeil"],
      iso:     "2026-09-01T19:00:00",
      endText: "Anpfiff!",
      endSub:  "Viel Erfolg, TVH"
    },

    roster: [
      { nr: "3",  name: "Robin Wagner",    pos: "Mittelblock" },
      { nr: "4",  name: "Martin Thömmes",   pos: "Mittelblock" },
      { nr: "6",  name: "Sebastian Fuchs",   role: "Kapitän/Trainer", pos: "Zuspiel" },
      { nr: "7",  name: "Alessandro Proietti",    pos: "Diagonalangriff" },
      { nr: "10", name: "Marco Cretu",    pos: "Außenangriff" },
      { nr: "11", name: "Niklas Schumm", role: "Co-Trainer"  , pos: "Diagonalangriff" },
      { nr: "14", name: "Emil Hofmann",     pos: "Außenangriff" },
      { nr: "18", name: "Jonas Heck",    pos: "Mittelblock" },
      { nr: "21", name: "Dimitrii Verbin",    pos: "Außenangriff" },
      { nr: "23", name: "Jeremy Düppre",    pos: "Außen-/Diagonalangriff" },
      { nr: "46", name: "Jason Bamberger",    pos: "Libero" },
    ],

    staff: [
      { role: "Trainer", name: "Sebastian Fuchs", text: "Durch Spielerfahrung in höheren Ligen und konstanten Weiterbildungen der ideale Trainer." },
      { role: "Co-Trainer",  name: "Niklas Schumm",   text: "Aufgrund von hoher Motivation und permanentem Kontakt eine gute Unterstützung." },
      { role: "Social Media Manager", name: "Kristin Wilhelm",    text: "Hält die Social Media Präsenz aktuell und bewirbt den Verein!" }
    ],

    results: [
      { datum: "07. Jun", gegner: "TG Konz",     ha: "Auswärts", satz: "3 : 1", erg: "win" },
      { datum: "31. Mai", gegner: "VC Wittlich",  ha: "Heim",     satz: "3 : 0", erg: "win" },
      { datum: "24. Mai", gegner: "TuS Mayen",    ha: "Auswärts", satz: "2 : 3", erg: "loss" },
      { datum: "17. Mai", gegner: "SV Mendig",    ha: "Heim",     satz: "3 : 2", erg: "win" },
      { datum: "10. Mai", gegner: "TV Bitburg",   ha: "Auswärts", satz: "1 : 3", erg: "loss" }
    ]
  },

  mixed: {
    facts: [
      { k: "Spielbetrieb",  v: "Ohne Liga" },
      { k: "Mitspielende",  v: "<em>20+  </em> aktiv" },
      { k: "Trainingstage", v: "Mi + Do" },
      { k: "Modus",         v: "6 gegen 6" }
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


    staff: [
      { role: "Übungsleiter",     name: "Martin Seimez", text: "Leitet die Spielabende, ist erste Anlaufstelle für Neue und behält den Überblick über die Truppe." },
      { role: "Übungsleiter",     name: "Robin Wagner", text: "Leitet die Spielabende, ist erste Anlaufstelle für Neue und behält den Überblick über die Truppe." },
      { role: "Übungsleiter",     name: "Sebastian Fuchs", text: "Leitet die Spielabende, ist erste Anlaufstelle für Neue und behält den Überblick über die Truppe." },
      { role: "Übungsleiter",     name: "Kristin Wilhelm", text: "Leitet die Spielabende, ist erste Anlaufstelle für Neue und behält den Überblick über die Truppe." },
      { role: "Übungsleiter",     name: "Niklas Schumm", text: "Leitet die Spielabende, ist erste Anlaufstelle für Neue und behält den Überblick über die Truppe." },
      { role: "Übungsleiter",     name: "Alessandro Proietti", text: "Leitet die Spielabende, ist erste Anlaufstelle für Neue und behält den Überblick über die Truppe." }
    ]
  },

  tarife: [
    {
      name: "Jugendliche", preis: "15 €", per: "pro Quartal · bis 27 Jahre",
      
      cta: { label: "Online beitreten", href: "https://tv-hermeskeil.kurabu.com/de/join/prelude" }
    },
    {
      name: "Erwachsene", preis: "21 €", per: "pro Quartal · ab 27 Jahre", 
      
      cta: { label: "Online beitreten", href: "https://tv-hermeskeil.kurabu.com/de/join/prelude" }
    },
    {
      name: "Familie", preis: "Tarife", per: "verschiedene Familientarife",
     
      cta: { label: "Tarife auf KURABU ansehen", href: "https://tv-hermeskeil.kurabu.com/de/join/prelude" }
    }
  ]

};
