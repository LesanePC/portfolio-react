import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';

type FilterType = 'all' | 'html-css' | 'javascript' | 'react';

interface ProjectsProps {
    onOpenModal: (project: Project) => void;
}

export const Projects = ({ onOpenModal }: ProjectsProps) => {
    const sectionRef = useScrollAnimation();
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

    return (
        <section ref={sectionRef} className="section" id="projects">
            <h2>Проекты</h2>
            
            <div className="filter-container">
                <button 
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    Все проекты ({counts.all})
                </button>
                <button 
                    className={`filter-btn ${filter === 'html-css' ? 'active' : ''}`}
                    onClick={() => setFilter('html-css')}
                >
                    HTML/CSS ({counts['html-css']})
                </button>
                <button 
                    className={`filter-btn ${filter === 'javascript' ? 'active' : ''}`}
                    onClick={() => setFilter('javascript')}
                >
                    JavaScript ({counts.javascript})
                </button>
                <button 
                    className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
                    onClick={() => setFilter('react')}
                >
                    React ({counts.react})
                </button>
            </div>

            <div className="gallery-grid">
                {filteredProjects.map((project: Project) => (
                    <ProjectCard 
                        key={project.id} 
                        project={project} 
                        onOpenModal={onOpenModal}
                    />
                ))}
            </div>
        </section>
    );
};