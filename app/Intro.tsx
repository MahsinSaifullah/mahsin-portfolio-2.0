import { Button } from '@/components/ui/button';

const Intro = () => {
  return (
    <section className="flex flex-col mt-36 space-y-6">
      <h3 className="text-lime text-sm">Hi, my name is</h3>
      <h1 className="text-5xl text-slate-300">Mahsin Saifullah</h1>
      <p className="max-w-4xl text-slate-400">
        I’m a Front-end Software Engineer with expertise in building
        user-centric web and mobile applications. Passionate about creating
        seamless digital experiences, I specialize in React, TypeScript, and
        modern UI frameworks. I thrive on solving complex challenges and
        delivering impactful solutions
      </p>
      <Button
        className="max-w-fit border border-lime bg-navy text-lime px-8 py-5"
        variant="outline"
      >
        Download my resume
      </Button>
    </section>
  );
};

export default Intro;
