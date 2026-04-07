// =====================================================
// EMAILJS CONFIG — Isi setelah setup di emailjs.com
// =====================================================
// 1. Daftar di https://emailjs.com (gratis)
// 2. Add Email Service (Gmail) → catat Service ID
// 3. Create Email Template → catat Template ID
// 4. Account > API Keys → catat Public Key

export const EMAILJS_CONFIG = {
    serviceId: 'service_1j3x3yh',
    templateId: 'template_nxcz4uo',
    publicKey: 'b_HpktXk2XBUE7kwE',
};

// Template variabel yang harus ada di EmailJS template:
// {{from_name}}   → nama pengirim
// {{from_email}}  → email pengirim
// {{subject}}     → subjek pesan
// {{message}}     → isi pesan
// {{to_email}}    → alfathroziq94@gmail.com (set sebagai To Email di template)
