'use client';

import Tabs from '@/components/Tabs';
import ExperienceItem from './ExperienceItem';
import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { EXPERIENCE_HASH_MAP, COMPANIES } from '@/constants/experiences';

const Experience = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section
      id="experience"
      className="h-screen flex justify-center flex-col mt-10"
    >
      <SectionHeader index="02" heading="Where I've Worked" />
      <div>
        <Tabs
          tabs={COMPANIES}
          orientation="vertical"
          activeIndex={activeTab}
          onTabSelect={(index) => {
            setActiveTab(index);
          }}
        >
          <ExperienceItem {...EXPERIENCE_HASH_MAP[COMPANIES[activeTab]]} />
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
