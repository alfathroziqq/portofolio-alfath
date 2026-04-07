import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';
import { organizations } from '../../data/portfolio';

const typeIcon: Record<string, string> = {
    'student-org': '🏫',
    'tech-community': '💻',
    community: '🌐',
    'open-source': '🔗',
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
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#6c63ff] via-[#43d9ad] to-transparent hidden md:block" />

                    <div className="space-y-8">
                        {organizations.map((org, idx) => (
                            <motion.div
                                key={org.id}
                                initial={{ opacity: 0, x: -40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="flex gap-6 group"
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:flex flex-col items-center">
                                    <motion.div
                                        whileHover={{ scale: 1.3 }}
                                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6c63ff]/20 to-[#43d9ad]/20 border border-[#6c63ff]/30 flex items-center justify-center text-2xl flex-shrink-0 group-hover:from-[#6c63ff]/30 group-hover:to-[#43d9ad]/30 transition-all duration-300 z-10"
                                    >
                                        {typeIcon[org.type] || '🏢'}
                                    </motion.div>
                                </div>

                                {/* Card */}
                                <div className="flex-1 p-6 rounded-2xl bg-[#16161e] border border-[#2a2a3d] hover:border-[#6c63ff]/30 transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(108,99,255,0.08)]">
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                        <div>
                                            <h3 className="text-white font-bold text-lg">{org.name}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Users size={13} className="text-[#6c63ff]" />
                                                <span className="text-[#6c63ff] text-sm font-medium">{org.role}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2a2a3d] text-[#9999b3] text-xs">
                                            <Calendar size={12} />
                                            {org.period}
                                        </div>
                                    </div>
                                    <p className="text-[#9999b3] text-sm leading-relaxed">{org.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organizations;
