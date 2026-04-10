import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface EducationProps {
    onOpenCourseModal: () => void;
}

export const Education = ({ onOpenCourseModal }: EducationProps) => {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} className="section" id="education">
            <h2>Образование и курсы</h2>
            
            <div className="education-card">
                <div className="education-item">
                    <div className="edu-header">
                        <h3>Frontend-разработчик</h3>
                        <span className="edu-date">2025</span>
                    </div>
                    <p className="edu-place">Нетология</p>
                    <p className="edu-desc">Курс по современной фронтенд-разработке: React, TypeScript, адаптивная верстка, работа с API.</p>
                    <a href="https://netology.ru/backend/api/user/programs/56913/pdf_certificate" className="cert-link" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-certificate"></i> Сертификат
                    </a>
                </div>

                <div className="education-item">
                    <div className="edu-header">
                        <h3>HTML и CSS для начинающих</h3>
                        <span className="edu-date">2024</span>
                    </div>
                    <p className="edu-place">Brainscloud</p>
                    <p className="edu-desc">Полный курс по основам веб-разработки: HTML5, CSS3, Flexbox, адаптивная верстка, анимации.</p>
                    <div className="course-badge">
                        <i className="fas fa-graduation-cap"></i> Пройден · 42 урока · 10ч 40м
                    </div>
                    <button className="course-details-btn" onClick={onOpenCourseModal}>
                        <i className="fas fa-info-circle"></i> Подробнее о курсе
                    </button>
                </div>

            </div>
        </section>
    );
};