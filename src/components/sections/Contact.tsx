import { useState, useRef, type FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data/portfolio';
import { EMAILJS_CONFIG } from '../../config/emailjs';

interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const initialForm: FormState = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [form, setForm] = useState<FormState>(initialForm);
    const [errors, setErrors] = useState<Partial<FormState>>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const validate = () => {
        const e: Partial<FormState> = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.trim()) e.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
        if (!form.subject.trim()) e.subject = 'Subject is required';
        if (!form.message.trim()) e.message = 'Message is required';
        else if (form.message.length < 10) e.message = 'Message too short';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setStatus('loading');

        try {
            await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                {
                    from_name: form.name,
                    from_email: form.email,
                    subject: form.subject,
                    message: form.message,
                    to_email: personalInfo.email,
                },
                EMAILJS_CONFIG.publicKey
            );
            setStatus('success');
            setForm(initialForm);
        } catch {
            setStatus('error');
        }
    };


    const contactDetails = [
        { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: Phone, label: 'WhatsApp', value: personalInfo.phone, href: personalInfo.whatsapp },
        { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
    ];

    const socialLinks = [
        { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
        { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
        { icon: FaInstagram, href: personalInfo.instagram, label: 'Instagram' },
        { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
    ];

    return (
        <section id="contact" className="py-28 bg-[#0a0a0f] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#6c63ff]/6 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">
                        Let's Connect
                    </p>
                    <h2 className="section-heading text-white">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#6c63ff] to-[#43d9ad] rounded-full" />
                    <p className="text-[#9999b3] mt-6 max-w-xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something amazing together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Contact Details */}
                        <div className="space-y-4 mb-8">
                            {contactDetails.map(({ icon: Icon, label, value, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href !== '#' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-5 rounded-xl bg-[#16161e] border border-[#2a2a3d] hover:border-[#6c63ff]/40 hover:shadow-[0_4px_20px_rgba(108,99,255,0.1)] transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#6c63ff]/15 flex items-center justify-center group-hover:bg-[#6c63ff]/25 transition-all duration-300">
                                        <Icon size={20} className="text-[#6c63ff]" />
                                    </div>
                                    <div>
                                        <p className="text-[#9999b3] text-xs uppercase tracking-wide">{label}</p>
                                        <p className="text-white font-medium">{value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-[#9999b3] text-sm font-medium mb-4">Find me on</p>
                            <div className="flex gap-3">
                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 rounded-xl bg-[#16161e] border border-[#2a2a3d] flex items-center justify-center text-[#9999b3] hover:text-[#6c63ff] hover:border-[#6c63ff]/40 transition-all duration-200"
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="p-8 rounded-2xl bg-[#16161e] border border-[#2a2a3d]">
                            <div className="flex items-center gap-3 mb-6">
                                <MessageSquare size={20} className="text-[#6c63ff]" />
                                <h3 className="text-white font-bold text-lg">Send a Message</h3>
                            </div>

                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-16 text-center"
                                >
                                    <CheckCircle size={56} className="text-[#43d9ad] mb-4" />
                                    <h4 className="text-white font-bold text-xl mb-2">Pesan Terkirim! 🎉</h4>
                                    <p className="text-[#9999b3]">Terima kasih! Saya akan segera membalas pesan Anda.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-6 btn-outline text-sm"
                                    >
                                        Kirim Lagi
                                    </button>
                                </motion.div>
                            ) : status === 'error' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-16 text-center"
                                >
                                    <AlertCircle size={56} className="text-[#ff6584] mb-4" />
                                    <h4 className="text-white font-bold text-xl mb-2">Gagal Terkirim 😔</h4>
                                    <p className="text-[#9999b3] mb-1">Terjadi kesalahan saat mengirim pesan.</p>
                                    <p className="text-[#9999b3] text-sm">Pastikan kredensial EmailJS sudah diisi dengan benar.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-6 btn-outline text-sm"
                                    >
                                        Coba Lagi
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <FormField
                                            label="Full Name"
                                            id="contact-name"
                                            type="text"
                                            placeholder="John Doe"
                                            value={form.name}
                                            error={errors.name}
                                            onChange={(v) => setForm({ ...form, name: v })}
                                        />
                                        <FormField
                                            label="Email Address"
                                            id="contact-email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={form.email}
                                            error={errors.email}
                                            onChange={(v) => setForm({ ...form, email: v })}
                                        />
                                    </div>
                                    <FormField
                                        label="Subject"
                                        id="contact-subject"
                                        type="text"
                                        placeholder="Project Collaboration"
                                        value={form.subject}
                                        error={errors.subject}
                                        onChange={(v) => setForm({ ...form, subject: v })}
                                    />
                                    <div>
                                        <label htmlFor="contact-message" className="block text-sm font-medium text-[#9999b3] mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            rows={5}
                                            placeholder="Tell me about your project or idea..."
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            className={`w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border text-white text-sm placeholder-[#555577] outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-[#6c63ff]/30 ${errors.message ? 'border-[#ff6584]' : 'border-[#2a2a3d] focus:border-[#6c63ff]/50'
                                                }`}
                                        />
                                        {errors.message && <p className="text-[#ff6584] text-xs mt-1">{errors.message}</p>}
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={16} />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

interface FormFieldProps {
    label: string;
    id: string;
    type: string;
    placeholder: string;
    value: string;
    error?: string;
    onChange: (val: string) => void;
}

const FormField = ({ label, id, type, placeholder, value, error, onChange }: FormFieldProps) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-[#9999b3] mb-2">
            {label}
        </label>
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border text-white text-sm placeholder-[#555577] outline-none transition-all duration-200 focus:ring-2 focus:ring-[#6c63ff]/30 ${error ? 'border-[#ff6584]' : 'border-[#2a2a3d] focus:border-[#6c63ff]/50'
                }`}
        />
        {error && <p className="text-[#ff6584] text-xs mt-1">{error}</p>}
    </div>
);

export default Contact;
