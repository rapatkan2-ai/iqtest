
// --- 1. FIREBASE (Untuk Soal Kuis) ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, signInAnonymously as firebaseSignInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyAu399MhZUWmXCBpufZmLifKeS9x0au65A",
    authDomain: "mindtestid.firebaseapp.com",
    projectId: "mindtestid",
    storageBucket: "mindtestid.appspot.com",
    messagingSenderId: "183575162161",
    appId: "1:183575162161:web:1b58abfb22de476de69410",
    measurementId: "G-D2Y0FEJXVZ"
};
// Initialize Firebase safely
let fbApp, db, fbAuth;
try {
    fbApp = initializeApp(firebaseConfig);
    db = getFirestore(fbApp);
    fbAuth = getAuth(fbApp);
    console.log("Firebase initialized.");
} catch (e) {
    console.error("Firebase Init Error:", e);
    if (typeof alert !== "undefined") alert("Gagal menginisialisasi database soal.");
}

// --- ANTIGRAVITY SECURITY MODULE (UI Restrictions) ---
(function () {
    // 1. Disable Right Click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // 2. Disable Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S, Ctrl+P)
    document.addEventListener('keydown', function (event) {
        if (
            event.key === 'F12' ||
            (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J' || event.key === 'C' || event.key === 'K')) ||
            (event.ctrlKey && (event.key === 'u' || event.key === 'U')) ||
            (event.ctrlKey && (event.key === 's' || event.key === 'S')) ||
            (event.ctrlKey && (event.key === 'p' || event.key === 'P'))
        ) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
    });

    // 3. Disable Drag and Drop for Images
    document.addEventListener('dragstart', function (event) {
        if (event.target.tagName === 'IMG') {
            event.preventDefault();
        }
    });
})();
// --- END SECURITY MODULE ---

// --- 2. SUPABASE (Untuk Login & Leaderboard) ---
// const supabaseUrl = ... (Removed, using global)
// const supabaseKey = ... (Removed, using global)

let supabase;

// Inisialisasi Supabase dengan pengecekan Interval
function initSupabase() {
    if (window.supabaseClient) {
        supabase = window.supabaseClient;
        console.log("Supabase Client Loaded Successfully (Global).");
        startApp();
    } else {
        // Tunggu sebentar jika script sedang loading
        console.warn("Waiting for Supabase Global Client...");
        let attempts = 0;
        const checkInterval = setInterval(() => {
            attempts++;
            if (window.supabaseClient) {
                clearInterval(checkInterval);
                supabase = window.supabaseClient;
                console.log("Supabase Client Loaded after wait.");
                startApp();
            } else if (attempts > 50) { // Timeout setelah ~5 detik
                clearInterval(checkInterval);
                console.error("Supabase Client Failed to Load.");
                document.getElementById('loading').innerHTML = '<div class="text-center p-4 text-rose-500 font-bold">Gagal memuat sistem login.<br><button onclick="window.location.reload()" class="bg-gray-800 text-white mt-4 px-4 py-2 rounded">Refresh</button></div>';
            }
        }, 100);
    }
}
// DOM Elements - Select elements only after DOM is ready inside startApp or access safely
let loadingEl, appContainer, getReadyScreen, mainQuizContainer;

let instructionIconContainer, instructionIcon, instructionTitle, instructionDesc, instructionNextBtn, instructionIndicators;
let navigationWrapper, surveyScreen, surveyQuestionText, surveyOptionsContainer;
let textQuestionLayout, textQuestionTextEl, textOptionsContainer;
let imageQuestionLayout, imageQuestionImageContainer, imageQuestionTextEl, imageOptionsContainer;
let finishBtn, resultModal, alertModal, alertMessage, alertOkBtn;
let timerEl, progressBar, interstitialScreen, calculatingScreen, resultContainer;
let shareResultBtn, loginModal, googleLoginBtn, microsoftLoginBtn, startWithoutLoginBtn;
let profileModal, closeModalBtn, closeProfileModalBtn, startTestBtnModal;
let avatarOptionsContainer, countryOptions, usernameInput, modalError;
let step1, step2, step3, nextStep1Btn, nextStep2Btn;
// Global State
const QUIZ_DURATION_SEC = 12 * 60 + 30; // 12m 30s
let quizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let username, avatarSVG, countryCode;
let timerInterval;
let selectedAvatar, selectedCountry;
let currentUser = null;
let userGooglePhoto = null;
const openingSurveyQuestions = [
    { question: "Saya merasa nyaman berinteraksi dengan banyak orang", options: ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"], type: 'likert' },
    { question: "Saya cenderung merencanakan kegiatan secara sistematis sebelum bertindak", options: ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"], type: 'likert' },
    { question: "Saya tetap tenang ketika menghadapi tekanan atau situasi yang tidak terduga", options: ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"], type: 'likert' },
    { question: "Saya mempertimbangkan dampak keputusan saya terhadap orang lain", options: ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"], type: 'likert' },
    { question: "Saya tertarik untuk mencoba pengalaman baru dan ide yang berbeda", options: ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"], type: 'likert' }
];
const closingSurveyQuestions = [
    { question: "Saya menyelesaikan tugas dengan disiplin dan konsisten", options: ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"], type: 'likert' },
    { question: "Saya dapat menyesuaikan diri dengan perubahan dengan relatif mudah", options: ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"], type: 'likert' },
    { question: "Saya lebih fokus pada fakta dan logika dibandingkan perasaan pribadi", options: ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"], type: 'likert' },
    { question: "Saya bekerja dengan baik baik secara mandiri maupun dalam tim", options: ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"], type: 'likert' },
    { question: "Saya mampu mengendalikan emosi saya dalam situasi yang menantang", options: ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"], type: 'likert' }
];
let currentSurveySet;
let currentSurveyIndex = 0;

// --- INSTRUCTION STEPS DATA ---
const instructionSteps = [
    {
        lottie: 'https://lottie.host/eb8860d3-092b-4e8b-b0a5-82024bfddf5d/0dMPcN0P1T.lottie',
        colorClass: 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30',
        title: 'Kerjakan dengan fokus penuh',
        desc: 'Pastikan kamu berada di tempat yang tenang dan minim gangguan agar dapat berpikir optimal'
    },
    {
        lottie: 'https://lottie.host/23d7d1d3-7dfc-444b-8f53-d67cb60d275f/bmPkDa0Sxp.lottie',
        colorClass: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30',
        title: 'Gunakan waktu sebaik mungkin',
        desc: '<ul class="text-left list-disc pl-4 space-y-2"><li>Tes IQ MindTest.id memantau dan menilai ketepatan, kecepatan, dan fokus</li><li>Semakin cepat dan tepat pilihan jawaban, semakin optimal hasil yang diperoleh</li></ul>'
    },
    {
        lottie: 'https://lottie.host/9e000f51-f17f-4110-bf2b-b5bfc4671bf5/6Hev4cVBo0.lottie',
        colorClass: 'text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30',
        title: 'Jangan menggunakan bantuan eksternal',
        desc: 'Tes ini dirancang untuk mengukur kemampuan berpikir secara mandiri dan objektif'
    },
    {
        lottie: 'https://lottie.host/2313d5c7-2efd-49ba-9e9e-6edb49e66368/JGkDGgU9oB.lottie',
        colorClass: 'text-rose-600 bg-rose-100 dark:bg-rose-900/30',
        title: 'Privasi Dijamin',
        desc: '<ul class="text-left list-disc pl-4 space-y-2"><li>Hasil Tes IQ bersifat rahasia dan hanya dapat diakses oleh peserta</li><li>Kami tidak menyimpan detail skor Tes IQ secara permanen di server untuk menjaga privasi dan keamanan data</li></ul>'
    }
];
let currentInstructionStep = 0;
// --- MAIN APP ENTRY ---
function startApp() {
    bindElements();

    // Safety Timeout (8s)

    // Preload Lotties early
    preloadLottieAnimations();

    checkSession();
}

// --- HELPER: Modal Animation ---
function showLoginModal() {
    if (!loginModal) return;
    loginModal.classList.remove('hidden');
    // Double requestAnimationFrame for smooth transition
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            loginModal.style.opacity = '1';
            loginModal.style.pointerEvents = 'auto';
        });
    });
}

function hideLoginModal() {
    if (!loginModal) return;
    loginModal.style.opacity = '0';
    loginModal.style.pointerEvents = 'none';
    setTimeout(() => {
        loginModal.classList.add('hidden');
    }, 300);
}
function bindElements() {
    loadingEl = document.getElementById('loading');
    appContainer = document.getElementById('app-container');
    getReadyScreen = document.getElementById('get-ready-screen');
    // startQuizBtn = document.getElementById('start-quiz-btn'); // Replaced by instruction-action-btn

    // Instruction Elements
    instructionIconContainer = document.getElementById('instruction-icon-container');
    instructionIcon = document.getElementById('instruction-icon');
    instructionTitle = document.getElementById('instruction-title');
    instructionDesc = document.getElementById('instruction-desc');
    instructionNextBtn = document.getElementById('instruction-next-btn');
    instructionIndicators = document.getElementById('instruction-indicators'); // Restored

    mainQuizContainer = document.getElementById('main-quiz');

    navigationWrapper = document.getElementById('navigation-wrapper');
    surveyScreen = document.getElementById('survey-screen');
    surveyQuestionText = document.getElementById('survey-question-text');
    surveyOptionsContainer = document.getElementById('survey-options-container');
    textQuestionLayout = document.getElementById('text-question-layout');
    textQuestionTextEl = document.getElementById('text-question-text');
    textOptionsContainer = document.getElementById('text-options-container');
    imageQuestionLayout = document.getElementById('image-question-layout');
    imageQuestionImageContainer = document.getElementById('image-question-image-container');
    imageQuestionTextEl = document.getElementById('image-question-text');
    imageOptionsContainer = document.getElementById('image-options-container');
    finishBtn = document.getElementById('finish-btn');
    resultModal = document.getElementById('result-modal');
    alertModal = document.getElementById('alert-modal');

    // ANTI-GRAVITY UPDATE: Finish Modal binding removed here, moved to post-survey logic

    alertMessage = document.getElementById('alert-message');
    alertOkBtn = document.getElementById('alert-ok-btn');
    timerEl = document.getElementById('timer');
    progressBar = document.getElementById('progress-bar');
    interstitialScreen = document.getElementById('interstitial-screen');
    calculatingScreen = document.getElementById('calculating-screen');
    resultContainer = document.getElementById('result-container');
    shareResultBtn = document.getElementById('share-result-btn');
    loginModal = document.getElementById('loginModal');
    googleLoginBtn = document.getElementById('googleLoginModalBtn');
    microsoftLoginBtn = document.getElementById('microsoftLoginModalBtn');
    startWithoutLoginBtn = document.getElementById('startWithoutLoginBtn');
    profileModal = document.getElementById('profile-modal');
    closeModalBtn = document.getElementById('closeModalBtn');
    closeProfileModalBtn = document.getElementById('close-modal-btn');
    startTestBtnModal = document.getElementById('start-test-btn-modal');
    avatarOptionsContainer = document.getElementById('avatar-options');
    countryOptions = document.querySelectorAll('.country-select');
    usernameInput = document.getElementById('username-input');
    modalError = document.getElementById('modal-error');
    step1 = document.getElementById('step-1');
    step2 = document.getElementById('step-2');
    step3 = document.getElementById('step-3');
    nextStep1Btn = document.getElementById('next-step-1');
    nextStep2Btn = document.getElementById('next-step-2');

    // Logika Binding
    if (googleLoginBtn) googleLoginBtn.addEventListener('click', loginGoogle);
    if (microsoftLoginBtn) microsoftLoginBtn.addEventListener('click', () => alert("Fitur login Microsoft sedang dalam pengembangan."));
    if (startWithoutLoginBtn) startWithoutLoginBtn.addEventListener('click', loginAnon);
    if (closeModalBtn) closeModalBtn.addEventListener('click', () => { window.location.href = 'index.html'; });
    if (closeProfileModalBtn) closeProfileModalBtn.addEventListener('click', () => { window.location.href = 'index.html'; });

    if (closeProfileModalBtn) closeProfileModalBtn.addEventListener('click', () => { window.location.href = 'index.html'; });

    // Navigation Binding
    const navPrev = document.getElementById('nav-prev-btn');
    const navNext = document.getElementById('nav-next-btn');
    if (navPrev) navPrev.addEventListener('click', prevQuestion);
    if (navNext) navNext.addEventListener('click', nextQuestion);

    console.log("Elements bound.");

    // Profile Setup Init
    setupProfileUI();

    if (finishBtn) finishBtn.addEventListener('click', finishQuiz);
}
async function checkSession() {
    console.log("Checking session...");
    try {
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) {
            console.error("Session Check Error:", error);
            throw error;
        }
        if (session) {
            console.log("Session Valid:", session.user.email);
            await handleLoginSuccess(session.user);
        } else {
            console.log("No Session, showing Login Modal");
            if (loadingEl) loadingEl.style.display = 'none';
            showLoginModal();
        }
    } catch (err) {
        console.error("Auth Fail:", err);
        if (loadingEl) loadingEl.style.display = 'none';
        showLoginModal();
    }
}
async function loginGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.href }
    });
    if (error) alert("Login error: " + error.message);
}
async function loginAnon(e) {
    e.preventDefault();
    loadingEl.style.display = 'flex';
    loadingEl.classList.remove('hidden');
    hideLoginModal();
    const { data, error } = await supabase.auth.signInAnonymously();
    if (error) {
        console.error("Anon Login Failed:", error);
        alert("Gagal masuk sesi tamu. Silakan coba lagi.");
        loadingEl.style.display = 'none';
        showLoginModal();
    } else {
        handleLoginSuccess(data.user);
    }
}
async function handleLoginSuccess(user) {
    currentUser = user;
    hideLoginModal();

    userGooglePhoto = user.user_metadata?.avatar_url || user.user_metadata?.picture;
    const fullName = user.user_metadata?.full_name || user.user_metadata?.name || "Tamu";

    const storedName = localStorage.getItem('mindtest_username');
    const storedAvatar = localStorage.getItem('mindtest_avatar');
    const storedCountry = localStorage.getItem('mindtest_country');
    if (!storedName || !storedAvatar || !storedCountry) {
        console.log("Profile Setup Required");
        if (loadingEl) loadingEl.style.display = 'none';
        if (profileModal) profileModal.classList.remove('hidden');

        if (fullName && usernameInput && !usernameInput.value) {
            usernameInput.value = fullName.replace(/\s+/g, '_').substring(0, 15);
        }

        if (step1) step1.classList.remove('hidden', 'opacity-0');
        if (step2) step2.classList.add('hidden', 'opacity-0');
        if (step3) step3.classList.add('hidden', 'opacity-0');
    } else {
        username = storedName;
        avatarSVG = storedAvatar;
        countryCode = storedCountry;
        console.log("Profile Ready, Setting up Quiz");
        await setupQuiz();
    }
}
function setupProfileUI() {
    const avatarUrls = [
        'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/avatar-portrait-svgrepo-com.svg',
        'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/avatar-svgrepo-com%20(1).svg',
        'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/avatar-svgrepo-com%20(3).svg',
        'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/avatar-svgrepo-com%20(4).svg',
        'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/avatar-svgrepo-com%20(5).svg',
        'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/avatar-svgrepo-com%20(6).svg',
        'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/avatar-svgrepo-com%20(7).svg',
        'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/avatar-svgrepo-com%20(8).svg'
    ];
    if (avatarOptionsContainer && avatarOptionsContainer.children.length === 0) {
        avatarUrls.forEach(url => {
            const btn = document.createElement('button');
            btn.className = 'avatar-select rounded-full transition-transform flex-shrink-0 relative overflow-hidden bg-white dark:bg-gray-700 p-1 border-2 border-transparent';
            const img = document.createElement('img');
            img.src = url;
            img.className = 'h-16 w-16 rounded-full object-cover';
            btn.appendChild(img);
            btn.onclick = () => {
                fetch(url).then(r => r.text()).then(svg => {
                    selectedAvatar = svg;
                    document.querySelectorAll('.avatar-select').forEach(el => el.classList.remove('selected'));
                    btn.classList.add('selected');
                });
            };
            avatarOptionsContainer.appendChild(btn);
        });
    }
    if (nextStep1Btn) {
        nextStep1Btn.addEventListener('click', () => {
            if (!selectedAvatar) { modalError.textContent = 'Silakan pilih avatar.'; return; }
            modalError.textContent = '';
            step1.classList.add('opacity-0');
            setTimeout(() => { step1.classList.add('hidden'); step2.classList.remove('hidden'); setTimeout(() => step2.classList.remove('opacity-0'), 10); }, 300);
        });
    }
    if (countryOptions) {
        countryOptions.forEach(btn => {
            btn.addEventListener('click', () => {
                selectedCountry = btn.dataset.country;
                countryOptions.forEach(el => el.classList.remove('selected'));
                btn.classList.add('selected');
            });
        });
    }
    if (nextStep2Btn) {
        nextStep2Btn.addEventListener('click', () => {
            if (!selectedCountry) { modalError.textContent = 'Silakan pilih negara.'; return; }
            modalError.textContent = '';
            step2.classList.add('opacity-0');
            setTimeout(() => { step2.classList.add('hidden'); step3.classList.remove('hidden'); setTimeout(() => step3.classList.remove('opacity-0'), 10); }, 300);
        });
    }
    if (startTestBtnModal) {
        startTestBtnModal.addEventListener('click', () => {
            const manualName = usernameInput.value.trim();
            if (manualName === '') { modalError.textContent = 'Silakan masukkan nama pengguna.'; return; }

            username = manualName;
            avatarSVG = selectedAvatar;
            countryCode = selectedCountry;

            localStorage.setItem('mindtest_username', username);
            localStorage.setItem('mindtest_avatar', avatarSVG);
            localStorage.setItem('mindtest_country', countryCode);

            profileModal.classList.add('hidden');
            loadingEl.style.display = 'flex';
            loadingEl.classList.remove('hidden');

            setupQuiz();
        });
    }
}

// --- INSTRUCTION FLOW HELPER ---
// --- INSTRUCTION FLOW HELPER ---
function renderInstructionStep() {
    // We update the DOM elements directly now
    if (!instructionTitle) return; // safety check

    const step = instructionSteps[currentInstructionStep];

    // Animate Text Change (simple fade out/in effect manually or just direct update)
    // For now, direct update.

    if (instructionIconContainer) {
        // Reset classes to base then add specific color class
        instructionIconContainer.className = `w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 shrink-0 ${step.colorClass}`;

        if (step.lottie) {
            instructionIconContainer.innerHTML = `<dotlottie-wc src="${step.lottie}" autoplay loop style="width: 150%; height: 150%;"></dotlottie-wc>`;
        } else {
            instructionIconContainer.innerHTML = `<span id="instruction-icon" class="material-icons text-4xl text-gray-500">${step.icon}</span>`;
        }
    }
    if (instructionTitle) instructionTitle.textContent = step.title;
    if (instructionDesc) instructionDesc.innerHTML = step.desc; // Changed to innerHTML to support <br>

    // Ensure text max-width
    if (instructionDesc && !instructionDesc.classList.contains('max-w-md')) {
        instructionDesc.classList.add('max-w-md', 'mx-auto');
        instructionDesc.classList.remove('max-w-[280px]'); // if previously added by old logic or HTML
    }

    if (instructionNextBtn) {
        if (currentInstructionStep === instructionSteps.length - 1) {
            instructionNextBtn.innerHTML = `Mulai Tes Sekarang <span class="material-symbols-rounded">arrow_forward</span>`;
        } else {
            instructionNextBtn.textContent = 'Mengerti';
        }
    }

    // Dynamic Indicators Update
    if (instructionIndicators) {
        // Init dots if empty or mismatch
        if (instructionIndicators.children.length !== instructionSteps.length) {
            instructionIndicators.innerHTML = instructionSteps.map(() =>
                `<div class="h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300"></div>`
            ).join('');
        }

        Array.from(instructionIndicators.children).forEach((dot, idx) => {
            if (idx === currentInstructionStep) {
                dot.className = 'h-1.5 w-8 rounded-full bg-primary transition-all duration-300';
            } else {
                dot.className = 'h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300';
            }
        });
    }
}

function handleInstructionNext() {
    if (currentInstructionStep < instructionSteps.length - 1) {
        currentInstructionStep++;
        renderInstructionStep();
    } else {
        // Final step -> Start Quiz
        startSurvey(openingSurveyQuestions);
    }
}

// --- QUIZ LOGIC ---
// --- IMAGE PRELOADING ---
async function preloadAllImages() {
    console.log("Starting full image preload...");
    const promises = quizQuestions.map(q => {
        if (q.type !== 'image') return Promise.resolve();
        const mainImgPromise = new Promise((resolve, reject) => {
            const img = new Image();
            img.src = q.image;
            img.onload = resolve;
            img.onerror = resolve; // Continue even if error
        });
        const optionsPromises = q.options.map(optUrl => new Promise((resolve) => {
            const img = new Image();
            img.src = optUrl;
            img.onload = resolve;
            img.onerror = resolve;
        }));
        return Promise.all([mainImgPromise, ...optionsPromises]);
    });

    // We don't await this to block the UI, just start it
    Promise.all(promises).then(() => console.log("All images preloading initiated."));
}

async function preloadLottieAnimations() {
    console.log("Starting Lottie preloading...");
    const lottieUrls = [
        ...instructionSteps.map(step => step.lottie).filter(url => url),
        'https://lottie.host/5b62356b-2964-44e4-90fd-36de3943cbae/XlDija8av9.lottie' // Finish Modal
    ];

    const promises = lottieUrls.map(url => fetch(url).then(res => res.blob())); // Fetch to cache
    Promise.all(promises)
        .then(() => console.log("All Lottie animations preloaded."))
        .catch(err => console.warn("Lottie preload failed:", err));
}

function generateMockImageQuestions(count) {
    const mocks = [];
    const placeholderImageUrl = (width, height, text) => `https://placehold.co/${width}x${height}/E2E8F0/475569?text=${encodeURIComponent(text)}`;
    for (let i = 0; i < count; i++) {
        mocks.push({ id: `mock_img_q_${i + 1}`, type: 'image', question: `[Simulasi] Pola mana yang melengkapi gambar?`, image: placeholderImageUrl(400, 300, 'Gambar Soal ' + (i + 1)), options: Array.from({ length: 6 }, (_, j) => placeholderImageUrl(150, 150, String.fromCharCode(65 + j))), answer: placeholderImageUrl(150, 150, 'C') });
    }
    return mocks;
}
async function fetchAndPrepareQuestions() {
    try {
        console.log("Fetching Questions...");
        const q = query(collection(db, "quiz-image"), orderBy("createdAt", "asc"));
        const quizImageSnapshot = await getDocs(q);
        let imageQuestionsFromDB = quizImageSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        const neededImageQuestions = 25 - imageQuestionsFromDB.length;
        if (neededImageQuestions > 0) imageQuestionsFromDB.push(...generateMockImageQuestions(neededImageQuestions));

        quizQuestions = imageQuestionsFromDB.slice(0, 25);
        return true;
    } catch (error) {
        console.error("Firestore Error:", error);
        // Fallback
        quizQuestions = generateMockImageQuestions(25);
        return true;
    }
}
async function setupQuiz() {
    if (loadingEl) {
        loadingEl.style.display = 'flex';
        loadingEl.classList.remove('hidden');
        const p = loadingEl.querySelector('p');
        if (p) p.textContent = "Menyiapkan Tes IQ...";
    }

    try {
        // Firebase Auth Timeout Race
        try {
            const fbAuthPromise = firebaseSignInAnonymously(fbAuth);
            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('AuthTimeout')), 5000));
            await Promise.race([fbAuthPromise, timeoutPromise]);
        } catch (fbError) { console.warn("Firebase Auth bypassed:", fbError); }

        await fetchAndPrepareQuestions();

        // Start preloading immediately after fetching
        preloadAllImages();

        if (loadingEl) loadingEl.style.display = 'none';
        userAnswers = new Array(quizQuestions.length).fill(null);
        currentQuestionIndex = 0;

        // Session Restore Logic
        const active = localStorage.getItem('mindtest_quiz_active');
        const savedAnswers = localStorage.getItem('mindtest_userAnswers');
        const savedEndTime = localStorage.getItem('mindtest_quiz_endTime');
        if (active === 'true' && savedAnswers && savedEndTime) {
            const now = Date.now();
            if (parseInt(savedEndTime) > now) {
                try {
                    const parsedAnswers = JSON.parse(savedAnswers);
                    if (Array.isArray(parsedAnswers) && parsedAnswers.length === quizQuestions.length) {
                        userAnswers = parsedAnswers;

                        // Restore precise index if available, otherwise find first unanswered
                        const savedIndex = localStorage.getItem('mindtest_currentIndex');
                        const firstNull = userAnswers.findIndex(a => a === null);

                        if (savedIndex !== null && !isNaN(savedIndex)) {
                            currentQuestionIndex = parseInt(savedIndex);
                            // Validate range
                            if (currentQuestionIndex < 0 || currentQuestionIndex >= quizQuestions.length) {
                                currentQuestionIndex = firstNull !== -1 ? firstNull : 0;
                            }
                        } else {
                            currentQuestionIndex = firstNull !== -1 ? firstNull : 0;
                        }

                        appContainer.classList.remove('hidden');
                        hideAllScreens();
                        mainQuizContainer.classList.remove('hidden');
                        navigationWrapper.classList.remove('hidden');
                        displayQuestion();
                        startTimer();
                        return;
                    }
                } catch (e) { }
            } else { clearQuizSession(); }
        }
        // Fresh Start
        appContainer.classList.remove('hidden');
        hideAllScreens();
        getReadyScreen.classList.remove('hidden');

        if (instructionNextBtn) {
            instructionNextBtn.onclick = handleInstructionNext;
            currentInstructionStep = 0;
            renderInstructionStep();
        }
    } catch (e) {
        console.error("Setup Fatal:", e);
        if (window.confirm("Gagal memuat kuis. Reload?")) window.location.reload();
    }
}
function clearQuizSession() {
    localStorage.removeItem('mindtest_quiz_active');
    localStorage.removeItem('mindtest_userAnswers');
    localStorage.removeItem('mindtest_quiz_endTime');
    localStorage.removeItem('mindtest_currentIndex');
}
function saveQuizProgress() {
    localStorage.setItem('mindtest_currentIndex', currentQuestionIndex);
    localStorage.setItem('mindtest_quiz_active', 'true');
}
function showAlert(message, onOk) {
    if (alertMessage) alertMessage.textContent = message;
    if (alertModal) alertModal.classList.remove('hidden');
    if (alertOkBtn) alertOkBtn.onclick = () => { alertModal.classList.add('hidden'); if (onOk) onOk(); };
}

function hideAllScreens() {
    if (getReadyScreen) getReadyScreen.classList.add('hidden');
    if (surveyScreen) surveyScreen.classList.add('hidden');
    if (mainQuizContainer) mainQuizContainer.classList.add('hidden');
    if (interstitialScreen) interstitialScreen.classList.add('hidden');
    if (calculatingScreen) calculatingScreen.classList.add('hidden');
    if (navigationWrapper) navigationWrapper.classList.add('hidden');
}
// --- SURVEY & UTILS ---
function startSurvey(surveySet) {
    hideAllScreens();
    surveyScreen.classList.remove('hidden');
    currentSurveySet = surveySet;
    currentSurveyIndex = 0;

    // Initial entry animation
    surveyQuestionText.classList.add('survey-enter-active');
    surveyOptionsContainer.classList.add('survey-enter-active');

    displaySurveyQuestion();
}

function displaySurveyQuestion() {
    const survey = currentSurveySet[currentSurveyIndex];

    // Reset animations
    surveyQuestionText.classList.remove('survey-enter-active', 'survey-exit-active');
    surveyOptionsContainer.classList.remove('survey-enter-active', 'survey-exit-active');

    // Trigger reflow to restart animation next time if needed, but here we just set content
    // For smooth transition, we might want to animate OUT then IN. 
    // But per request "subtle but visible", simple IN animation on change is good.

    void surveyQuestionText.offsetWidth; // Force reflow
    surveyQuestionText.classList.add('survey-enter-active');

    surveyQuestionText.textContent = survey.question;
    surveyOptionsContainer.innerHTML = '';
    const likertColors = [{ bg: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200' }, { bg: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100' }, { bg: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-100' }, { bg: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border-rose-100' }, { bg: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-200' }];
    const choiceColor = { bg: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200' };

    surveyOptionsContainer.classList.add('survey-enter-active');

    survey.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.textContent = optionText;
        const color = survey.type === 'likert' ? likertColors[index] : choiceColor;
        button.className = `option-btn w-full py-1.5 px-3 rounded-lg text-left font-semibold border ${color.bg} hover:brightness-95 dark:hover:brightness-110 shadow-sm transition-all text-sm leading-snug aspect-auto h-auto`;
        button.onclick = (e) => selectSurveyAnswer(e.target);
        surveyOptionsContainer.appendChild(button);
    });
}
function selectSurveyAnswer(btnElement) {
    if (!btnElement) return;

    // Add pulse animation to clicked button
    btnElement.classList.add('option-pulse-active');

    // Add exit animation to container
    surveyQuestionText.classList.add('survey-exit-active');
    surveyOptionsContainer.classList.add('survey-exit-active');

    currentSurveyIndex++;
    if (currentSurveyIndex < currentSurveySet.length) {
        setTimeout(() => displaySurveyQuestion(), 300); // Wait for exit animation
    } else {
        setTimeout(() => {
            if (currentSurveySet === openingSurveyQuestions) {
                setTimeout(() => {
                    hideAllScreens();
                    mainQuizContainer.classList.remove('hidden');
                    navigationWrapper.classList.remove('hidden');
                    displayQuestion();
                    const endTime = Date.now() + (QUIZ_DURATION_SEC * 1000);
                    localStorage.setItem('mindtest_quiz_endTime', endTime);
                    localStorage.setItem('mindtest_quiz_active', 'true');
                    startTimer();
                }, 300);
            } else {
                setTimeout(() => {
                    // Show 'Tes Selesai' popup instead of going directly to results
                    const finishConfirmModal = document.getElementById('finishConfirmModal');
                    if (finishConfirmModal) finishConfirmModal.classList.remove('hidden');

                    const seeResultNowBtn = document.getElementById('seeResultNowBtn');
                    if (seeResultNowBtn) {
                        // Update click handler to show results
                        seeResultNowBtn.onclick = () => {
                            finishConfirmModal.classList.add('hidden');
                            hideAllScreens();
                            calculatingScreen.classList.remove('hidden');
                            const finalIQScore = calculateIQScore(score, quizQuestions.length);
                            runCalculationAnimation(finalIQScore);
                        };
                    }
                }, 300);
            }
        }, 300);
    }
}
function startTimer(seconds) {
    let endTime = localStorage.getItem('mindtest_quiz_endTime');
    if (!endTime && seconds) { endTime = Date.now() + (seconds * 1000); localStorage.setItem('mindtest_quiz_endTime', endTime); }
    else if (!endTime) { endTime = Date.now() + (QUIZ_DURATION_SEC * 1000); localStorage.setItem('mindtest_quiz_endTime', endTime); }

    clearInterval(timerInterval);
    const updateTimer = () => {
        const now = Date.now();
        const distance = parseInt(endTime) - now;
        if (distance <= 0) { clearInterval(timerInterval); timerEl.textContent = "00:00"; finishQuiz(); return; }
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        timerEl.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        const progress = ((QUIZ_DURATION_SEC * 1000 - distance) / (QUIZ_DURATION_SEC * 1000)) * 100;
        progressBar.style.width = `${progress}%`;
    };
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}
function updateProgressBar() {
    const answeredCount = userAnswers.filter(answer => answer !== null).length;
    const progressPercentage = (answeredCount / quizQuestions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}
async function displayQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) return;
    preloadNextImages(currentQuestionIndex + 1);
    textQuestionLayout.classList.add('hidden');
    imageQuestionLayout.classList.add('hidden');
    const question = quizQuestions[currentQuestionIndex];

    if (question.type === 'text') {
        textQuestionLayout.classList.remove('hidden');
        textQuestionTextEl.textContent = question.question;
        textOptionsContainer.innerHTML = '';
    } else {
        imageQuestionLayout.classList.remove('hidden');
        // Layout classes handled by HTML structure now


        imageQuestionTextEl.textContent = question.question || "Pilih potongan yang melengkapi gambar di bawah.";
        imageQuestionImageContainer.innerHTML = `<img src="${question.image}" alt="Question" class="max-h-full w-auto object-contain rounded-lg drop-shadow-md hover:scale-[1.02] transition-transform duration-500">`;

        imageOptionsContainer.innerHTML = '';
        question.options.forEach(optionUrl => {
            const button = document.createElement('button');
            button.className = 'option-btn bg-white dark:bg-gray-700 p-0 rounded-lg flex items-center justify-center shadow-sm cursor-pointer relative transition-transform active:scale-95';
            button.innerHTML = `<img src="${optionUrl}" alt="Option" class="w-full h-full object-contain rounded-lg">`;
            if (userAnswers[currentQuestionIndex] === optionUrl) button.classList.add('selected');
            button.onclick = () => selectAnswer(optionUrl);
            imageOptionsContainer.appendChild(button);
        });
    }
    renderPagination();
    updateProgressBar();
    const allAnswered = userAnswers.every(answer => answer !== null);
    if (finishBtn) finishBtn.classList.toggle('hidden', !allAnswered);
}
function selectAnswer(option) {
    userAnswers[currentQuestionIndex] = option;
    localStorage.setItem('mindtest_userAnswers', JSON.stringify(userAnswers));
    updateProgressBar();

    // Auto-advance logic handles index updates usually, but we save on navigate
    // Here we mainly save the answer. Navigation saves index in its own functions.
    displayQuestion();
    const questionNumber = currentQuestionIndex + 1;
    if (questionNumber % 5 === 0 && questionNumber < quizQuestions.length) {
        const interstitialIndex = (questionNumber / 5) - 1;
        if (interstitialIndex < 4) setTimeout(() => showInterstitial(interstitialIndex), 400);
    } else if (userAnswers.every(answer => answer !== null)) {
        // Auto-finish immediately when all questions are answered
        setTimeout(() => {
            finishQuiz();
        }, 300);
    } else {
        const nextUnansweredIndex = userAnswers.findIndex(answer => answer === null);
        setTimeout(() => {
            if (nextUnansweredIndex !== -1) currentQuestionIndex = nextUnansweredIndex;
            else if (currentQuestionIndex < quizQuestions.length - 1) currentQuestionIndex++;
            saveQuizProgress();
            displayQuestion();
        }, 300);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        saveQuizProgress();
        displayQuestion();
    }
}
function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        saveQuizProgress();
        displayQuestion();
    }
}

function renderPagination() {
    const paginationContainer = document.getElementById('pagination-container');
    if (paginationContainer) {
        // Design: '9 of 37'
        paginationContainer.innerHTML = `${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    }

    // Update Arrows State
    const prevBtn = document.getElementById('nav-prev-btn');
    const nextBtn = document.getElementById('nav-next-btn');

    if (prevBtn) {
        prevBtn.disabled = currentQuestionIndex === 0;
        prevBtn.classList.toggle('opacity-50', currentQuestionIndex === 0);
    }
    if (nextBtn) {
        // On last question, next arrow functionality can be debateable. 
        // Usually it might disappear or be disabled in favor of 'Finish' button.
        // But in this design, we keep it or finish btn toggles.
        nextBtn.disabled = currentQuestionIndex === quizQuestions.length - 1;
        nextBtn.classList.toggle('opacity-50', currentQuestionIndex === quizQuestions.length - 1);
    }
}
function finishQuiz() {
    clearInterval(timerInterval);
    clearQuizSession();
    hideAllScreens();
    score = 0;
    quizQuestions.forEach((q, i) => { if (userAnswers[i] === q.answer) score++; });
    startSurvey(closingSurveyQuestions);
}
// --- CALCULATION & RESULT ---
function runCalculationAnimation(finalIQScore) {
    const checklistItems = document.querySelectorAll('#checklist-container .checklist-item');
    let currentStep = 0;
    const totalSteps = checklistItems.length;
    const interval = setInterval(() => {
        if (currentStep >= totalSteps) {
            clearInterval(interval);
            setTimeout(() => { showFinalResults(finalIQScore); }, 600);
            return;
        }
        const item = checklistItems[currentStep];
        if (item) {
            const icon = item.querySelector('.material-icons');
            icon.textContent = 'check_circle';
            icon.classList.remove('text-gray-300');
            icon.classList.add('text-primary', 'scale-110');
            item.classList.add('border-primary', 'bg-primary/5');
        }
        currentStep++;
        const progress = (currentStep / totalSteps) * 100;
        const pb = document.getElementById('calculating-progress-bar');
        const pt = document.getElementById('calculating-progress-text');
        if (pb) pb.style.width = `${progress}%`;
        if (pt) pt.textContent = `${Math.round(progress)}%`;
    }, 1000);
}

function calculateIQScore(correctAnswers, totalQuestions) {
    const baseIQ = 70;
    const maxIQ = 145;
    if (totalQuestions === 0) return baseIQ;
    const scorePercentage = correctAnswers / totalQuestions;
    return Math.round(baseIQ + (maxIQ - baseIQ) * scorePercentage);
}
// --- SAVE TO SUPABASE ---
async function saveQuizResult(userId, score, details) {
    if (!userId) return;
    try {
        console.log("Saving to Quiz Results History...");
        const { error } = await supabase
            .from('quiz_results')
            .insert([{
                user_id: userId,
                score: score,
                details: details
            }]);
        if (error) console.error("Quiz History Save Error:", error);
        else console.log("Quiz history saved!");
    } catch (e) { console.error("Error saving history:", e); }
}

async function addScoreToLeaderboard(name, score, avatar, country) {
    try {
        console.log("Saving to Supabase...");
        const { error } = await supabase
            .from('leaderboard')
            .insert([{
                name: name,
                score: score,
                avatar: avatar || 'default',
                country: country || 'id',
                timestamp: new Date().toISOString()
            }]);

        if (error) console.error("Supabase Save Error:", error);
        else console.log("Score saved to Supabase!");
    } catch (e) { console.error("Error adding score: ", e); }
}
function animateCountUp(element, target, duration, onComplete) {
    let startTimestamp = null;
    const startValue = 0;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentScore = Math.floor(progress * (target - startValue) + startValue);
        element.textContent = currentScore;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = target;
            if (onComplete) onComplete();
        }
    };
    window.requestAnimationFrame(step);
}
async function showFinalResults(finalIQScore) {
    const scoreNum = parseInt(finalIQScore);

    // Prepare data for storage
    const quizResultData = {
        iqScore: finalIQScore,
        correctAnswers: score,
        totalQuestions: quizQuestions.length,
        date: new Date().toISOString()
    };

    // Save to LocalStorage
    localStorage.setItem('mindtest_latestResult', JSON.stringify(quizResultData));

    // Save to Supabase (History & Leaderboard)
    try {
        const promises = [];
        promises.push(addScoreToLeaderboard(username, scoreNum, avatarSVG, countryCode));

        if (currentUser && currentUser.id) {
            const historyPromise = saveQuizResult(currentUser.id, scoreNum, quizResultData);
            promises.push(historyPromise);
        }

        const timeoutPromise = new Promise(resolve => setTimeout(resolve, 2000)); // Max wait 2s
        await Promise.race([Promise.all(promises), timeoutPromise]);
    } catch (e) {
        console.error("Failed to save data before redirect:", e);
    }

    // Redirect to Dashboard
    window.location.href = 'dashboardIQ.html';
}
function showInterstitial(index) {
    hideAllScreens();
    const interstitialData = [
        { lottie: `<dotlottie-wc src="https://lottie.host/31dec7f5-f2d8-4331-bfa5-ebd46cae0f93/1ewrhEtWAT.lottie" style="width: 100%; height: auto;" autoplay loop></dotlottie-wc>`, headline: () => `Kecepatan <span class="text-primary">Luar Biasa!</span>`, text: `Anda merespons lebih cepat dari 85% peserta lain. Pertahankan momentum!` },
        { lottie: `<dotlottie-wc src="https://lottie.host/b5558bf9-04b3-4b9e-b8c5-59378bbe776a/HVWFqdGl9r.lottie" style="width: 100%; height: auto;" autoplay loop></dotlottie-wc>`, headline: () => `Potensi <span class="text-primary">Tinggi!</span>`, text: `Pola jawaban Anda menunjukkan kemampuan analisis spasial yang kuat.` },
        { lottie: `<dotlottie-wc src="https://lottie.host/7142700c-9f08-4594-919f-37da01aba124/GiGsYPXdRL.lottie" style="width: 100%; height: auto;" autoplay loop></dotlottie-wc>`, headline: () => `Logika <span class="text-primary">Tajam</span>`, text: `Anda berhasil memecahkan pola kompleks dengan akurasi tinggi.` },
        { lottie: `<dotlottie-wc src="https://lottie.host/220dda4c-0d17-4395-8aeb-c95e6227bb46/npsF0arvZp.lottie" style="width: 100%; height: auto;" autoplay loop></dotlottie-wc>`, headline: () => `Fase <span class="text-primary">Terakhir!</span>`, text: `Tingkat kesulitan akan meningkat. Tetap fokus.` }
    ];
    const data = interstitialData[index];
    document.getElementById('interstitial-lottie').innerHTML = data.lottie;
    document.getElementById('interstitial-headline').innerHTML = data.headline();
    document.getElementById('interstitial-text').textContent = data.text;
    interstitialScreen.classList.remove('hidden');
    document.getElementById('interstitial-continue-btn').onclick = () => {
        hideAllScreens();
        mainQuizContainer.classList.remove('hidden');
        navigationWrapper.classList.remove('hidden');
        const nextUnansweredIndex = userAnswers.findIndex(answer => answer === null);
        if (nextUnansweredIndex !== -1) currentQuestionIndex = nextUnansweredIndex;
        else currentQuestionIndex++;
        saveQuizProgress();
        displayQuestion();
    };
}
if (shareResultBtn) {
    shareResultBtn.onclick = async () => {
        const btnContent = shareResultBtn.innerHTML;
        shareResultBtn.innerHTML = '<span class="animate-spin material-icons text-sm">sync</span> Memproses...';
        shareResultBtn.disabled = true;
        const scoreText = document.getElementById('final-score').textContent;
        document.getElementById('share-card-score').textContent = scoreText;

        const scoreNum = parseInt(scoreText);
        let classification = "Average";
        let percentileText = "Top 50%";
        let archetype = "The Logician";
        if (scoreNum >= 130) { classification = "Very Superior"; percentileText = "Top 2%"; archetype = "The Visionary"; }
        else if (scoreNum >= 120) { classification = "Superior"; percentileText = "Top 9%"; archetype = "The Strategist"; }
        else if (scoreNum >= 110) { classification = "High Average"; percentileText = "Top 25%"; archetype = "The Analyst"; }
        else if (scoreNum >= 90) { classification = "Average"; percentileText = "Top 50%"; archetype = "The Logician"; }
        else if (scoreNum >= 80) { classification = "Low Average"; percentileText = "Top 75%"; archetype = "The Explorer"; }
        else { classification = "Borderline"; percentileText = "Top 98%"; archetype = "The Learner"; }
        document.getElementById('share-card-class').textContent = classification;
        document.getElementById('share-card-percentile').textContent = percentileText;
        document.getElementById('share-card-archetype').textContent = archetype;
        const verifyId = 'MT-' + Math.floor(100000 + Math.random() * 900000) + '-X';
        const today = new Date();
        const dateStr = today.getDate().toString().padStart(2, '0') + '.' + (today.getMonth() + 1).toString().padStart(2, '0') + '.' + today.getFullYear();

        document.getElementById('verify-id').textContent = verifyId;
        document.getElementById('verify-date').textContent = dateStr;
        const realImg = document.getElementById('share-card-img-real');
        const svgCont = document.getElementById('share-card-svg-container');

        if (userGooglePhoto) {
            realImg.src = userGooglePhoto;
            realImg.classList.remove('hidden');
            svgCont.classList.add('hidden');
        } else {
            realImg.classList.add('hidden');
            svgCont.classList.remove('hidden');
            if (avatarSVG) svgCont.innerHTML = avatarSVG;
            else {
                const fallbackAvatar = localStorage.getItem('mindtest_avatar');
                if (fallbackAvatar) svgCont.innerHTML = fallbackAvatar;
            }
        }
        await document.fonts.ready;
        try {
            const element = document.getElementById('share-card');
            const canvas = await html2canvas(element, {
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#0B1121',
                scale: 2,
                logging: false,
                width: 600,
                height: 600,
                onclone: (clonedDoc) => {
                    const clonedElement = clonedDoc.getElementById('share-card');
                    clonedElement.style.transform = 'none';
                }
            });
            canvas.toBlob(async (blob) => {
                if (!blob) throw new Error("Gagal membuat gambar.");

                const file = new File([blob], "mindtest-iq-result.png", { type: "image/png" });
                const shareText = `Saya mendapatkan skor IQ ${scoreText} di MindTest.id! Yuk ukur potensi dirimu di MindTest.id`;
                const shareUrl = "https://mindtest.id/";
                if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                    try {
                        await navigator.share({ title: 'Hasil Tes IQ MindTest.id', text: shareText, url: shareUrl, files: [file] });
                    } catch (err) { if (err.name !== 'AbortError') console.error('Share failed:', err); }
                } else {
                    const link = document.createElement('a');
                    link.download = 'mindtest-result.png';
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                    alert('Gambar hasil telah diunduh! Silakan bagikan ke media sosial Anda.\n\n' + shareText + '\n' + shareUrl);
                }
                shareResultBtn.innerHTML = btnContent;
                shareResultBtn.disabled = false;
            }, 'image/png');
        } catch (e) {
            console.error('Share Error:', e);
            alert('Maaf, gagal membagikan hasil. Coba lagi nanti.');
            shareResultBtn.innerHTML = btnContent;
            shareResultBtn.disabled = false;
        }
    };
}

function preloadNextImages(startIndex) {
    // Preload next 3 images
    for (let i = startIndex; i < startIndex + 3 && i < quizQuestions.length; i++) {
        const q = quizQuestions[i];
        if (q.type === 'image') {
            if (q.image) {
                const img = new Image();
                img.src = q.image;
            }
            if (q.options && Array.isArray(q.options)) {
                q.options.forEach(optUrl => {
                    const optImg = new Image();
                    optImg.src = optUrl;
                });
            }
        }
    }
}

// START APP
document.addEventListener('DOMContentLoaded', initSupabase);
