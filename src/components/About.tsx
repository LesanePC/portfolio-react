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
                            Более 10 лет я управлял магазином и командой из 25 человек: внедрял системы, ставил задачи разработчикам и отвечал за результат.
                        </p>
                        <p>
                            Сейчас я Frontend Developer. Создаю чистые, быстрые и адаптивные интерфейсы на HTML, CSS и JavaScript, 
                            а также активно развиваю <strong>React + TypeScript</strong>.
                        </p>
                        <p>
                            <strong>Моё главное преимущество</strong> - я вижу проект целиком: от бизнес-задачи и сбора требований 
                            до готового продукта, который увеличивает продажи и улучшает пользовательский опыт.
                        </p>
                        <p>
                            В портфолио — реальные кейсы с цифрами (+35% заявок, продление контрактов, высокие оценки Lighthouse).
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