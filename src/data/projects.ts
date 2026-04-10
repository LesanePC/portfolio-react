import type { Project } from '../types';

export const projects: Project[] = [
    // ==================== REACT ПРОЕКТЫ ====================
    {
        id: 'liftforge',
        title: 'LiftForge — Fitness Tracker',
        category: 'react',
        techStack: 'React 19 · TypeScript · Zustand · Tailwind CSS · Recharts · Vercel',
        description: 'Полноценный трекер силовых тренировок с визуализацией прогресса и личными рекордами.',
        metrics: '14+ упражнений · Drag & Drop · Графики · Тепловая карта · PWA-ready',
        demoUrl: 'https://liftforge.vercel.app',
        githubUrl: 'https://github.com/LesanePC/liftforge',
        imageUrl: './img/Liftforge.webp',
        detailedStack: 'React 19, TypeScript, Zustand, Tailwind CSS, Recharts, @dnd-kit, Vercel',
        contribution: [
            'Разработал полноценное SPA-приложение для отслеживания силовых тренировок',
            'Реализовал CRUD операции для тренировок с автоматическим расчётом тоннажа',
            'Создал библиотеку упражнений (14 стандартных + добавление своих) с категориями',
            'Добавил Drag & Drop для сортировки упражнений в тренировке (@dnd-kit)',
            'Реализовал страницу прогресса с графиками (Recharts), тепловой картой и личными рекордами',
            'Добавил автоматическое отслеживание серии тренировок (streak)',
            'Создал историю тренировок с поиском, сортировкой и редактированием',
            'Реализовал тёмную/светлую тему с сохранением выбора (Zustand persist)',
            'Добавил экспорт/импорт данных в JSON для бэкапа',
            'Настроил адаптивный дизайн и деплой на Vercel (автоматическое обновление)'
        ],
        result: 'Полноценный трекер тренировок с визуализацией прогресса, библиотекой упражнений и автоматическим расчётом личных рекордов.'
    },
    {
        id: 'react-todo',
        title: 'Task Manager — React Todo App',
        category: 'react',
        techStack: 'React 19 · TypeScript · Vite · localStorage · Тёмная тема',
        description: 'Современное приложение для управления задачами с приоритетами, фильтрами и автосохранением.',
        metrics: 'React Hooks · TypeScript · Светлая/тёмная тема',
        demoUrl: 'https://lesanepc.github.io/react-todo',
        githubUrl: 'https://github.com/LesanePC/react-todo',
        imageUrl: './img/react-todo.webp',
        detailedStack: 'React 19, TypeScript, Vite, localStorage, CSS Modules',
        contribution: [
            'Разработал полноценное React-приложение с нуля',
            'Реализовал управление задачами (CRUD) с приоритетами и датами',
            'Добавил фильтрацию по статусу и дате (сегодня/завтра/неделя)',
            'Реализовал сортировку по дате, приоритету и названию',
            'Создал светлую и тёмную тему с сохранением выбора',
            'Настроил адаптивный дизайн с боковой панелью',
            'Настроил деплой на GitHub Pages через Vite'
        ],
        result: 'Полноценное приложение для планирования задач с сохранением в localStorage.'
    },

    // ==================== JAVASCRIPT ПРОЕКТЫ ====================
    {
        id: 'altair',
        title: 'Альтаир Недвижимость',
        category: 'javascript',
        techStack: 'HTML5 · CSS3 · JavaScript (ES6+) · SEO · Доступность',
        description: 'Корпоративный сайт агентства недвижимости (6 страниц).',
        metrics: '+35% заявок · +2 мин время сессии · -15% отказов',
        demoUrl: 'https://lesanepc.github.io/altair-projects/',
        githubUrl: 'https://github.com/LesanePC/altair-projects',
        imageUrl: './img/altair.webp'
    },
    {
        id: 'remstroy',
        title: 'Строительная компания',
        category: 'javascript',
        techStack: 'HTML · CSS · JavaScript · Адаптивная верстка',
        description: 'Коммерческий проект: 3 страницы, год поддержки и продление контракта.',
        metrics: '8 успешных правок · 100% довольный клиент',
        demoUrl: 'https://lesanepc.github.io/Rem-Stroy/index.html',
        githubUrl: 'https://github.com/LesanePC/Rem-Stroy',
        imageUrl: './img/Rem-Stroy.webp'
    },
    {
        id: 'cinema',
        title: 'Киносайт + Админка',
        category: 'javascript',
        techStack: 'HTML · SCSS · JavaScript · Fetch API · LocalStorage',
        description: 'Дипломный проект: полнофункциональный кино-портал с админ-панелью и 200+ фильмами.',
        metrics: 'Загрузка &lt; 1.2 сек · Lighthouse 95/100',
        demoUrl: 'https://lesanepc.github.io/shfe-diplom/index.html',
        githubUrl: 'https://github.com/LesanePC/shfe-diplom',
        imageUrl: './img/Cinema.webp'
    },
    {
        id: 'bakery',
        title: 'Bakery — Сайт пекарни',
        category: 'javascript',
        techStack: 'HTML · CSS · JavaScript · Анимации',
        description: 'Промо-сайт с анимациями и адаптивной версткой.',
        metrics: '8+ анимаций · Mobile-first',
        demoUrl: 'https://lesanepc.github.io/bakery/',
        githubUrl: 'https://github.com/LesanePC/bakery',
        imageUrl: './img/Bakery.webp'
    },
    {
        id: 'todo',
        title: 'ToDo — Планировщик задач',
        category: 'javascript',
        techStack: 'HTML · CSS · JavaScript · LocalStorage',
        description: 'SPA-приложение: добавление, редактирование, фильтры задач.',
        metrics: 'LocalStorage · 100% функционала',
        demoUrl: 'https://lesanepc.github.io/ToDo/',
        githubUrl: 'https://github.com/LesanePC/ToDo',
        imageUrl: './img/ToDo.webp'
    },

    // ==================== HTML/CSS ПРОЕКТЫ ====================
    {
        id: 'blog',
        title: 'Адаптивный блог',
        category: 'html-css',
        techStack: 'HTML · CSS · Flex/Grid · Адаптивная типографика',
        description: 'Pixel-perfect верстка по макету Figma.',
        metrics: '5 разрешений · Lighthouse 98/100',
        demoUrl: 'https://lesanepc.github.io/MQ-Diplom/',
        githubUrl: 'https://github.com/LesanePC/MQ-Diplom',
        imageUrl: './img/layouts.webp'
    }
];