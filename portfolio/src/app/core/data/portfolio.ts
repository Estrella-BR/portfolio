
import { Project } from '../models/project';
import { SkillGroup } from '../models/skill-group';
import { Experience } from '../models/experience';

export const PORTFOLIO = {
  name: 'Estrella',
  surname: 'Blanco Rodríguez',
  role: 'Junior Software Developer',

  email: 'estrellablanro@gmail.com',

  github: 'https://github.com/Estrella-BR',

  linkedin: 'https://www.linkedin.com/in/estrella-le-blanco-rodríguez-97823926a',
 introduction:
    'Multimedia Engineering graduate passionate about backend development, software architecture and building useful applications.',

  about:
    "I'm a recent Multimedia Engineering graduate from the University of Valencia and i'm interested in software development, especially backend technologies. I enjoy learning new technologies, solving problems and building functional applications.",

  location: 'Valencia, Spain',

  cvUrl: 'assets/cv/cv.pdf',

  education: {
    degree: 'BSc in Multimedia Engineering',
    institution: 'University of Valencia',
    period: '2022 - 2026'
  }
};

export const MY_DESCRIPTION = {
  introduction:
    'Multimedia Engineering graduate passionate about backend development, software architecture and building useful applications.',

  about:
    "I'm a recent Multimedia Engineering graduate interested in software development, especially backend technologies. I enjoy learning new technologies, solving problems and building functional applications.",

  location: 'Valencia, Spain',

  cvUrl: 'assets/cv/est­rella-cv.pdf',

  education: {
    degree: 'BSc in Multimedia Engineering',
    institution: 'University of Valencia',
    period: '2022 – 2026'
  }
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'REST APIs']
  },
  {
    title: 'Frontend',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Capgemini',
    position: 'Software Development Intern',
    department: 'Cloud and Custom Applications',
    period: 'April 2026 – September 2026',
    description:
      'Training and practical development experience working with modern frontend and backend technologies, including participation in an internal learning platform project.',
    technologies: [
      'Angular',
      'TypeScript',
      'Java',
      'Spring Boot',
      'Git',
      'Spring Cloud'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Supermarket Comparison Platform',
    description:
      'A personal project that collects and organizes supermarket product information through web scraping.',
    technologies: ['Angular', 'Java', 'Spring Boot'],
    githubUrl: 'https://github.com/Estrella-BR/project-shop',
    featured: true
  },
  {
    id: 2,
    name: 'Emotional Tracking App',
    description:
      'A mobile application for tracking daily emotions and voluntarily sharing records with professionals.',
    technologies: ['React Native', 'Spring Boot', 'PostgreSQL']
  },
  {
    id: 3,
    name: 'GrocerSync',
    description:
      'An Android shopping-list application with offline storage and cloud synchronization.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Room']
  }
];
