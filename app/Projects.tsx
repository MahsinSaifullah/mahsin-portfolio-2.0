'use client';

import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import askMePDF from './images/askMePDF.png';
import colorPicker from './images/colorPicker.png';
import hangman from './images/hangman.png';
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

const PROJECTS = Object.keys(PROJECT_HASH_MAP);

const Projects = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section className="h-screen flex justify-center flex-col ">
      <SectionHeader index="03" heading="Some Things I've Built" />
      <Tabs
        tabs={PROJECTS}
        orientation="horizontal"
        activeIndex={activeTab}
        onTabSelect={(index) => {
          setActiveTab(index);
        }}
      >
        <ProjectItem
          {...PROJECT_HASH_MAP[
            PROJECTS[activeTab] as keyof typeof PROJECT_HASH_MAP
          ]}
        />
      </Tabs>
    </section>
  );
};

export default Projects;
