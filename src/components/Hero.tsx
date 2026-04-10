import { useTypewriter } from '../hooks/useTypewriter';

export const Hero = () => {
    const { displayText } = useTypewriter('Frontend Developer с бизнес-мышлением', 70);

    return (
        <section className="section welcome" id="welcome">
            <div className="welcome-content">
                <span className="welcome-greeting">Привет, меня зовут</span>
                <h1 className="welcome-name">Евгений Фокин</h1>
                <p className="welcome-title">{displayText}<span className="cursor">|</span></p>
                <p className="welcome-description">
                    10+ лет руководил бизнесом и командой из 25 человек. Теперь сам создаю интерфейсы, 
                    которые реально работают на результат. 
                    <strong>Понимаю задачу со стороны бизнеса</strong> и довожу её до удобного, быстрого и красивого интерфейса.
                </p>
                <div className="welcome-buttons">
                    <a href="#projects" className="btn-primary">Смотреть проекты</a>
                    <a href="/assets/cv/Fokin-Frontend.pdf" download className="btn-secondary">Скачать резюме (PDF)</a>
                    <a href="#contacts" className="btn-secondary">Связаться со мной</a>
                </div>
            </div>
            <div className="welcome-visual">
                <div className="about-photo-wrapper">
                    <img src="./img/Fokin.webp" alt="Евгений Фокин - Frontend Developer" loading="lazy" />
                </div>
            </div>
        </section>
    );
};