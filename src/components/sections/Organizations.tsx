import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';
import { organizations } from '../../data/portfolio';

const typeConfig: Record<string, { icon: string; color: string }> = {
    'student-org': { icon: '🏫', color: '#6c63ff' },
    'tech-community': { icon: '💻', color: '#43d9ad' },
    community: { icon: '🌐', color: '#a29bfe' },
    'open-source': { icon: '🔗', color: '#ff6584' },
};

const Organizations = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="organizations" className="py-28 bg-[#0a0a0f] relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#a29bfe]/5 rounded-full blur-3xl pointer-events-none" />

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
                        My Involvement
                    </p>
                    <h2 className="section-heading text-white">
                        Organizations & <span className="gradient-text">Community</span>
                    </h2>
                    <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#6c63ff] to-[#43d9ad] rounded-full" />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-[#a29bfe] via-[#6c63ff] to-transparent hidden md:block" />

                    <div className="space-y-8">
                        {organizations.map((org, idx) => {
                            const config = typeConfig[org.type] || { icon: '🏢', color: '#6c63ff' };

                            return (
                                <motion.div
                                    key={org.id}
                                    initial={{ opacity: 0, x: -40 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                                    className="flex gap-6 group"
                                >
                                    {/* Timeline dot */}
                                    <div className="hidden md:flex flex-col items-center pt-1">
                                        <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300 z-10 border"
                                            style={{
                                                background: `${config.color}15`,
                                                borderColor: `${config.color}30`,
                                            }}
                                        >
                                            {config.icon}
                                        </motion.div>
                                    </div>

                                    {/* Card */}
                                    <motion.div
                                        whileHover={{ y: -4 }}
                                        className="flex-1 p-6 rounded-2xl bg-[#16161e] border border-[#2a2a3d] hover:border-[#6c63ff]/30 transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(108,99,255,0.08)] relative overflow-hidden"
                                    >
                                        {/* Accent glow */}
                                        <div
                                            className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                                            style={{ background: config.color }}
                                        />

                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                            <div className="flex-1 min-w-0">
                                                {/* Mobile-only icon */}
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div
                                                        className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                                                        style={{ background: `${config.color}15` }}
                                                    >
                                                        {config.icon}
                                                    </div>
                                                    <h3 className="text-white font-bold text-lg leading-tight">{org.name}</h3>
                                                </div>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <Users size={13} style={{ color: config.color }} />
                                                    <span className="text-sm font-semibold" style={{ color: config.color }}>
                                                        {org.role}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2a2a3d] text-[#9999b3] text-xs flex-shrink-0">
                                                <Calendar size={12} />
                                                {org.period}
                                            </div>
                                        </div>
                                        <p className="text-[#9999b3] text-sm leading-relaxed mt-3">{org.description}</p>

                                        {/* Bottom accent line */}
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={isInView ? { scaleX: 1 } : {}}
                                            transition={{ duration: 0.8, delay: idx * 0.15 + 0.4 }}
                                            className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
                                            style={{ background: `linear-gradient(to right, ${config.color}, transparent)` }}
                                        />
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organizations;
