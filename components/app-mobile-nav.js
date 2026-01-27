class AppMobileNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border border-slate-200 dark:border-slate-800 rounded-full px-6 py-3 shadow-2xl z-50 flex items-center gap-8 shadow-blue-500/10 dark:shadow-blue-900/20">
        <a href="index.html" class="flex flex-col items-center gap-1 group">
          <span class="material-icons text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors text-xl">home</span>
        </a>
        <a href="leaderboard.html"
            class="flex flex-col items-center text-text-light-secondary hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-primary/10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor">
              <path
                d="m17.829,7.762c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113Zm-8,3c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113ZM1.829,13.762c-.141,0-.282-.045-.4-.133-.227-.17-.321-.464-.236-.734l.627-2.011-1.585-1.29c-.213-.181-.291-.476-.194-.738.096-.262.346-.437.626-.437h2.001l.708-1.987c.097-.261.346-.434.625-.434s.528.173.625.434l.708,1.987h2.001c.28,0,.53.175.626.438s.017.558-.197.739l-1.577,1.285.652,1.987c.089.269-.001.565-.226.738-.225.173-.534.185-.771.031l-1.836-1.196-1.805,1.208c-.112.075-.242.113-.371.113Zm19.671-3.762h-2c-1.381,0-2.5,1.119-2.5,2.5v9c0,1.381,1.119,2.5,2.5,2.5h2c1.381,0,2.5-1.119,2.5-2.5v-9c0-1.381-1.119-2.5-2.5-2.5Zm-17.5,6h-1.5c-1.381,0-2.5,1.119-2.5,2.5v3c0,1.381,1.119,2.5,2.5,2.5h1.5c1.381,0,2.5-1.119,2.5-2.5v-3c0-1.381-1.119-2.5-2.5-2.5Zm8.5-3h-1.5c-1.381,0-2.5,1.119-2.5,2.5v6c0,1.381,1.119,2.5,2.5,2.5h1.5c1.381,0,2.5-1.119,2.5-2.5v-6c0-1.381-1.119-2.5-2.5-2.5Z" />
            </svg>
            <span>Peringkat</span>
          </a>
        <div class="relative -top-5">
           <a href="daftar_tes.html" class="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/30 hover:scale-105 transition-transform">
             <span class="material-icons">play_arrow</span>
           </a>
        </div>
        <a href="playground_ifp.html" class="flex flex-col items-center gap-1 group">
          <span class="material-icons text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors text-xl">stadia_controller</span>
        </a>
        <a href="dashboard.html"  id="mobile-login-icon" class="flex flex-col items-center gap-1 group">
           <!-- Icon changed based on auth via JS logic elsewhere, default person -->
          <span class="material-icons text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors text-xl">person</span>
        </a>
      </nav>
    `;

    // Auth Check for Mobile Nav Icon?
    // layout.js handles UI updates, targeting #mobile-login-container (which was in old code).
    // Now we have #mobile-login-icon.
    // Ideally layout.js should be updated to target this if needed.
    // But typically dashboard.html link is fine.
  }
}

customElements.define('app-mobile-nav', AppMobileNav);
