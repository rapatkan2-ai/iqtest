/**
 * English Proficiency Test Logic
 * Author: MindTest.id (AI Generated)
 * Features: Adaptive Timing, Flagging, Rapid Navigation, Shortcuts
 */

// --- Configuration ---
const TEST_CONFIG = {
    professional: {
        title: "Professional English Communication",
        duration: 30 * 60,
        scoring: 'toeic',
        totalQuestions: 60
    },
    academic: {
        title: "Academic English Proficiency",
        duration: 45 * 60,
        scoring: 'ielts',
        totalQuestions: 50
    },
    workplace: {
        title: "English Placement Assessment",
        duration: 25 * 60,
        scoring: 'toeic',
        totalQuestions: 40
    }
};

// --- State Management ---
const quizState = {
    testType: 'professional',
    questions: [],
    currentIndex: 0,
    answers: {},
    flags: {}, // Stores flagged question IDs
    duration: 0,
    startTime: null,
    timerInterval: null
};

// --- DOM Elements ---
const dom = {
    // Header
    testTitle: document.getElementById('testTitle'),
    timerDisplay: document.getElementById('timerDisplay'),
    timerContainer: document.getElementById('timerContainer'),
    progressBar: document.getElementById('progressBar'),
    currentQuestionNum: document.getElementById('currentQuestionNum'),
    totalQuestionNum: document.getElementById('totalQuestionNum'),
    openNavBtn: document.getElementById('openNavBtn'),

    // Screens
    selectionScreen: document.getElementById('selectionScreen'),
    quizSection: document.getElementById('quizSection'),
    loadingState: document.getElementById('loadingState'),
    quizContent: document.getElementById('quizContent'),

    // Question Area
    contextArea: document.getElementById('contextArea'),
    questionText: document.getElementById('questionText'),
    questionTypeBadge: document.getElementById('questionTypeBadge'),
    optionsContainer: document.getElementById('optionsContainer'),
    flagBtn: document.getElementById('flagBtn'),
    flagIcon: document.getElementById('flagIcon'),
    flagText: document.getElementById('flagText'),

    // Nav
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    finishBtn: document.getElementById('finishBtn'),
    footer: document.querySelector('footer'),

    // Overlays
    navOverlay: document.getElementById('navOverlay'),
    navGridContainer: document.getElementById('navGridContainer'),
    closeNavBtn: document.getElementById('closeNavBtn'),
    resultsModal: document.getElementById('resultsModal'),

    // Results
    resultTitle: document.getElementById('resultTitle'),
    finalScore: document.getElementById('finalScore'),
    scoreLabel: document.getElementById('scoreLabel'),
    scoreCircle: document.getElementById('scoreCircle'),
    resultCorrect: document.getElementById('resultCorrect'),
    resultAccuracy: document.getElementById('resultAccuracy'),
    resultTime: document.getElementById('resultTime')
};

// --- Selection Logic ---
window.startSpecificTest = function (type) {
    dom.selectionScreen.classList.add('hidden');
    dom.quizSection.classList.remove('hidden');
    dom.footer.classList.remove('hidden');

    localStorage.setItem('mindtest_test_type', type);
    initQuiz(type);
}

// --- Initialization ---
function initQuiz(forceType = null) {
    const savedType = forceType || localStorage.getItem('mindtest_test_type');

    if (!savedType && !forceType) {
        dom.selectionScreen.classList.remove('hidden');
        dom.quizSection.classList.add('hidden');
        dom.footer.classList.add('hidden');
        return;
    }

    if (typeof QUESTIONS_DB === 'undefined' || !QUESTIONS_DB) {
        alert("Error: Question Database not loaded. Please refresh.");
        return;
    }

    quizState.testType = QUESTIONS_DB[savedType] ? savedType : 'professional';
    quizState.questions = QUESTIONS_DB[quizState.testType];
    const config = TEST_CONFIG[quizState.testType];
    quizState.duration = config.duration;
    quizState.startTime = Date.now();

    dom.testTitle.textContent = config.title;
    dom.totalQuestionNum.textContent = quizState.questions.length;
    // dom.mobileTotalNum remove if not used or check ID

    // Restore
    try {
        const savedAns = localStorage.getItem(`mindtest_answers_${quizState.testType}`);
        if (savedAns) quizState.answers = JSON.parse(savedAns);

        const savedFlags = localStorage.getItem(`mindtest_flags_${quizState.testType}`);
        if (savedFlags) quizState.flags = JSON.parse(savedFlags);
    } catch (e) { console.error("Restore error", e); }

    setTimeout(() => {
        dom.loadingState.classList.add('hidden');
        dom.quizContent.classList.remove('opacity-0');
        renderQuestion(0);
        startTimer();
    }, 500);
}

// --- Rendering ---
function renderQuestion(index) {
    const question = quizState.questions[index];
    if (!question) return;

    quizState.currentIndex = index;

    // 1. Progress
    const progressPercent = ((index + 1) / quizState.questions.length) * 100;
    dom.progressBar.style.width = `${progressPercent}%`;
    dom.currentQuestionNum.textContent = index + 1;

    // 2. Animations (Fade In)
    dom.questionText.classList.remove('fade-in');
    void dom.questionText.offsetWidth; // trigger reflow
    dom.questionText.classList.add('fade-in');

    // 3. Content
    const qText = question.question || question.text;
    const qType = question.type;
    const qContext = question.context;

    dom.questionText.textContent = qText;
    dom.questionTypeBadge.textContent = qType.toUpperCase().replace('-', ' ');

    if (qContext) {
        dom.contextArea.innerHTML = `<div class="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm whitespace-pre-line leading-relaxed font-serif text-slate-700 fade-in">${qContext}</div>`;
        dom.contextArea.classList.remove('hidden');
    } else {
        dom.contextArea.classList.add('hidden');
    }

    // 4. Options
    dom.optionsContainer.innerHTML = '';
    question.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn group';
        if (quizState.answers[question.id] === idx) {
            btn.classList.add('selected');
        }

        // Add keyboard shortcut hint (1-4)
        const shortcutKey = idx + 1;
        const letters = ['A', 'B', 'C', 'D', 'E'];

        btn.innerHTML = `
            <div class="flex items-center justify-between w-full">
                <div class="flex items-center gap-4">
                    <span class="option-letter group-hover:bg-blue-100 group-hover:text-blue-600">${letters[idx]}</span>
                    <span class="font-medium text-slate-700 group-hover:text-slate-900">${opt}</span>
                </div>
                <span class="text-[10px] text-slate-300 font-mono hidden group-hover:block border border-slate-200 px-1 rounded">Key ${shortcutKey}</span>
            </div>
        `;

        btn.onclick = () => selectAnswer(question.id, idx);
        dom.optionsContainer.appendChild(btn);
    });

    // 5. Buttons & Flag State
    updateFlagUI();

    dom.prevBtn.disabled = index === 0;
    if (index === quizState.questions.length - 1) {
        dom.nextBtn.classList.add('hidden');
        dom.finishBtn.classList.remove('hidden');
    } else {
        dom.nextBtn.classList.remove('hidden');
        dom.finishBtn.classList.add('hidden');
    }
}

function selectAnswer(qId, optionIdx) {
    quizState.answers[qId] = optionIdx;
    localStorage.setItem(`mindtest_answers_${quizState.testType}`, JSON.stringify(quizState.answers));

    // Fast UI Update
    const buttons = dom.optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        if (i === optionIdx) {
            btn.classList.add('selected');
            btn.querySelector('.option-letter').classList.add('bg-primary', 'text-white');
            btn.querySelector('.option-letter').classList.remove('bg-slate-100', 'text-slate-500');
        } else {
            btn.classList.remove('selected');
            btn.querySelector('.option-letter').classList.remove('bg-primary', 'text-white');
            btn.querySelector('.option-letter').classList.add('bg-slate-100', 'text-slate-500');
        }
    });

    // Auto-advance logic (optional, maybe distracting)
    // setTimeout(() => { if(quizState.currentIndex < quizState.questions.length -1) dom.nextBtn.click() }, 500);
}

// --- Features: Flagging, Grid, Shortcuts ---

function toggleFlag() {
    const qId = quizState.questions[quizState.currentIndex].id;
    if (quizState.flags[qId]) {
        delete quizState.flags[qId];
    } else {
        quizState.flags[qId] = true;
    }
    localStorage.setItem(`mindtest_flags_${quizState.testType}`, JSON.stringify(quizState.flags));
    updateFlagUI();
}

function updateFlagUI() {
    const qId = quizState.questions[quizState.currentIndex].id;
    if (quizState.flags[qId]) {
        dom.flagBtn.classList.remove('text-slate-400');
        dom.flagBtn.classList.add('text-amber-500');
        dom.flagIcon.textContent = 'flag'; // Filled if using certain icon sets, usually same logic
        dom.flagText.textContent = 'Flagged';
    } else {
        dom.flagBtn.classList.add('text-slate-400');
        dom.flagBtn.classList.remove('text-amber-500');
        dom.flagIcon.textContent = 'outlined_flag';
        dom.flagText.textContent = 'Flag';
    }
}

// Navigation Grid
function openNavGrid() {
    dom.navGridContainer.innerHTML = '';

    quizState.questions.forEach((q, idx) => {
        const bubble = document.createElement('div');
        bubble.className = 'q-bubble';
        bubble.textContent = idx + 1;

        // Status classes
        const isAnswered = quizState.answers[q.id] !== undefined;
        const isFlagged = quizState.flags[q.id];
        const isCurrent = idx === quizState.currentIndex;

        if (isCurrent) bubble.classList.add('current');
        if (isAnswered) bubble.classList.add('answered');
        if (isFlagged) bubble.classList.add('flagged');

        bubble.onclick = () => {
            renderQuestion(idx);
            closeNavGrid();
        };

        dom.navGridContainer.appendChild(bubble);
    });

    dom.navOverlay.classList.add('active');
}

function closeNavGrid() {
    dom.navOverlay.classList.remove('active');
}

// --- Interaction Listeners ---
dom.prevBtn.addEventListener('click', () => { if (quizState.currentIndex > 0) renderQuestion(quizState.currentIndex - 1); });
dom.nextBtn.addEventListener('click', () => { if (quizState.currentIndex < quizState.questions.length - 1) renderQuestion(quizState.currentIndex + 1); });
dom.finishBtn.addEventListener('click', () => finishTest(false));

dom.openNavBtn.addEventListener('click', openNavGrid);
dom.closeNavBtn.addEventListener('click', closeNavGrid);
dom.flagBtn.addEventListener('click', toggleFlag);
dom.navOverlay.addEventListener('click', (e) => { if (e.target === dom.navOverlay) closeNavGrid(); });

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (dom.navOverlay.classList.contains('active') || dom.resultsModal.classList.contains('active')) return;
    if (dom.quizSection.classList.contains('hidden')) return;

    if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (quizState.currentIndex < quizState.questions.length - 1) dom.nextBtn.click();
    }
    else if (e.key === 'ArrowLeft') {
        if (quizState.currentIndex > 0) dom.prevBtn.click();
    }
    else if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key) - 1;
        const qId = quizState.questions[quizState.currentIndex].id;
        // Check if option exists
        if (quizState.questions[quizState.currentIndex].options[idx]) {
            selectAnswer(qId, idx);
        }
    }
    else if (e.key.toLowerCase() === 'f') {
        toggleFlag();
    }
});

// --- Timer ---
function startTimer() {
    let timeLeft = quizState.duration;

    function update() {
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        dom.timerDisplay.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

        if (timeLeft <= 300) { // 5 mins
            dom.timerDisplay.classList.add('text-red-500');
            dom.timerContainer.classList.add('timer-warning');
        } else {
            dom.timerDisplay.classList.remove('text-red-500');
            dom.timerContainer.classList.remove('timer-warning');
        }

        if (timeLeft <= 0) {
            finishTest(true);
        }
        timeLeft--;
    }

    update();
    if (quizState.timerInterval) clearInterval(quizState.timerInterval);
    quizState.timerInterval = setInterval(update, 1000);
}

// --- Results Logic ---
window.finishTest = function (autoSubmit = false) { // Global for nav button
    clearInterval(quizState.timerInterval);

    if (!autoSubmit && !confirm("Finish and submit your test?")) {
        startTimer(); return;
    }

    dom.navOverlay.classList.remove('active'); // ensure closed

    // Category Logic
    const categoryStats = {}; // { grammar: {correct: 0, total: 0} }
    let correctCount = 0; // Initialize correctCount here

    quizState.questions.forEach(q => {
        const correctIdx = (q.correctAnswerIndex !== undefined) ? q.correctAnswerIndex : q.correctAnswer;
        const isCorrect = quizState.answers[q.id] === correctIdx;

        if (isCorrect) correctCount++;

        // Category Tracking
        const cat = q.type || 'general';
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (isCorrect) categoryStats[cat].correct++;
    });

    const total = quizState.questions.length;
    const config = TEST_CONFIG[quizState.testType];

    let finalScore = 0;
    let scoreLabel = "";
    let scoreColor = "#3b82f6"; // default blue

    if (config.scoring === 'toeic') {
        finalScore = Math.round((correctCount / total) * 990);
        finalScore = Math.round(finalScore / 5) * 5;
        scoreLabel = "Score";
    } else {
        finalScore = ((correctCount / total) * 9).toFixed(1);
        scoreLabel = "Band";
        scoreColor = "#8b5cf6"; // purple
    }

    // Populate Modal
    dom.resultTitle.textContent = config.title;
    dom.finalScore.textContent = finalScore;
    dom.scoreLabel.textContent = scoreLabel;
    dom.resultCorrect.textContent = `${correctCount}/${total}`;

    const accuracy = Math.round((correctCount / total) * 100);
    dom.resultAccuracy.textContent = `${accuracy}%`;

    const timeUsedSeconds = config.duration - (parseInt(dom.timerDisplay.textContent.split(':')[0]) * 60 + parseInt(dom.timerDisplay.textContent.split(':')[1]));
    const timeUsedMin = Math.ceil(timeUsedSeconds / 60);
    dom.resultTime.textContent = `${timeUsedMin}m`;

    // Render Circle
    dom.scoreCircle.style.background = `conic-gradient(${scoreColor} ${accuracy}%, #e2e8f0 0%)`;

    // Render Category Analysis
    const catContainer = document.getElementById('categoryAnalysis');
    if (catContainer) {
        catContainer.innerHTML = '';
        Object.entries(categoryStats).forEach(([type, stats]) => {
            const pct = Math.round((stats.correct / stats.total) * 100);
            const label = type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ');

            // Color logic
            let barColor = 'bg-red-500';
            let txtColor = 'text-red-600';
            if (pct >= 80) { barColor = 'bg-emerald-500'; txtColor = 'text-emerald-600'; }
            else if (pct >= 60) { barColor = 'bg-blue-500'; txtColor = 'text-blue-600'; }
            else if (pct >= 40) { barColor = 'bg-amber-400'; txtColor = 'text-amber-600'; }

            const div = document.createElement('div');
            div.innerHTML = `
                <div class="flex justify-between items-center mb-1">
                    <span class="text-xs font-bold text-slate-600">${label}</span>
                    <span class="text-xs font-bold ${txtColor}">${pct}%</span>
                </div>
                <div class="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div class="h-full ${barColor} rounded-full" style="width: ${pct}%"></div>
                </div>
            `;
            catContainer.appendChild(div);
        });
    }

    // Show
    dom.resultsModal.classList.add('active');

    // Clear Logic
    localStorage.removeItem(`mindtest_answers_${quizState.testType}`);
    localStorage.removeItem(`mindtest_flags_${quizState.testType}`);
}

// Init
window.addEventListener('DOMContentLoaded', () => initQuiz());
