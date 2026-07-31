import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { User, Target, Calendar, ExternalLink, GraduationCap, BookOpen, Globe, Sparkles } from 'lucide-react';
import { personalInfo, education } from '../../data/portfolio';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const highlightIcons = [User, Target, Calendar];

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const techStack = ['React.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Git'];

    return (
        <section id="about" className="py-28 bg-[#0d0d15] relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6c63ff]/4 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="mb-16"
                >
                    <motion.p variants={itemVariants} className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">
                        Get to Know Me
                    </motion.p>
                    <motion.h2 variants={itemVariants} className="section-heading text-white">
                        About <span className="gradient-text">Me</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="mt-4 w-16 h-1 bg-gradient-to-r from-[#6c63ff] to-[#43d9ad] rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Bio + Education */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        <motion.p variants={itemVariants} className="text-[#9999b3] text-lg leading-relaxed mb-5">
                            {personalInfo.bio}
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-[#9999b3] leading-relaxed mb-8">
                            {personalInfo.bioExtended}
                        </motion.p>

                        {/* Education Card */}
                        <motion.div
                            variants={itemVariants}
                            className="mb-8 p-5 rounded-2xl bg-[#16161e] border border-[#2a2a3d] relative overflow-hidden group hover:border-[#6c63ff]/30 transition-all duration-300"
                        >
                            {/* Accent glow */}
                            <div className="absolute top-0 right-0 w-28 h-28 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity duration-300 bg-[#6c63ff]" />

                            {/* Header */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6c63ff]/20 to-[#43d9ad]/20 flex items-center justify-center flex-shrink-0">
                                    <GraduationCap size={22} className="text-[#6c63ff]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-white font-bold text-base">{education.university}</h3>
                                    <p className="text-[#6c63ff] text-sm font-medium">{education.degree}</p>
                                    <div className="flex items-center flex-wrap gap-3 mt-1.5">
                                        <span className="flex items-center gap-1 text-[#9999b3] text-xs">
                                            <Calendar size={11} />
                                            {education.period}
                                        </span>
                                        <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-[#43d9ad]/15 text-[#43d9ad] border border-[#43d9ad]/25">
                                            GPA {education.gpa}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Thesis */}
                            <div className="ml-0 sm:ml-16 space-y-3">
                                <div className="flex gap-2">
                                    <BookOpen size={14} className="text-[#a29bfe] mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-[#9999b3] font-medium uppercase tracking-wide mb-1">Thesis</p>
                                        <p className="text-[#e8e8f0] text-sm leading-relaxed">{education.thesis.title}</p>
                                        <a
                                            href={education.thesis.doi}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs text-[#6c63ff] hover:text-[#43d9ad] transition-colors duration-200 mt-1"
                                        >
                                            <ExternalLink size={10} />
                                            View Publication
                                        </a>
                                    </div>
                                </div>

                                {/* Areas of Interest */}
                                <div className="flex gap-2">
                                    <Sparkles size={14} className="text-[#ffd166] mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-[#9999b3] font-medium uppercase tracking-wide mb-1.5">Areas of Interest</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {education.interests.map((interest) => (
                                                <span
                                                    key={interest}
                                                    className="px-2.5 py-1 text-xs rounded-md bg-[#6c63ff]/10 border border-[#6c63ff]/20 text-[#6c63ff]"
                                                >
                                                    {interest}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Languages */}
                                <div className="flex gap-2">
                                    <Globe size={14} className="text-[#43d9ad] mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-[#9999b3] font-medium uppercase tracking-wide mb-1">Languages</p>
                                        <div className="flex gap-2">
                                            {education.languages.map((lang) => (
                                                <span
                                                    key={lang}
                                                    className="px-2.5 py-1 text-xs rounded-md bg-[#43d9ad]/10 border border-[#43d9ad]/20 text-[#43d9ad]"
                                                >
                                                    {lang}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom accent line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : {}}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-[#6c63ff] to-transparent"
                            />
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div variants={itemVariants} className="mb-8">
                            <p className="text-sm text-[#9999b3] mb-3 font-medium">⚡ Tech I love working with:</p>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 text-sm font-mono rounded-md bg-[#16161e] border border-[#2a2a3d] text-[#43d9ad] hover:border-[#43d9ad]/40 transition-colors duration-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Download CV */}
                        <motion.div variants={itemVariants}>
                            <a
                                href={personalInfo.cvLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                <ExternalLink size={16} />
                                Lihat CV
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right: Highlight Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        className="grid gap-4"
                    >
                        {personalInfo.highlights.map((h, i) => {
                            const Icon = highlightIcons[i];
                            return (
                                <motion.div
                                    key={h.label}
                                    variants={itemVariants}
                                    whileHover={{ x: 6 }}
                                    className="flex items-center gap-5 p-5 rounded-xl bg-[#16161e] border border-[#2a2a3d] hover:border-[#6c63ff]/40 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6c63ff]/20 to-[#43d9ad]/20 flex items-center justify-center group-hover:from-[#6c63ff]/30 group-hover:to-[#43d9ad]/30 transition-all duration-300">
                                        <Icon size={22} className="text-[#6c63ff]" />
                                    </div>
                                    <div>
                                        <p className="text-[#9999b3] text-sm">{h.label}</p>
                                        <p className="text-white font-bold text-lg">{h.value}</p>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Stats Grid */}
                        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mt-2">
                            {[
                                { value: '10+', label: 'Projects' },
                                { value: '1+', label: 'Years Exp' },
                                { value: '100%', label: 'Dedication' },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="p-4 rounded-xl bg-[#16161e] border border-[#2a2a3d] text-center"
                                >
                                    <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                                    <p className="text-[#9999b3] text-xs mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
