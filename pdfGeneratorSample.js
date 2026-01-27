// --- PDF GENERATION LOGIC (SAMPLE VERSION) ---
(() => {
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

    // --- MAIN GENERATOR FUNCTION (SAMPLE PDF) ---
    window.generateSamplePDF = async function () {
        const isSample = true; // FORCE SAMPLE MODE
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

            // --- DATA MAPPING ---
            // Ensure latestResult is available
            const localResult = (typeof latestResult !== 'undefined') ? latestResult : { iqScore: 88, username: "Fauzan_Nursandi" };

            // OVERRIDE FOR SAMPLE
            const base = isSample ? 0 : (localResult.iqScore || 88);
            const uName = isSample ? "Your Name" : (localResult.username || "Fauzan_Nursandi");

            const domainKeys = Object.keys(pdfRichContent.domains || {});

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

            // FIXED: Renaming helper to be consistent with usage
            const drawPageBorder = (doc, num, w, h) => drawFooter(doc, num);

            const checkPageBreak = (doc, cy, pg, neededH, w, h) => {
                if (pg === 1) return { newPg: false, cy, pg };
                const limitH = h - 25; // larger margin
                if (cy + neededH > limitH) {
                    doc.addPage();
                    pg++;
                    drawPageBorder(doc, pg, w, h);
                    drawHeader(doc, "Laporan Asesmen Kognitif", pg, w, h, pdfConfig.colors);
                    return { newPg: true, cy: 35, pg }; // Reset Y below header
                }
                return { newPg: false, cy, pg };
            };

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
                } catch (e) { }
                // White body
                doc.setFillColor(255, 255, 255); doc.rect(0, 80, w, h - 80, 'F');
            }

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

            // Subtitle
            doc.setFontSize(14); doc.setTextColor(...cols.slate); doc.setFont("helvetica", "bold");
            safeDocText(doc, "SERI ASESMEN PROFESIONAL", 25, 145);

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
                    doc.setTextColor(...cols.white);
                    safeDocText(doc, "KEY TAKEAWAYS", 30, cy + 12);
                    doc.setFont("helvetica", "normal");
                    safeDocText(doc, kpLines, 30, cy + 22);

                    cy += kpH + 10;
                }
            });

            // 3. EXECUTIVE SUMMARY
            cy = addPage();
            drawHeader(doc, "Ringkasan Eksekutif", pg, w, h, cols);
            cy = 35;

            cy = printText("Profil Kognitif: " + (base >= 120 ? "Superior" : "Rata-rata"), 'h1', cy);

            // Score Card
            doc.setFillColor(...cols.navy);
            safeDocRoundedRect(doc, 25, cy, w - 50, 40, 3, 3, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(12); safeDocText(doc, "SKOR IQ SKALA PENUH (FSIQ)", 35, cy + 12);
            doc.setFontSize(36); doc.setFont("helvetica", "bold"); safeDocText(doc, String(base), 35, cy + 30);
            doc.setFontSize(10); doc.setFont("helvetica", "normal");
            safeDocText(doc, "Persentil: " + (base > 130 ? "98th" : (base > 100 ? "50th" : "30th")), 100, cy + 30);

            // Chart Placeholder (Linear Gauge)
            const gaugeImg = generateLinearGauge(base);
            if (gaugeImg) {
                try { doc.addImage(gaugeImg, 'PNG', 110, cy + 5, 80, 25); } catch (e) { }
            }
            cy += 50;

            // Radar Chart (Big)
            cy = printText("Peta Kekuatan Kognitif", 'h2', cy);
            const radarImg = generateRadar(domainScores);
            if (radarImg) {
                try {
                    // Centered
                    const rSize = 80;
                    doc.addImage(radarImg, 'PNG', (w - rSize) / 2, cy, rSize, rSize);
                    cy += rSize + 10;
                } catch (e) { }
            }

            // Domain Table
            checkBreak(60);
            cy = printText("Rincian Skor Domain", 'h3', cy);
            const tableData = domainScores.map(d => {
                let cat = "Rata-rata";
                if (d.score > 110) cat = "Tinggi";
                if (d.score < 90) cat = "Sedang";
                return [d.name, d.score.toString(), cat];
            });
            cy = drawTable(doc, ["Domain Kognitif", "Skor", "Kategori"], tableData, 25, cy, cols);
            cy += 10;

            cy = printText("Interpretasi Hasil", 'h3', cy);
            const interp = `Skor IQ Skala Penuh Anda sebesar ${base} menempatkan Anda dalam rentang ${base >= 120 ? "Superior" : (base >= 90 ? "Rata-rata" : "Rata-rata Bawah")} dibandingkan dengan populasi umum. Skor ini adalah indeks komposit yang diturunkan dari empat domain utama yang dianalisis dalam laporan ini. Ini berfungsi sebagai indikator umum fungsi kognitif.`;
            // Add dummy dense text to reach word count goal
            const filler2 = "Neuroplastisitas memungkinkan otak untuk terus berkembang dan membentuk jalur saraf baru sebagai respons terhadap tantangan intelektual baru. Dengan latihan yang tepat—seperti yang disarankan dalam laporan ini—Anda dapat memperkuat jalur-jalur ini, meningkatkan efisiensi pemrosesan informasi, dan mengembangkan kapasitas kognitif Anda lebih lanjut.";
            cy = printText(interp + " " + filler2, 'body', cy);

            // 4. DOMAIN DEEP DIVES (1 Page Per Domain)
            domainScores.forEach(d => {
                cy = addPage();
                // Header is auto-drawn by addPage logic for subsequent pages, but first one needs manual check if simplified logic
                // In our addPage, we already call drawHeader.

                // Just ensure header text is correct? No, drawHeader uses hardcoded string in addPage.
                // We need to override or just accept "Laporan Asesmen Kognitif".
                // Let's accept generic header or customize.
                // Customizing header for specific page is tricky with current addPage helper.
                // Let's just overwrite the header area with a white box + new header? No, heavy.
                // Simply use generic header.

                cy = 35; // Rigid top margin

                cy = printText(d.name, 'h1', cy);

                // --- MINIMALIST SCORE CARD ---
                // Just a clean box with big numbers
                doc.setDrawColor(...cols.gray); doc.setLineWidth(0.1);
                safeDocRoundedRect(doc, 25, cy, w - 50, 35, 1, 1); // Main container

                // Score
                doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...cols.slate);
                safeDocText(doc, "SKOR DOMAIN", 35, cy + 10);
                doc.setFont("helvetica", "bold"); doc.setFontSize(28); doc.setTextColor(...cols.navy);
                safeDocText(doc, String(d.score), 35, cy + 28);

                // Scale Bar
                const barImg = generateBarChart(d.score);
                if (barImg) {
                    try { doc.addImage(barImg, 'PNG', 100, cy + 2, 80, 25); } catch (e) { }
                }
                cy += 45;

                // Content
                cy = printText("Definisi:", 'h3', cy);
                cy = printText(d.data.definition, 'body', cy);

                cy = printText("Analisis Performa Anda:", 'h3', cy);
                cy = printText(d.data.analysis, 'body', cy);

                cy = printText("Implikasi Karir:", 'h3', cy);
                cy = printText(d.data.implications, 'body', cy);

                cy = printText("Blind Spot / Risiko:", 'h3', cy);
                cy = printText(d.data.risk, 'body', cy);

                // Development Box
                checkBreak(60);
                doc.setFillColor(...cols.lightGray);
                safeDocRoundedRect(doc, 25, cy, w - 50, 50, 2, 2, 'F');
                doc.setTextColor(...cols.navy);
                safeDocText(doc, "REKOMENDASI PENGEMBANGAN", 30, cy + 10);
                let dy = cy + 18;
                d.data.development.forEach(item => {
                    doc.setFont("helvetica", "bold"); doc.setFontSize(9);
                    safeDocText(doc, "• " + item[0], 30, dy);
                    doc.setFont("helvetica", "normal");
                    safeDocText(doc, ": " + item[1], 80, dy); // Indented
                    dy += 6;
                });
                cy += 60;
            });

            // 5. WORKSHOP / LATIHAN (1-2 Pages)
            cy = addPage();
            drawHeader(doc, "Panduan Latihan Kognitif", pg, w, h, cols);
            cy = 35;
            cy = printText("Actionable Exercises", 'h1', cy);

            // Grid Layout for Workshops
            const workshops = pdfRichContent.workshops;
            Object.keys(workshops).forEach((key, i) => {
                checkBreak(60);
                const ws = workshops[key];
                doc.setDrawColor(...cols.blue); doc.setLineWidth(0.5);
                safeDocLine(doc, 25, cy, w - 25, cy);
                cy += 5;
                cy = printText(key, 'h2', cy);
                cy = printText(ws.intro, 'body', cy);

                // Exercises List
                ws.exercises.forEach(ex => {
                    cy = printText(`• ${ex.name} (${ex.level}, ${ex.time})`, 'h3', cy);
                    cy = printText(ex.desc, 'body', cy);
                });
                cy += 5;
            });

            // 6. CAREER & CASE STUDIES
            cy = addPage();
            drawHeader(doc, "Wawasan Karir & Studi Kasus", pg, w, h, cols);
            cy = 35;
            cy = printText("Studi Kasus Referensi", 'h1', cy);

            (pdfRichContent.case_studies || []).forEach(cs => {
                checkBreak(50);
                doc.setFillColor(...cols.lightGray);
                safeDocRoundedRect(doc, 25, cy, w - 50, 45, 2, 2, 'F');

                doc.setTextColor(...cols.navy); doc.setFont("helvetica", "bold"); doc.setFontSize(11);
                safeDocText(doc, cs.name, 30, cy + 10);
                doc.setFontSize(9); doc.setTextColor(...cols.blue);
                safeDocText(doc, cs.profile, 30, cy + 16);

                doc.setTextColor(...cols.slate); doc.setFont("helvetica", "normal");
                const storyLines = doc.splitTextToSize(cs.story, w - 70);
                safeDocText(doc, storyLines, 30, cy + 24);

                doc.setFont("helvetica", "bold");
                const finalY = cy + 24 + (storyLines.length * 4);
                safeDocText(doc, cs.takeaway, 30, finalY + 2);

                cy += 55;
            });

            // 7. BIOHACKING / LIFESTYLE
            cy = addPage();
            drawHeader(doc, "Optimasi Gaya Hidup (Biohacking)", pg, w, h, cols);
            cy = 35;

            // 2x2 Grid using simple offsets
            const bio = pdfRichContent.biohacking || [];
            const col1X = 25; const col2X = w / 2 + 5;
            const boxW = (w - 60) / 2;

            for (let i = 0; i < bio.length; i += 2) {
                checkBreak(80);
                const rowY = cy;
                // Item 1
                if (bio[i]) {
                    doc.setDrawColor(...cols.gray);
                    safeDocRoundedRect(doc, col1X, rowY, boxW, 70, 2, 2);
                    doc.setTextColor(...cols.navy); doc.setFontSize(12); doc.setFont("helvetica", "bold");
                    safeDocText(doc, bio[i].title, col1X + 5, rowY + 10);
                    doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(...cols.slate);
                    const intro = doc.splitTextToSize(bio[i].intro, boxW - 10);
                    safeDocText(doc, intro, col1X + 5, rowY + 20);

                    let ty = rowY + 35;
                    bio[i].tips.forEach(t => {
                        const tl = doc.splitTextToSize("• " + t, boxW - 10);
                        safeDocText(doc, tl, col1X + 5, ty);
                        ty += (tl.length * 4) + 2;
                    });
                }
                // Item 2
                if (bio[i + 1]) {
                    doc.setDrawColor(...cols.gray);
                    safeDocRoundedRect(doc, col2X, rowY, boxW, 70, 2, 2);
                    doc.setTextColor(...cols.navy); doc.setFontSize(12); doc.setFont("helvetica", "bold");
                    safeDocText(doc, bio[i + 1].title, col2X + 5, rowY + 10);
                    doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(...cols.slate);
                    const intro = doc.splitTextToSize(bio[i + 1].intro, boxW - 10);
                    safeDocText(doc, intro, col2X + 5, rowY + 20);

                    let ty = rowY + 35;
                    bio[i + 1].tips.forEach(t => {
                        const tl = doc.splitTextToSize("• " + t, boxW - 10);
                        safeDocText(doc, tl, col2X + 5, ty);
                        ty += (tl.length * 4) + 2;
                    });
                }
                cy += 80;
            }

            // 8. FUTURE & ROADMAP
            cy = addPage();
            drawHeader(doc, "Future Skills & Roadmap", pg, w, h, cols);
            cy = 35;
            cy = printText("Future Outlook", 'h1', cy);
            cy = printText(pdfRichContent.future_outlook.intro, 'body', cy);

            (pdfRichContent.future_outlook.trends || []).forEach(t => {
                cy = printText("Trend: " + t.t, 'h3', cy);
                cy = printText(t.d, 'body', cy);
            });

            // 9. CERTIFICATE (Landscape-ish layout on Portrait)
            doc.addPage();
            pg++;
            // Decorative Border
            doc.setDrawColor(...cols.navy); doc.setLineWidth(2);
            safeDocRect(doc, 10, 10, w - 20, h - 20);
            doc.setDrawColor(...cols.teal); doc.setLineWidth(0.5);
            safeDocRect(doc, 13, 13, w - 26, h - 26);

            // Header
            let certY = 50;
            doc.setFont("times", "bold"); doc.setTextColor(...cols.navy);
            doc.setFontSize(40); safeDocText(doc, "SERTIFIKAT", w / 2, certY, { align: 'center' });
            certY += 15;
            doc.setFontSize(16); doc.setTextColor(...cols.blue);
            safeDocText(doc, "ASESMEN KOGNITIF DIGITAL", w / 2, certY, { align: 'center' });

            certY += 30;
            doc.setFont("helvetica", "normal"); doc.setFontSize(12); doc.setTextColor(...cols.slate);
            safeDocText(doc, "Diberikan kepada:", w / 2, certY, { align: 'center' });

            certY += 20;
            doc.setFont("times", "bold"); doc.setFontSize(32); doc.setTextColor(...cols.navy);
            safeDocText(doc, uName, w / 2, certY, { align: 'center' });

            certY += 20;
            doc.setFont("helvetica", "normal"); doc.setFontSize(12); doc.setTextColor(...cols.slate);
            const certMsg = `Telah menyelesaikan asesmen kognitif berbasis Raven's Progression dengan skor:`;
            safeDocText(doc, certMsg, w / 2, certY, { align: 'center' });

            certY += 25;
            doc.setFont("helvetica", "bold"); doc.setFontSize(48); doc.setTextColor(...cols.teal);
            safeDocText(doc, String(base), w / 2, certY, { align: 'center' });

            // Footer Section of Certificate
            const footerY = h - 60;

            // Left: Verifier
            doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.setTextColor(...cols.navy);
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
            // Mock QR if not loaded
            // if (qrImg) ... 
            doc.setFont("helvetica", "bold"); doc.setFontSize(8); doc.setTextColor(...cols.navy);
            safeDocText(doc, "QR Verifikasi Sertifikat", rightX, footerY + 25, { align: 'center' });

            // Watermark again on Certificate
            if (logoImg) {
                try {
                    doc.setGState(new doc.GState({ opacity: 0.05 }));
                    doc.addImage(logoImg, 'PNG', w / 2 - 50, h / 2 - 50, 100, 100);
                    doc.setGState(new doc.GState({ opacity: 1.0 }));
                } catch (e) { }
            }

            // Ensure watermark on cover and all pages for Sample
            // Iterate pages
            const totalPages = doc.internal.getNumberOfPages();
            for (let i = 1; i <= totalPages; i++) {
                doc.setPage(i);
                if (isSample) drawWatermark(doc, w, h);
            }

            const filename = `Sample_Laporan_${uName.replace(/\s+/g, '_')}.pdf`;
            doc.save(filename);
        } catch (e) {
            console.error(e);
            alert("PDF Error: " + e.message);
        } finally {
            if (btn) {
                btn.innerHTML = oldBtn;
                btn.disabled = false;
            }
        }
    };
})();
