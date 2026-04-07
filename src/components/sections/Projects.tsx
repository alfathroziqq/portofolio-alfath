import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, type Variants } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects, projectCategories } from '../../data/portfolio';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="py-28 bg-[#0d0d15] relative overflow-hidden">
            <div className="absolute top-20 right-0 w-96 h-96 bg-[#ff6584]/4 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="mb-12"
                >
                    <motion.p variants={itemVariants} className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">
                        What I've Built
                    </motion.p>
                    <motion.h2 variants={itemVariants} className="section-heading text-white">
                        Featured <span className="gradient-text">Projects</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="mt-4 w-16 h-1 bg-gradient-to-r from-[#6c63ff] to-[#43d9ad] rounded-full" />
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="flex flex-wrap gap-2 mb-10"
                >
                    {projectCategories.map((cat) => (
                        <motion.button
                            key={cat}
                            variants={itemVariants}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${activeFilter === cat
                                ? 'text-white'
                                : 'text-[#9999b3] bg-[#16161e] border border-[#2a2a3d] hover:text-white hover:border-[#6c63ff]/40'
                                }`}
                        >
                            {activeFilter === cat && (
                                <motion.div
                                    layoutId="filterBg"
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#5240e4]"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                />
                            )}
                            <span className="relative z-10">{cat}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                    >
                        {filtered.map((project, idx) => (
                            <ProjectCard key={project.id} project={project} index={idx} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

interface ProjectCardProps {
    project: (typeof projects)[0];
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group bg-[#16161e] rounded-2xl border border-[#2a2a3d] overflow-hidden hover:border-[#6c63ff]/30 transition-all duration-300 flex flex-col"
        >
            {/* Thumbnail */}
            <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-7xl">{project.emoji}</span>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-black/40 backdrop-blur-sm text-white rounded-full border border-white/10">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-bold text-white text-lg group-hover:text-[#6c63ff] transition-colors duration-200">
                        {project.title}
                    </h3>
                    <Star size={16} className="text-[#9999b3] group-hover:text-[#ffd166] transition-colors duration-200 flex-shrink-0 mt-1" />
                </div>

                <p className="text-[#9999b3] text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Features */}
                <div className="mb-4 flex-1">
                    <p className="text-xs text-[#9999b3] font-medium mb-2 uppercase tracking-wide">Key Features</p>
                    <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feat) => (
                            <li key={feat} className="text-xs text-[#9999b3] flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#43d9ad] flex-shrink-0" />
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 text-xs rounded bg-[#6c63ff]/10 border border-[#6c63ff]/20 text-[#6c63ff]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-[#2a2a3d]">
                    <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#6c63ff]/10 border border-[#6c63ff]/20 text-[#6c63ff] text-xs font-medium hover:bg-[#6c63ff]/20 transition-all duration-200"
                    >
                        <ExternalLink size={13} />
                        Live Demo
                    </a>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 border border-white/10 text-[#9999b3] text-xs font-medium hover:bg-white/10 hover:text-white transition-all duration-200"
                    >
                        <FaGithub size={13} />
                        Source Code
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
