const WHATSAPP = "237679475372";

const translations = {
  fr: {
    navCabinet:"Le cabinet", navExpertises:"Expertises", navTeam:"Équipe", navNews:"Actualités", navContact:"Contact",
    appointment:"Prendre rendez-vous", eyebrow:"AVOCAT AU BARREAU DU  CAMEROUN",
    heroTitle:"Le droit avec rigueur, l'humain avec conviction.",
    heroText:"Nous accompagnons particuliers, entrepreneurs et organisations dans leurs décisions juridiques et leurs contentieux.",
    talkLawyer:"Parler à un avocat", discover:"Découvrir nos expertises",
    trust1:"Écoute & analyse", trust2:"Stratégie juridique", trust3:"Accompagnement",
    confidential:"Confidentialité", confidentialText:"Vos échanges restent confidentiels.",
    introTitle:"Une approche juridique claire, stratégique et proche de nos clients.",
    introText:"Notre cabinet privilégie l'écoute, l'analyse des risques et une communication compréhensible. Chaque dossier fait l'objet d'une stratégie adaptée à son contexte.",
    learnMore:"Échanger avec le cabinet →", expertTitle:"Nos domaines d'intervention",
    expertText:"Une présentation à adapter aux domaines réellement exercés par votre cabinet.",
    e1:"Droit des affaires",e1p:"Conseil aux entreprises, contrats, opérations et prévention des risques.",
    e2:"Droit civil",e2p:"Accompagnement juridique dans les litiges et relations entre particuliers.",
    e3:"Contentieux & défense",e3p:"Analyse du dossier, stratégie contentieuse et représentation selon les règles applicables.",
    e4:"Droit du travail",e4p:"Conseil et accompagnement sur les relations professionnelles et leurs litiges.",
    e5:"Droit immobilier",e5p:"Conseils et assistance pour les dossiers liés aux biens et opérations immobilières.",
    e6:"Conseil juridique",e6p:"Une lecture juridique claire pour sécuriser vos décisions et vos projets.",
    teamTitle:"Des professionnels au service de vos dossiers.", role1:"Avocat • Associé",role2:"Avocat • Collaborateur",
    bio1:"Maître Rodrigue Njoya Djomeni vous accompagne avec une écoute attentive, une analyse rigoureuse et une stratégie adaptée à chaque situation. Son engagement : rendre le droit plus clair, défendre vos intérêts avec détermination et construire des solutions concrètes et durables.",
    bio2:"Une équipe engagée, disponible et attentive à la réalité de chaque dossier.",
    contactLawyer:"Contacter →", method:"Méthode",
    p1:"Premier échange",p1p:"Comprendre votre situation et vos objectifs.",p2:"Analyse",p2p:"Identifier les enjeux, risques et options juridiques.",
    p3:"Stratégie",p3p:"Définir avec vous la démarche adaptée au dossier.",p4:"Suivi",p4p:"Vous tenir informé des étapes importantes du dossier.",
    methodTitle:"Une méthode claire, du premier échange au suivi.",methodText:"Chaque étape est pensée pour vous rassurer, avancer avec méthode et protéger vos intérêts.",
    methodCtaTitle:"Votre dossier commence par une conversation.",methodCtaText:"Écrivez-nous directement sur WhatsApp.",methodCtaButton:"Parler sur WhatsApp",
    newsTitle:"Comprendre le droit, simplement.", contactTitle:"Parlons de votre dossier.",
    contactText:"Décrivez brièvement votre besoin. Le cabinet pourra vous indiquer les prochaines étapes et les modalités de rendez-vous.",
    name:"Nom complet",phone:"Téléphone",subject:"Objet",message:"Message",sendWhatsApp:"Envoyer sur WhatsApp",
    privacy:"Évitez d'envoyer des informations confidentielles ou des pièces sensibles via ce formulaire.", 
    reviewsLabel:"AVIS CLIENTS",
reviewsTitle:
"Ce que disent nos clients",
reviewsText:"La satisfaction de nos clients est au cœur de notre engagement.",

review1Name:"Jean Michel",
review1Role:"Chef d'entreprise",
review1Text:"Une excellente expérience du début à la fin. L'équipe a été professionnelle, disponible et très attentive à nos besoins.",

review2Name:"Alice M.",
review2Role:"Entrepreneure",
review2Text:"Je suis très satisfaite de la qualité du travail réalisé. Le résultat correspond parfaitement à mes attentes.",

review3Name:"Patrick N.",
review3Role:"Directeur d'entreprise",
review3Text:"Une équipe sérieuse et professionnelle. Ils ont parfaitement compris notre projet et ont respecté les délais.",

review4Name:"Sarah D.",
review4Role:"Cliente",
review4Text:"Très belle expérience. L'équipe a été à l'écoute et le résultat final a dépassé mes attentes.",

review5Name:"David K.",
review5Role:"Cliente",
review5Text:"Un service fiable, rapide et professionnel. Je recommande vivement leurs services.",

    rights:"Tous droits réservés."
  },
  en: {
    navCabinet:"The firm", navExpertises:"Practice areas", navTeam:"Team", navNews:"Insights", navContact:"Contact",
    appointment:"Book a consultation", eyebrow:"MEMBER OF THE CAMEROON BAR ASSOCIATION",
    heroTitle:"Law with rigor, people with conviction.",
    heroText:"We assist individuals, entrepreneurs and organizations with legal decisions and disputes.",
    talkLawyer:"Speak to a lawyer", discover:"Explore our practice areas",
    trust1:"Listening & analysis", trust2:"Legal strategy", trust3:"Support",
    confidential:"Confidentiality", confidentialText:"Your communications remain confidential.",
    introTitle:"Clear, strategic and client-focused legal counsel.",
    introText:"Our firm emphasizes listening, risk analysis and clear communication. Each matter receives a strategy adapted to its context.",
    learnMore:"Talk to the firm →", expertTitle:"Our practice areas",
    expertText:"Adapt these areas to the services actually provided by your firm.",
    e1:"Business law",e1p:"Business advice, contracts, transactions and risk prevention.",
    e2:"Civil law",e2p:"Legal assistance in disputes and relationships between individuals.",
    e3:"Litigation & defense",e3p:"Case analysis, litigation strategy and representation under applicable rules.",
    e4:"Employment law",e4p:"Advice and support regarding professional relationships and disputes.",
    e5:"Real estate law",e5p:"Advice and assistance for property-related matters and transactions.",
    e6:"Legal counsel",e6p:"Clear legal guidance to secure your decisions and projects.",
    teamTitle:"Professionals dedicated to your matters.", role1:"Lawyer • Partner",role2:"Lawyer • Associate",
    bio1:"Maître Rodrigue Njoya Djomeni combines attentive listening, rigorous analysis and a strategy tailored to each situation. His commitment is to make the law clearer, defend your interests with determination and build practical, lasting solutions.",
    bio2:"A committed and responsive team focused on the reality of every matter.",
    contactLawyer:"Contact →", method:"Approach",
    p1:"First discussion",p1p:"Understand your situation and objectives.",p2:"Analysis",p2p:"Identify legal issues, risks and available options.",
    p3:"Strategy",p3p:"Define the approach best suited to the matter.",p4:"Follow-up",p4p:"Keep you informed about key steps in your matter.",
    methodTitle:"A clear method, from first discussion to follow-up.",methodText:"Each step is designed to reassure you, move forward methodically and protect your interests.",
    methodCtaTitle:"Your matter starts with a conversation.",methodCtaText:"Message us directly on WhatsApp.",methodCtaButton:"Talk on WhatsApp",
    newsTitle:"Understanding the law, simply.", contactTitle:"Let's discuss your matter.",
    contactText:"Briefly describe your need. The firm can explain the next steps and consultation arrangements.",
    name:"Full name",phone:"Phone",subject:"Subject",message:"Message",sendWhatsApp:"Send via WhatsApp",
    privacy:"Please avoid sending confidential information or sensitive documents through this form.", 
    reviewsLabel:"CLIENT REVIEWS",
reviewsTitle:"What Our Clients Say",
reviewsText:"Our clients' satisfaction is at the heart of our commitment.",

review1Name:"Jean Michel",
review1Role:"Business Owner",
review1Text:"An excellent experience from start to finish. The team was professional, available and very attentive to our needs.",

review2Name:"Alice M.",
review2Role:"Entrepreneur",
review2Text:"I am very satisfied with the quality of the work. The result perfectly met my expectations.",

review3Name:"Patrick N.",
review3Role:"Company Manager",
review3Text:"A serious and professional team. They perfectly understood our project and respected the deadlines.",

review4Name:"Sarah D.",
review4Role:"Customer",
review4Text:"A great experience. The team listened to us and the final result exceeded our expectations.",

review5Name:"David K.",
review5Role:"Customer",
review5Text:"A reliable, fast and professional service. I highly recommend their services.",
    rights:"All rights reserved."
  }
};

let lang = localStorage.getItem("lang") || "fr";
const theme = localStorage.getItem("theme") || "light";
if (theme === "dark") document.body.classList.add("dark");

function applyLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.getElementById("langBtn").textContent = lang === "fr" ? "EN" : "FR";
}
applyLanguage();

document.getElementById("langBtn").onclick = () => {
  lang = lang === "fr" ? "en" : "fr";
  localStorage.setItem("lang", lang);
  applyLanguage();
  renderReviews();
};

document.getElementById("themeBtn").onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  document.getElementById("themeBtn").textContent = document.body.classList.contains("dark") ? "☀" : "☾";
};
document.getElementById("themeBtn").textContent = document.body.classList.contains("dark") ? "☀" : "☾";

const menu = document.getElementById("mobileMenu");
document.getElementById("menuBtn").onclick = () => menu.classList.toggle("open");
menu.querySelectorAll("a").forEach(a => a.onclick = () => menu.classList.remove("open"));

function whatsappUrl(text) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}
document.getElementById("whatsappFloat").href = whatsappUrl("Bonjour, je souhaite prendre rendez-vous avec le cabinet.");

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const msg = `Bonjour Cabinet Juris,\n\nNom: ${data.get("name")}\nTéléphone: ${data.get("phone")}\nObjet: ${data.get("subject")}\n\nMessage:\n${data.get("message")}`;
  window.open(whatsappUrl(msg), "_blank");
});

document.getElementById("year").textContent = new Date().getFullYear();

function animateCounter(element) {
  const target = Number(element.dataset.target || 0);
  const suffix = element.dataset.suffix || "";
  const duration = 4500;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    element.textContent = `${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = `${target}${suffix}`;
    }
  }

  requestAnimationFrame(update);
}

const stats = document.querySelectorAll(".stat-value");
const statsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    animateCounter(entry.target);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.65 });

stats.forEach((el) => statsObserver.observe(el));

const scrollItems = document.querySelectorAll(
  ".section-heading, .intro-grid > div, .expert-card, .lawyer-card, .method-intro, .method-step, .method-cta, .news-grid article, .contact-box > div, .contact-box > form"
);

scrollItems.forEach((item) => item.classList.add("reveal-on-scroll"));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

scrollItems.forEach((item) => revealObserver.observe(item));



document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;

    if (translations[lang][key]) {
        el.textContent = translations[lang][key];
    }
});

/* =========================================
   CLIENT REVIEWS - DYNAMIQUE + I18N
========================================= */

const reviewsTrack = document.getElementById("reviewsTrack");
const reviewsDots = document.getElementById("reviewsDots");
const reviewsCarousel = document.getElementById("reviewsCarousel");
const reviewKeys = [
    { name: "review1Name", role: "review1Role", text: "review1Text" },
    { name: "review2Name", role: "review2Role", text: "review2Text" },
    { name: "review3Name", role: "review3Role", text: "review3Text" },
    { name: "review4Name", role: "review4Role", text: "review4Text" },
    { name: "review5Name", role: "review5Role", text: "review5Text" }
];

let currentReview = 0;
let reviewsTimer = null;

let touchStartX = 0;
let touchEndX = 0;
let pointerStartX = 0;
let isDraggingReviews = false;


/* =========================================
   DONNÉES DES AVIS
========================================= */



/* =========================================
   GÉNÉRER LES INITIALES
========================================= */

function getInitials(name) {

    return name
        .split(" ")
        .filter(word => word.length > 0)
        .map(word => word.charAt(0))
        .join("")
        .substring(0, 2)
        .toUpperCase();

}


/* =========================================
   CRÉER LES AVIS
========================================= */

function renderReviews() {

    if (!reviewsTrack || !reviewsDots) {
        return;
    }


    reviewsTrack.innerHTML = "";
    reviewsDots.innerHTML = "";


    const currentTranslations = translations[lang];


    reviewKeys.forEach((review, index) => {

        const name =
            currentTranslations[review.name];

        const role =
            currentTranslations[review.role];

        const text =
            currentTranslations[review.text];


        /* ===============================
           CARTE
        =============================== */

        const card = document.createElement("article");

        card.className = "review-card";


        card.innerHTML = `

            <div class="review-stars">
                ★★★★★
            </div>

            <p class="review-text">
                « ${text} »
            </p>

            <div class="review-author">

                <div class="review-avatar">
                    ${getInitials(name)}
                </div>

                <div>

                    <h4>
                        ${name}
                    </h4>

                    <span>
                        ${role}
                    </span>

                </div>

            </div>

        `;


        reviewsTrack.appendChild(card);


        /* ===============================
           INDICATEUR
        =============================== */

        const dot = document.createElement("button");

        dot.className = "review-dot";

        dot.dataset.slide = index;

        dot.setAttribute(
            "aria-label",
            `${index + 1}`
        );


        dot.addEventListener("click", () => {

            goToReview(index);

            restartReviews();

        });


        reviewsDots.appendChild(dot);

    });


    goToReview(currentReview);

}


/* =========================================
   ALLER À UN AVIS
========================================= */

function goToReview(index) {

    const total =
        reviewKeys.length;


    if (index < 0) {

        index = total - 1;

    }


    if (index >= total) {

        index = 0;

    }


    currentReview = index;


    reviewsTrack.style.transform =
        `translateX(-${index * 100}%)`;


    const dots =
        document.querySelectorAll(".review-dot");


    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === index
        );

    });

}


/* =========================================
   AVIS SUIVANT
========================================= */

function nextReview() {

    goToReview(
        currentReview + 1
    );

}


/* =========================================
   AVIS PRÉCÉDENT
========================================= */

function previousReview() {

    goToReview(
        currentReview - 1
    );

}


/* =========================================
   AUTOPLAY
========================================= */

function startReviews() {

    stopReviews();


    reviewsTimer = setInterval(() => {

        nextReview();

    }, 5000);

}


function stopReviews() {

    if (reviewsTimer !== null) {

        clearInterval(reviewsTimer);

        reviewsTimer = null;

    }

}


function restartReviews() {

    stopReviews();

    startReviews();

}


/* =========================================
   PAUSE AU SURVOL
========================================= */

if (reviewsCarousel) {

    reviewsCarousel.addEventListener(
        "mouseenter",
        stopReviews
    );


    reviewsCarousel.addEventListener(
        "mouseleave",
        startReviews
    );

    reviewsCarousel.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "touch") return;
        pointerStartX = event.clientX;
        isDraggingReviews = true;
        reviewsCarousel.setPointerCapture(event.pointerId);
        stopReviews();
    });

    reviewsCarousel.addEventListener("pointerup", (event) => {
        if (event.pointerType === "touch") return;
        if (!isDraggingReviews) return;
        const distance = pointerStartX - event.clientX;
        isDraggingReviews = false;
        if (Math.abs(distance) > 50) {
            distance > 0 ? nextReview() : previousReview();
        }
        restartReviews();
    });

    reviewsCarousel.addEventListener("pointercancel", () => {
        if (!isDraggingReviews) return;
        isDraggingReviews = false;
        restartReviews();
    });

}


/* =========================================
   TOUCH / SWIPE
========================================= */

if (reviewsCarousel) {

    reviewsCarousel.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.touches[0].clientX;

            stopReviews();

        },
        { passive: true }
    );


    reviewsCarousel.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].clientX;


            const distance =
                touchStartX - touchEndX;


            if (Math.abs(distance) > 50) {

                if (distance > 0) {

                    nextReview();

                } else {

                    previousReview();

                }

            }


            restartReviews();

        }
    );

}


/* =========================================
   INITIALISATION
========================================= */

renderReviews();

startReviews();