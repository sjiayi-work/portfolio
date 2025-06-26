export interface Technology {
    id: number;
    label: string;
    icon: string;
}

export interface Stack {
    id: number;
    topic: string;
    technologies: Technology[];
    svg?: string;
    svgClass?: string;
}

export interface Project {
    title: string;
    type: string;
    description: string;
    technologies: string[];
    repoUrl: string | null;
    demoUrl: string | null;
    screenshortUrl: string | null;
}

export interface Data {
    stacks: Stack[];
    technologies: Technology[];
    projects: Project[];
}