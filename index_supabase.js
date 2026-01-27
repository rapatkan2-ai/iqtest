

// Tailwind config removed (using compiled CSS)

document.addEventListener('DOMContentLoaded', () => {


    const loginModal = document.getElementById('loginModal');
    const openModal = () => {
        if (!loginModal) return;


        loginModal.classList.remove('hidden');


        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                loginModal.style.opacity = '1';
                loginModal.style.pointerEvents = 'auto';

                const modalContent = loginModal.querySelector('div');
                if (modalContent) {
                    modalContent.style.transform = 'scale(1)';
                }
            });
        });
    };
    const closeModal = () => {
        if (loginModal) {
            loginModal.style.opacity = '0';
            loginModal.style.pointerEvents = 'none';
            const modalContent = loginModal.querySelector('div');
            if (modalContent) modalContent.style.transform = 'scale(0.95)';


            setTimeout(() => {
                loginModal.classList.add('hidden');
            }, 300);
        }
    };


    document.addEventListener('click', (e) => {
        const target = e.target.closest('a, button');

        if (!target) return;


        if (['openLoginModalBtn', 'openLoginModalBtnRef', 'mobileOpenLoginModalBtn', 'mobileOpenLoginModalBtnRef'].includes(target.id)) {
            e.preventDefault();
            openModal();
            return;
        }


        if (target.id === 'microsoftLoginModalBtn' || target.closest('#microsoftLoginModalBtn')) {
            e.preventDefault();
            return;
        }


        if (target.id === 'closeModalBtn') {
            e.preventDefault();
            closeModal();
            return;
        }


        if (target.id === 'googleLoginModalBtn') {
            e.preventDefault();
            handleGoogleLogin();
            return;
        }


        if (target.classList.contains('supabaseLogoutBtn')) {
            e.preventDefault();
            handleLogout();
            return;
        }
    });


    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) closeModal();
        });
    }


    let supabase = null;

    try {
        if (window.supabaseClient) {
            supabase = window.supabaseClient;
        } else if (typeof window.supabase !== 'undefined') {
            console.warn("window.supabaseClient not found, initializing locally (fallback).");
            const supabaseUrl = 'https://punlkmquvahqkqmcfqgx.supabase.co';
            const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1bmxrbXF1dmFocWtxbWNmcWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNTEwODUsImV4cCI6MjA4MzkyNzA4NX0.7ueEXLBsEBgAqHWoOzc0_djWCZ0d7PBMPIwM3tmay7A';
            supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
        } else {
            console.error("Supabase library not loaded. Auth features will be disabled.");
        }
    } catch (err) {
        console.error("Failed to initialize Supabase:", err);
    }

    async function handleGoogleLogin() {
        if (!supabase) {
            alert("Sistem login sedang memuat atau terjadi kesalahan. Silakan refresh halaman.");
            return;
        }
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: window.location.origin + '/index.html'
            }
        });
        if (error) alert("Login error: " + error.message);
    }

    async function handleLogout() {
        if (!supabase) return;
        await supabase.auth.signOut();
        window.location.reload();
    }



    // --- METHODOLOGY MODAL LOGIC ---
    const methodologyModal = document.getElementById('methodologyModal');
    const methodologyBackdrop = document.getElementById('methodologyBackdrop');
    const methodologyPanel = document.getElementById('methodologyPanel');

    window.openMethodologyModal = function () {
        if (!methodologyModal) return;
        methodologyModal.classList.remove('hidden');
        // Animate in
        requestAnimationFrame(() => {
            if (methodologyBackdrop) {
                methodologyBackdrop.classList.remove('opacity-0', 'pointer-events-none');
                methodologyBackdrop.classList.add('opacity-100');
            }
            if (methodologyPanel) {
                methodologyPanel.classList.remove('scale-95', 'opacity-0', 'pointer-events-none');
                methodologyPanel.classList.add('scale-100', 'opacity-100');
            }
        });
    };

    window.closeMethodologyModal = function () {
        if (!methodologyModal) return;
        // Animate out
        if (methodologyBackdrop) {
            methodologyBackdrop.classList.remove('opacity-100');
            methodologyBackdrop.classList.add('opacity-0');
        }
        if (methodologyPanel) {
            methodologyPanel.classList.remove('scale-100', 'opacity-100');
            methodologyPanel.classList.add('scale-95', 'opacity-0');
        }

        setTimeout(() => {
            methodologyModal.classList.add('hidden');
            if (methodologyBackdrop) methodologyBackdrop.classList.add('pointer-events-none');
            if (methodologyPanel) methodologyPanel.classList.add('pointer-events-none');
        }, 300);
    };

    // Close on backdrop click
    if (methodologyModal) {
        const methodologyWrapper = methodologyModal.querySelector('.fixed.inset-0.z-10');
        if (methodologyWrapper) {
            methodologyWrapper.addEventListener('click', (e) => {
                if (e.target === methodologyWrapper) {
                    window.closeMethodologyModal();
                }
            });
        }
    }


    // --- UPDATE UI FUNCTION ---
    async function updateUI(user) {
        const container = document.getElementById('login-container');
        const mobileContainer = document.getElementById('mobile-login-container');
        const desktopHasil = document.getElementById('desktop-nav-hasil');
        const mobileHasil = document.getElementById('mobile-nav-hasil');

        // Close modal if referenced (since index_supabase.js logic might still need it)
        const loginModal = document.getElementById('loginModal');
        if (user && loginModal) {
            loginModal.classList.add('hidden');
            // Also ensure global vars reset if needed or simply visual hide
            // Reuse existing closeModal logic if possible, but manual hide is safe here
        }

        if (user) {
            const fullName = user.user_metadata.full_name || user.user_metadata.name || 'User';
            const firstName = fullName.split(' ')[0];

            // Improved Avatar Logic
            const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=random&color=fff&size=150`;
            const avatarUrl = user.user_metadata.avatar_url || user.user_metadata.picture || fallbackAvatar;

            let isPremium = false;
            if (supabase) {
                const { data } = await supabase.from('profiles').select('is_premium').eq('id', user.id).single();
                if (data && data.is_premium) isPremium = true;
            }

            const avatarBorderClass = isPremium ? 'border-2 border-yellow-400 ring-2 ring-yellow-400/30' : 'border border-gray-300';

            const desktopHtml = `
                       <div class="flex items-center gap-2">
                        <a href="dashboard.html" class="relative group cursor-pointer shrink-0 block">
                            <img src="${avatarUrl}" 
                                 referrerpolicy="no-referrer" 
                                 onerror="this.onerror=null; this.src='${fallbackAvatar}'" 
                                 alt="Foto" 
                                 class="h-8 w-8 rounded-full ${avatarBorderClass} shadow-sm object-cover transition-transform group-hover:scale-105 bg-gray-100">
                        </a>
                        <div class="flex flex-col justify-center min-w-[60px]">
                            <span class="text-xs font-bold text-gray-700 hidden sm:block leading-none truncate max-w-[100px]">${firstName}</span>
                            ${isPremium ? '<div class="flex items-center gap-0.5 mt-0.5"><span class="material-icons text-yellow-500" style="font-size: 10px;">verified</span><span class="text-yellow-600 font-bold leading-none" style="font-size: 10px;">Premium</span></div>' : ''}
                        </div>
                         <button onclick="handleLogout()" class="text-xs text-red-500 font-semibold border border-red-200 px-3 py-1 rounded-full hover:bg-red-50 ml-1">
                          Keluar
                        </button>
                      </div>
                    `;

            const mobileHtml = `
                 <div class="flex items-center gap-2 bg-white/70 backdrop-blur-md px-2 py-1.5 rounded-full shadow-lg border border-white/50 ring-1 ring-white/30">
                    <a href="dashboard.html" class="relative block group">
                        <img src="${avatarUrl}" class="h-8 w-8 rounded-full ${avatarBorderClass} object-cover group-hover:scale-105 transition-transform" onerror="this.src='${fallbackAvatar}'">
                         ${isPremium ? '<div class="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full w-4 h-4 flex items-center justify-center border border-white shadow-sm"><span class="material-icons text-white" style="font-size: 10px;">star</span></div>' : ''}
                    </a>
                    <button onclick="handleLogout()" class="text-[10px] text-red-500 font-bold bg-red-50 px-3 py-1.5 rounded-full hover:bg-red-100 transition-colors ml-1">Keluar</button>
                </div>
            `;

            if (container) container.innerHTML = desktopHtml;
            if (mobileContainer) mobileContainer.innerHTML = mobileHtml;

            if (desktopHasil) desktopHasil.classList.remove('hidden');
            if (mobileHasil) mobileHasil.classList.remove('hidden');
        } else {
            // Reset to Login Button if logged out
            const loginBtnHtml = `
                <button type="button" id="openLoginModalBtn"
                  class="ml-3 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 12H3m12 0l-4-4m4 4l-4 4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Login</span>
                </button>
             `;
            if (container) container.innerHTML = loginBtnHtml;

            const mobileLoginBtnHtml = `
                <button type="button" id="mobileOpenLoginModalBtn"
                  class="flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md hover:bg-red-500 transition-all">
                  <span>Login</span>
                </button>
             `;
            if (mobileContainer) mobileContainer.innerHTML = mobileLoginBtnHtml;


            if (desktopHasil) desktopHasil.classList.add('hidden');
            if (mobileHasil) mobileHasil.classList.add('hidden');
        }
    }

    // Attach handleLogout to window so it can be called from inline HTML
    window.handleLogout = async function () {
        if (!supabase) return;
        await supabase.auth.signOut();
        window.location.reload();
    };


    if (supabase) {
        supabase.auth.onAuthStateChange((event, session) => {
            updateUI(session?.user);
        });
        supabase.auth.getSession().then(({ data: { session } }) => {
            updateUI(session?.user);
        }).catch(err => console.error("Error checking session:", err));
    }



    // --- RESTORED LOGIC START ---

    // 1. Inline Testimonial Scroll Logic
    (function () {
        const wrapper = document.getElementById('scrollWrapperInline');
        if (!wrapper) return;
        const track = document.getElementById('testimonialTrackInline');
        const container = wrapper.querySelector('.scroll-container');

        let resizeTimer;

        function setupAnimation() {
            if (!container || !track) return;
            const contentWidth = track.scrollWidth;
            const visibleWidth = container.clientWidth;
            const distance = Math.max(0, contentWidth - visibleWidth);

            if (distance <= 10) {
                wrapper.dataset.animate = '0';
                track.style.removeProperty('--scroll-distance');
                track.style.removeProperty('--duration');
                return;
            }

            track.style.setProperty('--scroll-distance', `-${distance}px`);
            const speedPxPerSec = 60;
            const durationSec = Math.max(8, Math.round(distance / speedPxPerSec));
            track.style.setProperty('--duration', `${durationSec}s`);
            wrapper.dataset.animate = '1';
            track.style.animationPlayState = 'running';
        }

        const resizeObserver = new ResizeObserver(() => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(setupAnimation, 100);
        });
        if (container) resizeObserver.observe(container);
        if (track) resizeObserver.observe(track);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const trackEl = entry.target.querySelector('.testimonial-track');
                if (!trackEl) return;
                if (entry.isIntersecting) {
                    trackEl.style.animationPlayState = 'running';
                } else {
                    trackEl.style.animationPlayState = 'paused';
                }
            });
        }, { threshold: 0.1 });

        if (wrapper) observer.observe(wrapper);
        setupAnimation();

        const imgs = track.querySelectorAll('img');
        imgs.forEach(img => {
            if (!img.complete) {
                img.addEventListener('load', setupAnimation);
            }
        });
    })();


    // 2. Hero Slider Logic
    const slideImages = [
        'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/assets/12.webp',
        'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/assets/13.webp',
        'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/assets/14.webp',
        'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/assets/7.webp',
        'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/assets/8.webp',
        'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/assets/9.webp'
    ];
    const desktopSlider = document.getElementById('hero-slider-desktop');
    const mobileSlider = document.getElementById('hero-slider-mobile');
    let currentSlide = 0;

    function renderSlide(container, index, isMobile) {
        if (!container) return;
        const transformStyle = isMobile ? 'scale(1.1) translateY(-30px)' : 'scale(1.2)';
        const originStyle = isMobile ? 'center bottom' : 'bottom';
        container.innerHTML = `<img src="${slideImages[index]}" class="w-full h-full object-contain drop-shadow-2xl animate-fade-in" style="transform: ${transformStyle}; transform-origin: ${originStyle}; animation: fadeIn 0.5s" alt="Slide">`;
    }

    // Initialize first slide if elements exist
    if (desktopSlider) renderSlide(desktopSlider, currentSlide, false);
    if (mobileSlider) renderSlide(mobileSlider, currentSlide, true);

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slideImages.length;
        renderSlide(desktopSlider, currentSlide, false);
        renderSlide(mobileSlider, currentSlide, true);
    }, 5000); // 5 seconds


    // 3. Statistic Counter
    const counterEl = document.getElementById('test-counter');
    if (counterEl) {
        let count = 12066;
        setInterval(() => {
            count += Math.floor(Math.random() * 3) + 1;
            counterEl.innerText = count.toLocaleString('id-ID');
        }, 2500);
    }


    // 4. Search Input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                window.location.href = 'quizz.html';
            }
        });
    }


    // 5. FAQ Logic
    const faqData = [
        { question: "Apakah tes ini berbayar?", answer: "Tes utama kami gratis untuk diikuti. Kami menawarkan laporan analisis mendalam dan sertifikat dengan sedikit biaya untuk mendukung platform kami, tetapi ini sepenuhnya opsional." },
        { question: "Berapa lama waktu yang dibutuhkan untuk tes IQ?", answer: "Tes IQ kami memakan waktu hingga 20 menit untuk diselesaikan. Setiap tes harus diselesaikan dalam satu sesi dan tidak dapat dijeda, karena ini memastikan hasil yang paling akurat. Harap rencanakan waktu tanpa gangguan sebelum memulai tes." },
        { question: "Bisakah saya mengulang tes?", answer: "Ya, kamu dapat mengulang tes untuk melihat kemajuan kamu. Namun, kami merekomendasikan untuk memberi jeda waktu beberapa minggu antar tes untuk mendapatkan hasil yang paling akurat dan melihat perkembangan kemampuan kognitif kamu." },
        { question: "Bisakah saya mengakses MindTest.id di beberapa perangkat?", answer: "Tentu saja! Situs kami sepenuhnya responsif dan dapat diakses dengan lancar di komputer, tablet, maupun ponsel. Hasil akan tersimpan di akun (jika kamu membuatnya)." },
        { question: "Apakah data saya aman?", answer: "Kami sangat menjaga privasi dan keamanan data. Semua hasil tes bersifat rahasia dan kami menggunakan praktik keamanan standar industri untuk melindungi informasi pribadi. Kami tidak akan pernah membagikan data kamu tanpa persetujuan." }
    ];
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
        faqContainer.innerHTML = '';
        faqData.forEach(item => {
            const el = document.createElement('div');
            el.className = 'faq-item border-b border-gray-200 pb-4 last:border-0';
            el.innerHTML = `
            <button class="faq-question w-full flex justify-between items-center text-left text-sm md:text-lg font-semibold text-slate-800 hover:text-blue-600 py-3 transition-colors">
                <span>${item.question}</span>
                <span class="material-icons faq-icon text-slate-400 text-sm md:text-base">expand_more</span>
            </button>
            <div class="faq-answer text-slate-500 leading-relaxed text-sm md:text-base overflow-hidden" style="max-height: 0; opacity: 0; transition: all 0.3s ease-out;">
                <p class="pb-2">${item.answer}</p>
            </div>
        `;
            const btn = el.querySelector('.faq-question');
            const answerDiv = el.querySelector('.faq-answer');
            const icon = el.querySelector('.faq-icon');

            btn.addEventListener('click', () => {
                const isOpen = el.classList.contains('open');

                document.querySelectorAll('.faq-item.open').forEach(openItem => {
                    if (openItem !== el) {
                        openItem.classList.remove('open');
                        const otherAnswer = openItem.querySelector('.faq-answer');
                        const otherIcon = openItem.querySelector('.faq-icon');
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = '0';
                            otherAnswer.style.opacity = '0';
                        }
                        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                    }
                });

                el.classList.toggle('open');
                if (!isOpen) {
                    answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
                    answerDiv.style.opacity = '1';
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    answerDiv.style.maxHeight = '0';
                    answerDiv.style.opacity = '0';
                    icon.style.transform = 'rotate(0deg)';
                }
            });
            faqContainer.appendChild(el);
        });
    }


    // 6. PDF Modal Logic
    const pdfModal = document.getElementById('pdf-modal');
    const readPaperBtn = document.getElementById('read-paper-btn');
    const closePdfBtn = document.getElementById('close-pdf-modal');
    if (readPaperBtn && pdfModal) {
        readPaperBtn.addEventListener('click', () => {
            const iframe = document.getElementById('pdf-iframe');
            if (iframe) iframe.src = 'https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/The_Raven_Progressive_Matrices_Tests_Their_Theoret.pdf';
            pdfModal.classList.remove('hidden');
        });
    }
    if (closePdfBtn && pdfModal) {
        closePdfBtn.addEventListener('click', () => {
            pdfModal.classList.add('hidden');
            const iframe = document.getElementById('pdf-iframe');
            if (iframe) iframe.src = '';
        });
    }


    // 7. Certificate Lightbox Logic
    const certLightbox = document.getElementById('cert-lightbox-modal');
    const certLightboxImg = document.getElementById('cert-lightbox-img');
    const closeCertLightboxBtn = document.getElementById('close-cert-lightbox');

    document.querySelectorAll('.certificate-thumb').forEach(img => {
        img.addEventListener('click', function () {
            if (certLightbox && certLightboxImg) {
                certLightboxImg.src = this.src;
                certLightbox.classList.remove('hidden');
                certLightbox.style.display = 'flex';
            }
        });
    });

    const closeLightbox = () => {
        if (certLightbox) {
            certLightbox.classList.add('hidden');
            certLightbox.style.display = 'none';
            setTimeout(() => { if (certLightboxImg) certLightboxImg.src = ''; }, 300);
        }
    };

    if (closeCertLightboxBtn) {
        closeCertLightboxBtn.addEventListener('click', closeLightbox);
    }

    if (certLightbox) {
        certLightbox.addEventListener('click', (e) => {
            if (e.target === certLightbox) {
                closeLightbox();
            }
        });
    }

    // --- RESTORED LOGIC END ---

}); // End of DOMContentLoaded

