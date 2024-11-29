'use client';

import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import ProjectItem from './ProjectItem';
import Tabs from '@/components/Tabs';
import { PROJECTS, PROJECT_HASH_MAP } from '@/constants/projects';

const Projects = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section id="project" className="h-screen flex justify-center flex-col ">
      <SectionHeader index="03" heading="Some Things I've Built" />
      <Tabs
        tabs={PROJECTS}
        orientation="horizontal"
        activeIndex={activeTab}
        onTabSelect={(index) => {
          setActiveTab(index);
        }}
      >
        <ProjectItem {...PROJECT_HASH_MAP[PROJECTS[activeTab]]} />
      </Tabs>
    </section>
  );
};

export default Projects;
