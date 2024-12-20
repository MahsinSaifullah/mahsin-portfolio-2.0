import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Intro from './Intro';
import Projects from './Projects';

export default function Home() {
  return (
    <main className="max-w-7xl xl:mx-auto mx-10">
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
