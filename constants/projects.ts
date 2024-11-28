import { StaticImageData } from 'next/image';
import askMePDF from './images/askMePDF.png';
import colorPicker from './images/colorPicker.png';
import hangman from './images/hangman.png';

export type Project = {
  name: string;
  image: string | StaticImageData;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink: string;
};

export type ProjectHash = Record<string, Project>;

export const PROJECT_HASH_MAP: ProjectHash = {
  'Ask Me PDF': {
    name: 'Ask Me PDF',
    image: askMePDF,
    description:
      'Ask Me PDF is an AI-powered SaaS web application built with Next.js and Tailwind CSS, designed for seamless interaction with documents. Users can upload PDFs and engage in AI-driven conversations with their content, leveraging OpenAI, LangChain, and Pinecone vectors for efficient information retrieval.',
    techStack: [
      'React',
      'Typescript',
      'Next JS',
      'Tailwind css',
      'Firebase',
      'Langchain',
      'OpenAI',
      'Pinecone',
      'Clerk Auth',
    ],
    githubLink: 'https://github.com/MahsinSaifullah/ask-me-pdf',
    demoLink: 'https://ask-me-pdf.vercel.app/',
  },
  'Color Picker': {
    name: 'Color Picker',
    image: colorPicker,
    description:
      'The Color Picker is a React-based web application built with Material-UI, designed for developers and designers. It enables users to create custom color palettes, offering an intuitive interface for selecting and organizing colors. Users can effortlessly copy individual colors to their clipboard and integrate them directly into their projects, streamlining the design workflow',
    techStack: ['React', 'Javascript', 'Material UI', 'Chroma Js'],
    githubLink: 'https://github.com/MahsinSaifullah/React-Color-Picker-App',
    demoLink: 'https://mahsin-react-color-picker.netlify.app/',
  },
  'Hangman Game': {
    name: 'Hangman Game',
    image: hangman,
    description:
      'Hangman Game is a React-based web application that brings the classic word-guessing game to life. With an interactive and user-friendly interface, players can guess letters to uncover hidden words while enjoying a seamless gaming experience. Perfect for casual play and showcasing React skills.',
    techStack: ['React', 'Javascript'],
    githubLink: 'https://github.com/MahsinSaifullah/hangman',
    demoLink: 'https://mahsin-hangman-game.netlify.app/',
  },
};

export const PROJECTS = Object.keys(PROJECT_HASH_MAP);
