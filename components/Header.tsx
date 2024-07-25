import Link from 'next/link';
import { Button } from './ui/button';

import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-aut0 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Mahsin <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>Let us talk</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
