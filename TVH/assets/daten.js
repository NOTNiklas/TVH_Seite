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
      datum: "18.06.2026",
      kategorie: "News",
      titel: "Erneuter Artikel in der RuH.",
      text: "Die RuH (Rund um Hermeskeil) widmete der Meisterschaft einen Artikel.",
      foto: "Foto · Mannschaftsfoto",
      bild: "berichte/photos/Bericht RuH_2.jpeg",
      slug: "meisterschaft-ruh",
      lead: " ",
      inhalt: [
        {h:"Meister und Aufsteiger in die Bezirksliga"},
        "Im Juni 2025 entschied sich die Volleyball-Abteilung des Turnvereins Hermeskeil, mit dem Umstieg von der Mixed-Liga in den offiziellen Herrenbetrieb, den nächsten Schritt zu wagen. Schon im ersten Jahr der Liga-Zugehörigkeit in der Bezirksklasse konnte das TVH-Team den Meistertitel erringen und steigt in die Bezirksliga auf. Für Sebastian Fuchs war der Einstieg als Trainer in den Herrenbetrieb Neuland, jedoch durch seine fachlich kompetente Trainingsmethodik und die punktgenaue Vorbereitung auf die Liga-Spiele, bestand Fuchs, mit tatkräftiger Unterstützung seines Co-Trainer Niklas Schumm, diese Herausforderung bravourös. Die Saison startete mit einem Heimspiel und man konnte die ersten zwei Siege gegen TV Vallendar und TG Konz 3 einfahren. „Einen besseren Start in die Saison hätten wir uns nicht vorstellen können“, so Niklas Schumm. Die weiteren zwei Auswärtsspiele im September wurden ebenfalls mit einem souveränen 3:0 erfolgreich abgeschlossen. Die Spielpause im Oktober bot eine hervorragende Gelegenheit, um gezielt an taktischen Defiziten und physischen Grundlagen zu arbeiten. Diese Strategie trug Früchte, denn auch die folgenden Partien im November entschied der TVH deutlich für sich. Mit einem perfekten Endspurt verabschiedete sich der TVH aus dem Sportjahr 2025, denn aufgrund sechs weiterer Zähler überwinterte das Team als souveräner Spitzenreiter der Bezirksklasse. Der Start ins neue Jahr verlief für das Team von Trainer Sebastian Fuchs etwas holprig: Gegen den TSV Bullay-Alf setzte es eine überraschend deutliche Niederlage, das verwunderte umso mehr, da Bullay-Alf im Dezember 2025 gegen den TVH lediglich einen einzigen Satzgewinn verbuchen konnte. Das Spitzenspiel der Saison im Februar 2026 gegen das Team aus Bad Salzig sollte dann die positive Trendwende einläuten. Die Mannschaft aus Bad Salzig, die im oberen Drittel der Tabelle angesiedelt war, lieferte ein anspruchsvolles Volleyball-Spiel und trieb damit die TVH-Jungs zu Höchstleistungen an. Überragende und spektakuläre Ballwechsel sowie verschiedene Highlight Momente prägten das Spiel. Nach sehr anstrengenden Sätzen überzeugte der TVH mit seiner hohen Präsenz sowie unbändigem Siegeswillen und gewann 3:0. Dieser vom Ergebnis her klare Sieg täuscht jedoch etwas über den wahren Spielverlauf hinweg, denn er wurde mit sehr knappen Satzergebnissen (25:18, 25:23, 29:27) erzielt. Durch diesen Motivationsschub ausgestattet agierte das Team des TVH durch den Rest der Saison überaus selbstbewusst und bewältigte die restlichen sieben Spiele im Februar und März mit einem eindeutigen 3:0-Siegen. Zum Abschluss der Saison standen die Herren des TVH folgerichtig an der Tabellenspitze und sicherten sich so souverän den Aufstieg in die Bezirksliga. Fazit: Die Herrenmannschaft des TV-Hermeskeil hat einen perfekten Start in den Herrenspielbetrieb hingelegt, ist als Mannschaft zusammengewachsen und nährt damit die Hoffnung auf eine vielversprechende Zukunft. Mit der Integration vielversprechender Nachwuchstalente läuft die Saisonvorbereitung für die Spielzeit 2026/27 seit einigen Wochen überaus positiv. Es bleibt abzuwarten, wie sich das neu formierte Kollektiv in der höheren Spielklasse behaupten wird. (Kö/Schu)"
      ]
    },
    {
      datum: "22.03.2026",
      kategorie: "News",
      titel: "Meisterschaft in der Bezirksklasse!",
      text: "Die Herrenmannschaft ist Meister in der Bezirksklasse Rheinland geworden!",
      foto: "Foto · Mannschaftsfoto",
      bild: "assets/Pyramiden Foto - kopie.jpeg",
      slug: "meisterschaft",
      lead: " ",
      inhalt: [
        { h: "Die Herren haben sich mit Abstand den Meisterschaftstitel gesichert und steigen auf!"},
        { pull: "Wir haben eine verrückte erste Saison hinter uns und sind stolz uns in der ersten Saison direkt den Meisterschaftstitel zu sichern. Die dominante Saison zeigte wiedereinmal, dass die Herrenmannschaft des TV Hermeskeil für Größeres gemacht ist. Der Aufstieg und die kommende Saison ist ein weiterer Motivationsschub für unsere Jungs. Wir fahren direkt mit den Vorbereitungen fort, da wir uns eine Pause nicht leisten können! Die Bezirksliga wird ein wenig schwieriger, ist jedoch nicht unser Ziel, weswegen wir zuversichtlich sagen können, dass wir dort ebenfalls gut performen werden!", quelle: "Niklas Schumm, Co-Trainer"}
      ]
    },
    {
      datum: "07.02.2026",
      kategorie: "Spielbericht",
      titel: "TVH in der Zeitung RuH (Rund um Hermeskeil)",
      text: "Unser Spitzenspiel wurde als Artikel in der Zeitung RuH (Rund um Hermeskeil) beschrieben.",
      foto: "Foto · Spiel 5",
      bild: "berichte/photos/Spiel 5 Foto.jpeg",
      slug: "spiel5",
      lead: "",
      inhalt: [
        { h: "Dem Druck standgehalten und die Chance auf den Titelgewinn gewahrt"},
        "Die Volleyballmannschaft des TV Hermeskeil gewinnt souverän mit 3:0 gegen den TV Bad Salzig.Am vergangenen Samstag reiste die Mannschaft des TV Bad Salzig III, die im oberen Mittelfeld der Tabelle in der Bezirksliga rangiert, erstmalig nach Hermeskeil an.Von den bisherigen guten Spielergebnissen hat sich der TVH nicht beeindrucken lassen, auch nicht als die unbekannte Mannschaft schon beim Aufwärmen sowohl mit der Spieleranzahl als auch mit einer sauberen und sicheren Technik glänzen konnte.Als es nach dem Aufwärmen ans Netz ging startete der TVH mit der Grundaufstellung, welche für jeden Gegner eine Herausforderung darstellt.Der erfahrene Zuspieler Sebastian Fuchs hat die Fähigkeit die Bälle geschickt und effektiv zu verteilen und startete daher auf dem Feld.Auf den beiden Mittelpositionen wurden die schnellen und großen Mittelblocker Robin Wagner und Martin Thömmes eingesetzt. Ein Libero war dieses Mal nicht dabei.Die Außenpositionen, welche wichtig sind für die Annahmen und schlauen Angriffe, wurden diesmal durch Emil Hofmann und Dmitrii Verbin besetzt.Die Diagonalposition, welche für die Angriffe aus dem Hinterfeld bekannt ist, wurde durch den Linkshänder Niklas Schumm belegt.Einwechselbereit war Alessandro Proietti, welcher sowohl für die Diagonal- als auch die Außenposition eingesetzt werden kann.Der erste Satz startete mit einem ausgeglichenen Punkteaustausch und beide Teams schlugen sich die Bälle um die Ohren.Bei einem Punktestand von 3:3 ging der Zuspieler Sebastian Fuchs an den Aufschlag und punktete mehrere Male mit dem Aufschlag, was die Gäste gehörig unter Druck setzte.Bei kniffligen Aufschlägen überzeugten die souveränen Annahmen von Dimitri Verbin, welche zu starken Angriffen führten.Das bis dahin ausgeglichene Spiel, kippte jetzt beim Stand von 16:13 zu Gunsten des TVH-Teams und am Ende konnten die Hausherren den ersten Satz mit 25:18 gewinnen.Im zweiten Satz startete Alessandro Proietti statt Emil Hofmann auf der Außenposition.Nun feuerte Bad Salzig aus allen Rohren und sicherten sich zunächst eine Führung von 0:4.Die erfahrenen Volleyballer des TVH ließen sich davon aber nicht beeindrucken und kämpften sich bei spannenden Ballwechseln auf 11:11 zurück.Mit starken Aufschlägen und Angriffen über die Diagonale punktete Bad Salzig konstant. In dieser Phase musste sich der TVH taktisch etwas einfallen lassen.Mit einigen schlau gesetzten Bällen und aus dem Block recycelten Bällen baute Alessandro Proietti Druck auf.Dies nutzte vor allem Sebastian Fuchs aus und verteilte schlaue Bälle über Außen, die Diagonale und den Pipe Angriff, wo Robin Wagner einige Male erfolgreich war.Bis zum Ende des zweiten Satzes waren beide Mannschaften gleich auf, jedoch überzeugte Martin Thömmes mit einem soliden Block und Niklas Schumm mit einer hohen Erfolgsquote im Angriff.Das war die Basis dass sich der TVH den zweiten Satz mit einem knappen 25:23 sichern konnteTrotz der sehr guten Leistung von Dmitri Verbin gönnte dieser sich zum Beginn des dritten Satzes eine Auszeit und dafür kam Emil Hofmann erneut auf das Spielfeld.Damit dieser Satz nicht, wie der zweite Satz, mit einem Rückstand starten sollte, zog die Mannschaft des TVH nach jedem Punkt der Gegner direkt nach.Beim Punktestand von 6:7 kam es durch die Aufschläge von Niklas Schumm zu einem Break und der TVH überholte das Team aus Bad Salzig bis 10:7.Daraufhin setzte sich der nie endende intensive Schlagabtausch beider Mannschaften fort.Als sich der Satz dem Ende neigte und das TVH-Team bei einem Spielstand von 22:24 vor einer Niederlage im dritten Satz stande, punktete der TVH zwei weitere Male und zog gleich auf.Nun musste die Mannschaft aus Bad Salzig erneut einen drauf setzten, um das Spiel nicht nach drei Sätzen zu verlieren und sich noch eine Chance auf den Sieg zu sichern.Diesem Druck hielt der TVH allerdings stand und überzeugte weiterhin mit einem stabilen Block und einer unüberwindbaren Verteidigung.Der Gegner aus Bad Salzig ließ allerdings nicht locker, hatte zweimal Satzball und war nah dran an der Chance einen vierten Satz zu spielen.Jetzt raufte sich das TVH-Team zusammen und holte sich mit drei souveränen Punkten den letzten Satz mit 29:27. Damit war der Sieg in drei Sätzen gesichert.Trotz dieses Sieges ist man in der Tabelle in der Bezirksliga mit 27 Punkten auf den zweiten Platz zurückgefallen, das ist allerdings dem Umstand geschuldet, dass Tabellenführer Bullay-Alf (29 Punkte) ein Spiel mehr zu verzeichnen hat.Damit hat das Team des TVH deutlich die Weichen für den Titelgewinn gestellt.Es war ein Spiel mit phantastischen Ballwechseln das in seiner Qualität deutlich über dem Niveau dieser Liga lag.Die Akteure beider Teams konnten deshalb unisono resümieren: „Das war unser bisher bestes Spiel der Saison, das zudem ungeheuer Spaß gemacht hat.“Obwohl die Begegnung ohne unabhängiges Schiedsgericht ablaufen musste (diese Rolle übernimmt normalerweise die gerade nicht spielende Mannschaft), was durch das Fehlen einer dritten Mannschaft nicht möglich war, lief das Spiel fair und verständnisvoll ab.Zusammenfassend kann man sagen, dass es für die Hermeskeiler Volleyballer einen weiterer erfolgreicher Tag in der Sporthalle am Gymnasium Hermeskeil war und die Chancen auf den Titelgewinn gewährt bleibt."
      ]
    },
    {
      datum: "22.11.2025",
      kategorie: "Spielbericht",
      titel: "Zweiter Heimspieltag, zwei weitere Siege.",
      text: "Ein weiterer Heimspieltag mit zwei Spielen wurde erfolgreich mit zwei Siegen beendet!",
      foto: "Foto · Spiel 4",
      bild: "berichte/photos/Spiel 4 Foto.JPG",
      slug: "spiel4",
      lead: "",
      inhalt: [
        "Zweites Heimspiel, zwei Siege und ungeschlagen an der Tabellenspitze. Am Samstag ging die Herrenmannschaft des Turnverein Hermeskeil erneut Zuhause ans Netz. Wie bei dem letzten Heimspiel, begrüßten wir erneut die TG Konz 3. Außerdem war der TuS Kaisersesch erstmalig bei uns in der Halle. Gegen 15 Uhr starteten die Herren gegen Konz. Von Anfang an setzten wir Konz mit starken Aufschlägen unter Druck und punkteten mit konstanten Spielzügen. Durch einige starke Abwehraktionen punktete Konz ebenfalls. Letztendlich gewannen wir den ersten Satz 25:14. Im zweiten Satz und dritten Satz gingen wir ein wenig schwächer ans Netz, gewannen jedoch 25:20 und 25:19. Die Jungs aus Konz überzeugten mit ihrer Teamdynamik und den lautstarken Sprüchen. Daran arbeiten wir noch. Daraufhin folgte eine Pause, bis wir gegen TuS Kaisersesch spielten. Erneut überzeugten wir mit unseren Aufschlägen und sicherten durch einige lange Aufschlagsserien den ersten Satz mit 25:12 für uns. Der zweite Satz lief ähnlich und wir beendeten diesen ebenfalls mit 25:12. Im letzten Satz probierten wir unsere Alternativaufstellung, mit dem eigentlichen Zuspieler und Trainer Sebastian Fuchs auf der Bank. Nun ging der eigentliche Diagonalangreifer Niklas Schumm aufs Zuspiel und Alessandro Proietti auf die Diagonale. Nach den starken Aufschlägen zuvor, waren die meisten Spieler von uns erschöpft und verhauten einige Aufschläge. Die Annahmen ließen ebenfalls nach und wir wechselten den eigentlichen Zuspieler erneut ein. Deshalb gewannen wir auch schlussendlich den dritten Satz mit 25:21. Vielen Dank an die beiden Teams für den schönen Tag und das schöne Spiel. Wir sind weiterhin ungeschlagen, weiterhin an der Tabellenspitze und sind motiviert diese Saison ohne Satzverlust zu beenden. Am 13.12 haben wir das nächste Auswärtsspiel und fahren nach Jünkerath, wo wir auf den VfL Jünkerath und den TSV Bullay-Alf treffen.",
        {liste: ["Topscorer: Niklas Schumm", "Beste Annahme: Marco Cretu", "Meisten Blocks: Robin Wagner"] }
      ]
    },
    {
      datum: "08.11.2025",
      kategorie: "Spielbericht",
      titel: "Auswärtssieg in Kaisersesch.",
      text: "Nach einer langen Pause startete der TVH in Kaisersesch auf dem Feld.",
      foto: "Foto · Spiel 3",
      bild: "berichte/photos/Spiel 3 Foto.jpeg",
      slug: "spiel3",
      lead: "Das erste Mal Schiedsgericht und ein weiterer Auswärtssieg für die Herren des TVHs!",
      inhalt: [
        
            "Nach einer langen Pause starteten die Herren auswärts nach Kaisersesch. Zum ersten Mal durften wir pfeifen und verfolgten so, ein spannendes Spiel zwischen TuS Mosella Schweich 3 und TuS Kaisersesch. Danach wärmten die Herren sich zusammen auf und starteten in den ersten Satz. Dieser startete relativ auf Augenhöhe, bis wir uns sammelten und den Satz schnell zu Ende brachten. 1:0 mit 25:12 für den TVH, worauf wir nochmal einen draufgesetzt haben und den zweiten Satz, zwar mit einigen kleinen Fehlern, spielten und mit 25:16 gewonnen haben. Im letzten Satz ließen wir nichts anbrennen und zogen den letzten Satz mit 25:10 durch. Damit stehen wir weiterhin ungeschlagen an der Tabellenspitze! Ein Dankeschön an den TuS Kaisersesch für die Verpflegung und an den TuS Mosella Schweich 3 für das Schiedsgericht. Außerdem ein großes Dankeschön an Sport Inn für die neuen Trikots! Am 22.11 geht es zuhause in der Gymnasium Halle Hermeskeil um 15:00 Uhr für uns weiter. Dort treten wir erneut gegen den TG Konz 3 und den TuS Kaisersesch an. Und auch dort werden wir unsere Siegessträne verteidigen!"
      ]
    },
    {
      datum: "10.10.2025",
      kategorie: "News",
      titel: "Neues Trikotset für unsere Herrenmannschaft.",
      text: "Es gibt neue Trikots für die Herren!",
      foto: "Foto · Trikots",
      bild: "assets/2 Reihen Foto.jpeg",
      slug: "neuetrikots",
      lead: "",
      inhalt: [
          "Unser neues Trikotset wurde von unserem Verein in Zusammenarbeit mit SportInn entworfen und gekauft. Vielen Dank dafür!",
          {pull: "Wir danken SportInn für die neuen Trikots! Wir freuen uns sehr!"}  
      ]
    },
    {
      datum: "20.09.2025",
      kategorie: "Spielbericht",
      titel: "Die nächsten drei Punkte!",
      text: "Auch auswärts kassiert der TVH die Punkte ein.",
      foto: "Foto · Spiel 2",
      bild: "berichte/photos/Spiel 2 Foto.jpeg",
      slug: "spiel2",
      lead: "Auswärts ein starkes Spiel gegen Polch Mailfeld! Weitere drei Punkte für uns!",
      inhalt: [
        
            "Die nächsten 3 Punkte auf unserem Konto!!",
            "Am Samstag waren die Herren des TVH auswärts in Polch und haben gegen Polch-Maifeld gespielt.Nach einem durchwachsenen ersten Satz und einer ganz neuen Aufstellung ging der erste Satz mit 25:21 an uns.Daraufhin wollten wir nichts anbrennen lassen und starteten mit der stärksten Aufstellung durch und holten somit Satz 2 & 3 mit 25:13 und 25:12!Im ersten Satz spielte der eigentliche Diagonal/Mitte Niklas auf dem Zuspiel, wodurch der erste Satz ziemlich zäh startete und es ein Kopf an Kopf Rennen war.Durch einige starke Angriffe über außen und Kombinationen über die Mitte holten wir einige Punkte auf unsere Seite.Jedoch lief es bei den Gegnern ähnlich und durch einige clevere Bälle wurde es knapp.Gegen Ende wechselten wir den eigentlichen Zuspieler Sebastian ein, welcher den ersten Satz auf unsere Seite holte.Um unsere eigentlichen Stärken zu demonstrieren, starteten wir mit der stärksten Aufstellung in Satz 2, welcher einseitig und schnell mit unschlagbaren 25:13 auf unser Konto ging.Der dritte Satz lief ähnlich und mit starkem Aufschlagsdruck entschieden wir den letzten Satz mit 25:12 ebenfalls für uns!Damit sind wir mit 3 von 3 Siegen mit 9 Punkten Tabellenerster. Nun ist bis Anfang November Spielpause. Der aktuelle Spielplan ist online auf der VVR-Website.",

        { pull: "Weiter gehts in der erfolgreichen Saison!" },
      ]
    },
    {
      datum: "13.09.2025",
      kategorie: "Spielbericht",
      titel: "Der perfekte Start in die Saison!",
      text: "Die erste Saison der neuen Herrenmannschaft hätte nicht besser starten können.",
      foto: "Foto · Mitgliederversammlung",
      bild: "berichte/photos/Spiel 1 Foto.jpeg",
      slug: "spiel1",
      lead: "Die erste Saison der neuen Herrenmannschaft hätte nicht besser starten können. Das erste Heimspiel, zwei Spiele, zwei Siege. Direkt die ersten sechs Punkte.",
      inhalt: [
        "Erstmalig startete die Herrenmannschaft der Volleyballabteilung des TVH in den Spielbetrieb.",

        "Nach viel Organisatorischem reisten die beiden Mannschaften aus Vallendar (nähe Koblenz) und Konz 3 in die Gymnasium Halle in Hermeskeil an.",

        "Im ersten Spiel hatte der TVH ganz klar die Oberhand und punktete durch starke Aufschläge und Angriffe immer wieder. Somit konnten sie sich den ersten Satz mit unglaublichen 25:5 sichern. Daraufhin setzte der TV Vallendar nochmal einen drauf, aber der TVH konnte dem Widerstand standhalten und holte sich somit den zweiten Satz mit 25:17 und den dritten Satz 25:11. Ein klares 3:0 und der perfekte Start in die Saison. Nach einer kurzen Pause ging es direkt ins zweite Spiel gegen die TG Konz 3 Diese überzeugten im ersten Satz mit ihrer starken Verteidigung und guten Annahmen. Trotzdem konnten sich die Herren des TVHs durchsetzen und den ersten Satz mit 25:19 sichern Der zweite Satz verlief ähnlich und durch viele lange Ballwechsel wurden beide Mannschaften sowohl mental als auch körperlich unter Druck gesetzt Der TVH holte diesen Satz mit 25:18 nach Hause. Im letzten Satz hat sich die TG Konz wieder gefangen und überrumpelte den TVH Nach einem Rückstand von 2:11 wechselte der TVH einige Spieler und glich den Satz auf 13:13 aus Dies war ein riesiger mentaler Schlag für die Konzer Jungs, was sich der TVH zu nutzen machte und den dritten Satz 25:21 gewann Ein schöner und erfolgreicher erster Tag für die neue Mannschaft und zum Start der Saison steht der TVH mit einem 6:0 auf der Tabellenspitze Am kommenden Samstag (20.09.25) startet die Herrenmannschaft nach Polch, um dort gegen die Jungs vom Polch-Maifeld zu spielen, bevor dann ein Monat Spielpause ist Viel Erfolg dort!",

        { pull: "Einen besseren Start in die Saison hätten wir uns nicht vorstellen können!", quelle: "Niklas schumm, Co-Trainer" },
      ]
    },
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
    { label: "Training Herren", name: "Gymnasium Hermeskeil",  info: "Trainingshalle der Herren", foto: "Karte / Foto · Gymnasium Sporthalle" },
    { label: "Training Mixed",  name: "IGS Sporthalle Hermeskeil", info: "Trainingshalle des Mixed Teams · mittwochs",       foto: "Karte / Foto · IGS Sporthalle" },
    { label: "Training Mixed",  name: "Stadthalle Hermeskeil", info: "Trainingshalle des Mixed Teams · donnerstags", foto: "Karte / Foto · Stadthalle" }
  ],

  termine: [
    { tagNr: "27", monat: "Jun", label: "unsere alljährliche", titel: "Abteilungsversammlung", ort: "Mehrgenerationenhaus Hermeskeil", zeit: "18:00" }
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
      kicker:  "Unsere alljährliche",
      title:   "Abteilungsversammlung",
      text:    "Jede:r ist willkommen – komm einfach vorbei.",
      meta:    ["Sa · 24. Juni 2026", "18:00 Uhr", "Mehrgenerationenhaus Hermeskeil"],
      iso:     "2026-06-27T18:00:00",
      endText: "Los geht's!",
      endSub:  "Bis gleich!"
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
