'use client';

import { Menu, X } from 'lucide-react';
import React from 'react';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';

const NavDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <Menu
        onClick={openDrawer}
        className="w-6 h-6 text-lime md:hidden inline-block cursor-pointer"
      />
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <ul className="flex space-y-10 flex-col  bg-lightNavy h-screen px-16 text-slate-400 pt-36 text-md">
          <Link href="#about" onClick={closeDrawer}>
            <li className="cursor-pointer hover:text-lime flex flex-col items-center justify-center">
              <span className="text-lime">01.</span> About
            </li>
          </Link>
          <Link href="#experience" onClick={closeDrawer}>
            <li className="cursor-pointer hover:text-lime flex flex-col items-center justify-center">
              <span className="text-lime">02.</span> Experience
            </li>
          </Link>
          <Link href="#project" onClick={closeDrawer}>
            <li className="cursor-pointer hover:text-lime flex flex-col items-center justify-center">
              <span className="text-lime">03.</span> Projects
            </li>
          </Link>
          <Link href="#contact" onClick={closeDrawer}>
            <li className="cursor-pointer hover:text-lime flex flex-col items-center justify-center">
              <span className="text-lime">04.</span> Contact
            </li>
          </Link>
        </ul>
        <X
          className="h-6 w-6 text-lime absolute right-4 top-4 cursor-pointer"
          onClick={closeDrawer}
        />
      </Drawer>
    </>
  );
};

export default NavDrawer;
