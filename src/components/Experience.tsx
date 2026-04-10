import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Experience = () => {
    const sectionRef = useScrollAnimation();

    const experiences = [
        {
            title: 'Frontend Developer',
            company: 'Pointpulse',
            period: 'Январь 2026 — настоящее время',
            description: [
                'Разработка платформы в составе фронтенд-команды (React, TypeScript, React Router)',
                'Работа по Git-flow: создание веток, Merge Request, code review',
                'Исправление багов и доработка функционала — от анализа до выкладки решения',
                'Проведение ревью кода коллег'
            ]
        },
        {
            title: 'Frontend Developer (фриланс)',
            company: 'Альтаир Недвижимость',
            period: 'Октябрь 2025 — настоящее время',
            description: [
                'Разработал frontend сайта с нуля: адаптивная вёрстка, интерактивные элементы, фильтрация объектов',
                'Реализовал динамическую фильтрацию без перезагрузки → +15% заявок по отзывам заказчика',
                'Стек: HTML5, CSS3, JavaScript (ES6+), адаптивность, SEO, доступность'
            ]
        },
        {
            title: 'Директор магазина',
            company: 'АО "НОВАЯ МОДА"',
            period: 'Декабрь 2022 — настоящее время',
            description: [
                'Руководство командой из 25 человек: распределение задач, контроль KPI, обучение',
                'Супер-юзер при внедрении корпоративных веб-приложений: тестирование, сбор обратной связи, постановка задач разработчикам',
                '80% моих правок (фильтрация по сезонам, блокировка позиций) были приняты в работу'
            ]
        },
        {
            title: 'Frontend Developer (фриланс)',
            company: 'РемСтрой (строительная компания)',
            period: 'Июль 2024 — Июль 2025',
            description: [
                'Разработал многостраничный сайт с интерактивными элементами (плавный скролл, подсветка меню, кнопка «наверх»)',
                'Оптимизировал обработку событий прокрутки для плавной работы на всех устройствах',
                'Сопровождал проект в течение года: 8 успешных правок, продление контракта'
            ]
        }
    ];

    return (
        <section ref={sectionRef} className="section" id="experience">
            <h2>Опыт работы</h2>
            <div className="experience-card">
                {experiences.map((exp, index) => (
                    <div className="experience-item" key={index}>
                        <div className="exp-header">
                            <div className="exp-title">
                                <h3>{exp.title}</h3>
                                <span className="exp-company">{exp.company}</span>
                            </div>
                            <span className="exp-date">{exp.period}</span>
                        </div>
                        <ul className="exp-description">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};