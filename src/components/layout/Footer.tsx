import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolio';
import { scrollToSection } from '../../utils/scroll';

const socialLinks = [
    { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FaInstagram, href: personalInfo.instagram, label: 'Instagram' },
    { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const footerLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

const Footer = () => {
    return (
        <footer className="relative border-t border-[#2a2a3d] bg-[#0d0d15]">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6c63ff] to-[#43d9ad] flex items-center justify-center">
                                <Code2 size={16} className="text-white" />
                            </div>
                            <span className="font-bold text-lg text-white">
                                alfath<span className="text-[#6c63ff]">.</span>dev
                            </span>
                        </div>
                        <p className="text-[#9999b3] text-sm leading-relaxed">
                            Building digital experiences with passion and precision. Always learning, always growing.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            {footerLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-[#9999b3] hover:text-[#6c63ff] text-sm text-left transition-colors duration-200"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
                        <p className="text-[#9999b3] text-sm mb-4">{personalInfo.email}</p>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-lg bg-[#16161e] border border-[#2a2a3d] flex items-center justify-center text-[#9999b3] hover:text-[#6c63ff] hover:border-[#6c63ff]/40 transition-all duration-200"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#2a2a3d] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[#9999b3] text-sm">
                        © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
