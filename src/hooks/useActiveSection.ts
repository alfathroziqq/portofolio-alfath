import { useState, useEffect, useRef } from 'react';

const sections = ['home', 'about', 'skills', 'projects', 'organizations', 'achievements', 'contact'];

export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState('home');
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-40% 0px -50% 0px',
                threshold: 0,
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, []);

    return activeSection;
};
