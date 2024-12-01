import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center flex-col mt-10 space-y-6"
    >
      <h3 className="text-lime text-sm md:text-md">04. What's next?</h3>
      <h2 className="text-slate-300 text-3xl md:text-5xl font-bold tracking-tighter">
        Get in Touch
      </h2>
      <p className="text-slate-400 max-w-2xl text-center pb-6 md:pb-10 md:text-lg text-sm">
        My inbox is always open. Whether you have a question or just want to say
        hi, I will try my best to get back to you!
      </p>
      <Button
        className="max-w-fit border border-lime bg-navy text-lime px-8 py-5"
        variant="outline"
        asChild
      >
        <Link href={`mailto:mahsinsaifullah@gmail.com`}>Say Hello</Link>
      </Button>
    </section>
  );
};

export default Contact;
