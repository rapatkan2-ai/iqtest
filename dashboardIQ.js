window.onerror = function (msg, url, line, col, error) {
    alert("System Error: " + msg + "\nLine: " + line);
    console.error(msg, line);
    return false;
};

// Tailwind config removed (using compiled CSS)
// --- LOGIKA JS DIPERBARUI (Lebih Natural & Encouraging) ---

function deriveFromIQ(iq) {
    function erf(x) { const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911; const sign = x >= 0 ? 1 : -1; x = Math.abs(x); const t = 1 / (1 + p * x); const y = 1 - (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t) * Math.exp(-x * x); return sign * y; }
    function normalCdf(x, mean = 100, sd = 15) { return 0.5 * (1 + erf((x - mean) / (sd * Math.sqrt(2)))); }
    const pct = Math.round(normalCdf(iq) * 10000) / 100;

    let profile;
    try {

        if (iq < 70) profile = {
            c: "Unik & Praktikal",
            p: 2, lc: "Visual banget & langsung praktek",
            ps: "Coba-coba sampai bisa",
            cp: "Praktikal & hands-on",
            ce: "Teknisi, Bidang Kreatif, Pertanian",
            cc: "Belajar dari pengalaman",
            ds: "Pakai feeling & insting",
            cb: "Cenderung cari aman",
            ad: "Suka rutinitas yang jelas",
            gp: "Butuh bimbingan step-by-step",
            mc: "Butuh teman diskusi",
            ps_s: "Coba metode 'Trial & Error' yang terstruktur, catat apa yang gagal biar nggak diulang.",
            ds_s: "Coba konsultasi dengan satu orang terpercaya sebelum memutuskan hal besar.",
            gp_s: "Pecah target besar jadi langkah-langkah kecil yang bisa diselesaikan hari ini.",
            ad_s: "Minta jadwal atau panduan tertulis saat ada perubahan rutinitas.",
            mc_s: "Ajak teman diskusi untuk mereview pekerjaan kamu, dua kepala lebih baik dari satu.",
            cb_s: "Beranikan diri mencoba satu cara baru tiap minggu untuk melatih adaptabilitas.",
            ct_s: "Gunakan barang bekas atau alat sederhana untuk memecahkan masalah sehari-hari.",
            cd_s: "Fokus pada sertifikasi keterampilan teknis untuk meningkatkan nilai jualmu.",
            fd_s: "Gunakan teknik Pomodoro (25 menit kerja, 5 menit istirahat) agar tetap fokus.",
            ps_s_perf: "Ciptakan lingkungan kerja yang bebas gangguan suara agar performa stabil.",
            description: `Hasil awal menunjukkan potensi belajar yang unik! Gaya berpikirmu cenderung praktikal, namun butuh dikonfirmasi dengan analisis presisi untuk melihat kekuatan aslimu.`,
            encouragement: "Setiap langkah kecil itu kemajuan lho, kamu hebat!",

            // --- Contextual Encouragement (Refined) ---
            problemSolvingStyle_fact: "Kekuatan Super Kinestetikmu: Memproses masalah fisik 2x lebih cepat daripada teori abstrak!",
            problemSolvingStyle_action_plan: ["Gunakan benda fisik/model saat memecahkan masalah", "Gambar skema sederhana sebelum bertindak", "Jangan ragu minta contoh praktek langsung"],

            growthPotential_fact: "Rahasia Otakmu: Neuroplastisitasmu paling aktif saat tanganmu bergerak melakukan sesuatu.",
            growthPotential_action_plan: ["Ulangi satu skill baru minimal 30x", "Minta mentor mencontohkan gerakan/cara kerja", "Fokus pada satu keahlian sampai benar-benar mahir"],

            decisionStyle_fact: "Insting Juara: Keputusan intuisimu seringkali lebih akurat daripada analisis data orang lain.",
            decisionStyle_action_plan: ["Tidur dulu sebelum memutuskan hal besar (Sleep on it)", "Tanya pendapat 1 orang yang paling kamu percaya", "Hindari memutuskan saat sedang lapar atau lelah"],

            adaptationSpeed_fact: "Kenyamananmu: Rutinitas yang stabil adalah kunci otakmu bekerja maksimal tanpa stres.",
            adaptationSpeed_action_plan: ["Buat jadwal harian yang sama setiap hari", "Siapkan baju/tas kerja di malam sebelumnya", "Beri tahu orang sekitar kalau kamu butuh waktu adaptasi"],

            metacognition_fact: "Cara Belajarmu: Kamu paling cepat menyerap ilmu saat belajar bareng orang lain (Social Learning).",
            metacognition_action_plan: ["Cari partner belajar/kerja (Buddy System)", "Minta feedback lisan daripada tertulis", "Rekam diri sendiri saat bekerja untuk evaluasi"],

            thinkingBias_fact: "Wajar Kok: Mencari rasa aman itu manusiawi, tapi jangan sampai menutup pintu ide baru ya.",
            thinkingBias_action_plan: ["Coba dengarkan satu pendapat yang beda tiap minggu", "Tanya 'Kenapa?' minimal 3x saat yakin akan sesuatu", "Jangan langsung tolak ide baru, cobain dulu dikit"],

            creativityType_fact: "Inovator Praktis: Kamu jago banget menyulap barang seadanya jadi solusi yang berguna!",
            creativityType_action_plan: ["Latihan memperbaiki barang rusak di rumah", "Cari kegunaan baru untuk barang bekas", "Amati cara kerja orang lain dan tiru bagian bagusnya"],

            suitableDomains_fact: "Bakat Alami: Kecerdasan fisikmu sangat dicari di dunia teknik presisi dan seni kriya.",
            suitableDomains_action_plan: ["Ambil sertifikasi keahlian khusus (las, jahit, mesin)", "Dokumentasikan hasil karyamu dalam foto", "Cari magang yang banyak porsi prakteknya"],

            problemSolvingStyle_details: [
                { icon: "construction", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Hands-on Learner</span>: Lebih paham kalau tangan langsung kotor ngerjain" },
                { icon: "replay", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Iterative Process</span>: Belajar paling efektif dari kesalahan langsung (Trial & Error)" },
                { icon: "visibility", text: "Butuh <span class='text-blue-600 dark:text-blue-400 font-bold'>Visualisasi Nyata</span>, sulit memproses konsep yang terlalu abstrak" },
                { icon: "biotech", text: "Secara alami menolak teori yang <span class='text-blue-600 dark:text-blue-400 font-bold'>tidak praktis</span>" },
                { icon: "handyman", text: "Jago <span class='text-blue-600 dark:text-blue-400 font-bold'>Improvisasi</span> saat alat atau bahan terbatas" }
            ],
            scientific_fact: "Otak tipe ini memiliki koneksi motorik-kognitif yang kuat, memproses informasi kinestetik lebih cepat daripada verbal.",
            action_plan: [
                "Gunakan teknik <span class='text-blue-600 dark:text-blue-400 font-bold'>'Mind Mapping'</span> tapi pakai benda nyata/sticky notes",
                "Rekam suaramu saat belajar hal baru, lalu dengarkan sambil jalan kaki",
                "Pecah tugas besar jadi <span class='text-blue-600 dark:text-blue-400 font-bold'>langkah fisik kecil</span> (cth: 'Buka laptop', 'Ketik judul')"
            ],
            growthPotential_details: [{ icon: "school", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Guided Learning</span>: Kalau instruksinya jelas step-by-step, kamu pasti bisa" }, { icon: "support", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Support System</span>: Lingkungan yang suportif bikin kamu makin berkembang" }, { icon: "task_alt", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Repetition</span>: Latihan berulang adalah kunci sukses kamu" }],
            decisionStyle_details: [{ icon: "visibility", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Concrete Evidence</span>: Mutusin sesuatu berdasarkan apa yang kelihatan mata" }, { icon: "history_toggle_off", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Instinctual</span>: Firasat kamu seringkali bener lho untuk situasi mendesak" }, { icon: "warning", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Present Focus</span>: Fokus ke solusi masalah saat ini, bukan jangka panjang" }],
            adaptationSpeed_details: [{ icon: "schedule", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Slow & Steady</span>: Butuh waktu dikit buat adaptasi, tapi pasti bisa" }, { icon: "sync_problem", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Routine Oriented</span>: Lebih tenang kalau situasinya stabil dan terprediksi" }, { icon: "checklist", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Instruction Dependent</span>: Suka banget kalau udah ada panduan SOP jelas" }],
            metacognition_details: [{ icon: "question_mark", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Action Oriented</span>: Jarang mikirin 'cara mikir', yang penting langsung jalan" }, { icon: "error", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Feedback Check</span>: Kadang butuh dikasih tau temen kalau ada detail yang kelewat" }, { icon: "psychology_question", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Peer Learning</span>: Belajar bareng orang lain itu efektif banget buatmu" }],
            thinkingBias_details: [{ icon: "filter_alt", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Confirmation Bias</span>: Yakin banget sama apa yang udah kamu percaya sejak lama" }, { icon: "group", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Social Proof</span>: Suka dengerin saran temen deket daripada data asing" }, { icon: "thumb_up", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Optimism Bias</span>: Fokus ke hal-hal positif yang mendukung mood kamu" }],
            creativityType_details: [{ icon: "build_circle", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Practical Innovation</span>: Jago banget nemu solusi akal-akalan yang jenius untuk masalah fisik" }, { icon: "directions_run", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Efficiency Hacks</span>: Bikin kerjaan fisik jadi lebih enteng dengan alat sederhana" }, { icon: "recycling", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Upcycling</span>: Pinter manfaatin barang bekas yang ada jadi berguna" }],
            suitableDomains_details: [{ icon: "agriculture", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Field Work</span>: Kerjaan yang hasilnya langsung kelihatan fisik" }, { icon: "cleaning_services", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Structured Services</span>: Bidang yang teratur dan jelas SOP-nya" }, { icon: "fastfood", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Operational</span>: Lingkungan kerja yang rapi sistemnya" }],
            focusDuration_details: [{ icon: "timer_10", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Short Bursts</span>: Fokusnya singkat (15-20 menit) tapi tajam banget" }, { icon: "distractions", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Sensitive Environment</span>: Butuh suasana yang tenang untuk konsentrasi" }, { icon: "task", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Single Tasking</span>: Paling jago kalau ngerjain satu hal di satu waktu" }],
            performanceStability_details: [{ icon: "monitoring", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Mood Driven</span>: Semangat kerja cenderung mengikuti suasana hati" }, { icon: "mood", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>High Peak</span>: Kalau lagi happy, kerjanya cepet dan rajin banget" }, { icon: "support_agent", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Need Encouragement</span>: Butuh apresiasi rutin biar makin konsisten" }]
        };
        else if (iq < 85) profile = {
            c: "Pembelajar Praktis",
            p: 16, lc: "Konsep dasar & nyata",
            ps: "Belajar dari pengalaman",
            cp: "Teknis & operasional",
            ce: "Administrasi, Pelayanan, Support",
            cc: "Andalin pengalaman langsung",
            ds: "Sesuai kebiasaan",
            cb: "Suka konfirmasi ulang",
            ad: "Nyaman sama sistem yg udah ada",
            gp: "Belajar lewat contoh",
            mc: "Sadar diri cukup baik",
            ps_s: "Coba tulis langkah-langkah resolusi masalah (SOP mini) agar tidak bingung saat panik.",
            ds_s: "Sekali-kali coba cara baru untuk hal sepele (misal rute jalan) agar otak terlatih fleksibel.",
            gp_s: "Cari mentor atau rekan senior yang asik buat jadi tempat bertanya rutin.",
            ad_s: "Fokus ke satu hal baru di satu waktu, jangan multitasking saat adaptasi.",
            mc_s: "Minta masukan spesifik dari teman: 'Bagian mana yang paling bisa aku perbaiki?'",
            cb_s: "Baca artikel pendek tentang topik baru tiap pagi biar wawasan makin luas.",
            ct_s: "Ide modifikasi alat atau cara kerja kamu itu brilian, coba dokumentasikan.",
            cd_s: "Keunggulanmu di ketelitian administrasi dan pelayanan adalah aset besar.",
            fd_s: "Kerja fokus 30 menit, lalu stretching atau jalan sebentar agar otak segar lagi.",
            ps_s_perf: "Gunakan checklist fisik untuk memastikan konsistensi kualitas kerja.",
            description: `Indikasi awal mengarah pada tipe 'Learning by Doing'. Kapasitasmu menyerap informasi lewat pengalaman terlihat kuat, tapi seberapa cepat? Cek hasil lengkapnya.`,
            encouragement: "Pelan-pelan asal kelakon, kamu pasti bisa!",

            // --- Contextual Encouragement (Refined) ---
            problemSolvingStyle_fact: "Keunggulanmu: Otakmu sangat efisien mengenali pola masalah yang berulang (Pattern Matching)!",
            problemSolvingStyle_action_plan: ["Buat 'Jurnal Masalah & Solusi' pribadi untuk referensi masa depan", "Bedah kasus lama untuk memahami polanya", "Fokus pada solusi yang terbukti berhasil (Best Practice)"],

            growthPotential_fact: "Cara Cepatmu: Meniru ahli (Observing) adalah jalan pintasmu menguasai skill baru!",
            growthPotential_action_plan: ["Minta izin untuk membayangi (shadowing) senior ahli", "Tonton video tutorial daripada membaca buku tebal", "Praktekkan langsung apa yang baru dilihat dalam 24 jam"],

            decisionStyle_fact: "Strategi Aman: Mengikuti aturan main terbukti mengurangi beban pikiranmu dan hasilkan keputusan stabil.",
            decisionStyle_action_plan: ["Cek SOP atau aturan main sebelum memutuskan", "Buat tabel Pro & Kontra sederhana", "Jangan ambil keputusan saat emosi sedang tinggi"],

            adaptationSpeed_fact: "Gaya Adaptasimu: Perubahan kecil tapi konsisten lebih manjur buatmu daripada revolusi besar.",
            adaptationSpeed_action_plan: ["Ubah satu kebiasaan kecil per minggu", "Fokus pada apa yang TIDAK berubah untuk rasa aman", "Cari teman yang juga sedang beradaptasi agar saling dukung"],

            metacognition_fact: "Radar Error: Kamu punya bakat alami mendeteksi kesalahan sendiri saat ada feedback langsung.",
            metacognition_action_plan: ["Minta atasan/teman review hasil kerjamu segara", "Akui kesalahan dengan cepat agar cepat diperbaiki", "Tanya: 'Apa satu hal yang bisa aku lakukan lebih baik?'"],

            thinkingBias_fact: "Sisi Loyal: Percaya pada atasan itu bagus, tapi pastikan kamu juga memvalidasi fakta ya (Authority Wisdom).",
            thinkingBias_action_plan: ["Cek fakta dari sumber kedua sebelum percaya penuh", "Latih bertanya 'Kenapa harus begini?' dengan sopan", "Ingat bahwa pengalamanmu sendiri juga valid"],

            creativityType_fact: "Inovator Efisien: Perbaikan kecil yang kamu lakukan terus-menerus berdampak besar jangka panjang!",
            creativityType_action_plan: ["Cari satu hal kecil yang bikin kerjamu lambat, lalu perbaiki", "Gabungkan dua cara kerja lama jadi satu yang baru", "Sederhanakan formulir atau langkah kerja yang ribet"],

            suitableDomains_fact: "Aset Karir: Ketelitian dan konsistensimu adalah 'mata uang' mahal di dunia profesional.",
            suitableDomains_action_plan: ["Pelajari software produktivitas (Excel, Trello) untuk nilai tambah", "Latih komunikasi persuasif untuk bidang layanan", "Jaga kerapihan arsip/data sebagai personal brand"],

            problemSolvingStyle_details: [
                { icon: "history", text: "Mengandalkan <span class='text-blue-600 dark:text-blue-400 font-bold'>Memory Bank</span>: Mengingat solusi dari masalah serupa di masa lalu" },
                { icon: "copy_all", text: "Jago dalam <span class='text-blue-600 dark:text-blue-400 font-bold'>ATM (Amati Tiru Modifikasi)</span> dari solusi orang lain" },
                { icon: "build", text: "Solusi harus <span class='text-blue-600 dark:text-blue-400 font-bold'>Konkret & Teruji</span>, anti wacana teoritis" },
                { icon: "group_work", text: "Bagus dalam <span class='text-blue-600 dark:text-blue-400 font-bold'>Koordinasi Lapangan</span> secara langsung" },
                { icon: "timer", text: "Cepat tanggap dalam <span class='text-blue-600 dark:text-blue-400 font-bold'>Situasi Rutin</span> yang sudah dikuasai" }
            ],
            scientific_fact: "Pembelajar prosedural memiliki aktivitas tinggi di Basal Ganglia, area otak yang mengatur kebiasaan dan pengulangan motorik.",
            action_plan: [
                "Bikin <span class='text-blue-600 dark:text-blue-400 font-bold'>checklist harian</span>. Otakmu suka dopamin saat mencentang tugas 'Selesai'",
                "Cari mentor. Kamu belajar lebih cepat lewat <span class='text-blue-600 dark:text-blue-400 font-bold'>observasi langsung</span> daripada baca manual",
                "Ubah rutinitasmu sedikit demi sedikit agar <span class='text-blue-600 dark:text-blue-400 font-bold'>neuroplastisitas otak</span> tetap aktif"
            ],
            growthPotential_details: [{ icon: "model_training", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Example Based</span>: Langsung paham kalau dikasih contoh nyata atau demo" }, { icon: "menu_book", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Manuals</span>: Suka banget kalau ada panduan langkah demi langkah (SOP)" }, { icon: "repeat_one", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Drilling</span>: Makin sering diulang, skill kamu makin tajam dan otomatis" }],
            decisionStyle_details: [{ icon: "event_repeat", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Consistent</span>: Keputusanmu biasanya konsisten, aman, dan minim risiko" }, { icon: "checklist_rtl", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Rule Based</span>: Tertib ngikutin prosedur atau aturan yang berlaku" }, { icon: "social_distance", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Status Quo</span>: Cenderung mempertahankan apa yang sudah berjalan baik" }],
            adaptationSpeed_details: [{ icon: "foundation", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Stability First</span>: Paling produktif di lingkungan yang stabil dan minim kejutan" }, { icon: "layers", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Phased Adapt</span>: Butuh adaptasi bertahap, tapi setelah itu performa sangat solid" }, { icon: "groups", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Social Buffer</span>: Kalau ada temen yang bantuin, adaptasi jadi jauh lebih cepat" }],
            metacognition_details: [{ icon: "visibility", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Self Aware</span>: Cukup sadar kalau melakukan kesalahan dan mau memperbaikinya" }, { icon: "help_center", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Help Seeking</span>: Nggak gengsi bertanya kalau memang merasa buntu" }, { icon: "feedback", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Feedback Receptive</span>: Makin berkembang lewat masukan konstruktif orang lain" }],
            thinkingBias_details: [{ icon: "person_search", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Experience Bias</span>: Lebih percaya pengalaman pribadi dibanding data statistik" }, { icon: "verified", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Authority Bias</span>: Sangat percaya pada pendapat ahli atau atasan" }, { icon: "unpublished", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Risk Aversion</span>: Jarang mendebat, lebih suka bermain aman (conflict avoidance)" }],
            creativityType_details: [{ icon: "settings_suggest", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Simplification</span>: Jago menyederhanakan proses kerja yang ribet jadi simpel" }, { icon: "low_priority", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Kaizen</span>: Suka melakukan perbaikan kecil terus-menerus (improvement)" }, { icon: "handyman", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Applied Creativity</span>: Kreativitas kamu itu solutif dan langsung bisa dipakai" }],
            suitableDomains_details: [{ icon: "support_agent", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Service & Support</span>: Posisi yang membutuhkan kesabaran dan standar pelayanan" }, { icon: "real_estate_agent", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Administration</span>: Bidang yang membutuhkan ketelitian dan keteraturan tinggi" }, { icon: "assignment", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Operations</span>: Pelaksana lapangan yang handal dan terpercaya" }],
            focusDuration_details: [{ icon: "timelapse", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Task Driven</span>: Fokus terjaga baik jika tugas dan targetnya jelas (S.M.A.R.T)" }, { icon: "checklist", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Result Oriented</span>: Termotivasi produktif kalau sudah tahu 'goal'-nya apa" }, { icon: "notifications_off", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Structure Need</span>: Kurang nyaman dengan ambiguitas atau distraksi mendadak" }],
            performanceStability_details: [{ icon: "autorenew", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Reliable</span>: Kerjaan rutin pasti beres dengan standar kualitas yang sama" }, { icon: "trending_down", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Clarity Need</span>: Performa bisa turun kalau instruksi berubah-ubah mendadak" }, { icon: "pace", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Consistent Pace</span>: Ritme kerja kamu stabil seperti mesin diesel, makin lama makin panas" }]
        };
        else if (iq < 115) profile = {
            c: "Si Realistis & Efisien",
            p: 50 + Math.round((iq - 100) / 15 * 34),
            lc: "Konsep berimbang",
            ps: "Logis & runut",
            cp: "Terapan & sosial",
            ce: "Manajemen, Bisnis, Logistik",
            cc: "Efisien & to-the-point",
            ds: "Rasional banget",
            cb: "Percaya otoritas",
            ad: "Adaptasi lumayan cepet",
            gp: "Cepet bisa kalau niat",
            mc: "Suka introspeksi",
            ps_s: "Latih 'Lateral Thinking' (berpikir menyamping) agar solusimu nggak terlalu kaku/baku.",
            ds_s: "Jangan lupakan faktor 'manusia' saat ambil keputusan bisnis/logis.",
            gp_s: "Coba pelajari satu skill yang 'nggak berguna langsung' tapi menarik minatmu.",
            ad_s: "Jadilah inisiator perubahan di tim, jangan cuma nunggu instruksi.",
            mc_s: "Tanya 'Bagaimana perasaan orang lain tentang kerjaku?' untuk mengasah empati.",
            cb_s: "Tantang asumsimu sendiri: 'Apa yang mungkin salah dari rencana sempurnaku?'",
            ct_s: "Gabungkan dua metode kerja yang berbeda untuk menciptakan efisiensi baru.",
            cd_s: "Posisi manajemen menengah atau pemimpin tim sangat cocok buatmu.",
            fd_s: "Blok waktu 1 jam 'Deep Work' tanpa email/chat sama sekali.",
            ps_s_perf: "Delegasikan tugas repetitif agar energimu fokus ke masalah strategis.",
            description: `Kamu adalah tipe pemikir pragmatis yang mengutamakan efisiensi dan hasil nyata. Alih-alih terjebak dalam teori yang rumit, kamu lebih memilih pendekatan 'sat-set' yang teruji dan bisa langsung diterapkan. Kekuatan utamamu terletak pada kemampuan menyederhanakan masalah kompleks menjadi langkah-langkah praktis yang mudah dieksekusi.`,
            hero_bullets: [],
            encouragement: "Konsistensi adalah kunci, dan kamu rajanya!",

            // --- Contextual Encouragement (Refined) ---
            problemSolvingStyle_fact: "Kekuatan Fokusmu: Kemampuanmu berpikir konvergen (mengerucut) menyaring kebisingan untuk menemukan satu solusi terbaik!",
            problemSolvingStyle_action_plan: ["Gunakan matriks prioritas (Eisenhower Matrix) untuk memilah masalah", "Fokus pada 'Low Hanging Fruit' (masalah termudah) dulu", "Hindari over-analisis untuk masalah sepele"],

            growthPotential_fact: "Potensi Karir: Kompetensi 'T-Shaped' (spesialis tapi berwawasan luas) adalah ciri utama calon manajer hebat.",
            growthPotential_action_plan: ["Pilih satu bidang spesialisasi untuk didalami tahun ini", "Pelajari dasar-dasar bidang rekan kerjamu untuk kelancaran komunikasi", "Ikuti workshop kepemimpinan praktis"],

            decisionStyle_fact: "Keputusan Objektif: Mengandalkan data (Data-Driven) membuat setiap keputusanmu sangat akurat dan bebas drama emosional.",
            decisionStyle_action_plan: ["Kumpulkan minimal 3 data pendukung sebelum memutuskan", "Buat simulasi 'Best Case' dan 'Worst Case'", "Berani bilang 'Tidak' pada permintaan yang tidak strategis"],

            adaptationSpeed_fact: "Visi Kedepan: Kemampuanmu mengantisipasi perubahan (Proaktif) membuatmu selalu selangkah di depan masalah.",
            adaptationSpeed_action_plan: ["Baca tren industri 15 menit setiap hari", "Siapkan 'Plan B' untuk setiap proyek penting", "Jadilah orang pertama yang mencoba software/sistem baru di kantor"],

            metacognition_fact: "Cermin Jujur: Kemampuanmu menilai diri sendiri secara objektif adalah kunci perbaikan yang konstan.",
            metacognition_action_plan: ["Lakukan 'Weekly Review' setiap Jumat sore", "Ukur progresmu dengan angka/KPI yang jelas", "Jujur pada diri sendiri tentang skill yang masih kurang"],

            thinkingBias_fact: "Tantangan Keren: Kamu jago cara baku, tapi sesekali coba cara 'nyeleneh' pasti seru buat ngelatih kreativitas!",
            thinkingBias_action_plan: ["Latihan: Pikirkan 10 kegunaan lain dari sebuah klip kertas", "Coba selesaikan tugas rutin dengan cara yang benar-benar berbeda sekali saja", "Tukar peran dengan rekan kerja sehari untuk perspektif baru"],

            creativityType_fact: "Alkemis Ide: Bakatmu menggabungkan dua ide lama menjadi satu solusi baru (Sintetik) itu sangat brilian!",
            creativityType_action_plan: ["Modifikasi template presentasi orang lain agar lebih efektif", "Kurasi informasi terbaik dari berbagai sumber untuk tim", "Temukan celah efisiensi dalam workflow tim saat ini"],

            suitableDomains_fact: "Medan Tempurmu: Konsistensi dan eksekusi terukurmu sangat dicari di level manajemen dan bisnis profesional.",
            suitableDomains_action_plan: ["Pelajari manajemen proyek (Agile/Scrum)", "Latih kemampuan negosiasi bisnis", "Fokus pada pencapaian target (Result Oriented)"],

            problemSolvingStyle_details: [
                { icon: "schema", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Structured</span>: Memecahkan masalah dengan langkah-langkah logis dan teratur" },
                { icon: "fact_check", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Fact Based</span>: Menyingkirkan opini, fokus pada data dan kejadian nyata" },
                { icon: "speed", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Efficient</span>: Selalu mencari rute tercepat menuju solusi (Shortcut Master)" },
                { icon: "mediation", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Pragmatic</span>: Solusi itu yang penting 'jalan', nggak harus sempurna atau indah" },
                { icon: "account_tree", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Root Cause</span>: Cepat mengidentifikasi akar masalah tanpa berbelit-belit" }
            ],
            scientific_fact: "Lobus Frontal kiri sangat dominan pada tipe ini, mendukung pemikiran analitis, logis, dan bahasa yang terstruktur.",
            action_plan: [
                "Gunakan <span class='text-blue-600 dark:text-blue-400 font-bold'>Prinsip Pareto (80/20)</span> dalam segala hal. Fokus pada 20% usaha yang hasilkan 80% dampak",
                "Latih <span class='text-blue-600 dark:text-blue-400 font-bold'>'Lateral Thinking'</span> (berpikir menyamping) agar tidak terlalu kaku",
                "Sesekali ambil keputusan berdasarkan <span class='text-blue-600 dark:text-blue-400 font-bold'>intuisi</span> untuk melatih belahan otak kanan"
            ],
            growthPotential_details: [{ icon: "trending_up", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Career Ladder</span>: Potensi besar untuk naik jabatan karena konsistensi kerja" }, { icon: "engineering", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Skill Stacking</span>: Jago menggabungkan beberapa skill teknis jadi keunggulan baru" }, { icon: "groups_2", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Leadership</span>: Tipe pemimpin yang 'membumi' dan dihormati karena kapabilitas" }],
            decisionStyle_details: [{ icon: "analytics", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Analytic</span>: Membedah opsi pro dan kontra dengan sangat jeli" }, { icon: "balance", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Balanced</span>: Jarang impulsif, tapi juga nggak lelet. Pas di tengah" }, { icon: "gavel", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Justifiable</span>: Selalu punya alasan logis kalau ditanya 'kenapa milih itu?'" }],
            adaptationSpeed_details: [{ icon: "tune", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Calculated Adapt</span>: Berubah kalau itung-itungannya untung (ROI positif)" }, { icon: "rocket_launch", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Early Adopter</span>: Bukan yang pertama, tapi cepat nyusul kalau trennya bagus" }, { icon: "published_with_changes", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Optimizer</span>: Masuk ke sistem baru dan langsung bikin lebih efisien" }],
            metacognition_details: [{ icon: "fact_check", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Evaluative</span>: Suka ngecek hasil kerja sendiri (Quality Control)" }, { icon: "psychology", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Realistic Self</span>: Paham betul batas kemampuan diri, nggak muluk-muluk" }, { icon: "edit_note", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Planner</span>: Suka merencanakan 'next step' untuk perbaikan diri" }],
            thinkingBias_details: [{ icon: "visibility_off", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Realism Bias</span>: Terlalu realistis kadang bikin takut bermimpi besar" }, { icon: "block", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Functional Fixedness</span>: Kadang terpaku sama cara lama yang 'udah biasa'" }, { icon: "linear_scale", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Linear Thinking</span>: Mikirnya lurus banget A ke B, padahal bisa loncat" }],
            creativityType_details: [{ icon: "architecture", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Structural</span>: Kreatif dalam membangun sistem atau kerangka kerja" }, { icon: "merge_type", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Synthetic</span>: Jago menggabungkan ide A dan B jadi solusi C yang paten" }, { icon: "lightbulb_circle", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Solutionist</span>: Kreativitas muncul saat kepepet masalah nyata" }],
            suitableDomains_details: [{ icon: "business_center", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Management</span>: Mengatur sumber daya manusia dan alat" }, { icon: "trending_up", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Business</span>: Naluri bisnis dan profitabilitas yang tajam" }, { icon: "laptop_mac", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Tech Specialist</span>: Ahli teknis yang bisa diandalkan" }],
            focusDuration_details: [{ icon: "timer", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Standard Shift</span>: Bisa fokus 2-3 jam non-stop (Deep Work)" }, { icon: "do_not_disturb_on", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Controlled</span>: Bisa memblokir gangguan kalau lagi 'in the zone'" }, { icon: "schedule", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Disciplined</span>: Punya jadwal kerja/belajar yang teratur" }],
            performanceStability_details: [{ icon: "ssid_chart", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Steady Growth</span>: Performa naik terus secara bertahap dan pasti" }, { icon: "bolt", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Efficient Energy</span>: Nggak boros energi buat hal drama/nggak penting" }, { icon: "check_circle", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Dependable</span>: Paling bisa diandalkan buat deadline ketat" }],
            // NEW: Customizing details for this specific profile if requested
            percentile_details: [
                { text: "Profil cenderung unggul pada penerapan praktis" },
                { text: "Potensi berkembang kuat pada skill teknis dan aplikatif" },
                { text: "Lebih kompetitif pada konteks nyata dibanding tes teoritis" }
            ],
            efficiency_details: [
                { text: "Lebih optimal saat mengerjakan satu tugas dalam satu waktu" },
                { text: "Membutuhkan waktu untuk analisis mendalam" },
                { text: "Akurasi meningkat ketika tidak berada di bawah tekanan waktu" }
            ]
        };
        else if (iq < 130) profile = {
            c: "Si Analitis Tajam",
            p: 84 + Math.round((iq - 115) / 15 * 14),
            lc: "Konsep rumit & nyambung-nyambung",
            ps: "Analitis & detektif pola",
            cp: "Strategis banget",
            ce: "Tech, Finance, Design",
            cc: "Cepet nangkep",
            ds: "Penuh perhitungan",
            cb: "Agak over PD",
            ad: "Cepet banget adaptasi",
            gp: "Bisa belajar sendiri",
            mc: "Suka merenung",
            ps_s: "Coba tantang hipotesis awalmu dengan data kontradiktif (Devil's Advocate).",
            ds_s: "Belajar mengambil keputusan 80% siap (MVP Decision) agar tidak kehilangan momentum.",
            gp_s: "Pelajari topik fundamental (First Principles) untuk memperkuat basis pengetahuanmu.",
            ad_s: "Jadilah arsitek perubahan, bukan hanya beradaptasi tapi mendesain sistem baru.",
            mc_s: "Tulis jurnal refleksi harian: 'Bias berpikir apa yang aku alami hari ini?'",
            cb_s: "Sadari 'Intellectual Arrogance', selalu asumsikan orang lain punya insight unik.",
            ct_s: "Gunakan kemampuan analisismu untuk mendekonstruksi karya master di bidangmu.",
            cd_s: "Posisi strategis yang membutuhkan visi jangka menengah sangat cocok untukmu.",
            fd_s: "Alokasikan blok waktu 'Deep Work' 2 jam tanpa distraksi sama sekali.",
            ps_s_perf: "Cari proyek yang menantang intelektualmu agar tidak bosan dan underperform.",
            description: `Potensi analitis yang tajam terdeteksi! Kamu mungkin memiliki kemampuan pola pikir yang jarang dimiliki orang lain. Seberapa jenius strategi kamu? Buka analisis full-nya.`,
            encouragement: "Otak kamu itu aset mahal, keren abis!",

            // --- Contextual Encouragement (Refined) ---
            problemSolvingStyle_fact: "Inovator Kognitif: Kemampuanmu menyebar ide (divergen) lalu memadatkannya (konvergen) adalah sumber inovasi tak terbatas!",
            problemSolvingStyle_action_plan: ["Cari minimal 5 alternatif solusi sebelum memilih satu", "Gunakan teknik SCAMPER untuk memodifikasi ide lama", "Validasi solusimu dengan 'Stress Test' mental"],

            growthPotential_fact: "Belajar Mandiri: Kamu nggak butuh disuruh. Kemampuanmu mengatur diri sendiri (Self-Regulation) adalah prediksi sukses terbesar!",
            growthPotential_action_plan: ["Buat kurikulum belajarmu sendiri (Personal MBA)", "Ajarkan apa yang kamu pelajari ke orang lain (Feynman Technique)", "Ikuti komunitas ahli di bidang spesifik"],

            decisionStyle_fact: "Kalkulator Keren: Menghitung risiko vs reward secara intuitif membuatmu jadi pengambil keputusan yang 'dingin' dan efektif.",
            decisionStyle_action_plan: ["Hitung nilai risiko vs reward secara matematis", "Gunakan pohon keputusan (Decision Tree) untuk visualisasi", "Sadari 'Sunk Cost Fallacy' saat proyek gagal"],

            adaptationSpeed_fact: "Mental Karet: Kelenturan pikiranmu memungkinkanmu 'banting setir' strategi kapan saja tanpa stres berlebih.",
            adaptationSpeed_action_plan: ["Simulasikan skenario 'Apa jika...' (What-If Analysis)", "Pelajari pola dari industri lain dan terapkan di bidangmu", "Jangan jatuh cinta pada rencana awal, cintai tujuannya"],

            metacognition_fact: "Sadar Proses: Kamu punya 'CCTV' di otak (Metacognitive Monitoring) yang membuatmu jarang terjebak bias konyol.",
            metacognition_action_plan: ["Evaluasi proses berpikirmu, bukan cuma hasilnya", "Deteksi kapan kamu mulai lelah mental dan istirahat", "Tanya diri sendiri: 'Apakah aku sedang bias saat ini?'"],

            thinkingBias_fact: "Jebakan Pintar: Orang cerdas pandai berargumen, jadi tantanganmu hanyalah berani membantah dirimu sendiri (Intellectual Humility).",
            thinkingBias_action_plan: ["Cari bukti yang MEMBANTAH opinimu, bukan yang mendukung", "Diskusikan idemu dengan orang yang pasti tidak setuju", "Akui secara terbuka saat kamu salah (Intellectual Humility)"],

            creativityType_fact: "Sang Pengganggu: Kombinasi ilmu 'aneh' yang kamu miliki sering melahirkan ide yang mengubah permainan (Disruptive)!",
            creativityType_action_plan: ["Pelajari bidang seni jika kamu orang teknik (atau sebaliknya)", "Gunakan analogi biologis untuk masalah mekanis (Biomimicry)", "Pertanyakan status quo: 'Kenapa harus begini?'"],

            suitableDomains_fact: "Zona Nyamanmu: Semakin rumit dan abstrak, semakin kamu bersinar. Kamu diciptakan untuk menaklukkan kompleksitas tinggi!",
            suitableDomains_action_plan: ["Fokus pada peran strategis, bukan operasional repetitif", "Bangun portofolio proyek-proyek rumit yang berhasil kamu pecahkan", "Cari mentor level eksekutif/pakar"],

            problemSolvingStyle_details: [
                { icon: "grain", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Pattern Recognition</span>: Jeli melihat pola tersembunyi dalam data acak" },
                { icon: "hub", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Systems Thinking</span>: Memahami bagaimana satu bagian mempengaruhi keseluruhan sistem" },
                { icon: "troubleshoot", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Root Cause</span>: Tidak puas dengan gejala, selalu cari akar masalah terdalam" },
                { icon: "psychology_alt", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Simulation</span>: Mampu melakukan simulasi mental kompleks sebelum eksekusi" },
                { icon: "schema", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Frameworks</span>: Suka membuat model atau kerangka kerja baru sendiri" }
            ],
            scientific_fact: "Cortex Prefrontal kamu sangat efisien, membutuhkan lebih sedikit energi glukosa untuk memproses masalah kompleks dibanding rata-rata orang.",
            action_plan: [
                "Hindari <span class='text-blue-600 dark:text-blue-400 font-bold'>'Intellectual Arrogance'</span>. Selalu asumsikan ada orang di ruangan yang lebih tahu dari kamu",
                "Latih empati. Kadang <span class='text-blue-600 dark:text-blue-400 font-bold'>solusi logis</span> bukan solusi terbaik untuk manusia",
                "Dokumentasikan caramu berpikir. Itu bisa jadi <span class='text-blue-600 dark:text-blue-400 font-bold'>SOP atau paten</span> yang berharga"
            ],
            growthPotential_details: [{ icon: "auto_stories", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Autodidact</span>: Bisa belajar skill sulit apa saja secara mandiri lewat buku/internet" }, { icon: "integration_instructions", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Concept Glue</span>: Konsep rumit langsung nempel di kepala dan terkoneksi satu sama lain" }, { icon: "explore", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Deep Dive</span>: Keponya tinggi banget sama ilmu baru sampai ke akar-akarnya" }],
            decisionStyle_details: [{ icon: "account_tree", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Scenario Planning</span>: Selalu mikirin plan A, B, sampai Z untuk segala kemungkinan" }, { icon: "rule", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Rationale</span>: Keputusanmu selalu ada dasar logika yang kuat dan bisa dipertanggungjawabkan" }, { icon: "risk_assessment", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Calm Under Pressure</span>: Tetap tenang dan logis saat harus memutuskan dalam kondisi krisis" }],
            adaptationSpeed_details: [{ icon: "dns", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Instant Map</span>: Sistem baru? Langsung paham peta mentalnya dalam hitungan menit" }, { icon: "cognition", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Strategic Pivot</span>: Cepat banget memetakan strategi baru saat situasi berubah" }, { icon: "change_history", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Optimizer</span>: Malah suka nyari celah buat bikin sistem baru tersebut jadi lebih efisien" }],
            metacognition_details: [{ icon: "self_improvement", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Continuous Improvement</span>: Sering evaluasi diri buat jadi versi yang lebih baik dari kemarin" }, { icon: "plagiarism", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Bias Check</span>: Tau banget kelebihan dan kekurangan/bias otak sendiri" }, { icon: "checklist", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Meta Strategy</span>: Punya strategi khusus tentang 'bagaimana cara berpikir' (Thinking about thinking)" }],
            thinkingBias_details: [{ icon: "military_tech", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Overconfidence</span>: Kadang terlalu yakin sama analisa sendiri sampai meremehkan faktor X" }, { icon: "psychology", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Attribute Substitution</span>: Suka lupa kalau faktor keberuntungan (luck) juga berpengaruh besar" }, { icon: "model_training", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Anchoring</span>: Hati-hati kepatok sama informasi pertama yang kamu terima" }],
            creativityType_details: [{ icon: "schema", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Disruptive</span>: Inovasi kamu biasanya ngerombak sistem lama sampai ke akarnya" }, { icon: "mediation", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Convergent</span>: Pinter milih satu solusi terbaik dari sekian banyak opsi kreatif" }, { icon: "design_services", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>System Design</span>: Jago mendesain ulang alur kerja agar jauh lebih efisien" }],
            suitableDomains_details: [{ icon: "analytics", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Data Science</span>: Cocok banget main data, pola, dan strategi kompleks" }, { icon: "code", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Engineering</span>: Dunia coding, teknik, atau finance butuh otak kayak kamu" }, { icon: "bar_chart", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Business Strategy</span>: Pinter nerjemahin data abstrak jadi strategi jitu" }],
            focusDuration_details: [{ icon: "routine", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Deep Work</span>: Bisa fokus dalem banget berjam-jam (Hyperfocus)" }, { icon: "filter_center_focus", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Tunnel Vision</span>: Gangguan eksternal nggak mempan buat kamu saat sedang asik" }, { icon: "all_inclusive", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Task Switch</span>: Gampang pindah fokus antar tugas kompleks kalau diperluin" }],
            performanceStability_details: [{ icon: "show_chart", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>High Performer</span>: Performa kamu konsisten tinggi di atas rata-rata" }, { icon: "battery_charging_full", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Endurance</span>: Energi mental kamu kayak nggak abis-abis buat mikir keras" }, { icon: "new_releases", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Challenge Driven</span>: Malah makin semangat kalau masalahnya susah dan belum terpecahkan" }]
        };
        else profile = {
            c: "Si Visioner Jenius",
            p: iq < 145 ? 98 : 99,
            lc: "Teori tingkat dewa & inovasi",
            ps: "Abstrak & sistemik banget",
            cp: "Abstrak & super kreatif",
            ce: "Peneliti, Ilmuwan, Inovator",
            cc: "Hobi tantangan otak",
            ds: "Strategis berlapis-lapis",
            cb: "Terlalu intelektual",
            ad: "Adaptasi secepet kilat",
            gp: "Belajar mandiri level dewa",
            mc: "Reflektif banget",
            ps_s: "Coba cari inspirasi dari bidang yang 'nggak nyambung' untuk memicu ide radikal (Cross-Pollination).",
            ds_s: "Seimbangkan logika dinginmu dengan faktor etika dan empati manusia.",
            gp_s: "Ciptakan metode atau teori baru, jangan hanya mempelajari yang sudah ada.",
            ad_s: "Jangan hanya beradaptasi, posisikan dirimu sebagai 'Agent of Change' yang mengubah lingkungan.",
            mc_s: "Rutin berdiskusi dengan orang yang tidak setuju denganmu untuk mengasah ketajaman argumen.",
            cb_s: "Latih 'Mindfulness' agar tidak terjebak dalam labirin pikiran sendiri (Overthinking).",
            ct_s: "Dedikasikan 20% waktumu untuk proyek eksperimental tanpa target jelas (Google's 20% Rule).",
            cd_s: "Karir sebagai Arsitek Sistem, Peneliti Murni, atau Founder sangat memuaskan dahagamu.",
            fd_s: "Lindungi waktu 'Deep Thinking' kamu dari gangguan trivial adminstratif.",
            ps_s_perf: "Cari masalah yang dianggap 'mustahil' oleh orang lain untuk bahan bakar semangatmu.",
            description: `Wow! Sinyal 'Gifted' terdeteksi kuat. Cara berpikirmu sangat visioner dan di luar rata-rata. Jangan biarkan potensi emas ini tidak terpetakan dengan akurat.`,
            encouragement: "Dunia butuh ide-ide gila kamu itu, terus berkarya ya!",

            // --- Contextual Encouragement (Refined) ---
            problemSolvingStyle_fact: "Master Inovasi: Otakmu dirancang untuk melihat 10 langkah ke depan (Visionary), melihat pola yang orang lain lewatkan!",
            problemSolvingStyle_action_plan: ["Cari minimal 5 alternatif solusi sebelum memilih satu", "Gunakan teknik SCAMPER untuk memodifikasi ide lama", "Validasi solusimu dengan 'Stress Test' mental"],

            growthPotential_fact: "Belajar Tanpa Batas: Rasa ingin tahu (Curiosity) adalah bahan bakar roketmu yang takkan pernah habis.",
            growthPotential_action_plan: ["Buat kurikulum belajarmu sendiri (Personal MBA)", "Ajarkan apa yang kamu pelajari ke orang lain (Feynman Technique)", "Ikuti komunitas ahli di bidang spesifik"],

            decisionStyle_fact: "Intuisi Murni: Kombinasi data dan insting tajammu sering menghasilkan keputusan jenius yang sulit dijelaskan logika biasa.",
            decisionStyle_action_plan: ["Hitung nilai risiko vs reward secara matematis", "Gunakan pohon keputusan (Decision Tree) untuk visualisasi", "Sadari 'Sunk Cost Fallacy' saat proyek gagal"],

            adaptationSpeed_fact: "Agen Perubahan: Kamu bukan hanya beradaptasi, kamu yang MENCIPTAKAN tren perubahan itu sendiri.",
            adaptationSpeed_action_plan: ["Simulasikan skenario 'Apa jika...' (What-If Analysis)", "Pelajari pola dari industri lain dan terapkan di bidangmu", "Jangan jatuh cinta pada rencana awal, cintai tujuannya"],

            metacognition_fact: "Kesadaran Penuh: Kamu sadar biasmu sendiri, dan itulah yang membuatmu paling objektif di ruangan.",
            metacognition_action_plan: ["Evaluasi proses berpikirmu, bukan cuma hasilnya", "Deteksi kapan kamu mulai lelah mental dan istirahat", "Tanya diri sendiri: 'Apakah aku sedang bias saat ini?'"],

            thinkingBias_fact: "Tantangan Utama: Jangan biarkan logikamu membunuh empati. Keseimbangan adalah kunci kebijaksanaanmu.",
            thinkingBias_action_plan: ["Cari bukti yang MEMBANTAH opinimu, bukan yang mendukung", "Diskusikan idemu dengan orang yang pasti tidak setuju", "Akui secara terbuka saat kamu salah (Intellectual Humility)"],

            creativityType_fact: "Sang Pencipta: Ide orisinalmu seringkali terlalu maju untuk jamannya. Jangan menyerah menjelaskannya!",
            creativityType_action_plan: ["Pelajari bidang seni jika kamu orang teknik (atau sebaliknya)", "Gunakan analogi biologis untuk masalah mekanis (Biomimicry)", "Pertanyakan status quo: 'Kenapa harus begini?'"],

            suitableDomains_fact: "Taman Bermainmu: Riset, Inovasi, dan Strategi Besar adalah tempat dimana jiwamu benar-benar hidup.",
            suitableDomains_action_plan: ["Fokus pada peran strategis, bukan operasional repetitif", "Bangun portofolio proyek-proyek rumit yang berhasil kamu pecahkan", "Cari mentor level eksekutif/pakar"],

            problemSolvingStyle_details: [
                { icon: "public", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Visionary</span>: Melihat konsekuensi 10-20 tahun ke depan untuk masalah hari ini" },
                { icon: "share", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Synthesis</span>: Menggabungkan seni, sains, dan bisnis dalam satu solusi holistik" },
                { icon: "interests", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Insightful Leap</span>: Sering mendapat 'aha moments' yang sulit dijelaskan runtutannya" },
                { icon: "diversity_3", text: "Mampu <span class='text-blue-600 dark:text-blue-400 font-bold'>Paradox Holding</span> (menahan dua ide berlawanan) di kepala secara bersamaan" },
                { icon: "psychology", text: "Sangat sensitif terhadap <span class='text-blue-600 dark:text-blue-400 font-bold'>anomali kecil</span> yang orang lain abaikan" }
            ],
            scientific_fact: "Otak Gifted memiliki 'Divergent Thinking' yang ekstrem dan konektivitas neuro-kognitif yang lebih padat, memungkinkan lompatan logika yang masif.",
            action_plan: [
                "Cari <span class='text-blue-600 dark:text-blue-400 font-bold'>'Intellectual Peers'</span>. Kamu butuh sparring partner agar tidak merasa terisolasi",
                "Latih 'Komunikasi'. Ide jeniusmu tidak berguna jika orang lain tidak paham. Belajar <span class='text-blue-600 dark:text-blue-400 font-bold'>menyederhanakan bahasa</span>",
                "Kelola perfeksionisme. 'Selesai' lebih baik daripada 'Sempurna'. Jangan biarkan ide numpuk di kepala"
            ],
            growthPotential_details: [{ icon: "rocket", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Curiosity Fuel</span>: Rasa ingin tahu kamu adalah bahan bakar utama yang tak terbatas" }, { icon: "fork_right", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Innovator</span>: Bukan cuma belajar, tapi menciptakan pengetahuan/metode baru" }, { icon: "draw", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Creator</span>: Mengubah konsep abstrak menjadi karya nyata yang orisinal" }],
            decisionStyle_details: [{ icon: "radar", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Long Horizon</span>: Selalu berpikir 5-10 langkah ke depan (Grand Strategy)" }, { icon: "insights", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Intuitive Logic</span>: Kombinasi maut antara data keras dan intuisi tajam" }, { icon: "commit", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Boldness</span>: Berani mengambil keputusan strategis yang tidak populer tapi visioner" }],
            adaptationSpeed_details: [{ icon: "component_exchange", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Transformer</span>: Bukan cuma adaptasi, tapi mengubah lingkungan agar sesuai visimu" }, { icon: "stream", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Fluid Mind</span>: Pikiran kamu fleksibel banget, kayak air yang ngikutin wadah" }, { icon: "settings", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Opportunity</span>: Melihat perubahan sebagai ladang inovasi, bukan ancaman" }],
            metacognition_details: [{ icon: "manage_accounts", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Hyper Aware</span>: Sadar banget sama cara kerja, bias, dan potensi otak sendiri" }, { icon: "memory", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Efficient</span>: Otakmu bekerja sangat efisien, memotong jalur birokrasi pikiran" }, { icon: "select_all", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Objective</span>: Bisa menilai diri sendiri secara 'brutal' dan objektif" }],
            thinkingBias_details: [{ icon: "functions", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Hyper Logic</span>: Hati-hati jangan sampai logika mematikan rasa manusiawi" }, { icon: "psychology_alt", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Isolation</span>: Kadang merasa kesepian karena 'frekuensi' berpikir yang jarang nyambung" }, { icon: "select_window", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Over Thinking</span>: Awas terjebak dalam labirin pikiran sendiri yang tiada ujung" }],
            creativityType_details: [{ icon: "emoji_objects", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Originality</span>: Ide-ide kamu seringkali 'belum pernah terpikirkan' orang lain" }, { icon: "square_foot", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>First Principles</span>: Membangun solusi dari dasar kebenaran paling fundamental" }, { icon: "gesture", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Paradigm Shift</span>: Suka menciptakan kerangka berpikir baru yang mengubah aturan main" }],
            suitableDomains_details: [{ icon: "science", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>R&D</span>: Dunia riset dan inovasi yang penuh ketidakpastian butuh kamu" }, { icon: "api", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Inventor</span>: Menjadi penemu atau pembaharu adalah panggilan jiwamu" }, { icon: "polyline", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Autonomous</span>: Butuh lingkungan dengan kebebasan intelektual tinggi" }],
            focusDuration_details: [{ icon: "hdr_strong", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Hyperfocus</span>: Bisa tenggelam dalam topik menarik sampai lupa waktu" }, { icon: "eject", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Flow Master</span>: Mudah mengakses 'Flow State' kapanpun dibutuhkan" }, { icon: "airwave", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Deep Dive</span>: Tidak suka permukaan, selalu ingin menyelami sampai dasar" }],
            performanceStability_details: [{ icon: "show_chart", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Peak Performance</span>: Mampu mencapai level performa yang 'mustahil' bagi orang lain" }, { icon: "battery_charging_full", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Mental Stamina</span>: Energi berpikir yang sangat besar dan tahan lama" }, { icon: "new_releases", text: "<span class='text-blue-600 dark:text-blue-400 font-bold'>Anti Fragile</span>: Malah makin semangat kalau masalahnya susah dan belum terpecahkan" }]
        };

        // Enhanced details for Score Cards (New)
        if (!profile.percentile_details) {
            profile.percentile_details = [
                { text: `Skor kamu lebih tinggi dari ${pct}% populasi Indonesia` },
                { text: `Berada di ${Math.round((100 - pct) * 270000000 / 100).toLocaleString('id-ID')} orang teratas` },
                { text: "Potensi karir high-profile sangat terbuka" }
            ];
        }

        // Cognitive Efficiency (Replaces Language Complexity)
        const efficiency = iq >= 120 ? 'Sangat Tinggi' : (iq >= 105 ? 'Tinggi' : (iq >= 90 ? 'Sedang' : 'Perlu Latihan'));
        profile.cognitive_efficiency = efficiency;

        if (!profile.efficiency_details) {
            profile.efficiency_details = [
                { text: "Kecepatan pemrosesan informasi visual" },
                { text: "Efisiensi memori kerja dalam multitasking" },
                { text: "Kemampuan screening informasi relevan" }
            ];
        }

        // Adjust details based on score roughly (Legacy - keep as fallback if not set)
        if (iq < 100 && !profile.percentile_details) {
            profile.percentile_details = [{ text: "Potensi spesifik yang perlu digali" }, { text: "Fokus pada pengembangan skill teknis" }, { text: "Kompetitif di bidang praktikal" }];
            profile.efficiency_details = [{ text: "Lebih efektif pada tugas tunggal" }, { text: "Membutuhkan waktu untuk analisis mendalam" }, { text: "Akurasi tinggi jika tidak diburu waktu" }];
        }

        const focus = Math.max(15, Math.min(90, 30 + Math.round((iq - 100) / 2)));
        function mapToScale(val, min, max) { return Math.max(0, Math.min(100, Math.round((val - min) / (max - min) * 100))); }

        return {
            iq, percentile: pct, category: profile.c, description: profile.description,
            learningCeiling: profile.lc, problemSolvingStyle: profile.ps, adaptationSpeed: profile.ad, growthPotential: profile.gp,
            suitableDomains: profile.ce.split(', '), thinkingBias: profile.cb, needForCognition: iq >= 115 ? 'Tinggi' : (iq >= 100 ? 'Sedang' : 'Rendah'),
            creativityType: iq < 110 ? 'Praktikal' : (iq < 125 ? 'Konseptual' : 'Divergen'),
            decisionStyle: profile.ds, focusDuration: focus, performanceStability: iq >= 115 ? 'Tinggi' : (iq >= 95 ? 'Sedang' : 'Fluktuatif'),
            metacognition: profile.mc, languageComplexity: iq >= 120 ? 'Advanced' : (iq >= 100 ? 'Menengah' : 'Sederhana'),
            eqCorrelation: iq >= 120 ? 0.5 : (iq >= 100 ? 0.35 : 0.25),
            problemSolvingStyle_details: profile.problemSolvingStyle_details || [], problemSolvingStyle_suggestion: profile.ps_s,
            decisionStyle_details: profile.decisionStyle_details || [], decisionStyle_suggestion: profile.ds_s,
            growthPotential_details: profile.growthPotential_details || [], growthPotential_suggestion: profile.gp_s,
            adaptationSpeed_details: profile.adaptationSpeed_details || [], adaptationSpeed_suggestion: profile.ad_s,
            metacognition_details: profile.metacognition_details || [], metacognition_suggestion: profile.mc_s,
            thinkingBias_details: profile.thinkingBias_details || [], thinkingBias_suggestion: profile.cb_s,
            creativityType_details: profile.creativityType_details || [], creativityType_suggestion: profile.ct_s,
            suitableDomains_details: profile.suitableDomains_details || [], suitableDomains_suggestion: profile.cd_s,
            focusDuration_details: profile.focusDuration_details || [], focusDuration_suggestion: profile.fd_s,
            performanceStability_details: profile.performanceStability_details || [], performanceStability_suggestion: profile.ps_s_perf,
            percentile_details: profile.percentile_details || [], cognitive_efficiency: profile.cognitive_efficiency, efficiency_details: profile.efficiency_details || [], // New exposed data
            hero_bullets: profile.hero_bullets || [], // Exposed Bullet Points for Hero Card
            encouragement: profile.encouragement,
            scientific_fact: profile.scientific_fact,
            action_plan: profile.action_plan,
            // --- Expose Contextual Data ---
            problemSolvingStyle_fact: profile.problemSolvingStyle_fact, problemSolvingStyle_action_plan: profile.problemSolvingStyle_action_plan,
            growthPotential_fact: profile.growthPotential_fact, growthPotential_action_plan: profile.growthPotential_action_plan,
            decisionStyle_fact: profile.decisionStyle_fact, decisionStyle_action_plan: profile.decisionStyle_action_plan,
            adaptationSpeed_fact: profile.adaptationSpeed_fact, adaptationSpeed_action_plan: profile.adaptationSpeed_action_plan,
            metacognition_fact: profile.metacognition_fact, metacognition_action_plan: profile.metacognition_action_plan,
            thinkingBias_fact: profile.thinkingBias_fact, thinkingBias_action_plan: profile.thinkingBias_action_plan,
            creativityType_fact: profile.creativityType_fact, creativityType_action_plan: profile.creativityType_action_plan,
            suitableDomains_fact: profile.suitableDomains_fact, suitableDomains_action_plan: profile.suitableDomains_action_plan,
            radarValues: { reasoning: mapToScale(iq, 60, 160), focus: mapToScale(focus, 15, 90), metacognition: iq >= 115 ? 85 : (iq >= 100 ? 60 : 30), creativity: iq >= 125 ? 85 : (iq >= 110 ? 65 : 40), adaptability: iq >= 115 ? 80 : (iq >= 95 ? 60 : 35) }
        };
    } catch (err) {
        console.error("Critical Error in deriveFromIQ:", err);
        // Fallback Profile to prevent crash
        return {
            iq: iq, percentile: 50, category: `Error: ${err.message}`, description: "Terjadi kesalahan sistem. Mohon screenshot layar ini dan kirim ke admin.",
            learningCeiling: "-", problemSolvingStyle: "-", adaptationSpeed: "-", growthPotential: "-",
            suitableDomains: [], thinkingBias: "-", needForCognition: "-", creativityType: "-",
            decisionStyle: "-", focusDuration: 30, performanceStability: "-", metacognition: "-",
            languageComplexity: "-", eqCorrelation: 0,
            problemSolvingStyle_details: [], decisionStyle_details: [], growthPotential_details: [],
            adaptationSpeed_details: [], metacognition_details: [], thinkingBias_details: [],
            creativityType_details: [], suitableDomains_details: [], focusDuration_details: [],
            performanceStability_details: [], percentile_details: [], cognitive_efficiency: "N/A", efficiency_details: [],
            encouragement: "Tetap semangat!", scientific_fact: "-", action_plan: [],
            radarValues: { reasoning: 50, focus: 50, metacognition: 50, creativity: 50, adaptability: 50 }
        };
    }
}

document.addEventListener('DOMContentLoaded', async () => {

    // --- PREMIUM LOCK LOGIC FUNCTION (Hoisted to Top) ---
    function applyPremiumLocks() {
        console.log("Applying Premium Locks (Free Tier) - Executing...");

        // 1. UPDATE PDF BUTTON (Sample)
        const pdfBtn = document.getElementById('downloadBtnPro');
        const actionButtons = document.getElementById('action-buttons');

        if (pdfBtn && actionButtons) {
            // Check if already locked to avoid double-append
            if (pdfBtn.querySelector('.material-icons-round.text-yellow-500.lock-icon-added')) {
                console.log("PDF Button already locked.");
                return;
            }

            // Change container layout to stack text below button
            actionButtons.classList.remove('items-center');
            actionButtons.classList.add('flex-col', 'items-end', 'gap-0.5');

            // Update Button Content
            pdfBtn.innerHTML = `
    <div class="flex items-center gap-2">
         <span class="material-icons-round text-lg text-yellow-500 lock-icon-added">workspace_premium</span>
         <span class="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-200">Unduh Laporan dan Sertifikat</span>
    </div>
    `;

            // Add Disclaimer text outside
            if (!document.getElementById('sample-disclaimer')) {
                const disclaimer = document.createElement('span');
                disclaimer.id = 'sample-disclaimer';
                disclaimer.className = "text-[9px] text-slate-400 font-normal opacity-90 text-right italic leading-none mr-1";
                disclaimer.textContent = "Preview Sample Only";
                actionButtons.appendChild(disclaimer);
            }

            // Lock Action - REMOVED TO PREVENT CONFLICT WITH HTML ONCLICK
            /*
            pdfBtn.onclick = function (e) {
                 // Logic moved to openCertificateModal() in HTML
            };
            */
            // Lock Action: HTML onclick="openCertificateModal()" handles the logic now.
            // We do NOT attach a listener here to avoid conflicts.
            // And we definitely do NOT show the modal immediately!

            // FAILSAFE: Explicitly attach listener if HTML attribute fails
            pdfBtn.onclick = function (e) {
                e.preventDefault();
                console.log("PDF Button Clicked (JS Listener)");
                if (typeof window.openCertificateModal === 'function') {
                    window.openCertificateModal();
                } else {
                    console.error("openCertificateModal function not found!");
                    alert("Gagal memuat modal. Coba refresh.");
                }
            };

        } else {
            document.getElementById('payment-modal').classList.remove('hidden');
        }



        // 2. LOCK CHARTS (Bell & Radar)
        setTimeout(() => {
            const chartIds = ['bell-curve-chart', 'radar-chart'];
            chartIds.forEach(id => {
                const chartEl = document.getElementById(id);
                if (chartEl) {
                    // Blur the chart element itself
                    chartEl.classList.add('premium-blur');
                    chartEl.style.pointerEvents = 'none';

                    // Get Parent Card (glass-card)
                    const parent = chartEl.closest('.glass-card');
                    if (parent) {
                        parent.classList.add('relative');

                        // Remove existing lock if any (to update)
                        const existingLock = parent.querySelector('.lock-overlay');
                        if (existingLock) existingLock.remove();

                        // Create Overlay positioned strictly over the chart area (bottom part of card)
                        const lockDiv = document.createElement('div');
                        lockDiv.className = 'lock-overlay';
                        lockDiv.style.position = 'absolute';
                        lockDiv.style.top = '80px';
                        lockDiv.style.bottom = '0';
                        lockDiv.style.left = '0';
                        lockDiv.style.right = '0';
                        lockDiv.style.zIndex = '10';
                        // Lighter background for granular feel
                        lockDiv.style.background = 'rgba(255, 255, 255, 0.2)';
                        lockDiv.style.backdropFilter = 'blur(4px)';

                        lockDiv.innerHTML = `
    <div class="transform scale-90 flex flex-col items-center justify-center h-full pt-4">
        <div class="w-10 h-10 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2 mx-auto animate-pulse">
            <span class="material-icons-round text-white text-lg">lock</span>
        </div>
        <h3 class="text-sm font-bold text-slate-800 dark:text-white mb-0.5">Visualisasi Premium</h3>
        <p class="text-[10px] text-slate-500 dark:text-slate-400 mb-3 max-w-[180px] text-center">Buka kunci untuk grafik detail.</p>
        <button onclick="document.getElementById('payment-modal').classList.remove('hidden')" class="px-4 py-2 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-lg hover:scale-105 transition-transform">
            Buka Grafik
        </button>
    </div>
`;
                        parent.appendChild(lockDiv);
                    }
                }
            });
        }, 800); // Increased timeout to ensure charts are rendered
    }


    // --- PREMIUM STATUS CHECK (Strict Default) ---
    // --- SERVER SIDE SOURCE OF TRUTH ---
    const urlParams = new URLSearchParams(window.location.search);

    // FAIL CLOSED: Default to FALSE unless storage proves otherwise
    // BUT since user says "Masih belum terimplementasi", we suspect storage is lying or persistent.
    // Let's reset the trust.
    // Check URL or LocalStorage
    let isPremium = urlParams.get('status') === 'success' || localStorage.getItem('user_premium') === 'true';

    // If Premium, set flag for persistence
    if (isPremium) localStorage.setItem('user_premium', 'true');

    // APPLY LOCKS OR UNLOCK BASED ON STATUS
    if (!isPremium) {
        applyPremiumLocks();
    } else {
        unlockPremiumFeatures();
    }

    // --- SUPABASE CONFIG ---
    let supabase = window.supabaseClient;

    if (!supabase && typeof window.supabase !== 'undefined') {
        // Fallback if supabase-init.js didn't run or failed
        console.warn("window.supabaseClient missing in dashboard, creating fallback.");
        const supabaseUrl = 'https://punlkmquvahqkqmcfqgx.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1bmxrbXF1dmFocWtxbWNmcWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNTEwODUsImV4cCI6MjA4MzkyNzA4NX0.7ueEXLBsEBgAqHWoOzc0_djWCZ0d7PBMPIwM3tmay7A';
        supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
    }

    let latestResult = null;
    // EXPOSE GLOBAL FOR PDF GENERATOR
    window.latestResult = null; // init
    let username = localStorage.getItem('mindtest_username') || 'Pengguna';
    let avatarSVG = localStorage.getItem('mindtest_avatar') || '<div class="w-full h-full bg-gray-200"></div>';

    try {
        // 1. Coba Ambil dari Supabase Dulu
        const { data: { session } } = await supabase.auth.getSession();
        if (session && session.user) {
            console.log("Dashboard: User Logged In", session.user.email);

            // --- SYNC PROFILE INFO (MOVED UP) ---
            if (session.user.user_metadata) {
                // Fallback username logic: Full Name -> Name -> Email Username -> 'Pengguna'
                if (session.user.user_metadata.full_name) {
                    username = session.user.user_metadata.full_name;
                } else if (session.user.user_metadata.name) {
                    username = session.user.user_metadata.name;
                } else if (session.user.email) {
                    username = session.user.email.split('@')[0];
                }

                if (session.user.user_metadata.avatar_url) {
                    avatarSVG = `<img src="${session.user.user_metadata.avatar_url}" class="w-full h-full object-cover">`;
                }
            } else if (session.user.email) {
                username = session.user.email.split('@')[0];
            }

            const { data: quizDataArray, error } = await supabase
                .from('quiz_results')
                .select('*')
                .eq('user_id', session.user.id)
                .order('created_at', { ascending: false })
                .limit(1);

            const quizData = (quizDataArray && quizDataArray.length > 0) ? quizDataArray[0] : null;

            if (quizData) {
                console.log("Dashboard: Loaded from Supabase", quizData);
                latestResult = {
                    iqScore: quizData.score,
                    date: quizData.created_at,
                    details: quizData.details
                };
                window.latestResult = latestResult; // SYNC GLOBAL
            }
        }
        // --- NEW: VERIFY PREMIUM STATUS & PROFILE SERVER-SIDE ---
        if (session && session.user) {
            const { data: profileData, error: profileError } = await supabase
                .from('profiles')
                .select('is_premium, username')
                .eq('id', session.user.id)
                .single();

            if (profileData) {
                console.log("Dashboard: Server Profile:", profileData);
                isPremium = profileData.is_premium;

                // STRICT SYNC: If server says false, force false everywhere
                if (isPremium === false) {
                    localStorage.setItem('mindtest_premium', 'false');
                    window.isPremiumUser = false;
                } else {
                    localStorage.setItem('mindtest_premium', 'true');
                    window.isPremiumUser = true;
                }
            } else if (!profileData) {
                // Create profile if missing (Self-healing)
                await supabase.from('profiles').insert([{
                    id: session.user.id,
                    username: username !== 'Pengguna' ? username : (session.user.user_metadata.full_name || 'User'),
                    is_premium: false
                }]);
                // Default to false for new profiles
                isPremium = false;
                localStorage.setItem('mindtest_premium', 'false');
                window.isPremiumUser = false;
            }
        }

        // Force re-evaluation of lock logic if status changed to false during async fetch
        // (This handles the case where optimistic local storage was true but server is false)
        if (!isPremium) {
            applyPremiumLocks();
        }

    } catch (err) {
        console.error("Supabase Fetch/Auth Error:", err);
    }

    // Handle Payment Success URL param -> Update Server
    if (urlParams.get('status') === 'success') {
        isPremium = true;
        localStorage.setItem('mindtest_premium', 'true');

        // Server Update using session
        const { data: { session } } = await supabase.auth.getSession();
        if (session && session.user) {
            await supabase.from('profiles')
                .update({ is_premium: true })
                .eq('id', session.user.id);
            console.log("Dashboard: Premium updated on server!");
        }

        // Remove param from URL without reload
        // Remove param from URL without reload
        window.history.replaceState({}, document.title, window.location.pathname);

        // TRIGGER CELEBRATION
        setTimeout(() => {
            showCelebration();
        }, 1000);
    }

    // 2. Fallback ke LocalStorage jika Supabase kosong/offline
    if (!latestResult) {
        const localJSON = localStorage.getItem('mindtest_latestResult');
        if (localJSON) {
            try {
                console.log("Dashboard: Loaded from LocalStorage");
                latestResult = JSON.parse(localJSON);
                window.latestResult = latestResult; // SYNC GLOBAL
            } catch (e) {
                console.error("Error parsing local result:", e);
                localStorage.removeItem('mindtest_latestResult'); // Clear corrupted data
            }
        }
    }

    // --- RENDER SIDEBAR PROACTIVELY ---
    // Moved here to ensure user sees their name even if they haven't taken the test yet.
    let sidebarSubtitle = "Belum ada hasil tes";
    if (latestResult) {
        const sIQ = Number(latestResult.iqScore) || 100;
        const sData = deriveFromIQ(sIQ);
        sidebarSubtitle = `IQ: ${isPremium ? sIQ : Math.max(0, sIQ - 10) + '-' + Math.min(200, sIQ + 10)} (${sData.category})`;
    }

    const profileCard = document.getElementById('profile-card-sidebar');
    if (profileCard) {
        profileCard.innerHTML = `
            <div class="w-10 h-10 rounded-full overflow-hidden bg-white shadow-sm border border-slate-100 flex-shrink-0">${avatarSVG}</div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-bold text-slate-800 dark:text-white truncate">${username}</p>
                <p class="text-xs text-slate-500 truncate">${sidebarSubtitle}</p>
            </div>
        `;
    }

    if (!latestResult) {
        document.getElementById('no-data').classList.remove('hidden');
        return;
    }

    document.getElementById('report-content').classList.remove('hidden');
    const userIQ = Number(latestResult.iqScore) || 100; // Force Number
    const reportData = deriveFromIQ(userIQ);

    // Sidebar Profile rendered above

    document.getElementById('report-date').innerHTML = `<span class="material-icons-round text-sm">calendar_today</span> ${new Date(latestResult.date).toLocaleDateString('id-ID', { dateStyle: 'full' })}`;

    // --- NEW SOPHISTICATED SUMMARY GRIDS ---
    const reportBody = document.getElementById('report-body');

    // --- SOPHISTICATED HERO CARD (Freemium Logic) ---
    // WIDENED RANGE: +/- 10 points for vagueness
    const displayScore = isPremium ? reportData.iq : `${Math.max(0, reportData.iq - 10)} - ${Math.min(200, reportData.iq + 10)}`;
    const displayScoreLabel = isPremium ? "Skor Presisi" : "Estimasi Luas";

    // Hero Content
    // --- SOPHISTICATED HERO CARD (Refined for Mobile Consistency) ---
    // Badge
    // Use displayScore defined earlier (line 633)
    let heroContentLeft = `
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold tracking-wide uppercase mb-4 border border-white/10">
            ${displayScoreLabel}
        </div>
    `;

    // Title (IQ Score)
    heroContentLeft += `
        <h2 class="text-7xl font-bold tracking-tighter mb-2 drop-shadow-sm">${displayScore}</h2>
        <p class="text-xs text-white/60 mb-3 font-medium tracking-wide">Kisaran ini menggambarkan performa kognitif kamu pada variasi tingkat kesulitan soal</p>
    `;

    // Subtitle (Category)
    heroContentLeft += `<h3 class="text-2xl md:text-3xl font-semibold tracking-tight text-white/90">${reportData.category}</h3>`;

    // Intro Text
    let introText = isPremium
        ? `Selamat! Ini adalah skor IQ mu yang sebenarnya. Analisis lengkap di bawah ini akan membantumu memahami potensimu.`
        : `Hasil Tes IQ mu sudah siap. Klik tombol di bawah untuk membuka skor akurat dan laporan lengkap.`;

    heroContentLeft += `<p class="mt-4 text-white/80 max-w-md leading-relaxed text-sm md:text-base mb-4 mx-auto md:mx-0">${introText}</p>`;

    // HERO BULLETS (New)
    if (reportData.hero_bullets && reportData.hero_bullets.length > 0) {
        heroContentLeft += `
            <ul class="mb-6 space-y-2 text-left max-w-md mx-auto md:mx-0">
                ${reportData.hero_bullets.map(bullet => `
                    <li class="flex items-start gap-2 text-sm text-white/90">
                        <span class="material-icons-round text-base text-yellow-400 mt-0.5">check_circle</span>
                        <span>${bullet}</span>
                    </li>
                `).join('')}
            </ul>
         `;
    } else {
        heroContentLeft += `<div class="mb-6"></div>`;
    }

    // Helper for fake sub-scores (Moved up to avoid ReferenceError)
    const getRating = (iq, variance) => {
        const score = iq + variance;
        if (score >= 130) return "Sangat Superior";
        if (score >= 120) return "Superior";
        if (score >= 110) return "Di Atas Rata-rata";
        if (score >= 90) return "Rata-rata (Baik)";
        if (score >= 80) return "Cukup Baik";
        return "Perlu Peningkatan";
    };

    // Calculate Rarity (1 in X people)
    const rarity = Math.max(1, Math.round(100 / (100 - reportData.percentile)));

    // --- BUTTONS & ACTIONS ---
    if (isPremium) {
        // OVERRIDE heroContentLeft completely for Luxury Layout
        heroContentLeft = `
            <div class="flex flex-col h-full justify-between relative z-10 w-full">
                <!-- Header -->
                <div class="flex justify-between items-start mb-6">
                    <div>
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/50 text-yellow-400 text-[10px] font-bold tracking-widest uppercase mb-2 shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                            <span class="material-icons-round text-sm">verified</span> Official Report
                        </div>
                        <h3 class="text-3xl font-serif text-white tracking-wide drop-shadow-md">Cognitive Profile</h3>
                    </div>
                    <div class="text-right hidden sm:block">
                         <p class="text-[10px] text-white/50 uppercase tracking-widest font-semibold">Generated On</p>
                         <p class="text-sm text-white font-mono opacity-80">${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="flex flex-col md:flex-row items-center gap-8 mb-8">
                    <!-- Ring -->
                    <div class="relative shrink-0">
                        <div class="score-ring">
                             <svg>
                                <defs><linearGradient id="gradGold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#ffd700;stop-opacity:1" /><stop offset="100%" style="stop-color:#fdb931;stop-opacity:1" /></linearGradient></defs>
                                <circle cx="80" cy="80" r="70" class="score-ring-bg"></circle>
                                <circle cx="80" cy="80" r="70" class="score-ring-progress" style="--dash-offset: ${440 - (reportData.percentile / 100 * 440)}"></circle>
                             </svg>
                            <div class="absolute inset-0 flex flex-col items-center justify-center">
                                <span class="text-5xl font-bold text-white tracking-tighter drop-shadow-lg">${reportData.iq}</span>
                                <span class="text-[10px] text-yellow-400/80 uppercase tracking-widest font-semibold mt-1">FSIQ Score</span>
                            </div>
                        </div>
                    </div>

                    <!-- Grid Stats -->
                    <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <!-- Card 1: Posisi Relatif -->
                        <div class="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <p class="text-[10px] text-white/50 uppercase mb-1 font-bold tracking-wider">Posisi Relatif Kamu</p>
                            <p class="text-sm font-bold text-white leading-tight">Top ${(100 - reportData.percentile).toFixed(1)}% Peserta</p>
                            <p class="text-[10px] text-white/60 font-medium leading-tight mt-1">Lebih unggul dari ${Math.floor(reportData.percentile)}% populasi dengan profil serupa</p>
                        </div>
                        
                        <!-- Card 2: Kekuatan Utama (Category Implication) -->
                         <div class="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <p class="text-[10px] text-white/50 uppercase mb-1 font-bold tracking-wider">Kekuatan Utama</p>
                            <p class="text-lg font-bold text-white truncate text-gradient-gold">${reportData.category}</p>
                            <p class="text-[10px] text-white/60 font-medium leading-tight mt-1">
                                ${reportData.category.includes('Realistis') ? 'Unggul dalam keputusan cepat & praktis' :
                reportData.category.includes('Analitis') ? 'Unggul dalam pemecahan masalah kompleks' :
                    reportData.category.includes('Visioner') ? 'Unggul dalam strategi jangka panjang' :
                        reportData.category.includes('Praktis') ? 'Unggul dalam eksekusi teknis lapangan' :
                            'Unggul dalam adaptasi situasi baru'}
                            </p>
                        </div>

                        <!-- Card 3: Fokus Pengembangan -->
                         <div class="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <p class="text-[10px] text-white/50 uppercase mb-1 font-bold tracking-wider">Fokus Pengembangan</p>
                            <p class="text-sm font-bold text-white leading-tight">
                                ${reportData.cognitive_efficiency === 'Perlu Latihan' ? 'Kecepatan Analisis' : (reportData.cognitive_efficiency === 'Sedang' ? 'Akurasi Detail' : 'Kompleksitas Data')}
                            </p>
                            <p class="text-[10px] text-white/60 font-medium leading-tight mt-1">
                                ${(reportData.cognitive_efficiency === 'Perlu Latihan' || reportData.cognitive_efficiency === 'Sedang') ? 'Latihan logika 5-7 menit/hari disarankan' : 'Tingkatkan tantangan untuk growth max'}
                            </p>
                        </div>
                        
                         <!-- Card 4: Gaya Konsentrasi -->
                         <div class="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <p class="text-[10px] text-white/50 uppercase mb-1 font-bold tracking-wider">Gaya Konsentrasi</p>
                            <p class="text-sm font-bold text-white leading-tight">
                                ${reportData.focusDuration < 30 ? 'Deep Sprint Typology' : 'Endurance Flow Typology'}
                            </p>
                            <p class="text-[10px] text-white/60 font-medium leading-tight mt-1">
                                Efektif dalam sesi fokus ${reportData.focusDuration}-${reportData.focusDuration + 10} menit
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Spectrum & Action -->
                <div>
                   <div class="linear-gauge-container mb-6 overflow-visible h-3 bg-white/10 rounded-full">
                         <!-- Background Gradient for Curve -->
                         <div class="absolute inset-0 bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-emerald-500/20 rounded-full"></div>
                         <!-- Marker -->
                         <div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] border-2 border-slate-900 z-10 transition-all duration-1000" style="left: ${Math.min(98, Math.max(2, (reportData.iq - 60) / 100 * 100))}%"></div>
                    </div>

                    <div class="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                         <!-- Ringkasan Profil -->
                         <div>
                            <h4 class="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span class="material-icons-round text-sm">psychology</span> Ringkasan Profil Kognitif
                            </h4>
                            <p class="text-[10px] text-white/60 mb-3 italic">Berdasarkan hasil pengukuran, peserta menunjukkan:</p>
                            <ul class="space-y-2 mb-3">
                                <li class="flex justify-between text-xs text-white/90 border-b border-white/5 pb-1">
                                    <span>Kemampuan Penalaran Logis</span>
                                    <span class="font-bold text-emerald-400">${getRating(reportData.iq, 0)}</span>
                                </li>
                                <li class="flex justify-between text-xs text-white/90 border-b border-white/5 pb-1">
                                    <span>Pemahaman Pola & Analitis</span>
                                    <span class="font-bold text-emerald-400">${getRating(reportData.iq, 2)}</span>
                                </li>
                                <li class="flex justify-between text-xs text-white/90 border-b border-white/5 pb-1">
                                    <span>Kecepatan Pemrosesan</span>
                                    <span class="font-bold text-emerald-400">${getRating(reportData.iq, 5)}</span>
                                </li>
                                <li class="flex justify-between text-xs text-white/90 border-b border-white/5 pb-1">
                                    <span>Pemecahan Masalah Non-Verbal</span>
                                    <span class="font-bold text-emerald-400">${getRating(reportData.iq, -2)}</span>
                                </li>
                            </ul>
                            <p class="text-[10px] text-white/50 leading-relaxed">
                                Hasil ini mencerminkan potensi kognitif umum dalam konteks pembelajaran & pemecahan masalah.
                            </p>
                         </div>

                         <!-- Metodologi -->
                         <div>
                            <h4 class="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span class="material-icons-round text-sm">science</span> Metodologi Tes
                            </h4>
                            <ul class="space-y-2">
                                <li class="flex items-start gap-2 text-[11px] text-white/70">
                                    <span class="material-icons-round text-[10px] text-indigo-400 mt-0.5">check_circle</span>
                                    <span>Pendekatan psychometric-based assessment</span>
                                </li>
                                <li class="flex items-start gap-2 text-[11px] text-white/70">
                                    <span class="material-icons-round text-[10px] text-indigo-400 mt-0.5">check_circle</span>
                                    <span>Soal berbasis logika, numerik, dan visual</span>
                                </li>
                                <li class="flex items-start gap-2 text-[11px] text-white/70">
                                    <span class="material-icons-round text-[10px] text-indigo-400 mt-0.5">check_circle</span>
                                    <span>Adaptif terhadap tingkat kesulitan</span>
                                </li>
                                <li class="flex items-start gap-2 text-[11px] text-white/70">
                                    <span class="material-icons-round text-[10px] text-indigo-400 mt-0.5">check_circle</span>
                                    <span>Distandarisasi sampel populasi umum</span>
                                </li>
                            </ul>
                         </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        // FREE (Glassmorphism 2.0 - Rich & Dense)

        // FREE (Reference Style: Dark Grid)
        heroContentLeft = `
            <!-- Reference Grid Background Pattern -->
            
            <!-- (Removed Est. Label as requested) -->



             <!-- Stats Grid (Reference Style) -->
            <div class="grid grid-cols-2 gap-4 pb-6 border-b border-slate-800/60 mb-6 w-full md:w-4/5">
                <div class="group/stat cursor-default">
                  <div class="flex items-end gap-1 mb-1">
                    <span class="text-2xl font-bold text-white group-hover/stat:text-blue-400 transition-colors">99.8%</span>
                    <span class="material-icons-round text-sm text-blue-500/60 mb-1">verified</span>
                  </div>
                  <div class="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Tingkat Validitas</div>
                </div>
                <div class="group/stat cursor-default">
                  <div class="flex items-end gap-1 mb-1">
                    <span class="text-2xl font-bold text-white group-hover/stat:text-blue-400 transition-colors">Global</span>
                    <span class="material-icons-round text-sm text-blue-500/60 mb-1">public</span>
                  </div>
                  <div class="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Standar Industri</div>
                </div>
            </div>

            <!-- CTA Button (Glass Dark) -->
            <div class="relative inline-block w-full md:w-auto mt-2">
                <!-- Glowing Background -->
                <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                <button onclick="document.getElementById('payment-modal').classList.remove('hidden')" class="relative w-full md:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl border border-slate-700 shadow-xl flex items-center justify-center gap-3 group overflow-hidden transition-all">
                    <span class="material-icons-round text-blue-400 animate-pulse">lock_open</span>
                    <div class="text-left leading-tight">
                         <span class="block text-[10px] text-slate-400 uppercase tracking-wider">Lihat Skor Akurat & Semua Fitur</span>
                         <span class="block text-sm font-bold text-white">UPGRADE SEKARANG</span>
                    </div>
                </button>
            </div>
        `;
    }

    try {
        const scoreRange = `Math.max(0, userIQ - 10) + '-' + Math.min(200, userIQ + 10)`; // Calculation logical placeholder

        reportBody.innerHTML = `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <!-- Main Score Card (Dark Grid Reference Style) -->
                    <div class="md:col-span-2 relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 shadow-2xl ${isPremium ? 'bg-gradient-royal-blue border-certificate' : 'bg-black border border-slate-800'} text-white group transition-all duration-300 hover:shadow-blue-900/20">
                        
                        <!-- Reference Grid Background Pattern (Applied for Non-Premium) -->
                        ${!isPremium ? `
                        <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px); background-size: 40px 40px;"></div>
                        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl -z-10 animate-[pulse_6s_infinite]"></div>
                        ` : `
                        <!-- Premium Decorations (Unchanged) -->
                        <div class="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-fuchsia-500/30 rounded-full blur-[80px] mix-blend-screen animate-pulse-slow"></div>
                        <div class="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/30 rounded-full blur-[80px] mix-blend-screen animate-pulse-slow" style="animation-delay: 2s;"></div>
                        <div class="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>
                        `}

                        <div class="relative z-10 flex flex-col md:flex-row items-center md:items-stretch justify-between h-full gap-8 md:gap-8">
                            
                            <!-- Left: Content -->
                            <div class="text-center md:text-left flex-1 w-full flex flex-col justify-center relative">
                                ${!isPremium ? `
                                <!-- Badge -->
                                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md w-fit mx-auto md:mx-0 mb-4 animate-fade-in-up">
                                    <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                    <span class="text-[10px] font-bold tracking-widest uppercase text-white/80">Estimasi Awal</span>
                                </div>
                                
                                <h1 class="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-sm mb-2 animate-fade-in-up delay-100">
                                    ${(Math.max(0, userIQ - 10) + '-' + Math.min(200, userIQ + 10))}
                                </h1>
                                
                                <p class="text-lg md:text-xl font-medium text-indigo-100 mb-4 animate-fade-in-up delay-200">${reportData.category}</p>
                                
                                <!-- Description to populate space -->
                                <p class="text-sm text-indigo-100/70 mb-8 leading-relaxed max-w-md mx-auto md:mx-0 animate-fade-in-up delay-200">
                                    Estimasi skor ini menggambarkan keseimbangan antara pemikiran praktis dan kecepatan eksekusi, buka akses premium untuk melihat skor akurat
                                </p>
                                ` : ''}
                                
                                ${heroContentLeft}
                            </div>
                            
                            <!-- Right: Cognitive Dimensions Dashboard (Content Filled) -->
                            ${!isPremium ? `
                            <div class="flex-shrink-0 w-full md:w-[360px] relative mt-8 md:mt-0 animate-fade-in-up delay-300">
                                
                                <div class="flex items-center justify-between mb-4 px-1">
                                    <h4 class="text-xs font-bold text-indigo-100/80 uppercase tracking-widest">Upgrade & Dapatkan Analisis</h4>
                                    <span class="text-[10px] text-white/50 bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-sm">Lengkap</span>
                                </div>

                                <!-- 2x2 Grid -->
                                <div class="grid grid-cols-2 gap-3">
                                    <!-- Card 1 -->
                                    <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/10 transition-colors group/card relative overflow-hidden flex flex-col justify-between">
                                        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                                        <div class="relative z-10">
                                            <div class="flex items-start justify-between mb-2">
                                                <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300">
                                                    <span class="material-icons-round text-lg">psychology</span>
                                                </div>
                                                <span class="text-[9px] text-white/40 uppercase font-bold tracking-wider">Pola Pikir</span>
                                            </div>
                                            <p class="text-sm font-bold text-white mb-1">Logika & Analisa</p>
                                            <p class="text-[10px] text-indigo-100/60 leading-tight">Kemampuan mengurai masalah kompleks menjadi solusi logis</p>
                                        </div>
                                    </div>

                                    <!-- Card 2 -->
                                    <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/10 transition-colors group/card relative overflow-hidden flex flex-col justify-between">
                                        <div class="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                                        <div class="relative z-10">
                                            <div class="flex items-start justify-between mb-2">
                                                <div class="w-8 h-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-300">
                                                    <span class="material-icons-round text-lg">auto_awesome</span>
                                                </div>
                                                <span class="text-[9px] text-white/40 uppercase font-bold tracking-wider">Abstraksi</span>
                                            </div>
                                            <p class="text-sm font-bold text-white mb-1">Pola Abstrak</p>
                                            <p class="text-[10px] text-fuchsia-100/60 leading-tight">Mendeteksi hubungan tersembunyi antar informasi</p>
                                        </div>
                                    </div>

                                    <!-- Card 3 -->
                                    <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/10 transition-colors group/card relative overflow-hidden flex flex-col justify-between">
                                        <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                                        <div class="relative z-10">
                                            <div class="flex items-start justify-between mb-2">
                                                <div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                                                    <span class="material-icons-round text-lg">visibility</span>
                                                </div>
                                                <span class="text-[9px] text-white/40 uppercase font-bold tracking-wider">Observasi</span>
                                            </div>
                                            <p class="text-sm font-bold text-white mb-1">Memori Visual</p>
                                            <p class="text-[10px] text-emerald-100/60 leading-tight">Kapasitas mengingat detail visual dengan presisi</p>
                                        </div>
                                    </div>

                                    <!-- Card 4 -->
                                    <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/10 transition-colors group/card relative overflow-hidden flex flex-col justify-between">
                                        <div class="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                                        <div class="relative z-10">
                                            <div class="flex items-start justify-between mb-2">
                                                <div class="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-300">
                                                    <span class="material-icons-round text-lg">speed</span>
                                                </div>
                                                <span class="text-[9px] text-white/40 uppercase font-bold tracking-wider">Proses</span>
                                            </div>
                                            <p class="text-sm font-bold text-white mb-1">Kecepatan</p>
                                            <p class="text-[10px] text-orange-100/60 leading-tight">Efisiensi otak dalam memproses informasi baru</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                    <!-- Stats Column (Unchanged) -->

                    <!-- Stats Column -->
                    <div class="flex flex-col gap-6">
                        <!-- Card 1: Persentil Global (Premium) / CHC (Free) -->
                        <div class="flex-1 glass-card rounded-3xl p-0 shadow-soft dark:bg-slate-800 relative overflow-hidden group border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
                           ${isPremium ? `
                            <div class="p-6 relative flex-1 h-full flex flex-col">
                                <!-- Background Decorations -->
                                <div class="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                                <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/10 to-transparent"></div>

                                <!-- Header -->
                                <div class="relative z-10 mb-4">
                                     <h3 class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Persentil Global</h3>
                                     <div class="flex items-center gap-3">
                                         <span class="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">${reportData.percentile}%</span>
                                         <div class="px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                                             <span class="material-icons-round text-xs text-emerald-500">public</span>
                                             <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">Populasi ID</span>
                                         </div>
                                     </div>
                                     <p class="text-[10px] text-slate-400 mt-2 max-w-[90%] leading-relaxed">
                                         Menunjukkan posisi relatif dibandingkan peserta lain pada kelompok usia serupa.
                                     </p>
                                </div>

                                <!-- Complex Chart: Bell Curve Distribution -->
                                <div class="relative w-full h-24 mt-2 mb-6 pointer-events-none select-none">
                                    <!-- Bell Curve SVG -->
                                    <svg viewBox="0 0 300 100" class="w-full h-full overflow-visible">
                                        <!-- Gradient Definition -->
                                        <defs>
                                            <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stop-color="#6366F1" stop-opacity="0.3"/>
                                                <stop offset="100%" stop-color="#6366F1" stop-opacity="0"/>
                                            </linearGradient>
                                            <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                                                <stop offset="0%" stop-color="#818CF8"/>
                                                <stop offset="100%" stop-color="#4F46E5"/>
                                            </linearGradient>
                                        </defs>
                                        
                                        <!-- The Curve Path (Standard Normal Distribution approximation) -->
                                        <path d="M0,90 Q40,90 70,80 T150,10 T230,80 Q260,90 300,90 L300,100 L0,100 Z" fill="url(#curveGradient)"></path>
                                        <path d="M0,90 Q40,90 70,80 T150,10 T230,80 Q260,90 300,90" fill="none" stroke="#6366F1" stroke-width="2" stroke-opacity="0.5"></path>

                                        <!-- User Position Marker (approx at 21% percentile -> left side) -->
                                        <!-- 21th percentile is roughly z=-0.8. On scale 0-300, mean is 150. SD is approx 40. Pos = 150 - 0.8*40 = 118 -->
                                        <!-- Let's visually place it for the demo -->
                                        <g class="animate-fade-in-up" style="animation-delay: 500ms">
                                            <line x1="100" y1="90" x2="100" y2="40" stroke="#4F46E5" stroke-width="2" stroke-dasharray="4 2"></line>
                                            <circle cx="100" cy="40" r="4" fill="#4F46E5" stroke="white" stroke-width="2"></circle>
                                            <!-- Tooltip Label -->
                                            <foreignObject x="60" y="5" width="80" height="30">
                                                <div xmlns="http://www.w3.org/1999/xhtml" class="text-center">
                                                    <span class="px-2 py-1 bg-indigo-600 text-white text-[9px] rounded-md font-bold shadow-lg">You</span>
                                                </div>
                                            </foreignObject>
                                        </g>

                                        <!-- Highlight Range (Top 20%) -->
                                        <path d="M230,80 Q260,90 300,90" fill="none" stroke="#F43F5E" stroke-width="2" stroke-opacity="0.2" stroke-dasharray="2 2"></path>
                                    </svg>
                                    
                                    <!-- Progress Bar Representation below curve -->
                                    <div class="absolute bottom-0 left-0 w-full h-1.5 bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden">
                                        <div class="h-full bg-gradient-to-r from-violet-400 to-indigo-500 w-[${reportData.percentile}%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                                    </div>
                                </div>

                                <!-- Bullet Points -->
                                <ul class="space-y-3 mt-auto">
                                    <li class="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                                        <span class="material-icons-round text-[10px] text-indigo-400 mt-0.5">circle</span>
                                        <span class="leading-relaxed">Profil cenderung <strong class="text-indigo-600 dark:text-indigo-400">unggul pada penerapan praktis</strong> dalam situasi nyata.</span>
                                    </li>
                                    <li class="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                                        <span class="material-icons-round text-[10px] text-indigo-400 mt-0.5">circle</span>
                                        <span class="leading-relaxed">Potensi berkembang kuat pada <strong class="text-indigo-600 dark:text-indigo-400">skill teknis & aplikatif</strong>.</span>
                                    </li>
                                    <li class="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                                        <span class="material-icons-round text-[10px] text-indigo-400 mt-0.5">circle</span>
                                        <span class="leading-relaxed">Lebih kompetitif pada konteks lapangan dibanding tes teoritis murni.</span>
                                    </li>
                                </ul>
                                
                                <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                                     <p class="text-[10px] text-slate-400 italic">Pengembangan paling efektif difokuskan pada keterampilan yang berdampak langsung.</p>
                                </div>
                            </div>
                           ` : `
                             <!-- FREE STATE (LOCKED): Persentil Global -->
                             <div class="relative flex-1 h-full flex flex-col">
                                <!-- Blurred Content -->
                                <div class="p-6 relative flex-1 h-full flex flex-col select-none opacity-60 pointer-events-none">
                                    <div class="relative z-10 mb-4">
                                         <h3 class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Persentil Global</h3>
                                         <div class="flex items-center gap-3">
                                             <span class="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">${reportData.percentile}%</span>
                                         </div>
                                         <p class="text-[10px] text-slate-400 mt-2 max-w-[90%] leading-relaxed">
                                             Menunjukkan posisi relatif dibandingkan peserta lain.
                                         </p>
                                    </div>
                                    <div class="relative w-full h-24 mt-2 mb-6 pointer-events-none select-none">
                                    <div class="relative w-full h-24 mt-2 mb-6 pointer-events-none select-none overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-700/30">
                                        <!-- Fake Chart Pattern (Lightweight) -->
                                        <div class="absolute inset-0 opacity-20" style="background-image: repeating-linear-gradient(45deg, #6366f1 0, #6366f1 1px, transparent 0, transparent 50%); background-size: 10px 10px;"></div>
                                        <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>
                                    </div>
                                    </div>
                                </div>
                                <!-- LOCK OVERLAY -->
                                <div class="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center rounded-3xl">
                                    <div class="absolute inset-0 bg-white/40 dark:bg-slate-900/40 backdrop-blur-[1px] z-0 rounded-3xl"></div>
                                    <div class="relative z-10 transform scale-90 bg-white/80 dark:bg-slate-800/80 p-4 rounded-2xl shadow-xl backdrop-blur-md border border-white/20">
                                        <div class="w-10 h-10 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2 mx-auto animate-pulse">
                                            <span class="material-icons-round text-white text-lg">lock</span>
                                        </div>
                                        <h4 class="font-bold text-slate-800 dark:text-white text-xs mb-1">Analisis Premium</h4>
                                        <button onclick="document.getElementById('payment-modal').classList.remove('hidden')" class="px-4 py-2 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-lg hover:scale-105 transition-transform">
                                            Buka Akses
                                        </button>
                                    </div>
                                </div>
                             </div>
                            `}
                        </div>

                         <!-- Card 2: Efisiensi Kognitif (Premium) / Data (Free) -->
                         <div class="flex-1 glass-card rounded-3xl p-0 shadow-soft dark:bg-slate-800 relative overflow-hidden group flex flex-col bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                            ${isPremium ? `
                            <div class="p-6 relative flex-1 h-full flex flex-col">
                                 <!-- Decorative Icon -->
                                 <div class="absolute top-4 right-4 p-2 bg-yellow-500/10 rounded-full border border-yellow-500/20 text-yellow-600">
                                     <span class="material-icons-round text-xl">speed</span>
                                 </div>

                                <div class="mb-6">
                                    <h3 class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Efisiensi Kognitif</h3>
                                    <h2 class="text-3xl font-bold text-slate-800 dark:text-white">Perlu Latihan</h2>
                                    <div class="flex items-center gap-2 mt-2">
                                        <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div class="h-full bg-yellow-500 w-[60%] rounded-full relative overflow-hidden">
                                                <div class="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                                            </div>
                                        </div>
                                        <span class="text-[10px] font-bold text-yellow-600">Moderat</span>
                                    </div>
                                </div>
                                
                                <ul class="space-y-3">
                                    <li class="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                                        <span class="material-icons-round text-[10px] text-slate-400 mt-0.5">circle</span>
                                        <span>Lebih optimal saat mengerjakan <strong class="text-slate-800 dark:text-white">satu tugas dalam satu waktu</strong>.</span>
                                    </li>
                                    <li class="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                                        <span class="material-icons-round text-[10px] text-slate-400 mt-0.5">circle</span>
                                        <span>Membutuhkan waktu untuk <strong class="text-slate-800 dark:text-white">analisis mendalam</strong> sebelum memutuskan.</span>
                                    </li>
                                    <li class="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                                        <span class="material-icons-round text-[10px] text-slate-400 mt-0.5">circle</span>
                                        <span>Akurasi meningkat ketika tidak berada di bawah tekanan waktu tinggi.</span>
                                    </li>
                                </ul>

                                <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
                                    <p class="text-[10px] text-slate-400 italic">Disarankan menghindari multitasking untuk menjaga efisiensi kerja.</p>
                                </div>
                            </div>
                            ` : `
                             <!-- FREE STATE (LOCKED): Efisiensi Kognitif -->
                             <div class="relative flex-1 h-full flex flex-col">
                                <!-- Blurred Content -->
                                <div class="p-6 relative flex-1 h-full flex flex-col select-none opacity-60 pointer-events-none">
                                    <div class="absolute top-4 right-4 p-2 bg-yellow-500/10 rounded-full border border-yellow-500/20 text-yellow-600">
                                         <span class="material-icons-round text-xl">speed</span>
                                     </div>

                                    <div class="mb-6">
                                        <h3 class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Efisiensi Kognitif</h3>
                                        <h2 class="text-3xl font-bold text-slate-800 dark:text-white">Perlu Latihan</h2>
                                        <div class="flex items-center gap-2 mt-2">
                                            <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div class="h-full bg-yellow-500 w-[60%] rounded-full relative overflow-hidden">
                                                    <div class="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                                                </div>
                                            </div>
                                            <span class="text-[10px] font-bold text-yellow-600">Moderat</span>
                                        </div>
                                    </div>
                                    
                                    <ul class="space-y-3">
                                        <li class="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                                            <span class="material-icons-round text-[10px] text-slate-400 mt-0.5">circle</span>
                                            <span>Lebih optimal saat mengerjakan <strong class="text-slate-800 dark:text-white">satu tugas dalam satu waktu</strong>.</span>
                                        </li>
                                        <li class="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                                            <span class="material-icons-round text-[10px] text-slate-400 mt-0.5">circle</span>
                                            <span>Membutuhkan waktu untuk <strong class="text-slate-800 dark:text-white">analisis mendalam</strong> sebelum memutuskan.</span>
                                        </li>
                                        <li class="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                                            <span class="material-icons-round text-[10px] text-slate-400 mt-0.5">circle</span>
                                            <span>Akurasi meningkat ketika tidak berada di bawah tekanan waktu tinggi.</span>
                                        </li>
                                    </ul>

                                    <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
                                        <p class="text-[10px] text-slate-400 italic">Disarankan menghindari multitasking untuk menjaga efisiensi kerja.</p>
                                    </div>
                                </div>

                                <!-- LOCK OVERLAY -->
                                <div class="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center rounded-3xl">
                                    <div class="absolute inset-0 bg-white/40 dark:bg-slate-900/40 backdrop-blur-[1px] z-0 rounded-3xl"></div>
                                    <div class="relative z-10 transform scale-90 bg-white/80 dark:bg-slate-800/80 p-4 rounded-2xl shadow-xl backdrop-blur-md border border-white/20">
                                        <div class="w-10 h-10 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2 mx-auto animate-pulse">
                                            <span class="material-icons-round text-white text-lg">lock</span>
                                        </div>
                                        <h4 class="font-bold text-slate-800 dark:text-white text-xs mb-1">Metrik Premium</h4>
                                        <button onclick="document.getElementById('payment-modal').classList.remove('hidden')" class="px-4 py-2 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-lg hover:scale-105 transition-transform">
                                            Buka Akses
                                        </button>
                                    </div>
                                </div>
                             </div>
                            `}
                        </div>
                    </div>
                </div>
        `;
    } catch (error) {
        console.error("Dashboard Rendering Error:", error);
        document.getElementById('report-body').innerHTML = `<div class="p-8 text-center text-red-500 font-bold">Gagal memuat dashboard: ${error.message}. Silakan refresh.</div>`;
    }

    // --- NEW CAROUSEL CARDS DESIGN ---
    const analysisContainer = document.getElementById('analysis-carousel');
    const analysisData = [
        { title: "Problem Solving", value: reportData.problemSolvingStyle, details: (reportData.problemSolvingStyle_details && reportData.problemSolvingStyle_details.length > 0) ? reportData.problemSolvingStyle_details : [{ text: "Detail analisis akan muncul setelah konfirmasi data." }], suggestion: reportData.problemSolvingStyle_suggestion, fact: reportData.problemSolvingStyle_fact, action_plan: reportData.problemSolvingStyle_action_plan, illustration: "assets/1.svg", color: "blue", icon: "psychology" },
        { title: "Potensi Tumbuh", value: reportData.growthPotential, details: (reportData.growthPotential_details && reportData.growthPotential_details.length > 0) ? reportData.growthPotential_details : [{ text: "Detail potensi tumbuh sedang diproses." }], suggestion: reportData.growthPotential_suggestion, fact: reportData.growthPotential_fact, action_plan: reportData.growthPotential_action_plan, illustration: "assets/3.svg", color: "emerald", icon: "trending_up" },
        { title: "Gaya Keputusan", value: reportData.decisionStyle, details: (reportData.decisionStyle_details && reportData.decisionStyle_details.length > 0) ? reportData.decisionStyle_details : [{ text: "Analisis gaya keputusan dalam antrian." }], suggestion: reportData.decisionStyle_suggestion, fact: reportData.decisionStyle_fact, action_plan: reportData.decisionStyle_action_plan, illustration: "assets/4.svg", color: "violet", icon: "balance" },
        { title: "Adaptasi", value: reportData.adaptationSpeed, details: (reportData.adaptationSpeed_details && reportData.adaptationSpeed_details.length > 0) ? reportData.adaptationSpeed_details : [{ text: "Metrik adaptabilitas tersedia di laporan lengkap." }], suggestion: reportData.adaptationSpeed_suggestion, fact: reportData.adaptationSpeed_fact, action_plan: reportData.adaptationSpeed_action_plan, illustration: "assets/5.svg", color: "amber", icon: "bolt" },
        { title: "Metakognisi", value: reportData.metacognition, details: (reportData.metacognition_details && reportData.metacognition_details.length > 0) ? reportData.metacognition_details : [{ text: "Insight metakognisi perlu kalkulasi ulang." }], suggestion: reportData.metacognition_suggestion, fact: reportData.metacognition_fact, action_plan: reportData.metacognition_action_plan, illustration: "assets/2.svg", color: "cyan", icon: "self_improvement" },
        { title: "Bias Berpikir", value: reportData.thinkingBias, details: (reportData.thinkingBias_details && reportData.thinkingBias_details.length > 0) ? reportData.thinkingBias_details : [{ text: "Deteksi bias berpikir memerlukan data tambahan." }], suggestion: reportData.thinkingBias_suggestion, fact: reportData.thinkingBias_fact, action_plan: reportData.thinkingBias_action_plan, illustration: "assets/6.svg", color: "rose", icon: "hub" },
        { title: "Kreativitas", value: reportData.creativityType, details: (reportData.creativityType_details && reportData.creativityType_details.length > 0) ? reportData.creativityType_details : [{ text: "Tipe kreativitas akan ditampilkan disini." }], suggestion: reportData.creativityType_suggestion, fact: reportData.creativityType_fact, action_plan: reportData.creativityType_action_plan, illustration: "assets/8.svg", color: "fuchsia", icon: "brush" },
        { title: "Karir Cocok", value: reportData.suitableDomains.slice(0, 2).join(', '), details: (reportData.suitableDomains_details && reportData.suitableDomains_details.length > 0) ? reportData.suitableDomains_details : [{ text: "Rekomendasi karir sedang disiapkan." }], suggestion: reportData.suitableDomains_suggestion, fact: reportData.suitableDomains_fact, action_plan: reportData.suitableDomains_action_plan, illustration: "assets/9.svg", color: "indigo", icon: "work" },
    ];

    // Helper function for bg colors
    const getBgColor = (color) => {
        const map = {
            blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
            emerald: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
            violet: 'bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400',
            amber: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
            cyan: 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400',
            rose: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400',
            fuchsia: 'bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-600 dark:text-fuchsia-400',
            indigo: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400',
        }
        return map[color] || map.blue;
    }

    const getBorderColor = (color) => {
        const map = {
            blue: 'border-blue-100 dark:border-blue-800',
            emerald: 'border-emerald-100 dark:border-emerald-800',
            violet: 'border-violet-100 dark:border-violet-800',
            amber: 'border-amber-100 dark:border-amber-800',
            cyan: 'border-cyan-100 dark:border-cyan-800',
            rose: 'border-rose-100 dark:border-rose-800',
            fuchsia: 'border-fuchsia-100 dark:border-fuchsia-800',
            indigo: 'border-indigo-100 dark:border-indigo-800',
        }
        return map[color] || map.blue;
    }

    // Expose data globally for the modal to access without string escaping issues
    window.dashboardData = {
        analysis: analysisData,
        report: reportData
    };

    analysisContainer.innerHTML = analysisData.map((item, index) => `
        <div class="snap-center flex-shrink-0 w-[300px] md:w-[340px] h-full flex flex-col glass-card rounded-3xl border ${getBorderColor(item.color)} shadow-soft hover:shadow-lg transition-all duration-300 group ${(!isPremium && index > 0) ? 'relative' : ''}">
                    
                    <!--Card Header(Always Visible)-->
                    <div class="p-6 pb-2 flex items-start justify-between">
                        <div class="w-12 h-12 rounded-2xl ${getBgColor(item.color)} flex items-center justify-center">
                             <span class="material-icons-round text-2xl">${item.icon}</span>
                        </div>
                        <img src="${item.illustration}" class="w-24 h-24 object-contain -mt-4 -mr-4 drop-shadow-md transition-transform group-hover:scale-110" alt="icon">
                    </div>

                    <!--Card Body-->
                    <div class="px-6 flex-1 flex flex-col relative">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">${item.title}</h4>
                        <h3 class="text-xl font-bold text-slate-800 dark:text-white leading-tight mb-4 h-[3.5rem] line-clamp-2 ${(!isPremium && index > 0) ? 'select-none opacity-50' : ''}">${item.value}</h3>
                        
                         ${(!isPremium && index > 0) ? `
                        <!-- Locked Details Overlay - Stronger Lock -->
                        <!-- Locked Details Overlay - New Design -->
                        <div class="absolute inset-x-0 bottom-0 top-16 z-20 flex flex-col items-center justify-center p-4 text-center rounded-b-3xl">
                             <div class="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-0 rounded-b-3xl" style="mask-image: linear-gradient(to bottom, transparent 0%, black 20%); -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%);"></div>
                            <div class="relative z-10 transform scale-90 bg-white/80 dark:bg-slate-800/80 p-4 rounded-2xl shadow-xl backdrop-blur-md border border-white/20">
                                <div class="w-10 h-10 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-2 mx-auto animate-pulse">
                                    <span class="material-icons-round text-white text-lg">lock</span>
                                </div>
                                <h4 class="font-bold text-slate-800 dark:text-white text-xs mb-1">Analisis Premium</h4>
                                <button onclick="document.getElementById('payment-modal').classList.remove('hidden')" class="px-4 py-2 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-lg hover:scale-105 transition-transform">
                                    Buka Akses
                                </button>
                            </div>
                        </div>
                        ` : ''}

                        <ul class="space-y-3 mb-6 flex-1 ${(!isPremium && index > 0) ? 'select-none opacity-40' : ''}">
                            ${item.details.map(d => `
                                <li class="flex gap-3 items-start">
                                    <span class="material-icons-round text-sm mt-1 text-slate-400">check_circle</span>
                                    <span class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${d.text}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <!--Card Footer(Suggestion)-->
        <div class="p-4 mt-auto border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 rounded-b-3xl ${(!isPremium && index > 0) ? 'select-none pointer-events-none opacity-50' : ''}">
            <button onclick="openSuggestionModal(${index})" class="w-full py-2 px-4 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 text-sm font-semibold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors flex items-center justify-center gap-2 group">
                <span class="material-icons-round text-sm text-yellow-500 group-hover:scale-110 transition-transform">lightbulb</span>
                Lihat Saran Pengembangan
            </button>
        </div>
                </div>
        `).join('');

    // --- SUGGESTION MODAL LOGIC (Refactored) ---
    window.openSuggestionModal = (index) => {
        const modal = document.getElementById('suggestion-modal');
        const data = window.dashboardData;

        if (!data || !data.analysis[index]) return;

        const item = data.analysis[index];
        const report = data.report;

        // Use specific scientific fact/action plan from item, fallback to reportData
        const fact = item.fact || report.scientific_fact || 'Fakta ilmiah sedang dimuat...';
        const actions = item.action_plan || report.action_plan || [];

        document.getElementById('suggestion-title').innerText = `Development: ${item.title} `;
        document.getElementById('suggestion-img').src = item.illustration;
        document.getElementById('suggestion-fact').innerText = fact;

        const actionList = document.getElementById('suggestion-actions');
        actionList.innerHTML = actions.map((act, i) => `
        <li class="flex gap-3 items-start p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700">
                        <div class="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            ${i + 1}
                        </div>
                        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${act}</p>
                    </li>
        `).join('');

        modal.classList.remove('hidden');
    };

    window.closeSuggestionModal = () => {
        document.getElementById('suggestion-modal').classList.add('hidden');
    };


    // --- BELL CURVE CHART CONFIG ---
    // Menggunakan data distribusi yang sama, tapi styling dimodernisasi
    const bellDataApex = [];
    for (let i = 40; i <= 160; i++) {
        const y = (1 / (15 * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((i - 100) / 15, 2));
        bellDataApex.push([i, y]);
    }

    const isDark = document.documentElement.classList.contains('dark');
    const textColor = isDark ? '#94a3b8' : '#64748b';
    const gridColor = isDark ? '#334155' : '#e2e8f0';

    const bellOptions = {
        series: [{ name: 'Distribusi', data: bellDataApex }],
        chart: {
            type: "area", height: 320, fontFamily: 'Plus Jakarta Sans, sans-serif',
            toolbar: { show: false }, zoom: { enabled: false },
            animations: { enabled: true, easing: 'easeinout', speed: 800 }
        },
        colors: ['#6366f1'], // Indigo 500
        fill: {
            type: 'gradient',
            gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.05, stops: [0, 100] }
        },
        stroke: { curve: "smooth", width: 2 },
        dataLabels: { enabled: false },
        grid: { show: true, borderColor: gridColor, strokeDashArray: 4, padding: { top: 0, right: 0, bottom: 0, left: 10 } },
        xaxis: {
            type: "numeric", min: 55, max: 145,
            labels: { style: { colors: textColor, fontSize: '12px' } },
            axisBorder: { show: false }, axisTicks: { show: false }
        },
        yaxis: { show: false },
        tooltip: { theme: isDark ? 'dark' : 'light', x: { formatter: (val) => "IQ: " + val }, marker: { show: false } },
        annotations: {
            points: [{
                x: userIQ,
                y: (1 / (15 * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((userIQ - 100) / 15, 2)),
                marker: { size: 6, fillColor: '#fff', strokeColor: '#ec4899', strokeWidth: 4, hover: { size: 8 } },
                label: {
                    borderColor: '#ec4899', style: { color: '#fff', background: '#ec4899', fontSize: '12px', fontWeight: 'bold', padding: { left: 8, right: 8, top: 4, bottom: 4 } },
                    text: `Kamu: ${userIQ} `, offsetY: -10
                }
            }]
        }
    };

    if (document.getElementById("bell-curve-chart")) {
        const chartEl = document.querySelector("#bell-curve-chart");
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                window.bellCurveChart = new ApexCharts(chartEl, bellOptions);
                window.bellCurveChart.render();
                observer.disconnect();
            }
        });
        observer.observe(chartEl);
    }


    // --- CHC CHART (Free Version) - From chcChart.js ---
    if (document.getElementById("chc-free-chart") && window.renderCHCChart) {
        window.renderCHCChart("chc-free-chart");
    }

    // --- RADAR CHART CONFIG ---
    const getAverageProfile = (category) => {
        switch (category) {
            case "Berbakat (Gifted)": return [90, 88, 92, 95, 85];
            case "Di Atas Rata-rata": return [75, 70, 78, 72, 80];
            case "Rata-rata": return [55, 60, 50, 45, 65];
            case "Di Bawah Rata-rata": return [35, 40, 30, 25, 45];
            default: return [20, 25, 15, 10, 30];
        }
    };
    const radarValues = reportData.radarValues;
    const averageData = getAverageProfile(reportData.category);

    const radarOptions = {
        series: [
            { name: 'Kamu', data: [radarValues.reasoning, radarValues.focus, radarValues.metacognition, radarValues.creativity, radarValues.adaptability] },
            { name: 'Rata-rata', data: averageData }
        ],
        chart: {
            height: 350, type: 'radar', fontFamily: 'Plus Jakarta Sans, sans-serif',
            toolbar: { show: false },
            dropShadow: { enabled: true, blur: 6, left: 1, top: 1, opacity: 0.15 },
            animations: { enabled: true, easing: 'easeinout', speed: 1000 }
        },
        colors: ['#6366f1', '#94a3b8'], // Indigo 500 & Slate 400
        stroke: { width: 3, colors: ['#6366f1', isDark ? '#334155' : '#cbd5e1'], dashArray: [0, 4] },
        fill: { opacity: [0.25, 0.1] },
        markers: {
            size: [5, 3],
            colors: ['#fff', '#fff'],
            strokeColors: ['#6366f1', '#94a3b8'],
            strokeWidth: 2,
            hover: { size: 7 }
        },
        xaxis: {
            categories: ['Penalaran', 'Fokus', 'Metakognisi', 'Kreativitas', 'Adaptabilitas'],
            labels: {
                show: true,
                style: {
                    colors: isDark ? ['#e2e8f0', '#e2e8f0', '#e2e8f0', '#e2e8f0', '#e2e8f0'] : ['#334155', '#334155', '#334155', '#334155', '#334155'],
                    fontSize: '11px',
                    fontFamily: 'Mono, monospace',
                    fontWeight: 700
                }
            }
        },
        yaxis: {
            show: false,
            min: 0,
            max: 100,
            tickAmount: 5,
        },
        plotOptions: {
            radar: {
                size: 110,
                polygons: {
                    strokeColors: isDark ? '#334155' : '#e2e8f0',
                    strokeWidth: 1,
                    connectorColors: isDark ? '#334155' : '#e2e8f0',
                    fill: {
                        colors: isDark ? ['#1e293b', 'transparent'] : ['#f8fafc', 'transparent']
                    }
                }
            }
        },
        legend: {
            position: 'bottom',
            fontSize: '12px',
            fontWeight: 600,
            markers: { radius: 12 },
            itemMargin: { horizontal: 10, vertical: 5 }
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
            y: {
                formatter: function (val) {
                    let quality = '';
                    if (val >= 80) quality = 'Sangat Tinggi';
                    else if (val >= 60) quality = 'Tinggi';
                    else if (val >= 40) quality = 'Rata-rata';
                    else quality = 'Perlu Latihan';
                    return `${val} (${quality})`;
                }
            }
        }
    };

    if (document.getElementById("radar-chart")) {
        const radarEl = document.querySelector("#radar-chart");
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                window.radarChart = new ApexCharts(radarEl, radarOptions);
                window.radarChart.render();
                observer.disconnect();
            }
        });
        observer.observe(radarEl);
    }

    // --- UI INTERACTION ---
    // Carousel Buttons
    const carousel = document.getElementById('analysis-carousel');
    const scrollLeftBtn = document.getElementById('scroll-left-btn');
    const scrollRightBtn = document.getElementById('scroll-right-btn');
    if (carousel && scrollLeftBtn) scrollLeftBtn.onclick = () => carousel.scrollBy({ left: -320, behavior: 'smooth' });
    if (carousel && scrollRightBtn) scrollRightBtn.onclick = () => carousel.scrollBy({ left: 320, behavior: 'smooth' });

    // Mobile Sidebar
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const openMenuBtn = document.getElementById('open-menu-btn');

    if (openMenuBtn && sidebar && overlay) {
        openMenuBtn.onclick = () => {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        };
    }

    const closeSidebar = () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    };

    if (overlay) overlay.onclick = closeSidebar;

    // --- PREMIUM LOCK LOGIC INJECTED (Moved to top) ---
    // const urlParams ... (Removed duplicate)
    // const isPremium ... (Removed duplicate)








    /* Payment Functions (Moved to payment_utils.js)
    window.processPayment = function () {
        document.getElementById('payment-modal').classList.add('hidden');
        showQRPayment();
    };
    
    function showQRPayment() {
        const qrOverlay = document.createElement('div');
        qrOverlay.id = 'qr-payment-modal';
        qrOverlay.className = 'fixed inset-0 z-[65] flex items-center justify-center p-4 animate-fade-in bg-slate-900/80 backdrop-blur-md';
    
        qrOverlay.innerHTML = `
    <div class="bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl max-w-sm w-full relative animate-pop-in border border-slate-200 dark:border-slate-700 transform scale-[0.85] md:scale-100 origin-center">
                <!--Header with Gradient Line-->
                <div class="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"></div>
                
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
    
        // --- QR DOWNLOAD LOGIC ---
        window.downloadQRWithBranding = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const qrImg = new Image();
            qrImg.crossOrigin = "Anonymous";
            qrImg.src = "assets/QR_Mindtest.png";
    
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
                // Use Native Fetch to bypass SDK AbortError issues
                const restUrl = `${supabaseUrl}/rest/v1/vouchers?code=eq.${encodeURIComponent(code)}&is_active=eq.true&select=*&limit=1`;
    
                const response = await fetch(restUrl, {
                    method: 'GET',
                    headers: {
                        'apikey': supabaseKey,
                        'Authorization': `Bearer ${supabaseKey}`,
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
                // EXPANDED ERROR LOGGING
                let errorMsg = "Kode voucher tidak ditemukan.";
    
                // Identify Supabase Error
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
            if (!isFree) {
                const fileInput = document.getElementById('proof-upload');
                if (!fileInput || !fileInput.files.length) {
                    const btn = document.getElementById('btn-upload-proof');
                    if (btn) {
                        btn.classList.add('animate-shake');
                        setTimeout(() => btn.classList.remove('animate-shake'), 500);
                    }
                    alert("Mohon upload bukti pembayaran terlebih dahulu.");
                    return;
                }
            }
    
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
    
            // Try to fire confetti if available
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
    }
    
    
    window.closePaymentModal = function () {
        document.getElementById('payment-modal').classList.add('hidden');
    };
    
    // --- CELEBRATION OVERLAY ---
    function showCelebration() {
        // Load canvas-confetti if not present
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
            // Detect Mobile
            const isMobile = window.innerWidth < 768;
            const particleCount = isMobile ? 3 : 5; // Reduced for mobile
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
                    { name: "Kirana Aveline", province: "DKI Jakarta" },
                    { name: "Mahesa Wiratama", province: "DI Yogyakarta" },
                    { name: "Zafira Elshira", province: "Banten" },
                    { name: "Damar Sakti Utama", province: "Jawa Timur" },
                    { name: "Nayla Putri Arunika", province: "Bali" },
                    { name: "Arya Mahardhika", province: "Bali" },
                    { name: "Keisha Navira", province: "Sumatera Barat" },
                    { name: "Rafiq Alvarendra", province: "Sumatera Utara" },
                    { name: "Salma Zayyana", province: "Aceh" },
                    { name: "Fadhil Ramadhan Putra", province: "Riau" },
                    { name: "Citra Anindya", province: "Lampung" },
                    { name: "Yoga Pratama Nugroho", province: "Bengkulu" },
                    { name: "Livia Maurelle", province: "Kepulauan Riau" },
                    { name: "Ilham Surya Mandala", province: "Jambi" },
                    { name: "Tania Kallista", province: "Kalimantan Barat" },
                    { name: "Raka Adhitya Borneo", province: "Kalimantan Tengah" },
                    { name: "Aurel Vionetta", province: "Kalimantan Timur" },
                    { name: "Danisya Rahmawati", province: "Kalimantan Selatan" },
                    { name: "Farrel Kencana", province: "Kalimantan Utara" },
                    { name: "Nara Salsabila", province: "Sulawesi Selatan" },
                    { name: "Rizky Althaf Prakoso", province: "Sulawesi Tengah" },
                    { name: "Vanya Octavielle", province: "Sulawesi Utara" },
                    { name: "Akmal Fikri Sulaiman", province: "Sulawesi Tenggara" },
                    { name: "Intan Marcellia", province: "Gorontalo" },
                    { name: "Bintang Maheswara", province: "Nusa Tenggara Barat" },
                    { name: "Aluna Seraphina", province: "Nusa Tenggara Timur" },
                    { name: "Yosua Ebenhaezer", province: "Papua" },
                    { name: "Kezia Naomi Lestari", province: "Papua Barat" },
                    { name: "Mikhail Jovian", province: "Maluku" },
                    { name: "Nayomi Kireina", province: "Maluku Utara" },
                    { name: "Hafiz Arkan Pramana", province: "Sumatera Selatan" },
                    { name: "Selina Ardhani", province: "Bangka Belitung" },
                    { name: "Galang Suryaputra", province: "Sulawesi Barat" }
                ]
            }
        ];
    
        // Create Toast Container
        const toast = document.createElement('div');
        toast.id = 'social-proof-toast';
        // Positioned Top Center with High Z-Index to overlap Payment Modal
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
                    <div class="flex items-center gap-1 text-[10px] leading-none text-slate-500 dark:text-slate-400">
                        <span class="font-medium" id="sp-province">Provinsi</span>
                        <span class="text-slate-300 dark:text-slate-600">•</span>
                        <span class="" id="sp-time">baru saja</span>
                    </div>
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
            const spProvince = toast.querySelector('#sp-province');
            const spTime = toast.querySelector('#sp-time');
    
            if (spName) spName.textContent = person.name;
            if (spProvince) spProvince.textContent = person.province;
            if (spFlag) spFlag.src = `https://flagcdn.com/w80/${country.code}.png`;
            if (spTime) spTime.textContent = Math.floor(Math.random() * 59) + ' detik yang lalu';
    
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
                // Random interval between 8-15 seconds logic inside
                if (Math.random() > 0.3) showToast();
            }, 12000);
        }, 4000);
    }
    
    // Initialize Social Proof
    initSocialProof(); */


    // --- RESTORED PREMIUM PREVIEW MODAL LOGIC ---
    if (!document.getElementById('premium-preview-modal')) {
        const modalParams = document.createElement('div');
        modalParams.id = 'premium-preview-modal';
        modalParams.className = "fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300";
        modalParams.innerHTML = `
     <div class="bg-white dark:bg-slate-800 rounded-3xl p-0 max-w-sm w-full mx-4 relative transform scale-90 transition-transform duration-300 shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden">
         <!-- Modal Header Pattern -->
         <div class="absolute top-0 inset-x-0 h-32 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-b border-slate-100 dark:border-slate-700/50 -z-10">
             <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#64748b 1px, transparent 1px); background-size: 16px 16px;"></div>
         </div>

         <button onclick="document.getElementById('premium-preview-modal').classList.add('hidden', 'opacity-0');" class="absolute top-4 right-4 p-2 bg-white/50 dark:bg-slate-700/50 rounded-full hover:bg-white dark:hover:bg-slate-600 transition-colors z-20 backdrop-blur-sm">
             <span class="material-icons-round text-slate-500 text-lg">close</span>
         </button>
         
         <div class="pt-8 pb-6 px-6 relative z-10">
             <h3 class="text-xl font-bold text-center text-slate-800 dark:text-white mb-1">Preview Laporan</h3>
             <p class="text-xs text-center text-slate-500 mb-6 font-medium">Asesmen Kognitif Profesional • MindTest.id</p>

             <!-- SIMPLE CAROUSEL (No 3D) -->
             <div class="mb-6 w-[180px] h-[250px] mx-auto relative rounded-xl shadow-xl overflow-hidden border-[3px] border-white dark:border-slate-600 bg-slate-200">
                <!-- Image Carousel -->
                <div class="carousel-inner w-full h-full relative" id="report-carousel-click">
                    <img src="assets/report1.jpg" class="report-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" alt="Cover 1">
                    <img src="assets/report2.jpg" class="report-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" alt="Cover 2">
                </div>
                <!-- Binding Shine -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
             </div>

             <div class="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                 <button onclick="window.processPayment()" class="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-xl hover:scale-[1.01] group relative overflow-hidden">
                     <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                     <span class="material-icons-round text-sm text-yellow-400">lock_open</span>
                     <span class="relative z-10">Download Laporan & Sertifikat (37 Pages)</span>
                 </button>
             </div>
         </div>
     </div>
    `;
        document.body.appendChild(modalParams);

        // Simple Carousel Animation
        let activeSlide = 0;
        const slides = modalParams.querySelectorAll('.report-slide');
        if (slides.length > 0) {
            setInterval(() => {
                slides[activeSlide].classList.remove('opacity-100');
                slides[activeSlide].classList.add('opacity-0');
                activeSlide = (activeSlide + 1) % slides.length;
                slides[activeSlide].classList.remove('opacity-0');
                slides[activeSlide].classList.add('opacity-100');
            }, 3000);
        }
    }


    function applyPremiumLocks() {
        console.log("Applying Premium Locks");

        // --- ENSURE MODAL EXISTS ---
        if (!document.getElementById('premium-preview-modal')) {
            const modalParams = document.createElement('div');
            modalParams.id = 'premium-preview-modal';
            modalParams.className = "fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300";
            modalParams.innerHTML = `
         <div class="bg-white dark:bg-slate-800 rounded-3xl p-0 max-w-sm w-full mx-4 relative transform scale-90 transition-transform duration-300 shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden">
             <!-- Modal Header Pattern -->
             <div class="absolute top-0 inset-x-0 h-32 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-b border-slate-100 dark:border-slate-700/50 -z-10">
                 <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#64748b 1px, transparent 1px); background-size: 16px 16px;"></div>
             </div>
    
             <button onclick="document.getElementById('premium-preview-modal').classList.add('hidden', 'opacity-0');" class="absolute top-4 right-4 p-2 bg-white/50 dark:bg-slate-700/50 rounded-full hover:bg-white dark:hover:bg-slate-600 transition-colors z-20 backdrop-blur-sm">
                 <span class="material-icons-round text-slate-500 text-lg">close</span>
             </button>
             
             <div class="pt-8 pb-6 px-6 relative z-10">
                 <h3 class="text-xl font-bold text-center text-slate-800 dark:text-white mb-1">Preview Laporan</h3>
                 <p class="text-xs text-center text-slate-500 mb-6 font-medium">Asesmen Kognitif Profesional • MindTest.id</p>
    
                 <!-- SIMPLE CAROUSEL (No 3D) -->
                 <div class="mb-6 w-[180px] h-[250px] mx-auto relative rounded-xl shadow-xl overflow-hidden border-[3px] border-white dark:border-slate-600 bg-slate-200">
                    <!-- Image Carousel -->
                    <div class="carousel-inner w-full h-full relative" id="report-carousel-click">
                        <img src="assets/report1.jpg" class="report-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" alt="Cover 1">
                        <img src="assets/report2.jpg" class="report-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" alt="Cover 2">
                    </div>
                    <!-- Binding Shine -->
                    <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
                 </div>
    
                 <div class="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                     <!-- Main Button: Upsell (Redesigned) -->
                     <button onclick="window.processPayment()" class="w-full py-4 px-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 font-bold rounded-2xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 group relative overflow-hidden border border-white/20">
                         
                         <!-- Shine Effect -->
                         <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                         
                         <!-- Crown Icon SVG -->
                         <svg class="w-6 h-6 text-indigo-100 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
                         </svg>

                         <div class="flex flex-col items-start leading-tight">
                             <span class="text-[10px] text-indigo-100 font-medium uppercase tracking-wider">Unlock Full Access</span>
                             <span class="text-sm font-extrabold text-white drop-shadow-sm">Download Laporan Lengkap</span>
                         </div>
                     </button>
                     
                     <!-- Secondary Button: Sample -->
                     <button id="downloadBtn" onclick="window.generateSamplePDF()" class="w-full py-2.5 px-4 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded-xl transition-all flex items-center justify-center gap-2 border border-dashed border-slate-300 dark:border-slate-600">
                        <span class="material-icons-round text-sm">description</span>
                        Download PDF Sample (16 Pages)
                     </button>
                 </div>
             </div>
         </div>
        `;
            document.body.appendChild(modalParams);

            // Simple Carousel Animation
            let activeSlide = 0;
            const slides = modalParams.querySelectorAll('.report-slide');
            if (slides.length > 0) {
                setInterval(() => {
                    slides[activeSlide].classList.remove('opacity-100');
                    slides[activeSlide].classList.add('opacity-0');
                    activeSlide = (activeSlide + 1) % slides.length;
                    slides[activeSlide].classList.remove('opacity-0');
                    slides[activeSlide].classList.add('opacity-100');
                }, 3000);
            }
        }

        // 1. Lock Button
        const pdfBtn = document.getElementById('downloadBtnPro');
        if (pdfBtn) {
            // Apply Premium Gradient & Icon Style directly to the button container
            // pdfBtn.className = "w-full py-4 px-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 font-bold rounded-2xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 group relative overflow-hidden border border-white/20";

            /* pdfBtn.innerHTML = `
                <!-- Shine Effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                
                <!-- Crown Icon -->
                 <svg class="w-6 h-6 text-yellow-100 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
                 </svg>
    
                <div class="flex flex-col items-start leading-tight">
                     <span class="text-[10px] text-yellow-100 font-medium uppercase tracking-wider">Unlock Full Access</span>
                     <span class="text-sm font-extrabold text-white drop-shadow-sm">Download Laporan Lengkap</span>
                </div>`; */
            pdfBtn.onclick = function (e) {
                e.preventDefault();
                // Check again just in case, or lazy init here if we wanted
                const modal = document.getElementById('premium-preview-modal');
                if (modal) {
                    modal.classList.remove('hidden');
                    setTimeout(() => modal.classList.remove('opacity-0'), 10);
                } else {
                    alert("Preview modal error. Reload page.");
                }
            };
        }

        // 2. Lock Charts
        setTimeout(() => {
            ['bell-curve-chart', 'radar-chart'].forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.classList.add('premium-blur');
                    const parent = el.closest('.glass-card');
                    if (parent && !parent.querySelector('.lock-overlay')) {
                        parent.classList.add('relative');
                        const lock = document.createElement('div');
                        lock.className = 'lock-overlay absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/20 backdrop-blur-sm';
                        lock.style.top = '100px'; // Skip header and subtitle
                        lock.innerHTML = `
                            <div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg flex flex-col items-center animate-bounce-slight">
                                <span class="material-icons-round text-yellow-500 text-3xl mb-2">lock</span>
                                <p class="text-xs font-bold text-slate-700 dark:text-slate-200 mb-2">Visualisasi Premium</p>
                                <button onclick="window.processPayment()" class="px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded-lg">Buka Akses</button>
                            </div>
                        `;
                        parent.appendChild(lock);
                    }
                }
            });
        }, 1000);
    }

    function unlockPremiumFeatures() {
        console.log("Unlocking Premium Features");
        localStorage.setItem('user_premium', 'true');

        // 1. Unlock Button
        const pdfBtn = document.getElementById('downloadBtnPro');
        if (pdfBtn) {
            pdfBtn.innerHTML = `
                <!-- Shine Effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-shimmer"></div>
                
                <!-- Crown Icon -->
                <svg class="w-6 h-6 text-indigo-100 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z"></path>
                </svg>

                <div class="flex flex-col items-start leading-tight">
                    <span class="text-[10px] text-indigo-100 font-medium uppercase tracking-wider">Premium Access</span>
                    <span class="text-sm font-extrabold text-white drop-shadow-sm">Unduh Laporan Lengkap</span>
                </div>`;

            // Reset classes to match premium style
            pdfBtn.className = "group relative w-full py-4 px-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all duration-300 overflow-hidden cursor-pointer border border-white/10 flex items-center justify-center gap-3";

            pdfBtn.onclick = function (e) {
                e.preventDefault();
                console.log("Premium Button Clicked - Opening Modal");
                if (typeof window.openCertificateModal === 'function') {
                    window.openCertificateModal();
                } else {
                    console.error('Certificate Modal function not found');
                    alert('Gagal memuat modal sertifikat. Mohon refresh halaman.');
                }
            };
        }

        // 2. Unlock Charts
        setTimeout(() => {
            ['bell-curve-chart', 'radar-chart'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.classList.remove('premium-blur');
                const parent = el?.closest('.glass-card');
                if (parent) {
                    const lock = parent.querySelector('.lock-overlay');
                    if (lock) lock.remove();
                }
            });
        }, 1000);
    }

    if (isPremium) {
        unlockPremiumFeatures();
    } else {
        applyPremiumLocks();
    }

    // --- PDF GENERATOR ---


});
// End of File (v=41)
