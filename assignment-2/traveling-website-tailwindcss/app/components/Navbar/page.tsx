'use client'

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

function Navbar() {
  const [menuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!menuOpen);
  };

  return (
    <div className="Navbar flex justify-between items-center md:h-14 bg-white">
      <nav className="w-full flex justify-between items-center px-4 md:px-[6%] lg:px-[4%]">
        <div className="text-[30px] font-bold text-black flex items-center">
          <h2>Logo</h2>
        </div>
        
        <button
          onClick={handleToggleMenu}
          className="text-[24px] md:hidden cursor-pointer flex mr-4 text-black"
        >
          <FaBars />
        </button>
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-12 md:top-full left-0 w-full z-10 bg-white md:flex md:static md:w-auto md:bg-transparent`}
        >
          <ul className="list-none flex flex-col md:flex-row mx-4 md:mx-0 md:space-x-8 py-4 md:py-0">
            <li className="px-2 py-2 text-[18px] font-serif text-black md:text-left">
              <Link href="/">Home</Link>
            </li>
            <li className="px-2 py-2 text-[18px] font-serif text-black md:text-left">
              <Link href="/destinations">Destinations</Link>
            </li>
            <li className="px-2 py-2 text-[18px] font-serif text-black md:text-left">
              <Link href="/about">About Us</Link>
            </li>
            <li className="px-2 py-2 text-[18px] font-serif text-black md:text-left">
              <Link href="/contact">Contact Us</Link>
            </li>

            <button className='md:hidden'>
            <Link href="/about#bookTicket" className="flex bg-black text-white rounded-md py-2 px-6 text-[15px] transition duration-300 hover:bg-gray-700">
              Book Ticket
            </Link>
          </button>
          </ul>
        </div>

        <div className="hidden md:flex items-center">
          <button>
            <Link href="/about#bookTicket" className="flex bg-black text-white rounded-md py-2 px-6 text-[15px] transition duration-300 hover:bg-gray-700">
              Book Ticket
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
