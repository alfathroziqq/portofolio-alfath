import { motion, type Variants } from 'framer-motion';
import { ArrowDown, ExternalLink, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolio';
import { scrollToSection } from '../../utils/scroll';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Floating orb component
const FloatingOrb = ({ className }: { className?: string }) => (
    <div className={`absolute rounded-full blur-3xl pointer-events-none animate-pulse ${className}`} />
);

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
        >
            {/* Background effects */}
            <FloatingOrb className="w-[600px] h-[600px] bg-[#6c63ff]/8 top-[-100px] right-[-150px]" />
            <FloatingOrb className="w-[400px] h-[400px] bg-[#43d9ad]/6 bottom-[-50px] left-[-100px]" />
            <FloatingOrb className="w-[300px] h-[300px] bg-[#ff6584]/5 top-[40%] left-[10%]" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(108,99,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col-reverse lg:flex-row items-center gap-16">
                {/* Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex-1 text-center lg:text-left"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#6c63ff]/15 text-[#6c63ff] border border-[#6c63ff]/25 tracking-wide uppercase">
                            ✨ Open to Work
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.div variants={itemVariants}>
                        <p className="text-[#9999b3] text-lg mb-2">Hello, I'm</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-4">
                            <span className="text-white">{personalInfo.fullName.split(' ')[0]} </span>
                            <span className="gradient-text">{personalInfo.fullName.split(' ').slice(1).join(' ')}</span>
                        </h1>
                    </motion.div>

                    {/* Role */}
                    <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                        <div className="h-px w-8 bg-[#6c63ff]" />
                        <p className="text-xl sm:text-2xl font-medium text-[#9999b3]">{personalInfo.role}</p>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-[#9999b3] text-lg max-w-xl leading-relaxed mb-10"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="btn-primary flex items-center gap-2"
                        >
                            Lihat Proyek
                            <ArrowDown size={16} />
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-outline flex items-center gap-2"
                        >
                            <Mail size={16} />
                            Hubungi Saya
                        </button>
                        <a
                            href={personalInfo.cvLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline flex items-center gap-2"
                        >
                            <ExternalLink size={16} />
                            Lihat CV
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants} className="flex items-center gap-5 justify-center lg:justify-start">
                        <span className="text-[#9999b3] text-sm">Find me on</span>
                        {[
                            { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
                            { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                        ].map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -2 }}
                                className="w-9 h-9 rounded-lg bg-[#16161e] border border-[#2a2a3d] flex items-center justify-center text-[#9999b3] hover:text-[#6c63ff] hover:border-[#6c63ff]/40 transition-all duration-200"
                                aria-label={label}
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Avatar / Profile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    className="flex-shrink-0"
                >
                    <div className="relative">
                        {/* Glow ring */}
                        <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-[#6c63ff] via-[#43d9ad] to-[#ff6584] animate-[spin_8s_linear_infinite] blur-sm opacity-60" />
                        <div className="absolute inset-[-3px] rounded-full bg-gradient-to-br from-[#6c63ff] via-[#43d9ad] to-[#ff6584] animate-[spin_8s_linear_infinite]" />

                        {/* Avatar container */}
                        <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#0a0a0f]">
                            {/* Gradient avatar placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] via-[#16161e] to-[#0d0d15] flex flex-col items-center justify-center">
                                <span className="text-8xl sm:text-9xl select-none">👨‍💻</span>
                            </div>
                        </div>

                        {/* Floating badge - Experience */}
                        <motion.div
                            animate={{ y: [-4, 4, -4] }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                            className="absolute -bottom-4 -left-8 glass rounded-xl px-4 py-3 border border-white/5"
                        >
                            <p className="text-[#9999b3] text-xs">Experience</p>
                            <p className="text-white font-bold text-sm">2+ Years</p>
                        </motion.div>

                        {/* Floating badge - Projects */}
                        <motion.div
                            animate={{ y: [4, -4, 4] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                            className="absolute -top-4 -right-8 glass rounded-xl px-4 py-3 border border-white/5"
                        >
                            <p className="text-[#9999b3] text-xs">Projects</p>
                            <p className="text-white font-bold text-sm">10+ Built</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[#9999b3] text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-5 h-8 rounded-full border-2 border-[#6c63ff]/40 flex items-start justify-center pt-1"
                >
                    <div className="w-1 h-2 bg-[#6c63ff] rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
