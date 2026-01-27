class AppHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <header class="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="window.location.href='index.html'">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                M
              </div>
              <span class="font-bold text-xl tracking-tight text-slate-900 dark:text-white">MindTest<span class="text-blue-600">.id</span></span>
            </div>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex space-x-1">
              <a href="index.html" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all">Beranda</a>
              <a href="leaderboard.html" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all">Peringkat</a>
              <a href="daftar_tes.html" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all">Tes</a>
              <a href="playground_ifp.html" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all">Playground</a>
              <a href="dashboard.html" id="desktop-nav-hasil" class="hidden px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all">Dashboard</a>
            </nav>

            <!-- Auth Buttons -->
            <div class="hidden md:flex items-center gap-3" id="login-container">
               <!-- Injected by Supabase Logic -->
               <a href="#" role="button" id="openLoginModalBtn" class="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200">
                  <span class="material-icons text-sm">login</span>
                  <span>Masuk</span>
               </a>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center">
              <button id="mobile-menu-btn" class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none">
                <span class="material-icons">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    `;

        // Bind Mobile Menu
        // We assume app-mobile-nav handles the menu content, but the button triggers it?
        // Or we toggle a class on the mobile nav?
        // In our design, app-mobile-nav is a bottom bar.
        // The "Menu" button usually opens a drawer.
        // Let's dispatch an event.
        this.querySelector('#mobile-menu-btn').addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('toggle-mobile-menu'));
        });
    }
}

customElements.define('app-header', AppHeader);
