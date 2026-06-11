import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Experience = () => {
    const sectionRef = useScrollAnimation();

    const experiences = [
        {
            title: 'Frontend Developer',
            company: 'Pointpulse',
            period: 'Янв 2026 - наст. время',
            description: [
                'Разработка платформы: React 19, TypeScript, React Router',
                'Git-flow: ветки, Merge Request, code review',
                'Участие в ревью кода команды'
            ]
        },
        {
            title: 'Frontend Developer (фриланс)',
            company: 'Альтаир Недвижимость',
            period: 'Окт 2025 - наст. время',
            description: [
                'Создал сайт с нуля: адаптивная вёрстка, динамическая фильтрация объектов без перезагрузки',
                'Результат: +35% заявок (по данным заказчика)',
                'Стек: HTML5, CSS3, JavaScript (ES6+), SEO, доступность'
            ]
        },
        {
            title: 'Frontend Developer (фриланс)',
            company: 'РемСтрой',
            period: 'Июл 2024 - Июл 2025',
            description: [
                'Разработал многостраничный сайт с интерактивом: плавный скролл, подсветка меню',
                'Оптимизировал обработку событий прокрутки для плавной работы на всех устройствах',
                'Продление контракта на год'
            ]
        },
        {
            title: 'Директор магазина',
            company: 'АО «НОВАЯ МОДА»',
            period: 'Дек 2022 - наст. время',
            description: [
                'Управление командой 25 человек: KPI, бюджеты, найм',
                'Супер-юзер веб-приложений: сбор требований, тестирование, постановка задач разработчикам',
                '80% моих правок (фильтрация, блокировка позиций) приняты в продакшен'
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