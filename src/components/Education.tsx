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
                    <p className="edu-desc">React, TypeScript, работа с API, адаптивная вёрстка.</p>
                    <a href="https://netology.ru/backend/api/user/programs/56913/pdf_certificate" className="cert-link" target="_blank" rel="noopener noreferrer">
                        Сертификат
                    </a>
                </div>

                <div className="education-item">
                    <div className="edu-header">
                        <h3>HTML и CSS для начинающих</h3>
                        <span className="edu-date">2024</span>
                    </div>
                    <p className="edu-place">Brainscloud</p>
                    <p className="edu-desc">Основы веб-разработки: HTML5, CSS3, Flexbox, адаптивная вёрстка, анимации.</p>
                    <div className="course-badge">
                        42 урока · 10ч 40м
                    </div>
                    <button className="course-details-btn" onClick={onOpenCourseModal}>
                        Подробнее о курсе
                    </button>
                </div>
            </div>
        </section>
    );
};