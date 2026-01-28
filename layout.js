class AppAuthModal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="loginModal" class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-[100] hidden transition-all duration-300 opacity-0" style="opacity: 0;">
            <div class="bg-white rounded-[2rem] shadow-2xl w-full max-w-sm p-8 m-4 relative transform scale-95 transition-all duration-300" style="max-width: 400px;">
                <button id="closeModalBtn" class="absolute top-5 right-5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors">
                    <span class="material-icons text-xl">close</span>
                </button>

                <div class="text-center mt-2">
                    <div class="mb-6 flex justify-center">
                        <div class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center -rotate-6">
                            <span class="text-3xl">👋</span>
                        </div>
                    </div>

                    <h2 class="text-2xl font-bold mb-2 text-slate-800 tracking-tight">Welcome Back!</h2>
                    <p class="text-slate-500 mb-8 text-sm leading-relaxed px-4">
                        Login untuk menyimpan hasil tes dan memantau progress kecerdasanmu
                    </p>

                    <div class="space-y-3">
                        <button id="googleLoginModalBtn" class="group w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 text-slate-700 font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5">
                            <img src="assets/google-color.svg" onerror="this.src='https://www.svgrepo.com/show/475656/google-color.svg'" alt="Google" class="w-5 h-5">
                            <span>Masuk dengan Google</span>
                        </button>

                        <button id="microsoftLoginModalBtn" disabled class="w-full flex items-center justify-center gap-3 bg-slate-50 border border-slate-200 text-slate-400 font-medium py-3.5 px-4 rounded-xl cursor-not-allowed opacity-75 grayscale select-none" title="Sementara tidak tersedia">
                            <img src="assets/Microsoft_logo.svg" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'" alt="Microsoft" class="w-5 h-5 opacity-50">
                            <span>Masuk dengan Microsoft</span>
                        </button>
                    </div>

                    <div class="mt-8 pt-6 border-t border-slate-100">
                        <p class="text-xs text-slate-400">
                            Dengan masuk, Anda menyetujui <a href="#" class="text-slate-600 hover:text-blue-600 hover:underline">Syarat & Ketentuan</a> kami
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.initializeLogic();
    }

    initializeLogic() {
        const modal = this.querySelector('#loginModal');
        const closeBtn = this.querySelector('#closeModalBtn');
        const googleBtn = this.querySelector('#googleLoginModalBtn');
        const container = this.querySelector('div.bg-white');

        if (!modal) return;

        window.openLoginModal = () => {
            modal.classList.remove('hidden');
            requestAnimationFrame(() => {
                modal.style.opacity = '1';
                modal.style.pointerEvents = 'auto';
                if (container) container.style.transform = 'scale(1)';
            });
        };

        const closeModal = () => {
            modal.style.opacity = '0';
            modal.style.pointerEvents = 'none';
            if (container) container.style.transform = 'scale(0.95)';
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        };

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        if (googleBtn) {
            googleBtn.addEventListener('click', async () => {
                const supabase = window.supabase || window.supabaseClient;
                if (!supabase) {
                    alert('Sistem login sedang memuat...');
                    return;
                }
                const { error } = await supabase.auth.signInWithOAuth({
                    provider: 'google',
                    options: { redirectTo: window.location.href }
                });
                if (error) alert(error.message);
            });
        }

        document.addEventListener('click', (e) => {
            const btn = e.target.closest('#openLoginModalBtn, .openLoginModalBtn, #mobileOpenLoginModalBtn');
            if (btn) {
                e.preventDefault();
                window.openLoginModal();
            }
        });
    }
}

class AppHeader extends HTMLElement {
    connectedCallback() {
        if (!document.querySelector('app-auth-modal')) {
            const authModal = document.createElement('app-auth-modal');
            document.body.appendChild(authModal);
        }

        this.innerHTML = `
        <style>
            @media (min-width: 768px) {
                #mobile-login-container { display: none !important; }
                #main-desktop-header { display: block !important; }
                #desktop-nav-menu { display: flex !important; }
            }
            @media (max-width: 767px) {
                #main-desktop-header { display: none !important; }
                #mobile-login-container { display: block !important; }
            }
        </style>

        <!-- Mobile Top Button -->
        <div id="mobile-login-container" class="fixed top-4 right-4 z-50 md:hidden">
            <button type="button" id="mobileOpenLoginModalBtn"
              class="flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md hover:bg-blue-700 transition-all">
              <span>Login</span>
            </button>
        </div>

        <header id="main-desktop-header" class="hidden md:block glass sticky top-0 z-40 transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-20">
                    <div class="flex-shrink-0">
                        <a href="index.html" class="flex items-center space-x-3">
                            <img loading="lazy" src="assets/FaviconNew.webp" alt="MindTest.id Logo" class="h-12 w-auto align-bottom" width="48" height="48">
                            <span class="text-3xl font-extrabold text-primary">MindTest.id</span>
                        </a>
                    </div>
                    <div id="desktop-nav-menu" class="hidden md:flex items-center space-x-2">
                        <a href="index.html" id="nav-home" class="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition-colors px-4 py-2 rounded-lg hover:bg-indigo-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-6 w-6" fill="currentColor"><path d="M256,319.841c-35.346,0-64,28.654-64,64v128h128v-128C320,348.495,291.346,319.841,256,319.841z" /><path d="M362.667,383.841v128H448c35.346,0,64-28.654,64-64V253.26c0.005-11.083-4.302-21.733-12.011-29.696l-181.29-195.99 c-31.988-34.61-85.976-36.735-120.586-4.747c-1.644,1.52-3.228,3.103-4.747,4.747L12.395,223.5 C4.453,231.496-0.003,242.31,0,253.58v194.261c0,35.346,28.654,64,64,64h85.333v-128c0.399-58.172,47.366-105.676,104.073-107.044 C312.01,275.383,362.22,323.696,362.667,383.841z" /></svg>
                            <span>Beranda</span>
                        </a>
                        <a href="leaderboard.html" id="nav-leaderboard" class="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition-colors px-4 py-2 rounded-lg hover:bg-indigo-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor">
              <path
                d="m17.829,7.762c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113Zm-8,3c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113ZM1.829,13.762c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113Zm19.671-3.762h-2c-1.381,0-2.5,1.119-2.5,2.5v9c0,1.381,1.119,2.5,2.5,2.5h2c1.381,0,2.5-1.119,2.5-2.5v-9c0-1.381-1.119-2.5-2.5-2.5Zm-17.5,6h-1.5c-1.381,0-2.5,1.119-2.5,2.5v3c0,1.381,1.119,2.5,2.5,2.5h1.5c1.381,0,2.5-1.119,2.5-2.5v-3c0-1.381-1.119-2.5-2.5-2.5Zm8.5-3h-1.5c-1.381,0-2.5,1.119-2.5,2.5v6c0,1.381,1.119,2.5,2.5,2.5h1.5c1.381,0,2.5-1.119,2.5-2.5v-6c0-1.381-1.119-2.5-2.5-2.5Z" />
            </svg>
                            <span>Peringkat</span>
                        </a>
                        <a href="daftar_tes.html" id="nav-daftar" class="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition-colors px-4 py-2 rounded-lg hover:bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor">
        <path
          d="m15.5,0h-7c-1.933,0-3.5,1.567-3.5,3.5v5c0,1.933,1.567,3.5,3.5,3.5h.654l1.835,1.617c.289.256.652.383,1.014.383.359,0,.716-.125,1-.375l1.878-1.625h.619c1.933,0,3.5-1.567,3.5-3.5V3.5c0-1.933-1.567-3.5-3.5-3.5Zm-.266,5.68l-2.531,2.734c-.392.387-.896.578-1.395.578-.485,0-.964-.182-1.331-.54l-1.202-1.263c-.381-.4-.365-1.033.036-1.414.4-.382,1.034-.363,1.414.035l1.096,1.153,2.445-2.644c.375-.406,1.007-.431,1.413-.054.405.375.43,1.008.055,1.413Zm-9.074,11.737l.732,2.139h-1.784l.725-2.121c.023-.047.112-.102.167-.102.057,0,.142.047.16.083Zm4.84,1.584c0,2.761-2.239,5-5,5s-5-2.239-5-5,2.239-5,5-5,5,2.239,5,5Zm-2.444,2.061l-1.362-4.055c-.286-.647-.685-.784-1.194-.784-.509,0-.909.137-1.202.804l-1.354,4.034c-.118.352.144.717.516.717h0c.233,0,.439-.148.515-.368l.254-.743h2.544l.254.743c.075.22.282.368.514.368h0c.372,0,.634-.365.515-.717Zm11.108-.893c-.029.288-.287.499-.577.499-.4,0-1.134,0-1.643,0-.307,0-.555-.249-.555-.556v-.556h2.222c.325,0,.586.281.553.612Zm-.556-2.335c-.029-.288-.288-.499-.578-.499h-1.086c-.307,0-.556.249-.556.556v.556h1.667c.325,0,.586-.281.553-.612Zm3.892,1.167c0,2.761-2.239,5-5,5s-5-2.239-5-5,2.239-5,5-5,5,2.239,5,5Zm-2.228,1.248c.052-.645-.267-1.222-.765-1.541.144-.254.222-.549.214-.863-.024-.911-.801-1.622-1.713-1.622h-.848c-1.088,0-1.883.796-1.883,1.778v2c0,.982.796,1.778,1.778,1.778h1.512c.876,0,1.635-.657,1.705-1.53Z" />
      </svg>
                            <span>Daftar Tes</span>
                        </a>
                        <a href="playground_ifp.html" id="nav-playground" class="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition-colors px-4 py-2 rounded-lg hover:bg-indigo-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor"><path d="M21,6H3C1.9,6,1,6.9,1,8v8c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V8C23,6.9,22.1,6,21,6z M11,13H8v3H6v-3H3v-2h3V8h2v3h3V13z M17,13 c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C18.5,12.33,17.83,13,17,13z M19.5,10c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C21,9.33,20.33,10,19.5,10z" /></svg>
                            <span>Playground</span>
                        </a>
                        <a href="dashboard.html" id="desktop-nav-hasil" class="hidden flex flex-col items-center text-gray-400 hover:text-indigo-500 transition-colors px-4 py-2 rounded-lg hover:bg-indigo-50">
                            <span class="material-icons">assignment_turned_in</span>
                            <span>Dashboard</span>
                        </a>
                        <a href="Tentang-Kami.html" id="nav-about" class="flex flex-col items-center text-gray-400 hover:text-indigo-500 transition-colors px-4 py-2 rounded-lg hover:bg-indigo-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor">
              <path
                d="m15,24c0,.009,0,.017,0,.026h-6.001c0-.009,0-.017,0-.026,0-1.654,1.346-3,3-3s3,1.346,3,3Zm-.077-15.974h6.54c-.347-.913-.88-1.753-1.591-2.464l-3.484-3.486c-.712-.711-1.552-1.244-2.465-1.59v6.54c0,.551.448,1,1,1Zm7,2.485v8.515c0,2.731-2.202,4.958-4.924,4.999,0-.008,0-.016,0-.025,0-2.757-2.243-5-5-5s-5,2.243-5,5c0,.009,0,.017,0,.026h-.078c-2.757,0-5-2.243-5-5V5.026C1.923,2.269,4.166.026,6.923.026h4.515c.163,0,.324.013.485.024v6.976c0,1.654,1.346,3,3,3h6.976c.011.161.024.322.024.485Zm-6.423,3.989c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5,1.57,3.5,3.5,3.5-1.57,3.5-3.5Zm-3.5-1.5c-.827,0-1.5.673-1.5,1.5s.673,1.5,1.5,1.5,1.5-.673,1.5-1.5-.673-1.5-1.5-1.5Z" />
            </svg>
                            <span>Tentang Kami</span>
                        </a>
                        <div id="login-container">
                            <button type="button" id="openLoginModalBtn" class="ml-3 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H3m12 0l-4-4m4 4l-4 4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Login</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        `;

        this.highlightActive();
        this.initializeAuth();
    }

    highlightActive() {
        const path = window.location.pathname;
        let cleanPath = path;

        if (cleanPath.endsWith('/') && cleanPath.length > 1) {
            cleanPath = cleanPath.slice(0, -1);
        }

        let page = cleanPath.split('/').pop();

        if (!page || page === '') {
            page = 'index.html';
        }

        if (!page.includes('.')) {
            page += '.html';
        }

        if (page === 'index_supabase.html') {
            page = 'index.html';
        }

        const map = {
            'index.html': 'nav-home',
            'leaderboard.html': 'nav-leaderboard',
            'daftar_tes.html': 'nav-daftar',
            'english_test.html': 'nav-daftar', // Map English test to Daftar Tes
            'quizz.html': 'nav-daftar', // Map Quizz to Daftar Tes by default or maybe its own? Usually under Daftar Tes context.
            'playground_ifp.html': 'nav-playground',
            'balap_karung.html': 'nav-playground',
            'panjat_pinang.html': 'nav-playground',
            'tarik_tambang.html': 'nav-playground',
            'math_fighter.html': 'nav-playground',
            'congklak.html': 'nav-playground',
            'teka_teki_silang.html': 'nav-playground',
            'dashboard.html': 'desktop-nav-hasil',
            'dashboardIQ.html': 'desktop-nav-hasil',
            'Tentang-Kami.html': 'nav-about',
            'Hubungi-Kami.html': 'nav-about',
            'Syarat&Ketentuan.html': 'nav-about',
            'Kebijakan-Privasi.html': 'nav-about'
        };

        // Also handle matching if page starts with certain prefix if strictly needed, but exact map is safer for now.

        const activeId = map[page];
        if (activeId) {
            const el = this.querySelector(`#${activeId}`);
            if (el) {
                el.classList.remove('text-gray-400', 'hover:bg-indigo-50', 'hover:text-indigo-500');
                el.classList.add('text-indigo-600', 'font-semibold', 'bg-indigo-50', 'rounded-2xl');
            }
        }
    }

    initializeAuth() {
        // Wait for Supabase CLIENT to be available
        const checkSupabase = setInterval(() => {
            if (window.supabaseClient) {
                clearInterval(checkSupabase);
                this.setupAuthListener(window.supabaseClient);
            } else if (window.supabase && !window.supabaseClient) {
                // Should be handled by supabase-init.js, but we wait.
                // console.log("Waiting for supabaseClient...");
            }
        }, 100);

        // Timeout after 5 seconds to avoid infinite loop
        setTimeout(() => clearInterval(checkSupabase), 5000);
    }

    setupAuthListener(supabase) {
        // Initial Check
        supabase.auth.getSession().then(({ data: { session } }) => {
            this.updateUserUI(session?.user);
        });

        // Listener
        supabase.auth.onAuthStateChange((event, session) => {
            this.updateUserUI(session?.user);
        });

        // Global Logout Function
        window.handleLogout = async () => {
            await supabase.auth.signOut();
            window.location.reload();
        };
    }

    async updateUserUI(user) {
        const container = this.querySelector('#login-container');
        const mobileContainer = this.querySelector('#mobile-login-container');
        const desktopHasil = this.querySelector('#desktop-nav-hasil');
        const mobileHasil = document.querySelector('#mobile-nav-hasil');

        // If user logged in, hide modal if open
        if (user) {
            const modal = document.getElementById('loginModal');
            if (modal) modal.classList.add('hidden');
        }

        if (user) {
            const fullName = user.user_metadata.full_name || user.user_metadata.name || 'User';
            const firstName = fullName.split(' ')[0];
            const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=random&color=fff&size=150`;
            const avatarUrl = user.user_metadata.avatar_url || user.user_metadata.picture || fallbackAvatar;

            // Check Premium Status
            let isPremium = false;
            const supabase = window.supabaseClient || window.supabase;
            if (supabase) {
                try {
                    const { data } = await supabase.from('profiles').select('is_premium').eq('id', user.id).single();
                    if (data && data.is_premium) isPremium = true;
                } catch (err) {
                    console.error("Error checking premium status:", err);
                }
            }

            const avatarBorderClass = isPremium ? 'border-2 border-yellow-400 ring-2 ring-yellow-400/30' : 'border border-gray-300';
            const premiumBadge = isPremium ? '<div class="flex items-center gap-0.5 mt-0.5"><span class="material-icons text-yellow-500" style="font-size: 10px;">verified</span><span class="text-yellow-600 font-bold leading-none" style="font-size: 10px;">Premium</span></div>' : '';

            const html = `
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
                        ${premiumBadge}
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

            if (container) container.innerHTML = html;
            if (mobileContainer) mobileContainer.innerHTML = mobileHtml;
            if (desktopHasil) desktopHasil.classList.remove('hidden');
            if (mobileHasil) mobileHasil.classList.remove('hidden');

        } else {
            // Logged Out State
            const loginBtnHtml = `
                <button type="button" id="openLoginModalBtn" class="ml-3 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H3m12 0l-4-4m4 4l-4 4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Login</span>
                </button>
            `;
            const mobileBtnHtml = `
                <button type="button" id="mobileOpenLoginModalBtn" class="flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md hover:bg-red-500 transition-all">
                  <span>Login</span>
                </button>
            `;

            if (container) container.innerHTML = loginBtnHtml;
            if (mobileContainer) mobileContainer.innerHTML = mobileBtnHtml;
            if (desktopHasil) desktopHasil.classList.add('hidden');
            if (mobileHasil) mobileHasil.classList.add('hidden');
        }
    }
}

class AppMobileNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <style>
        @media (min-width: 768px) {
            #mobile-bottom-nav, .dashboard-nav-hidden { display: none !important; }
        }
    </style>
    <div class="md:hidden h-16 dashboard-nav-hidden"></div>
    <div id="mobile-bottom-nav" class="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-white/50 z-50 md:hidden flex justify-around items-center h-20 pb-2 transition-transform duration-300 translate-y-0 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <a href="index.html" id="mob-home" class="flex flex-col items-center justify-center w-16 h-16 text-gray-400 hover:text-indigo-500 transition-all rounded-2xl" aria-label="Beranda">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-6 w-6" fill="currentColor">
                <path d="M256,319.841c-35.346,0-64,28.654-64,64v128h128v-128C320,348.495,291.346,319.841,256,319.841z" />
                <path d="M362.667,383.841v128H448c35.346,0,64-28.654,64-64V253.26c0.005-11.083-4.302-21.733-12.011-29.696l-181.29-195.99 c-31.988-34.61-85.976-36.735-120.586-4.747c-1.644,1.52-3.228,3.103-4.747,4.747L12.395,223.5 C4.453,231.496-0.003,242.31,0,253.58v194.261c0,35.346,28.654,64,64,64h85.333v-128c0.399-58.172,47.366-105.676,104.073-107.044 C312.01,275.383,362.22,323.696,362.667,383.841z" />
            </svg>
            <span class="text-[10px] font-medium mt-1">Beranda</span>
        </a>
        <a href="leaderboard.html" id="mob-leaderboard" class="flex flex-col items-center justify-center w-16 h-16 text-gray-400 hover:text-indigo-500 transition-all rounded-2xl" aria-label="Peringkat">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="m17.829,7.762c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113Zm-8,3c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113ZM1.829,13.762c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113Zm19.671-3.762h-2c-1.381,0-2.5,1.119-2.5,2.5v9c0,1.381,1.119,2.5,2.5,2.5h2c1.381,0,2.5-1.119,2.5-2.5v-9c0-1.381-1.119-2.5-2.5-2.5Zm-17.5,6h-1.5c-1.381,0-2.5,1.119-2.5,2.5v3c0,1.381,1.119,2.5,2.5,2.5h1.5c1.381,0,2.5-1.119,2.5-2.5v-3c0-1.381-1.119-2.5-2.5-2.5Zm8.5-3h-1.5c-1.381,0-2.5,1.119-2.5,2.5v6c0,1.381,1.119,2.5,2.5,2.5h1.5c1.381,0,2.5-1.119,2.5-2.5v-6c0-1.381-1.119-2.5-2.5-2.5Z" />
            </svg>
            <span class="text-[10px] font-medium mt-1">Peringkat</span>
        </a>
        <a href="daftar_tes.html" id="mob-tes" class="flex flex-col items-center justify-center w-16 h-16 text-gray-400 hover:text-indigo-500 transition-all rounded-2xl" aria-label="Tes">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor">
            <path d="m15.5,0h-7c-1.933,0-3.5,1.567-3.5,3.5v5c0,1.933,1.567,3.5,3.5,3.5h.654l1.835,1.617c.289.256.652.383,1.014.383.359,0,.716-.125,1-.375l1.878-1.625h.619c1.933,0,3.5-1.567,3.5-3.5V3.5c0-1.933-1.567-3.5-3.5-3.5Zm-.266,5.68l-2.531,2.734c-.392.387-.896.578-1.395.578-.485,0-.964-.182-1.331-.54l-1.202-1.263c-.381-.4-.365-1.033.036-1.414.4-.382,1.034-.363,1.414.035l1.096,1.153,2.445-2.644c.375-.406,1.007-.431,1.413-.054.405.375.43,1.008.055,1.413Zm-9.074,11.737l.732,2.139h-1.784l.725-2.121c.023-.047.112-.102.167-.102.057,0,.142.047.16.083Zm4.84,1.584c0,2.761-2.239,5-5,5s-5-2.239-5-5,2.239-5,5-5,5,2.239,5,5Zm-2.444,2.061l-1.362-4.055c-.286-.647-.685-.784-1.194-.784-.509,0-.909.137-1.202.804l-1.354,4.034c-.118.352.144.717.516.717h0c.233,0,.439-.148.515-.368l.254-.743h2.544l.254.743c.075.22.282.368.514.368h0c.372,0,.634-.365.515-.717Zm11.108-.893c-.029.288-.287.499-.577.499-.4,0-1.134,0-1.643,0-.307,0-.555-.249-.555-.556v-.556h2.222c.325,0,.586.281.553.612Zm-.556-2.335c-.029-.288-.288-.499-.578-.499h-1.086c-.307,0-.556.249-.556.556v.556h1.667c.325,0,.586-.281.553-.612Zm3.892,1.167c0,2.761-2.239,5-5,5s-5-2.239-5-5,2.239-5,5-5,5,2.239,5,5Zm-2.228,1.248c.052-.645-.267-1.222-.765-1.541.144-.254.222-.549.214-.863-.024-.911-.801-1.622-1.713-1.622h-.848c-1.088,0-1.883.796-1.883,1.778v2c0,.982.796,1.778,1.778,1.778h1.512c.876,0,1.635-.657,1.705-1.53Z" />
      </svg>
            <span class="text-[10px] font-medium mt-1">Daftar Tes</span>
        </a>
        <a href="playground_ifp.html" id="mob-playground" class="flex flex-col items-center justify-center w-16 h-16 text-gray-400 hover:text-indigo-500 transition-all rounded-2xl" aria-label="Playground">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor">
                <path d="M21,6H3C1.9,6,1,6.9,1,8v8c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V8C23,6.9,22.1,6,21,6z M11,13H8v3H6v-3H3v-2h3V8h2v3h3V13z M17,13 c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C18.5,12.33,17.83,13,17,13z M19.5,10c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C21,9.33,20.33,10,19.5,10z" />
            </svg>
            <span class="text-[10px] font-medium mt-1">Playground</span>
        </a>
         <a href="dashboard.html" id="mobile-nav-hasil" class="hidden flex flex-col items-center justify-center w-16 h-16 text-gray-400 hover:text-indigo-500 transition-all rounded-2xl" aria-label="Hasil Tes">
            <span class="material-icons">assignment_turned_in</span>
            <span class="text-[10px] font-medium mt-1">Hasil</span>
        </a>
        <a href="Tentang-Kami.html" id="mob-about" class="flex flex-col items-center justify-center w-16 h-16 text-gray-400 hover:text-indigo-500 transition-all rounded-2xl" aria-label="Tentang">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="m15,24c0,.009,0,.017,0,.026h-6.001c0-.009,0-.017,0-.026,0-1.654,1.346-3,3-3s3,1.346,3,3Zm-.077-15.974h6.54c-.347-.913-.88-1.753-1.591-2.464l-3.484-3.486c-.712-.711-1.552-1.244-2.465-1.59v6.54c0,.551.448,1,1,1Zm7,2.485v8.515c0,2.731-2.202,4.958-4.924,4.999,0-.008,0-.016,0-.025,0-2.757-2.243-5-5-5s-5,2.243-5,5c0,.009,0,.017,0,.026h-.078c-2.757,0-5-2.243-5-5V5.026C1.923,2.269,4.166.026,6.923.026h4.515c.163,0,.324.013.485.024v6.976c0,1.654,1.346,3,3,3h6.976c.011.161.024.322.024.485Zm-6.423,3.989c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5,1.57,3.5,3.5,3.5-1.57,3.5-3.5Zm-3.5-1.5c-.827,0-1.5.673-1.5,1.5s.673,1.5,1.5,1.5,1.5-.673,1.5-1.5-.673-1.5-1.5-1.5Z" />
      </svg>
            <span class="text-[10px] font-medium mt-1">Tentang</span>
        </a>
    </div>
    `;
        this.highlightActive();
    }

    highlightActive() {
        const path = window.location.pathname;
        let cleanPath = path;

        if (cleanPath.endsWith('/') && cleanPath.length > 1) {
            cleanPath = cleanPath.slice(0, -1);
        }

        let page = cleanPath.split('/').pop();

        if (!page || page === '') {
            page = 'index.html';
        }

        if (!page.includes('.')) {
            page += '.html';
        }

        if (page === 'index_supabase.html') {
            page = 'index.html';
        }

        const map = {
            'index.html': 'mob-home',
            'leaderboard.html': 'mob-leaderboard',
            'daftar_tes.html': 'mob-tes',
            'english_test.html': 'mob-tes',
            'quizz.html': 'mob-tes',
            'playground_ifp.html': 'mob-playground',
            'balap_karung.html': 'mob-playground',
            'panjat_pinang.html': 'mob-playground',
            'tarik_tambang.html': 'mob-playground',
            'math_fighter.html': 'mob-playground',
            'congklak.html': 'mob-playground',
            'teka_teki_silang.html': 'mob-playground',
            'dashboard.html': 'mobile-nav-hasil',
            'dashboardIQ.html': 'mobile-nav-hasil',
            'Tentang-Kami.html': 'mob-about',
            'Hubungi-Kami.html': 'mob-about',
            'Syarat&Ketentuan.html': 'mob-about',
            'Kebijakan-Privasi.html': 'mob-about'
        };
        const activeId = map[page];
        if (activeId) {
            const el = this.querySelector(`#${activeId}`);
            if (el) {
                el.classList.remove('text-gray-500');
                el.classList.add('text-indigo-600', 'bg-indigo-50', 'rounded-2xl');
            }
        }
    }
}

class AppFooter extends HTMLElement {
    connectedCallback() {
        // Ensure Material Icons Round is loaded for the footer icons
        if (!document.querySelector('link[href*="Material+Icons+Round"]')) {
            const link = document.createElement('link');
            link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons+Round';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }

        this.innerHTML = `
<footer class="bg-[#0b132b] text-gray-300 py-12 relative z-30 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div class="col-span-1">
        <a href="index.html" class="flex items-center space-x-3 mb-5">
          <img src="assets/FaviconNew.webp" alt="MindTest.id Logo" class="h-10 w-auto">
          <span class="text-xl font-extrabold text-white tracking-tight">MindTest.id</span>
        </a>
        <p class="text-sm text-slate-400 leading-relaxed mb-4">Platform tes psikologi &amp; kecerdasan terpercaya berbasis
          teknologi modern untuk pengembangan diri</p>

        <div class="mb-5">
          <h5 class="text-xs font-bold text-white uppercase tracking-wider mb-3">Terdaftar &amp; Berizin Resmi</h5>
          <div class="flex flex-col gap-3">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-900/30 border border-green-500/30 text-green-400 text-xs font-mono w-fit shadow-[0_0_10px_rgba(74,222,128,0.1)]">
              <span class="material-icons-round text-[16px]">verified</span>
              <span>NIB: 1012250017519</span>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed max-w-xs">
              <span class="font-semibold text-slate-300">KBLI 63122</span> – Portal Web Dan/Atau Platform Digital Dengan
              Tujuan Komersial
            </p>
          </div>
        </div>
        <div class="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-semibold text-blue-200">
          <span class="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse"></span>
          Operasional 24/7
        </div>
      </div>

      <div>
        <h4 class="font-bold text-white mb-5 text-sm uppercase tracking-wider">Menu &amp; Legal</h4>
        <ul class="space-y-3 text-sm text-slate-400">
          <li><a href="#" class="hover:text-[#00c4ff] transition-colors flex items-center"><span class="w-1 h-1 bg-slate-600 rounded-full mr-2"></span>Dukungan 24/7</a></li>
          <li><a href="Kebijakan-Privasi.html" class="hover:text-[#00c4ff] transition-colors flex items-center"><span class="w-1 h-1 bg-slate-600 rounded-full mr-2"></span>Kebijakan Privasi</a></li>
          <li><a href="artikel.html" class="hover:text-[#00c4ff] transition-colors flex items-center"><span class="w-1 h-1 bg-slate-600 rounded-full mr-2"></span>Artikel &amp; Blog</a></li>
          <li><a href="Syarat&Ketentuan.html" class="hover:text-[#00c4ff] transition-colors flex items-center"><span class="w-1 h-1 bg-slate-600 rounded-full mr-2"></span>Syarat &amp; Ketentuan</a></li>
          <li><a href="Tentang-Kami.html" class="hover:text-[#00c4ff] transition-colors flex items-center"><span class="w-1 h-1 bg-slate-600 rounded-full mr-2"></span>Tentang Kami</a></li>
        </ul>
      </div>

      <div class="md:col-span-2">
        <h4 class="font-bold text-white mb-5 text-sm uppercase tracking-wider">Hubungi Kami</h4>
        <ul class="space-y-4 text-sm text-slate-400">
          <li class="flex items-start gap-3 group">
            <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#00c4ff]/10 transition-colors flex-shrink-0 mt-1">
              <span class="material-icons-round text-[#00c4ff] text-sm">location_on</span>
            </div>
            <span class="leading-relaxed group-hover:text-slate-300 transition-colors">
              <strong class="block text-white font-semibold mb-1">PT ARSLAN INOVASI INDONESIA</strong>
              Bantul, Yogyakarta 55781
            </span>
          </li>

          <li class="flex items-center gap-3 group">
            <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#00c4ff]/10 transition-colors flex-shrink-0">
              <span class="material-icons-round text-[#00c4ff] text-sm">phone</span>
            </div>
            <a href="https://wa.me/6289526469982?text=Halo%20admin%20MindTest.id" target="_blank" class="font-medium tracking-wide group-hover:text-slate-300 transition-colors hover:text-[#00c4ff]">089526469982
              (Admin)</a>
          </li>

          <li class="flex items-center gap-3 group">
            <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#00c4ff]/10 transition-colors flex-shrink-0">
              <span class="material-icons-round text-[#00c4ff] text-sm">email</span>
            </div>
            <a href="mailto:support@mindtest.id" class="font-medium tracking-wide group-hover:text-[#00c4ff] hover:underline transition-colors">support@mindtest.id</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10 mt-12 pt-8 mx-4">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>© 2024-2025 <span class="text-slate-300 font-medium">MindTest.id</span>. All rights reserved.</p>
        <div class="mt-2 md:mt-0">Made with <span class="text-red-500">♥</span> in Yogyakarta</div>
      </div>
    </div>
  </footer>
        `;
    }
}

class AppSidebar extends HTMLElement {
    connectedCallback() {
        if (!document.querySelector('app-auth-modal')) {
            const authModal = document.createElement('app-auth-modal');
            document.body.appendChild(authModal);
        }

        this.innerHTML = `
        <style>
            .sidebar-transition { transition: width 0.3s ease, margin 0.3s ease; }
            .content-transition { transition: margin-left 0.3s ease; }
            .hide-on-mini { transition: opacity 0.2s; white-space: nowrap; overflow: hidden; }
            body.mini-sidebar .hide-on-mini { opacity: 0; width: 0; display: none; }
            body.mini-sidebar .sidebar-item { justify-content: center; padding-left: 0; padding-right: 0; }
            body.mini-sidebar .sidebar-tooltip { display: block !important; }
            body.mini-sidebar .menu-header { display: none; }
            body.mini-sidebar #logo-area { padding-left: 0; padding-right: 0; justify-content: center; }
            body.mini-sidebar #sidebar-toggle { position: absolute; right: -12px; top: 32px; z-index: 50; background: white; border: 1px solid #e2e8f0; width: 24px; height: 24px; padding: 0; border-radius: 50%; display: flex !important; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
            body.mini-sidebar #sidebar-toggle span { font-size: 16px; }
            .dark body.mini-sidebar #sidebar-toggle, body.dark.mini-sidebar #sidebar-toggle { background: #1e293b; border-color: #334155; color: #94a3b8; }
        </style>

        <!-- Mobile Hamburger Toggle (Fixed at top) -->
        <div class="md:hidden fixed top-4 left-4 z-50">
            <button id="mobile-sidebar-open" class="p-2.5 bg-white/90 dark:bg-black/90 backdrop-blur-lg rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                <span class="material-icons-round">menu</span>
            </button>
        </div>

        <!-- Mobile Backdrop Overlay -->
        <div id="sidebar-backdrop" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 opacity-0 pointer-events-none transition-opacity duration-300 md:hidden"></div>

        <!-- Sidebar Panel -->
        <aside id="sidebar-panel" class="fixed left-0 top-0 h-screen z-40 bg-white dark:bg-black border-r border-slate-200 dark:border-slate-900 sidebar-transition w-64 md:translate-x-0 -translate-x-full flex flex-col">
            <!-- Logo Area -->
            <div id="logo-area" class="h-24 flex items-center gap-3 px-6 shrink-0 relative">
                <a href="index.html" class="flex items-center gap-3">
                     <img src="assets/FaviconNew.webp" alt="MindTest" class="h-10 w-10 flex-shrink-0">
                     <div class="flex flex-col hide-on-mini" style="gap: 0;">
                         <span class="text-xl font-extrabold text-slate-800 dark:text-white tracking-tight leading-none">MindTest</span>
                         <span style="font-size: 8px; font-weight: 800; color: #4169E1; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 2px;">Full Analytic Report</span>
                     </div>
                </a>
                <button id="sidebar-toggle" class="hidden md:flex ml-auto p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors">
                    <span class="material-icons-round">chevron_left</span>
                </button>
                <button id="mobile-sidebar-close" class="md:hidden ml-auto p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors">
                    <span class="material-icons-round">close</span>
                </button>
            </div>

            <!-- Nav Links -->
            <nav class="flex-1 overflow-y-auto px-4 space-y-1 custom-scrollbar">
                
                <!-- MENU UTAMA -->
                <div class="mb-2 mt-2">
                    <p class="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 mt-4 menu-header">Menu Utama</p>
                    
                    <a href="index.html" id="side-home" class="sidebar-item flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 dark:text-slate-400 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group relative">
                        <span class="material-icons-round text-slate-400 transition-colors group-hover:text-slate-600">home</span>
                        <span class="hide-on-mini">Beranda</span>
                    </a>
                    
                    <a href="dashboard.html" id="side-dashboard" class="sidebar-item flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 dark:text-slate-400 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group relative">
                        <span class="material-icons-round text-slate-400 transition-colors group-hover:text-slate-600">grid_view</span>
                        <span class="hide-on-mini">Dashboard</span>
                    </a>

                    <a href="leaderboard.html" id="side-leaderboard" class="sidebar-item flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 dark:text-slate-400 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group relative">
                        <span class="material-icons-round text-slate-400 transition-colors group-hover:text-slate-600">bar_chart</span>
                        <span class="hide-on-mini">Peringkat</span>
                    </a>
                </div>

                <!-- TES & LAPORAN -->
                <div class="mb-2">
                    <p class="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 mt-6 menu-header">Tes & Laporan</p>

                    <a href="daftar_tes.html" id="side-tes" class="sidebar-item flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 dark:text-slate-400 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group relative">
                        <span class="material-icons-round text-slate-400 transition-colors group-hover:text-slate-600">assignment</span>
                        <span class="hide-on-mini">Daftar Tes</span>
                    </a>

                    <a href="#" class="sidebar-item flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-400 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group relative opacity-70 cursor-not-allowed">
                        <span class="material-icons-round text-slate-400">folder_shared</span>
                        <span class="hide-on-mini">Arsip Laporan</span>
                    </a>
                </div>
            </nav>

            <!-- User Profile (Bottom) -->
            <div id="sidebar-user-profile" class="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                <!-- Injected via JS -->
                 <div class="h-12 animate-pulse bg-slate-100 dark:bg-slate-800 rounded-xl"></div>
            </div>
        </aside>
        `;

        this.highlightActive();
        this.initializeAuth();
        this.setupToggle();
    }

    setupToggle() {
        const openBtn = this.querySelector('#mobile-sidebar-open');
        const closeBtn = this.querySelector('#mobile-sidebar-close');
        const backdrop = this.querySelector('#sidebar-backdrop');
        const sidebar = this.querySelector('#sidebar-panel');
        const miniToggle = this.querySelector('#sidebar-toggle');

        const toggleMobile = (show) => {
            if (show) {
                sidebar.classList.remove('-translate-x-full');
                backdrop.classList.remove('opacity-0', 'pointer-events-none');
                backdrop.classList.add('opacity-100', 'pointer-events-auto');
            } else {
                sidebar.classList.add('-translate-x-full');
                backdrop.classList.add('opacity-0', 'pointer-events-none');
                backdrop.classList.remove('opacity-100', 'pointer-events-auto');
            }
        };

        if (openBtn) openBtn.addEventListener('click', () => toggleMobile(true));
        if (closeBtn) closeBtn.addEventListener('click', () => toggleMobile(false));
        if (backdrop) backdrop.addEventListener('click', () => toggleMobile(false));

        // Desktop Mini Toggle
        const isMini = localStorage.getItem('sidebar-mini') === 'true';
        if (isMini) this.setMini(true);

        if (miniToggle) {
            miniToggle.addEventListener('click', () => {
                const isCollapsing = !document.body.classList.contains('mini-sidebar');
                this.setMini(isCollapsing);
            });
        }
    }

    setMini(isMini) {
        const sidebar = this.querySelector('#sidebar-panel');
        const icon = this.querySelector('#sidebar-toggle span');
        const main = document.querySelector('main');

        if (isMini) {
            document.body.classList.add('mini-sidebar');
            sidebar.classList.remove('w-64');
            sidebar.classList.add('w-20');
            icon.textContent = 'chevron_right';
            if (main) {
                main.classList.remove('md:ml-64');
                main.classList.add('md:ml-20');
            }
            localStorage.setItem('sidebar-mini', 'true');
        } else {
            document.body.classList.remove('mini-sidebar');
            sidebar.classList.add('w-64');
            sidebar.classList.remove('w-20');
            icon.textContent = 'chevron_left';
            if (main) {
                main.classList.add('md:ml-64');
                main.classList.remove('md:ml-20');
            }
            localStorage.setItem('sidebar-mini', 'false');
        }
    }

    highlightActive() {
        const path = window.location.pathname;
        let cleanPath = path;

        if (cleanPath.endsWith('/') && cleanPath.length > 1) {
            cleanPath = cleanPath.slice(0, -1);
        }

        let page = cleanPath.split('/').pop();

        if (!page || page === '') {
            page = 'index.html';
        }

        if (!page.includes('.')) {
            page += '.html';
        }

        if (page === 'index_supabase.html') {
            page = 'index.html';
        }

        const map = {
            'index.html': 'side-home',
            'dashboard.html': 'side-dashboard',
            'dashboardIQ.html': 'side-dashboard',
            'leaderboard.html': 'side-leaderboard',
            'daftar_tes.html': 'side-tes',
            'english_test.html': 'side-tes',
            'quizz.html': 'side-tes',
            // Add other tests if they are supposed to highlight "Daftar Tes"
        };

        const targetId = map[page];
        if (targetId) {
            const el = this.querySelector(`#${targetId}`);
            if (el) {
                // Remove inactive classes
                el.classList.remove('text-slate-500', 'hover:bg-slate-50');

                // Add active classes (Light Rose Background + Red Text + Bold)
                el.classList.add('bg-indigo-50', 'text-indigo-600', 'font-bold');

                // Icon Color
                const icon = el.querySelector('.material-icons-round');
                if (icon) {
                    icon.classList.remove('text-slate-400');
                    icon.classList.add('text-indigo-600');
                }
            }
        }
    }

    initializeAuth() {
        const checkSupabase = setInterval(() => {
            if (window.supabaseClient) {
                clearInterval(checkSupabase);
                this.setupAuthListener(window.supabaseClient);
            }
        }, 100);
        setTimeout(() => clearInterval(checkSupabase), 5000);
    }

    setupAuthListener(supabase) {
        supabase.auth.getSession().then(({ data: { session } }) => {
            this.updateUserUI(session?.user);
        });
        supabase.auth.onAuthStateChange((event, session) => {
            this.updateUserUI(session?.user);
        });

        // Global Logout Function (Ensure it exists if Header is missing)
        if (!window.handleLogout) {
            window.handleLogout = async () => {
                await supabase.auth.signOut();
                window.location.reload();
            };
        }
    }

    async updateUserUI(user) {
        const container = this.querySelector('#sidebar-user-profile');
        if (!container) return;

        if (user) {
            const fullName = user.user_metadata.full_name || 'User';
            const avatarUrl = user.user_metadata.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=random`;

            // Check Premium
            let isPremium = false;
            try {
                const { data } = await window.supabaseClient.from('profiles').select('is_premium').eq('id', user.id).single();
                if (data && data.is_premium) isPremium = true;
            } catch (e) { }

            const badge = isPremium ?
                `<span class="ml-auto text-[10px] font-bold px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full border border-yellow-200 hide-on-mini">PRO</span>` :
                `<span class="ml-auto text-[10px] font-bold px-2 py-0.5 bg-slate-200 text-slate-500 rounded-full hide-on-mini">FREE</span>`;

            // Different layout for mini sidebar? 
            // We use CSS hide-on-mini to hide text, ensuring only avatar remains or we replace innerHTML

            container.innerHTML = `
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                        <img src="${avatarUrl}" class="w-10 h-10 rounded-full shadow-sm object-cover bg-slate-50" referrerpolicy="no-referrer">
                        <div class="flex-1 min-w-0 hide-on-mini">
                            <p class="text-sm font-bold text-slate-800 dark:text-white truncate">${fullName}</p>
                            <div class="flex items-center gap-2 mt-0.5">
                                <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                <span class="text-xs text-slate-500">Online</span>
                                ${badge}
                            </div>
                        </div>
                    </div>
                    
                    <button onclick="handleLogout()" class="flex items-center justify-center gap-2 w-full py-2 text-xs font-bold text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors group">
                        <span class="material-icons-round text-sm group-hover:-translate-x-0.5 transition-transform">logout</span>
                        <span class="hide-on-mini">Keluar</span>
                    </button>
                </div>
            `;
        } else {
            container.innerHTML = `
                <button onclick="window.openLoginModal()" class="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary-700 text-white rounded-xl font-bold shadow-lg shadow-primary/30 transition-all transform hover:scale-[1.02]">
                    <span class="material-icons-round text-sm">login</span> 
                    <span class="hide-on-mini">Masuk Akun</span>
                </button>
            `;
            // Simple hack for mini login button: add icon that shows when mini
            const btn = container.querySelector('button');
            if (btn) {
                btn.innerHTML = `
                    <span class="hide-on-mini">Login</span>
                    <span class="material-icons-round text-sm md:hidden">login</span>
                 `;
            }
        }
    }
}

customElements.define('app-auth-modal', AppAuthModal);
customElements.define('app-sidebar', AppSidebar);
customElements.define('app-header', AppHeader);
customElements.define('app-mobile-nav', AppMobileNav);
customElements.define('app-footer', AppFooter);
