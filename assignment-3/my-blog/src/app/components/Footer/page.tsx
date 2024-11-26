import React from 'react'
import { Irish_Grover } from 'next/font/google';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';


const irishGrover = Irish_Grover({
    weight: '400',
    subsets: ['latin'],
    display:'swap',
    preload:true,
});

function Footer() {
  return (
    <div className="bg-black text-white p-2 lg:p-4 ">
      <div className=' block lg:flex lg:justify-around md:mx-16  mx-5'>
       <div>
        <h1 className={`${irishGrover.className}  text-lg md:text-2xl my-3`}>The Foodies Journal</h1>
        <p className=' w-[80%] md:w-[40%] my-2 text-sm text-gray-200'> Welcome to <b>The Foodies Journal</b>, your ultimate destination for exploring the rich, diverse, and delightful world of food. 
        From traditional dishes to modern recipes, we aim to ignite your passion for food.</p>
        <ul className="flex md:gap-8 gap-3 text-yellow-300 my-4 p-2">
            <li className="text-2xl cursor-pointer transition-transform transform hover:scale-150"><FaFacebook /></li>
            <li className="text-2xl cursor-pointer transition-transform transform hover:scale-150"><FaPinterest /></li>
            <li className="text-2xl cursor-pointer transition-transform transform hover:scale-150"><FaInstagram /></li>
            <li className="text-2xl cursor-pointer transition-transform transform hover:scale-150"><FaTwitter /></li>
          </ul>
       </div>
      <div className='flex justify-between lg:w-1/2'>
      <div className="links block ">
        <h2 className='font-bold text-xl my-3'>Categoriese</h2>
        <ul className='text-gray-200 text-md ' >
            <li className='inline'>Traditional Foods</li>
            <li className='my-2'>Sweets & Deserts</li>
            <li>Snacks</li>
        </ul> 
       </div>
       <div className="links block ">
        <h2 className='font-bold text-xl my-3 '>Quick Links</h2>
        <ul className='text-gray-200 text-md ' >
            <li className='inline'>Home</li>
            <li>Blogs</li>
            <li>About Us</li>
        </ul> 
       </div>
      </div>
      </div>
      <hr/>
      <p className='text-center text-white text-md items-center mt-3'>&copy; 2024 | Designed by Fiza Sohail</p>
    </div>
  )
}

export default Footer
