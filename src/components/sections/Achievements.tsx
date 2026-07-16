import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Calendar, BadgeCheck } from 'lucide-react';
import { achievements, certifications } from '../../data/portfolio';

type TabType = 'achievements' | 'certifications';

const Achievements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [activeTab, setActiveTab] = useState<TabType>('achievements');

    const tabs: { id: TabType; label: string; icon: typeof Trophy; count: number }[] = [
        { id: 'achievements', label: 'Achievements', icon: Trophy, count: achievements.length },
        { id: 'certifications', label: 'Certifications', icon: Award, count: certifications.length },
    ];

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
                    className="mb-12"
                >
                    <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">
                        What I've Accomplished
                    </p>
                    <h2 className="section-heading text-white">
                        Achievements & <span className="gradient-text">Certifications</span>
                    </h2>
                    <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#6c63ff] to-[#43d9ad] rounded-full" />
                </motion.div>

                {/* Tab Switcher */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-2 mb-10"
                >
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${activeTab === tab.id
                                    ? 'text-white'
                                    : 'text-[#9999b3] bg-[#16161e] border border-[#2a2a3d] hover:text-white hover:border-[#6c63ff]/40'
                                    }`}
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="achTab"
                                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#6c63ff] to-[#5240e4]"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <Icon size={15} />
                                    {tab.label}
                                    <span
                                        className={`px-1.5 py-0.5 text-xs rounded-md font-bold ${activeTab === tab.id
                                            ? 'bg-white/20 text-white'
                                            : 'bg-[#2a2a3d] text-[#9999b3]'
                                            }`}
                                    >
                                        {tab.count}
                                    </span>
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'achievements' ? (
                        <motion.div
                            key="achievements"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                        >
                            {achievements.map((ach, idx) => (
                                <AchievementCard key={ach.id} achievement={ach} index={idx} isInView={isInView} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="certifications"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                        >
                            {certifications.map((cert, idx) => (
                                <CertificationCard key={cert.id} certification={cert} index={idx} isInView={isInView} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

/* ── Achievement Card ── */
interface AchievementCardProps {
    achievement: (typeof achievements)[0];
    index: number;
    isInView: boolean;
}

const AchievementCard = ({ achievement, index, isInView }: AchievementCardProps) => {
    const accentColor = achievement.color;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="p-6 rounded-2xl bg-[#16161e] border border-[#2a2a3d] hover:border-opacity-60 transition-all duration-300 relative overflow-hidden group"
        >
            {/* Accent glow top-left */}
            <div
                className="absolute top-0 left-0 w-32 h-32 rounded-br-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{ background: accentColor }}
            />

            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl" style={{ background: `${accentColor}15` }}>
                    {achievement.icon}
                </div>
                <div className="flex flex-col items-end gap-1.5">
                    <span
                        className="px-2.5 py-0.5 text-xs font-semibold rounded-full capitalize flex items-center gap-1"
                        style={{
                            background: `${accentColor}18`,
                            color: accentColor,
                            border: `1px solid ${accentColor}30`,
                        }}
                    >
                        <Trophy size={10} />
                        {achievement.type}
                    </span>
                    <span className="text-[#9999b3] text-xs flex items-center gap-1">
                        <Calendar size={10} />
                        {achievement.date}
                    </span>
                </div>
            </div>

            {/* Content */}
            <h3 className="text-white font-bold text-base mb-1 leading-tight">{achievement.title}</h3>
            <p className="text-sm font-medium mb-3" style={{ color: accentColor }}>
                {achievement.issuer}
            </p>
            <p className="text-[#9999b3] text-sm leading-relaxed">{achievement.description}</p>

            {/* Bottom accent line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
                style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
            />
        </motion.div>
    );
};

/* ── Certification Card ── */
interface CertificationCardProps {
    certification: (typeof certifications)[0];
    index: number;
    isInView: boolean;
}

const CertificationCard = ({ certification, index, isInView }: CertificationCardProps) => {
    const accentColor = certification.color;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="p-6 rounded-2xl bg-[#16161e] border border-[#2a2a3d] hover:border-opacity-60 transition-all duration-300 relative overflow-hidden group"
        >
            {/* Accent glow */}
            <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{ background: accentColor }}
            />

            {/* Badge icon */}
            <div className="flex items-start justify-between gap-3 mb-4">
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${accentColor}15` }}
                >
                    <BadgeCheck size={22} style={{ color: accentColor }} />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2a2a3d] text-[#9999b3] text-xs">
                    <Calendar size={11} />
                    {certification.period}
                </div>
            </div>

            {/* Content */}
            <h3 className="text-white font-bold text-base mb-1 leading-tight">{certification.title}</h3>
            <p className="text-sm font-medium mb-3" style={{ color: accentColor }}>
                {certification.issuer}
            </p>
            <p className="text-[#9999b3] text-sm leading-relaxed">{certification.description}</p>

            {/* Bottom accent line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
                style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
            />
        </motion.div>
    );
};

export default Achievements;
