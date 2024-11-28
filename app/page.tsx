import About from './About';
import Experience from './Experience';
import Intro from './Intro';
import Projects from './Projects';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Intro />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
