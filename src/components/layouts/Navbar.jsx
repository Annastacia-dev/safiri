import { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import MobileNavBar from './MobileNavbar';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 50) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeNav);
  }

  return (
    <nav
      className={`fixed flex justify-between items-center z-10 ${
        scrollNav
          ? 'ml-0 mt-0 py-6 px-10 shadow-sm w-full'
          : 'ml-10 mt-10 sm:w-10/12 w-8/12'
      }`}
    >
      <div className="flex items-center gap-1">
        <img src="logos/primary.png" className="w-10" />
        <a href="/" className="sm:text-2xl text-xl font-bold text-primary">
          safiri.
        </a>
      </div>
      <div
        className={`absolute ${scrollNav ? 'right-16' : 'right-1'} md:hidden`}
      >
        {!isOpen && <HiOutlineMenuAlt2 className="text-xl" onClick={toggle} />}
      </div>
      <ul className="hidden md:flex gap-6 p-2 font-medium text-sm capitalize">
        <li>
          <a href="#solutions" className="hover:underline">
            solutions
          </a>
        </li>
        <li>
          <a href="#usecases" className=" hover:underline">
            use cases
          </a>
        </li>
        <li>
          <a href="#company" className="hover:underline">
            company
          </a>
        </li>
        <li>
          <a href="#clients" className="hover:underline">
            clients
          </a>
        </li>
      </ul>
      <ul className="hidden md:flex gap-6 p-2 font-medium text-sm capitalize">
        <li>
          <a href="/login" className="hover:underline">
            login
          </a>
        </li>
        <li>
          <a href="/signup" className="bg-primary text-white px-4 py-2 rounded">
            get started
          </a>
        </li>
      </ul>
      <MobileNavBar isOpen={isOpen} toggle={toggle} />
    </nav>
  );
};

export default NavBar;
