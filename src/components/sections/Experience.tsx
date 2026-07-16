import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown, MapPin } from 'lucide-react';
import { workExperiences } from '../../data/portfolio';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="experience" className="py-28 bg-[#0a0a0f] relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-[#6c63ff]/4 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-0 w-72 h-72 bg-[#43d9ad]/4 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">
                        Where I've Worked
                    </p>
                    <h2 className="section-heading text-white">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#6c63ff] to-[#43d9ad] rounded-full" />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-[#6c63ff] via-[#43d9ad] to-transparent hidden md:block" />

                    <div className="space-y-10">
                        {workExperiences.map((exp, idx) => (
                            <ExperienceCard key={exp.id} experience={exp} index={idx} isInView={isInView} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

interface ExperienceCardProps {
    experience: (typeof workExperiences)[0];
    index: number;
    isInView: boolean;
}

const ExperienceCard = ({ experience, index, isInView }: ExperienceCardProps) => {
    const [expanded, setExpanded] = useState(index === 0);

    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex gap-6 group"
        >
            {/* Timeline dot */}
            <div className="hidden md:flex flex-col items-center pt-1">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#6c63ff]/20 to-[#43d9ad]/20 border border-[#6c63ff]/30 flex items-center justify-center flex-shrink-0 group-hover:from-[#6c63ff]/30 group-hover:to-[#43d9ad]/30 transition-all duration-300 z-10"
                >
                    <Briefcase size={20} className="text-[#6c63ff]" />
                    {/* Active pulse for current job */}
                    {experience.period.includes('Present') && (
                        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#43d9ad] border-2 border-[#0a0a0f]">
                            <span className="absolute inset-0 rounded-full bg-[#43d9ad] animate-ping opacity-75" />
                        </span>
                    )}
                </motion.div>
            </div>

            {/* Card */}
            <div className="flex-1 rounded-2xl bg-[#16161e] border border-[#2a2a3d] hover:border-[#6c63ff]/30 transition-all duration-300 overflow-hidden group-hover:shadow-[0_10px_40px_rgba(108,99,255,0.08)]">
                {/* Card Header */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="w-full p-6 text-left flex flex-col sm:flex-row sm:items-start justify-between gap-4 cursor-pointer"
                >
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {/* Mobile-only icon */}
                            <div className="md:hidden w-8 h-8 rounded-lg bg-gradient-to-br from-[#6c63ff]/20 to-[#43d9ad]/20 flex items-center justify-center flex-shrink-0">
                                <Briefcase size={14} className="text-[#6c63ff]" />
                            </div>
                            <h3 className="text-white font-bold text-lg leading-tight">{experience.company}</h3>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                            <MapPin size={13} className="text-[#6c63ff] flex-shrink-0" />
                            <span className="text-[#6c63ff] text-sm font-semibold">{experience.position}</span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3 mt-2">
                            <div className="flex items-center gap-1.5 text-[#9999b3] text-xs">
                                <Calendar size={12} />
                                {experience.period}
                            </div>
                            <span
                                className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${experience.type === 'fulltime'
                                    ? 'bg-[#43d9ad]/15 text-[#43d9ad] border border-[#43d9ad]/30'
                                    : 'bg-[#a29bfe]/15 text-[#a29bfe] border border-[#a29bfe]/30'
                                    }`}
                            >
                                {experience.type === 'fulltime' ? 'Full-time' : 'Internship'}
                            </span>
                            {experience.period.includes('Present') && (
                                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[#43d9ad]/15 text-[#43d9ad] border border-[#43d9ad]/30 animate-pulse">
                                    Current
                                </span>
                            )}
                        </div>
                    </div>
                    <motion.div
                        animate={{ rotate: expanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#2a2a3d] flex items-center justify-center"
                    >
                        <ChevronDown size={16} className="text-[#9999b3]" />
                    </motion.div>
                </button>

                {/* Expandable content */}
                <AnimatePresence initial={false}>
                    {expanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="px-6 pb-6 border-t border-[#2a2a3d]">
                                {/* Description bullets */}
                                <ul className="mt-5 space-y-3">
                                    {experience.description.map((desc, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.06, duration: 0.3 }}
                                            className="flex gap-3 text-[#9999b3] text-sm leading-relaxed"
                                        >
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6c63ff] flex-shrink-0" />
                                            <span>{desc}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}
                                <div className="mt-5 pt-4 border-t border-[#2a2a3d]/50">
                                    <p className="text-xs text-[#9999b3] font-medium uppercase tracking-wide mb-3">
                                        Tech Stack
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-medium rounded-lg bg-[#6c63ff]/10 border border-[#6c63ff]/20 text-[#6c63ff] hover:bg-[#6c63ff]/15 transition-colors duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom accent line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: index * 0.2 + 0.4 }}
                    className="h-0.5 origin-left"
                    style={{
                        background: experience.period.includes('Present')
                            ? 'linear-gradient(to right, #6c63ff, #43d9ad)'
                            : 'linear-gradient(to right, #6c63ff, transparent)',
                    }}
                />
            </div>
        </motion.div>
    );
};

export default Experience;
