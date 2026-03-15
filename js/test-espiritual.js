const spiritualTestData = {
    questions: [
        {
            id: 1,
            text: "¿Qué describe mejor tu momento actual?",
            answers: [
                { text: "Siento curiosidad por temas espirituales, pero aún estoy explorando.", scores: { explorer: 3, healer: 0, seeker: 1, integrator: 0 } },
                { text: "Estoy buscando sanar emociones o recuperar equilibrio interior.", scores: { explorer: 0, healer: 3, seeker: 1, integrator: 0 } },
                { text: "Quiero entender mejor mi propósito y lo que estoy viviendo.", scores: { explorer: 0, healer: 0, seeker: 3, integrator: 1 } },
                { text: "Ya he recorrido parte de este camino y quiero profundizar más.", scores: { explorer: 0, healer: 0, seeker: 1, integrator: 3 } }
            ]
        },
        {
            id: 2,
            text: "Cuando algo importante te inquieta, normalmente buscas...",
            answers: [
                { text: "Señales, respuestas o nuevas perspectivas.", scores: { explorer: 3, healer: 0, seeker: 2, integrator: 0 } },
                { text: "Paz, contención y una sensación de alivio.", scores: { explorer: 0, healer: 3, seeker: 0, integrator: 1 } },
                { text: "Comprender el aprendizaje detrás de lo que ocurre.", scores: { explorer: 0, healer: 1, seeker: 3, integrator: 1 } },
                { text: "Integrar lo que sientes con lo que ya has aprendido antes.", scores: { explorer: 0, healer: 0, seeker: 1, integrator: 3 } }
            ]
        },
        {
            id: 3,
            text: "¿Cuál de estas frases te representa más?",
            answers: [
                { text: "Siento que recién estoy abriendo una puerta.", scores: { explorer: 3, healer: 0, seeker: 1, integrator: 0 } },
                { text: "Necesito bajar el ruido interno y sentirme mejor.", scores: { explorer: 0, healer: 3, seeker: 0, integrator: 0 } },
                { text: "Quiero descubrir qué sentido tiene esta etapa de mi vida.", scores: { explorer: 0, healer: 0, seeker: 3, integrator: 1 } },
                { text: "Quiero unir intuición, experiencia y crecimiento personal.", scores: { explorer: 0, healer: 0, seeker: 1, integrator: 3 } }
            ]
        },
        {
            id: 4,
            text: "¿Qué tipo de experiencia te atrae más en este momento?",
            answers: [
                { text: "Una experiencia simple que me ayude a empezar.", scores: { explorer: 3, healer: 0, seeker: 1, integrator: 0 } },
                { text: "Una sesión que me ayude a sanar y soltar tensión.", scores: { explorer: 0, healer: 3, seeker: 0, integrator: 1 } },
                { text: "Una guía que me ayude a entender patrones y dirección.", scores: { explorer: 0, healer: 0, seeker: 3, integrator: 1 } },
                { text: "Una experiencia profunda que conecte varias capas de mi proceso.", scores: { explorer: 0, healer: 0, seeker: 1, integrator: 3 } }
            ]
        },
        {
            id: 5,
            text: "Cuando piensas en espiritualidad, ¿qué se acerca más a lo que buscas?",
            answers: [
                { text: "Explorar sin presión y ver qué me resuena.", scores: { explorer: 3, healer: 0, seeker: 1, integrator: 0 } },
                { text: "Sentirme más en paz emocional y energéticamente.", scores: { explorer: 0, healer: 3, seeker: 0, integrator: 1 } },
                { text: "Comprenderme mejor y encontrar sentido.", scores: { explorer: 0, healer: 0, seeker: 3, integrator: 1 } },
                { text: "Profundizar en lo que ya he venido trabajando.", scores: { explorer: 0, healer: 0, seeker: 1, integrator: 3 } }
            ]
        },
        {
            id: 6,
            text: "¿Qué te pasa más seguido últimamente?",
            answers: [
                { text: "Me hago preguntas nuevas sobre mi vida y mi intuición.", scores: { explorer: 3, healer: 0, seeker: 2, integrator: 0 } },
                { text: "Siento cansancio emocional o necesidad de recuperar centro.", scores: { explorer: 0, healer: 3, seeker: 0, integrator: 0 } },
                { text: "Estoy intentando entender señales, patrones o decisiones importantes.", scores: { explorer: 1, healer: 0, seeker: 3, integrator: 1 } },
                { text: "Estoy tratando de integrar aprendizajes y avanzar con más conciencia.", scores: { explorer: 0, healer: 0, seeker: 1, integrator: 3 } }
            ]
        },
        {
            id: 7,
            text: "¿Qué frase te ayudaría más escuchar hoy?",
            answers: [
                { text: "Está bien explorar sin tener todas las respuestas.", scores: { explorer: 3, healer: 0, seeker: 1, integrator: 0 } },
                { text: "No todo tienes que cargarlo tú solo. También puedes recibir apoyo.", scores: { explorer: 0, healer: 3, seeker: 0, integrator: 1 } },
                { text: "Hay un sentido en lo que estás viviendo, aunque aún no se vea completo.", scores: { explorer: 0, healer: 0, seeker: 3, integrator: 1 } },
                { text: "Ya has avanzado. Ahora toca profundizar con más confianza.", scores: { explorer: 0, healer: 0, seeker: 1, integrator: 3 } }
            ]
        },
        {
            id: 8,
            text: "Si tuvieras que elegir una intención para hoy, sería...",
            answers: [
                { text: "Abrirme a nuevas señales y posibilidades.", scores: { explorer: 3, healer: 0, seeker: 1, integrator: 0 } },
                { text: "Sanar, descansar y recuperar equilibrio.", scores: { explorer: 0, healer: 3, seeker: 0, integrator: 1 } },
                { text: "Entender mejor mi camino y mis decisiones.", scores: { explorer: 0, healer: 0, seeker: 3, integrator: 1 } },
                { text: "Integrar lo vivido y seguir creciendo con profundidad.", scores: { explorer: 0, healer: 0, seeker: 1, integrator: 3 } }
            ]
        }
    ],

    results: {
        explorer: {
            icon: "🌙",
            title: "Eres un Explorador Espiritual",
            subtitle: "Estás en una etapa de apertura, curiosidad y primeras señales.",
            description: "Tu camino parece estar comenzando o tomando una nueva forma. Hay interés, sensibilidad y ganas de comprender más, pero sin necesidad de tener todo claro todavía. Este es un momento muy valioso para explorar con calma y descubrir qué prácticas realmente conectan contigo.",
            advice: "No necesitas saberlo todo hoy. A veces el crecimiento empieza con una simple pregunta, una intuición o una experiencia que abre una nueva puerta.",
            services: [
                { name: "Tarot", url: "/servicios/tarot/" },
                { name: "Carta Astral", url: "/servicios/carta-astral/" },
                { name: "Guías Espirituales", url: "/guias-espirituales/" }
            ]
        },
        healer: {
            icon: "🌿",
            title: "Eres un Sanador Interior",
            subtitle: "Tu energía está pidiendo pausa, alivio y equilibrio.",
            description: "Estás en una etapa donde lo más importante no es buscar más ruido, sino sentirte mejor, recuperar centro y darte espacio para sanar. Puede que hayas vivido tensión emocional, agotamiento interno o simplemente la necesidad de volver a ti.",
            advice: "No todo proceso se resuelve entendiendo. A veces el siguiente paso es suavizar, soltar un poco y permitir que tu energía se reordene.",
            services: [
                { name: "Reiki a Distancia", url: "/servicios/reiki-a-distancia/" },
                { name: "Meditación y Bienestar", url: "/comunidad/" },
                { name: "Tarot Terapéutico", url: "/servicios/tarot/" }
            ]
        },
        seeker: {
            icon: "🔥",
            title: "Eres un Buscador de Propósito",
            subtitle: "Estás intentando comprender el sentido de lo que estás viviendo.",
            description: "Tu momento actual está muy ligado a preguntas profundas. No buscas solo sentirte mejor, también quieres entender. Hay una necesidad de conectar experiencias, señales, relaciones o decisiones con algo más grande y más claro.",
            advice: "Confía en tu necesidad de profundidad. Cuando una etapa pide sentido, ignorarla suele generar más ruido. Escucharla puede abrir mucha claridad.",
            services: [
                { name: "Carta Astral", url: "/servicios/carta-astral/" },
                { name: "Tarot", url: "/servicios/tarot/" },
                { name: "Guías Espirituales", url: "/guias-espirituales/" }
            ]
        },
        integrator: {
            icon: "✨",
            title: "Eres un Integrador Espiritual",
            subtitle: "Has recorrido camino y ahora buscas profundizar con más conciencia.",
            description: "Tu energía muestra experiencia, reflexión y deseo de integrar lo que ya has aprendido. No estás comenzando desde cero. Más bien estás en una etapa donde quieres unir intuición, experiencia personal y prácticas que te ayuden a seguir creciendo de forma más completa.",
            advice: "Tu siguiente paso no siempre es aprender más, sino integrar mejor. La profundidad también nace cuando permites que lo vivido tome una forma más clara dentro de ti.",
            services: [
                { name: "Carta Astral", url: "/servicios/carta-astral/" },
                { name: "Reiki a Distancia", url: "/servicios/reiki-a-distancia/" },
                { name: "Tarot", url: "/servicios/tarot/" }
            ]
        }
    }
};

const spiritualTestState = {
    currentQuestionIndex: 0,
    answers: [],
    started: false,
    completed: false
};

const ui = {
    startScreen: document.getElementById("testStartScreen"),
    questionScreen: document.getElementById("testQuestionScreen"),
    loadingScreen: document.getElementById("testLoadingScreen"),
    resultScreen: document.getElementById("testResultScreen"),

    startBtn: document.getElementById("startTestBtn"),
    prevBtn: document.getElementById("prevQuestionBtn"),
    nextBtn: document.getElementById("nextQuestionBtn"),
    restartBtn: document.getElementById("restartTestBtn"),

    questionProgress: document.getElementById("questionProgress"),
    questionCounter: document.getElementById("questionCounter"),
    questionText: document.getElementById("questionText"),
    answersContainer: document.getElementById("answersContainer"),
    progressFill: document.getElementById("progressFill"),

    resultIcon: document.getElementById("resultIcon"),
    resultTitle: document.getElementById("resultTitle"),
    resultSubtitle: document.getElementById("resultSubtitle"),
    resultDescription: document.getElementById("resultDescription"),
    resultAdvice: document.getElementById("resultAdvice"),
    resultServices: document.getElementById("resultServices")
};

function hideAllScreens() {
    [ui.startScreen, ui.questionScreen, ui.loadingScreen, ui.resultScreen].forEach((screen) => {
        if (screen) {
            screen.hidden = true;
        }
    });
}

function showScreen(screenEl) {
    hideAllScreens();
    if (screenEl) {
        screenEl.hidden = false;
    }
}

function startTest() {
    spiritualTestState.started = true;
    spiritualTestState.completed = false;
    spiritualTestState.currentQuestionIndex = 0;
    spiritualTestState.answers = new Array(spiritualTestData.questions.length).fill(null);

    showScreen(ui.questionScreen);
    renderQuestion();
}

function restartTest() {
    spiritualTestState.started = false;
    spiritualTestState.completed = false;
    spiritualTestState.currentQuestionIndex = 0;
    spiritualTestState.answers = [];

    showScreen(ui.startScreen);
}

function renderQuestion() {
    const questionIndex = spiritualTestState.currentQuestionIndex;
    const question = spiritualTestData.questions[questionIndex];
    const totalQuestions = spiritualTestData.questions.length;
    const selectedAnswerIndex = spiritualTestState.answers[questionIndex];

    if (!question) {
        return;
    }

    if (ui.questionProgress) {
        ui.questionProgress.textContent = `Pregunta ${questionIndex + 1} de ${totalQuestions}`;
    }

    if (ui.questionCounter) {
        ui.questionCounter.textContent = `${questionIndex + 1}/${totalQuestions}`;
    }

    if (ui.questionText) {
        ui.questionText.textContent = question.text;
    }

    if (ui.progressFill) {
        const progressPercent = ((questionIndex + 1) / totalQuestions) * 100;
        ui.progressFill.style.width = `${progressPercent}%`;
    }

    if (ui.answersContainer) {
        ui.answersContainer.innerHTML = "";

        question.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "test-answer-btn";
            button.textContent = answer.text;
            button.setAttribute("data-answer-index", index);

            if (selectedAnswerIndex === index) {
                button.classList.add("is-selected");
                button.setAttribute("aria-pressed", "true");
            } else {
                button.setAttribute("aria-pressed", "false");
            }

            button.addEventListener("click", () => {
                selectAnswer(index);
            });

            ui.answersContainer.appendChild(button);
        });
    }

    updateNavigationButtons();
}

function selectAnswer(answerIndex) {
    const questionIndex = spiritualTestState.currentQuestionIndex;
    spiritualTestState.answers[questionIndex] = answerIndex;

    const allAnswerButtons = ui.answersContainer?.querySelectorAll(".test-answer-btn") || [];

    allAnswerButtons.forEach((btn, index) => {
        const isSelected = index === answerIndex;
        btn.classList.toggle("is-selected", isSelected);
        btn.setAttribute("aria-pressed", String(isSelected));
    });

    updateNavigationButtons();
}

function updateNavigationButtons() {
    const questionIndex = spiritualTestState.currentQuestionIndex;
    const isFirstQuestion = questionIndex === 0;
    const isLastQuestion = questionIndex === spiritualTestData.questions.length - 1;
    const hasSelectedAnswer = spiritualTestState.answers[questionIndex] !== null;

    if (ui.prevBtn) {
        ui.prevBtn.disabled = isFirstQuestion;
    }

    if (ui.nextBtn) {
        ui.nextBtn.disabled = !hasSelectedAnswer;
        ui.nextBtn.textContent = isLastQuestion ? "Ver resultado" : "Siguiente";
    }
}

function goToPreviousQuestion() {
    if (spiritualTestState.currentQuestionIndex > 0) {
        spiritualTestState.currentQuestionIndex -= 1;
        renderQuestion();
    }
}

function goToNextQuestion() {
    const currentIndex = spiritualTestState.currentQuestionIndex;
    const isLastQuestion = currentIndex === spiritualTestData.questions.length - 1;
    const hasSelectedAnswer = spiritualTestState.answers[currentIndex] !== null;

    if (!hasSelectedAnswer) {
        return;
    }

    if (isLastQuestion) {
        showLoadingThenResult();
        return;
    }

    spiritualTestState.currentQuestionIndex += 1;
    renderQuestion();
}

function calculateResultKey() {
    const totals = {
        explorer: 0,
        healer: 0,
        seeker: 0,
        integrator: 0
    };

    spiritualTestData.questions.forEach((question, questionIndex) => {
        const selectedAnswerIndex = spiritualTestState.answers[questionIndex];

        if (selectedAnswerIndex === null || selectedAnswerIndex === undefined) {
            return;
        }

        const selectedAnswer = question.answers[selectedAnswerIndex];
        const scores = selectedAnswer.scores;

        Object.keys(totals).forEach((key) => {
            totals[key] += scores[key] || 0;
        });
    });

    const orderedKeys = ["explorer", "healer", "seeker", "integrator"];

    let bestKey = orderedKeys[0];
    let bestScore = totals[bestKey];

    orderedKeys.forEach((key) => {
        if (totals[key] > bestScore) {
            bestKey = key;
            bestScore = totals[key];
        }
    });

    return bestKey;
}

function renderResult() {
    const resultKey = calculateResultKey();
    const result = spiritualTestData.results[resultKey];

    if (!result) {
        return;
    }

    if (ui.resultIcon) {
        ui.resultIcon.textContent = result.icon;
    }

    if (ui.resultTitle) {
        ui.resultTitle.textContent = result.title;
    }

    if (ui.resultSubtitle) {
        ui.resultSubtitle.textContent = result.subtitle;
    }

    if (ui.resultDescription) {
        ui.resultDescription.textContent = result.description;
    }

    if (ui.resultAdvice) {
        ui.resultAdvice.textContent = result.advice;
    }

    if (ui.resultServices) {
        ui.resultServices.innerHTML = "";

        result.services.forEach((service) => {
            const link = document.createElement("a");
            link.href = service.url;
            link.className = "result-service-link";
            link.textContent = service.name;
            ui.resultServices.appendChild(link);
        });
    }

    spiritualTestState.completed = true;
    showScreen(ui.resultScreen);
}

function showLoadingThenResult() {
    showScreen(ui.loadingScreen);

    window.setTimeout(() => {
        renderResult();
    }, 1800);
}

function bindEvents() {
    if (ui.startBtn) {
        ui.startBtn.addEventListener("click", startTest);
    }

    if (ui.prevBtn) {
        ui.prevBtn.addEventListener("click", goToPreviousQuestion);
    }

    if (ui.nextBtn) {
        ui.nextBtn.addEventListener("click", goToNextQuestion);
    }

    if (ui.restartBtn) {
        ui.restartBtn.addEventListener("click", restartTest);
    }
}

function initSpiritualTest() {
    bindEvents();
    showScreen(ui.startScreen);
}

document.addEventListener("DOMContentLoaded", initSpiritualTest);