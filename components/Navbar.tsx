const Navbar = () => {
  return (
    <nav className="flex justify-between p-8 mx-auto text-slate-300">
      <a className="tracking-widest font-bold text-lime text-lg">
        Mahsin Saifullah .
      </a>
      <ul className="md:flex space-x-8 hidden text-sm">
        <li className="cursor-pointer hover:text-lime">
          <span className="text-lime">01.</span> About
        </li>
        <li className="cursor-pointer hover:text-lime">
          <span className="text-lime">02.</span> Experience
        </li>
        <li className="cursor-pointer hover:text-lime">
          <span className="text-lime">03.</span> Projects
        </li>
        <li className="cursor-pointer hover:text-lime">
          <span className="text-lime">04.</span> Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
