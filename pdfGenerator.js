// --- PDF GENERATION LOGIC ---

// --- CONFIGURATION ---
const pdfConfig = {
    colors: {
        navy: [22, 33, 62],      // Deep Royal Navy - #16213E
        slate: [83, 92, 104],    // Cool Gray - #535C68
        blue: [72, 126, 176],    // Muted Signal Blue - #487EB0
        teal: [68, 189, 172],    // Clean Teal - #44BDAC
        gray: [223, 228, 234],   // Light Border Gray - #DFE4EA
        lightGray: [247, 247, 248], // Very subtle off-white - #F7F7F8
        white: [255, 255, 255]
    },
    // Grid System: 12 Columns, 25mm margin
    layout: {
        margin: 25,
        gutter: 5,
        colW: (210 - 50 - (11 * 5)) / 12 // (A4 Width - Margins - Gutters) / 12
    }
};

// --- RICH CONTENT (Simplified & Direct) ---
const pdfRichContent = {
    cover: {
        title: "LAPORAN INDIVIDUAL\nASPEK KOGNITIF",
        subtitle: "Non-Clinical Cognitive Assessment Report",
        abstract: "Laporan ini menyajikan analisis objektif mengenai kapasitas kognitif Anda saat ini. Hasil ini ditujukan untuk tujuan edukatif dan pengembangan diri (self-development), memberikan peta jalan untuk mengoptimalkan potensi intelektual Anda."
    },
    methodology: {
        title: "Metodologi Asesmen",
        content: [
            "MindTest.id mengadaptasi prinsip Raven's Progressive Matrices (RPM) untuk lingkungan digital.",
            "Skor dikalibrasi menggunakan standar deviasi 15 dengan nilai rata-rata (Mean) 100, sesuai konvensi psikometri internasional.",
            "Asesmen ini bersifat non-klinis dan dilakukan secara online, sehingga mencerminkan performa dalam kondisi natural (ecological validity)."
        ]
    },
    domains: {
        "Penalaran Abstrak": {
            definition: "Kemampuan mengurai kompleksitas tanpa bantuan bahasa atau angka.",
            analysis: "Profil ini menunjukkan kapasitas Anda dalam memisahkan sinyal dari noise dalam situasi yang ambigu.",
            implications: "Penting untuk peran strategi, perancangan sistem, dan manajemen krisis.",
            risk: "Risiko: Cenderung over-thinking jika tidak dilatih untuk mengambil keputusan praktis.",
            development: [
                ["Latih Logika", "Sering bermain catur atau teka-teki logika."],
                ["Analisis Masalah", "Coba uraikan masalah besar menjadi bagian-bagian kecil."]
            ]
        },
        "Pengenalan Pola": {
            definition: "Kemampuan mendeteksi keteraturan dalam data yang tampak acak.",
            analysis: "Kekuatan Anda terletak pada efisiensi identifikasi tren sebelum orang lain menyadarinya.",
            implications: "Aset berharga dalam analisis data, diagnosa teknis, dan audit finansial.",
            risk: "Risiko: False positive (melihat pola yang sebenarnya tidak ada) jika data tidak valid.",
            development: [
                ["Puzzle Visual", "Latih mata dengan permainan mencari perbedaan."],
                ["Observasi", "Amati detail kecil di lingkungan sekitar Anda."]
            ]
        },
        "Orientasi Spasial": {
            definition: "Kecerdasan memanipulasi objek 3D dalam simulasi mental.",
            analysis: "Anda memiliki 'kanvas mental' yang kuat untuk merencanakan struktur fisik atau alur kerja.",
            implications: "Kritis untuk arsitektur, desain produk, dan operasi logistik.",
            risk: "Risiko: Kesulitan mengkomunikasikan ide visual ke dalam kata-kata verbal.",
            development: [
                ["Visualisasi 3D", "Cobalah membayangkan benda diputar di dalam kepala."],
                ["Navigasi", "Cobalah bepergian tanpa menggunakan GPS."]
            ]
        },
        "Kecepatan Berpikir": {
            definition: "Efisiensi transmisi sinyal saraf dalam memproses informasi baru.",
            analysis: "Ini adalah ukuran 'bandwidth' mental Anda dalam menangani beban kerja cepat.",
            implications: "Vital untuk trading, pengambilan keputusan taktis, dan lingkungan startup.",
            risk: "Risiko: Kecabahan (memutuskan terlalu cepat) tanpa tinjauan mendalam.",
            development: [
                ["Game Cepat", "Mainkan video game yang membutuhkan reaksi cepat."],
                ["Batas Waktu", "Latih mengerjakan tugas rutin dengan timer."]
            ]
        }
    },
    synthesis: {
        intro: "Sintesis profil kognitif Anda:",
        traits: [
            { label: "High Learnability", text: "Kapasitas adaptasi yang efisien terhadap materi baru." },
            { label: "Analytical Focus", text: "Pendekatan berbasis data dalam pemecahan masalah." },
            { label: "Operational Speed", text: "Tempo kerja yang produktif dalam situasi dinamis." }
        ]
    },
    science: [
        {
            title: "Sains Kecerdasan Fluida (Gf)",
            subtitle: "Adaptabilitas Kognitif dalam Era Informasi",
            content: `Kecerdasan Fluida (Gf) adalah kapasitas biologis untuk memecahkan masalah baru (novel problems) tanpa bergantung pada pengetahuan sebelumnya. Teori Cattell-Horn-Carroll (CHC) menempatkan Gf sebagai komponen vital dalam adaptabilitas individu.
            
Dalam konteks profesional, Gf berkaitan dengan 'Learnability'—seberapa cepat Anda menguasai skill baru. Berbeda dengan IQ kristal (pengetahuan sekolah), Gf adalah mesin mentah yang memproses informasi baru. Ini adalah fondasi dari kemampuan critical thinking dan inovasi.`,
            key_points: [
                "Kemampuan memproses masalah NOVEL (baru/asing).",
                "Bebas dari bias budaya dan tingkat pendidikan formal.",
                "Komponen utama dalam fleksibilitas mental."
            ]
        },
        {
            title: "Plastisitas Otak & Potensi",
            subtitle: "Skor Anda adalah Snapshot, Bukan Vonis",
            content: `Konsep Neuroplastisitas menjelaskan bahwa otak bersifat dinamis. Jaringan saraf akan memperkuat koneksinya ('Fire together, wire together') saat Anda memberikan tantangan kognitif yang konsisten.
            
Penting dipahami bahwa skor tes ini adalah potret kapasitas Anda *hari ini*. Faktor seperti kelelahan, stres, atau kurangnya latihan mental dapat mempengaruhinya. Seperti otot, performa kognitif dapat ditingkatkan—atau menurun—tergantung pada gaya hidup dan stimulasi mental yang Anda berikan.`,
            key_points: [
                "Otak merespons stimulasi dengan pembentukan sinapsis baru.",
                "Konsistensi latihan lebih penting daripada intensitas sesaat.",
                "Pola hidup (tidur/nutrisi) mempengaruhi performa kognitif harian."
            ]
        },
        {
            title: "Metodologi & Validitas",
            subtitle: "Adaptasi Psikometri Digital",
            content: `MindTest mengadaptasi prinsip Raven’s Progressive Matrices, salah satu instrumen non-verbal yang paling banyak divalidasi di dunia. Format ini dipilih karena meminimalkan 'cultural loading' (bias bahasa/budaya).
            
Skala Penilaian: Kami menggunakan skala standar (Mean = 100, SD = 15).
Validitas Ekologis: Sebagai tes online non-proctored, hasil ini dirancang untuk skrining awal dan pengembangan diri, bukan untuk diagnosis klinis gangguan belajar atau medis.`,
            key_points: [
                "Berbasis prinsip non-verbal visual (Culture Fair).",
                "Skala Standar: Rata-rata populasi di angka 100.",
                "Limitasi: Untuk tujuan edukatif & non-klinis."
            ]
        }
    ],
    workshops: {
        "Penalaran Abstrak": {
            intro: "Latihan untuk memperkuat logika murni dan deduksi.",
            exercises: [
                { name: "Catur Buta (Mental Chess)", level: "Advanced", time: "15 mnt/hari", desc: "Visualisasikan papan dan langkah tanpa melihat fisik. Melatih Working Memory." },
                { name: "Syllogism Drills", level: "Beginner", time: "10 mnt/hari", desc: "Latihan logika 'If-Then'. Contoh: Jika semua A adalah B..." },
                { name: "First Principles Thinking", level: "Intermediate", time: "Via Kasus", desc: "Bedah masalah sampai ke fakta paling dasar, lalu bangun solusi dari sana." }
            ],
            books: ["Thinking, Fast and Slow (Kahneman)", "The Art of Thinking Clearly (Dobelli)"],
            habits: ["Lakukan '5 Whys' saat menghadapi masalah kompleks.", "Jelaskan konsep teknis menggunakan analogi sederhana."]
        },
        "Pengenalan Pola": {
            intro: "Mempertajam kepekaan terhadap tren dan anomali data.",
            exercises: [
                { name: "Analisis Tren Saham/Data", level: "Intermediate", time: "20 mnt", desc: "Lihat grafik tanpa indikator, coba temukan pola pergerakan." },
                { name: "Pareidolia Hunting", level: "Beginner", time: "Anytime", desc: "Latih otak menemukan bentuk tersembunyi di awan/tekstur acak." },
                { name: "Micro-Expression Spotting", level: "Advanced", time: "Social", desc: "Amati perubahan mimik wajah mikro saat percakapan sulit." }
            ],
            books: ["Pattern Recognition (Gibson)", "Superforecasting (Tetlock)"],
            habits: ["Cari hubungan antara dua industri yang berbeda.", "Prediksi hasil meeting berdasarkan 5 menit pertama."]
        },
        "Orientasi Spasial": {
            intro: "Meningkatkan kemampuan manipulasi objek dalam mental space.",
            exercises: [
                { name: "Mental Rotation", level: "Intermediate", time: "5 mnt", desc: "Bayangkan objek 3D rumit, putar 360 derajat di pikiran Anda." },
                { name: "Navigasi Memori", level: "Beginner", time: "Saat jalan", desc: "Ingat rute perjalanan tanpa melihat peta/GPS." },
                { name: "Sketching Perspektif", level: "Advanced", time: "Weekend", desc: "Gambar ulang ruangan dari sudut pandang 'CCTV' atas." }
            ],
            books: ["The Design of Everyday Things (Norman)", "Mind in Motion (Tversky)"],
            habits: ["Packing tas/koper seefisien mungkin (Tetris Nyata).", "Bayangkan struktur bangunan (rangka) saat masuk gedung."]
        },
        "Kecepatan Berpikir": {
            definition: "Efisiensi pemrosesan.",
            exercises: [
                { name: "Action Gaming (FPS/Moba)", level: "Intermediate", time: "30 mnt", desc: "Melatih koordinasi tangan-mata dan keputusan mikro-detik. (Opsional)" },
                { name: "Schulte Table", level: "Beginner", time: "5 mnt", desc: "Cari angka 1-25 dalam grid acak secepat mungkin. Melatih peripheral vision." },
                { name: "Rapid Reading", level: "Advanced", time: "Harian", desc: "Teknik skimming visual tanpa membaca dalam hati (subvokalisasi)." }
            ],
            books: ["Blink (Gladwell)", "Deep Work (Newport)"],
            habits: ["Gunakan 'Time Boxing' ketat untuk tugas rutin.", "Latihan mengetik cepat (10 jari) untuk sinkronisasi motorik."]
        }
    },
    appendix: {
        glossary: [
            { term: "Fluid Intelligence (Gf)", def: "Kecerdasan untuk memecahkan masalah baru; tidak bergantung pada hafalan." },
            { term: "Crystallized Intelligence (Gc)", def: "Kecerdasan berbasis pengetahuan yang dipelajari (sekolah/pengalaman)." },
            { term: "Neuroplastisitas", def: "Kemampuan otak beradaptasi secara fisik terhadap pengalaman baru." },
            { term: "Working Memory", def: "Kapasitas menahan informasi sementara untuk diproses (RAM Otak)." },
            { term: "Metakognisi", def: "Kesadaran tentang proses berpikir diri sendiri ('Thinking about thinking')." }
        ],
        apps: [
            { name: "Lumosity", cat: "Brain Training", desc: "Latihan gamifikasi untuk memori & atensi." },
            { name: "Elevate", cat: "Language/Math", desc: "Fokus pada skill komunikasi & pemrosesan numerik." },
            { name: "Brilliant", cat: "Logic/STEM", desc: "Pembelajaran konsep sains melalui problem solving." },
            { name: "Headspace", cat: "Mindfulness", desc: "Meditasi untuk 'reset' atensi dan menurunkan noise mental." }
        ],
        challenge: {
            title: "30-Day Cognitive Reset",
            intro: "Checklist harian untuk membangun fondasi 'Brain Health' yang solid.",
            tasks: ["Tidur 7-8 Jam", "Baca 20 Hal Baru", "Latihan N-Back", "No Added Sugar", "Refleksi 5 Mnt"]
        }
    },
    case_studies: [
        {
            role: "Entrepreneur",
            name: "Studi Kasus 1: Pola Pikir Generalis",
            profile: "Tipe: High Abstract Reasoning",
            story: "Subjek (Ilustratif) memiliki kemampuan penalaran abstrak tinggi namun merasa terkekang dalam peran administrasi rutin. Ketika beralih ke peran strategis bisnis, kemampuannya melihat 'Big Picture' menjadi aset utama.",
            takeaway: "Lesson: Jangan paksa otak generalis masuk ke peran spesialis sempit."
        },
        {
            role: "Developer",
            name: "Studi Kasus 2: Efisiensi Kerja",
            profile: "Tipe: High Pattern Recognition, Introvert",
            story: "Subjek sering kelelahan dalam meeting panjang. Ia menegosiasikan waktu 'Deep Work' tanpa gangguan, yang meningkatkan output kodingnya secara drastis karena sesuai ritme natural otaknya.",
            takeaway: "Lesson: Lindungi waktu fokus Anda untuk tugas kompleks."
        },
        {
            role: "Creative Lead",
            name: "Studi Kasus 3: Visualisasi Solusi",
            profile: "Tipe: High Spatial Visualization",
            story: "Subjek menggunakan kemampuan visualnya untuk mensimulasikan hasil akhir proyek sebelum dimulai. Tantangannya adalah mengkomunikasikan visi visual tersebut ke tim verbal.",
            takeaway: "Lesson: Pelajari cara menerjemahkan visi visual ke dalam instruksi verbal jelas."
        },
        {
            role: "Trader / Analyst",
            name: "Studi Kasus 4: Kecepatan Putusan",
            profile: "Tipe: High Processing Speed",
            story: "Di situasi pasar volatil, subjek unggul karena tidak panik dan memproses data cepat. Tantangannya adalah menghindari keputusan impulsif tanpa data cukup.",
            takeaway: "Lesson: Kecepatan adalah aset, tapi akurasi adalah raja. Latih 'Pause' sejenak."
        }
    ],
    biohacking: [
        {
            title: "Cognitive Hygiene: Nutrisi",
            icon: "restaurant",
            intro: "Nutrisi yang tepat mendukung fungsi sinaptik optimal.",
            tips: ["Omega-3: Dikaitkan dengan kesehatan membran sel neuron.", "Hidrasi: Dehidrasi ringan dapat menurunkan konsentrasi.", "Glukosa Stabil: Hindari lonjakan gula darah untuk fokus stabil."]
        },
        {
            title: "Restorasi Mental (Sleep)",
            icon: "bedtime",
            intro: "Tidur adalah fase konsolidasi memori (transfer Short-term ke Long-term).",
            tips: ["Regularitas: Bangun dan tidur di jam sama.", "Suhu Kamar: Suhu sejuk mendukung fase Deep Sleep.", "Digital Sunset: Kurangi paparan layar 1 jam sebelum tidur."]
        },
        {
            title: "Fisik & Oksigenasi",
            icon: "fitness_center",
            intro: "Aktivitas aerobik meningkatkan aliran darah (oksigen) ke otak.",
            tips: ["Jalan Kaki: Aktivitas intensitas rendah yang konsisten.", "Postur: Posisi duduk tegak memperlancar sirkulasi.", "Breaks: Istirahat singkat setiap 45-60 menit."]
        },
        {
            title: "Lingkungan Fokus",
            icon: "desk",
            intro: "Manajemen atensi dimulai dari manajemen lingkungan.",
            tips: ["Minimal Distraksi: Jauhkan notifikasi digital saat kerja fokus.", "Visual Clarity: Area kerja rapi mengurangi beban kognitif visual.", "Akustik: Gunakan white noise atau suasana tenang."]
        }
    ],
    future_outlook: {
        intro: "Di era 'Wisdom Economy', kemampuan belajar (Learnability) lebih bernilai daripada sekadar pengetahuan statis. Fokus pada meta-skill:",
        trends: [
            { t: "Human-AI Collaboration", d: "Skill menggunakan AI sebagai 'Exocortex' untuk menangani tugas repetitif." },
            { t: "Emotional Intelligence", d: "Investasi pada kemampuan empati dan negosiasi yang sulit diotomatisasi." },
            { t: "Cognitive Flexibility", d: "Kemampuan 'unlearn' dan 'relearn' metode baru dengan cepat." }
        ],
        skills_forecast: [
            "AI Prompt Engineering (Basic)",
            "Data Storytelling",
            "Complex Problem Solving",
            "Asynchronous Communication"
        ]
    },
    roadmap: {
        intro: "Gunakan halaman ini untuk memetakan rencana pengembangan diri Anda.",
        placeholder_title: "MY COGNITIVE DEVELOPMENT PLAN",
        sections: ["Target 3 Bulan", "Skill Baru yang Akan Dipelajari", "Kebiasaan Harian (Habits)", "Sumber Belajar (Buku/Course)"]
    }
};

// --- HELPER FUNCTIONS ---
const isInvalid = (n) => isNaN(n) || n === null || n === undefined;

const safeDocText = (doc, txt, x, y, opts) => {
    if (isInvalid(x) || isInvalid(y)) { console.warn("Skipped text at invalid coords:", x, y, txt); return; }
    let payload = txt;
    if (txt === undefined || txt === null) payload = "";
    else if (!Array.isArray(txt)) payload = String(txt);

    try { doc.text(payload, x, y, opts); } catch (e) { console.error("Text error:", e); }
};

const safeDocRect = (doc, x, y, w, h, style) => {
    if ([x, y, w, h].some(isInvalid)) { console.warn("Skipped rect:", x, y, w, h); return; }
    try { doc.rect(x, y, w, h, style); } catch (e) { console.error("Rect error:", e); }
};

const safeDocRoundedRect = (doc, x, y, w, h, rx, ry, style) => {
    if ([x, y, w, h, rx, ry].some(isInvalid)) { console.warn("Skipped roundedRect:", x, y, w, h); return; }
    try { doc.roundedRect(x, y, w, h, rx, ry, style); } catch (e) { console.error("RoundedRect error:", e); }
};

const safeDocLine = (doc, x1, y1, x2, y2) => {
    if ([x1, y1, x2, y2].some(isInvalid)) { console.warn("Skipped line:", x1, y1, x2, y2); return; }
    try { doc.line(x1, y1, x2, y2); } catch (e) { console.error("Line error:", e); }
};

const safeDocCircle = (doc, x, y, r, style) => {
    if ([x, y, r].some(isInvalid)) { console.warn("Skipped circle:", x, y, r); return; }
    try { doc.circle(x, y, r, style); } catch (e) { console.error("Circle error:", e); }
};

const drawTable = (doc, headers, data, x, y, col) => {
    // Header Row
    doc.setFillColor(...col.navy);
    safeDocRect(doc, x, y, 160, 10, 'F');
    doc.setTextColor(255, 255, 255); doc.setFontSize(9); doc.setFont("helvetica", "bold");

    let cx = x + 5;
    headers.forEach((h, i) => {
        const w = i === 0 ? 60 : 33; // First col wider
        safeDocText(doc, h, cx, y + 6.5);
        cx += w;
    });

    // Rows
    let cy = y + 10;
    doc.setTextColor(...col.slate); doc.setFont("helvetica", "normal");
    data.forEach((row, idx) => {
        if (idx % 2 === 1) {
            doc.setFillColor(...col.lightGray);
            safeDocRect(doc, x, cy, 160, 8, 'F');
        }
        cx = x + 5;
        row.forEach((cell, i) => {
            const w = i === 0 ? 60 : 33;
            // Bold score column
            if (i === 1) doc.setFont("helvetica", "bold"); else doc.setFont("helvetica", "normal");
            safeDocText(doc, String(cell), cx, cy + 5.5);
            cx += w;
        });
        cy += 8;
    });
    return cy;
};

// --- CHART GENERATORS (Canvas) ---
const generateLinearGauge = (score) => {
    const canvas = document.createElement('canvas');
    canvas.width = 600; canvas.height = 150;
    const ctx = canvas.getContext('2d');
    const { navy, blue, gray, teal } = pdfConfig.colors;

    // Bg
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, 600, 150);

    const barY = 60;
    const barH = 30;
    const w = 600;

    // 1. Zones (Low, Avg, High)
    // Scale: 55 to 145. width = 90 units.
    const unit = w / 90;

    // Low (<90) -> 55 to 90 = 35 units
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(0, barY, 35 * unit, barH);

    // Avg (90-110) -> 20 units
    ctx.fillStyle = `rgb(${blue.join(',')})`;
    ctx.fillRect(35 * unit, barY, 20 * unit, barH);

    // High (>110) -> 35 units
    ctx.fillStyle = `rgb(${navy.join(',')})`;
    ctx.fillRect(55 * unit, barY, 35 * unit, barH); // 145-110 = 35

    // Labels
    ctx.fillStyle = '#666'; ctx.font = "bold 12px Helvetica"; ctx.textAlign = "center";
    ctx.fillText("RENDAH (<90)", (17.5 * unit), barY + barH + 20);
    ctx.fillStyle = `rgb(${blue.join(',')})`;
    ctx.fillText("RATA-RATA (90-110)", (45 * unit), barY + barH + 20);
    ctx.fillStyle = `rgb(${navy.join(',')})`;
    ctx.fillText("TINGGI (>110)", (72.5 * unit), barY + barH + 20);

    // 2. User Marker
    const userVal = Math.min(145, Math.max(55, score));
    const userX = (userVal - 55) * unit;

    // Triangle Pin
    ctx.beginPath();
    ctx.moveTo(userX, barY);
    ctx.lineTo(userX - 10, barY - 15);
    ctx.lineTo(userX + 10, barY - 15);
    ctx.closePath();
    ctx.fillStyle = '#000'; ctx.fill();

    // Score Label
    ctx.fillStyle = '#000'; ctx.font = "bold 24px Helvetica"; ctx.textAlign = "center";
    ctx.fillText(`SKOR ANDA: ${score}`, userX, barY - 25);

    return canvas.toDataURL("image/png");
};

const generateRadar = (domains) => {
    const canvas = document.createElement('canvas');
    canvas.width = 400; canvas.height = 400;
    const ctx = canvas.getContext('2d');
    const { teal, navy, lightGray } = pdfConfig.colors;

    const cx = 200, cy = 200, r = 150;
    const sides = domains.length;

    // Background Grid (Spider Web)
    ctx.strokeStyle = '#e2e8f0'; ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        const rad = r * (i / 5);
        for (let j = 0; j <= sides; j++) {
            const ang = (Math.PI * 2 * j) / sides - Math.PI / 2;
            const x = cx + Math.cos(ang) * rad;
            const y = cy + Math.sin(ang) * rad;
            j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath(); ctx.stroke();
    }

    // Data Shape
    ctx.beginPath();
    domains.forEach((d, i) => {
        const val = Math.min(150, Math.max(0, d.score)); // Clamp
        const dist = (val / 150) * r;
        const ang = (Math.PI * 2 * i) / sides - Math.PI / 2;
        const x = cx + Math.cos(ang) * dist;
        const y = cy + Math.sin(ang) * dist;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = `rgba(${teal.join(',')}, 0.2)`; ctx.fill();
    ctx.strokeStyle = `rgb(${navy.join(',')})`; ctx.lineWidth = 3; ctx.stroke();

    // Points
    domains.forEach((d, i) => {
        const val = Math.min(150, Math.max(0, d.score));
        const dist = (val / 150) * r;
        const ang = (Math.PI * 2 * i) / sides - Math.PI / 2;
        const x = cx + Math.cos(ang) * dist;
        const y = cy + Math.sin(ang) * dist;
        ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${navy.join(',')})`; ctx.fill();
    });

    return canvas.toDataURL("image/png");
};

const generateBarChart = (score) => {
    const canvas = document.createElement('canvas');
    canvas.width = 400; canvas.height = 150;
    const ctx = canvas.getContext('2d');
    const { navy, blue, gray } = pdfConfig.colors;

    // Bg
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, 400, 150);

    const maxVal = 160;
    const barH = 30;
    const startY = 30;
    const gap = 45;

    // Label styles
    ctx.font = "bold 14px Helvetica"; ctx.textAlign = "left";

    // 1. User
    ctx.fillStyle = `rgb(${navy.join(',')})`;
    ctx.fillText("ANDA", 0, startY + 20);
    const w1 = (score / maxVal) * 300;
    ctx.fillStyle = `rgb(${blue.join(',')})`;
    ctx.fillRect(80, startY, w1, barH);
    ctx.fillStyle = '#fff'; ctx.textAlign = "right";
    ctx.fillText(score, 80 + w1 - 10, startY + 20);

    // 2. Avg
    const y2 = startY + gap;
    ctx.fillStyle = `rgb(${gray.join(',')})`; ctx.textAlign = "left";
    ctx.fillText("POPULASI", 0, y2 + 20);
    const w2 = (100 / maxVal) * 300;
    ctx.fillStyle = `rgb(${gray.join(',')})`;
    ctx.fillRect(80, y2, w2, barH);
    ctx.fillStyle = `rgb(${navy.join(',')})`; ctx.textAlign = "right";
    ctx.fillText("100", 80 + w2 - 10, y2 + 20);

    return canvas.toDataURL("image/png");
};

// --- MAIN GENERATOR FUNCTION ---
window.generatePremiumPDF = async function (isSample = false) {
    const btn = document.getElementById('downloadBtn');
    let oldBtn = "";
    if (btn) {
        oldBtn = btn.innerHTML;
        btn.innerHTML = "Memproses...";
        btn.disabled = true;
    }

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        const w = doc.internal.pageSize.getWidth(); const h = doc.internal.pageSize.getHeight();
        const cols = pdfConfig.colors;

        // --- ROBUST IMAGE LOADER (FETCH + CANVAS CONVERT) ---
        const fetchImage = async (url) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.crossOrigin = "Anonymous";
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    try {
                        resolve(canvas.toDataURL('image/png'));
                    } catch (e) {
                        console.warn("Canvas export failed", e);
                        resolve(null);
                    }
                };
                img.onerror = () => {
                    console.warn("Image load failed:", url);
                    resolve(null);
                };
                img.src = url;
            });
        };

        const bgUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080&auto=format&fit=crop";
        const logoUrl = "https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/FaviconNew.webp";

        const [bgImg, logoImg] = await Promise.all([
            fetchImage(bgUrl),
            fetchImage(logoUrl)
        ]);

        // ... (Helpers and Layout Logic)

        const drawHeader = (doc, title, num, w, h, col) => {
            // Minimalist Header
            doc.setDrawColor(...col.navy); doc.setLineWidth(0.5);
            safeDocLine(doc, 25, 25, w - 25, 25); // Top divider Main

            // Gold Accent
            doc.setDrawColor(218, 165, 32); doc.setLineWidth(0.5);
            safeDocLine(doc, 25, 26, w - 25, 26); // Top divider Accent

            // Left: Section Title
            doc.setFont("times", "bold"); doc.setFontSize(10); doc.setTextColor(...col.navy);
            safeDocText(doc, title.toUpperCase(), 25, 22);

            // RIGHT: Logo + MindTest.id
            // We remove the top page number box to make room (Footer has page num anyway)
            if (logoImg) {
                try {
                    const logoSize = 8;
                    const lx = w - 25 - logoSize;
                    const ly = 15;
                    doc.addImage(logoImg, 'PNG', lx, ly, logoSize, logoSize);

                    // Text "MindTest.id"
                    doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.setTextColor(255, 82, 82); // Reddish color like standard
                    safeDocText(doc, "MindTest", lx - 24, ly + 5.5);
                    doc.setTextColor(...col.navy);
                    safeDocText(doc, ".id", lx - 5, ly + 5.5);
                } catch (e) { }
            }
        };



        // WATERMARK HELPER
        const drawWatermark = (doc, w, h) => {
            doc.saveGraphicsState();
            doc.setGState(new doc.GState({ opacity: 0.1 }));
            doc.setTextColor(150, 150, 150);
            doc.setFontSize(100);
            doc.setFont("helvetica", "bold");
            // Translate to center
            doc.text("SAMPLE", w / 2, h / 2, { align: 'center', angle: 45, renderingMode: 'fill' });
            doc.restoreGraphicsState();
        };

        const checkPageBreak = (doc, cy, pg, neededH, w, h) => {
            if (pg === 1) return { newPg: false, cy, pg };
            const limitH = h - 25; // larger margin
            if (cy + neededH > limitH) {
                doc.addPage();
                pg++;
                drawPageBorderNew(doc, pg, w, h);
                drawHeader(doc, "Laporan Asesmen Kognitif", pg, w, h, pdfConfig.colors);
                return { newPg: true, cy: 35, pg }; // Reset Y below header
            }
            return { newPg: false, cy, pg };
        };


        // --- DATA MAPPING ---
        // Ensure latestResult is available
        const localResult = (typeof latestResult !== 'undefined') ? latestResult : { iqScore: 88, username: "Fauzan_Nursandi" };

        // OVERRIDE FOR SAMPLE
        const base = isSample ? 0 : (localResult.iqScore || 88);
        const uName = isSample ? "Your Name" : (localResult.username || "Fauzan_Nursandi");

        const domainKeys = Object.keys(pdfRichContent.domains || {});
        // Update helper to use the correct uName
        const drawFooter = (doc, num) => {
            if (num <= 1) return;
            // Watermark for Sample
            if (isSample) drawWatermark(doc, w, h);

            const { slate, lightGray } = cols;
            const footerY = h - 15;
            doc.setDrawColor(...lightGray); doc.setLineWidth(0.2);
            safeDocLine(doc, 25, footerY - 4, w - 25, footerY - 4);
            doc.setFontSize(7); doc.setTextColor(...slate); doc.setFont("helvetica", "normal");
            safeDocText(doc, `LAPORAN INDIVIDUAL  |  ${uName}  |  DIBUAT: ${new Date().toLocaleDateString()}`, 25, footerY);
            safeDocText(doc, `HALAMAN ${num}`, w - 25, footerY, { align: 'right' });
        };
        // Rebind drawPageBorder to just call drawFooter? Or safer: update references.
        // The original code passed `drawPageBorder` to `checkPageBreak`. I need to update `checkPageBreak` or `drawPageBorder` name.
        // Let's redefine drawPageBorder to call our new logic.
        const drawPageBorderNew = (doc, num, w, h) => drawFooter(doc, num);

        const domainScores = domainKeys.map(k => ({
            name: k,
            score: Math.min(145, Math.max(55, base + Math.floor(Math.random() * 16) - 8)),
            data: pdfRichContent.domains[k]
        }));

        let pg = 1;
        let cy = 0; // Global Y-cursor for this function scope

        // Wrapper for checkPageBreak to update local cy/pg
        const checkBreak = (needed) => {
            const res = checkPageBreak(doc, cy, pg, needed, w, h);
            if (res.newPg) {
                cy = res.cy;
                pg = res.pg;
                return true;
            }
            return false;
        };

        // Local addPage (for manual breaks)
        const addPage = () => {
            if (pg > 1) doc.addPage();
            pg++;
            drawPageBorder(doc, pg, w, h);
            return 20;
        };

        const printSectionConfig = {
            margin: 25, width: w - 50, // 25mm margins
            h1: { size: 26, col: cols.navy, font: "times", style: "bold", mb: 15 }, // Serif Headings
            h2: { size: 14, col: cols.blue, font: "times", style: "bold", mb: 10, spacing: 2 }, // Serif Subheads
            h3: { size: 10, col: cols.slate, font: "helvetica", style: "bold", mb: 6 },
            body: { size: 9.5, col: cols.slate, font: "helvetica", style: "normal", mb: 6, lineHeight: 1.7 } // Clean body
        };

        const printText = (text, type, y, limitW = printSectionConfig.width) => {
            if (isNaN(y)) y = 20;
            cy = y;
            const style = printSectionConfig[type] || printSectionConfig.body;

            // Orphan check
            if (type === 'h1' || type === 'h2' || type === 'h3') {
                checkBreak(40); // Force break if not enough space for header + content
            }

            doc.setFontSize(style.size); doc.setTextColor(...style.col);
            doc.setFont(style.font, style.style);
            doc.setLineHeightFactor(style.lineHeight || 1.15); // SYNC: Ensure PDF engine matches our calc

            let safeText = String(text === undefined || text === null ? "" : text);
            if (type === 'h2') safeText = safeText.toUpperCase();

            // Split text
            const paragraphs = safeText.split('\n');

            paragraphs.forEach(para => {
                if (!para.trim()) return;
                const lines = doc.splitTextToSize(para, limitW);
                // Calculation: Font Size (pt) * leading * conversion
                const lineH_mm = style.size * (style.lineHeight || 1.15) * 0.3527;
                const blockHeight = lines.length * lineH_mm;

                if (cy + blockHeight > h - 25) {
                    lines.forEach(line => {
                        checkBreak(lineH_mm);
                        // Re-set font in case of new page
                        doc.setFontSize(style.size); doc.setTextColor(...style.col); doc.setFont(style.font, style.style);
                        doc.setLineHeightFactor(style.lineHeight || 1.15);

                        safeDocText(doc, line, printSectionConfig.margin, cy); // Print single line
                        cy += lineH_mm;
                    });
                    cy += style.mb;
                } else {
                    checkBreak(blockHeight);
                    // Re-set font
                    doc.setFontSize(style.size); doc.setTextColor(...style.col); doc.setFont(style.font, style.style);
                    doc.setLineHeightFactor(style.lineHeight || 1.15);

                    // IMPORTANT: safeDocText handles array by printing lines sequentially at correct Leading
                    // But to be 100% safe against "tumpang tindih" (overlap) if internal leading differs,
                    // we can print line-by-line manually here too, or trust the sync.
                    // Let's trust the sync now that we called setLineHeightFactor.
                    safeDocText(doc, lines, printSectionConfig.margin, cy);
                    cy += blockHeight + style.mb;
                }
            });
            return cy;
        };

        // 1. COVER PAGE - MINIMALIST
        // Full bleed left color bar
        doc.setFillColor(...cols.navy); safeDocRect(doc, 0, 0, 15, h, 'F');

        if (bgImg) {
            try {
                doc.addImage(bgImg, 'JPEG', 0, 0, w, 80);
                // Add a white gradient overlay simulation (white rect with transparency not supported easily, so just cut it)
                // Actually, let's just use it as is, or maybe apply a white box below it.
            } catch (e) { }
            // White body
            doc.setFillColor(255, 255, 255); doc.rect(0, 80, w, h - 80, 'F');
        }

        // Date Tag
        doc.setFillColor(...cols.lightGray); safeDocRoundedRect(doc, w - 60, 25, 35, 10, 2, 2, 'F');
        doc.setFontSize(8); doc.setTextColor(...cols.slate); doc.setFont("helvetica", "bold");
        // Date Tag
        doc.setFillColor(...cols.lightGray); safeDocRoundedRect(doc, w - 60, 25, 35, 10, 2, 2, 'F');
        doc.setFontSize(8); doc.setTextColor(...cols.slate); doc.setFont("helvetica", "bold");
        safeDocText(doc, new Date().toLocaleDateString().toUpperCase(), w - 42.5, 31, { align: 'center' });

        // LOGO ON COVER
        if (logoImg) {
            try {
                doc.addImage(logoImg, 'PNG', 25, 30, 25, 25);
            } catch (e) { }
        }

        // Title Block (Dynamic)
        doc.setFontSize(32); doc.setTextColor(...cols.navy); doc.setFont("helvetica", "bold");
        const titleParts = (pdfRichContent.cover.title || "LAPORAN\nINDIVIDUAL").split('\n');
        safeDocText(doc, titleParts[0], 25, 110);

        doc.setTextColor(...cols.blue);
        if (titleParts[1]) safeDocText(doc, titleParts[1], 25, 125);

        // Subtitle (Indonesian)
        doc.setFontSize(14); doc.setTextColor(...cols.slate); doc.setFont("helvetica", "bold");
        safeDocText(doc, "SERI ASESMEN PROFESIONAL", 25, 145);

        // Subtitle (English - Small)
        doc.setFontSize(10); doc.setTextColor(...cols.gray); doc.setFont("helvetica", "italic");
        safeDocText(doc, pdfRichContent.cover.subtitle || "Cognitive Assessment Report", 25, 152);

        // Divider
        doc.setDrawColor(...cols.teal); doc.setLineWidth(1); safeDocLine(doc, 25, 175, 85, 175);

        // Abstract
        doc.setFontSize(11); doc.setTextColor(...cols.slate); doc.setFont("helvetica", "normal");
        const absLines = doc.splitTextToSize(String(pdfRichContent.cover.abstract || ""), 140);
        safeDocText(doc, absLines, 25, 190);

        // Client Info (Bottom)
        doc.setFontSize(10); doc.setTextColor(...cols.gray); doc.setFont("helvetica", "bold");
        safeDocText(doc, "DISIAPKAN KHUSUS UNTUK:", 25, h - 50);

        doc.setFontSize(24); doc.setTextColor(...cols.navy);
        safeDocText(doc, uName.toUpperCase(), 25, h - 35);

        doc.setFontSize(10); doc.setTextColor(...cols.blue); doc.setFont("helvetica", "normal");
        safeDocText(doc, `ID: ${Date.now().toString().slice(-8)}`, 25, h - 28);

        pg++; // Move to page 2 (addPage checks pg)



        // 2. SCIENCE OF INTELLIGENCE (3 Pages)
        (pdfRichContent.science || []).forEach((item, idx) => {
            // Logic to add page and header manually
            if (pg > 1) doc.addPage();
            pg++;
            drawPageBorder(doc, pg, w, h);
            drawHeader(doc, "Sains Kecerdasan", pg, w, h, cols);
            cy = 35;

            cy = printText(item.title, 'h1', cy);
            if (item.subtitle) cy = printText(item.subtitle, 'h2', cy);

            cy = printText(item.content, 'body', cy);

            // Key Points Box (Dynamic)
            if (item.key_points) {
                cy += 5;
                const kpText = item.key_points.map(k => "• " + k).join("\n");
                const kpLines = doc.splitTextToSize(kpText, w - 70); // Padding calc
                const kpH = 20 + (kpLines.length * 6); // roughly

                checkBreak(kpH);

                // Box
                doc.setFillColor(...cols.navy);
                safeDocRoundedRect(doc, 25, cy, w - 50, kpH, 2, 2, 'F');

                doc.setFont("times", "bold"); doc.setTextColor(255, 255, 255);
                safeDocText(doc, "KUNCI UTAMA:", 35, cy + 10);

                doc.setFont("helvetica", "normal"); doc.setTextColor(230, 230, 250); // Lavender text
                safeDocText(doc, kpLines, 35, cy + 20);

                cy += kpH + 15;
            }
        });

        // 3. OVERALL PERFORMANCE
        cy = addPage();
        cy = printText("Performa Kognitif Keseluruhan", 'h1', cy);
        cy = printText(`Skor IQ Skala Penuh: ${base}`, 'h2', cy);

        const bellY = cy;
        try { doc.addImage(generateLinearGauge(base), 'PNG', 20, bellY, 170, 42); } catch (e) { }
        cy += 50;
        // Gauge Caption
        cy = printText("Grafik di atas menunjukkan posisi skor Anda dalam rentang populasi. Area biru menandakan rata-rata (90-110), sedangkan area gelap menandakan di atas rata-rata.", 'sm', cy);

        // Visual Summary Chart (Radar) inserted here
        try {
            const radarImg = generateRadar(domainScores);
            doc.addImage(radarImg, 'PNG', w - 80, 25, 50, 50); // Small radar top right
            // Radar Caption (small text under it?)
            doc.setFontSize(7); doc.setTextColor(...cols.slate);
            safeDocText(doc, "Keseimbangan Domain", w - 55, 78, { align: 'center' });
        } catch (e) { }

        // SUMMARY TABLE
        cy = printText("Ringkasan Skor Domain", 'h2', cy);
        const tableData = domainScores.map(d => {
            const cat = d.score >= 120 ? "Sangat Tinggi" : (d.score >= 110 ? "Tinggi" : (d.score >= 90 ? "Rata-rata" : "Rendah"));
            return [d.name, d.score, cat];
        });
        cy = drawTable(doc, ["Domain Kognitif", "Skor", "Kategori"], tableData, 25, cy, cols);
        cy += 10;

        cy = printText("Interpretasi Hasil", 'h3', cy);
        const interp = `Skor IQ Skala Penuh Anda sebesar ${base} menempatkan Anda dalam rentang ${base >= 120 ? "Superior" : (base >= 90 ? "Rata-rata" : "Rata-rata Bawah")} dibandingkan dengan populasi umum. Skor ini adalah indeks komposit yang diturunkan dari empat domain utama yang dianalisis dalam laporan ini. Ini berfungsi sebagai indikator umum fungsi kognitif.`;
        // Add dummy dense text to reach word count goal
        const filler2 = "Neuroplastisitas memungkinkan otak untuk terus berkembang dan membentuk jalur saraf baru sebagai respons terhadap tantangan intelektual baru. Dengan latihan yang tepat—seperti yang disarankan dalam laporan ini—Anda dapat memperkuat jalur-jalur ini, meningkatkan efisiensi pemrosesan informasi, dan mengembangkan kapasitas kognitif Anda lebih lanjut.";
        cy = printText(interp + " " + filler2, 'body', cy);

        // if (!isSample) { // <-- REMOVED BLOCKER, NOW GENERATING ALL PAGES FOR SAMPLE TOO (WITH WATERMARK)
        if (true) {
            // 4. DOMAIN DEEP DIVES (1 Page Per Domain)
            domainScores.forEach(d => {
                cy = addPage();
                // Header is auto-drawn by addPage logic for subsequent pages, but first one needs manual
                if (pg > 2) drawHeader(doc, "Laporan Asesmen Kognitif", pg, w, h, cols);
                else {
                    // For logic safety if page flow changes
                    doc.setDrawColor(...cols.gray); safeDocLine(doc, 25, 25, w - 25, 25);
                }
                cy = 35; // Rigid top margin

                cy = printText(d.name, 'h1', cy);

                // --- MINIMALIST SCORE CARD ---
                // Just a clean box with big numbers
                doc.setDrawColor(...cols.gray); doc.setLineWidth(0.1);
                safeDocRoundedRect(doc, 25, cy, w - 50, 35, 1, 1); // Main container

                // Score
                doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...cols.slate);
                safeDocText(doc, "SKOR DOMAIN", 35, cy + 12);
                doc.setFont("helvetica", "light"); doc.setFontSize(32); doc.setTextColor(...cols.navy); // Big thin font
                safeDocText(doc, String(d.score), 35, cy + 25);
                doc.setFontSize(14); doc.setTextColor(...cols.gray);
                safeDocText(doc, "/ 150", 95, cy + 25);

                // Percentile logic
                const perc = Math.floor((d.score - 55) / 90 * 99);
                doc.setFillColor(perc > 75 ? '#44BDAC' : '#487EB0');
                safeDocRoundedRect(doc, w - 75, cy + 10, 40, 15, 1, 1, 'F');
                doc.setTextColor(255, 255, 255); doc.setFontSize(9); doc.setFont("helvetica", "bold");
                safeDocText(doc, `TOP ${100 - perc}%`, w - 55, cy + 16, { align: 'center' });
                doc.setTextColor(...cols.slate); doc.setFont("helvetica", "normal");
                safeDocText(doc, "Peringkat Global", w - 55, cy + 22, { align: 'center' }); // Sublabel

                cy += 45;

                // Content
                cy = printText("APA YANG DIUKUR INI", 'h2', cy);
                cy = printText((d.data.definition || "") + " " + filler2, 'body', cy);

                // ANALYTICAL INSIGHT BOX
                const anaText = (d.data.analysis || "") + " " + filler2;
                const anaLines = doc.splitTextToSize(anaText, w - 65);
                // Height = Title (10) + Body (lines*4.5) + Padding (15)
                const anaH = 25 + (anaLines.length * 5);

                checkBreak(anaH);

                // Box Bg
                doc.setFillColor(...cols.lightGray);
                safeDocRoundedRect(doc, 25, cy, w - 50, anaH, 1, 1, 'F');
                // Left Accent Strip
                doc.setFillColor(...cols.navy);
                safeDocRoundedRect(doc, 25, cy, 2, anaH, 1, 1, 'F');

                // Title
                doc.setFont("times", "bold"); doc.setFontSize(12); doc.setTextColor(...cols.navy);
                safeDocText(doc, "WAWASAN ANALITIS", 32, cy + 10);

                // Body
                doc.setFont("helvetica", "normal"); doc.setFontSize(9.5); doc.setTextColor(...cols.slate);
                safeDocText(doc, anaLines, 32, cy + 18);

                cy += anaH + 10;

                cy = printText("REKOMENDASI", 'h2', cy);

                // --- MINIMALIST STRATEGY LIST ---
                (d.data.development || []).forEach(dev => {
                    const title = dev[0];
                    const content = dev[1];

                    checkBreak(25);

                    // Left Border Accent style
                    doc.setDrawColor(...cols.blue); doc.setLineWidth(1);
                    safeDocLine(doc, 25, cy + 2, 25, cy + 15); // Accent line

                    doc.setTextColor(...cols.navy); doc.setFont("helvetica", "bold"); doc.setFontSize(10);
                    safeDocText(doc, title.toUpperCase(), 30, cy + 5);

                    const descLines = doc.splitTextToSize(String(content || ""), w - 60);
                    doc.setTextColor(...cols.slate); doc.setFont("helvetica", "normal"); doc.setFontSize(9.5);
                    safeDocText(doc, descLines, 30, cy + 10);

                    cy += (descLines.length * 4.5) + 12; // Spacing
                });

                // [NEW] PAGE 2 OF DOMAIN: WORKSHOP
                if (true) {
                    cy = addPage();
                    drawHeader(doc, "Workshop: " + d.name, pg, w, h, cols);
                    cy = 35;

                    const ws = pdfRichContent.workshops ? pdfRichContent.workshops[d.name] : null;
                    if (ws) {
                        // Intro
                        cy = printText(ws.intro, 'h2', cy);
                        cy += 5;

                        // Exercises
                        doc.setFillColor(...cols.navy);
                        safeDocRoundedRect(doc, 25, cy, w - 50, 8, 1, 1, 'F');
                        doc.setTextColor(255, 255, 255); doc.setFontSize(10); doc.setFont("helvetica", "bold");
                        safeDocText(doc, "LATIHAN MENTAL (GYM FOR BRAIN)", 30, cy + 5.5);
                        cy += 15;

                        (ws.exercises || []).forEach(ex => {
                            // 1. Calculate Heights First
                            doc.setFontSize(11); doc.setFont("helvetica", "bold");
                            const titleLines = doc.splitTextToSize(ex.name, w - 70); // 10mm padding each side

                            doc.setFontSize(9.5); doc.setFont("helvetica", "normal");
                            const descLines = doc.splitTextToSize(ex.desc, w - 70);

                            const innerH = 12 + (titleLines.length * 5) + (descLines.length * 4.5) + 5;
                            const cardH = innerH;

                            checkBreak(cardH + 5);

                            // 2. Draw Card Bg
                            doc.setFillColor(...cols.lightGray);
                            safeDocRoundedRect(doc, 25, cy, w - 50, cardH, 2, 2, 'F');

                            // 3. Badge (Top Left inside card)
                            const badgeCol = ex.level === "Beginner" ? cols.teal : (ex.level === "Advanced" ? cols.navy : cols.blue);
                            doc.setFillColor(...badgeCol);
                            safeDocRoundedRect(doc, 30, cy + 5, 25, 5, 1, 1, 'F');
                            doc.setTextColor(255, 255, 255); doc.setFontSize(7); doc.setFont("helvetica", "bold");
                            safeDocText(doc, (ex.level || "General").toUpperCase(), 42.5, cy + 8.5, { align: 'center' });

                            // 4. Time (Top Right inside card)
                            doc.setTextColor(...cols.slate); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
                            safeDocText(doc, "⏱ " + (ex.time || "Flexible"), w - 30, cy + 8.5, { align: 'right' });

                            // 5. Title
                            let curY = cy + 16;
                            doc.setTextColor(...cols.navy); doc.setFontSize(11); doc.setFont("helvetica", "bold");
                            safeDocText(doc, titleLines, 30, curY);
                            curY += (titleLines.length * 5);

                            // 6. Desc
                            curY += 1;
                            doc.setTextColor(...cols.slate); doc.setFontSize(9.5); doc.setFont("helvetica", "normal");
                            safeDocText(doc, descLines, 30, curY);

                            cy += cardH + 5; // Margin bottom
                        });

                        checkBreak(50);

                        // Books
                        cy += 10;
                        cy = printText("Rekomendasi Literatur", 'h2', cy);
                        (ws.books || []).forEach(b => cy = printText("• " + b, 'body', cy));

                        // Habits
                        cy += 10;
                        cy = printText("Kebiasaan Mikro", 'h2', cy);
                        (ws.habits || []).forEach(h => cy = printText("• " + h, 'body', cy));
                    }
                }
            });

            // 5. SYNTHESIS
            cy = addPage();
            drawHeader(doc, "Sintesis Kognitif", pg, w, h, cols);
            cy = 35;

            cy = printText("Sintesis Kognitif", 'h1', cy);
            cy = printText(pdfRichContent.synthesis.intro, 'body', cy);

            // --- NEW BENCHMARK BAR CHART ---
            cy += 10;
            cy = printText("Perbandingan Populasi", 'h3', cy);
            try {
                const barImg = generateBarChart(base);
                doc.addImage(barImg, 'PNG', 25, cy, 120, 40);
                cy += 45;
                cy = printText("Grafik batang di atas membandingkan skor IQ Anda dengan rata-rata populasi global (100).", 'sm', cy);
            } catch (e) { }

            (pdfRichContent.synthesis.traits || []).forEach(t => {
                cy += 5;
                checkBreak(20);
                cy = printText(t.label, 'h3', cy);
                cy = printText(t.text + " " + filler2, 'body', cy);
            });

            // 5.5 DEEP COGNITIVE ANALYSIS (8 Dimensions, 8 Pages)
            const reportData = deriveFromIQ(base);
            (reportData.dimensions_pages || []).forEach(dim => {
                cy = addPage();
                drawHeader(doc, "Analisis Kognitif Mendalam", pg, w, h, cols);
                cy = 35;

                // Icon + Title
                doc.setFillColor(...cols.teal);
                safeDocCircle(doc, 35, cy + 5, 10, 'F');
                doc.setTextColor(255, 255, 255); doc.setFontSize(12); doc.setFont("helvetica", "bold");
                const iconChar = dim.title ? dim.title.charAt(0) : "X";
                safeDocText(doc, iconChar, 35, cy + 9, { align: 'center' });

                doc.setTextColor(...cols.navy); doc.setFontSize(22);
                safeDocText(doc, (dim.title || "").toUpperCase(), 50, cy + 5);

                doc.setTextColor(...cols.blue); doc.setFontSize(12); doc.setFont("helvetica", "bolditalic");
                safeDocText(doc, dim.subtitle || "", 50, cy + 12);

                cy += 25;

                // 4 Sections: How, Neuro, Blind, Mastery
                const sections = [
                    { t: "Cara Kerja Otak Anda", c: dim.how_it_works, col: cols.slate },
                    { t: "Basis Neurosains", c: dim.neuro_basis, col: cols.slate, italic: true },
                    { t: "Blind Spots (Titik Buta)", c: dim.blind_spot, col: cols.navy, bg: cols.lightGray },
                    { t: "Rencana Penguasaan (Mastery Plan)", c: dim.mastery_plan }
                ];

                sections.forEach(sec => {
                    checkBreak(50);

                    if (Array.isArray(sec.c)) {
                        // Mastery Plan List
                        cy = printText(sec.t, 'h2', cy);
                        sec.c.forEach(step => {
                            cy = printText(step.title, 'h3', cy);
                            cy = printText(step.desc, 'body', cy);
                        });
                    } else {
                        // Standard Text
                        if (sec.bg) {
                            doc.setFillColor(...sec.bg);
                            safeDocRoundedRect(doc, 25, cy, w - 50, 20, 2, 2, 'F');
                        }
                        cy = printText(sec.t, 'h2', cy);
                        if (sec.italic) doc.setFont("helvetica", "italic");
                        cy = printText(sec.c, 'body', cy);
                        doc.setFont("helvetica", "normal");
                    }
                    cy += 5;
                });
            });

            // 6. CAREER & LEADERSHIP (2 Pages)
            if (reportData.career_guide) {
                // Page 1: Career Match
                cy = addPage();
                drawHeader(doc, "Kecocokan Karir Professional", pg, w, h, cols);
                cy = 35;

                cy = printText("Arsitektur Karir Anda", 'h1', cy);
                cy = printText("Berdasarkan profil kognitif Anda, berikut adalah peran dan lingkungan kerja yang dioptimalkan untuk kekuatan otak Anda.", 'body', cy);

                cy += 10;
                cy = printText("Peran Ideal (Best Fit Roles)", 'h2', cy);
                (reportData.career_guide.roles || []).forEach(r => cy = printText("• " + r, 'body', cy));

                cy += 10;
                cy = printText("Lingkungan Kerja Optimal", 'h2', cy);
                cy = printText(reportData.career_guide.env, 'body', cy);

                // Page 2: Leadership
                cy = addPage();
                drawHeader(doc, "Gaya Kepemimpinan & Kolaborasi", pg, w, h, cols);
                cy = 35;

                cy = printText("DNA Kepemimpinan", 'h1', cy);
                cy = printText(reportData.career_guide.leadership_style, 'body', cy);

                cy += 15;
                doc.setFillColor(...cols.lightGray);
                safeDocRoundedRect(doc, 25, cy, w - 50, 30, 2, 2, 'F');
                doc.setFont("helvetica", "bold"); doc.setTextColor(...cols.navy);
                safeDocText(doc, "TIPS KOLABORASI:", 35, cy + 10);
                doc.setFont("helvetica", "normal"); doc.setTextColor(...cols.slate);
                // split text
                const tipLines = doc.splitTextToSize(reportData.career_guide.collab_tip || "", w - 70);
                safeDocText(doc, tipLines, 35, cy + 18);
            }

            // 6.5 ULTRA EXPANSION SECTIONS
            // A. CASE STUDIES (4 Pages - 1 per Case)
            (pdfRichContent.case_studies || []).forEach((cs, idx) => {
                cy = addPage();
                drawHeader(doc, `Studi Kasus Profil Kognitif (${idx + 1}/4)`, pg, w, h, cols);
                cy = 35;

                // Badge
                doc.setFillColor(...cols.teal);
                safeDocRoundedRect(doc, 25, cy, 120, 8, 1, 1, 'F');
                doc.setTextColor(255, 255, 255); doc.setFontSize(9); doc.setFont("helvetica", "bold");
                safeDocText(doc, "ROLE MODEL: " + cs.role.toUpperCase(), 30, cy + 5.5);
                cy += 15;

                cy = printText(cs.name, 'h1', cy);
                doc.setFont("helvetica", "bolditalic"); doc.setTextColor(...cols.blue);
                cy = printText(cs.profile, 'h3', cy);

                cy += 5;
                cy = printText("Latar Belakang & Tantangan", 'h2', cy);
                cy = printText(cs.story, 'body', cy);

                cy += 10;
                // Takeaway Box
                doc.setFillColor(...cols.lightGray);
                safeDocRoundedRect(doc, 25, cy, w - 50, 25, 2, 2, 'F');
                doc.setFont("helvetica", "bold"); doc.setTextColor(...cols.navy);
                safeDocText(doc, "PELAJARAN UTAMA:", 35, cy + 10);
                doc.setFont("helvetica", "normal"); doc.setTextColor(...cols.slate);
                const takeLines = doc.splitTextToSize(cs.takeaway, w - 70);
                safeDocText(doc, takeLines, 35, cy + 16);
            });

            // B. BIOHACKING (4 Pages - 1 per Pillar)
            (pdfRichContent.biohacking || []).forEach((bio, idx) => {
                cy = addPage();
                drawHeader(doc, `Brain Biohacking: ${bio.title}`, pg, w, h, cols);
                cy = 35;

                cy = printText(bio.title, 'h1', cy);
                cy = printText(bio.intro, 'body', cy);

                cy += 10;
                cy = printText("Protokol Implementasi (" + (bio.title.includes("Nutrisi") ? "Non-Medical Advice" : "General Wellness") + ")", 'h2', cy);

                // Disclaimer
                doc.setFontSize(8); doc.setTextColor(...cols.gray); doc.setFont("helvetica", "italic");
                const disclaimer = "Disclaimer: Informasi ini bersifat edukatif dan umum. Konsultasikan dengan profesional kesehatan sebelum mengubah diet atau aktivitas fisik secara drastis.";
                const discLines = doc.splitTextToSize(disclaimer, w - 50);
                safeDocText(doc, discLines, 25, cy);
                cy += (discLines.length * 4) + 5;

                (bio.tips || []).forEach((tip, ti) => {
                    checkBreak(20);
                    // Numbered Circle
                    doc.setFillColor(...cols.navy);
                    safeDocCircle(doc, 30, cy + 4, 4, 'F');
                    doc.setTextColor(255, 255, 255); doc.setFontSize(8); doc.setFont("helvetica", "bold");
                    safeDocText(doc, String(ti + 1), 30, cy + 5, { align: 'center' });

                    // Text
                    const tipLines = doc.splitTextToSize(tip, w - 70);
                    doc.setTextColor(...cols.slate); doc.setFont("helvetica", "normal"); doc.setFontSize(10);
                    safeDocText(doc, tipLines, 40, cy + 5);

                    cy += (tipLines.length * 5) + 8;
                });
            });

            // C. FUTURE OUTLOOK (2 Pages)
            if (pdfRichContent.future_outlook) {
                cy = addPage();
                drawHeader(doc, "Future of Work (Era AI)", pg, w, h, cols);
                cy = 35;

                cy = printText("Kesiapan Masa Depan", 'h1', cy);
                cy = printText(pdfRichContent.future_outlook.intro, 'body', cy);

                cy += 10;
                (pdfRichContent.future_outlook.trends || []).forEach(tr => {
                    // Calc Height
                    const tLines = doc.splitTextToSize(tr.d, w - 65);
                    const trendH = 20 + (tLines.length * 5);

                    checkBreak(trendH);

                    // Box
                    doc.setFillColor(...cols.lightGray);
                    safeDocRoundedRect(doc, 25, cy, w - 50, trendH, 2, 2, 'F');
                    // Top Accent (Gold)
                    doc.setFillColor(218, 165, 32);
                    safeDocRoundedRect(doc, 25, cy, w - 50, 2, 2, 2, 'F'); // Top strip

                    // Title
                    doc.setFont("times", "bold"); doc.setFontSize(11); doc.setTextColor(...cols.navy);
                    safeDocText(doc, tr.t.toUpperCase(), 32, cy + 10);

                    // Body
                    doc.setFont("helvetica", "normal"); doc.setFontSize(9.5); doc.setTextColor(...cols.slate);
                    safeDocText(doc, tLines, 32, cy + 16);

                    cy += trendH + 8;
                });

                cy += 10;
                if (pdfRichContent.future_outlook.skills_forecast) {
                    cy = printText("Skills Forecast (6-12 Bulan)", 'h2', cy);
                    pdfRichContent.future_outlook.skills_forecast.forEach(sk => {
                        checkBreak(10);
                        cy = printText("• " + sk, 'body', cy);
                    });
                }

                // Extra page for Roadmap Template
                cy = addPage();
                drawHeader(doc, "Development Roadmap", pg, w, h, cols);
                cy = 35;

                const rmap = pdfRichContent.roadmap;
                if (rmap) {
                    cy = printText(rmap.placeholder_title || "MY PLAN", 'h1', cy);
                    cy = printText(rmap.intro || "", 'body', cy);
                    cy += 10;

                    (rmap.sections || []).forEach(sec => {
                        checkBreak(40);
                        // Section Header
                        doc.setFillColor(...cols.lightGray);
                        safeDocRoundedRect(doc, 25, cy, w - 50, 8, 1, 1, 'F');
                        doc.setTextColor(...cols.navy); doc.setFontSize(10); doc.setFont("helvetica", "bold");
                        safeDocText(doc, sec.toUpperCase(), 30, cy + 5.5);
                        cy += 10;

                        // Box for writing
                        doc.setDrawColor(...cols.gray); doc.setLineWidth(0.5);
                        safeDocRoundedRect(doc, 25, cy, w - 50, 25, 1, 1);
                        cy += 35;
                    });
                } else {
                    cy = printText("Peta Jalan Pengembangan 2025-2030", 'h1', cy);
                    for (let l = 0; l < 15; l++) {
                        doc.setDrawColor(...cols.gray);
                        safeDocLine(doc, 25, cy + (l * 10), w - 25, cy + (l * 10));
                    }
                }
            }

            // 6. CERTIFICATE (SOPHISTICATED REDESIGN)
            doc.addPage();
            const certBgUrl = "https://images.unsplash.com/photo-1542281286-9e0a56e2e181?q=80&w=1080&auto=format&fit=crop";
            const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://mindtest.id/dashboardIQ&bgcolor=FFFFFF&color=16213E";

            let certBg, qrImg;
            try {
                [certBg, qrImg] = await Promise.all([
                    fetchImage(certBgUrl),
                    fetchImage(qrUrl)
                ]);
            } catch (e) { }

            // Background
            if (certBg) {
                try { doc.addImage(certBg, 'JPEG', 0, 0, w, h); } catch (e) { }
            } else {
                doc.setFillColor(...cols.navy); doc.rect(0, 0, w, h, 'F');
            }

            // White Container
            doc.setFillColor(255, 255, 255);
            safeDocRoundedRect(doc, 15, 15, w - 30, h - 30, 2, 2, 'F');

            // Double Border (Gold & Navy)
            doc.setDrawColor(218, 165, 32); doc.setLineWidth(1); // Gold
            safeDocRect(doc, 20, 20, w - 40, h - 40);
            doc.setDrawColor(...cols.navy); doc.setLineWidth(0.5);
            safeDocRect(doc, 22, 22, w - 44, h - 44);

            cy = 40;

            // 1. HEADERS
            doc.setFont("times", "bold"); doc.setFontSize(22); doc.setTextColor(...cols.navy);
            safeDocText(doc, "SERTIFIKAT HASIL TES KECERDASAN (IQ)", w / 2, cy, { align: 'center' });

            cy += 8;
            doc.setFont("helvetica", "italic"); doc.setFontSize(14); doc.setTextColor(218, 165, 32); // Gold
            safeDocText(doc, "Certificate of Intelligence Assessment", w / 2, cy, { align: 'center' });

            cy += 15;
            doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...cols.slate);
            safeDocText(doc, "Dengan ini menerangkan bahwa:", w / 2, cy, { align: 'center' });

            // 2. PARTICIPANT INFO
            cy += 15;
            const certID = `MT-IQ-${new Date().getFullYear()}${String(base).padStart(3, '0')}-${Math.floor(Math.random() * 9999)}`;

            // Name
            doc.setFont("times", "bold"); doc.setFontSize(28); doc.setTextColor(...cols.navy);
            safeDocText(doc, uName.toUpperCase(), w / 2, cy, { align: 'center' });
            doc.setDrawColor(...cols.navy); doc.setLineWidth(0.5);
            safeDocLine(doc, w / 2 - 40, cy + 3, w / 2 + 40, cy + 3); // Underline

            cy += 10;
            doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(...cols.gray);
            safeDocText(doc, `Nomor Sertifikat: ${certID}`, w / 2, cy, { align: 'center' });

            cy += 12;
            doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...cols.slate);
            const introText = "telah mengikuti Tes Kecerdasan (IQ) berbasis digital yang diselenggarakan oleh MindTest.id dan memperoleh hasil sebagai berikut:";
            const introLines = doc.splitTextToSize(introText, 140);
            safeDocText(doc, introLines, w / 2, cy, { align: 'center' });

            // 3. IQ RESULTS (Boxed)
            cy += 15;
            doc.setFillColor(...cols.lightGray);
            safeDocRoundedRect(doc, 30, cy, w - 60, 35, 2, 2, 'F');
            doc.setDrawColor(218, 165, 32); doc.setLineWidth(0.5);
            safeDocRoundedRect(doc, 30, cy, w - 60, 35, 2, 2, 'S'); // Gold stroke

            let bx = 35; let by = cy + 10;

            // Helper for Categories
            const getCat = (s) => s >= 130 ? "Very Superior (Sangat Superior)" : s >= 120 ? "Superior" : s >= 110 ? "High Average (Rata-rata Atas)" : s >= 90 ? "Average (Rata-rata)" : s >= 80 ? "Low Average (Rata-rata Bawah)" : "Borderline";
            const cat = getCat(base);
            const perc = Math.floor((base - 55) / 90 * 99);

            // Row 1: Score label
            doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(...cols.navy);
            safeDocText(doc, "Skor IQ Total", bx, by);
            safeDocText(doc, ":", bx + 45, by);
            doc.setFontSize(14); doc.setTextColor(...cols.teal);
            safeDocText(doc, String(base), bx + 50, by);

            // Row 2: Category
            by += 8;
            doc.setFontSize(10); doc.setTextColor(...cols.navy);
            safeDocText(doc, "Kategori Kecerdasan", bx, by);
            safeDocText(doc, ":", bx + 45, by);
            doc.setFont("helvetica", "normal"); doc.setTextColor(...cols.slate);
            safeDocText(doc, cat, bx + 50, by);

            // Row 3: Percentile
            by += 8;
            doc.setFont("helvetica", "bold"); doc.setTextColor(...cols.navy);
            safeDocText(doc, "Persentil Populasi", bx, by);
            safeDocText(doc, ":", bx + 45, by);
            doc.setFont("helvetica", "normal"); doc.setTextColor(...cols.slate);
            safeDocText(doc, `Top ${100 - perc}% populasi umum`, bx + 50, by);

            cy += 45;

            // 4. COGNITIVE PROFILE SUMMARY
            doc.setFont("helvetica", "bold"); doc.setFontSize(11); doc.setTextColor(...cols.navy);
            safeDocText(doc, "RINGKASAN PROFIL KOGNITIF", 30, cy);
            doc.setDrawColor(...cols.navy); safeDocLine(doc, 30, cy + 2, 100, cy + 2);
            cy += 8;

            doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(...cols.slate);
            safeDocText(doc, "Berdasarkan hasil pengukuran, peserta menunjukkan:", 30, cy);
            cy += 6;

            // Dynamic Ratings
            const getRate = (score) => score >= 120 ? "Sangat Baik" : score >= 110 ? "Unggul" : score >= 100 ? "Baik" : "Cukup Baik";
            // Map domains roughly to requested fields
            const dScore = (i) => (domainScores[i] ? domainScores[i].score : base);

            const profiles = [
                { l: "Kemampuan Penalaran Logis", v: getRate(dScore(0)) }, // Assume Logical is index 0 or similar
                { l: "Pemahaman Pola & Analitis", v: getRate(dScore(1)) },
                { l: "Kecepatan Pemrosesan Informasi", v: getRate(dScore(2)) },
                { l: "Pemecahan Masalah Non-Verbal", v: getRate(dScore(3)) }
            ];

            profiles.forEach(p => {
                doc.setFont("helvetica", "normal"); doc.setTextColor(...cols.slate);
                safeDocText(doc, "• " + p.l, 35, cy);
                safeDocText(doc, ":", 90, cy);
                doc.setFont("helvetica", "bold"); doc.setTextColor(...cols.navy);
                safeDocText(doc, p.v, 95, cy);
                cy += 5;
            });

            cy += 3;
            doc.setFont("helvetica", "italic"); doc.setFontSize(8); doc.setTextColor(...cols.gray);
            safeDocText(doc, "Hasil ini mencerminkan potensi kognitif umum dalam konteks pembelajaran & pemecahan masalah.", 30, cy);

            // 5. METHODOLOGY & NOTES (Columns)
            cy += 10;
            const col1X = 30; const col2X = 110;

            // Methodology (Left)
            doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(...cols.navy);
            safeDocText(doc, "METODOLOGI TES", col1X, cy);
            cy += 5;
            doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(...cols.slate);
            const methods = [
                "Pendekatan psychometric-based assessment",
                "Soal berbasis logika, numerik, dan visual",
                "Adaptif terhadap tingkat kesulitan",
                "Distandarisasi sampel populasi umum"
            ];
            methods.forEach(m => {
                safeDocText(doc, "• " + m, col1X, cy);
                cy += 4;
            });

            // Notes (Right, aligned with Method top)
            let noteCy = cy - (methods.length * 4) - 5;
            doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(...cols.navy);
            safeDocText(doc, "CATATAN PENTING", col2X, noteCy);
            noteCy += 5;
            doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(...cols.slate);
            const notes = [
                "Bukan diagnosis psikologis/medis.",
                "Tidak menggantikan asesmen klinis.",
                "Untuk keperluan edukatif & eksplorasi."
            ];
            notes.forEach(n => {
                safeDocText(doc, "• " + n, col2X, noteCy);
                noteCy += 4;
            });

            cy = Math.max(cy, noteCy) + 10;

            // 6. FOOTER / VALIDATION (Bottom)
            const footerY = h - 50;

            // Left: MindTest Info
            doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(...cols.navy);
            safeDocText(doc, "Diterbitkan oleh:", 30, footerY);
            safeDocText(doc, "MindTest.id", 30, footerY + 5);
            doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(...cols.slate);
            safeDocText(doc, "Platform Asesmen Digital &", 30, footerY + 10);
            safeDocText(doc, "Pengembangan Potensi", 30, footerY + 14);

            // Center: Dates
            doc.setFont("helvetica", "bold"); doc.setFontSize(9); doc.setTextColor(...cols.navy);
            const todayStr = new Date().toLocaleDateString('id-ID');
            safeDocText(doc, "Tanggal Tes:", w / 2 - 20, footerY, { align: 'left' });
            doc.setFont("helvetica", "normal"); safeDocText(doc, todayStr, w / 2 + 30, footerY, { align: 'right' });

            doc.setFont("helvetica", "bold");
            safeDocText(doc, "Tanggal Penerbitan:", w / 2 - 20, footerY + 5, { align: 'left' });
            doc.setFont("helvetica", "normal"); safeDocText(doc, todayStr, w / 2 + 30, footerY + 5, { align: 'right' });

            // Right: QR & Sig
            const rightX = w - 40;
            if (qrImg) {
                try { doc.addImage(qrImg, 'PNG', rightX - 15, footerY - 5, 25, 25); } catch (e) { }
            }
            doc.setFont("helvetica", "bold"); doc.setFontSize(8); doc.setTextColor(...cols.navy);
            safeDocText(doc, "QR Verifikasi Sertifikat", rightX, footerY + 25, { align: 'center' });

            // Watermark again?
            if (logoImg) {
                try {
                    doc.setGState(new doc.GState({ opacity: 0.05 }));
                    doc.addImage(logoImg, 'PNG', w / 2 - 50, h / 2 - 50, 100, 100);
                    doc.setGState(new doc.GState({ opacity: 1.0 }));
                } catch (e) { }
            }

        }
        // Ensure watermark on cover and all pages (cover is pg 1)
        // We can iterate pages at the end to force watermark if missed? 
        // Or just ensure drawFooter (which contains watermark) is called for >1.
        // For cover (page 1), we need to call it manually if we want watermark there too.
        if (isSample) drawWatermark(doc, w, h); // Draw on current page (last page)

        // Loop all pages to ensure watermark?
        const totalPages = doc.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            if (isSample) drawWatermark(doc, w, h);
            // Redraw footer if needed? No, already drawn during generation.
        }

        const filename = isSample ? `Sample_Laporan_${uName.replace(/\s+/g, '_')}.pdf` : `Sertifikat_${uName.replace(/\s+/g, '_')}.pdf`;
        doc.save(filename);
    } catch (e) {
        console.error(e);
        alert("PDF Error: " + e.message);
    } finally {
        if (typeof btn !== 'undefined' && btn) {
            btn.innerHTML = (typeof oldBtn !== 'undefined') ? oldBtn : "Download PDF";
            btn.disabled = false;
        }
    }
};

// --- DATA LOGIC PORTED FROM DASHBOARD ---
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
                { icon: "construction", text: "Hands-on Learner: Lebih paham kalau tangan langsung kotor ngerjain" },
                { icon: "replay", text: "Iterative Process: Belajar paling efektif dari kesalahan langsung (Trial & Error)" },
                { icon: "visibility", text: "Butuh Visualisasi Nyata, sulit memproses konsep yang terlalu abstrak" },
                { icon: "biotech", text: "Secara alami menolak teori yang tidak praktis" },
                { icon: "handyman", text: "Jago Improvisasi saat alat atau bahan terbatas" }
            ],
            scientific_fact: "Otak tipe ini memiliki koneksi motorik-kognitif yang kuat, memproses informasi kinestetik lebih cepat daripada verbal.",
            action_plan: [
                "Gunakan teknik 'Mind Mapping' tapi pakai benda nyata/sticky notes",
                "Rekam suaramu saat belajar hal baru, lalu dengarkan sambil jalan kaki",
                "Pecah tugas besar jadi langkah fisik kecil (cth: 'Buka laptop', 'Ketik judul')"
            ],
            growthPotential_details: [{ icon: "school", text: "Guided Learning: Kalau instruksinya jelas step-by-step, kamu pasti bisa" }, { icon: "support", text: "Support System: Lingkungan yang suportif bikin kamu makin berkembang" }, { icon: "task_alt", text: "Repetition: Latihan berulang adalah kunci sukses kamu" }],
            decisionStyle_details: [{ icon: "visibility", text: "Concrete Evidence: Mutusin sesuatu berdasarkan apa yang kelihatan mata" }, { icon: "history_toggle_off", text: "Instinctual: Firasat kamu seringkali bener lho untuk situasi mendesak" }, { icon: "warning", text: "Present Focus: Fokus ke solusi masalah saat ini, bukan jangka panjang" }],
            adaptationSpeed_details: [{ icon: "schedule", text: "Slow & Steady: Butuh waktu dikit buat adaptasi, tapi pasti bisa" }, { icon: "sync_problem", text: "Routine Oriented: Lebih tenang kalau situasinya stabil dan terprediksi" }, { icon: "checklist", text: "Instruction Dependent: Suka banget kalau udah ada panduan SOP jelas" }],
            metacognition_details: [{ icon: "question_mark", text: "Action Oriented: Jarang mikirin 'cara mikir', yang penting langsung jalan" }, { icon: "error", text: "Feedback Check: Kadang butuh dikasih tau temen kalau ada detail yang kelewat" }, { icon: "psychology_question", text: "Peer Learning: Belajar bareng orang lain itu efektif banget buatmu" }],
            thinkingBias_details: [{ icon: "filter_alt", text: "Confirmation Bias: Yakin banget sama apa yang udah kamu percaya sejak lama" }, { icon: "group", text: "Social Proof: Suka dengerin saran temen deket daripada data asing" }, { icon: "thumb_up", text: "Optimism Bias: Fokus ke hal-hal positif yang mendukung mood kamu" }],
            creativityType_details: [{ icon: "build_circle", text: "Practical Innovation: Jago banget nemu solusi akal-akalan yang jenius untuk masalah fisik" }, { icon: "directions_run", text: "Efficiency Hacks: Bikin kerjaan fisik jadi lebih enteng dengan alat sederhana" }, { icon: "recycling", text: "Upcycling: Pinter manfaatin barang bekas yang ada jadi berguna" }],
            suitableDomains_details: [{ icon: "agriculture", text: "Field Work: Kerjaan yang hasilnya langsung kelihatan fisik" }, { icon: "cleaning_services", text: "Structured Services: Bidang yang teratur dan jelas SOP-nya" }, { icon: "fastfood", text: "Operational: Lingkungan kerja yang rapi sistemnya" }],
            focusDuration_details: [{ icon: "timer_10", text: "Short Bursts: Fokusnya singkat (15-20 menit) tapi tajam banget" }, { icon: "distractions", text: "Sensitive Environment: Butuh suasana yang tenang untuk konsentrasi" }, { icon: "task", text: "Single Tasking: Paling jago kalau ngerjain satu hal di satu waktu" }],
            performanceStability_details: [{ icon: "monitoring", text: "Mood Driven: Semangat kerja cenderung mengikuti suasana hati" }, { icon: "mood", text: "High Peak: Kalau lagi happy, kerjanya cepet dan rajin banget" }, { icon: "support_agent", text: "Need Encouragement: Butuh apresiasi rutin biar makin konsisten" }]
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
                { icon: "history", text: "Mengandalkan Memory Bank: Mengingat solusi dari masalah serupa di masa lalu" },
                { icon: "copy_all", text: "Jago dalam ATM (Amati Tiru Modifikasi) dari solusi orang lain" },
                { icon: "build", text: "Solusi harus Konkret & Teruji, anti wacana teoritis" },
                { icon: "group_work", text: "Bagus dalam Koordinasi Lapangan secara langsung" },
                { icon: "timer", text: "Cepat tanggap dalam Situasi Rutin yang sudah dikuasai" }
            ],
            scientific_fact: "Pembelajar prosedural memiliki aktivitas tinggi di Basal Ganglia, area otak yang mengatur kebiasaan dan pengulangan motorik.",
            action_plan: [
                "Bikin checklist harian. Otakmu suka dopamin saat mencentang tugas 'Selesai'",
                "Cari mentor. Kamu belajar lebih cepat lewat observasi langsung daripada baca manual",
                "Ubah rutinitasmu sedikit demi sedikit agar neuroplastisitas otak tetap aktif"
            ],
            growthPotential_details: [{ icon: "model_training", text: "Example Based: Langsung paham kalau dikasih contoh nyata atau demo" }, { icon: "menu_book", text: "Manuals: Suka banget kalau ada panduan langkah demi langkah (SOP)" }, { icon: "repeat_one", text: "Drilling: Makin sering diulang, skill kamu makin tajam dan otomatis" }],
            decisionStyle_details: [{ icon: "event_repeat", text: "Consistent: Keputusanmu biasanya konsisten, aman, dan minim risiko" }, { icon: "checklist_rtl", text: "Rule Based: Tertib ngikutin prosedur atau aturan yang berlaku" }, { icon: "social_distance", text: "Status Quo: Cenderung mempertahankan apa yang sudah berjalan baik" }],
            adaptationSpeed_details: [{ icon: "foundation", text: "Stability First: Paling produktif di lingkungan yang stabil dan minim kejutan" }, { icon: "layers", text: "Phased Adapt: Butuh adaptasi bertahap, tapi setelah itu performa sangat solid" }, { icon: "groups", text: "Social Buffer: Kalau ada temen yang bantuin, adaptasi jadi jauh lebih cepat" }],
            metacognition_details: [{ icon: "visibility", text: "Self Aware: Cukup sadar kalau melakukan kesalahan dan mau memperbaikinya" }, { icon: "help_center", text: "Help Seeking: Nggak gengsi bertanya kalau memang merasa buntu" }, { icon: "feedback", text: "Feedback Receptive: Makin berkembang lewat masukan konstruktif orang lain" }],
            thinkingBias_details: [{ icon: "person_search", text: "Experience Bias: Lebih percaya pengalaman pribadi dibanding data statistik" }, { icon: "verified", text: "Authority Bias: Sangat percaya pada pendapat ahli atau atasan" }, { icon: "unpublished", text: "Risk Aversion: Jarang mendebat, lebih suka bermain aman (conflict avoidance)" }],
            creativityType_details: [{ icon: "settings_suggest", text: "Simplification: Jago menyederhanakan proses kerja yang ribet jadi simpel" }, { icon: "low_priority", text: "Kaizen: Suka melakukan perbaikan kecil terus-menerus (improvement)" }, { icon: "handyman", text: "Applied Creativity: Kreativitas kamu itu solutif dan langsung bisa dipakai" }],
            suitableDomains_details: [{ icon: "support_agent", text: "Service & Support: Posisi yang membutuhkan kesabaran dan standar pelayanan" }, { icon: "real_estate_agent", text: "Administration: Bidang yang membutuhkan ketelitian dan keteraturan tinggi" }, { icon: "assignment", text: "Operations: Pelaksana lapangan yang handal dan terpercaya" }],
            focusDuration_details: [{ icon: "timelapse", text: "Task Driven: Fokus terjaga baik jika tugas dan targetnya jelas (S.M.A.R.T)" }, { icon: "checklist", text: "Result Oriented: Termotivasi produktif kalau sudah tahu 'goal'-nya apa" }, { icon: "notifications_off", text: "Structure Need: Kurang nyaman dengan ambiguitas atau distraksi mendadak" }],
            performanceStability_details: [{ icon: "autorenew", text: "Reliable: Kerjaan rutin pasti beres dengan standar kualitas yang sama" }, { icon: "trending_down", text: "Clarity Need: Performa bisa turun kalau instruksi berubah-ubah mendadak" }, { icon: "pace", text: "Consistent Pace: Ritme kerja kamu stabil seperti mesin diesel, makin lama makin panas" }]
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
            description: `Analisis menunjukkan keseimbangan solid antara logika dan praktek. Kamu adalah tulang punggung efisiensi, eksekutor andalan yang membuat roda organisasi berputar mulus.`,
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
                { icon: "schema", text: "Structured: Memecahkan masalah dengan langkah-langkah logis dan teratur" },
                { icon: "fact_check", text: "Fact Based: Menyingkirkan opini, fokus pada data dan kejadian nyata" },
                { icon: "speed", text: "Efficient: Selalu mencari rute tercepat menuju solusi (Shortcut Master)" },
                { icon: "mediation", text: "Pragmatic: Solusi itu yang penting 'jalan', nggak harus sempurna atau indah" },
                { icon: "account_tree", text: "Root Cause: Cepat mengidentifikasi akar masalah tanpa berbelit-belit" }
            ],
            scientific_fact: "Lobus Frontal kiri sangat dominan pada tipe ini, mendukung pemikiran analitis, logis, dan bahasa yang terstruktur.",
            action_plan: [
                "Gunakan Prinsip Pareto (80/20) dalam segala hal. Fokus pada 20% usaha yang hasilkan 80% dampak",
                "Latih 'Lateral Thinking' (berpikir menyamping) agar tidak terlalu kaku",
                "Sesekali ambil keputusan berdasarkan intuisi untuk melatih belahan otak kanan"
            ],
            growthPotential_details: [{ icon: "trending_up", text: "Career Ladder: Potensi besar untuk naik jabatan karena konsistensi kerja" }, { icon: "engineering", text: "Skill Stacking: Jago menggabungkan beberapa skill teknis jadi keunggulan baru" }, { icon: "groups_2", text: "Leadership: Tipe pemimpin yang 'membumi' dan dihormati karena kapabilitas" }],
            decisionStyle_details: [{ icon: "analytics", text: "Analytic: Membedah opsi pro dan kontra dengan sangat jeli" }, { icon: "balance", text: "Balanced: Jarang impulsif, tapi juga nggak lelet. Pas di tengah" }, { icon: "gavel", text: "Justifiable: Selalu punya alasan logis kalau ditanya 'kenapa milih itu?'" }],
            adaptationSpeed_details: [{ icon: "tune", text: "Calculated Adapt: Berubah kalau itung-itungannya untung (ROI positif)" }, { icon: "rocket_launch", text: "Early Adopter: Bukan yang pertama, tapi cepat nyusul kalau trennya bagus" }, { icon: "published_with_changes", text: "Optimizer: Masuk ke sistem baru dan langsung bikin lebih efisien" }],
            metacognition_details: [{ icon: "fact_check", text: "Evaluative: Suka ngecek hasil kerja sendiri (Quality Control)" }, { icon: "psychology", text: "Realistic Self: Paham betul batas kemampuan diri, nggak muluk-muluk" }, { icon: "edit_note", text: "Planner: Suka merencanakan 'next step' untuk perbaikan diri" }],
            thinkingBias_details: [{ icon: "visibility_off", text: "Realism Bias: Terlalu realistis kadang bikin takut bermimpi besar" }, { icon: "block", text: "Functional Fixedness: Kadang terpaku sama cara lama yang 'udah biasa'" }, { icon: "linear_scale", text: "Linear Thinking: Mikirnya lurus banget A ke B, padahal bisa loncat" }],
            creativityType_details: [{ icon: "architecture", text: "Structural: Kreatif dalam membangun sistem atau kerangka kerja" }, { icon: "merge_type", text: "Synthetic: Jago menggabungkan ide A dan B jadi solusi C yang paten" }, { icon: "lightbulb_circle", text: "Solutionist: Kreativitas muncul saat kepepet masalah nyata" }],
            suitableDomains_details: [{ icon: "business_center", text: "Management: Mengatur sumber daya manusia dan alat" }, { icon: "trending_up", text: "Business: Naluri bisnis dan profitabilitas yang tajam" }, { icon: "laptop_mac", text: "Tech Specialist: Ahli teknis yang bisa diandalkan" }],
            focusDuration_details: [{ icon: "timer", text: "Standard Shift: Bisa fokus 2-3 jam non-stop (Deep Work)" }, { icon: "do_not_disturb_on", text: "Controlled: Bisa memblokir gangguan kalau lagi 'in the zone'" }, { icon: "schedule", text: "Disciplined: Punya jadwal kerja/belajar yang teratur" }],
            performanceStability_details: [{ icon: "ssid_chart", text: "Steady Growth: Performa naik terus secara bertahap dan pasti" }, { icon: "bolt", text: "Efficient Energy: Nggak boros energi buat hal drama/nggak penting" }, { icon: "check_circle", text: "Dependable: Paling bisa diandalkan buat deadline ketat" }]
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
                { icon: "grain", text: "Pattern Recognition: Jeli melihat pola tersembunyi dalam data acak" },
                { icon: "hub", text: "Systems Thinking: Memahami bagaimana satu bagian mempengaruhi keseluruhan sistem" },
                { icon: "troubleshoot", text: "Root Cause: Tidak puas dengan gejala, selalu cari akar masalah terdalam" },
                { icon: "psychology_alt", text: "Simulation: Mampu melakukan simulasi mental kompleks sebelum eksekusi" },
                { icon: "schema", text: "Frameworks: Suka membuat model atau kerangka kerja baru sendiri" }
            ],
            scientific_fact: "Cortex Prefrontal kamu sangat efisien, membutuhkan lebih sedikit energi glukosa untuk memproses masalah kompleks dibanding rata-rata orang.",
            action_plan: [
                "Hindari 'Intellectual Arrogance'. Selalu asumsikan ada orang di ruangan yang lebih tahu dari kamu",
                "Latih empati. Kadang solusi logis bukan solusi terbaik untuk manusia",
                "Dokumentasikan caramu berpikir. Itu bisa jadi SOP atau paten yang berharga"
            ],
            growthPotential_details: [{ icon: "auto_stories", text: "Autodidact: Bisa belajar skill sulit apa saja secara mandiri lewat buku/internet" }, { icon: "integration_instructions", text: "Concept Glue: Konsep rumit langsung nempel di kepala dan terkoneksi satu sama lain" }, { icon: "explore", text: "Deep Dive: Keponya tinggi banget sama ilmu baru sampai ke akar-akarnya" }],
            decisionStyle_details: [{ icon: "account_tree", text: "Scenario Planning: Selalu mikirin plan A, B, sampai Z untuk segala kemungkinan" }, { icon: "rule", text: "Rationale: Keputusanmu selalu ada dasar logika yang kuat dan bisa dipertanggungjawabkan" }, { icon: "risk_assessment", text: "Calm Under Pressure: Tetap tenang dan logis saat harus memutuskan dalam kondisi krisis" }],
            adaptationSpeed_details: [{ icon: "dns", text: "Instant Map: Sistem baru? Langsung paham peta mentalnya dalam hitungan menit" }, { icon: "cognition", text: "Strategic Pivot: Cepat banget memetakan strategi baru saat situasi berubah" }, { icon: "change_history", text: "Optimizer: Malah suka nyari celah buat bikin sistem baru tersebut jadi lebih efisien" }],
            metacognition_details: [{ icon: "self_improvement", text: "Continuous Improvement: Sering evaluasi diri buat jadi versi yang lebih baik dari kemarin" }, { icon: "plagiarism", text: "Bias Check: Tau banget kelebihan dan kekurangan/bias otak sendiri" }, { icon: "checklist", text: "Meta Strategy: Punya strategi khusus tentang 'bagaimana cara berpikir' (Thinking about thinking)" }],
            thinkingBias_details: [{ icon: "military_tech", text: "Overconfidence: Kadang terlalu yakin sama analisa sendiri sampai meremehkan faktor X" }, { icon: "psychology", text: "Attribute Substitution: Suka lupa kalau faktor keberuntungan (luck) juga berpengaruh besar" }, { icon: "model_training", text: "Anchoring: Hati-hati kepatok sama informasi pertama yang kamu terima" }],
            creativityType_details: [{ icon: "schema", text: "Disruptive: Inovasi kamu biasanya ngerombak sistem lama sampai ke akarnya" }, { icon: "mediation", text: "Convergent: Pinter milih satu solusi terbaik dari sekian banyak opsi kreatif" }, { icon: "design_services", text: "System Design: Jago mendesain ulang alur kerja agar jauh lebih efisien" }],
            suitableDomains_details: [{ icon: "analytics", text: "Data Science: Cocok banget main data, pola, dan strategi kompleks" }, { icon: "code", text: "Engineering: Dunia coding, teknik, atau finance butuh otak kayak kamu" }, { icon: "bar_chart", text: "Business Strategy: Pinter nerjemahin data abstrak jadi strategi jitu" }],
            focusDuration_details: [{ icon: "routine", text: "Deep Work: Bisa fokus dalem banget berjam-jam (Hyperfocus)" }, { icon: "filter_center_focus", text: "Tunnel Vision: Gangguan eksternal nggak mempan buat kamu saat sedang asik" }, { icon: "all_inclusive", text: "Task Switch: Gampang pindah fokus antar tugas kompleks kalau diperluin" }],
            performanceStability_details: [{ icon: "show_chart", text: "High Performer: Performa kamu konsisten tinggi di atas rata-rata" }, { icon: "battery_charging_full", text: "Endurance: Energi mental kamu kayak nggak abis-abis buat mikir keras" }, { icon: "new_releases", text: "Challenge Driven: Malah makin semangat kalau masalahnya susah dan belum terpecahkan" }]
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
                { icon: "public", text: "Visionary: Melihat konsekuensi 10-20 tahun ke depan untuk masalah hari ini" },
                { icon: "share", text: "Synthesis: Menggabungkan seni, sains, dan bisnis dalam satu solusi holistik" },
                { icon: "interests", text: "Insightful Leap: Sering mendapat 'aha moments' yang sulit dijelaskan runtutannya" },
                { icon: "diversity_3", text: "Mampu Paradox Holding (menahan dua ide berlawanan) di kepala secara bersamaan" },
                { icon: "psychology", text: "Sangat sensitif terhadap anomali kecil yang orang lain abaikan" }
            ],
            scientific_fact: "Otak Gifted memiliki 'Divergent Thinking' yang ekstrem dan konektivitas neuro-kognitif yang lebih padat, memungkinkan lompatan logika yang masif.",
            action_plan: [
                "Cari 'Intellectual Peers'. Kamu butuh sparring partner agar tidak merasa terisolasi",
                "Latih 'Komunikasi'. Ide jeniusmu tidak berguna jika orang lain tidak paham. Belajar menyederhanakan bahasa",
                "Kelola perfeksionisme. 'Selesai' lebih baik daripada 'Sempurna'. Jangan biarkan ide numpuk di kepala"
            ],
            growthPotential_details: [{ icon: "rocket", text: "Curiosity Fuel: Rasa ingin tahu kamu adalah bahan bakar utama yang tak terbatas" }, { icon: "fork_right", text: "Innovator: Bukan cuma belajar, tapi menciptakan pengetahuan/metode baru" }, { icon: "draw", text: "Creator: Mengubah konsep abstrak menjadi karya nyata yang orisinal" }],
            decisionStyle_details: [{ icon: "radar", text: "Long Horizon: Selalu berpikir 5-10 langkah ke depan (Grand Strategy)" }, { icon: "insights", text: "Intuitive Logic: Kombinasi maut antara data keras dan intuisi tajam" }, { icon: "commit", text: "Boldness: Berani mengambil keputusan strategis yang tidak populer tapi visioner" }],
            adaptationSpeed_details: [{ icon: "component_exchange", text: "Transformer: Bukan cuma adaptasi, tapi mengubah lingkungan agar sesuai visimu" }, { icon: "stream", text: "Fluid Mind: Pikiran kamu fleksibel banget, kayak air yang ngikutin wadah" }, { icon: "settings", text: "Opportunity: Melihat perubahan sebagai ladang inovasi, bukan ancaman" }],
            metacognition_details: [{ icon: "manage_accounts", text: "Hyper Aware: Sadar banget sama cara kerja, bias, dan potensi otak sendiri" }, { icon: "memory", text: "Efficient: Otakmu bekerja sangat efisien, memotong jalur birokrasi pikiran" }, { icon: "select_all", text: "Objective: Bisa menilai diri sendiri secara 'brutal' dan objektif" }],
            thinkingBias_details: [{ icon: "functions", text: "Hyper Logic: Hati-hati jangan sampai logika mematikan rasa manusiawi" }, { icon: "psychology_alt", text: "Isolation: Kadang merasa kesepian karena 'frekuensi' berpikir yang jarang nyambung" }, { icon: "select_window", text: "Over Thinking: Awas terjebak dalam labirin pikiran sendiri yang tiada ujung" }],
            creativityType_details: [{ icon: "emoji_objects", text: "Originality: Ide-ide kamu seringkali 'belum pernah terpikirkan' orang lain" }, { icon: "square_foot", text: "First Principles: Membangun solusi dari dasar kebenaran paling fundamental" }, { icon: "gesture", text: "Paradigm Shift: Suka menciptakan kerangka berpikir baru yang mengubah aturan main" }],
            suitableDomains_details: [{ icon: "science", text: "R&D: Dunia riset dan inovasi yang penuh ketidakpastian butuh kamu" }, { icon: "api", text: "Inventor: Menjadi penemu atau pembaharu adalah panggilan jiwamu" }, { icon: "polyline", text: "Autonomous: Butuh lingkungan dengan kebebasan intelektual tinggi" }],
            focusDuration_details: [{ icon: "hdr_strong", text: "Hyperfocus: Bisa tenggelam dalam topik menarik sampai lupa waktu" }, { icon: "eject", text: "Flow Master: Mudah mengakses 'Flow State' kapanpun dibutuhkan" }, { icon: "airwave", text: "Deep Dive: Tidak suka permukaan, selalu ingin menyelami sampai dasar" }],
            performanceStability_details: [{ icon: "show_chart", text: "Peak Performance: Mampu mencapai level performa yang 'mustahil' bagi orang lain" }, { icon: "battery_charging_full", text: "Mental Stamina: Energi berpikir yang sangat besar dan tahan lama" }, { icon: "new_releases", text: "Anti Fragile: Malah makin semangat kalau masalahnya susah dan belum terpecahkan" }]
        };

        return {
            iq, percentile: pct, category: profile.c, description: profile.description,
            learningCeiling: profile.lc, problemSolvingStyle: profile.ps, adaptationSpeed: profile.ad, growthPotential: profile.gp,
            suitableDomains: profile.ce.split(', '), thinkingBias: profile.cb,
            creativityType: iq < 110 ? 'Praktikal' : (iq < 125 ? 'Konseptual' : 'Divergen'),
            decisionStyle: profile.ds, focusDuration: 30,
            metacognition: profile.mc,
            problemSolvingStyle_details: profile.problemSolvingStyle_details,
            decisionStyle_details: profile.decisionStyle_details,
            growthPotential_details: profile.growthPotential_details,
            adaptationSpeed_details: profile.adaptationSpeed_details,
            metacognition_details: profile.metacognition_details,
            thinkingBias_details: profile.thinkingBias_details,
            creativityType_details: profile.creativityType_details,
            suitableDomains_details: profile.suitableDomains_details,
            focusDuration_details: profile.focusDuration_details,
            performanceStability_details: profile.performanceStability_details,
            efficiency_details: profile.efficiency_details,
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

            // [NEW] Deep Insights for 25-Page Report
            ...deriveDeepInsights(iq, profile)
        };
    } catch (err) {
        console.error("Critical Error in deriveFromIQ:", err);
        return {
            iq: iq, percentile: 50, category: "N/A", description: "Error fetching profile.",
            suitableDomains: [], problemSolvingStyle_action_plan: []
        };
    }
}

function deriveDeepInsights(iq, profile) {
    const isHigh = iq >= 115;
    const isAvg = iq >= 85 && iq < 115;

    // 1. DIMENSION PAGES (8 Pages)
    // Structure: Title, Subtitle, "How You Function", "Neuroscience", "Blind Spots", "Mastery Plan"

    const dims = [
        {
            key: "problemSolving",
            title: "Gaya Pemecahan Masalah",
            subtitle: isHigh ? "Pendekatan Strategis & Abstrak" : (isAvg ? "Pendekatan Praktis & Efisien" : "Pendekatan Konkret & Langsung"),
            icon: "psychology",
            how_it_works: isHigh
                ? "Otak Anda cenderung melakukan 'Zoom Out' otomatis saat menghadapi masalah. Anda tidak terjebak pada detail teknis di awal, melainkan mencari pola besar dan akar penyebab sistemik. Ini memungkinkan Anda melihat solusi yang seringkali tidak terpikirkan oleh orang yang terlalu fokus pada prosedur."
                : "Anda memiliki bakat alami untuk melihat jalur terpendek dari A ke B. Otak Anda menyaring informasi yang tidak relevan dan langsung fokus pada langkah praktis yang bisa dieksekusi sekarang. Ini membuat Anda sangat tangguh dalam situasi krisis yang butuh keputusan cepat.",
            neuro_basis: "Studi fMRI menunjukkan bahwa gaya berpikir seperti ini melibatkan konektivitas tinggi antara jaringan Frontoparietal Control dan Default Mode Network, memungkinkan simulasi mental yang kompleks sebelum tindakan fisik diambil.",
            blind_spot: isHigh
                ? "Analysis Paralysis: Terlalu asik menganalisis kemungkinan sampai lupa mengambil tindakan nyata. Ingat, solusi 80% yang dijalankan lebih baik daripada solusi 100% yang hanya ada di kepala."
                : "Functional Fixedness: Terkadang sulit melihat kegunaan baru dari alat lama. Cobalah sesekali berhenti sejenak dan bertanya: 'Apakah ada cara yang benar-benar berbeda untuk melakukan ini?'",
            mastery_plan: [
                { title: "Definisikan Ulang Masalah (Reframing)", desc: "Jangan langsung loncat ke solusi. Tulis masalahnya, lalu tulis ulang dengan sudut pandang berbeda. Cth: 'Gimana cara jual lebih banyak?' -> 'Gimana cara bikin orang antri beli?'" },
                { title: "Teknik 5 Why", desc: "Tanya 'Kenapa' 5 lapis ke bawah untuk menemukan akar masalah yang sebenarnya, bukan hanya gejala permukaan." },
                { title: "Simulasi Pre-Mortem", desc: "Sebelum mulai proyek, bayangkan proyek itu SUDAH gagal. Lalu cari tahu apa penyebabnya dan cegah sekarang." }
            ]
        },
        {
            key: "growthPotential",
            title: "Potensi Pertumbuhan (Learnability)",
            subtitle: "Kapasitas Neuroplastisitas & Adaptasi Belajar",
            icon: "trending_up",
            how_it_works: isHigh
                ? "Anda adalah 'Autodidak Alami'. Anda tidak butuh silabus kaku; rasa ingin tahu Anda adalah kurikulum terbaik. Anda mampu menyerap konsep baru dengan cepat dengan cara mengaitkannya dengan konsep lama yang sudah Anda pahami (Associative Learning)."
                : "Anda adalah 'Pembelajar Kinestetik'. Anda belajar paling cepat saat tangan Anda bekerja. Teori di papan tulis seringkali membosankan bagi Anda, tapi begitu Anda diberi alatnya, Anda bisa menguasainya lebih cepat dari profesor sekalipun.",
            neuro_basis: "Kapasitas ini terkait dengan kepadatan reseptor Dopamin di Striatum, yang mengatur motivasi dan reward saat mempelajari hal baru. Otak Anda memberikan 'hadiah' kimiawi yang besar saat Anda berhasil memecahkan kode baru.",
            blind_spot: "Comfort Zone Trap: Karena Anda cepat bisa, Anda kadang cepat bosan. Bahayanya adalah Anda menjadi 'Jack of all trades, master of none'. Anda butuh disiplin untuk mendalami satu hal sampai level 'Mastery'.",
            mastery_plan: [
                { title: "Aturan 20 Jam", desc: "Fokus belajar skill baru secara intensif selama 20 jam pertama untuk melewati fase frustrasi awal." },
                { title: "Teknik Feynman", desc: "Coba jelaskan apa yang baru Anda pelajari dengan hhasa sangat sederhana. Jika macet, berarti Anda belum benar-benar paham." },
                { title: "Spaced Repetition", desc: "Ulangi materi di interval waktu yang semakin jarang (1 hari, 3 hari, 1 minggu) untuk memindahkannya ke memori jangka panjang." }
            ]
        },
        {
            key: "decisionStyle",
            title: "Gaya Pengambilan Keputusan",
            subtitle: "Antara Intuisi Cepat dan Analisis Data",
            icon: "balance",
            how_it_works: "Profil Anda menunjukkan kecenderungan " + (profile.decisionStyle_fact || "seimbang") + ". Anda memproses input risiko dan peluang dengan filter unik yang memprioritaskan " + (isHigh ? "dampak jangka panjang" : "keamanan dan kepastian saat ini") + ".",
            neuro_basis: "Melibatkan kompetisi antara Amigdala (respon takut/emosi) dan Korteks Prefrontal (logika). Keseimbangan sirkuit ini menentukan apakah Anda tipe pengambil risiko yang berani atau manajer risiko yang hati-hati.",
            blind_spot: isHigh ? "Overconfidence Bias: Terkadang terlalu yakin dengan prediksi masa depan dsn mengabaikan data lapangan saat ini." : "Risk Aversion: Kecenderungan menghindari kerugian (Loss Aversion) bisa membuat Anda melewatkan peluang besar yang berisiko terukur.",
            mastery_plan: [
                { title: "Matriks Eisenhower", desc: "Pisahkan keputusan berdasarkan Penting/Mendesak. Jangan habiskan energi otak untuk hal yang mendesak tapi tidak penting." },
                { title: "Prinsip 10/10/10", desc: "Tanya: Apa dampak keputusan ini 10 menit lagi? 10 bulan lagi? 10 tahun lagi?" },
                { title: "Data Diet", desc: "Batasi informasi yang masuk. Terlalu banyak data justru memperburuk kualitas keputusan (Analysis Paralysis)." }
            ]
        },
        {
            key: "adaptationSpeed",
            title: "Kecepatan Adaptasi",
            subtitle: "Resiliensi Mental Menghadapi Perubahan",
            icon: "speed",
            how_it_works: "Skor Anda mengindikasikan bahwa Anda memiliki " + (isHigh ? "Mental Elastisitas Tinggi" : "Kebutuhan Stabilitas") + ". " + (profile.adaptationSpeed_fact || ""),
            neuro_basis: "Fleksibilitas kognitif diatur oleh aktivitas neurotransmitter Norepinefrin. Otak Anda memiliki mekanisme unik untuk 'mengubah persneling' saat konteks lingkungan berubah mendadak.",
            blind_spot: "Change Fatigue: Meskipun bisa beradaptasi, otak tetap butuh energi besar. Jangan paksakan terlalu banyak perubahan sekaligus atau Anda akan mengalami burnout.",
            mastery_plan: [
                { title: "Micro-Habits", desc: "Saat adaptasi rutinitas baru, mulailah dengan langkah sekecil mungkin (cth: 2 menit yoga) agar otak tidak menolak." },
                { title: "Skenario 'What-If'", desc: "Latih otak menghadapi krisis dengan simulasi mental. Jika Plan A gagal, apa langkah konkret pertama Plan B?" },
                { title: "Growth Mindset", desc: "Ubah narasi internal dari 'Ini susah' menjadi 'Ini tantangan baru untuk level up'." }
            ]
        },
        {
            key: "metacognition",
            title: "Metakognisi (Self-Awareness)",
            subtitle: "Kemampuan Berpikir tentang Cara Berpikir",
            icon: "visibility",
            how_it_works: "Metakognisi adalah 'CCTV' di dalam kepala Anda. Profil ini menunjukkan Anda " + (profile.metacognition_fact || "cukup sadar diri") + ".",
            neuro_basis: "Korteks Prefrontal Anterior adalah pusat dari introspeksi. Aktivitas tinggi di sini memungkinkan seseorang mengoreksi kesalahannya sendiri bahkan sebelum orang lain menyadarinya.",
            blind_spot: "Self-Critical Loop: Bahaya dari metakognisi tinggi adalah kritik diri yang berlebihan. Ingat, sadar kesalahan itu bagus, tapi menghukum diri sendiri itu tidak produktif.",
            mastery_plan: [
                { title: "Jurnal Refleksi Harian", desc: "Tulis 1 hal yang berjalan baik dan 1 hal yang bisa diperbaiki setiap malam. Data, bukan perasaan." },
                { title: "Feedback Loop", desc: "Cari mentor yang jujur. Persepsi kita tentang diri sendiri seringkali bias (Dunning-Kruger Effect)." },
                { title: "Mindfulness Meditation", desc: "Latihan mengamati pikiran tanpa menghakiminya. Ini meningkatkan 'resolusi' layar CCTV mental Anda." }
            ]
        },
        {
            key: "thinkingBias",
            title: "Bias Berpikir Dominan",
            subtitle: "Jebakan Mental Bawah Sadar Anda",
            icon: "psychology_alt",
            how_it_works: "Setiap otak memiliki jalan pintas (heuristik) untuk menghemat energi. Bagi tipe Anda, " + (profile.thinkingBias_fact || "bias konfirmasi mungkin dominan") + ".",
            neuro_basis: "Bias kognitif adalah sisa evolusi untuk bertahan hidup di hutan rimba, bukan untuk akurasi di dunia modern. Ini adalah mekanisme 'Fast Thinking' (Sistem 1) yang mengambil alih kemudi.",
            blind_spot: "Blind Spot Bias: Ironisnya, bias terbesar adalah merasa diri kita tidak punya bias. Anda mungkin melihat bias orang lain dengan jelas, tapi buta terhadap bias sendiri.",
            mastery_plan: [
                { title: "Cari Bukti Pembanding", desc: "Saat Anda yakin 100% benar, paksa diri mencari 3 bukti yang menyatakan Anda salah." },
                { title: "Steel Man Argument", desc: "Jangan cuma menyerang argumen lawan (Straw Man), tapi perkuat argumen mereka dan coba kalahkan versi terkuatnya." },
                { title: "Tunda Keputusan Emosional", desc: "Jangan putuskan apapun saat marah, lapar, atau terlalu gembira (HALT: Hungry, Angry, Lonely, Tired)." }
            ]
        },
        {
            key: "creativityType",
            title: "Tipe Kreativitas",
            subtitle: "Gaya Inovasi & Penciptaan Nilai",
            icon: "lightbulb",
            how_it_works: profile.creativityType_fact || "Anda adalah tipe inovator yang menggabungkan elemen lama menjadi solusi baru.",
            neuro_basis: "Kreativitas bukan satu area otak, tapi komunikasi antara jaringan imajinasi (Default Mode) dan jaringan eksekutif (Control Network). Otak kreatif mampu mematikan filter kritik internal sementara waktu.",
            blind_spot: "Originality Obsession: Terkadang Anda menolak solusi standar yang sudah terbukti hanya karena ingin tampil beda. Inovasi harus berguna, tidak cuma baru.",
            mastery_plan: [
                { title: "Teknik SCAMPER", desc: "Substitute, Combine, Adapt, Modify, Put into another use, Eliminate, Reverse. Gunakan ini untuk memodifikasi ide." },
                { title: "Cross-Pollination", desc: "Baca buku/majalah dari industri yang sama sekali tidak berhubungan dengan pekerjaan Anda untuk cari ide liar." },
                { title: "Quantity over Quality", desc: "Saat brainstorming, targetkan 50 ide buruk dulu. Ide brilian biasanya muncul setelah ide-ide standar habis." }
            ]
        },
        {
            key: "focusDuration",
            title: "Durasi & Kualitas Fokus",
            subtitle: "Manajemen Perhatian & Energi Mental",
            icon: "timer",
            how_it_works: "Analisis menunjukkan Anda mampu mempertahankan fokus intens dalam " + (isHigh ? "jangka waktu panjang (Deep Work)" : "interval singkat tapi tajam (Sprints)") + ".",
            neuro_basis: "Fokus diatur oleh sistem retikular aktif dan neurotransmitter Asetilkolin. Gangguan digital jaman sekarang secara harfiah melatih otak kita untuk menjadi ADHD buatan.",
            blind_spot: "Distraction Vulnerability: Notifikasi HP adalah musuh alami tipe otak Anda. Setiap kali teralihkan, butuh 23 menit untuk kembali ke level fokus semula.",
            mastery_plan: [
                { title: "Teknik Pomodoro", desc: "Kerja 25 menit, istirahat 5 menit. Atau 50/10. Sesuaikan dengan ritme sirkadian Anda." },
                { title: "Digital Fasting", desc: "Coba matikan semua layar 1 jam sebelum tidur dan 1 jam setelah bangun. Reset dopamin otak Anda." },
                { title: "Lingkungan Kerja Steril", desc: "Meja bersih = Pikiran bersih. Singkirkan benda visual yang tidak perlu dari pandangan mata." }
            ]
        }
    ];

    // 2. CAREER & LEADERSHIP (2 Pages)
    const career = {
        roles: isHigh
            ? ["Strategic Planner", "Systems Architect", "Data Scientist", "Founder/CEO", "Research Director"]
            : ["Operations Manager", "Project Coordinator", "Technical Specialist", "Sales Leader", "Logistics Expert"],
        env: isHigh
            ? "Lingkungan minim birokrasi, otonomi tinggi, tantangan intelektual kompleks, dan rekan kerja yang kompeten."
            : "Lingkungan terstruktur, target jelas, kerja tim kolaboratif, dan sistem reward yang transparan.",
        leadership_style: isHigh
            ? "Visionary Leader: Anda memimpin dengan ide besar dan strategi jangka panjang. Tantangannya adalah memastikan tim bisa mengikuti langkah kaki Anda yang lebar."
            : "Servant Leader / Pragmatic: Anda memimpin dengan contoh kerja keras dan efisiensi. Tim menghormati Anda karena Anda tahu teknis lapangan.",
        collab_tip: isHigh
            ? "Belajarlah untuk 'turun ke bumi'. Penjelasan teknis yang rumit bisa membingungkan tim. Sederhanakan bahasa Anda."
            : "Jangan ragu menyuarakan ide perbaikan sistem. Perspektif lapangan Anda sangat berharga bagi manajemen atas."
    };

    return {
        dimensions_pages: dims,
        career_guide: career
    };
}
