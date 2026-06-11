import type { Project } from '../types';

export const projects: Project[] = [
    // ==================== REACT ПРОЕКТЫ ====================
    {
        id: 'liftforge',
        title: 'LiftForge - Fitness Tracker',
        category: 'react',
        techStack: 'React 19 · TypeScript · Zustand · Tailwind CSS · Recharts · Vercel',
        description: 'Трекер силовых тренировок с визуализацией прогресса, библиотекой упражнений и авторасчётом личных рекордов.',
        metrics: '14+ упражнений · Drag & Drop · графики · тепловая карта · PWA-ready',
        demoUrl: 'https://liftforge-mu.vercel.app/',
        githubUrl: 'https://github.com/LesanePC/liftforge',
        imageUrl: './img/Liftforge.webp',
        detailedStack: 'React 19, TypeScript, Zustand, Tailwind CSS, Recharts, @dnd-kit, Vercel',
        contribution: [
            'CRUD тренировок с автоматическим расчётом тоннажа и серий (streak)',
            'Библиотека упражнений (14 стандартных + пользовательские) с категориями',
            'Drag & Drop для сортировки упражнений (@dnd-kit)',
            'Страница прогресса: графики (Recharts), тепловая карта, личные рекорды',
            'История тренировок с поиском, сортировкой и редактированием',
            'Тёмная/светлая тема (Zustand persist), экспорт/импорт данных JSON',
            'Адаптивный дизайн, деплой на Vercel'
        ],
        result: 'Полнофункциональный трекер с автосохранением и аналитикой прогресса.'
    },
    {
        id: 'react-todo',
        title: 'Task Manager',
        category: 'react',
        techStack: 'React 19 · TypeScript · Vite · localStorage',
        description: 'Управление задачами с приоритетами, фильтрами по дате и тёмной темой.',
        metrics: 'CRUD · фильтрация · сортировка · адаптив',
        demoUrl: 'https://lesanepc.github.io/react-todo',
        githubUrl: 'https://github.com/LesanePC/react-todo',
        imageUrl: './img/react-todo.webp',
        detailedStack: 'React 19, TypeScript, Vite, localStorage, CSS Modules',
        contribution: [
            'CRUD задач с приоритетами и датами',
            'Фильтрация по статусу и дате (сегодня/завтра/неделя)',
            'Сортировка по дате, приоритету, названию',
            'Светлая/тёмная тема с сохранением',
            'Адаптивный дизайн, деплой на GitHub Pages'
        ],
        result: 'Планировщик с сохранением данных в localStorage.'
    },

    // ==================== КОММЕРЧЕСКИЕ ПРОЕКТЫ (JavaScript) ====================
    {
        id: 'altair',
        title: 'Альтаир Недвижимость',
        category: 'javascript',
        techStack: 'HTML5 · CSS3 · JavaScript (ES6+) · SEO · доступность',
        description: 'Корпоративный сайт агентства недвижимости (6 страниц). Динамическая фильтрация объектов без перезагрузки.',
        metrics: '+35% заявок · +2 мин время сессии · -15% отказов',
        demoUrl: 'https://lesanepc.github.io/altair-projects/',
        githubUrl: 'https://github.com/LesanePC/altair-projects',
        imageUrl: './img/altair.webp',
        detailedStack: 'HTML5, CSS3, JavaScript (ES6+), адаптивная вёрстка, SEO, доступность',
        contribution: [
            'Разработал frontend с нуля: 6 страниц, адаптив, интерактивные элементы',
            'Реализовал фильтрацию объектов по параметрам без перезагрузки страницы',
            'Оптимизировал скорость загрузки и SEO (метатеги, Open Graph)',
            'Обеспечил доступность (aria-label, семантическая вёрстка)'
        ],
        result: 'По данным заказчика: рост заявок на 35%, увеличение времени сессии до 2 минут, снижение отказов на 15%.'
    },
    {
        id: 'remstroy',
        title: 'РемСтрой (строительная компания)',
        category: 'javascript',
        techStack: 'HTML · CSS · JavaScript · адаптивная вёрстка',
        description: 'Многостраничный сайт с плавным скроллом, подсветкой меню и кнопкой «наверх».',
        metrics: 'год поддержки · продление контракта',
        demoUrl: 'https://lesanepc.github.io/Rem-Stroy/index.html',
        githubUrl: 'https://github.com/LesanePC/Rem-Stroy',
        imageUrl: './img/Rem-Stroy.webp',
        detailedStack: 'HTML, CSS, JavaScript (ES6+), адаптив, оптимизация событий',
        contribution: [
            'Разработал сайт с нуля: 3 страницы, адаптивная вёрстка',
            'Реализовал плавный скролл, динамическую подсветку активного пункта меню',
            'Оптимизировал обработку событий прокрутки для плавной работы на всех устройствах',
            'Сопровождал проект в течение года: доработки, исправления'
        ],
        result: 'Контракт продлён на год.'
    }
];