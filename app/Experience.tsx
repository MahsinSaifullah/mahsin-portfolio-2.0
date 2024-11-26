'use client';

import Tabs from '@/components/Tabs';
import ExperienceItem from './ExperienceItem';

const COMPANIES = ['Connex AI', 'Auden', 'The Hut Group', 'Pinro'];
const EXPERIENCE_DETAILS = [
  {
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
];

const Experience = () => {
  return (
    <section className="h-screen flex justify-center flex-col mt-10">
      <div className="flex items-center mb-10">
        <h2 className="text-slate-300 text-lg">
          <span className="text-lime">02.</span> Where I've Worked
        </h2>
        <div
          aria-hidden="true"
          className="w-[200px] h-[1px] bg-lighestNavy ml-4"
        />
      </div>
      <div>
        <Tabs
          tabs={COMPANIES}
          orientation="vertical"
          activeIndex={0}
          onTabSelect={() => {}}
        >
          {EXPERIENCE_DETAILS.map((experience) => (
            <ExperienceItem key={experience.title} {...experience} />
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
