/* ==============================================================
   TVH · ZENTRALE DATEN — HIER ALLES PFLEGEN
   ==============================================================
   Diese eine Datei steuert alle wiederkehrenden Inhalte der
   Website. Etwas hier ändern + speichern = es ändert sich
   automatisch auf ALLEN Seiten.

   INHALT
   1. NEWS      → Seite „Aktuelles“ + die 3 neuesten auf der Startseite
   2. TRAINING  → alle Trainingszeiten-Tabellen + Footer
   3. TEAMS     → Kurzinfos auf den Team-Karten
   4. HALLEN    → Spielstätten auf der Seite „Volleyball“
   5. TERMINE   → „Heimspiele & Termine“ auf der Seite „Aktuelles“
   6. TICKER    → Laufband ganz oben auf der Startseite
   7. KONTAKT   → Adresse & Links im Footer (alle Seiten)

   TIPPS
   – Text immer zwischen die Anführungszeichen "..." schreiben.
   – Eine Zeile (= ein Eintrag) endet immer mit },
   – Einträge löschen: einfach die ganze Zeile { ... }, entfernen.
   – Neue Einträge: eine bestehende Zeile kopieren und anpassen.
   ============================================================== */

window.TVH_DATEN = {

  /* ============================================================
     1. NEWS  — der NEUESTE Beitrag steht ganz OBEN.
     Er erscheint automatisch groß als Aufmacher unter „Aktuelles“;
     die ersten 3 Beiträge erscheinen auch auf der Startseite.

     Felder:
       datum     z. B. "22. März 2026"
       kategorie z. B. "News", "Spielbericht", "Jugend", "Verein"
       titel     Überschrift
       text      Kurztext (1–2 Sätze)
       textLang  (optional) längerer Text – nur für den Aufmacher
       foto      Beschriftung des Foto-Platzhalters
       link      (optional) z. B. "berichte/mein-bericht.html"
                 Leer lassen ("") = Karte ohne „Weiterlesen“.
     ============================================================ */
  news: [
    {
      datum: "22. März 2026",
      kategorie: "News",
      titel: "Meisterschaft der Herren 1",
      text: "Am Ende der ersten Saison im TVH Herrenbetrieb sicherten wir uns den 1. Platz in der Bezirksklasse und so den Aufstieg in die Bezirksliga.",
      foto: "Foto · Aufstiegsfeier",
      link: ""
    },
    {
      datum: "07. Februar 2026",
      kategorie: "News",
      titel: "TVH in der Zeitung RuH",
      text: "In der neuen Ausgabe der RuH (Rund um Hermeskeil) wurde uns ein großer Beitrag über das sensationelle Spiel gegen Bad Salzig gewidmet.",
      foto: "Foto · Bericht",
      link: ""
    },
    {
      datum: "07. Februar 2026",
      kategorie: "Spielbericht",
      titel: "Sensationelles Ligaspiel unserer Herren",
      text: "In einem unserer bisher wichtigsten Spiele gegen den TV Bad Salzig wurden knallharte Ballwechsel ausgetauscht.",
      foto: "Foto · Spiel5",
      link: ""
    }
  ],

  /* ============================================================
     2. TRAINING — eine Zeile pro Trainingseinheit.
     Erscheint: Tabelle auf „Volleyball“, Kurztabelle auf der
     Startseite, Trainingszeiten auf den Teamseiten und im Footer.

     Felder:
       tag     "Di", "Mi", ... ("–" für noch ohne Termin)
       gruppe  "Herren", "Mixed" oder "Jugend"
               (muss exakt so heißen, damit die Teamseiten
                ihre Zeilen finden)
       titel   Bezeichnung auf der Teamseite, z. B. "Hallentraining"
       halle   Name der Halle
       zeit    z. B. "18:30 – 22:00"
       hinweis (optional) kleiner Zusatz, z. B. "in Planung"
     ============================================================ */
  training: [
    { tag: "Di", gruppe: "Herren", titel: "Hallentraining",        halle: "Gymnasium Hermeskeil",      zeit: "18:30 – 22:00" },
    { tag: "Mi", gruppe: "Mixed",  titel: "Training & Spiel",      halle: "IGS Sporthalle Hermeskeil", zeit: "19:30 – 21:45" },
    { tag: "Do", gruppe: "Mixed",  titel: "Training & Spiel",      halle: "Stadthalle Hermeskeil",     zeit: "19:00 – 22:00" },
    { tag: "Fr", gruppe: "Herren", titel: "Hallentraining",        halle: "Gymnasium Hermeskeil",      zeit: "18:30 – 22:00" },
    { tag: "–",  gruppe: "Jugend", titel: "Jugendtraining",        halle: "Coming Soon",               zeit: "–", hinweis: "in Planung" }
  ],

  /* ============================================================
     3. TEAMS — Kurzangabe „Training“ auf den Team-Karten
     (Startseite + Seite „Mannschaften“).
     ============================================================ */
  teams: {
    herren: "Di + Fr · 18:30 – 22:00",
    mixed:  "Mi + Do · ab 19:00",
    jugend: "In Planung · Jetzt vormerken"
  },

  /* ============================================================
     4. HALLEN — Spielstätten-Karten auf der Seite „Volleyball“.
     Felder: label (kleines Etikett), name, adresse, info, foto
     ghost: true = graues statt rotes Etikett
     ============================================================ */
  hallen: [
    {
      label: "Training Herren",
      name: "Gymnasium Hermeskeil",
      adresse: "54411 Hermeskeil",
      info: "Trainingshalle der Herren · dienstags & freitags",
      foto: "Karte / Foto · Gymnasium"
    },
    {
      label: "Training Mixed",
      name: "IGS Sporthalle Hermeskeil",
      adresse: "54411 Hermeskeil",
      info: "Trainingshalle des Mixed Teams · mittwochs",
      foto: "Karte / Foto · IGS Sporthalle"
    },
    {
      label: "Heimhalle",
      name: "Stadthalle Hermeskeil",
      adresse: "Trierer Str., 54411 Hermeskeil",
      info: "Mixed-Abend donnerstags · Heimspiele der Herren 1",
      foto: "Karte / Foto · Stadthalle"
    }
  ],

  /* ============================================================
     5. TERMINE — Liste „Heimspiele & Termine“ unter „Aktuelles“.
     ACHTUNG: Das sind noch BEISPIELE – bitte echte Termine
     eintragen oder Zeilen löschen. Keine Termine = der Abschnitt
     wird automatisch ausgeblendet.

     Felder: tagNr ("14"), monat ("Jun"), label (kleine rote
     Zeile), titel, ort, zeit
     ============================================================ */
  termine: [
    { tagNr: "14", monat: "Jun", label: "Bezirksliga · Heim",     titel: "Herren 1 vs. TV Saarburg",            ort: "Stadthalle Hermeskeil", zeit: "19:00" },
    { tagNr: "18", monat: "Jun", label: "Mixed · Offener Abend",  titel: "Mixed Team · Spielabend für alle",    ort: "Stadthalle Hermeskeil", zeit: "19:00" },
    { tagNr: "28", monat: "Jun", label: "Verein",                 titel: "Saisonabschluss & Grillfest",         ort: "Beachfeld Freibad",     zeit: "15:00" },
    { tagNr: "05", monat: "Jul", label: "Beach · Turnier",        titel: "Hochwald Beach Cup",                  ort: "Freibad Hermeskeil",    zeit: "10:00" }
  ],

  /* ============================================================
     6. TICKER — Laufband oben auf der Startseite.
     Einfach kurze Schlagzeilen als Liste.
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
  }

};
