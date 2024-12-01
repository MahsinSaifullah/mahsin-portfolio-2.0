'use client';

import { Menu } from 'lucide-react';
import React from 'react';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';

const NavDrawer = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Menu
        onClick={() => setOpen(true)}
        className="w-6 h-6 text-lime md:hidden inline-block cursor-pointer"
      />
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <ul className="flex space-y-10 flex-col  bg-lightNavy h-screen px-16 text-slate-400 pt-36 text-md">
          <Link href="#about">
            <li className="cursor-pointer hover:text-lime flex flex-col items-center justify-center">
              <span className="text-lime">01.</span> About
            </li>
          </Link>
          <Link href="#experience">
            <li className="cursor-pointer hover:text-lime flex flex-col items-center justify-center">
              <span className="text-lime">02.</span> Experience
            </li>
          </Link>
          <Link href="#project">
            <li className="cursor-pointer hover:text-lime flex flex-col items-center justify-center">
              <span className="text-lime">03.</span> Projects
            </li>
          </Link>
          <Link href="#contact">
            <li className="cursor-pointer hover:text-lime flex flex-col items-center justify-center">
              <span className="text-lime">04.</span> Contact
            </li>
          </Link>
        </ul>
      </Drawer>
    </>
  );
};

export default NavDrawer;
