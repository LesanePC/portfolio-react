import { useTypewriter } from "../hooks/useTypewriter";

export const Hero = () => {
    const { displayText } = useTypewriter(
        'React • TypeScript • Vite • GitLab',
        70
    );

    return (
        <section className="section welcome" id="welcome">
            <div className="welcome-content">
                <span className="welcome-greeting">
                    Евгений Фокин
                </span>

                <h1 className="welcome-name">
                    Frontend Developer
                </h1>

                <p className="welcome-title">
                    {displayText}
                    <span className="cursor">|</span>
                </p>

                <p className="welcome-description">
                    Frontend-разработчик с коммерческим опытом разработки
                    на React и TypeScript. Участвую в разработке CRM-системы,
                    работаю с GitLab, Merge Requests и Code Review.
                    Управленческий опыт помогает понимать бизнес-задачи
                    и создавать удобные интерфейсы для пользователей.
                </p>

                <div className="welcome-buttons">
    <button 
        onClick={() => {
            document.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }} 
        className="btn-primary"
    >
        Смотреть проекты
    </button>

    <a
        href="/assets/cv/Fokin-Frontend.pdf"
        download
        className="btn-secondary"
    >
        Скачать резюме
    </a>
</div>

            </div>

            <div className="welcome-visual">
                <div className="about-photo-wrapper">
                    <img
                        src="./img/Fokin.webp"
                        alt="Евгений Фокин — Frontend Developer"
                    />
                </div>
            </div>
        </section>
    );
};