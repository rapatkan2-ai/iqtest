class AppFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div class="col-span-1 md:col-span-1">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  M
                </div>
                <span class="font-bold text-xl tracking-tight text-slate-900 dark:text-white">MindTest<span class="text-blue-600">.id</span></span>
              </div>
              <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Platform tes IQ dan analisis kognitif berbasis AI tercanggih di Indonesia.
              </p>
              <div class="flex gap-4">
                <a href="#" class="text-slate-400 hover:text-blue-600 transition-colors"><span class="material-icons">facebook</span></a>
                <a href="#" class="text-slate-400 hover:text-pink-600 transition-colors"><span class="material-icons">ondemand_video</span></a> <!-- Twitter replaced with something standard or remove -->
                <a href="#" class="text-slate-400 hover:text-blue-500 transition-colors"><span class="material-icons">link</span></a> <!-- LinkedIn -->
              </div>
            </div>

            <div>
              <h3 class="font-bold text-slate-900 dark:text-white mb-4">Platform</h3>
              <ul class="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <li><a href="daftar_tes.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Semua Tes</a></li>
                <li><a href="leaderboard.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Peringkat Global</a></li>
                <li><a href="dashboard.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Dasbor Pengguna</a></li>
              </ul>
            </div>

            <div>
              <h3 class="font-bold text-slate-900 dark:text-white mb-4">Perusahaan</h3>
              <ul class="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <li><a href="Tentang-Kami.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tentang Kami</a></li>
                <li><a href="Hubungi-Kami.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Hubungi Kami</a></li>
                <li><a href="Karir.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Karir</a></li>
              </ul>
            </div>

            <div>
              <h3 class="font-bold text-slate-900 dark:text-white mb-4">Legal</h3>
               <ul class="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <li><a href="Kebijakan-Privasi.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Kebijakan Privasi</a></li>
                <li><a href="Syarat&Ketentuan.html" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>

          <div class="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm text-slate-400 text-center md:text-left">
              &copy; 2025 MindTest.id. All rights reserved.
            </p>
            <div class="flex gap-6 text-sm text-slate-400">
              <a href="#" class="hover:text-slate-600 dark:hover:text-slate-200">Privacy</a>
              <a href="#" class="hover:text-slate-600 dark:hover:text-slate-200">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    `;
    }
}

customElements.define('app-footer', AppFooter);
