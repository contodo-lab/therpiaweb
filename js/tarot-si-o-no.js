const tarotYesNoCards = [
    {
        name: "El Sol",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/el-sol.webp",
        result: "SÍ",
        meaning: "Esta carta sugiere apertura, claridad y una energía favorable para tu consulta.",
        reflection: "Pregúntate si ya sabes en el fondo lo que quieres hacer y solo necesitas confiar un poco más en ello.",
        nextStep: {
            general: "Si esta pregunta es importante para ti, una lectura más profunda puede ayudarte a entender mejor el contexto completo.",
            amor: "Si esta consulta toca una relación importante, una lectura más profunda puede ayudarte a comprender mejor la dinámica entre ambos.",
            trabajo: "Si esta pregunta afecta una decisión laboral o de rumbo, una lectura más profunda puede ayudarte a ver con más claridad el panorama.",
            energia: "Si esta pregunta conecta con tu estado interno, una lectura más profunda puede ayudarte a entender qué energía está predominando en esta etapa."
        }
    },
    {
        name: "El Mundo",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/el-mundo.webp",
        result: "SÍ",
        meaning: "Hay señales de avance, cierre positivo y una sensación de mayor alineación con lo que estás buscando.",
        reflection: "A veces la respuesta aparece cuando dejas de mirar solo el problema y observas el proceso completo que vienes viviendo.",
        nextStep: {
            general: "Esta carta sugiere avance, pero una lectura completa puede ayudarte a ver cómo aprovechar mejor este momento.",
            amor: "En temas del corazón, esta carta puede señalar madurez o cierre de ciclo. Una lectura más profunda puede ayudarte a entender hacia dónde se mueve el vínculo.",
            trabajo: "En decisiones laborales, esta carta sugiere una etapa de avance. Una lectura más profunda puede ayudarte a identificar el mejor siguiente paso.",
            energia: "En lo personal, esta carta puede marcar integración y cierre. Una lectura más profunda puede ayudarte a ver qué aprendizaje se está consolidando."
        }
    },
    {
        name: "La Torre",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/la-torre.webp",
        result: "NO",
        meaning: "La respuesta apunta a una estructura débil, a una ruptura necesaria o a algo que todavía no está firme.",
        reflection: "A veces un no no es una pérdida. Puede ser una forma de protegerte de avanzar sobre una base que todavía no sostiene bien.",
        nextStep: {
            general: "Si esta respuesta te remueve, una lectura más profunda puede ayudarte a entender qué necesita cambiar realmente.",
            amor: "En relaciones, esta carta puede señalar tensión, quiebre o una verdad difícil de ignorar. Una lectura más profunda puede ayudarte a ver lo que está cayendo y por qué.",
            trabajo: "En decisiones laborales, esta carta puede advertir sobre cambios bruscos o estructuras poco sólidas. Una lectura más profunda puede ayudarte a ordenar mejor el escenario.",
            energia: "En tu energía personal, esta carta puede hablar de agotamiento o ruptura interna. Una lectura más profunda puede ayudarte a identificar qué ya no se sostiene."
        }
    },
    {
        name: "La Luna",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/la-luna.webp",
        result: "TAL VEZ",
        meaning: "Todavía hay confusión, emociones mezcladas o aspectos que no se ven con total claridad.",
        reflection: "Tal vez no necesitas apresurar una respuesta. Tal vez necesitas distinguir mejor entre intuición, deseo y temor.",
        nextStep: {
            general: "Esta carta sugiere esperar, observar y profundizar antes de sacar una conclusión definitiva.",
            amor: "En temas afectivos, esta carta puede señalar idealización, dudas o señales mezcladas. Una lectura más profunda puede ayudarte a distinguir mejor lo que estás sintiendo.",
            trabajo: "En trabajo o decisiones, esta carta sugiere falta de claridad o información incompleta. Una lectura más profunda puede ayudarte a ver mejor lo que hoy no está tan visible.",
            energia: "En tu estado interno, esta carta puede hablar de sensibilidad, cansancio emocional o confusión. Una lectura más profunda puede ayudarte a ordenar lo que estás percibiendo."
        }
    },
    {
        name: "La Rueda de la Fortuna",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/la-rueda-de-la-fortuna.webp",
        result: "DEPENDE",
        meaning: "La situación está cambiando y todavía hay factores externos o movimientos que no terminan de asentarse.",
        reflection: "No todo depende solo de ti. A veces el contexto también está girando, y la respuesta correcta necesita un poco más de tiempo.",
        nextStep: {
            general: "Puede ser buen momento para mirar qué variables están influyendo antes de quedarte con una respuesta demasiado rápida.",
            amor: "En relaciones, esta carta puede indicar cambios en la dinámica o momentos de giro. Una lectura más profunda puede ayudarte a ver qué está cambiando realmente.",
            trabajo: "En decisiones laborales, esta carta sugiere movimiento e inestabilidad temporal. Una lectura más profunda puede ayudarte a evaluar mejor el momento.",
            energia: "En tu energía personal, esta carta puede señalar un proceso de cambio. Una lectura más profunda puede ayudarte a entender hacia dónde se está moviendo esta etapa."
        }
    },
    {
        name: "El Juicio",
        arcana: "Arcanos Mayores",
        image: "/images/tarot/el-juicio.webp",
        result: "SÍ",
        meaning: "Hay una apertura positiva, pero requiere honestidad, conciencia y una decisión más madura de tu parte.",
        reflection: "A veces el sí aparece cuando estás lista para mirar la situación con verdad, incluso si eso te obliga a cambiar algo.",
        nextStep: {
            general: "Una lectura más profunda puede ayudarte a entender qué decisión o despertar te está pidiendo este momento.",
            amor: "En relaciones, esta carta puede hablar de conversaciones pendientes, cierres o renacimientos. Una lectura más profunda puede ayudarte a aclarar qué está pidiendo el vínculo.",
            trabajo: "En trabajo o rumbo personal, esta carta puede señalar una decisión importante. Una lectura más profunda puede ayudarte a verla con más nitidez.",
            energia: "En tu proceso interno, esta carta puede marcar un llamado a escuchar más profundamente lo que ya sabes. Una lectura más profunda puede ayudarte a bajar eso a tierra."
        }
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

    const questionTypeEl = document.getElementById("questionType");

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

    function getQuestionType() {
        if (!questionTypeEl) return "general";

        const value = questionTypeEl.value;
        const allowed = ["general", "amor", "trabajo", "energia"];

        return allowed.includes(value) ? value : "general";
    }

    function getQuestionTypeLabel() {
        const type = getQuestionType();

        if (type === "amor") return "amor y relaciones";
        if (type === "trabajo") return "trabajo y decisiones";
        if (type === "energia") return "energía personal";
        return "tu situación actual";
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
        drawBtn.textContent = isLoading ? "Consultando..." : getDrawButtonLabel();
        drawBtn.setAttribute("aria-busy", String(isLoading));
    }

    function getDrawButtonLabel() {
        return pullCount === 0 ? "Obtener respuesta" : "Hacer otra consulta";
    }

    function showUpgradePanel() {
        const typeLabel = getQuestionTypeLabel();
        const titleEl = widgetUpgradePanel.querySelector("h3");
        const textEl = widgetUpgradePanel.querySelector("p");

        if (titleEl) {
            titleEl.textContent = "Parece que esta pregunta necesita más contexto";
        }

        if (textEl) {
            textEl.textContent = `Una respuesta rápida puede orientarte, pero si esto toca ${typeLabel}, una lectura completa con una profesional puede ayudarte a entender mejor lo que estás viviendo.`;
        }

        widgetUpgradePanel.classList.remove("hidden");
    }

    function hideUpgradePanel() {
        widgetUpgradePanel.classList.add("hidden");
    }

    function showFinalCta() {
        const titleEl = widgetFinalCta.querySelector("h3");
        const textEl = widgetFinalCta.querySelector("p");

        if (titleEl) {
            titleEl.textContent = "¿Te quedaron más preguntas?";
        }

        if (textEl) {
            textEl.textContent = "El tarot sí o no puede orientarte, pero una lectura con una profesional te ayuda a profundizar en tu situación con más contexto y claridad.";
        }

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
        drawBtn.textContent = getDrawButtonLabel();
        drawBtn.focus();
    }

    function updateFlowAfterReveal() {
        if (pullCount === 3 && !lastFreeQuestionUsed && !widgetLocked) {
            showUpgradePanel();
        }

        if (lastFreeQuestionUsed && pullCount >= 4) {
            lockWidget();
        }
    }

    function getAdaptiveNextStep(card) {
        const type = getQuestionType();

        if (card.nextStep && typeof card.nextStep === "object" && card.nextStep[type]) {
            return card.nextStep[type];
        }

        if (card.nextStep && typeof card.nextStep === "object" && card.nextStep.general) {
            return card.nextStep.general;
        }

        return "";
    }

    function fillReading(card) {
        cardArcana.textContent = card.arcana;
        cardName.textContent = card.name;

        readingResult.textContent = card.result;
        cardMeaning.textContent = card.meaning;
        readingReflection.textContent = card.reflection;
        readingNextStep.textContent = getAdaptiveNextStep(card);

        setResultClass(card.result);
    }

    function revealCardVisual(card, useFallbackImage = false) {
        cardImage.src = useFallbackImage ? "/images/tarot/card-placeholder.webp" : card.image;
        cardImage.alt = `Carta de tarot ${card.name}`;

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
    }

    function revealYesNoCard() {
        if (isAnimating || widgetLocked) return;

        isAnimating = true;
        hideFinalCta();
        setLoadingState(true);

        const card = tarotYesNoCards[getRandomCardIndex()];
        const tempImage = new Image();

        tempImage.onload = function () {
            fillReading(card);
            revealCardVisual(card, false);
        };

        tempImage.onerror = function () {
            console.error("No se pudo cargar la imagen:", card.image);

            fillReading(card);
            revealCardVisual(card, true);
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
            drawBtn.textContent = getDrawButtonLabel();
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

        drawBtn.textContent = getDrawButtonLabel();

        drawBtn.addEventListener("click", revealYesNoCard);

        resetBtn.addEventListener("click", function () {
            resetWidget();
        });

        oneLastQuestionBtn.addEventListener("click", function () {
            handleOneLastQuestion();
        });

        if (questionTypeEl) {
            questionTypeEl.addEventListener("change", function () {
                if (!cardReading.classList.contains("hidden") && readingNextStep.textContent.trim() !== "") {
                    const currentCardName = cardName.textContent.trim();
                    const currentCard = tarotYesNoCards.find(card => card.name === currentCardName);

                    if (currentCard) {
                        readingNextStep.textContent = getAdaptiveNextStep(currentCard);
                    }
                }
            });
        }

        console.log("Tarot sí o no widget v2.0 cargado correctamente.");
    }

    initWidget();
})();