import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const currentElement = sectionRef.current;
        if (!currentElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
        );

        observer.observe(currentElement);

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return sectionRef;
};