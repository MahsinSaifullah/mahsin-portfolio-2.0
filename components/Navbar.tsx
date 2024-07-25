'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'experience',
    path: '/experience',
  },
  {
    name: 'project',
    path: '/project',
  },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {LINKS.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathName && 'text-accent border-b-2 border-accent'
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
