import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { User, Target, Calendar, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

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
                    {/* Left: Bio */}
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
                                { value: '2+', label: 'Years Exp' },
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
