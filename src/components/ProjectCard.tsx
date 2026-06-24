import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    onOpenModal: (project: Project) => void;
    onOpenImageViewer: (images: string[], index: number) => void;
}

export const ProjectCard = ({ project, onOpenModal, onOpenImageViewer }: ProjectCardProps) => {
    const projectImages = [project.imageUrl];

    return (
        <article className="gallery-item" data-category={project.category}>
            <div 
                className="project-image" 
                onClick={() => onOpenImageViewer(projectImages, 0)}
                style={{ cursor: 'pointer' }}
            >
                <img src={project.imageUrl} alt={`Скриншот проекта: ${project.title}`} loading="lazy" />
            </div>
            <h3>{project.title}</h3>
            <p className="tech-stack">{project.techStack}</p>
            <p className="project-role">
                {project.description}
                <span className="project-metrics">{project.metrics}</span>
            </p>
            <div className="project-links">
                <button className="desc-btn" onClick={() => onOpenModal(project)}>
                    Подробнее
                </button>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Демо</a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </article>
    );
};