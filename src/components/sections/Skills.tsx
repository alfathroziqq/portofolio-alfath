import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { skills } from '../../data/portfolio';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="skills" className="py-28 bg-[#0a0a0f] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#43d9ad]/4 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="mb-16"
                >
                    <motion.p variants={itemVariants} className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">
                        What I Work With
                    </motion.p>
                    <motion.h2 variants={itemVariants} className="section-heading text-white">
                        My <span className="gradient-text">Skills</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="mt-4 w-16 h-1 bg-gradient-to-r from-[#6c63ff] to-[#43d9ad] rounded-full" />
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {skills.map((category, idx) => (
                        <SkillCard key={category.category} category={category} index={idx} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface SkillCardProps {
    category: (typeof skills)[0];
    index: number;
    isInView: boolean;
}

const SkillCard = ({ category, index, isInView }: SkillCardProps) => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number], delay: index * 0.1 },
        },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileHover={{ y: -4 }}
            className="group p-6 rounded-2xl bg-[#16161e] border border-[#2a2a3d] hover:border-opacity-60 transition-all duration-300 card-hover"
            style={{
                ['--hover-color' as string]: category.color,
            }}
        >
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-5">
                <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${category.color}18` }}
                >
                    {category.icon}
                </div>
                <div>
                    <h3 className="font-bold text-white text-base">{category.category}</h3>
                    <p className="text-[#9999b3] text-xs">{category.items.length} skills</p>
                </div>
            </div>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                    <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 cursor-default"
                        style={{
                            background: `${category.color}0d`,
                            borderColor: `${category.color}30`,
                            color: category.color,
                        }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>

            {/* Animated bottom bar */}
            <div className="mt-5 h-0.5 w-full rounded-full bg-[#2a2a3d] overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.4 }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(to right, ${category.color}, ${category.color}60)` }}
                />
            </div>
        </motion.div>
    );
};

export default Skills;
