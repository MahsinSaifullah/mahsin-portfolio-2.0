import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import heroImage from './images/heroImage.jpg';
import SectionHeader from '@/components/SectionHeader';
import { SKILLS } from '@/constants/skills';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center flex-col max-w-6xl"
    >
      <SectionHeader index="01" heading="About me" />
      <div className="grid md:grid-cols-3 gap-12">
        <div className="col-span-2">
          <div className="flex flex-col space-y-4 text-sm md:text-lg">
            <p className="text-md text-slate-400 leading-7">
              I am a passionate and results-driven Senior Frontend Engineer with
              extensive experience building user-focused, scalable web and
              mobile applications. With a strong background in React,
              TypeScript, and modern frontend technologies, I specialize in
              delivering high-quality solutions that enhance user engagement and
              satisfaction.
            </p>
            <p className="text-md text-slate-400 leading-7">
              With a focus on continuous learning and team collaboration, I
              strive to create digital experiences that leave a lasting impact.
            </p>
            <div>
              <p className="text-md text-slate-400 leading-7">
                Here are a few technologies I have worked with in the past:
              </p>
              <ul className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {SKILLS.map((skill, index) => {
                  return (
                    <li key={index} className="flex items-center text-lime">
                      <ArrowRight className="h-4 w-4 text-lime mr-2" /> {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={heroImage}
            priority
            alt="Hero Image"
            className="rounded-sm md:rounded-full border border-lime shadow-lime shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
