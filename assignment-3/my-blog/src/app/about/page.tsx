import Image from 'next/image';
import Navbar from '../components/Navbar/page';
import Footer from '../components/Footer/page';
import { Irish_Grover } from 'next/font/google';
import Link from 'next/link';


const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
});

function About() {
  return (
    <>
    <Navbar/>
    <div className=" min-h-screen py-16 px-6 md:px-16 lg:px-32">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  p-4">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <b>The Foodies Journal</b>, we believe food is more than just sustenance its an art, a culture, and a story waiting to be told. Our platform is dedicated to bringing you authentic recipes, culinary tips, and inspiring food stories.
          </p>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our mission is to celebrate the love for food by connecting people to flavors, traditions, and the joy of cooking. Whether you're a seasoned chef or a food enthusiast, we provide content that nourishes both your stomach and your soul.
          </p>
         <Link href='/blogs'>
         <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            Explore Our Blog
          </button></Link>
        </div>
        <div className="relative">
          <Image
            src="/about.png"
            alt="About Us"
            width={600}
            height={400}
            objectFit="cover"
            className="rounded-xl shadow-lg "
          />
        </div>
      </div>
      <hr />
    
      <div className="mt-16">
     <div className="mb-10">
     <h1 className = {`${irishGrover.className} text-4xl md:text-5xl text-center text-gray-800 font-bold py-2 mb-3`}>Meet Our Team</h1>
      <p className="text-gray-600 mb-5 max-w-3xl mx-auto">
          Welcome to <b>The Foodies Journal</b>, your ultimate destination for exploring the rich, diverse, and delightful world of food. 
          From traditional dishes to modern recipes, we aim to ignite your passion for food.
        </p>
     </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {[
            { name: 'Ali Ahmed', role: 'Content Creator', image: '/team1.jpg' },
            { name: 'Sarah Khan', role: 'Recipe Developer', image: '/team2.jpg' },
            { name: 'John Doe', role: 'Food Photographer', image: '/team3.jpg' },
          ].map((teamMember) => (
            <div key={teamMember.name} className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-4">
              <Image
                src={teamMember.image}
                alt={teamMember.name}
                width={200}
                height={100}
                objectFit="cover"
                className="rounded-full mx-auto mb-4 h-[200px] object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">{teamMember.name}</h3>
              <p className="text-gray-600">{teamMember.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;
