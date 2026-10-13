/* ==========================================================
   ALLAH DON : LOGIQUE DU PORTAIL
   Aucune donnée n'est stockée ni envoyée à un serveur.
   Dépend de js/config.js (WHATSAPP_NUMBER, DAARA_IMAGES, TEXTS…).
   ========================================================== */
(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };

  /* ---------- Langue ---------- */
  /* Ordre de priorité : ?lang=xx dans l'adresse, puis LANG de config.js.
     Rien n'est mémorisé dans le navigateur. */
  function pickInitialLang() {
    try {
      var q = new URLSearchParams(window.location.search).get("lang");
      if (q && TEXTS[q]) return q;
    } catch (e) { /* ignoré */ }
    return TEXTS[LANG] ? LANG : "fr";
  }

  var CUR = pickInitialLang();   // langue affichée
  var T = TEXTS[CUR];            // textes de la langue affichée

  /* Une valeur peut être un texte, ou un objet { fr: "…", bm: "…" } */
  function tr(v) {
    if (v && typeof v === "object") return v[CUR] || v.fr || "";
    return v || "";
  }
  function fmt(s, vars) {
    return String(s).replace(/\{(\w+)\}/g, function (_, k) { return vars[k]; });
  }

  /* Réponses gardées en mémoire (jamais écrites sur disque) */
  var answers = { name: "", age: "", country: "", city: "", pathIndex: 0, quest: "", sincere: false };

  var currentStep = 0;      // 0 = seuil, 1-3 = questions, 4 = récap, 5 = merci
  var lastWhatsappUrl = "";

  /* ---------- Textes ---------- */
  function setText(id, value) { var el = $(id); if (el) el.textContent = value; }

  function fillTexts() {
    document.documentElement.lang = CUR;
    document.title = T.siteName + " | " + T.portal;

    /* Textes d'interface et libellés d'accessibilité */
    setText("skipLink", T.ui.skipLink);
    $("langGroup").setAttribute("aria-label", T.ui.langGroup);
    $("progress").setAttribute("aria-label", T.ui.progress);
    $("carousel").setAttribute("aria-label", T.ui.carousel);
    $("carPrev").setAttribute("aria-label", T.ui.carPrev);
    $("carNext").setAttribute("aria-label", T.ui.carNext);
    $("carDots").setAttribute("aria-label", T.ui.carChoose);
    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === CUR ? "true" : "false");
    });

    setText("basmala", T.basmala);
    setText("heroTitle", T.heroTitle);
    setText("heroSub", T.heroSubtitle);
    setText("startBtn", T.heroButton);

    setText("q1Title", T.q1.title);
    setText("q1Intro", T.q1.intro);
    setText("lblName", T.q1.nameLabel);
    $("fName").placeholder = T.q1.namePlaceholder;
    setText("lblAge", T.q1.ageLabel);
    $("fAge").placeholder = T.q1.agePlaceholder;

    setText("q2Title", T.q2.title);
    setText("q2Intro", T.q2.intro);
    setText("lblCountry", T.q2.countryLabel);
    $("fCountry").placeholder = T.q2.countryPlaceholder;
    setText("lblCity", T.q2.cityLabel);
    $("fCity").placeholder = T.q2.cityPlaceholder;
    setText("lblPath", T.q2.pathLabel);
    /* La liste garde le même choix quand on change de langue (valeur = numéro) */
    var sel = $("fPath");
    var keep = sel.selectedIndex > 0 ? sel.selectedIndex : 0;
    sel.innerHTML = "";
    T.q2.pathOptions.forEach(function (label, i) {
      var o = document.createElement("option");
      o.value = String(i);
      o.textContent = label;
      sel.appendChild(o);
    });
    sel.selectedIndex = keep;

    setText("q3Title", T.q3.title);
    setText("q3Intro", T.q3.intro);
    setText("lblQuest", T.q3.questLabel);
    $("fQuest").placeholder = T.q3.questPlaceholder;

    setText("rTitle", T.recap.title);
    setText("rIntro", T.recap.intro);
    setText("rWhoLbl", T.recap.who);
    setText("rFromLbl", T.recap.from);
    setText("rSeekLbl", T.recap.seek);
    document.querySelectorAll(".recap .link-btn").forEach(function (b) { b.textContent = T.recap.edit; });
    setText("lblSincere", T.recap.sincerity);

    setText("tTitle", T.thanks.title);
    setText("tText", T.thanks.text);
    setText("againBtn", T.thanks.again);
    setText("reopenBtn", T.thanks.reopen);

    setText("privacy", T.privacy);

    /* Barre de progression : 3 étapes */
    var list = $("progressList");
    list.innerHTML = "";
    T.stepLabels.forEach(function (label) {
      var li = document.createElement("li");
      li.className = "progress__item";
      li.textContent = label;
      list.appendChild(li);
    });
    updateProgress();
    updateNavLabels();
  }

  /* État de la barre de progression selon l'étape courante */
  function updateProgress() {
    var n = currentStep;
    $("progress").hidden = !(n >= 1 && n <= 4);
    var items = $("progressList").children;
    for (var k = 0; k < items.length; k++) {
      var stepNumber = k + 1;
      items[k].classList.toggle("is-current", n === stepNumber);
      items[k].classList.toggle("is-done", n > stepNumber);
      if (n === stepNumber) items[k].setAttribute("aria-current", "step");
      else items[k].removeAttribute("aria-current");
    }
  }

  /* Texte des boutons Précédent / Suivant (étapes 1 à 4) */
  function updateNavLabels() {
    var n = currentStep;
    $("actions").hidden = !(n >= 1 && n <= 4);
    if (n >= 1 && n <= 4) {
      $("prevBtn").textContent = T.nav.prev;
      if (n === 3) $("nextBtn").textContent = T.nav.recap;
      else if (n === 4) $("nextBtn").textContent = T.recap.send;
      else $("nextBtn").textContent = T.nav.next;
    }
  }

  /* ---------- Navigation entre étapes ---------- */
  function showStep(n) {
    currentStep = n;

    for (var i = 0; i <= 5; i++) {
      var s = $("step-" + i);
      var active = i === n;
      s.hidden = !active;
      s.classList.toggle("is-active", active);
    }

    updateProgress();
    updateNavLabels();

    /* Le carrousel ne tourne que sur la page d'accueil */
    if (n === 0) startCarousel(); else stopCarousel();

    window.scrollTo({ top: 0, behavior: "smooth" });

    /* Place le focus sur le premier champ ou le titre */
    var focusTarget = {
      1: "fName", 2: "fCountry", 3: "fQuest", 4: "rTitle", 5: "tTitle"
    }[n];
    if (focusTarget) {
      var el = $(focusTarget);
      if (el) {
        if (!el.hasAttribute("tabindex") && el.tagName !== "INPUT" && el.tagName !== "TEXTAREA") {
          el.setAttribute("tabindex", "-1");
        }
        setTimeout(function () { el.focus({ preventScroll: true }); }, 60);
      }
    }
  }

  /* ---------- Lecture et validation ---------- */
  function readFields() {
    answers.name    = $("fName").value.trim();
    answers.age     = $("fAge").value.trim();
    answers.country = $("fCountry").value.trim();
    answers.city    = $("fCity").value.trim();
    answers.pathIndex = parseInt($("fPath").value, 10) || 0;
    answers.quest   = $("fQuest").value.trim();
    answers.sincere = $("fSincere").checked;
  }

  function setError(fieldId, errId, message) {
    var field = $(fieldId).closest(".field") || $(fieldId).parentNode;
    $(errId).textContent = message || "";
    field.classList.toggle("has-error", !!message);
    $(fieldId).setAttribute("aria-invalid", message ? "true" : "false");
  }

  function validate(step) {
    readFields();
    var ok = true;
    var firstBad = null;

    function bad(fieldId) { if (!firstBad) firstBad = fieldId; ok = false; }

    if (step === 1) {
      if (!answers.name) { setError("fName", "errName", T.errors.name); bad("fName"); }
      else setError("fName", "errName", "");
    }
    if (step === 2) {
      if (!answers.country) { setError("fCountry", "errCountry", T.errors.country); bad("fCountry"); }
      else setError("fCountry", "errCountry", "");
      if (!answers.city) { setError("fCity", "errCity", T.errors.city); bad("fCity"); }
      else setError("fCity", "errCity", "");
    }
    if (step === 3) {
      if (answers.quest.length < T.q3.minChars) { setError("fQuest", "errQuest", T.errors.quest); bad("fQuest"); }
      else setError("fQuest", "errQuest", "");
    }
    if (step === 4) {
      if (!answers.sincere) {
        $("errSincere").textContent = T.errors.sincerity;
        $("fSincere").setAttribute("aria-invalid", "true");
        bad("fSincere");
      } else {
        $("errSincere").textContent = "";
        $("fSincere").setAttribute("aria-invalid", "false");
      }
    }

    if (firstBad) $(firstBad).focus();
    return ok;
  }

  /* ---------- Récapitulatif ---------- */
  function buildRecap() {
    readFields();
    var path = T.q2.pathOptions[answers.pathIndex] || "";
    var who = answers.name + (answers.age ? " (" + answers.age + ")" : "");
    var from = answers.city + ", " + answers.country + (path ? " (" + path + ")" : "");
    $("rWho").textContent = who;
    $("rFrom").textContent = from;
    $("rSeek").textContent = answers.quest;
  }

  /* ---------- Message WhatsApp ---------- */
  function buildWhatsappUrl() {
    /* Langue du message : celle du visiteur (« auto ») ou une langue imposée */
    var ML = (WHATSAPP_MESSAGE_LANG === "auto" || !TEXTS[WHATSAPP_MESSAGE_LANG]) ? CUR : WHATSAPP_MESSAGE_LANG;
    var MT = TEXTS[ML];
    var M = MT.whatsappMessage;
    var path = MT.q2.pathOptions[answers.pathIndex] || "";
    var who  = answers.name + (answers.age ? " " + answers.age : "");
    var from = answers.city + ", " + answers.country + (path ? " (" + path + ")" : "");

    var lines = [
      M.greeting,
      M.request,
      "*" + M.who + "* " + who,
      "*" + M.from + "* " + from,
      "*" + M.seek + "* " + answers.quest
    ];
    var number = String(WHATSAPP_NUMBER).replace(/[^0-9]/g, "");
    return "https://wa.me/" + number + "?text=" + encodeURIComponent(lines.join("\n"));
  }

  function sendToWhatsapp() {
    if (!validate(4)) return;

    /* Garde-fou : numéro WhatsApp pas encore renseigné dans js/config.js */
    if (String(WHATSAPP_NUMBER).replace(/[^0-9]/g, "").length < 9) {
      $("errSincere").textContent = T.errors.noNumber;
      return;
    }

    buildRecap();
    lastWhatsappUrl = buildWhatsappUrl();

    $("reopenBtn").href = lastWhatsappUrl;
    showStep(5);

    /* Ouvre WhatsApp. Sur mobile, on navigue dans le même onglet si le
       navigateur bloque l'ouverture d'une nouvelle fenêtre. */
    var w = window.open(lastWhatsappUrl, "_blank");
    if (w) { try { w.opener = null; } catch (e) { /* ignoré */ } }
    else { window.location.href = lastWhatsappUrl; }
  }

  function resetAll() {
    ["fName", "fAge", "fCountry", "fCity", "fQuest"].forEach(function (id) { $(id).value = ""; });
    $("fPath").selectedIndex = 0;
    $("fSincere").checked = false;
    answers = { name: "", age: "", country: "", city: "", pathIndex: 0, quest: "", sincere: false };
    lastWhatsappUrl = "";
    updateCount();
    showStep(0);
  }

  /* ---------- Compteur de caractères ---------- */
  function updateCount() {
    var n = $("fQuest").value.trim().length;
    $("questCount").textContent = fmt(T.q3.counter, { n: n, min: T.q3.minChars });
  }

  /* ---------- Carrousel ---------- */
  var carIndex = 0;
  var carTimer = null;
  var carSlides = [];
  var carDots = [];
  var carHover = false;

  function buildCarousel() {
    var wrap = $("carousel");
    if (!DAARA_IMAGES || !DAARA_IMAGES.length) { wrap.hidden = true; return; }

    var track = $("carouselTrack");
    var dots = $("carDots");
    track.innerHTML = "";
    dots.innerHTML = "";

    DAARA_IMAGES.forEach(function (img, i) {
      var li = document.createElement("li");
      li.className = "carousel__slide";
      li.setAttribute("aria-hidden", "true");
      var im = document.createElement("img");
      im.src = img.src;
      im.alt = tr(img.alt);
      im.decoding = "async";
      if (i > 0) im.loading = "lazy";
      /* Si une image est introuvable, on retire simplement la diapositive */
      im.addEventListener("error", function () { li.style.display = "none"; });
      li.appendChild(im);
      track.appendChild(li);

      var d = document.createElement("button");
      d.type = "button";
      d.className = "carousel__dot";
      d.setAttribute("role", "tab");
      d.setAttribute("aria-label", fmt(T.ui.carDot, { i: i + 1, n: DAARA_IMAGES.length }));
      d.addEventListener("click", function () { goTo(i); restartCarousel(); });
      dots.appendChild(d);
    });

    carSlides = Array.prototype.slice.call(track.children);
    carDots = Array.prototype.slice.call(dots.children);

    var multiple = DAARA_IMAGES.length > 1;
    $("carPrev").hidden = !multiple;
    $("carNext").hidden = !multiple;
    dots.hidden = !multiple;

    $("carPrev").addEventListener("click", function () { goTo(carIndex - 1); restartCarousel(); });
    $("carNext").addEventListener("click", function () { goTo(carIndex + 1); restartCarousel(); });

    /* Pause au survol ou au focus */
    wrap.addEventListener("mouseenter", function () { carHover = true; });
    wrap.addEventListener("mouseleave", function () { carHover = false; });
    wrap.addEventListener("focusin", function () { carHover = true; });
    wrap.addEventListener("focusout", function () { carHover = false; });

    /* Glissement du doigt sur mobile */
    var startX = null;
    wrap.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    wrap.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      startX = null;
      if (Math.abs(dx) > 40) { goTo(carIndex + (dx < 0 ? 1 : -1)); restartCarousel(); }
    }, { passive: true });

    goTo(0);
  }

  function goTo(i) {
    var n = carSlides.length;
    if (!n) return;
    carIndex = (i + n) % n;
    carSlides.forEach(function (s, k) {
      var on = k === carIndex;
      s.classList.toggle("is-active", on);
      s.setAttribute("aria-hidden", on ? "false" : "true");
    });
    carDots.forEach(function (d, k) { d.setAttribute("aria-selected", k === carIndex ? "true" : "false"); });
    $("carCaption").textContent = tr(DAARA_IMAGES[carIndex].legende);
  }

  /* Met à jour légende, descriptions et libellés quand la langue change */
  function refreshCarouselTexts() {
    if (!carSlides.length) return;
    carSlides.forEach(function (s, k) {
      var im = s.querySelector("img");
      if (im) im.alt = tr(DAARA_IMAGES[k].alt);
    });
    carDots.forEach(function (d, k) {
      d.setAttribute("aria-label", fmt(T.ui.carDot, { i: k + 1, n: DAARA_IMAGES.length }));
    });
    $("carCaption").textContent = tr(DAARA_IMAGES[carIndex].legende);
  }

  function startCarousel() {
    stopCarousel();
    if (carSlides.length < 2) return;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // pas de défilement automatique si l'utilisateur le refuse
    carTimer = setInterval(function () {
      if (!carHover && !document.hidden) goTo(carIndex + 1);
    }, CAROUSEL_DELAY);
  }
  function stopCarousel() { if (carTimer) { clearInterval(carTimer); carTimer = null; } }
  function restartCarousel() { if (currentStep === 0) startCarousel(); }

  /* ---------- Changement de langue ---------- */
  function clearErrors() {
    ["errName", "errCountry", "errCity", "errQuest", "errSincere"].forEach(function (id) { $(id).textContent = ""; });
    document.querySelectorAll(".has-error").forEach(function (el) { el.classList.remove("has-error"); });
    document.querySelectorAll("[aria-invalid]").forEach(function (el) { el.setAttribute("aria-invalid", "false"); });
  }

  function setLang(l) {
    if (!TEXTS[l] || l === CUR) return;
    CUR = l;
    T = TEXTS[l];
    fillTexts();              // textes, boutons, progression (les réponses saisies restent en place)
    refreshCarouselTexts();
    clearErrors();            // les messages d'erreur affichés étaient dans l'ancienne langue
    updateCount();
    if (currentStep === 4) buildRecap();

    /* Garde la langue dans l'adresse pour pouvoir partager le lien (rien n'est stocké) */
    try {
      var u = new URL(window.location.href);
      u.searchParams.set("lang", l);
      window.history.replaceState(null, "", u.toString());
    } catch (e) { /* ignoré, par exemple en ouvrant le fichier directement */ }
  }

  /* ---------- Événements ---------- */
  function bindEvents() {
    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });

    $("startBtn").addEventListener("click", function () { showStep(1); });

    $("prevBtn").addEventListener("click", function () {
      readFields();
      showStep(currentStep - 1);
    });

    $("nextBtn").addEventListener("click", function () {
      if (currentStep >= 1 && currentStep <= 3) {
        if (!validate(currentStep)) return;
        if (currentStep === 3) buildRecap();
        showStep(currentStep + 1);
      } else if (currentStep === 4) {
        sendToWhatsapp();
      }
    });

    document.querySelectorAll(".recap .link-btn").forEach(function (b) {
      b.addEventListener("click", function () { showStep(parseInt(b.getAttribute("data-goto"), 10)); });
    });

    $("againBtn").addEventListener("click", resetAll);

    $("fQuest").addEventListener("input", updateCount);

    /* Entrée valide l'étape (sauf dans la zone de texte) */
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Enter") return;
      var t = e.target;
      if (t.tagName === "TEXTAREA" || t.tagName === "BUTTON" || t.tagName === "A") return;
      if (currentStep >= 1 && currentStep <= 4) { e.preventDefault(); $("nextBtn").click(); }
    });

    /* Efface l'erreur dès que la personne corrige */
    [["fName", "errName"], ["fCountry", "errCountry"], ["fCity", "errCity"], ["fQuest", "errQuest"]]
      .forEach(function (pair) {
        $(pair[0]).addEventListener("input", function () {
          if ($(pair[1]).textContent) setError(pair[0], pair[1], "");
        });
      });
    $("fSincere").addEventListener("change", function () {
      if ($("fSincere").checked) { $("errSincere").textContent = ""; $("fSincere").setAttribute("aria-invalid", "false"); }
    });
  }

  /* ---------- Démarrage ---------- */
  function init() {
    fillTexts();
    buildCarousel();
    bindEvents();
    updateCount();
    showStep(0);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
