(() => {
  "use strict";

  const language = new URLSearchParams(window.location.search).get("lang");
  if (!["fr", "de", "es"].includes(language)) return;

  const dictionary = {};
  const add = (en, fr, de, es) => { dictionary[en] = { fr, de, es }; };

  add("Skip to content", "Aller au contenu", "Zum Inhalt springen", "Ir al contenido");
  add("Product", "Produit", "Produkt", "Producto");
  add("Guide (Japanese)", "Guide (japonais)", "Anleitung (Japanisch)", "Guía (japonés)");
  add("What's new", "Nouveautés", "Neuigkeiten", "Novedades");
  add("Features", "Fonctions", "Funktionen", "Funciones");
  add("Plans", "Formules", "Tarife", "Planes");
  add("Turn records into", "Transformer les données en", "Aus Aufzeichnungen wird", "Convierte los registros en");
  add("understanding.", "compréhension.", "Verständnis.", "comprensión.");
  add("nunoken builds sports analysis software that helps coaches and analysts make better decisions during and after the game.", "nunoken développe des logiciels d’analyse sportive qui aident les entraîneurs et les analystes à mieux décider pendant et après le match.", "nunoken entwickelt Sportanalyse-Software, die Trainer und Analysten während und nach dem Spiel bei besseren Entscheidungen unterstützt.", "nunoken desarrolla software de análisis deportivo para ayudar a entrenadores y analistas a tomar mejores decisiones durante y después del partido.");
  add("Explore Handball Analyzer", "Découvrir Handball Analyzer", "Handball Analyzer entdecken", "Descubrir Handball Analyzer");
  add("See the meaning", "Comprendre le sens", "Die Bedeutung", "Descubre el significado");
  add("behind the numbers.", "derrière les chiffres.", "hinter den Zahlen.", "detrás de los números.");
  add("Turn every event in a match into information for review and the next decision—without adding unnecessary complexity to the recording workflow.", "Transformez chaque événement du match en information utile pour l’analyse et la prochaine décision, sans compliquer la saisie.", "Machen Sie jedes Spielereignis zu einer Grundlage für Auswertung und nächste Entscheidungen – ohne den Erfassungsablauf unnötig zu verkomplizieren.", "Convierte cada evento del partido en información útil para revisar y decidir, sin añadir complejidad innecesaria al registro.");
  add("A Windows app for recording handball matches and analyzing teams, players and goalkeepers in real time. Version 1.1 supports Japanese and English.", "Une application Windows pour enregistrer les matchs de handball et analyser en temps réel les équipes, joueurs et gardiens. La version 1.1 prend en charge le japonais et l’anglais.", "Eine Windows-App zur Aufzeichnung von Handballspielen und Echtzeitanalyse von Teams, Spielern und Torhütern. Version 1.1 unterstützt Japanisch und Englisch.", "Una aplicación para Windows que registra partidos de balonmano y analiza equipos, jugadores y porteros en tiempo real. La versión 1.1 admite japonés e inglés.");
  add("Record the match.", "Enregistrez le match.", "Spiel aufzeichnen.", "Registra el partido.");
  add("Analyze it live.", "Analysez-le en direct.", "Live analysieren.", "Analízalo en directo.");
  add("Product details", "Détails du produit", "Produktdetails", "Detalles del producto");
  add("Sports analysis software.", "Logiciel d’analyse sportive.", "Software für Sportanalyse.", "Software de análisis deportivo.");

  add("HANDBALL MATCH ANALYSIS", "ANALYSE DE MATCH DE HANDBALL", "HANDBALL-SPIELANALYSE", "ANÁLISIS DE PARTIDOS DE BALONMANO");
  add("Handball Analyzer brings live match recording, team and player analysis, goalkeeper analysis and PDF reports together in one Windows application.", "Handball Analyzer réunit dans une seule application Windows la saisie en direct, l’analyse des équipes, des joueurs et des gardiens, ainsi que les rapports PDF.", "Handball Analyzer vereint Live-Spielerfassung, Team-, Spieler- und Torhüteranalyse sowie PDF-Berichte in einer Windows-Anwendung.", "Handball Analyzer reúne en una aplicación para Windows el registro en directo, el análisis de equipos, jugadores y porteros y los informes PDF.");
  add("Install free from Microsoft Store", "Installer gratuitement depuis Microsoft Store", "Kostenlos im Microsoft Store installieren", "Instalar gratis desde Microsoft Store");
  add("Compare FREE and PRO", "Comparer FREE et PRO", "FREE und PRO vergleichen", "Comparar FREE y PRO");
  add("Install securely from Microsoft Store. PRO is available as an in-app subscription.", "Installation sécurisée depuis Microsoft Store. PRO est proposé sous forme d’abonnement dans l’application.", "Sichere Installation über den Microsoft Store. PRO ist als In-App-Abonnement erhältlich.", "Instalación segura desde Microsoft Store. PRO está disponible como suscripción dentro de la aplicación.");
  add("Actual application screen using demo data", "Écran réel de l’application avec données de démonstration", "Echter App-Bildschirm mit Demodaten", "Pantalla real de la aplicación con datos de demostración");
  add("Faster recording.", "Saisie plus rapide.", "Schnellere Erfassung.", "Registro más rápido.");
  add("Clearer analysis.", "Analyse plus claire.", "Klarere Analyse.", "Análisis más claro.");
  add("Version 1.1 refreshes the main experience while preserving existing data, backups and reports.", "La version 1.1 modernise l’expérience tout en conservant les données, sauvegardes et rapports existants.", "Version 1.1 modernisiert die Bedienung und bewahrt vorhandene Daten, Sicherungen und Berichte.", "La versión 1.1 renueva la experiencia y conserva los datos, copias de seguridad e informes existentes.");
  add("Broadcast-style dark design", "Design sombre inspiré des retransmissions", "Dunkles Design im Broadcast-Stil", "Diseño oscuro de estilo televisivo");
  add("Match-day controls", "Commandes adaptées au match", "Bedienung für den Spieltag", "Controles para el día del partido");
  add("Visual analysis", "Analyse visuelle", "Visuelle Analyse", "Análisis visual");
  add("Japanese and English", "Japonais et anglais", "Japanisch und Englisch", "Japonés e inglés");
  add("A consistent, high-contrast visual system across match input, live analysis, results and reports.", "Un système visuel cohérent et contrasté pour la saisie, l’analyse en direct, les résultats et les rapports.", "Ein einheitliches, kontrastreiches Design für Erfassung, Live-Analyse, Ergebnisse und Berichte.", "Un sistema visual coherente y de alto contraste para el registro, el análisis en directo, los resultados y los informes.");
  add("Larger controls and a clearer recording flow help operators work quickly during live matches.", "Des commandes plus grandes et un flux plus clair facilitent une saisie rapide pendant les matchs.", "Größere Bedienelemente und ein klarer Ablauf ermöglichen schnelles Arbeiten im Live-Spiel.", "Controles más grandes y un flujo más claro permiten trabajar con rapidez durante el partido.");
  add("Comparison bars, heat maps, shot courses, scoring timelines and player tables make trends easier to spot.", "Barres comparatives, cartes thermiques, trajectoires de tir, chronologies et tableaux rendent les tendances plus visibles.", "Vergleichsbalken, Heatmaps, Wurfwege, Torverläufe und Spielertabellen machen Trends leichter erkennbar.", "Barras comparativas, mapas de calor, trayectorias, líneas de tiempo y tablas facilitan detectar tendencias.");
  add("The app follows the Windows language on first use and can be switched at any time in Settings.", "Au premier lancement, l’application suit la langue de Windows et peut ensuite être modifiée dans les paramètres.", "Beim ersten Start übernimmt die App die Windows-Sprache; sie kann jederzeit in den Einstellungen geändert werden.", "En el primer uso, la aplicación sigue el idioma de Windows y puede cambiarse en cualquier momento desde Ajustes.");
  add("Microsoft Store rollout timing can vary by device and region.", "Le déploiement sur Microsoft Store peut varier selon l’appareil et la région.", "Die Bereitstellung im Microsoft Store kann je nach Gerät und Region variieren.", "La disponibilidad en Microsoft Store puede variar según el dispositivo y la región.");
  add("One flow from input", "Un seul flux, de la saisie", "Ein Ablauf von der Eingabe", "Un solo flujo desde el registro");
  add("to post-match review.", "à l’analyse après-match.", "bis zur Nachanalyse.", "hasta el análisis posterior.");
  add("Record SHOT, turnover, goalkeeper events, suspensions and corrections. The same data powers live and post-match analysis.", "Enregistrez les tirs, pertes de balle, actions du gardien, exclusions et corrections. Les mêmes données alimentent l’analyse en direct et après le match.", "Erfassen Sie Würfe, Ballverluste, Torhüteraktionen, Zeitstrafen und Korrekturen. Dieselben Daten dienen der Live- und Nachanalyse.", "Registra lanzamientos, pérdidas, acciones del portero, exclusiones y correcciones. Los mismos datos sirven para el análisis en directo y posterior.");
  add("Match recording", "Saisie du match", "Spielerfassung", "Registro del partido");
  add("Select a player and shot position, then record the result. Undo and history editing help correct mistakes.", "Sélectionnez un joueur et une position de tir, puis enregistrez le résultat. L’annulation et la modification de l’historique permettent de corriger les erreurs.", "Spieler und Wurfposition wählen, Ergebnis erfassen. Rückgängig und Verlaufsbearbeitung helfen bei Korrekturen.", "Selecciona un jugador y la posición de lanzamiento y registra el resultado. Deshacer y editar el historial permiten corregir errores.");
  add("Live analysis", "Analyse en direct", "Live-Analyse", "Análisis en directo");
  add("Follow shot percentage, attack efficiency, turnover rate, goalkeeper save rate and match momentum.", "Suivez le pourcentage de tirs, l’efficacité offensive, les pertes de balle, les arrêts du gardien et la dynamique du match.", "Verfolgen Sie Wurfquote, Angriffseffizienz, Ballverluste, Torhüterquote und Spielverlauf.", "Sigue el porcentaje de tiro, la eficacia de ataque, las pérdidas, las paradas del portero y el ritmo del partido.");
  add("Team analysis", "Analyse d’équipe", "Teamanalyse", "Análisis de equipo");
  add("Compare attack, defense, shots, goalkeepers and scoring periods for both teams.", "Comparez l’attaque, la défense, les tirs, les gardiens et les périodes de score des deux équipes.", "Vergleichen Sie Angriff, Abwehr, Würfe, Torhüter und Torphasen beider Teams.", "Compara ataque, defensa, lanzamientos, porteros y periodos de anotación de ambos equipos.");
  add("Player career reports", "Rapports de carrière des joueurs", "Karriereberichte der Spieler", "Informes de trayectoria del jugador");
  add("Track goals, shots, efficiency, turnovers, positions and courses across multiple matches.", "Suivez buts, tirs, efficacité, pertes de balle, positions et trajectoires sur plusieurs matchs.", "Verfolgen Sie Tore, Würfe, Effizienz, Ballverluste, Positionen und Wurfwege über mehrere Spiele.", "Sigue goles, lanzamientos, eficacia, pérdidas, posiciones y trayectorias en varios partidos.");
  add("Goalkeeper analysis", "Analyse des gardiens", "Torhüteranalyse", "Análisis de porteros");
  add("Review save percentage, shot position, shot type and course patterns.", "Analysez le taux d’arrêts, la position, le type et les trajectoires des tirs.", "Prüfen Sie Fangquote, Wurfposition, Wurfart und Wurfmuster.", "Revisa el porcentaje de paradas, la posición, el tipo y la trayectoria de los lanzamientos.");
  add("Scoring by time", "Buts par période", "Tore nach Zeit", "Goles por tiempo");
  add("See first-half and second-half scoring momentum at one-minute resolution.", "Visualisez la dynamique des buts en première et seconde période, minute par minute.", "Sehen Sie den Torverlauf der ersten und zweiten Halbzeit minutengenau.", "Consulta el ritmo de anotación de cada parte minuto a minuto.");
  add("PDF reports", "Rapports PDF", "PDF-Berichte", "Informes PDF");
  add("Preview reports with FREE and save PDF files with PRO for meetings and sharing.", "Prévisualisez les rapports avec FREE et enregistrez les PDF avec PRO pour les réunions et le partage.", "Berichte mit FREE ansehen und mit PRO als PDF für Besprechungen und Austausch speichern.", "Previsualiza informes con FREE y guarda archivos PDF con PRO para reuniones y compartirlos.");
  add("Record once.", "Enregistrez une fois.", "Einmal erfassen.", "Registra una vez.");
  add("Use the data everywhere.", "Utilisez les données partout.", "Daten überall nutzen.", "Usa los datos en todas partes.");
  add("Move from match preparation to live decisions and post-match review without re-entering data.", "Passez de la préparation aux décisions en direct puis à l’analyse après-match sans ressaisir les données.", "Von der Vorbereitung über Live-Entscheidungen bis zur Nachanalyse – ohne Daten erneut einzugeben.", "Pasa de la preparación a las decisiones en directo y al análisis posterior sin volver a introducir datos.");
  add("Create a match", "Créer un match", "Spiel anlegen", "Crear un partido");
  add("Prepare teams and players", "Préparer équipes et joueurs", "Teams und Spieler vorbereiten", "Preparar equipos y jugadores");
  add("Record events", "Enregistrer les actions", "Ereignisse erfassen", "Registrar eventos");
  add("SHOT, TO, GK and more", "TIR, perte de balle, GB et plus", "WURF, TO, TW und mehr", "TIRO, pérdida, portero y más");
  add("Analyze live", "Analyser en direct", "Live analysieren", "Analizar en directo");
  add("Follow KPIs and momentum", "Suivre les indicateurs et la dynamique", "Kennzahlen und Spielverlauf verfolgen", "Seguir indicadores y dinámica");
  add("Finish the match", "Terminer le match", "Spiel beenden", "Finalizar el partido");
  add("Review and edit history", "Vérifier et modifier l’historique", "Verlauf prüfen und bearbeiten", "Revisar y editar el historial");
  add("Open reports", "Ouvrir les rapports", "Berichte öffnen", "Abrir informes");
  add("Study team and player trends", "Étudier les tendances des équipes et joueurs", "Team- und Spielertrends auswerten", "Estudiar tendencias de equipos y jugadores");
  add("Share PDF", "Partager le PDF", "PDF teilen", "Compartir PDF");
  add("Save files with PRO", "Enregistrer avec PRO", "Dateien mit PRO speichern", "Guardar archivos con PRO");
  add("Start with one match.", "Commencez avec un match.", "Mit einem Spiel starten.", "Empieza con un partido.");
  add("Go PRO for continuity.", "Passez à PRO pour continuer.", "Mit PRO dauerhaft arbeiten.", "Pásate a PRO para continuar.");
  add("FREE includes match recording and the main analysis tools. PRO removes the match limit and enables PDF file saving.", "FREE comprend la saisie et les principaux outils d’analyse. PRO supprime la limite de matchs et permet d’enregistrer les PDF.", "FREE enthält Spielerfassung und die wichtigsten Analysewerkzeuge. PRO entfernt das Spiellimit und ermöglicht PDF-Speicherung.", "FREE incluye el registro y las principales herramientas de análisis. PRO elimina el límite de partidos y permite guardar PDF.");
  add("Feature", "Fonction", "Funktion", "Función");
  add("Saved matches", "Matchs enregistrés", "Gespeicherte Spiele", "Partidos guardados");
  add("Match recording", "Saisie du match", "Spielerfassung", "Registro del partido");
  add("Team and player analysis", "Analyse équipe et joueurs", "Team- und Spieleranalyse", "Análisis de equipo y jugadores");
  add("PDF preview", "Aperçu PDF", "PDF-Vorschau", "Vista previa de PDF");
  add("1 match", "1 match", "1 Spiel", "1 partido");
  add("Unlimited", "Illimité", "Unbegrenzt", "Ilimitados");
  add("Included", "Inclus", "Enthalten", "Incluido");
  add("Not included", "Non inclus", "Nicht enthalten", "No incluido");
  add("Save PDF files", "Enregistrer les PDF", "PDF-Dateien speichern", "Guardar archivos PDF");
  add("Price", "Prix", "Preis", "Precio");
  add("Free", "Gratuit", "Kostenlos", "Gratis");
  add("Install free", "Installer gratuitement", "Kostenlos installieren", "Instalar gratis");
  add("Install from Microsoft Store and start with one saved match.", "Installez depuis Microsoft Store et commencez avec un match enregistré.", "Im Microsoft Store installieren und mit einem gespeicherten Spiel starten.", "Instálala desde Microsoft Store y empieza con un partido guardado.");
  add("Purchase from Plans & Purchase inside the installed app.", "Achetez depuis « Formules et achat » dans l’application installée.", "Kauf über „Tarife und Kauf“ in der installierten App.", "Compra desde «Planes y compra» dentro de la aplicación instalada.");
  add("Built in Japan.", "Conçu au Japon.", "In Japan entwickelt.", "Creado en Japón.");
  add("Ready for the world.", "Prêt pour le monde.", "Bereit für die Welt.", "Listo para el mundo.");
  add("Version 1.1 supports Japanese and English. On first use, non-Japanese Windows environments open in English. You can switch languages at any time from Settings.", "La version 1.1 prend en charge le japonais et l’anglais. Sur un Windows non japonais, l’application s’ouvre d’abord en anglais. La langue peut être modifiée à tout moment dans les paramètres.", "Version 1.1 unterstützt Japanisch und Englisch. In nicht-japanischen Windows-Umgebungen startet die App zunächst auf Englisch. Die Sprache kann jederzeit in den Einstellungen geändert werden.", "La versión 1.1 admite japonés e inglés. En Windows no japonés, la aplicación se abre inicialmente en inglés. El idioma puede cambiarse en cualquier momento desde Ajustes.");
  add("For teams, coaches and analysts worldwide", "Pour les équipes, entraîneurs et analystes du monde entier", "Für Teams, Trainer und Analysten weltweit", "Para equipos, entrenadores y analistas de todo el mundo");
  add("Your team's records", "Les données de votre équipe", "Die Daten Ihres Teams", "Los datos de tu equipo");
  add("stay on your PC.", "restent sur votre PC.", "bleiben auf Ihrem PC.", "se quedan en tu PC.");
  add("Match, team and player data are stored locally on the user's computer. The app does not send match data to nunoken servers or external AI services.", "Les données de match, d’équipe et de joueurs sont stockées localement sur l’ordinateur. L’application ne les envoie ni aux serveurs nunoken ni à des services d’IA externes.", "Spiel-, Team- und Spielerdaten werden lokal auf dem Computer gespeichert. Die App sendet keine Spieldaten an nunoken-Server oder externe KI-Dienste.", "Los datos de partidos, equipos y jugadores se guardan localmente en el ordenador. La aplicación no los envía a servidores de nunoken ni a servicios externos de IA.");
  add("Local storage", "Stockage local", "Lokale Speicherung", "Almacenamiento local");
  add("Your match, team and player records are stored on your computer.", "Vos données de matchs, équipes et joueurs sont stockées sur votre ordinateur.", "Ihre Spiel-, Team- und Spielerdaten werden auf Ihrem Computer gespeichert.", "Los datos de partidos, equipos y jugadores se guardan en tu ordenador.");
  add("Backup and restore", "Sauvegarde et restauration", "Sichern und Wiederherstellen", "Copia de seguridad y restauración");
  add("Create backup files and restore them when needed.", "Créez des fichiers de sauvegarde et restaurez-les si nécessaire.", "Erstellen Sie Sicherungsdateien und stellen Sie sie bei Bedarf wieder her.", "Crea copias de seguridad y restáuralas cuando sea necesario.");
  add("Automatic backups", "Sauvegardes automatiques", "Automatische Sicherungen", "Copias automáticas");
  add("Safety backups are created at important points such as startup and match completion.", "Des sauvegardes de sécurité sont créées à des moments importants, notamment au démarrage et à la fin d’un match.", "Sicherungskopien werden an wichtigen Punkten wie beim Start und Spielende erstellt.", "Se crean copias de seguridad en momentos importantes, como al iniciar y finalizar un partido.");
  add("Database checks", "Contrôle de la base de données", "Datenbankprüfung", "Comprobación de la base de datos");
  add("The app checks database integrity and guides recovery if a problem is detected.", "L’application vérifie l’intégrité de la base de données et guide la récupération en cas de problème.", "Die App prüft die Datenbankintegrität und unterstützt bei der Wiederherstellung, wenn ein Problem erkannt wird.", "La aplicación comprueba la integridad de la base de datos y guía la recuperación si detecta un problema.");
  add("Frequently asked questions", "Questions fréquentes", "Häufig gestellte Fragen", "Preguntas frecuentes");
  add("Key information for evaluating Handball Analyzer.", "Informations essentielles pour évaluer Handball Analyzer.", "Wichtige Informationen zur Bewertung von Handball Analyzer.", "Información clave para evaluar Handball Analyzer.");
  add("Can I use the app in English?", "Puis-je utiliser l’application en anglais ?", "Kann ich die App auf Englisch verwenden?", "¿Puedo usar la aplicación en inglés?");
  add("Yes. Version 1.1 supports Japanese and English. Change the display language from Settings.", "Oui. La version 1.1 prend en charge le japonais et l’anglais. Modifiez la langue d’affichage dans les paramètres.", "Ja. Version 1.1 unterstützt Japanisch und Englisch. Die Anzeigesprache kann in den Einstellungen geändert werden.", "Sí. La versión 1.1 admite japonés e inglés. Cambia el idioma desde Ajustes.");
  add("What can I do with FREE?", "Que puis-je faire avec FREE ?", "Was ist mit FREE möglich?", "¿Qué puedo hacer con FREE?");
  add("FREE includes match recording, live analysis, team and player analysis, and PDF preview, with one saved match.", "FREE comprend la saisie du match, l’analyse en direct, l’analyse des équipes et joueurs et l’aperçu PDF, avec un match enregistré.", "FREE enthält Spielerfassung, Live-, Team- und Spieleranalyse sowie PDF-Vorschau bei einem gespeicherten Spiel.", "FREE incluye registro, análisis en directo, análisis de equipo y jugadores y vista previa de PDF, con un partido guardado.");
  add("Where is my data stored?", "Où mes données sont-elles stockées ?", "Wo werden meine Daten gespeichert?", "¿Dónde se guardan mis datos?");
  add("Match, team and player data are stored locally on your PC. Backup and restore tools are included.", "Les données de match, d’équipe et de joueurs sont stockées localement sur votre PC. Les outils de sauvegarde et restauration sont inclus.", "Spiel-, Team- und Spielerdaten werden lokal auf Ihrem PC gespeichert. Sicherungs- und Wiederherstellungsfunktionen sind enthalten.", "Los datos de partidos, equipos y jugadores se guardan localmente en tu PC. Incluye herramientas de copia y restauración.");
  add("Is an internet connection required?", "Une connexion Internet est-elle nécessaire ?", "Ist eine Internetverbindung erforderlich?", "¿Se necesita conexión a Internet?");
  add("Recording and local analysis work on your PC. Microsoft Store connectivity is required for installation, PRO purchase and licence refresh or restore.", "La saisie et l’analyse locale fonctionnent sur votre PC. Une connexion à Microsoft Store est nécessaire pour l’installation, l’achat de PRO et l’actualisation ou la restauration de la licence.", "Erfassung und lokale Analyse funktionieren auf Ihrem PC. Für Installation, PRO-Kauf sowie Lizenzaktualisierung oder -wiederherstellung ist eine Verbindung zum Microsoft Store erforderlich.", "El registro y análisis local funcionan en tu PC. Se necesita conexión con Microsoft Store para instalar, comprar PRO y actualizar o restaurar la licencia.");
  add("Which platforms are supported?", "Quelles plateformes sont prises en charge ?", "Welche Plattformen werden unterstützt?", "¿Qué plataformas son compatibles?");
  add("Windows 10 and Windows 11 are supported. A smartphone version is not currently available.", "Windows 10 et Windows 11 sont pris en charge. Aucune version pour smartphone n’est actuellement disponible.", "Windows 10 und Windows 11 werden unterstützt. Eine Smartphone-Version ist derzeit nicht verfügbar.", "Es compatible con Windows 10 y Windows 11. Actualmente no hay versión para smartphone.");
  add("Try your first match free.", "Essayez gratuitement votre premier match.", "Testen Sie Ihr erstes Spiel kostenlos.", "Prueba gratis tu primer partido.");
  add("Install Handball Analyzer and explore match recording, live analysis, team and player reports, and PDF preview.", "Installez Handball Analyzer et découvrez la saisie de matchs, l’analyse en direct, les rapports d’équipe et de joueurs et l’aperçu PDF.", "Installieren Sie Handball Analyzer und entdecken Sie Spielerfassung, Live-Analyse, Team- und Spielerberichte sowie PDF-Vorschau.", "Instala Handball Analyzer y descubre el registro, el análisis en directo, los informes de equipo y jugadores y la vista previa de PDF.");
  add("Install from Microsoft Store", "Installer depuis Microsoft Store", "Im Microsoft Store installieren", "Instalar desde Microsoft Store");
  add("Privacy Policy", "Politique de confidentialité", "Datenschutzerklärung", "Política de privacidad");
  add("Select language", "Choisir la langue", "Sprache auswählen", "Elegir idioma");

  const translateText = (root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const source = node.nodeValue.trim();
      const translated = dictionary[source]?.[language];
      if (translated) node.nodeValue = node.nodeValue.replace(source, translated);
    });
  };

  translateText(document.body);
  document.documentElement.lang = language;
  const labels = { fr: "Choisir la langue", de: "Sprache auswählen", es: "Elegir idioma" };
  document.querySelectorAll("[data-language-picker]").forEach((select) => select.setAttribute("aria-label", labels[language]));

  const productTitles = {
    fr: "Handball Analyzer | Analyse de match de handball pour Windows | nunoken",
    de: "Handball Analyzer | Handball-Spielanalyse für Windows | nunoken",
    es: "Handball Analyzer | Análisis de balonmano para Windows | nunoken"
  };
  const homeTitles = {
    fr: "nunoken — Transformer les données en compréhension.",
    de: "nunoken — Aus Aufzeichnungen wird Verständnis.",
    es: "nunoken — Convierte los registros en comprensión."
  };
  document.title = document.body.classList.contains("product-page") ? productTitles[language] : homeTitles[language];
})();
