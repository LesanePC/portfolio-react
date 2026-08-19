import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';

// Моковые данные проекта
const mockProject: Project = {
    id: '1',
    title: 'LiftForge',
    category: 'react',
    imageUrl: '/img/liftforge.jpg',
    description: 'Трекер силовых тренировок',
    techStack: 'React, TypeScript',
    detailedStack: 'React 19, TypeScript, Zustand',
    contribution: ['Разработка интерфейса'],
    result: 'Приложение для тренировок',
    metrics: '+35% заявок',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
};

describe('ProjectCard', () => {
    it('renders project title correctly', () => {
        render(
            <ProjectCard
                project={mockProject}
                onOpenModal={() => {}}
                onOpenImageViewer={() => {}}
            />
        );
        expect(screen.getByText('LiftForge')).toBeInTheDocument();
    });

    it('renders description when provided', () => {
        render(
            <ProjectCard
                project={mockProject}
                onOpenModal={() => {}}
                onOpenImageViewer={() => {}}
            />
        );
        expect(screen.getByText(/Трекер силовых тренировок/)).toBeInTheDocument();
    });

    it('renders tech stack', () => {
        render(
            <ProjectCard
                project={mockProject}
                onOpenModal={() => {}}
                onOpenImageViewer={() => {}}
            />
        );
        expect(screen.getByText('React, TypeScript')).toBeInTheDocument();
    });
});