const tarotYesNoCards = [
    {
        name: "El Sol",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/el-sol.webp",
        result: "SÍ",
        meaning: "Hay una energía favorable y una sensación de claridad en esta consulta.",
        reflection: "Pregúntate si estás avanzando desde la confianza o desde la necesidad de una confirmación inmediata.",
        nextStep: "Si esta pregunta toca una relación o una decisión importante, una lectura más profunda puede darte más contexto."
    },
    {
        name: "El Mundo",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/el-mundo.webp",
        result: "SÍ",
        meaning: "La energía apunta a cierre, avance y alineación positiva.",
        reflection: "Observa si ya estás lista para aceptar una nueva etapa en lugar de seguir girando sobre la misma duda.",
        nextStep: "Esta carta sugiere avance, pero una lectura completa puede ayudarte a entender cómo aprovechar mejor este momento."
    },
    {
        name: "La Torre",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/la-torre.webp",
        result: "NO",
        meaning: "La respuesta apunta a una ruptura de estructura o a una situación que no está firme todavía.",
        reflection: "A veces un no no es castigo. Puede ser una señal de que algo necesita caer antes de reconstruirse mejor.",
        nextStep: "Si esta respuesta te remueve mucho, una lectura más profunda puede ayudarte a entender qué está cambiando realmente."
    },
    {
        name: "La Luna",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/la-luna.webp",
        result: "TAL VEZ",
        meaning: "Todavía hay confusión, emociones mezcladas o información que no está del todo clara.",
        reflection: "Pregúntate si estás buscando una respuesta inmediata cuando en realidad el momento pide observar más.",
        nextStep: "Esta carta sugiere esperar o profundizar. Una lectura completa puede ayudarte a distinguir intuición de miedo."
    },
    {
        name: "La Rueda de la Fortuna",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/la-rueda-de-la-fortuna.webp",
        result: "DEPENDE",
        meaning: "La situación está en movimiento y todavía hay factores que no terminan de acomodarse.",
        reflection: "No todo depende de una sola decisión. A veces el contexto también está cambiando alrededor tuyo.",
        nextStep: "Puede ser un buen momento para explorar qué variables están influyendo realmente antes de sacar una conclusión final."
    },
    {
        name: "El Juicio",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/el-juicio.webp",
        result: "SÍ",
        meaning: "Hay una apertura positiva, pero requiere conciencia, honestidad y una decisión madura.",
        reflection: "Pregúntate si estás lista para ver esta situación con claridad, incluso si eso te obliga a cambiar algo.",
        nextStep: "Una lectura completa puede ayudarte a entender qué decisión te está llamando realmente esta etapa."
    }
];

(function () {
    const cardEl = document.getElementById("tarotCard");
    const cardImage = document.getElementById("cardImage");
    const cardArcana = document.getElementById("cardArcana");
    const cardName = document.getElementById("cardName");

    const cardReading = document.getElementById("cardReading");
    const readingResult = document.getElementById("readingResult");
    const cardMeaning = document.getElementById("cardMeaning");
    const readingReflection = document.getElementById("readingReflection");
    const readingNextStep = document.getElementById("readingNextStep");

    const drawBtn = document.getElementById("drawBtn");
    const resetBtn = document.getElementById("resetBtn");

    const widgetUpgradePanel = document.getElementById("widgetUpgradePanel");
    const oneLastQuestionBtn = document.getElementById("oneLastQuestionBtn");
    const widgetFinalCta = document.getElementById("widgetFinalCta");

    const REQUIRED_ELEMENTS = [
        cardEl,
        cardImage,
        cardArcana,
        cardName,
        cardReading,
        readingResult,
        cardMeaning,
        readingReflection,
        readingNextStep,
        drawBtn,
        resetBtn,
        widgetUpgradePanel,
        oneLastQuestionBtn,
        widgetFinalCta
    ];

    if (REQUIRED_ELEMENTS.some(el => !el)) {
        console.error("Tarot widget: faltan elementos del DOM.");
        return;
    }

    let isAnimating = false;
    let lastCardIndex = -1;
    let pullCount = 0;
    let lastFreeQuestionUsed = false;
    let widgetLocked = false;

    function preloadImages() {
        tarotYesNoCards.forEach(card => {
            const img = new Image();
            img.src = card.image;
        });
    }

    function getRandomCardIndex() {
        if (tarotYesNoCards.length === 1) return 0;

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * tarotYesNoCards.length);
        } while (randomIndex === lastCardIndex);

        lastCardIndex = randomIndex;
        return randomIndex;
    }

    function setResultClass(result) {
        readingResult.className = "reading-result";

        if (result === "SÍ") {
            readingResult.classList.add("result-yes");
        } else if (result === "NO") {
            readingResult.classList.add("result-no");
        } else {
            readingResult.classList.add("result-maybe");
        }
    }

    function setLoadingState(isLoading) {
        drawBtn.disabled = isLoading;
        drawBtn.textContent = isLoading ? "Consultando..." : "Obtener respuesta";
        drawBtn.setAttribute("aria-busy", String(isLoading));
    }

    function showUpgradePanel() {
        widgetUpgradePanel.classList.remove("hidden");
    }

    function hideUpgradePanel() {
        widgetUpgradePanel.classList.add("hidden");
    }

    function showFinalCta() {
        widgetFinalCta.classList.remove("hidden");
        drawBtn.style.display = "none";
    }

    function hideFinalCta() {
        widgetFinalCta.classList.add("hidden");
    }

    function lockWidget() {
        widgetLocked = true;
        showFinalCta();
        hideUpgradePanel();
    }

    function unlockForOneLastQuestion() {
        lastFreeQuestionUsed = true;
        hideUpgradePanel();
        drawBtn.style.display = "inline-block";
        drawBtn.disabled = false;
        drawBtn.textContent = "Obtener respuesta";
        drawBtn.focus();
    }

    function updateFlowAfterReveal() {
        if (pullCount >= 3 && !lastFreeQuestionUsed && !widgetLocked) {
            showUpgradePanel();
        }

        if (lastFreeQuestionUsed && pullCount >= 4) {
            lockWidget();
        }
    }

    function revealYesNoCard() {
        if (isAnimating || widgetLocked) return;

        isAnimating = true;
        setLoadingState(true);
        hideFinalCta();

        const card = tarotYesNoCards[getRandomCardIndex()];
        const tempImage = new Image();

        tempImage.onload = function () {
            cardImage.src = card.image;
            cardImage.alt = `Carta de tarot ${card.name}`;
            cardArcana.textContent = card.arcana;
            cardName.textContent = card.name;

            readingResult.textContent = card.result;
            cardMeaning.textContent = card.meaning;
            readingReflection.textContent = card.reflection;
            readingNextStep.textContent = card.nextStep;

            setResultClass(card.result);

            cardEl.classList.remove("is-back");
            cardEl.classList.add("is-revealed");

            setTimeout(() => {
                cardReading.classList.remove("hidden");
                drawBtn.style.display = "none";
                setLoadingState(false);
                isAnimating = false;

                pullCount += 1;
                updateFlowAfterReveal();
            }, 700);
        };

        tempImage.onerror = function () {
            readingResult.className = "reading-result result-maybe";
            readingResult.textContent = "UPS";
            cardMeaning.textContent = "No pudimos cargar la carta en este momento.";
            readingReflection.textContent = "Intenta nuevamente en unos segundos.";
            readingNextStep.textContent = "Si tu pregunta es importante para ti, también puedes hablar con una profesional.";
            cardReading.classList.remove("hidden");
            drawBtn.style.display = "none";
            setLoadingState(false);
            isAnimating = false;
        };

        tempImage.src = card.image;
    }

    function resetWidget() {
        if (isAnimating) return;

        cardEl.classList.remove("is-revealed");
        cardEl.classList.add("is-back");

        cardImage.src = "";
        cardImage.alt = "";
        cardArcana.textContent = "";
        cardName.textContent = "";

        readingResult.textContent = "";
        readingResult.className = "reading-result";
        cardMeaning.textContent = "";
        readingReflection.textContent = "";
        readingNextStep.textContent = "";

        cardReading.classList.add("hidden");

        if (!widgetLocked) {
            drawBtn.style.display = "inline-block";
            drawBtn.disabled = false;
            drawBtn.textContent = "Obtener respuesta";
            drawBtn.focus();
        } else {
            drawBtn.style.display = "none";
        }
    }

    function handleOneLastQuestion() {
        unlockForOneLastQuestion();
        resetWidget();
    }

    function initWidget() {
        preloadImages();

        drawBtn.addEventListener("click", revealYesNoCard);

        resetBtn.addEventListener("click", function () {
            resetWidget();
        });

        oneLastQuestionBtn.addEventListener("click", function () {
            handleOneLastQuestion();
        });

        console.log("Tarot sí o no widget mejorado cargado correctamente.");
    }

    initWidget();
})();