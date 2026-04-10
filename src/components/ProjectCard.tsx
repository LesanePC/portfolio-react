import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    onOpenModal: (project: Project) => void;
}

export const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
    return (
        <article className="gallery-item" data-category={project.category}>
            <img src={project.imageUrl} alt={project.title} loading="lazy" />
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