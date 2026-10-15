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
    src: "assets/daara/maitre-samba.jpg",
    alt: { fr: "Maître SAMBA N'DJOBDY DIALLO, le guide suprême", bm: "Sira jirabaga, « Waati in Kutub »" },
    legende: { fr: "Le guide ", bm: "Yeelen sira jirabaga belebele" }
  },
  {
    src: "assets/daara/kutubula.jpg",
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

/* 3 ter. POÈMES DES GRANDS MAÎTRES SPIRITUELS (section sur la page d'accueil)
   Pour ajouter un poème, copiez un bloc et remplacez :
   - titre  : titre du poème en français et en bamanankan
   - auteur : nom du maître spirituel
   - arabe  : verset ou citation en arabe (laissez "" si aucun)
   - vers   : strophes du poème par langue (tableau de phrases)
   - note   : courte méditation ou source (laissez "" si aucune)
   Laissez la liste vide ( [] ) pour masquer entièrement la section. */
const POEMS = [
  {
    titre: { fr: "La Quête de la Vérité (Haqiqa)", bm: "Haqiqa ɲinini" },
    auteur: "Kutub SAMBA N'DJOBDY DIALLO",
    arabe: "لَيْسَ التَّصَوُّفُ رَسْمًا وَلَا اسْمًا ، إِنَّمَا هُوَ حَقِيقَةٌ وَفَنَاءٌ فِي الله",
    vers: {
      fr: [
        "Frappe à la porte du Cœur avec sincérité et humilité,",
        "Dépouille-toi de l'illusion pour contempler la Clarté.",
        "Celui qui chemine vers Dieu par amour et pureté,",
        "Trouvera dans le silence la divine Réalité."
      ],
      bm: [
        "I kɔnɔ da gosi ni dusu saniyalen ani majigilenya ye,",
        "I yɛrɛ bila gansan walasa i k'a Yeelen ye.",
        "Mɔgɔ min bɛ taama ka taa Allah fanfɛ ni kanuya ye,",
        "A bɛna Tiɲɛ sɔrɔ dusu sumalen kɔnɔ."
      ]
    },
    note: {
      fr: "Méditation sur le dépouillement de l'ego et l'accès à la Connaissance divine (Allah Don).",
      bm: "Hakilina yɛrɛmajigi ani Allah dɔnniya koo la."
    }
  },
  {
    titre: { fr: "La Religion de l'Amour", bm: "Kanuya Diine" },
    auteur: "Cheikh Al-Akbar Ibn Arabi",
    arabe: "أَدِينُ بِدِينِ الْحُبِّ أَنَّى تَوَجَّهَتْ رَكَائِبُهُ ، فَالْحُبُّ دِينِي وَإِيمَانِي",
    vers: {
      fr: [
        "Mon cœur est devenu capable d'accueillir toute forme :",
        "Une prairie pour les gazelles, un cloître pour les moines,",
        "Un temple pour les idoles, la Kaaba pour le pèlerin,",
        "Les tables de la Thora et les feuillets du Coran.",
        "Je professe la religion de l'Amour, où que se dirigent ses pas."
      ],
      bm: [
        "Ne dusu yɛlɛmana ka se ka kɛ fɛn bɛɛ ye :",
        "Sogoninw ka ɲɛgɛ, batobagaw ka so,",
        "Batonfenw ka daara, ani Kaaba taamadenw ye,",
        "Tawreta ani Kurana kitabu saniyalen.",
        "Ne ka diine ye Kanuya ye, a taamaw bɛ taa yɔrɔ o yɔrɔ."
      ]
    },
    note: {
      fr: "Tiré de Turjuman al-Achwaq (L'Interprète des désirs).",
      bm: "Turjuman al-Achwaq kitabu kɔnɔ kuma lalo."
    }
  },
  {
    titre: { fr: "Viens, qui que tu sois", bm: "Na, i mana kɛ jɔn o jɔn ye" },
    auteur: "Mawlânâ Djalâl ad-Dîn Rûmî",
    arabe: "بَازْ آي بَازْ آي هَرْ آنْچِهِ هَسْتِي بَازْ آي",
    vers: {
      fr: [
        "Viens, viens, qui que tu sois,",
        "Vagabond, adorateur ou amoureux de l'exil, peu importe !",
        "Notre caravane n'est pas celle du désespoir.",
        "Même si tu as brisé tes serments mille fois,",
        "Viens, franchis le seuil et viens encore !"
      ],
      bm: [
        "Na, na, i mana kɛ jɔn o jɔn ye,",
        "Taamabaa, batobaga walima tunkantigi, o tɛ koo ye !",
        "An ka kulu in tɛ jigitigɛ yɔrɔ ye.",
        "Hali ni i y'i ka kalifa tiɲɛ siɲɛ ba kelen,",
        "Na, da tɛmɛ ka don kokura !"
      ]
    },
    note: {
      fr: "L'appel universel à la porte de la Miséricorde et de l'initiation.",
      bm: "Weelekan kɛrɛnkɛrɛnnen hine ni donniya da la."
    }
  },
  {
    titre: { fr: "La Lumière du Cœur", bm: "Dusu ka Yeelen" },
    auteur: "Hujjat al-Islam Al-Ghazali",
    arabe: "الْعِلْمُ نُورٌ يَقْذِفُهُ اللَّهُ فِي قَلْبِ مَنْ يَشَاءُ",
    vers: {
      fr: [
        "La science de la Vérité n'est pas faite de disputes,",
        "Elle est une lumière que Dieu projette dans le cœur purifié.",
        "Éteins la flamme de tes passions éphémères,",
        "Et la lampe divine éclairera ton chemin."
      ],
      bm: [
        "Tiɲɛ dɔnniya tɛ sɔsɔli kumaw ye,",
        "A ye yeelen lo min bɛ bila dusu saniyalen kɔnɔ.",
        "I yɛrɛ ka nege gansanw tasuma faga,",
        "Walasa Ala ka fitine ka i ka sira jɛya."
      ]
    },
    note: {
      fr: "Tiré de Ihya Ulum al-Din (Revivification des sciences de la foi).",
      bm: "Ihya Ulum al-Din kitabu kɔnɔ kuma lalo."
    }
  },
  {
    titre: { fr: "Le Miroir de l'Être", bm: "Ja Min Bɛ Bɛɛ Jira" },
    auteur: "Mahmoud Shabestari",
    arabe: "نَظَرْتُ بِعَيْنِ الْقَلْبِ فَرَأَيْتُ وَاحِدًا ، لَا شَرِيكَ لَهُ فِي الْمُلْكِ",
    vers: {
      fr: [
        "L'univers entier est le miroir de l'Aimé,",
        "Dans chaque grain de sable repose un soleil caché.",
        "Si tu fends le cœur de la plus petite particule,",
        "Tu y trouveras la splendeur du Mystère suprême."
      ],
      bm: [
        "Diiɲɛ bɛɛ ye Kanulen ka ja-jiralan lo ye,",
        "Cencen koli kelen bɛɛ kɔnɔ tile dɔ dogolen bɛ yen.",
        "N'i y'a fitininba sɔn kɔnɔ ci,",
        "I bɛna Gundo lakika cɛɲi sɔrɔ a cɛma."
      ]
    },
    note: {
      fr: "Tiré de Gulshan-i Raz (La Roseraie du Mystère).",
      bm: "Gulshan-i Raz kitabu kɔnɔ kalan kɔrɔba."
    }
  },
  {
    titre: { fr: "Le Secret de l'Union", bm: "Gundo Saniyalen" },
    auteur: "Mansour Al-Hallaj",
    arabe: "أَنَا مَنْ أَهْوَى وَمَنْ أَهْوَى أَنَا ، نَحْنُ رُوحَانِ حَلَلْنَا بَدَنَا",
    vers: {
      fr: [
        "Je suis devenu Celui que j'aime et Celui que j'aime est moi,",
        "Nous sommes deux esprits unis dans une seule demeure.",
        "Si tu me vois, c'est Lui que tu contemples,",
        "Et dans Son souvenir s'effacent tous les séparations."
      ],
      bm: [
        "Ne yɛlɛmana ka kɛ ne kanulen ye, a fana ye ne ye,",
        "An ye ni fla ye minnu jatera so kelen kɔnɔ.",
        "N'i ye ne ye, o ye Alee lo ye,",
        "A hakilijigi kɔnɔ, faratɔya bɛɛ bɛ banna."
      ]
    },
    note: {
      fr: "Paroles d'anéantissement (Fana) et d'extase spirituelle.",
      bm: "Fanaa kɛli koo la kuma min bɔra Hallaj da."
    }
  },
  {
    titre: { fr: "L'Abandon Confiant", bm: "Ala Kalifali" },
    auteur: "Ibn Ata Allah al-Iskandari",
    arabe: "أَرِحْ نَفْسَكَ مِنَ التَّدْبِيرِ ، فَمَا قَامَ بِهِ غَيْرُكَ عَنْكَ لَا تَقُمْ بِهِ لِنَفْسِكَ",
    vers: {
      fr: [
        "Soulage ton âme des fardeaux et des calculs,",
        "Ce dont l'Éternel S'est chargé pour toi,",
        "Ne t'épuise pas à le porter toi-même.",
        "La confiance sincère ouvre les portes les plus lourdes."
      ],
      bm: [
        "I yɛrɛ lafiya hakili jateminɛ gansanw na,",
        "Fɛn min bila la Danbaga bolo i ye,",
        "Kana i yɛrɛ sɛgɛn ka o ta.",
        "Jigi dafalen bɛ da girinman bɛɛ dayɛlɛ."
      ]
    },
    note: {
      fr: "Tiré des Hikam (Sagesses d'Ibn Ata Allah).",
      bm: "Hikam kitabu kɔnɔ laadili duman."
    }
  },
  {
    titre: { fr: "L'Amour Désintéressé", bm: "Kanuya Saniyalen" },
    auteur: "Rabia al-Adawiyya",
    arabe: "مَا عَبَدْتُكَ خَوْفاً مِنْ نَارِكَ وَلَا طَمَعاً فِي جَنَّتِكَ ، بَلْ عَبَدْتُكَ لِأَنَّكَ أَهْلٌ لِلْعِبَادَةِ",
    vers: {
      fr: [
        "Je ne T'ai point adoré par crainte de Ton châtiment,",
        "Ni par convoitise de Ton paradis promis.",
        "Mais je T'ai adoré pour Toi-même, ô Unique,",
        "Car Toi seul es digne de l'Adoration et de l'Amour."
      ],
      bm: [
        "N m'i bato tasuma siranya kosɔn,",
        "N fana m'i bato alijɛnɛ ɲinini dɔrɔn kosɔn.",
        "Nka n y'i bato i yɛrɛ lo kosɔn,",
        "Bari i kelenpe lo ka kan ni Batoli ye."
      ]
    },
    note: {
      fr: "La quintessence du pur amour divin (Al-Mahabba).",
      bm: "Kanuya lakika ladiili Ala kɛlɛnpe kosɔn."
    }
  },
  {
    titre: { fr: "La Voie de la Sincérité", bm: "Dusu Saniya Sira" },
    auteur: "Cheikh Ahmadou Bamba (Khadimou Rassoul)",
    arabe: "تَبَرَّأْتُ مِنْ حَوْلِي وَقُوَّتِي إِلَى حَوْلِ اللَّهِ وَقُوَّتِهِ",
    vers: {
      fr: [
        "Je me suis déchargé de ma force et de mon orgueil,",
        "Pour entrer dans l'asile de la Puissance d'Allah.",
        "Le savoir sans œuvre est un fardeau stérile,",
        "Et l'œuvre sans sincérité s'envole comme la cendre."
      ],
      bm: [
        "Ne y'i n bolo bɔ ne yɛrɛ ka fanga ni waso la,",
        "Ka don Ala ka seko ni a barika kɔnɔ.",
        "Dɔnniya min kɛwale t'a la, o ye donkoli gansan ye,",
        "Kɛwale min dusu saniya t'a la, o bɛ fosi i n'a fɔ buguri."
      ]
    },
    note: {
      fr: "Enseignement sur le service humble et le renoncement aux vanités.",
      bm: "Kalan min bɛ mɔgɔ lalo majigilenya la."
    }
  },
  {
    titre: { fr: "L'Arc-en-ciel de la Tolérance", bm: "Balimaya Yeelen" },
    auteur: "Tierno Bokar Salif Tall",
    arabe: "الْخَلْقُ كُلُّهُمْ عِيَالُ اللَّهِ ، وَأَحَبُّهُمْ إِلَيْهِ أَنْفَعُهُمْ لِعِيَالِهِ",
    vers: {
      fr: [
        "L'arc-en-ciel doit sa splendeur à la variété de ses nuances.",
        "La vérité divine est semblable à un miroir tombé du ciel :",
        "Chacun en ramasse un éclat et croit tenir l'aurore.",
        "Aime ton prochain, car il est le reflet du même Maître."
      ],
      bm: [
        "Sankololankolon cɛɲi bɔra a ɲɛ suguya caman lo la.",
        "Ala ka tiɲɛ bɛ i n'a fɔ ja-jiralan min bɔra sankolo la ka ci :",
        "Mɔgɔ bɛɛ b'a koli kelen ta k'a miiri ko ale y'a bɛɛ sɔrɔ.",
        "I balima kanu, bari a bɔra Masacɛ kelenpe lo bolo."
      ]
    },
    note: {
      fr: "Sagesse du Maître de Bandiagara (Mali).",
      bm: "Bandiagara karamɔgɔba ka hakilitigiya kuma."
    }
  },
  {
    titre: { fr: "Le Cantique des Oiseaux", bm: "Kɔnɔninw ka Sila" },
    auteur: "Farid al-Din Attar",
    arabe: "مَنْ عَرَفَ نَفْسَهُ فَقَدْ عَرَفَ رَبَّهُ",
    vers: {
      fr: [
        "Après avoir gravi les sept vallées de l'épreuve,",
        "Les oiseaux assoiffés d'absolu trouvèrent le Trône.",
        "Ils virent alors que le Roi tant recherché",
        "Était le miroir limpide de leur propre être intérieur."
      ],
      bm: [
        "Taama gɛlɛnw wolonwula tɛmɛnen kɔ,",
        "Kɔnɔnin minnu tun bɛ Masacɛ ɲini, u sera gundo la.",
        "O tuma u y'a ye ko Masacɛ fɛn wɛrɛ tɛ,",
        "Fo olu yɛrɛ ka dusu saniyalen."
      ]
    },
    note: {
      fr: "Tiré de Mantiq al-Tayr (La Conférence des Oiseaux).",
      bm: "Mantiq al-Tayr kitabu kɔnɔ baro saniyalen."
    }
  },
  {
    titre: { fr: "La Coupe du Souvenir", bm: "Hakilijigi Ji" },
    auteur: "Sultan des Amants Ibn al-Farid",
    arabe: "شَرِبْنَا عَلَى ذِكْرِ الْحَبِيبِ مُدَامَةً ، سَكِرْنَا بِهَا مِنْ قَبْلِ أَنْ يُخْلَقَ الْكَرْمُ",
    vers: {
      fr: [
        "Au souvenir de l'Aimé, nous avons bu un vin de pureté,",
        "Dont la douceur nous enivra avant même que la vigne ne fût créée.",
        "Sa lumière est un soleil, son verre une lune pleine,",
        "Heureux le pèlerin qui y étanche sa soif éternelle !"
      ],
      bm: [
        "Kanulen hakilijigi la, an ye ji saniyalen min,",
        "Min dumanba ye an kɔnɔna lafiya sani jiri ka da.",
        "A yeelen ye tile ye, a dusu ye kalo kɛnɛ ye,",
        "Hɛrɛ bɛ taamaden ma min minna o ji la !"
      ]
    },
    note: {
      fr: "Extrait de l'Éloge mystique (Al-Khamriyya).",
      bm: "Al-Khamriyya poyiziri lakika kɔnɔ kuma."
    }
  },
  {
    titre: { fr: "Le Cœur avec Dieu", bm: "Dusu Kɛli ni Ala ye" },
    auteur: "Cheikh Abd al-Qadir al-Jilani",
    arabe: "كُنْ مَعَ اللَّهِ بِلَا خَلْقٍ ، وَمَعَ الْخَلْقِ بِلَا نَفْسٍ",
    vers: {
      fr: [
        "Demeure avec Allah sans la présence des créatures,",
        "Et sois avec les créatures sans l'orgueil de ton ego.",
        "Purifie le sanctuaire intérieur de tout attachement,",
        "Et la majesté divine y résidera sans voile."
      ],
      bm: [
        "Kɛ ni Ala ye sani mɔgɔw ka kɛ i ɲɛkɔrɔ,",
        "I kɛ ni mɔgɔw ye sani i yɛrɛ kunkolo ka kɔrɔta.",
        "I kɔnɔna sani ka bɔ duniɲa donkoli bɛɛ la,",
        "Walasa Ala ka nɔɔrɔ ka sigi i dusu kɔnɔ."
      ]
    },
    note: {
      fr: "Tiré de Futuh al-Ghayb (Les Révélations de l'Invisible).",
      bm: "Futuh al-Ghayb kitabu kɔnɔ kalan."
    }
  },
  {
    titre: { fr: "La Porte des Grâces", bm: "Hine ka Daba" },
    auteur: "Cheikh Ahmad at-Tijani",
    arabe: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ",
    vers: {
      fr: [
        "Ouvre la porte du cœur par la prière et la ferveur,",
        "Sur celui qui a scellé le pacte des messagers.",
        "Dans la paix du dhikr s'effacent les tempêtes,",
        "Et l'âme retrouve sa sérénité auprès de son Seigneur."
      ],
      bm: [
        "I dusu da dayɛlɛ ni seli ani zikiri ye,",
        "Kira saniyalen kan min y'an bɛɛ sira jira.",
        "Hakilijigi kɔnɔ fiɲɛ juguw bɛ dabila,",
        "Dusu bɛ a ka lafiya sɔrɔ a Dabaga kɔrɔ."
      ]
    },
    note: {
      fr: "Méditation sur la prière Al-Fatihi et le dhikr continuel.",
      bm: "Salatoul Fatihi ni zikiri koo la kalan."
    }
  },
  {
    titre: { fr: "La Vision sans Voile", bm: "Yeeli Hakili Saniyalen" },
    auteur: "Abu al-Hassan al-Chadhili",
    arabe: "إِذَا أَرَدْتَ أَنْ يَفْتَحَ اللَّهُ بَصِيرَتَكَ ، فَاغْضُضْ بَصَرَكَ عَنِ الْأَغْيَارِ",
    vers: {
      fr: [
        "Si tu souhaites que s'ouvre l'œil de ton cœur,",
        "Ferme les yeux sur les séductions trompeuses.",
        "Ne cherche nul refuge en dehors de l'Éternel,",
        "Car Son ombre suffit à abriter l'univers."
      ],
      bm: [
        "N'i b'a fɛ i dusu ɲɛ ka dayɛlɛ tiɲɛ na,",
        "I ɲɛ datugu ka bɔ nkalon fɛnw kan.",
        "Kana jigiya ɲini fɛn wɛrɛ kɔnɔ fo Alee kelenpe,",
        "A dula kelenpe wasara diiɲɛ bɛɛ ma."
      ]
    },
    note: {
      fr: "Enseignement sur la vigilance du regard intérieur (Basira).",
      bm: "Basira (kɔnɔna yeeli) koo la laadili."
    }
  },
  {
    titre: { fr: "L'Extinction de l'Ego", bm: "Yɛrɛ Bɔli" },
    auteur: "Bayazid Bastami",
    arabe: "خَرَجْتُ مِنْ نَفْسِي كَمَا تَخْرُجُ الْحَيَّةُ مِنْ جِلْدِهَا ، فَرَأَيْتُ الْحَقَّ بِالْحَقِّ",
    vers: {
      fr: [
        "Je suis sorti de moi-même comme le serpent de sa mue,",
        "Et j'ai regardé avec le regard de la Réalité.",
        "J'ai vu que l'Amour, l'Amant et l'Aimé sont Un,",
        "Et qu'en dehors de Sa clarté, tout n'est qu'ombre passagère."
      ],
      bm: [
        "N bɔra ne yɛrɛ la i n'a fɔ sa bɛ bɔ a wolo kɔnɔ,",
        "N y'a lajɛ ni tiɲɛ ɲɛ ye dusu kɔnɔ.",
        "N y'a ye ko Kanuya, Kanubaga ani Kanulen ye kelen ye,",
        "Ni a yeelen tɛ, fɛn bɛɛ ye sùla gansan ye."
      ]
    },
    note: {
      fr: "Paroles de gnose sur la délivrance de l'illusion individuelle.",
      bm: "Yɛrɛkɛlen dabila k'i don Ala kɔnɔ."
    }
  },
  {
    titre: { fr: "Le Chant de la Création", bm: "Daafenw ka Tandoli" },
    auteur: "Dhu al-Nun al-Misri",
    arabe: "سَمِعْتُ تَسْبِيحَ كُلِّ شَيْءٍ ، فَعَلِمْتُ أَنَّ الْوُجُودَ كُلَّهُ سُجُودٌ",
    vers: {
      fr: [
        "J'ai écouté la voix des arbres et des étoiles,",
        "Le murmure des ruisseaux et le souffle du vent.",
        "Toute chose prosterne son âme devant l'Incréé,",
        "Et la création entière n'est qu'une symphonie d'adoration."
      ],
      bm: [
        "N y'a mɛn jiriw ni dolo bɛ kuma ka Ala tando,",
        "Bajiw ni fiɲɛ bɛɛ b'a kofɔ ni majigi ye.",
        "Fɛn bɛɛ b'u kunbiri gosi Danbaga kɔrɔ,",
        "Diiɲɛ bɛɛ kɛra batoli kelen dɔrɔn ye."
      ]
    },
    note: {
      fr: "Méditation sur la louange cosmique (Tasbih).",
      bm: "Tasbihi koo la hakilina cɛɲi."
    }
  },
  {
    titre: { fr: "La Fraternité Humaine", bm: "Mɔgɔya Kelenteya" },
    auteur: "Cheikh Saadi de Chiraz",
    arabe: "بَنُو آدَمَ أَعْضَاءُ جَسَدٍ وَاحِدٍ ، إِذَا اشْتَكَى مِنْهُ عُضْوٌ تَدَاعَى لَهُ سَائِرُ الْجَسَدِ",
    vers: {
      fr: [
        "Les enfants d'Adam sont les membres d'un seul corps,",
        "Issus de la même lumière et du même souffle.",
        "Si la douleur étreint un seul de nos frères,",
        "Les autres membres perdent le sommeil et la paix."
      ],
      bm: [
        "Adama denw bɛɛ ye fari kelen lo bolow ye,",
        "U bɛɛ bɔra yeelen kelenpe lo kɔnɔ.",
        "Ni dimi y'an balimacɛ kelen sɔrɔ,",
        "Tɔw bɛɛ bɛ sunɔgɔ ni lafiya bɛɛ bɔnne."
      ]
    },
    note: {
      fr: "Extrait du Golestan (Le Jardin des Roses).",
      bm: "Golestan kitabu kɔnɔ kuma lalo."
    }
  },
  {
    titre: { fr: "L'Unité Pure (Tawhid)", bm: "Tawhidi Lakika" },
    auteur: "Sayyid al-Ta'ifa Al-Junaid al-Baghdadi",
    arabe: "التَّوْحِيدُ إِفْرَادُ الْقَدِيمِ عَنِ الْحَدَثِ",
    vers: {
      fr: [
        "Le Tawhid parfait consiste à détacher l'Éternel",
        "De tout ce qui est contingent et périssable.",
        "Garde ton cœur comme une eau claire et transparente :",
        "Elle épouse la couleur de la coupe sans jamais altérer sa pureté."
      ],
      bm: [
        "Tawhidi lakika ye k'Alee Banalia fara ka bɔ fɛn tɛmɛnenw na.",
        "I dusu to a ka jɛ i n'a fɔ ji lakika,",
        "Min bɛ kɛ fɛn sugu bɛɛ ye sani a ka nɔgɔ."
      ]
    },
    note: {
      fr: "La règle d'or des maîtres de la spiritualité de Bagdad.",
      bm: "Bagdad karamɔgɔbaw ka tawhidi sariyaw."
    }
  },
  {
    titre: { fr: "Le Parfum de l'Élu", bm: "Kira ka Finyɛ Diiman" },
    auteur: "Al-Bousiri (Le Poème du Manteau)",
    arabe: "مُحَمَّدٌ سَيِّدُ الْكَوْنَيْنِ وَالثَّقَلَيْنِ ، وَالْفَرِيقَيْنِ مِنْ عُرْبٍ وَمِنْ عَجَمِ",
    vers: {
      fr: [
        "Muhammad est le seigneur des deux mondes et des deux ordres,",
        "Le guide des égarés et la couronne de la création.",
        "Chaque verset de sa louange guérit le cœur en peine,",
        "Et ranime l'espérance au cœur de la nuit obscure."
      ],
      bm: [
        "Muhammad lo ye diiɲɛ fla ni a daafenw bɛɛ kuntigi ye,",
        "Tununtɔw ka sira-jirabaa ani duniɲa tando.",
        "A tando kumaw bɛ dusu dimilen furakɛ,",
        "Ka jigiya lalo taamaden kɔnɔ su dibi cɛma."
      ]
    },
    note: {
      fr: "Tiré de la célèbre Qasida Al-Burda.",
      bm: "Qasida Al-Burda kɔnɔ kuma saniyalen."
    }
  }
];

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

    poems: {
      title: "Paroles et Poèmes des Maîtres",
      intro: "Méditations poétiques et sagesses sacrées de la voie."
    },

    ui: {
      skipLink: "Aller au contenu",
      langGroup: "Langue / Kan",
      progress: "Progression",
      carousel: "Images de la Daara",
      carPrev: "Image précédente",
      carNext: "Image suivante",
      carChoose: "Choisir une image",
      carDot: "Image {i} sur {n}",
      poemPrev: "Poème précédent",
      poemNext: "Poème suivant",
      poemRand: "Découvrir un autre poème",
      poemCount: "{i} / {n}"
    },

    whatsappMessage: {
      greeting: "Assalamou alaykoum wa rahmatoullah.",
      request: "Je souhaite recevoir le wird d'Allah Don",
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

    /* À faire relire */
    poems: {
      title: "Karamɔgɔbaw ka Poyiziriw",
      intro: "Hakilitigiya kumaw ni kalanw minnu bɛ dusu lalo."
    },

    ui: {
      skipLink: "Taa kɔnɔ ma",
      langGroup: "Langue / Kan",
      progress: "Ɲɛtaa",
      carousel: "Daara ka foto",
      carPrev: "Foto kɔrɔ",
      carNext: "Foto nata",
      carChoose: "Foto sugandi",
      carDot: "Foto {i} {n} kɔnɔ",
      poemPrev: "Poyiziri kɔrɔ",
      poemNext: "Poyiziri nata",
      poemRand: "Poyiziri wɛrɛ dɔgɔkun",
      poemCount: "{i} / {n}"
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
