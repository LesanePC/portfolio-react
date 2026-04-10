import { useState, useEffect } from 'react';
import { useScroll } from '../hooks/useScroll';

export const Footer = () => {
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [visitCount, setVisitCount] = useState<number>(0);
    const { showScrollTop } = useScroll(300);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const sessionCounted = sessionStorage.getItem('visit_counted');
        let visits: number = 0;
        
        const storedVisits = localStorage.getItem('portfolio_visits');
        if (storedVisits !== null) {
            visits = parseInt(storedVisits, 10);
        }

        if (!sessionCounted) {
            visits++;
            localStorage.setItem('portfolio_visits', visits.toString());
            sessionStorage.setItem('visit_counted', 'true');
        }

        setVisitCount(visits);
        setYear(new Date().getFullYear());
    }, []);

    return (
        <>
            <footer>
                <div className="footer-content">
                    <p>© {year} Eugene Fokin</p>
                    <p className="time-counter">Посещений: {visitCount}</p>
                </div>
            </footer>
            
            <button 
                id="scrollTopBtn" 
                className={`scroll-footer ${showScrollTop ? 'visible' : ''}`} 
                title="Наверх" 
                aria-label="Наверх"
                onClick={scrollToTop}
            >
                ↑
            </button>
        </>
    );
};