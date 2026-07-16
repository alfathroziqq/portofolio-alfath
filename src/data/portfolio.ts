// ============================================================
// CENTRALIZED PORTFOLIO DATA — Edit this file to customize
// ============================================================

export const personalInfo = {
    name: 'Alfath',
    fullName: 'Alfath Roziq Widhayaka',
    role: 'Full Stack Developer',
    tagline: 'Turning ideas into elegant digital experiences',
    bio: `I'm a passionate Full Stack Developer with a strong focus on building clean, performant, 
and user-centered web applications. I love diving deep into both frontend aesthetics and backend 
architecture to deliver complete, production-ready solutions.`,
    bioExtended: `With hands-on experience in modern web technologies, I bring ideas to life through 
thoughtful code and clean UI. I'm always eager to learn new technologies and collaborate on 
meaningful projects that make a real-world impact.`,
    location: 'Indonesia',
    email: 'alfathroziq94@gmail.com',
    phone: '+62 821-3844-9930',
    whatsapp: 'https://wa.me/6282138449930',
    linkedin: 'https://www.linkedin.com/in/alfath-roziq-widhayaka',
    github: 'https://github.com/alfathroziqq',
    instagram: 'https://www.instagram.com/alfathroziq/',
    cvLink: '/cv-alfath-roziq-widhayaka.pdf',
    avatarPlaceholder: true,
    highlights: [
        { label: 'Experience', value: '2+ Years' },
        { label: 'Focus', value: 'Web Development' },
        { label: 'Availability', value: 'Open to Work' },
    ],
};

export const skills = [
    {
        category: 'Frontend',
        icon: '🎨',
        color: '#6c63ff',
        items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        category: 'Backend',
        icon: '⚙️',
        color: '#43d9ad',
        items: ['Node.js', 'Express.js', 'REST API', 'PHP', 'Laravel'],
    },
    {
        category: 'Database',
        icon: '🗄️',
        color: '#ff6584',
        items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase'],
    },
    {
        category: 'Tools & DevOps',
        icon: '🛠️',
        color: '#ffd166',
        items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Linux', 'Vercel', 'Netlify'],
    },
    {
        category: 'Soft Skills',
        icon: '🧠',
        color: '#a29bfe',
        items: ['Problem Solving', 'Teamwork', 'Communication', 'Adaptability', 'Time Management', 'Critical Thinking'],
    },
];

export const workExperiences = [
    {
        id: 1,
        company: 'PT Sistem Integrasi Medika (SISMEDIKA)',
        position: 'Full Stack Developer',
        period: 'February 2026 – Present',
        type: 'fulltime' as const,
        description: [
            'Mengembangkan dan memelihara aplikasi web full-stack untuk sistem kesehatan dan operasional, seperti Diagnos Homecare, HIS, MMS, Lab Lingkungan, AISYAH, KurirWest, dan Halosis.',
            'Berkontribusi pada pengembangan fitur HIS untuk mendukung alur kerja rumah sakit, seperti asesmen pasien, billing, monitoring, laporan medis, dan perbaikan bug sistem.',
            'Mengembangkan fitur MMS untuk proses manajemen material rumah sakit, termasuk request, approval, dispatch, shipping, handover, dan receiving.',
            'Mengembangkan fitur laporan perjalanan kurir pada KurirWest serta melakukan testing aplikasi untuk menemukan bug, perilaku tidak normal, dan potensi masalah alur kerja.',
            'Berkontribusi pada Halosis WA untuk validasi serta pengiriman hasil medis berbasis WhatsApp, termasuk validasi tanggal lahir, nomor telepon, auto resend, error mapping, dan pengiriman hasil radiologi.',
            'Mengembangkan fitur pada Lab Lingkungan, termasuk Master Agreement, pembenahan menu Sampling Plan dengan surat tugas dan cetak surat, serta pengembangan SamplingPro PWA untuk petugas pengambilan sampel.',
            'Mengembangkan fitur AI-based ICD Prediction pada AISYAH untuk membantu dokter menganalisis kondisi pasien dan memberikan rekomendasi kode ICD.',
        ],
        techStack: ['React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'REST API', 'PWA'],
    },
    {
        id: 2,
        company: 'PT Takodam Ciptamandiri Nusantara (TAKODAM)',
        position: 'Software Engineer Intern',
        period: 'August 2024 – December 2024',
        type: 'internship' as const,
        description: [
            'Mengembangkan aplikasi web monitoring pabrik untuk industri manufaktur furnitur, yang digunakan untuk mendukung pemantauan produksi, operasional, pelaporan, dan pengambilan keputusan berbasis data.',
            'Menganalisis kebutuhan bisnis dan operasional, lalu menerjemahkannya menjadi alur aplikasi, struktur database, dan logika backend yang scalable.',
            'Membangun backend menggunakan Python, Django, dan PostgreSQL, termasuk desain skema database, business logic, workflow data processing, dan pengembangan fitur utama.',
            'Membuat dan menguji RESTful API dengan dokumentasi Swagger/OpenAPI untuk memastikan format request-response konsisten, validasi berjalan baik, dan error handling lebih stabil.',
            'Mengembangkan frontend menggunakan FlutterFlow, termasuk desain UI, integrasi API, data binding, dan koneksi dengan backend service.',
            'Melakukan containerization dan deployment menggunakan Docker di AWS Lightsail, termasuk konfigurasi environment dan deployment workflow.',
        ],
        techStack: ['Python', 'Django', 'PostgreSQL', 'FlutterFlow', 'Docker', 'AWS Lightsail', 'Swagger'],
    },
];

export const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce web application with product management, cart, payment integration, and admin dashboard.',
        category: 'Fullstack',
        tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
        features: ['Product catalog & search', 'Shopping cart & checkout', 'Admin dashboard', 'Payment integration'],
        demoLink: 'https://demo.example.com',
        githubLink: 'https://github.com/alfath/ecommerce',
        gradient: 'from-violet-500 to-purple-700',
        emoji: '🛍️',
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, team collaboration, and productivity analytics.',
        category: 'Web App',
        tech: ['React.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
        features: ['Real-time sync', 'Drag & drop', 'Team workspace', 'Progress tracking'],
        demoLink: 'https://demo.example.com',
        githubLink: 'https://github.com/alfath/taskmanager',
        gradient: 'from-cyan-500 to-teal-700',
        emoji: '✅',
    },
    {
        id: 3,
        title: 'AI Chat Interface',
        description: 'Modern AI-powered chat interface with multiple model support, conversation history, and markdown rendering.',
        category: 'Web App',
        tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Prisma', 'PostgreSQL'],
        features: ['Multi-model support', 'Chat history', 'Markdown rendering', 'Code highlighting'],
        demoLink: 'https://demo.example.com',
        githubLink: 'https://github.com/alfath/ai-chat',
        gradient: 'from-rose-500 to-pink-700',
        emoji: '🤖',
    },
    {
        id: 4,
        title: 'Company Landing Page',
        description: 'A high-converting, responsive landing page for a tech startup with animations and modern design.',
        category: 'Landing Page',
        tech: ['React.js', 'Framer Motion', 'Tailwind CSS'],
        features: ['Smooth animations', 'Responsive design', 'Contact form', 'SEO optimized'],
        demoLink: 'https://demo.example.com',
        githubLink: 'https://github.com/alfath/landing',
        gradient: 'from-amber-500 to-orange-700',
        emoji: '🚀',
    },
    {
        id: 5,
        title: 'UI Design System',
        description: 'A comprehensive design system and component library built for scalable React applications.',
        category: 'UI/UX',
        tech: ['React.js', 'TypeScript', 'Storybook', 'Tailwind CSS'],
        features: ['50+ components', 'Dark/Light mode', 'Accessibility ready', 'Documentation'],
        demoLink: 'https://demo.example.com',
        githubLink: 'https://github.com/alfath/design-system',
        gradient: 'from-teal-400 to-cyan-600',
        emoji: '🎨',
    },
    {
        id: 6,
        title: 'Blog & Content Platform',
        description: 'A full-featured blog platform with CMS, markdown editor, comment system, and SEO features.',
        category: 'Fullstack',
        tech: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind CSS'],
        features: ['CMS integration', 'Markdown editor', 'Comments', 'SEO & sitemap'],
        demoLink: 'https://demo.example.com',
        githubLink: 'https://github.com/alfath/blog',
        gradient: 'from-indigo-500 to-blue-700',
        emoji: '📝',
    },
];

export const projectCategories = ['All', 'Fullstack', 'Web App', 'Landing Page', 'UI/UX'];

export const organizations = [
    {
        id: 1,
        name: 'BEM FATISDA, Sebelas Maret University',
        role: 'Internal Supervisory and Control Coordinator',
        period: 'February 2024 – December 2024',
        description: 'Membangun dan menjaga budaya organisasi yang positif dan inklusif, serta mendukung sistem organisasi yang sehat, efektif, dan harmonis.',
        type: 'student-org',
    },
    {
        id: 2,
        name: 'HIMASTER (Himpunan Mahasiswa Informatika) FATISDA, UNS',
        role: 'Deputy Head of Organizational Development',
        period: 'February 2023 – December 2023',
        description: 'Mendukung pengembangan organisasi melalui peningkatan koordinasi internal dan tata kelola organisasi yang lebih efektif.',
        type: 'student-org',
    },
    {
        id: 3,
        name: 'P!NGFEST 2024',
        role: 'Event Coordinator',
        period: 'May 2024 – December 2025',
        description: 'Mengelola kebutuhan acara seminar nasional dan kompetisi IT-Venture dari awal hingga akhir, serta berkoordinasi dengan berbagai stakeholder agar acara berjalan sesuai rencana.',
        type: 'tech-community',
    },
];

export const achievements = [
    {
        id: 1,
        title: 'Third Place Winner, GEMASTIK XVIII 2025',
        issuer: 'Kemendikbudristek',
        date: '2025',
        description: 'Division VII (ICT Scientific Paper) — Kompetisi tingkat nasional yang diselenggarakan oleh Kemendikbudristek.',
        icon: '🥉',
        color: '#ffd166',
        type: 'competition',
    },
    {
        id: 2,
        title: 'Third Place Winner, National Physics Olympiad',
        issuer: 'University.id',
        date: '2022',
        description: 'Kompetisi tingkat nasional yang diselenggarakan oleh University.id.',
        icon: '🥉',
        color: '#43d9ad',
        type: 'competition',
    },
    {
        id: 3,
        title: 'First Place Winner, Appropriate Technology Competition',
        issuer: 'UKM Kepramukaan UGM',
        date: '2021',
        description: 'Rover Challenge — Kompetisi tingkat nasional yang diselenggarakan oleh UKM Kepramukaan UGM.',
        icon: '🏆',
        color: '#ffd166',
        type: 'competition',
    },
];

export const certifications = [
    {
        id: 1,
        title: 'Belajar Dasar AI',
        issuer: 'Dicoding Indonesia',
        period: 'April 2026 – April 2026',
        description: 'Mempelajari dasar-dasar AI, jenis data dalam sistem AI, konsep machine learning, cara mesin belajar dari data, serta pengenalan deep learning dan penerapannya.',
        color: '#6c63ff',
    },
    {
        id: 2,
        title: 'Data Analysis with Python',
        issuer: 'Cognitive Class Powered by IBM',
        period: 'April 2026',
        description: 'Mempelajari analisis data menggunakan Python, termasuk data cleaning, data processing, eksplorasi data, visualisasi dengan Matplotlib dan Pandas, serta konsep statistik dasar.',
        color: '#43d9ad',
    },
    {
        id: 3,
        title: 'AI Productivity and AI API Integration for Developers',
        issuer: 'Hacktiv8 Indonesia',
        period: 'July 2025',
        description: 'Mempelajari integrasi API AI untuk developer dan menerapkannya melalui pembuatan chatbot menggunakan Google Gemini API.',
        color: '#ff6584',
    },
    {
        id: 4,
        title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
        issuer: 'Dicoding Indonesia',
        period: 'August 2023 – August 2026',
        description: 'Mempelajari kebutuhan aplikasi, konsep dasar pengembangan software, modifikasi aplikasi, dan penulisan dokumentasi pemrograman.',
        color: '#a29bfe',
    },
    {
        id: 5,
        title: 'Belajar Dasar Manajemen Proyek',
        issuer: 'Dicoding Indonesia',
        period: 'July 2023 – July 2026',
        description: 'Mempelajari dasar manajemen proyek, mulai dari perencanaan, pembagian tugas, monitoring progres, hingga pencapaian target proyek.',
        color: '#ffd166',
    },
    {
        id: 6,
        title: 'Kalbe Data Scientist Project Based Internship Program',
        issuer: 'Rakamin Academy',
        period: 'February 2023',
        description: 'Mempelajari dasar statistik untuk analisis data, supervised learning, serta penggunaan SQL untuk mengelola dan mengambil data.',
        color: '#6c63ff',
    },
];
