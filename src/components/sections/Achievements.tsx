import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from '../../data/portfolio';

const typeColors: Record<string, string> = {
    competition: '#ffd166',
    certification: '#6c63ff',
    bootcamp: '#ff6584',
    scholarship: '#ffd166',
};

const Achievements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="achievements" className="py-28 bg-[#0d0d15] relative overflow-hidden">
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#ffd166]/4 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">
                        What I've Accomplished
                    </p>
                    <h2 className="section-heading text-white">
                        Achievements & <span className="gradient-text">Certifications</span>
                    </h2>
                    <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#6c63ff] to-[#43d9ad] rounded-full" />
                </motion.div>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {achievements.map((ach, idx) => {
                        const accentColor = typeColors[ach.type] || ach.color;

                        return (
                            <motion.div
                                key={ach.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                whileHover={{ y: -6, scale: 1.01 }}
                                className="p-6 rounded-2xl bg-[#16161e] border border-[#2a2a3d] hover:border-opacity-60 transition-all duration-300 relative overflow-hidden group"
                                style={{
                                    ['--accent' as string]: accentColor,
                                }}
                            >
                                {/* Accent glow top-left */}
                                <div
                                    className="absolute top-0 left-0 w-32 h-32 rounded-br-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                                    style={{ background: accentColor }}
                                />

                                {/* Type badge */}
                                <div className="flex items-start justify-between gap-3 mb-4">
                                    <span
                                        className="text-4xl"
                                        role="img"
                                        aria-label={ach.type}
                                    >
                                        {ach.icon}
                                    </span>
                                    <div className="flex flex-col items-end gap-1">
                                        <span
                                            className="px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize"
                                            style={{
                                                background: `${accentColor}18`,
                                                color: accentColor,
                                                borderColor: `${accentColor}30`,
                                                border: '1px solid',
                                            }}
                                        >
                                            {ach.type}
                                        </span>
                                        <span className="text-[#9999b3] text-xs">{ach.date}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-white font-bold text-base mb-1 leading-tight">{ach.title}</h3>
                                <p
                                    className="text-sm font-medium mb-3"
                                    style={{ color: accentColor }}
                                >
                                    {ach.issuer}
                                </p>
                                <p className="text-[#9999b3] text-sm leading-relaxed">{ach.description}</p>

                                {/* Bottom accent line */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={isInView ? { scaleX: 1 } : {}}
                                    transition={{ duration: 0.8, delay: idx * 0.1 + 0.4 }}
                                    className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
                                    style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
