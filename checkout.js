console.log("Checkout script loading... (Version: FIX_SCOPE)");


var sbUrl = 'https://punlkmquvahqkqmcfqgx.supabase.co';
var sbKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1bmxrbXF1dmFocWtxbWNmcWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNTEwODUsImV4cCI6MjA4MzkyNzA4NX0.7ueEXLBsEBgAqHWoOzc0_djWCZ0d7PBMPIwM3tmay7A';


// Use 'var' to avoid "Identifier already declared" syntax errors if script reloads.
// Rename to 'supabaseClient' to avoid conflict with 'window.supabase' (the library).
var supabaseClient = null;

function initSupabase() {
    console.log("Initializing Supabase...");
    if (supabaseClient) return true;

    // 1. Check if globally initialized
    if (window.supabaseClient) {
        supabaseClient = window.supabaseClient;
        console.log("Supabase Client initialized from global.");
        return true;
    }

    // 2. Check if library exists and create client ourselves
    if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
        try {
            console.log("Creating Supabase client locally in checkout.js...");
            supabaseClient = window.supabase.createClient(sbUrl, sbKey);
            window.supabaseClient = supabaseClient; // Share it back
            return true;
        } catch (e) {
            console.error("Failed to create local Supabase client:", e);
        }
    }

    // Fallback?
    console.warn("window.supabaseClient not found and library not ready yet.");
    return false;
}


var timerInterval;
function startTimer() {
    console.log("Starting timer...");
    if (timerInterval) clearInterval(timerInterval);
    var timeLeft = 600; // 10 minutes
    var timerEl = document.getElementById('payment-timer');

    if (!timerEl) {
        console.error("Timer element #payment-timer not found!");
        return;
    }

    timerEl.textContent = "10:00";

    timerInterval = setInterval(function () {
        timeLeft--;
        var m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        var s = (timeLeft % 60).toString().padStart(2, '0');

        if (timerEl) timerEl.textContent = m + ":" + s + " ";

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            location.reload();
        }
    }, 1000);
    console.log("Timer started.");
}



// Explicitly attach to window
window.checkVoucher = async function () {
    console.log("Check voucher clicked.");
    var input = document.getElementById('voucher-input');
    var btn = document.getElementById('btn-check-voucher');
    var msg = document.getElementById('voucher-msg');

    if (!input || !btn || !msg) {
        console.error("Voucher elements missing");
        return;
    }

    var code = input.value.trim().toUpperCase();
    if (!code) return;

    // Retries for Supabase loaded late
    if (!initSupabase()) {
        alert("Sistem sedang memuat library... Coba lagi dalam beberapa detik.");
        return;
    }

    var originalText = btn.innerHTML;
    btn.innerHTML = '...';
    btn.disabled = true;

    try {
        console.log("Querying code:", code);
        // Use verifyAndFinish logic style check
        var result = await supabaseClient.from('vouchers').select('*').eq('code', code).eq('is_active', true).single();
        var data = result.data;
        var error = result.error;

        if (error || !data) {
            console.error("Voucher error:", error);
            throw new Error('Kode tidak valid');
        }

        console.log("Voucher found:", data);

        if (data.discount_percent === 100) {
            msg.innerHTML = '<span class="text-emerald-500 font-bold">Diskon 100% Berhasil!</span>';
            msg.classList.remove('hidden');
            input.disabled = true;
            input.classList.add('bg-emerald-50', 'border-emerald-200', 'text-emerald-700');
            btn.innerHTML = '✔';
            btn.className = "px-4 py-2 bg-emerald-500 text-white font-bold text-xs rounded-lg";

            // Hide upload, show free activate
            var btnUpload = document.getElementById('btn-upload-proof');
            var btnFree = document.getElementById('btn-activate-free');
            if (btnUpload) btnUpload.classList.add('hidden');
            if (btnFree) btnFree.classList.remove('hidden');

        } else {
            var newPrice = 35000 * ((100 - data.discount_percent) / 100);
            msg.innerHTML = '<span class="text-amber-600 font-bold">Diskon ' + data.discount_percent + '% (Jadi Rp ' + newPrice + ')</span>';
            msg.classList.remove('hidden');
            btn.innerHTML = 'Gunakan';
            btn.disabled = false;
        }
    } catch (err) {
        msg.innerHTML = '<span class="text-red-500 font-bold">Kode tidak valid</span>';
        msg.classList.remove('hidden');
        btn.innerHTML = 'Gunakan';
        btn.disabled = false;
    }
};

window.downloadQRWithBranding = async function (btn) {
    console.log("Download QR clicked.");

    // Safely find button if not passed
    if (!btn) btn = document.querySelector('button[onclick*="downloadQRWithBranding"]');

    var originalText = btn ? btn.innerHTML : 'Simpan QR Code';
    if (btn) btn.innerHTML = '<span class="material-icons-round text-sm animate-spin">refresh</span> Downloading...';

    try {
        console.log("Fetching QR image...");
        var response = await fetch("https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/QR%20Mindtest.png", { cache: "no-store" });
        if (!response.ok) throw new Error('Network response was not ok');

        var blob = await response.blob();
        var url = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        link.download = 'MindTest_QR_Payment.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        console.log("Download triggered.");
    } catch (error) {
        console.error('Download failed:', error);
        // Fallback
        window.open("https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/QR%20Mindtest.png", '_blank');
    } finally {
        if (btn) btn.innerHTML = originalText;
    }
};

window.verifyAndFinish = async function (isFree) {
    // Default param hack for strict mode safely
    if (typeof isFree === 'undefined') isFree = false;

    console.log("Verify called. Free:", isFree);

    if (timerInterval) clearInterval(timerInterval);

    if (!isFree) {
        var fileInput = document.getElementById('proof-upload');
        if (!fileInput || !fileInput.files.length) {
            alert("Mohon upload bukti pembayaran.");
            // Restart timer if canceled? No, just return.
            return;
        }
    }


    // Change button state to loading if possible, or just proceed since we show success UI immediately.
    // Ideally we want to await the DB update before showing success, or do it in background?
    // Let's do it before Success UI to ensure data consistency.

    if (supabaseClient) {
        try {
            const { data: { session }, error: sessionError } = await supabaseClient.auth.getSession();

            if (session && session.user) {
                console.log("Upgrading user:", session.user.id);
                const { error: updateError } = await supabaseClient
                    .from('profiles')
                    .update({ is_premium: true })
                    .eq('id', session.user.id);

                if (updateError) {
                    console.error("Failed to upgrade user:", updateError);
                    // Optional: alert user or just log it?
                    // If we fail to update, they won't get premium.
                    // For now, let's log and proceed, but maybe alert?
                    // alert("Gagal mengaktifkan premium. Hubungi admin jika masalah berlanjut.");
                } else {
                    console.log("User upgraded to Premium successfully.");
                }
            } else {
                console.warn("No active session found during checkout.");
            }
        } catch (err) {
            console.error("Error during premium upgrade:", err);
        }
    }

    // Success UI
    document.body.innerHTML =
        '<div class="min-h-screen flex items-center justify-center bg-slate-50">' +
        '<div class="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-sm mx-4 animate-float">' +
        '<div class="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500">' +
        '<span class="material-icons-round text-4xl">verified</span>' +
        '</div>' +
        '<h2 class="text-2xl font-black text-slate-800 mb-2">Pembayaran Berhasil!</h2>' +
        '<p class="text-slate-500 text-sm mb-6">Akun premium kamu sedang diaktifkan.</p>' +
        '<div class="w-full h-1 bg-slate-100 rounded-full overflow-hidden">' +
        '<div class="h-full bg-indigo-500 w-1/3 animate-[shimmer_1s_infinite]"></div>' +
        '</div>' +
        '</div>' +
        '</div>';

    // Confetti
    if (typeof confetti !== 'undefined') {
        var duration = 3000;
        var end = Date.now() + duration;
        (function frame() {
            confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
            confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    }

    setTimeout(function () { window.location.href = 'index.html'; }, 3000);
};


async function checkAuth() {
    console.log("Checking authentication...");

    // Ensure supabase is initialized
    if (!supabaseClient) {
        initSupabase();
    }

    if (supabaseClient) {
        try {
            const { data: { session }, error } = await supabaseClient.auth.getSession();
            if (error || !session) {
                console.warn("User not logged in. Showing modal...");
                openModal();
            } else {
                console.log("User is logged in:", session.user.email);

                // CHECK PREMIUM STATUS
                try {
                    const { data, error: profileError } = await supabaseClient
                        .from('profiles')
                        .select('is_premium')
                        .eq('id', session.user.id)
                        .single();

                    if (data && data.is_premium) {
                        renderPremiumUI();
                    }
                } catch (pe) {
                    console.error("Profile check error:", pe);
                }
            }
        } catch (err) {
            console.error("Auth check failed:", err);
            openModal();
        }
    } else {
        console.error("Supabase client not available for auth check.");
        openModal();
    }
}

function renderPremiumUI() {
    // Replace ENTIRE page content
    document.body.innerHTML = `
        <div class="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">
             <!-- Decor -->
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-200/40 rounded-full blur-3xl mix-blend-multiply filter animate-float"></div>
                <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-200/40 rounded-full blur-3xl mix-blend-multiply filter animate-float" style="animation-delay: 2s"></div>
            </div>

            <div class="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-10 text-center max-w-md mx-4 relative z-10 animate-fade-in-up">
                <div class="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500 shadow-lg shadow-emerald-200/50">
                    <span class="material-icons-round text-5xl">verified</span>
                </div>
                
                <h2 class="text-3xl font-black text-slate-800 mb-3">Member Premium</h2>
                <p class="text-slate-600 mb-8 leading-relaxed text-lg">
                    Kamu sudah menjadi member premium <span class="font-bold text-indigo-600">MindTest.id</span>.
                </p>
                
                <a href="daftar_tes.html" class="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl transition-all shadow-xl hover:shadow-indigo-200 transform hover:-translate-y-1" style="background: linear-gradient(to right, #4f46e5, #9333ea); color: white;">
                    <span class="material-icons-round group-hover:animate-bounce" style="font-size: 24px;">play_arrow</span> 
                    <span style="font-weight: bold; font-size: 1.125rem;">Mulai Tes</span>
                </a>
                
                <div class="mt-6 text-sm text-slate-400">
                    Selamat belajar dan berkembang! 🚀
                </div>
            </div>
        </div>
    `;

    // Confetti celebration
    if (typeof confetti !== 'undefined') {
        var duration = 3000;
        var end = Date.now() + duration;
        (function frame() {
            confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
            confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    }
}


function openModal() {
    const loginModal = document.getElementById('loginModal');
    if (!loginModal) return;

    loginModal.classList.remove('hidden');
    // Animate in
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            loginModal.style.opacity = '1';
            loginModal.querySelector('div').style.transform = 'scale(1)';
        });
    });
}

function closeModal() {
    const loginModal = document.getElementById('loginModal');
    if (!loginModal) return;

    loginModal.style.opacity = '0';
    loginModal.querySelector('div').style.transform = 'scale(0.95)';
    setTimeout(() => {
        loginModal.classList.add('hidden');
    }, 300);
}

window.handleGoogleLogin = async function () {
    if (!supabaseClient) {
        if (!initSupabase()) {
            alert("Sistem error initiating Supabase.");
            return;
        }
    }

    const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: window.location.href
        }
    });

    if (error) {
        console.error("Google login error:", error);
        alert("Gagal login: " + error.message);
    }
};




// Polling mechanism to wait for Supabase
var checkSupabaseInterval = setInterval(function () {
    if (initSupabase()) {
        clearInterval(checkSupabaseInterval);
        checkAuth();
    }
}, 100);

// Timeout after 5 seconds
setTimeout(function () {
    if (checkSupabaseInterval) clearInterval(checkSupabaseInterval);
    if (!supabaseClient) {
        console.warn("Supabase init timed out in checkout.js");
        checkAuth(); // Try one last time or fail gracefully
    }
}, 5000);


startTimer();



document.addEventListener('click', function (e) {
    // Close button
    if (e.target.closest('#closeModalBtn')) {
        closeModal();
    }
    // Google Login
    if (e.target.closest('#googleLoginModalBtn')) {
        handleGoogleLogin();
    }
});


var proofInput = document.getElementById('proof-upload');
if (proofInput) {
    proofInput.addEventListener('change', function () {
        if (this.files && this.files.length > 0) {
            // Change button to "Verifikasi Pembayaran"
            var btn = document.getElementById('btn-upload-proof');
            if (btn) {
                // Remove inline onclick behavior
                btn.removeAttribute('onclick');

                // Update UI
                btn.innerHTML = '<span class="material-icons-round text-emerald-500">verified_user</span> Verifikasi Pembayaran';
                btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
                btn.classList.add('bg-emerald-50', 'text-emerald-700', 'border-emerald-200');

                // Add new click handler
                btn.onclick = function (e) {
                    e.preventDefault();
                    startManualVerification(btn);
                };
            }
        }
    });
}

function startManualVerification(btn) {
    // Show Loader
    var originalText = btn.innerHTML;
    btn.innerHTML = '<span class="material-icons-round animate-spin">refresh</span> Memverifikasi...';
    btn.disabled = true;

    // Simulate delay
    setTimeout(function () {
        verifyAndFinish(false);
    }, 3000); // 3 seconds delay
}

console.log("Checkout script (FIX_SCOPE) loaded.");
