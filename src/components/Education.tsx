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

                    <p className="edu-desc">
                        Освоил разработку SPA-приложений на React и TypeScript:
                        компонентный подход, маршрутизацию, работу с REST API,
                        управление состоянием, асинхронное программирование,
                        Git и современные практики frontend-разработки.
                    </p>

                    <div className="edu-skills">
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>React Router</span>
                        <span>REST API</span>
                        <span>Redux Toolkit</span>
                        <span>Git</span>
                    </div>

                    <a
                        href="https://netology.ru/backend/api/user/programs/56913/pdf_certificate"
                        className="cert-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Посмотреть сертификат
                    </a>
                </div>

                <div className="education-item">
                    <div className="edu-header">
                        <h3>HTML и CSS для начинающих</h3>
                        <span className="edu-date">2024</span>
                    </div>

                    <p className="edu-place">Brainscloud</p>

                    <p className="edu-desc">
                        Получил фундаментальные знания по HTML5, CSS3,
                        Flexbox, адаптивной вёрстке и анимациям.
                        Эти навыки использовал при разработке первых
                        коммерческих проектов и создании адаптивных интерфейсов.
                    </p>

                    <button
                        className="course-details-btn"
                        onClick={onOpenCourseModal}
                    >
                        Подробнее о программе
                    </button>
                </div>
            </div>
        </section>
    );
};