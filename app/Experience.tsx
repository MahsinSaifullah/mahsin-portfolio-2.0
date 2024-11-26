'use client';

import Tabs from '@/components/Tabs';
import ExperienceItem from './ExperienceItem';
import React from 'react';
import SectionHeader from '@/components/SectionHeader';

const EXPERIENCE_HASH_MAP = {
  'Connex AI': {
    title: 'Senior Software Engineer',
    company: 'Connex AI',
    duration: 'May 2023 - Present',
    details: [
      'Leveraged React, Typescript and Material UI to revamp their interaction centre to be more efficient in handling large numbers of interactions from different channels like email, whatsapp and so on by using states more efficiently and using third party libraries like React Query and Redux.',
      'Implemented remote search with infinite scrolling replacing old style numbered pagination. This improvement greatly enhanced user experience by making the navigation feel more intuitive and natural.',
      'Utilised websocket services to make live chat and voice communication channels more secured by introducing a combination of machine to machine keys and auth headers.',
      'Collaborated with UX/UI designers to create their internal component library and design system called Nova for seamless user experiences, enhancing user engagement by 25%.',
      'Took the initiative to increase the code coverage with automated testing leveraging tools like Jest and Cypress, this helped improve code reliability, minimised regression and reduced post-deployment issues.',
      'Mentored junior developers, providing code reviews, technical guidance, and best practices, fostering a collaborative team environment.',
    ],
    skills: [
      'React',
      'Typescript',
      'Material UI',
      'Websocket',
      'React Query',
      'Redux',
      'NodeJs',
      'Express',
    ],
  },
  Auden: {
    title: 'Software Engineer (UI)',
    company: 'Auden',
    duration: 'Nov 2022 - Mar 2023',
    details: [
      'Utilized React, Typescript to develop frontend features for Auden’s loan application journey in a micro frontend architecture.',
      'Worked in a team of about 4-5 engineers and QA engineers and utilized Agile Methodologies to incrementally release new features or maintain legacy.',
      'Led the delivery of Auden’s medium term loan phase 2 feature by collaborating with Product Managers, Backend Engineers, and UX designers.',
      'Took initiative in improving ways of working when it comes to writing efficient and industry-standard documentation.',
      'Improved testing strategy by introducing TDD and BDD best practices.',
      'Wrote extensive automated unit tests using Jest and wrote integration and end-to-end tests using Cypress.',
      'Assisted Head of Engineering with recruitment activities.',
    ],
    skills: ['React', 'Typescript', 'Scss', 'Storybook', 'Jest', 'Cypress'],
  },
  'The Hut Group': {
    title: 'Software Engineer (Mobile Apps)',
    company: 'The Hut Group',
    duration: 'Sept 2021 - Nov 2022',
    details: [
      'Developed their product display page for their native mobile apps leveraging React Native and Typescript, which included a complex image carousel with pinch and zoom feature, accordions that used react native bottom sheets.',
      'Utilised GraphQL and Context API to efficiently fetch and cache data for product page as the app is used by millions of users, since THG owns widely popular eCommerce brands like MyProtein and LookFantastic.',
      'Built out their native ratings and reviews feature leveraging Context API, which needed to handle a very high volume of traffic.',
      'Developed their search feature with debounce and infinite scrolling to help minimise spamming and load on the API.',
      'Used Jest, React Testing Library, and Detox to write unit tests, snapshot tests, integration tests, and E2E tests to make sure all code met quality standards before deployment. This also helped minimise regression.',
      'Performed A/B tests using Firebase Remote Config to determine the effectiveness of a feature variant in the market.',
      'Deployed apps to both iOS App Store and Google Play Store using CI/CD tools like Bitrise.',
    ],
    skills: [
      'React',
      'Typescript',
      'Styled Component',
      'React Native',
      'Jest',
      'GraphQl',
    ],
  },
  Pinro: {
    title: 'Junior Software Engineer',
    company: 'Pinro',
    duration: 'Sept 2020 - Sept 2021',
    details: [
      'Designed and developed mobile applications, using React Native, according to client briefs and modified designs to meet changes in client specifications.',
      'Assisted Senior Frontend Engineers in designing web applications using React and Redux.',
      'Used React, Redux, and Electron to develop desktop applications in line with client requirements.',
      'Collaborated with designers, back end developers, and UX designers to meet project goals and create effective user experiences with digital products.',
      'Designed and developed backend services and Restful APIs using Node.js and Express.',
      'Used skills in debugging to check code, improve code, and enhance the functionality and user experience of existing applications.',
      'Interacted with clients to present designs and demos.',
      'Utilized Jira’s Scrum and Kanban boards for Agile Software development and Confluence for documentation.',
      'Utilized GitHub for collaboration and version control.',
    ],
    skills: [
      'React',
      'Typescript',
      'React Native',
      'Node Js',
      'Electron',
      'Jest',
      'Express',
    ],
  },
};

const COMPANIES = Object.keys(EXPERIENCE_HASH_MAP);

const Experience = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section className="h-screen flex justify-center flex-col mt-10">
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
          <ExperienceItem
            {...EXPERIENCE_HASH_MAP[
              COMPANIES[activeTab] as keyof typeof EXPERIENCE_HASH_MAP
            ]}
          />
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
