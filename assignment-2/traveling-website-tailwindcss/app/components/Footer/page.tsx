import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
    <div className="flex flex-col justify-center items-center mx-auto my-5">
      <div className="flex justify-center items-center mb-5">
        <ul className="flex gap-8 list-none">
          <li className="text-3xl cursor-pointer text-[#1844a1]"><FaFacebook/></li>
          <li className="text-3xl cursor-pointer text-[#f04c6a]"><FaInstagram/></li>
          <li className="text-3xl cursor-pointer text-[#149aee]"><FaTwitter/></li>
          <li className="text-3xl cursor-pointer text-red-600"><FaYoutube/></li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex gap-5 list-none">
          <li className="text-lg text-gray-800"><Link href='/'>Home</Link></li>
          <li className="text-lg text-gray-800"><Link href='/destinations'>Destinations</Link></li>
          <li className="text-lg text-gray-800"><Link href='/about'>About Us</Link></li>
          <li className="text-lg text-gray-800"><Link href='/contact'>Contact Us</Link></li>
        </ul>
      </div>
    </div>
    <hr className="border-t-2 border-gray-300 my-5" />
    <div className="text-center py-2 text-lg">
      <p>&copy; Traveling Website 2024 | Designed By Fiza Sohail</p>
    </div>
  </footer>
  
  )
}

export default Footer
