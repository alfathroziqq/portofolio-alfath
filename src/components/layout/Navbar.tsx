import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { scrollToSection } from '../../utils/scroll';

const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'organizations', label: 'Orgs' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const activeSection = useActiveSection();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id: string) => {
        scrollToSection(id);
        setMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/5 shadow-xl shadow-black/20' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => handleNavClick('home')}
                    className="flex items-center gap-2 group"
                >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6c63ff] to-[#43d9ad] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Code2 size={16} className="text-white" />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-white group-hover:text-[#6c63ff] transition-colors duration-300">
                        alfath<span className="text-[#6c63ff]">.</span>dev
                    </span>
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${activeSection === link.id
                                ? 'text-[#6c63ff]'
                                : 'text-[#9999b3] hover:text-white'
                                }`}
                        >
                            {link.label}
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute inset-0 bg-[#6c63ff]/10 rounded-lg border border-[#6c63ff]/20"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                />
                            )}
                        </button>
                    ))}
                    <button
                        onClick={() => handleNavClick('contact')}
                        className="ml-4 btn-primary text-sm px-5 py-2"
                    >
                        Hire Me
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 rounded-lg text-[#9999b3] hover:text-white hover:bg-white/5 transition-all"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden glass border-t border-white/5"
                    >
                        <div className="px-6 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavClick(link.id)}
                                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === link.id
                                        ? 'text-[#6c63ff] bg-[#6c63ff]/10'
                                        : 'text-[#9999b3] hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <button
                                onClick={() => handleNavClick('contact')}
                                className="mt-2 btn-primary text-sm"
                            >
                                Hire Me
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
