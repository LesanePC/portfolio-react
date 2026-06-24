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
        <strong>10+ лет управлял розничным бизнесом и командой из 25 человек: </strong> 
        ставил задачи разработчикам, участвовал в найме, контролировал KPI и внедрял веб-решения 
        (мои правки интерфейса сокращали время исправления багов в 2 раза).
    </p>
    <p>
        Сейчас - <strong>фронтенд-разработчик</strong>. Создаю интерфейсы на React, TypeScript, 
        соблюдаю принципы SOLID, BEM-архитектуру и стандарты доступности (WCAG 2.1). 
        Пишу поддерживаемый, тестируемый код.
    </p>
    <p>
        <strong>Моё ключевое отличие:</strong> я проектирую интерфейсы от бизнес-задачи до измеримого результата. 
        Например, внедрил фильтрацию на сайте недвижимости → заявки выросли на 10%, 
        оптимизировал модальные окна → сократил время взаимодействия пользователей на 20%.
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