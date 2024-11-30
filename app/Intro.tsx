import { Button } from '@/components/ui/button';

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex flex-col space-y-6 min-h-screen justify-center"
    >
      <h3 className="text-lime text-sm">Hi, my name is</h3>
      <h1 className="md:text-5xl text-3xl text-slate-300">Mahsin Saifullah</h1>
      <p className="max-w-4xl text-slate-400 text-sm md:text-lg">
        I’m a Front-end Software Engineer with expertise in building
        user-centric web and mobile applications. Passionate about creating
        seamless digital experiences, I specialize in React, TypeScript, and
        modern UI frameworks. I thrive on solving complex challenges and
        delivering impactful solutions
      </p>
      <Button
        className="max-w-fit border border-lime bg-navy text-lime md:px-8 md:py-5 text-sm md:text-md"
        variant="outline"
        asChild
      >
        <a href="mahsin_resume.pdf" download>
          Download my resume
        </a>
      </Button>
    </section>
  );
};

export default Intro;
