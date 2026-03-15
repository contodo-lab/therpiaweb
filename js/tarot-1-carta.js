const tarotCards = [
    {
        slug: "el-loco",
        name: "El Loco",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/el-loco.webp",
        meaning: "Hoy puede sentirse como un comienzo. Hay una invitación a confiar, explorar y dar un pequeño paso sin necesitar todas las respuestas.",
        reflection: "Pregúntate qué parte de tu vida necesita menos miedo y un poco más de apertura."
    },
    {
        slug: "la-maga",
        name: "La Maga",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/la-maga.webp",
        meaning: "Esta carta habla de recursos, intención y capacidad. Ya tienes más herramientas de las que crees.",
        reflection: "Piensa qué puedes crear hoy con lo que ya tienes a tu alcance."
    },
    {
        slug: "la-sacerdotisa",
        name: "La Sacerdotisa",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/la-sacerdotisa.webp",
        meaning: "Hoy la energía es más interna que externa. Conviene escuchar, observar y no apurar lo que todavía necesita silencio.",
        reflection: "¿Qué intuición has sentido últimamente y aún no te has dado tiempo de escuchar de verdad?"
    },
    {
        slug: "la-emperatriz",
        name: "La Emperatriz",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/la-emperatriz.webp",
        meaning: "Hay una energía de expansión, cuidado y abundancia emocional. Buen día para nutrir una idea, una relación o a ti misma.",
        reflection: "¿Qué necesita hoy más cariño, atención o presencia?"
    },
    {
        slug: "el-sol",
        name: "El Sol",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/el-sol.webp",
        meaning: "La carta del día trae claridad, vitalidad y verdad. Algo puede verse con menos confusión y con más confianza.",
        reflection: "¿Qué parte de tu vida necesita que te permitas avanzar con más luz y menos duda?"
    },
    {
        slug: "la-luna",
        name: "La Luna",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/la-luna.webp",
        meaning: "Hoy pueden moverse emociones profundas, dudas o intuiciones fuertes. No todo tiene que resolverse de inmediato.",
        reflection: "En vez de forzar certezas, observa qué emoción quiere ser reconocida."
    },
    {
        slug: "la-estrella",
        name: "La Estrella",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/la-estrella.webp",
        meaning: "La Estrella habla de esperanza, calma y renovación interior. Incluso en medio de procesos lentos, sigue existiendo dirección.",
        reflection: "¿Qué pequeño signo de esperanza puedes elegir ver hoy?"
    },
    {
        slug: "la-fuerza",
        name: "La Fuerza",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/la-fuerza.webp",
        meaning: "La fuerza real no siempre es empujar. A veces es sostenerse con calma, ternura y autocontrol.",
        reflection: "¿Dónde te serviría más una respuesta serena que una reacción impulsiva?"
    }
];

function getDaySeed() {
    const now = new Date();
    const year = now.getFullYear();
    const start = new Date(year, 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    return Number(`${year}${dayOfYear}`);
}

function getCardOfTheDay() {
    const seed = getDaySeed();
    const index = seed % tarotCards.length;
    return tarotCards[index];
}

function formatTodayEs() {
    const today = new Date();

    return today.toLocaleDateString("es-CL", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

function getTodayKey() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function hasSeenTodayCard() {
    return localStorage.getItem("therpia-carta-dia") === getTodayKey();
}

function markTodayCardSeen() {
    localStorage.setItem("therpia-carta-dia", getTodayKey());
}

function populateCard(card) {
    const cardImage = document.getElementById("cardImage");
    const cardArcana = document.getElementById("cardArcana");
    const cardName = document.getElementById("cardName");
    const cardMeaning = document.getElementById("cardMeaning");
    const cardReflection = document.getElementById("cardReflection");
    const readingDate = document.getElementById("readingDate");

    const preloadedImage = new Image();
    preloadedImage.src = card.image;

    cardImage.src = card.image;
    cardImage.alt = `Carta de tarot ${card.name}`;
    cardArcana.textContent = card.arcana;
    cardName.textContent = card.name;
    cardMeaning.textContent = card.meaning;
    cardReflection.textContent = card.reflection;
    readingDate.textContent = `Carta correspondiente a ${formatTodayEs()}`;
}

function revealCard(skipSave = false) {
    const card = getCardOfTheDay();

    const cardEl = document.getElementById("tarotCard");
    const cardReading = document.getElementById("cardReading");
    const drawBtn = document.getElementById("drawBtn");

    if (!cardEl || !cardReading || !drawBtn) {
        return;
    }

    populateCard(card);

    cardEl.classList.remove("is-back");
    cardEl.classList.add("is-revealed");

    cardReading.hidden = false;

    requestAnimationFrame(() => {
        cardReading.classList.add("is-visible");
    });

    drawBtn.textContent = "Vuelve mañana para una nueva carta";
    drawBtn.disabled = true;

    if (!skipSave) {
        markTodayCardSeen();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const drawBtn = document.getElementById("drawBtn");

    if (drawBtn) {
        drawBtn.addEventListener("click", () => revealCard(false));
    }

    if (hasSeenTodayCard()) {
        revealCard(true);
    }
});