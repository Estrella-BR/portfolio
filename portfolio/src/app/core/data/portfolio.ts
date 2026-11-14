
import { Project } from '../models/project';
import { SkillGroup } from '../models/skill-group';
import { Experience } from '../models/experience';

export const PORTFOLIO = {
  name: 'Estrella',
  surname: 'Blanco Rodríguez',
  role: 'Junior Software Developer',

  email: 'estrellablanro@gmail.com',
  whatsapp: '@Estr3l1a',
  github: 'https://github.com/Estrella-BR',

  linkedin: 'https://www.linkedin.com/in/estrella-le-blanco-rodríguez-97823926a',
 introduction:
    'Multimedia Engineering graduate passionate about backend development, software architecture and building useful applications.',

  about:
    "I'm a recent Multimedia Engineering graduate from the University of Valencia and i'm interested in software development, especially backend technologies. I enjoy learning new technologies, solving problems and building functional applications.",

  location: 'Valencia, Spain',

  cvUrl: 'assets/personal/CVE.pdf',

  education: {
    degree: 'BSc in Multimedia Engineering',
    institution: 'University of Valencia',
    period: '2022 - 2026'
  }
};

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
    period: 'April 2026 - September 2026',
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
    description: 'A platform to compare supermarket products and prices.',
    longDescription: `
      A personal project developed to explore web scraping,
      backend development and modern frontend technologies.

      The application collects product information and allows
      users to compare products across different supermarkets.
    `,
    technologies: [
      'Angular',
      'Java',
      'Spring Boot',
      'Web Scraping'
    ],

    role: 'Full-stack development. I designed and implemented the frontend, backend and product data scraping.',

    year: 2026,

    features: [
      'Product search and filtering',
      'Pagination and sorting',
      'Automated product data collection'
    ],

    challenges: [
      'Working with different supermarket websites',
      'Handling inconsistent product information',
      'Building reusable scraping services'
    ],

    media: [
      {
        type: 'image',
        url: 'assets/projects/shop/home.png',
        alt: 'Application homepage',
        caption: 'Main application interface'
      },
      {
        type: 'image',
        url: 'assets/projects/shop/products.png',
        alt: 'Product listing',
        caption: 'Product comparison'
      },
      {
        type: 'yt',
        url: 'assets/projects/shop/demo.mp4',
        poster: 'assets/projects/shop/video-cover.png',
        caption: 'Application demonstration'
      }
    ],

    githubUrl: 'https://github.com/Estrella-BR/project-shop',
    featured: true
  },
  {
    id: 2,
    name: 'Emotional Tracking App',
    description:
      'A mobile application for tracking daily emotions and voluntarily sharing records with professionals.',

    longDescription: `
      A mobile application developed as my Final Degree Project.
      It allows users to record their daily emotions, monitor
      mood changes and identify emotional patterns over time.

      Users can also voluntarily share their emotional records
      with mental health professionals, allowing them to follow
      their progress through a dedicated professional interface.
    `,

    technologies: [
      'React Native',
      'Expo',
      'Spring Boot',
      'Java',
      'PostgreSQL',
      'Supabase'
    ],

    role: 'Full-stack development. I designed and implemented the mobile application, REST API, database integration and data encryption.',

    year: 2026,

    features: [
      'Daily emotional tracking and personal notes',
      'Calendar to organize emotional records',
      'Charts to visualize mood changes over time',
      'Daily task management',
      'Voluntary sharing of records with professionals',
      'Dedicated professional interface',
      'User authentication and dark mode',
      'Encryption of sensitive personal information'
    ],

    challenges: [
      'Designing a database structure for emotional records',
      'Implementing secure storage of sensitive information',
      'Managing relationships between users, professionals and shared records',
      'Creating clear visualizations of emotional trends',
      'Developing a mobile application connected to a REST API'
    ],

    media: [
      {
        type: 'yt',
        url: 'fndJ_DzHOzE',
        caption: 'Application demonstration'
      }
    ],

    githubUrl: '',
    featured: true
  }
];
