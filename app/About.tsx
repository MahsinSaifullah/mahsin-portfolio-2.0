import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import heroImage from './images/heroImage.jpg';

const About = () => {
  return (
    <section className="h-screen flex justify-center flex-col max-w-6xl">
      <div className="flex items-center mb-10">
        <h2 className="text-slate-300 text-lg">
          <span className="text-lime">01.</span> About Me
        </h2>
        <div
          aria-hidden="true"
          className="w-[200px] h-[1px] bg-lighestNavy ml-4"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="col-span-2">
          <div className="flex flex-col space-y-4">
            <p className="text-md text-slate-400 leading-7">
              I am a passionate and results-driven Senior Frontend Engineer with
              extensive experience building user-focused, scalable web and
              mobile applications. With a strong background in React,
              TypeScript, and modern frontend technologies, I specialize in
              delivering high-quality solutions that enhance user engagement and
              satisfaction.
            </p>
            <p className="text-md text-slate-400 leading-7">
              Throughout my career, I’ve led impactful projects, including
              developing infinite scrolling features for eCommerce platforms,
              building live chat and voice communication systems, and creating a
              robust internal component library that increased productivity and
              improved user experience.
            </p>
            <p className="text-md text-slate-400 leading-7">
              With a focus on continuous learning and team collaboration, I
              strive to create digital experiences that leave a lasting impact.
            </p>
            <div>
              <p className="text-md text-slate-400 leading-7">
                Here are a few technologies I have worked with in the past:
              </p>
              <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> Javascript
                  (ES6+)
                </li>
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> Typescript
                </li>
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> React
                </li>
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> Next Js
                </li>
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> Redux
                </li>
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> React Query
                </li>
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> Jest
                </li>
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> Cypress
                </li>
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> React Native
                </li>
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> Material UI
                </li>
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> Node Js
                </li>
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> Firebase
                </li>
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> MongoDB
                </li>
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> PostgreSQL
                </li>
                <li className="flex items-center text-lime">
                  <ArrowRight className="h-4 w-4 text-lime mr-2" /> Express
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={heroImage}
            alt="Hero Image"
            className="rounded-full border border-lime shadow-lime shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
