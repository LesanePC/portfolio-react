import { useTypewriter } from '../hooks/useTypewriter';

export const Hero = () => {
    const { displayText } = useTypewriter('Frontend Developer | бывший CEO', 70);

    return (
        <section className="section welcome" id="welcome">
            <div className="welcome-content">
                <span className="welcome-greeting">Евгений Фокин</span>
                <h1 className="welcome-name">Frontend Developer</h1>
                <p className="welcome-title">{displayText}<span className="cursor">|</span></p>
                <p className="welcome-description">
                    10+ лет управляю бизнесом и командой из 25 человек. 
                    Проектирую интерфейсы с пониманием KPI: рост заявок, снижение отказов, удобство для пользователя.
                </p>
                <div className="welcome-buttons">
                    <a href="#projects" className="btn-primary">Проекты</a>
                    <a href="/assets/cv/Fokin-Frontend.pdf" download className="btn-secondary">Резюме (PDF)</a>
                </div>
            </div>
            <div className="welcome-visual">
                <div className="about-photo-wrapper">
                    <img src="./img/Fokin.webp" alt="Евгений Фокин — фронтенд-разработчик с управленческим опытом" />
                </div>
            </div>
        </section>
    );
};