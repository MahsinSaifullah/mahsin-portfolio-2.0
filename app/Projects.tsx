'use client';

import SectionHeader from '@/components/SectionHeader';
import askMePDF from './images/askMePDF.png';
import ProjectItem from './ProjectItem';
import Tabs from '@/components/Tabs';

const PROJECT_HASH_MAP = {
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
};

const PROJECTS = [
  {
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
];

const PROJECT_NAMES = Object.keys(PROJECT_HASH_MAP);

const Projects = () => {
  return (
    <section className="h-screen flex justify-center flex-col ">
      <SectionHeader index="03" heading="Some Things I've Built" />
      <Tabs
        tabs={PROJECT_NAMES}
        orientation="horizontal"
        activeIndex={0}
        onTabSelect={(index) => {}}
      >
        <ProjectItem {...PROJECTS[0]} />
      </Tabs>
    </section>
  );
};

export default Projects;
