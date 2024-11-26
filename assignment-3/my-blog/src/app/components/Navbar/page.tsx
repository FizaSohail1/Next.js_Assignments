'use client'
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { Irish_Grover } from 'next/font/google';
import { HiOutlineMenu, HiX } from 'react-icons/hi'; 
import Link from 'next/link';

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload:true,
});

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-0 md:mx-32 px-4">
      <div className="flex  justify-between items-center">

        <div className="hidden lg:flex">
          <ul className="md:flex gap-8">
            <Link href={'/'}><li className="text-lg cursor-pointer">Home</li></Link>
            <Link href={'/blogs'}><li className="text-lg cursor-pointer">Blog</li></Link>
            <Link href={'/about'}><li className="text-lg cursor-pointer">About</li></Link>          
          </ul>
        </div>

        <div className="logo bg-white w-64 md:w-96 h-12 md:h-16 border-black border-solid border-[3px] mt-5 ">
          <h1 className={`${irishGrover.className} text-center text-[24px] md:text-[36px] `}>
            The Foodies Journal
          </h1>
        </div>
          
        <div className="lg:hidden flex overflow-hidden right-0 ml-[40%] mt-5">
          <button onClick={toggleMenu} className="text-3xl text-black ">
            {isMenuOpen ? <HiX /> : <HiOutlineMenu />} 
          </button>
        </div> 

        <div className="">
         <ul className='list-none hidden lg:flex gap-8 p-2'>
         <li className="text-[24px] cursor-pointer transition-transform transform hover:scale-150"><FaFacebook /></li>
          <li className="text-[24px] cursor-pointer transition-transform transform hover:scale-150"><FaPinterest /></li>
          <li className="text-[24px] cursor-pointer transition-transform transform hover:scale-150"><FaInstagram /></li>
          <li className="text-[24px] cursor-pointer transition-transform transform hover:scale-150"><FaTwitter /></li>
         </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col items-start gap-4">
          <Link href={'/'}><li className="text-lg cursor-pointer">Home</li></Link>
            <Link href={'/blogs'}><li className="text-lg cursor-pointer">Blog</li></Link>
            <Link href={'/about'}><li className="text-lg cursor-pointer">About</li></Link>          
            <div className="flex gap-6 my-4">
              <li className="text-[24px] cursor-pointer transition-transform transform hover:scale-125"><FaFacebook /></li>
              <li className="text-[24px] cursor-pointer transition-transform transform hover:scale-125"><FaPinterest /></li>
              <li className="text-[24px] cursor-pointer transition-transform transform hover:scale-125"><FaInstagram /></li>
              <li className="text-[24px] cursor-pointer transition-transform transform hover:scale-125"><FaTwitter /></li>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
