export interface Project {
    id: string;
    title: string;
    category: 'html-css' | 'javascript' | 'react';
    techStack: string;
    description: string;
    metrics: string;
    demoUrl: string;
    githubUrl: string;
    imageUrl: string;
    detailedStack?: string;
    contribution?: string[];
    result?: string;
}

export interface Skill {
    name?: string;
    icon: string;
    color: string;
    text: string;
}

export type Theme = 'light' | 'dark';