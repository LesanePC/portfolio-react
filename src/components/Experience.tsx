import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Experience = () => {
    const sectionRef = useScrollAnimation();

    const experiences = [
        {
            title: 'Frontend Developer',
            company: 'PointPulse',
            period: 'Янв 2026 – настоящее время',
            stack: 'React • TypeScript • React Router • Vite • GitLab',
            description: [
                'Участвую в разработке CRM-системы для управления клиентами и студентами',
                'Разрабатываю и поддерживаю пользовательские интерфейсы',
                'Исправляю баги и дорабатываю существующий функционал',
                'Работаю с React Router, компонентной архитектурой и типизацией',
                'Использую GitLab, Merge Requests и Code Review в командной разработке',
                'Работаю с существующей кодовой базой и взаимодействую с командой разработки'
            ]
        },
        {
            title: 'Frontend Developer (Фриланс)',
            company: 'Альтаир Недвижимость',
            period: 'Окт 2025 – настоящее время',
            stack: 'HTML5 • CSS3 • JavaScript (ES6+)',
            description: [
                'Разработал сайт агентства недвижимости с нуля',
                'Реализовал динамическую фильтрацию объектов без перезагрузки страницы',
                'Оптимизировал структуру сайта и базовые SEO-показатели',
                'Обеспечил адаптивность для мобильных устройств и планшетов',
                'Результат: увеличение количества заявок на 35% по данным заказчика'
            ]
        },
        {
            title: 'Frontend Developer (Фриланс)',
            company: 'РемСтрой',
            period: 'Июл 2024 – Июл 2025',
            stack: 'HTML5 • CSS3 • JavaScript',
            description: [
                'Разработал корпоративный сайт строительной компании',
                'Реализовал интерактивную навигацию и плавный скролл между секциями',
                'Оптимизировал производительность интерфейса и обработку событий прокрутки',
                'Обеспечил корректную работу на мобильных устройствах',
                'Клиент продлил сотрудничество на дополнительный год'
            ]
        },
        {
            title: 'Управленческий опыт',
            company: 'АО «НОВАЯ МОДА»',
            period: '2022 – 2025',
            description: [
                'Управлял командой до 25 сотрудников',
                'Отвечал за планирование, KPI, подбор и развитие персонала',
                'Участвовал в постановке задач разработчикам и тестировании внутренних систем',
                'Получил опыт анализа бизнес-процессов и взаимодействия с IT-командами'
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

                                {'stack' in exp && (
                                    <div className="exp-stack">
                                        {exp.stack}
                                    </div>
                                )}
                            </div>

                            <span className="exp-date">
                                {exp.period}
                            </span>
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