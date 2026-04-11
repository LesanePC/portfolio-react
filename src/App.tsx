import { useState, useEffect } from 'react';
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
import { ImageViewer } from './components/ImageViewer';
import type { Project } from './types';
import './App.css';

function App() {
    const { theme, toggleTheme } = useTheme();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [showCourseModal, setShowCourseModal] = useState(false);
    const [viewerImages, setViewerImages] = useState<string[]>([]);
    const [viewerIndex, setViewerIndex] = useState<number>(-1);

    const openImageViewer = (images: string[], index: number) => {
        setViewerImages(images);
        setViewerIndex(index);
    };

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

            {/* Модалка проектов */}
{selectedProject && (
    <div className="modal show" onClick={() => setSelectedProject(null)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
                &times;
            </button>
            <h2 id="modal-title">{selectedProject.title}</h2>
            <div id="modal-desc">
                <ul>
                    <li><strong>Стек:</strong> {selectedProject.detailedStack || selectedProject.techStack}</li>
                    {selectedProject.contribution && (
                        <li><strong>Моя роль:</strong> {selectedProject.contribution.join('; ')}</li>
                    )}
                    <li><strong>Итог:</strong> {selectedProject.result || selectedProject.description}</li>
                    <li><strong>Метрики:</strong> {selectedProject.metrics}</li>
                </ul>
            </div>
        </div>
    </div>
)}

            {/* Модалка курса Brainscloud */}
{showCourseModal && (
    <div className="course-details show" onClick={() => setShowCourseModal(false)}>
        <div className="course-details-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-details" onClick={() => setShowCourseModal(false)}>
                &times;
            </button>
            <h4>Brainscloud — HTML и CSS для начинающих</h4>
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
            <button className="close-details-btn" onClick={() => setShowCourseModal(false)}>
                Закрыть
            </button>
        </div>
    </div>
)}

            {/* Просмотр изображений */}
            <ImageViewer 
                images={viewerImages} 
                currentIndex={viewerIndex} 
                onClose={() => setViewerIndex(-1)} 
            />
        </div>
    );
}

export default App;