import { useState, useEffect } from 'react';
import { useScroll } from '../hooks/useScroll';

export const Footer = () => {
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [visitCount, setVisitCount] = useState<number>(0);
    const [apiStatus, setApiStatus] = useState<'online' | 'offline' | 'checking'>('checking');
    const { showScrollTop } = useScroll(300);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // --- Счётчик посещений ---
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

    // --- Проверка статуса API ---
    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        fetch(`${API_URL}/api/leads`)
            .then(() => setApiStatus('online'))
            .catch(() => setApiStatus('offline'));
    }, []);

    return (
        <>
            <footer>
                <div className="footer-content">
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        flexWrap: 'wrap', 
                        gap: '12px', 
                        width: '100%' 
                    }}>
                        {/* Левая часть — копирайт и счётчик */}
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <p style={{ margin: 0 }}>© {year} Eugene Fokin</p>
                            <p className="time-counter" style={{ margin: 0, fontSize: '0.85rem', opacity: 0.7 }}>
                                <i className="fas fa-eye" style={{ marginRight: '4px' }}></i>
                                {visitCount}
                            </p>
                        </div>

                        {/* Правая часть — ссылки и статус API */}
                        <div style={{ 
                            display: 'flex', 
                            gap: '16px', 
                            alignItems: 'center', 
                            fontSize: '0.8rem', 
                            flexWrap: 'wrap' 
                        }}>
                            {/* Индикатор API */}
                            <span style={{ 
                                color: apiStatus === 'online' ? '#4caf50' : '#f44336',
                                fontSize: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}>
                                <i className={`fas fa-circle`} style={{ fontSize: '0.5rem' }}></i>
                                {apiStatus === 'online' ? 'API работает' : 'API недоступен'}
                            </span>

                            {/* Ссылка на документацию API */}
                            <a 
                                href="#/api-info" 
                                style={{ 
                                    color: 'var(--accent-color)', 
                                    textDecoration: 'none',
                                    opacity: 0.7,
                                    fontSize: '0.75rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}
                            >
                                <i className="fas fa-code"></i>
                                API
                            </a>

                            {/* Ссылка на админку */}
                            <a 
                                href="#/login" 
                                style={{ 
                                    color: 'var(--text-secondary)', 
                                    textDecoration: 'none',
                                    opacity: 0.4,
                                    fontSize: '0.7rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}
                            >
                                <i className="fas fa-lock"></i>
                                Админка
                            </a>

                            {/* Ссылка на GitHub бэкенда */}
                            <a 
                                href="https://github.com/LesanePC/portfolio-backend" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ 
                                    color: 'var(--text-secondary)', 
                                    textDecoration: 'none',
                                    opacity: 0.4,
                                    fontSize: '0.7rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}
                            >
                                <i className="fab fa-github"></i>
                                Backend
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            
            {/* Кнопка "Наверх" */}
            <button 
                id="scrollTopBtn" 
                className={`scroll-footer ${showScrollTop ? 'visible' : ''}`} 
                title="Наверх" 
                aria-label="Наверх"
                onClick={scrollToTop}
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </>
    );
};