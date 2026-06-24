import { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';

type FilterType = 'all' | 'html-css' | 'javascript' | 'react';

interface ProjectsProps {
    onOpenModal: (project: Project) => void;
    onOpenImageViewer: (images: string[], index: number) => void;
}

export const Projects = ({ onOpenModal, onOpenImageViewer }: ProjectsProps) => {
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredProjects = projects.filter((project: Project) => {
        if (filter === 'all') return true;
        return project.category === filter;
    });

    const counts = {
        all: projects.length,
        'html-css': projects.filter((p: Project) => p.category === 'html-css').length,
        javascript: projects.filter((p: Project) => p.category === 'javascript').length,
        react: projects.filter((p: Project) => p.category === 'react').length
    };

    const filterButtons: { key: FilterType; label: string }[] = [
        { key: 'all', label: `Все проекты (${counts.all})` },
        { key: 'html-css', label: `HTML/CSS (${counts['html-css']})` },
        { key: 'javascript', label: `JavaScript (${counts.javascript})` },
        { key: 'react', label: `React (${counts.react})` },
    ];

    return (
        <section className="section" id="projects">
            <h2>Проекты</h2>
            
            <div 
                className="filter-container" 
                role="tablist" 
                aria-label="Фильтр проектов по категориям"
            >
                {filterButtons.map(({ key, label }) => {
                    const isActive = filter === key;
                    return (
                        <button
                            key={key}
                            className={`filter-btn ${isActive ? 'active' : ''}`}
                            onClick={() => setFilter(key)}
                            aria-pressed={isActive}
                            role="tab"
                        >
                            {label}
                        </button>
                    );
                })}
            </div>

            <div 
                className="gallery-grid"
                role="list"
                aria-live="polite"
                aria-label="Список проектов"
            >
                {filteredProjects.map((project: Project) => (
                    <ProjectCard 
                        key={project.id} 
                        project={project} 
                        onOpenModal={onOpenModal}
                        onOpenImageViewer={onOpenImageViewer}
                    />
                ))}
            </div>
        </section>
    );
};