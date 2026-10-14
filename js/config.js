/* ==========================================================
   ALLAH DON : CONFIGURATION
   Modifiez ce fichier pour personnaliser le portail.
   Langues disponibles : français (fr) et bamanankan (bm).
   ========================================================== */

/* 1. NUMÉRO WHATSAPP
   Format international, sans « + », sans espaces ni tirets.
   Exemple Mali : "223" + numéro à 8 chiffres  →  "22370123456" */
const WHATSAPP_NUMBER = "22395604923";

/* 2. LANGUE
   LANG                  : langue d'ouverture du site ("fr" ou "bm").
                           Un lien se terminant par ?lang=bm ouvre le site en bamanankan.
   WHATSAPP_MESSAGE_LANG : langue du message envoyé sur WhatsApp.
                           "auto" = la langue choisie par le visiteur,
                           "fr" ou "bm" = toujours la même langue. */
const LANG = "bm";
const WHATSAPP_MESSAGE_LANG = "fr";

/* 3. IMAGES DE LA DAARA (défilement sur la page d'accueil)
   Déposez vos photos dans le dossier assets/daara/ puis listez-les ici.
   - src     : chemin de l'image (jpg, png, webp ou svg)
   - alt     : description courte (accessibilité), par langue
   - legende : texte affiché sous l'image, par langue (laissez "" pour aucun)
   Ajoutez ou supprimez des lignes librement. */
const DAARA_IMAGES = [
  {
    src: "assets/daara/porte-daara.jpg",
    alt: { fr: "La Daara : lieu d'enseignement", bm: "Daara : kalan yɔrɔ" },
    legende: { fr: "La Daara", bm: "Daara" }
  },
  {
    src: "assets/daara/kutubula2.jpg",
    alt: { fr: "La Daara : le pôle, maître spirituel SAMBA N'DJOBDY DIALLO", bm: "Daara : SAMBA N'DJOBDY DIALLO kutubul wakti" },
    legende: { fr: "Le maître spirituel", bm: "Kutubul wakti" }
  },
  {
    src: "assets/daara/begueti.jpg",
    alt: { fr: "La Daara : les disciples", bm: "Daara : kalan denw" },
    legende: { fr: "Les disciples", bm: "Kalan denw" }
  },
  {
    src: "assets/daara/cercle.jpg",
    alt: { fr: "La Daara : cercle de dhikr", bm: "Daara : zikiri lamini" },
    legende: { fr: "Le cercle du dhikr", bm: "Zikiri lamini" }
  },
  {
    src: "assets/daara/kutubu2.jpg",
    alt: { fr: "La Daara : un héritage spirituel", bm: "Daara : Al barika SAMBA N'DJOBDY DIALLO" },
    legende: { fr: "Un héritage spirituel", bm: "Al barika SAMBA N'DJOBDY DIALLO" }
  },
  {
    src: "assets/daara/diakite.jpg",
    alt: { fr: "La Daara : étude et transmission", bm: "Daara : kalan ni dɔnniya di" },
    legende: { fr: "L'étude et la transmission", bm: "Kalan ni dɔnniya di" }
  },
  {
    src: "assets/daara/maouloud.jpg",
    alt: { fr: "La Daara : célébration du Maouloud du Prophète (PSL)", bm: "Daara : Mawulidi kɛtɔ (Kira ka danyeli don)" },
    legende: { fr: "Maouloud du Prophète (PSL)", bm: "Mawulidi (Kira ka danyeli don)" }
  }
];

/* Durée d'affichage de chaque image, en millisecondes */
const CAROUSEL_DELAY = 5000;

/* 3 bis. VIDÉOS (section en bas de la page d'accueil)
   Pour ajouter une vidéo YouTube, copiez une ligne et remplacez :
   - id    : le code de la vidéo, c'est la partie après « v= » dans le lien
             youtube.com/watch?v=XXXXXXXXXXX  (ou après « /embed/ » dans le code d'intégration)
   - titre : le titre affiché, en français et en bamanankan
   - texte : une courte description (laissez "" pour aucune)
   Laissez la liste vide ( [] ) pour masquer entièrement la section. */
const VIDEOS = [
  {
    id: "8U6TOojVpHM",
    titre: { fr: "Kutub SAMBA N'DJOBDY DIALLO", bm: "Kutub SAMBA N'DJOBDY DIALLO" },
    texte: { fr: "", bm: "" }
  }
];

/* Miniature de la vidéo avant lecture.
   false = AUCUNE connexion à YouTube tant que le visiteur n'appuie pas sur lecture
           (cohérent avec la mention de confidentialité du site). Recommandé.
   true  = affiche l'image de couverture YouTube, mais YouTube reçoit alors l'adresse
           IP de chaque visiteur dès l'ouverture de la page. */
const SHOW_VIDEO_THUMBNAILS = false;

/* 4. TEXTES DU SITE
   Chaque langue est un objet complet. Pour ajouter une langue,
   dupliquez un objet, traduisez les valeurs, puis ajoutez un bouton
   dans index.html (<button data-lang="...">). */
const TEXTS = {

  /* ======================== FRANÇAIS ======================== */
  fr: {
    siteName: "Allah Don",
    portal: "Portail",
    langName: "Français",
    basmala: "بسم الله الرحمن الرحيم",
    heroTitle: "Allah Don",
    heroSubtitle:
      "Une voie initiatique fondée sur l'islam et le cheminement vers la Vérité. " +
      "Ici, on frappe humblement à la porte avant d'entrer.",
    heroButton: "Franchir le seuil",

    stepLabels: ["Qui es-tu ?", "D'où viens-tu ?", "Que cherches-tu ?"],

    q1: {
      title: "Qui es-tu ?",
      intro: "Présente-toi simplement, tel que tu es.",
      nameLabel: "Nom et prénom",
      namePlaceholder: "Ton nom et ton prénom",
      ageLabel: "Âge ou tranche d'âge (facultatif)",
      agePlaceholder: "Ex. : 34 ans, ou 30-40 ans"
    },
    q2: {
      title: "D'où viens-tu ?",
      intro: "Dis-nous d'où tu viens, et où en est ton chemin.",
      countryLabel: "Pays",
      countryPlaceholder: "Ton pays",
      cityLabel: "Ville",
      cityPlaceholder: "Ta ville",
      pathLabel: "Ton parcours spirituel actuel",
      pathOptions: [
        "Musulman pratiquant",
        "Chrétien ou autre religion, en quête de l'islam",
        "Musulman en quête",
        "Déjà dans une voie soufie",
        "Autre"
      ]
    },
    q3: {
      title: "Que cherches-tu ?",
      intro: "Exprime ta quête et ton intention, avec sincérité.",
      questLabel: "Ta quête",
      questPlaceholder: "Écris ici ce que tu cherches en frappant à cette porte…",
      minChars: 20,
      counter: "{n} / {min} caractères minimum"
    },

    recap: {
      title: "Avant de partir",
      intro: "Relis tes réponses. Elles seront transmises par WhatsApp.",
      who: "Qui es-tu ?",
      from: "D'où viens-tu ?",
      seek: "Que cherches-tu ?",
      edit: "Modifier",
      sincerity:
        "Je viens avec sincérité et je comprends que ma demande sera examinée.",
      send: "Demander le wird du cheikh"
    },

    nav: { prev: "Précédent", next: "Continuer", recap: "Voir le récapitulatif" },

    errors: {
      name: "Merci d'écrire ton nom et ton prénom.",
      country: "Merci d'indiquer ton pays.",
      city: "Merci d'indiquer ta ville.",
      quest: "Prends le temps d'écrire au moins {min} caractères sur ta quête.",
      sincerity: "Merci de cocher la case pour continuer.",
      noNumber: "Le numéro WhatsApp n'est pas encore configuré (voir js/config.js)."
    },

    thanks: {
      title: "Que la paix soit sur toi",
      text:
        "WhatsApp s'est ouvert avec ta demande. Envoie le message, puis arme-toi " +
        "de patience : ta demande sera examinée et une réponse te sera donnée " +
        "en temps voulu.",
      again: "Recommencer",
      reopen: "Rouvrir WhatsApp"
    },

    privacy:
      "Confidentialité : ce site ne stocke aucune donnée et n'envoie tes réponses à " +
      "aucun serveur. Elles restent dans ton navigateur jusqu'à ce que tu " +
      "envoies toi-même le message sur WhatsApp. Les vidéos ne se chargent depuis " +
      "YouTube que si tu appuies sur lecture.",

    videos: {
      title: "Paroles et enseignements",
      intro: "Écoute les enseignements de la voie.",
      source: "Les vidéos sont hébergées sur YouTube.",
      openOn: "Voir sur YouTube",
      play: "Lire la vidéo : {title}"
    },

    ui: {
      skipLink: "Aller au contenu",
      langGroup: "Langue / Kan",
      progress: "Progression",
      carousel: "Images de la Daara",
      carPrev: "Image précédente",
      carNext: "Image suivante",
      carChoose: "Choisir une image",
      carDot: "Image {i} sur {n}"
    },

    whatsappMessage: {
      greeting: "Assalamou alaykoum wa rahmatoullah.",
      request: "Je souhaite recevoir le wird du cheikh.",
      who: "Qui suis-je ?",
      from: "D'où je viens ?",
      seek: "Ce que je cherche :"
    }
  },

  /* ======================= BAMANANKAN =======================
     ATTENTION :  À faire relire
     par un locuteur du bamanankan (et par le cheikh pour les
     termes religieux) avant la mise en ligne. Orthographe
     malienne : ɛ  ɔ  ɲ  ŋ. */
  bm: {
    siteName: "Allah Don",
    portal: "Da",
    langName: "Bamanankan",
    basmala: "بسم الله الرحمن الرحيم",
    heroTitle: "Allah Don",
    heroSubtitle:
      "Ka Allah mɛn, Ka Allah ye, Ka Allah Don. " +
      "Sira min sinsinnen bɛ Allah doniya Haqiqa kan. " +
      "Yan, mɔgɔ bɛ da gosi ni majigilenya ye sani a ka don.",
    heroButton: "Da tɛmɛ",

    stepLabels: ["I ye jɔn ye?", "I bɔra min?", "I bɛ mun ɲini?"],

    q1: {
      title: "I ye jɔn ye?",
      intro: "I yɛrɛ jira fɔlɔ, i bɛ min ye.",
      nameLabel: "I tɔgɔ ni i jamu",
      namePlaceholder: "I tɔgɔ ni i jamu sɛbɛn yan",
      ageLabel: "I si (a tɛ wajibi ye)",
      agePlaceholder: "Misali : san 34, walima san 30-40"
    },
    q2: {
      title: "I bɔra min?",
      intro: "Fɔ an ye i bɔra min, ani i ka diine sila bɛ min na.",
      countryLabel: "Jamana",
      countryPlaceholder: "I ka jamana",
      cityLabel: "Dugu",
      cityPlaceholder: "I ka dugu",
      pathLabel: "I ka diine sila sisan",
      /* Même ordre et même nombre de choix que la liste française */
      pathOptions: [
        "Silamɛ min bɛ batoli kɛ",
        "Kerecɛn walima diine wɛrɛ, min bɛ Silamɛya ɲini",   /* À faire relire */
        "Silamɛ min bɛ sila ɲini",
        "Ne bɛ Sufiya sila dɔ la kaban",
        "Wɛrɛ"
      ]
    },
    q3: {
      title: "I bɛ mun ɲini?",
      intro: "I ka ɲinini ni i ka niya fɔ ni dusu saniyalen ye.",
      questLabel: "I ka ɲinini",
      questPlaceholder: "Sɛbɛn yan i bɛ min ɲini ka na da gosi yan…",
      minChars: 20,
      counter: "{n} / {min} sɛbɛnni dɔgɔman"
    },

    recap: {
      title: "Sani i ka taa",
      intro: "I ka jaabiw kalan segin. Olu bɛ ci WhatsApp fɛ.",
      who: "I ye jɔn ye?",
      from: "I bɔra min?",
      seek: "I bɛ mun ɲini?",
      edit: "Yɛlɛma",
      sincerity:
        "N bɛ na ni dusu saniyalen ye, ani n b'a famu ko n ka ɲinini bɛna sɛgɛsɛgɛ.",
      send: "Cheikh ka wird ɲini"
    },

    nav: { prev: "Segin", next: "Taa ɲɛ", recap: "Jaabiw ye" },

    errors: {
      name: "I tɔgɔ ni i jamu sɛbɛn, i ni ce.",
      country: "I ka jamana fɔ, i ni ce.",
      city: "I ka dugu fɔ, i ni ce.",
      quest: "I ka ɲinini sɛbɛn ka bon dɔɔnin (ka tɛmɛ sɛbɛnni {min} kan).",
      sincerity: "I ka sɔnni taamasyɛn in kɛ ka taa ɲɛ, i ni ce.",
      noNumber: "WhatsApp nimɔrɔ ma sigi fɔlɔ (js/config.js lajɛ)."
    },

    thanks: {
      title: "Hɛrɛ ka kɛ i ye",
      text:
        "WhatsApp yɛlɛnna ni i ka ɲinini ye. Ci in ci, o kɔ, sabali kɛ: " +
        "i ka ɲinini bɛna sɛgɛsɛgɛ, ka jaabi di i ma a waati la.",
      again: "A daminɛ kokura",
      reopen: "WhatsApp yɛlɛn kokura"
    },

    privacy:
      "Dogoyalɔn : nin sayiti tɛ kunnafoni si mara, a tɛ si ci serveri si ma. " +
      "I ka jaabiw bɛ to i ka navigatɛri kɔnɔ fo i yɛrɛ ka message ci WhatsApp kan. " +
      "Videyow tɛ bɔ YouTube kan ni i ma lajɛli butɔni digi.",

    /* À faire relire */
    videos: {
      title: "Kalanw ni kumaw",
      intro: "Sila in ka kalanw lamɛn.",
      source: "Videyow bɛ YouTube kan.",
      openOn: "A lajɛ YouTube kan",
      play: "Videyo daminɛ : {title}"
    },

    ui: {
      skipLink: "Taa kɔnɔ ma",
      langGroup: "Langue / Kan",
      progress: "Ɲɛtaa",
      carousel: "Daara ka foto",
      carPrev: "Foto kɔrɔ",
      carNext: "Foto nata",
      carChoose: "Foto sugandi",
      carDot: "Foto {i} {n} kɔnɔ"
    },

    whatsappMessage: {
      greeting: "Assalamou alaykoum wa rahmatoullah.",
      request: "N b'a fɛ ka Cheikh ka wird sɔrɔ.",
      who: "N ye jɔn ye?",
      from: "N bɔra min?",
      seek: "N bɛ min ɲini :"
    }
  }
};
