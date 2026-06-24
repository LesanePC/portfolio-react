import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { CanvasBackground } from './components/CanvasBackground';
import { useTheme } from './hooks/useTheme';
import type { Project } from './types';
import './App.css';

const ImageViewer = lazy(() =>
    import('./components/ImageViewer').then((module) => ({
        default: module.ImageViewer,
    }))
);

function App() {
    const { theme, toggleTheme } = useTheme();

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [showCourseModal, setShowCourseModal] = useState(false);
    const [viewerImages, setViewerImages] = useState<string[]>([]);
    const [viewerIndex, setViewerIndex] = useState<number>(-1);

    const previousFocusedElement = useRef<HTMLElement | null>(null);

    const openImageViewer = (images: string[], index: number) => {
        setViewerImages(images);
        setViewerIndex(index);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (selectedProject) setSelectedProject(null);
                if (showCourseModal) setShowCourseModal(false);
                if (viewerIndex !== -1) setViewerIndex(-1);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject, showCourseModal, viewerIndex]);

    useEffect(() => {
        if (selectedProject) {
            previousFocusedElement.current = document.activeElement as HTMLElement;
            const titleEl = document.getElementById('modal-title');
            if (titleEl) titleEl.focus();
        } else if (previousFocusedElement.current) {
            previousFocusedElement.current.focus();
            previousFocusedElement.current = null;
        }
    }, [selectedProject]);

    useEffect(() => {
        if (showCourseModal) {
            previousFocusedElement.current = document.activeElement as HTMLElement;
            const titleEl = document.getElementById('course-modal-title');
            if (titleEl) titleEl.focus();
        } else if (previousFocusedElement.current) {
            previousFocusedElement.current.focus();
            previousFocusedElement.current = null;
        }
    }, [showCourseModal]);

    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }, [theme]);

    return (
        <div className="app">
            <CanvasBackground />
            <Header toggleTheme={toggleTheme} theme={theme} />
            <main>
                <Hero />
                <About />
                <Experience />
                <Education onOpenCourseModal={() => setShowCourseModal(true)} />
                <Projects 
                    onOpenModal={setSelectedProject} 
                    onOpenImageViewer={openImageViewer}
                />
                <Skills />
                <Contacts />
            </main>
            <Footer />

            {/* Модалка проекта */}
            {selectedProject && (
                <div 
                    className="modal show" 
                    onClick={() => setSelectedProject(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                >
                    <div 
                        className="modal-content" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className="modal-close" 
                            onClick={() => setSelectedProject(null)}
                            aria-label="Закрыть модальное окно"
                        >
                            &times;
                        </button>
                        <h2 id="modal-title" tabIndex={-1}>
                            {selectedProject.title}
                        </h2>
                        <div id="modal-desc">
                            <ul>
                                <li>
                                    <strong>Стек:</strong> {selectedProject.detailedStack || selectedProject.techStack}
                                </li>
                                {selectedProject.contribution && (
                                    <li>
                                        <strong>Моя роль:</strong> {selectedProject.contribution.join('; ')}
                                    </li>
                                )}
                                <li>
                                    <strong>Итог:</strong> {selectedProject.result || selectedProject.description}
                                </li>
                                <li>
                                    <strong>Метрики:</strong> {selectedProject.metrics}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Модалка курса */}
            {showCourseModal && (
                <div 
                    className="course-details show" 
                    onClick={() => setShowCourseModal(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="course-modal-title"
                >
                    <div 
                        className="course-details-content" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className="close-details" 
                            onClick={() => setShowCourseModal(false)}
                            aria-label="Закрыть информацию о курсе"
                        >
                            &times;
                        </button>
                        <h4 id="course-modal-title" tabIndex={-1}>
                            Brainscloud — HTML и CSS для начинающих
                        </h4>
                        <div className="course-stats">
                            <span>42 видеоурока</span>
                            <span>10 часов 40 минут</span>
                            <span>12 домашних заданий</span>
                        </div>
                        <div className="course-topics">
                            <span className="topic-tag">HTML5</span>
                            <span className="topic-tag">CSS3</span>
                            <span className="topic-tag">Flexbox</span>
                            <span className="topic-tag">Адаптивная верстка</span>
                            <span className="topic-tag">CSS-анимации</span>
                            <span className="topic-tag">Работа с формами</span>
                            <span className="topic-tag">Pixel-perfect</span>
                            <span className="topic-tag">Figma</span>
                        </div>
                        <button 
                            className="close-details-btn" 
                            onClick={() => setShowCourseModal(false)}
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            )}

            <Suspense fallback={<div>Загрузка просмотрщика...</div>}>
                <ImageViewer 
                    images={viewerImages} 
                    currentIndex={viewerIndex} 
                    onClose={() => setViewerIndex(-1)} 
                />
            </Suspense>
        </div>
    );
}

export default App;