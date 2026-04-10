# Portfolio React — Frontend Developer Portfolio

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

 Мое портфолио фронтенд-разработчика, созданное с использованием **React 19**, **TypeScript** и **Vite**. Включает фильтрацию проектов, тёмную/светлую тему, анимации и адаптивный дизайн.

**[Посмотреть демо](https://lesanepc.github.io/portfolio-react)**

---

## ✨ Особенности

- ⚛️ **React 19** + **TypeScript** - строгая типизация и современный подход
- 🎨 **Тёмная / светлая тема** - с сохранением выбора в localStorage
- 🔍 **Фильтрация проектов** - по категориям (React, JavaScript, HTML/CSS)
- 📱 **Полностью адаптивный дизайн** - от мобильных до широких экранов
- 🎬 **Анимации** - печатная машинка, плавное появление секций
- 🖼️ **Модальные окна** - детальная информация о проектах и курсах
- 📧 **Форма обратной связи** - через Formspree
- 📊 **Счётчик посещений** - уникальные посетители (1 раз в день)
- 🎨 **Canvas фон** - анимированные частицы

---

## 🛠 Технологии

| Технология | Назначение |
|------------|------------|
| **React 19** | UI библиотека |
| **TypeScript** | Типизация кода |
| **Vite** | Сборка проекта |
| **CSS Modules** | Стилизация |
| **Font Awesome** | Иконки |
| **localStorage** | Хранение темы и счётчика |

---

## 📁 Структура проекта
portfolio-react/
├── public/
│ ├── img/ # Изображения проектов
│ ├── assets/ # PDF резюме
│ └── favicon.svg # Иконка сайта
├── src/
│ ├── components/ # React компоненты
│ │ ├── Header.tsx
│ │ ├── Hero.tsx
│ │ ├── About.tsx
│ │ ├── Experience.tsx
│ │ ├── Education.tsx
│ │ ├── Projects.tsx
│ │ ├── ProjectCard.tsx
│ │ ├── Skills.tsx
│ │ ├── Contacts.tsx
│ │ ├── Footer.tsx
│ │ └── CanvasBackground.tsx
│ ├── data/ # Данные проектов
│ ├── hooks/ # Кастомные хуки
│ ├── types/ # TypeScript типы
│ ├── App.tsx
│ ├── App.css
│ └── main.tsx
├── index.html
├── package.json
└── tsconfig.json

text

---

## 🚀 Установка и запуск

```bash`
# Клонировать репозиторий
git clone https://github.com/LesanePC/portfolio-react.git

# Перейти в папку проекта
cd portfolio-react

# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev

# Открыть в браузере
http://localhost:5173
📦 Сборка и деплой
bash
# Собрать проект
npm run build

# Деплой на GitHub Pages
npm run deploy
После деплоя сайт доступен по адресу:
https://lesanepc.github.io/portfolio-react

🎯 Планы по улучшению
Добавить PWA (офлайн-режим)

Добавить Google Analytics

Добавить больше анимаций

Перевести на Next.js

## 📄 Лицензия
MIT © Eugene Fokin

## 🤝 Контакты
Портфолио: lesanepc.github.io/portfolio-react

GitHub: LesanePC

Telegram: @eugene_1312

Email: evgen94@bk.ru