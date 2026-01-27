/* --- MOVED PAYMENT FUNCTIONS --- */
const supabaseUrl_payment = 'https://punlkmquvahqkqmcfqgx.supabase.co';
const supabaseKey_payment = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1bmxrbXF1dmFocWtxbWNmcWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNTEwODUsImV4cCI6MjA4MzkyNzA4NX0.7ueEXLBsEBgAqHWoOzc0_djWCZ0d7PBMPIwM3tmay7A';

window.processPayment = function () {
    const modal = document.getElementById('payment-modal');
    if (modal) modal.classList.add('hidden');
    showQRPayment();
};

function showQRPayment() {
    const qrOverlay = document.createElement('div');
    qrOverlay.id = 'qr-payment-modal';
    qrOverlay.className = 'fixed inset-0 z-[65] flex items-center justify-center p-4 animate-fade-in bg-slate-900/80 backdrop-blur-md';

    qrOverlay.innerHTML = `
    <div class="bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl max-w-sm w-full relative animate-pop-in border border-slate-200 dark:border-slate-700 transform scale-[0.85] md:scale-100 origin-center">
                <!--Header with Gradient Line-->
                <!--Header with Gradient Line removed-->
                
                <div class="p-6 text-center pt-8">
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Selesaikan Pembayaran</h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 rounded-lg py-2 px-3 inline-block">
                        Total Tagihan: <span class="font-bold text-slate-900 dark:text-white">Rp 35.000</span> (Diskon 75%)
                    </p>
                </div>

                <!--QR Code & Timer-->
    <div class="px-8 pb-8 flex flex-col items-center -mt-2">

        <!-- Timer Badge -->
        <div class="flex items-center gap-1.5 mb-4 text-red-500 bg-red-50 dark:bg-red-900/10 px-3 py-1 rounded-full text-xs font-bold border border-red-100 dark:border-red-900/30">
            <span class="material-icons-round text-sm animate-pulse">timer</span>
            <span>Sisa Waktu:</span>
            <span id="payment-timer" class="font-mono text-sm">10:00</span>
        </div>

        <!-- Scan Area -->
        <div class="p-4 bg-white rounded-2xl shadow-lg border border-slate-100 mb-4 relative group">
            <div class="absolute inset-0 border-2 border-indigo-500/20 rounded-2xl"></div>
            <!-- Corner Markers -->
            <div class="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-indigo-500 rounded-tl-xl -mt-1 -ml-1"></div>
            <div class="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-indigo-500 rounded-tr-xl -mt-1 -mr-1"></div>
            <div class="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-indigo-500 rounded-bl-xl -mb-1 -ml-1"></div>
            <div class="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-indigo-500 rounded-br-xl -mb-1 -mr-1"></div>

            <img src="assets/QR_Mindtest.png" class="w-48 h-48 object-contain rounded-lg relative z-10">

                <p class="text-[10px] text-center text-slate-400 mt-2 font-medium tracking-wide">NIM: MINDTEST INDONESIA</p>
        </div>
        
        <!-- Download QR Button -->
        <button onclick="downloadQRWithBranding()" class="mb-4 text-xs font-bold text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 transition-colors">
            <span class="material-icons-round text-sm">download</span>
            Simpan QR Code
        </button>

        <!-- Accepted Payments Image -->
        <div class="w-full mb-4 flex justify-center">
            <img src="assets/payment_methods.webp" class="h-20 w-auto object-contain" alt="Accepted Payments">
        </div>

        <!-- Security Assurance -->
        <div class="flex items-center justify-center gap-4 mb-6">
            <div class="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-900/10 px-2 py-1 rounded-md border border-emerald-100 dark:border-emerald-900/20">
                <span class="material-icons-round text-emerald-500 text-xs">lock</span>
                <span class="text-[10px] font-bold text-emerald-700 dark:text-emerald-400">Enkripsi SSL 128-bit</span>
            </div>
            <div class="flex items-center gap-1.5 bg-blue-50 dark:bg-blue-900/10 px-2 py-1 rounded-md border border-blue-100 dark:border-blue-900/20">
                <span class="material-icons-round text-blue-500 text-xs">verified_user</span>
                <span class="text-[10px] font-bold text-blue-700 dark:text-blue-400">Jaminan Keamanan</span>
            </div>
        </div>

        <!-- Voucher Section -->
        <div class="w-full mb-6">
            <div class="flex gap-2">
                <input type="text" id="voucher-input" placeholder="Punya kode voucher?"
                    class="flex-1 px-4 py-2 text-sm bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400">
                    <button onclick="checkVoucher()"
                        id="btn-check-voucher"
                        class="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-bold text-xs rounded-xl hover:bg-indigo-100 transition-colors border border-indigo-100 dark:border-indigo-800">
                        Gunakan
                    </button>
            </div>
            <p id="voucher-msg" class="text-[10px] mt-1.5 ml-1 hidden"></p>
        </div>

        <!-- Actions -->
        <input type="file" id="proof-upload" class="hidden" accept="image/*">

            <button id="btn-upload-proof" onclick="document.getElementById('proof-upload').click()" class="w-full py-3.5 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white font-bold rounded-xl shadow-lg shadow-slate-300 dark:shadow-none transition-all flex items-center justify-center gap-2 group transform active:scale-95">
                <span class="material-icons-round group-hover:-translate-y-0.5 transition-transform text-indigo-300">cloud_upload</span>
                Upload Bukti Pembayaran
            </button>

            <button id="btn-activate-free" onclick="verifyAndFinish(true)" class="hidden w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 transform active:scale-95">
                <span class="material-icons-round animate-bounce">celebration</span>
                Aktifkan Premium Gratis
            </button>

            <button id="btn-verify-payment" onclick="verifyAndFinish()" class="hidden w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 transform active:scale-95">
                <span class="material-icons-round animate-bounce">check_circle</span>
                Verifikasi Pembayaran
            </button>

            <button onclick="document.getElementById('qr-payment-modal').remove()" class="mt-4 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 font-medium transition-colors">
                Batalkan Transaksi
            </button>
    </div>
            </div>
    `;
    document.body.appendChild(qrOverlay);

    // Explicitly bind the change event to ensure it fires reliably
    const proofInput = document.getElementById('proof-upload');
    if (proofInput) {
        proofInput.addEventListener('change', function () {
            if (this.files && this.files.length > 0) {
                // Hide Upload Button, Show Verify Button
                const btnUpload = document.getElementById('btn-upload-proof');
                const btnVerify = document.getElementById('btn-verify-payment');
                if (btnUpload) btnUpload.classList.add('hidden');
                if (btnVerify) {
                    btnVerify.classList.remove('hidden');
                    btnVerify.classList.add('animate-pop-in');
                }
            }
        });
    }

    // --- QR DOWNLOAD LOGIC ---
    window.downloadQRWithBranding = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const qrImg = new Image();
        qrImg.crossOrigin = "Anonymous";

        qrImg.onload = () => {
            // Canvas Config
            const width = 400;
            const height = 550;
            canvas.width = width;
            canvas.height = height;

            // 1. Background
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, width, height);

            // 2. Header Branding
            ctx.fillStyle = '#4f46e5'; // Indigo 600
            ctx.fillRect(0, 0, width, 10); // Top bar

            ctx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
            ctx.fillStyle = '#1e293b'; // Slate 800
            ctx.textAlign = 'center';
            ctx.fillText('MindTest.id', width / 2, 50);

            ctx.font = '14px "Inter", sans-serif';
            ctx.fillStyle = '#64748b'; // Slate 500
            ctx.fillText('Official Payment QR', width / 2, 75);

            // 3. QR Image
            const qrSize = 300;
            const qrX = (width - qrSize) / 2;
            const qrY = 100;
            ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);

            // 4. Border around QR
            ctx.strokeStyle = '#e2e8f0';
            ctx.lineWidth = 2;
            ctx.strokeRect(qrX, qrY, qrSize, qrSize);

            // 5. Instruction Bottom
            ctx.font = 'bold 16px "Plus Jakarta Sans", sans-serif';
            ctx.fillStyle = '#0f172a';
            ctx.fillText('Scan untuk Bayar', width / 2, 440);

            ctx.font = '12px "Inter", sans-serif';
            ctx.fillStyle = '#64748b';
            ctx.fillText('NIM: MINDTEST INDONESIA', width / 2, 465);

            ctx.font = 'bold 20px "Inter", sans-serif';
            ctx.fillStyle = '#4f46e5';
            ctx.fillText('Rp 35.000', width / 2, 500);

            ctx.font = 'italic 10px "Inter", sans-serif';
            ctx.fillStyle = '#94a3b8';
            ctx.fillText('Simpan bukti bayar anda', width / 2, 530);

            // 6. Download
            const link = document.createElement('a');
            link.download = 'MindTest_QR_Payment.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        };

        qrImg.onerror = (e) => {
            alert("Gagal memuat gambar QR. Silakan coba lagi.");
            console.error("QR Load Error:", e);
        };

        // Set src AFTER handlers are defined to avoid race conditions
        qrImg.src = "assets/QR_Mindtest.png";
    };

    // Timer Logic
    let timeLeft = 600; // 10 minutes
    // Check Voucher Function
    window.checkVoucher = async function () {
        const input = document.getElementById('voucher-input');
        const btn = document.getElementById('btn-check-voucher');
        const msg = document.getElementById('voucher-msg');
        const code = input.value.trim().toUpperCase();

        if (!code) return;

        // Loading state
        btn.innerHTML = '<span class="material-icons-round text-sm animate-spin">sync</span>';
        btn.disabled = true;

        try {
            const restUrl = `${supabaseUrl_payment}/rest/v1/vouchers?code=eq.${encodeURIComponent(code)}&is_active=eq.true&select=*&limit=1`;

            const response = await fetch(restUrl, {
                method: 'GET',
                headers: {
                    'apikey': supabaseKey_payment,
                    'Authorization': `Bearer ${supabaseKey_payment}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Server connection failed: ${response.status}`);
            }

            const vouchers = await response.json();

            if (!vouchers || vouchers.length === 0) {
                // Mimic the error the user expects for invalid code
                throw new Error('Kode tidak valid');
            }

            const data = vouchers[0];

            if (data.discount_percent === 100) {
                // Success: 100% Discount
                msg.textContent = "Kode berhasil! Kamu dapat diskon 100%";
                msg.className = "text-[10px] mt-1.5 ml-1 text-emerald-500 font-bold flex items-center gap-1";
                msg.classList.remove('hidden');

                // Update content
                input.disabled = true;
                btn.innerHTML = '<span class="material-icons-round text-sm">check</span>';
                btn.classList.add('bg-emerald-100', 'text-emerald-600', 'border-emerald-200');

                // Hide Upload, Show Free Activate
                document.getElementById('btn-upload-proof').classList.add('hidden');
                document.getElementById('btn-activate-free').classList.remove('hidden');

                // Update Price Header
                const priceEl = document.querySelector('#qr-payment-modal h3 + p');
                if (priceEl) {
                    priceEl.innerHTML = `Total Tagihan: <span class="font-bold text-emerald-500 line-through decoration-slate-400 text-slate-400 mr-1">Rp 35.000</span> <span class="font-bold text-emerald-600">Rp 0 (GRATIS)</span>`;
                }
            } else {
                msg.textContent = "Voucher tersedia tapi bukan diskon 100%";
                msg.className = "text-[10px] mt-1.5 ml-1 text-yellow-600 font-bold";
                msg.classList.remove('hidden');
                btn.innerHTML = 'Gunakan';
                btn.disabled = false;
            }

        } catch (err) {
            console.error("DEBUG VOUCHER ERROR:", err);
            let errorMsg = "Kode voucher tidak ditemukan.";

            if (err.code || err.message || err.details) {
                errorMsg = "Error: " + (err.message || JSON.stringify(err));
            }

            msg.textContent = errorMsg;
            msg.className = "text-[10px] mt-1.5 ml-1 text-red-500 font-bold";
            msg.classList.remove('hidden');
            btn.innerHTML = 'Gunakan';
            btn.disabled = false;
        }
    };

    const timerEl = document.getElementById('payment-timer');
    const timerInterval = setInterval(() => {
        timeLeft--;
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        if (timerEl) timerEl.textContent = `${m}:${s} `;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (document.getElementById('qr-payment-modal')) {
                document.getElementById('qr-payment-modal').remove();
            }
        }
    }, 1000);

    window.verifyAndFinish = function (isFree = false) {
        // Function to run the final success logic
        const runSuccess = () => {
            const modal = document.getElementById('qr-payment-modal');
            if (modal) {
                modal.innerHTML = `
        <div class="bg-white dark:bg-slate-800 rounded-3xl p-8 flex flex-col items-center animate-beat">
                            <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-500">
                                <span class="material-icons-round text-3xl animate-bounce">verified</span>
                            </div>
                            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-2">Verifikasi Berhasil!</h3>
                            <p class="text-xs text-slate-500 text-center">Sedang menyiapkan laporan lengkap kamu...</p>
                        </div>
        `;
            }

            clearInterval(timerInterval);

            if (typeof confetti === 'function') {
                const count = 200;
                const defaults = { origin: { y: 0.7 } };
                function fire(particleRatio, opts) {
                    confetti(Object.assign({}, defaults, opts, {
                        particleCount: Math.floor(count * particleRatio)
                    }));
                }
                fire(0.25, { spread: 26, startVelocity: 55 });
                fire(0.2, { spread: 60 });
                fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
                fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
                fire(0.1, { spread: 120, startVelocity: 45 });
            }

            setTimeout(() => {
                if (modal) modal.remove();
                localStorage.setItem('user_premium', 'true');
                window.location.href = window.location.pathname + '?status=success';
            }, 2500);
        };

        if (!isFree) {
            const fileInput = document.getElementById('proof-upload');
            // Basic validation
            if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
                alert("File bukti pembayaran belum dipilih.");
                return;
            }

            // Simulate Loading Process
            const btnVerify = document.getElementById('btn-verify-payment');
            if (btnVerify) {
                const originalContent = btnVerify.innerHTML;
                btnVerify.disabled = true;
                btnVerify.innerHTML = `
                    <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Memverifikasi...</span>
                `;

                // Wait 2.5 seconds then success
                setTimeout(() => {
                    runSuccess();
                }, 2500);
            } else {
                runSuccess();
            }
        } else {
            // Free flow (voucher) - instant
            runSuccess();
        }
    };

    // Confetti script check moved to showCelebration
    // ...
}


window.closePaymentModal = function () {
    const el = document.getElementById('payment-modal');
    if (el) el.classList.add('hidden');
};

// --- CELEBRATION OVERLAY ---
function showCelebration() {
    if (!document.getElementById('confetti-script')) {
        const script = document.createElement('script');
        script.id = 'confetti-script';
        script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
        script.onload = () => triggerConfetti();
        document.body.appendChild(script);
    } else {
        triggerConfetti();
    }

    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm animate-fade-in';
    overlay.innerHTML = `
    <div class="relative text-center w-full max-w-[320px] mx-4"> 
                
                <!--Card -->
    <div class="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-2xl transform scale-100 animate-pop-in relative overflow-visible">

        <div class="relative z-10 flex flex-col items-center">
            <!-- Icon Circle (Purple) -->
            <div class="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center mb-6 shadow-xl shadow-indigo-600/30 ring-4 ring-white dark:ring-slate-800 relative animate-bounce-slight">
                <!-- Decorative elements inside circle -->
                <div class="absolute top-2 right-3 text-cyan-400 text-lg opacity-80">+</div>
                <div class="absolute bottom-3 left-4 text-orange-400 text-xs opacity-80">o</div>
                <div class="absolute top-4 left-3 text-purple-300 text-xs opacity-80">*</div>

                <span class="material-icons-round text-5xl text-white drop-shadow-md">thumb_up_alt</span>
            </div>

            <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2 tracking-tight">Selamat!</h2>

            <p class="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                Kamu resmi menjadi <span class="text-indigo-600 dark:text-indigo-400 font-bold">Member Premium</span>. Semua akses telah terbuka.
            </p>

            <button onclick="this.closest('.fixed').remove()" class="w-full py-3 px-6 bg-cyan-400 hover:bg-cyan-500 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-400/50 hover:-translate-y-0.5 transition-all active:scale-95 text-sm tracking-wide">
                Mulai Eksplorasi
            </button>
        </div>
    </div>
            </div>
    `;
    document.body.appendChild(overlay);

    function triggerConfetti() {
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 3 : 5;
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: particleCount,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#818cf8', '#22d3ee', '#fbbf24', '#f472b6']
            });
            confetti({
                particleCount: particleCount,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#818cf8', '#22d3ee', '#fbbf24', '#f472b6']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
}

// --- SOCIAL PROOF NOTIFICATION ---
function initSocialProof() {
    const socialData = [
        {
            code: 'id',
            name: 'Indonesia',
            people: [
                { name: "Aksara Nandita", province: "Jawa Tengah" },
                { name: "Rayhan Pradipta", province: "Jawa Barat" },
                { name: "Kirana Aveline", province: "DKI Jakarta" }
            ]
        }
    ];

    const toast = document.createElement('div');
    toast.id = 'social-proof-toast';
    toast.className = 'fixed top-6 left-1/2 transform -translate-x-1/2 z-[80] transition-all duration-500 -translate-y-20 opacity-0';
    toast.innerHTML = `
    <div class="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 pr-5 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 dark:border-slate-700 max-w-xs ring-1 ring-black/5">
                <div class="relative w-10 h-10 rounded-full overflow-hidden border-2 border-slate-50 dark:border-slate-600 shadow-sm shrink-0 self-center">
                     <img id="sp-flag" src="" class="w-full h-full object-cover">
                </div>
                <div class="flex flex-col justify-center">
                    <span class="text-[9px] uppercase font-extrabold text-indigo-500 dark:text-indigo-400 tracking-wider mb-0.5 whitespace-nowrap">Baru membuka akses premium</span>
                    <div class="flex items-center gap-1 mb-0.5">
                        <span id="sp-name" class="text-xs font-bold text-slate-800 dark:text-white truncate max-w-[150px]">Nama User</span>
                        <span class="material-icons-round text-blue-500 text-[10px]">verified</span>
                    </div>
                    <!-- Added Region & Time -->
                    <span id="sp-details" class="text-[10px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">Jawa Tengah • 2 menit yang lalu</span>
                </div>
            </div>
    `;
    document.body.appendChild(toast);

    // Logic to show/hide
    const showToast = () => {
        // Random Country
        const country = socialData[Math.floor(Math.random() * socialData.length)];
        // Random Person Object
        const person = country.people[Math.floor(Math.random() * country.people.length)];

        const spName = toast.querySelector('#sp-name');
        const spFlag = toast.querySelector('#sp-flag');
        const spDetails = toast.querySelector('#sp-details');
        // const spProvince = toast.querySelector('#sp-province'); // Province removed from innerHTML in simplified version? Check below.
        // Wait, the innerHTML in my view included sp-province? No, checking Step 777/863
        // Line 447 just closes div.
        // Line 443-446 has name and verified icon.
        // Line 2272 in previous file showed province.
        // In payment_utils.js View (Step 863):
        // 441: <div class="flex flex-col justify-center">
        // ... name ...
        // 447: </div>
        // It seems I missed copying the Province line when creating payment_utils.js?
        // Let's re-add it to innerHTML first if needed, or just insert it via JS if element missing?
        // Actually, looking at Step 863, lines 441-447 don't have the province div! 
        // I must have truncated it when writing payment_utils.js in Step 754.

        // Let's FIX the innerHTML too.

        if (spName) spName.textContent = person.name;
        if (spFlag) spFlag.src = `https://flagcdn.com/w80/${country.code}.png`;
        if (spDetails) {
            const timeAgo = Math.floor(Math.random() * 59) + 1;
            spDetails.textContent = `${person.province} • ${timeAgo} menit yang lalu`;
        }

        // Show: Slide Down
        toast.classList.remove('-translate-y-20', 'opacity-0');

        // Hide after 4s (Slide Up)
        setTimeout(() => {
            toast.classList.add('-translate-y-20', 'opacity-0');
        }, 5000);
    };

    // Initial delay then loop
    setTimeout(() => {
        showToast();
        setInterval(() => {
            if (Math.random() > 0.3) showToast();
        }, 12000);
    }, 4000);
}
initSocialProof();
