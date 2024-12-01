'use client';

import Tabs from '@/components/Tabs';
import ExperienceItem from './ExperienceItem';
import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { EXPERIENCE_HASH_MAP, COMPANIES } from '@/constants/experiences';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { BREAKPOINTS } from '@/constants/breakpoints';

const Experience = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const { width } = useWindowDimensions();

  return (
    <section
      id="experience"
      className="min-h-screen flex justify-center flex-col mt-24 md:mt-10"
    >
      <SectionHeader index="02" heading="Where I've Worked" />
      <div>
        <Tabs
          tabs={COMPANIES}
          orientation={width > BREAKPOINTS.md ? 'vertical' : 'horizontal'}
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
