import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} className="section" id="about">
            <h2>О себе</h2>
            <div className="about-card">
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            10+ лет управляю розничным магазином и командой из 25 человек: 
                            ставлю задачи разработчикам, участвую в найме, контролирую KPI и внедряю веб-решения.
                        </p>
                        <p>
                            Сейчас - фронтенд-разработчик. Проектирую интерфейсы на <strong>React, TypeScript, HTML/CSS</strong>. 
                            Пишу чистый, производительный код.
                        </p>
                        <p>
                            <strong>Ключевое отличие:</strong> понимаю бизнес-метрики. 
                            Проектирую интерфейсы от задачи до измеримого результата: 
                            рост заявок, снижение отказов, продление контрактов.
                        </p>
                        <p>
                            В портфолио - есть коммерческие кейсы с цифрами: 
                            +35% заявок, +2 мин время сессии, -15% отказов.
                        </p>
                    </div>
                </div>
                <div className="cv-wrapper">
                    <a href="assets/cv/Fokin-Frontend.pdf" download className="btn-cv" aria-label="Скачать резюме в PDF">
                        Скачать резюме (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
};