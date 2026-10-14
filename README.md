# Allah Don : Portail d'accueil

Portail d'accueil du groupe spirituel initiatique **Allah Don**.
Le visiteur (le profane) traverse trois questions rituelles, puis est redirigé
vers WhatsApp avec un message pré-rempli pour demander le wird du cheikh.

Site statique (HTML, CSS, JavaScript), en français et en bamanankan. Aucun serveur, aucune base de données :
les réponses restent dans le navigateur jusqu'à l'envoi du message WhatsApp.

## Parcours

1. **Seuil** : basmala, titre, carrousel d'images de la Daara, bouton « Franchir le seuil »
2. **Qui es-tu ?** : nom et prénom, âge (facultatif)
3. **D'où viens-tu ?** : pays, ville, parcours spirituel
4. **Que cherches-tu ?** : la quête (20 caractères minimum)
5. **Récapitulatif** : relecture, bouton « Modifier », case de sincérité
6. **Envoi** : ouverture de WhatsApp avec le message, puis page de remerciement

## 1. Changer le numéro WhatsApp

Ouvrez `js/config.js` et modifiez la constante `WHATSAPP_NUMBER` (section 1) :

```js
const WHATSAPP_NUMBER = "22370123456";
```

Format international, **sans « + »**, sans espaces ni tirets.
Mali : `223` suivi des 8 chiffres du numéro.

## 2. Mettre les photos de la Daara

1. Copiez vos photos dans le dossier `assets/daara/` (formats jpg, png ou webp).
   Conseil : format paysage (3:2), 1200 px de large, moins de 300 Ko chacune pour
   que le site reste rapide sur téléphone.
2. Dans `js/config.js`, modifiez la liste `DAARA_IMAGES` :

```js
const DAARA_IMAGES = [
  {
    src: "assets/daara/photo1.jpg",
    alt:     { fr: "Description de la photo", bm: "…" },
    legende: { fr: "Texte sous l'image",      bm: "…" }
  }
];
```

Le défilement est automatique, se met en pause au survol, et se commande aussi
avec les flèches, les points ou un glissement du doigt. Une image introuvable
est simplement retirée du carrousel.
La durée d'affichage se règle avec `CAROUSEL_DELAY` (en millisecondes).

## 2 bis. Vidéos YouTube

La liste `VIDEOS` de `js/config.js` affiche une section vidéos en bas de la page
d'accueil. Pour chaque vidéo : `id` (les 11 caractères après `v=` dans le lien
YouTube), `titre` et `texte` en français et en bamanankan. Une liste vide (`[]`)
masque la section.

`SHOW_VIDEO_THUMBNAILS = false` (recommandé) : aucune connexion à YouTube tant
que le visiteur n'appuie pas sur lecture. Avec `true`, la miniature YouTube
s'affiche, mais YouTube reçoit l'adresse IP de chaque visiteur.

## 3. Langues : français et bamanankan

Un sélecteur **FR / BM** est affiché en haut de chaque page. Changer de langue
en cours de route ne fait perdre aucune réponse déjà saisie.

- **Langue d'ouverture** : `LANG` dans `js/config.js` (`"fr"` ou `"bm"`).
- **Lien direct en bamanankan** : ajoutez `?lang=bm` à l'adresse du site
  (par exemple `https://VOTRE-NOM.github.io/allah-don/?lang=bm`). Pratique pour
  les messages de diffusion destinés à un public bamanankanphone.
- **Langue du message WhatsApp** : `WHATSAPP_MESSAGE_LANG`.
  `"auto"` envoie le message dans la langue choisie par le visiteur ;
  `"fr"` ou `"bm"` impose toujours la même langue, ce qui peut faciliter la
  lecture des demandes de votre côté.
- Le choix de langue n'est pas mémorisé : le site ne stocke rien.

**Important : relecture de la traduction.** Les textes en bamanankan (objet `bm`
dans `js/config.js`) ont été rédigés par une IA. Faites-les relire par un
locuteur du bamanankan avant la mise en ligne, et par le cheikh pour les termes
religieux (Silamɛya, Sufiya, wird, Cheikh, zikiri…). Les corrections se font
directement dans l'objet `bm`, sans toucher au reste du code.

## 4. Modifier les textes

Tous les textes sont dans l'objet `TEXTS` de `js/config.js`, un bloc par langue
(titres, questions, messages d'erreur, remerciement, confidentialité, vidéos,
modèle du message WhatsApp). Les légendes des images de la Daara existent aussi
dans les deux langues (`legende: { fr: "…", bm: "…" }`).

**Attention :** les listes `pathOptions` (parcours spirituel) doivent avoir le
**même nombre de choix, dans le même ordre**, dans chaque langue. Le choix est
mémorisé par sa position : un décalage fausserait le message WhatsApp.

Pour ajouter une autre langue (l'arabe, par exemple) : dupliquez un bloc,
traduisez les valeurs, puis ajoutez un bouton `<button data-lang="ar">` dans
`index.html`. Pour une langue qui s'écrit de droite à gauche, il faudra aussi
adapter la direction de la page (`dir="rtl"`).

## 5. Publier sur GitHub Pages

1. Créez un dépôt sur GitHub (par exemple `allah-don`).
2. Envoyez-y tout le contenu de ce dossier (y compris le fichier `.nojekyll`).
3. Dans le dépôt : **Settings → Pages**.
4. Sous **Build and deployment**, choisissez **Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.
5. Après une à deux minutes, le site est disponible sur
   `https://VOTRE-NOM.github.io/allah-don/`.

## Structure

```
index.html          page unique
css/style.css       design
js/config.js        numéro WhatsApp, images, textes  (à personnaliser)
js/app.js           logique des étapes, validation, carrousel, WhatsApp
assets/pattern.svg  motif et icône
assets/daara/       photos du carrousel
.nojekyll           demande à GitHub Pages de servir les fichiers tels quels
```

## Confidentialité

Le site ne stocke rien (ni cookies, ni stockage local) et n'envoie les réponses
à aucun serveur. Elles transitent uniquement par le message que la personne
envoie elle-même sur WhatsApp.

Connexions externes : les polices Google Fonts au chargement, et YouTube
uniquement quand le visiteur lance une vidéo (ou dès l'ouverture si
`SHOW_VIDEO_THUMBNAILS = true`).

## Remarque sur les polices

Les polices (Cormorant Garamond, Amiri, Jost, avec Noto Sans et Noto Serif en
renfort pour les lettres du bamanankan : ɛ ɔ ɲ ŋ) sont chargées depuis Google
Fonts. Sans connexion à ces polices, le site reste lisible grâce à des polices
de secours.
