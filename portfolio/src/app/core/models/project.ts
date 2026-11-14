import { Media } from "./media";

export interface Project {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
    featured?: boolean;
    longDescription?: string;
    role?: string;
    year?: number;
    features?: string[];
    challenges?: string[];
    media?: Media[];
}

