'use client'
import React from 'react'
import Image from 'next/image'

const handelButtton = () =>{
  return alert('Ticket Booked Successfully!')
}
function About() {
  return (
    <div className="p-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-5">
      <div className="max-w-lg">
        <h1 className="text-4xl mb-5 text-gray-800 font-bold border-b-4 border-yellow-400 inline-block pb-1">About Us</h1>
        <p className="text-md text-gray-600 mb-5">
          At Our Website, we are passionate about helping you discover the world's most stunning destinations. Whether you are a beach lover, an adventure seeker, or a culture enthusiast, our mission is to guide you toward unforgettable experiences in the most beautiful corners of the globe.<br/><br/>
          Founded by a team of avid travelers, our website is designed to be your go-to resource for expert travel advice, breathtaking destinations, and must-see hidden gems. We provide insider tips, curated itineraries, and travel inspiration to help you make the most of every journey.<br/><br/>
          Let us be your travel companion as you explore new horizons, immerse yourself in different cultures, and create memories that will last a lifetime. Your next adventure awaits—start planning with us today.</p>
      </div>
      <div>
        <Image
          src="/about.jpg"
          alt="Contact Us Image"
          width={500}
          height={500}
          className="rounded-lg mt-6 w-[600px]"
        />
      </div>
    </div>
  
    <div className="text-center mt-24">
      <h1 className="text-4xl font-bold text-gray-800 border-b-4 border-yellow-400 inline-block pb-1">Book Your Ticket Today!</h1>
    </div>
  
    <form className="bg-gray-100 p-8 mt-10 mx-auto w-full rounded-lg shadow-md flex flex-col space-y-5" id="bookTicket">
      <div>
        <label htmlFor="name" className="block text-lg text-gray-700 mb-1">Name:</label>
        <input type="text" placeholder="Enter your Full name" className="w-full p-3 border border-gray-300 rounded" required/>
      </div>
  
      <div>
        <label htmlFor="email" className="block text-lg text-gray-700 mb-1">Email Address:</label>
        <input type="email" id="email"  name="email" placeholder="Enter your email" className="w-full p-3 border border-gray-300 rounded" required/>
      </div>
  
      <div>
        <label htmlFor="phone" className="block text-lg text-gray-700 mb-1">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" className="w-full p-3 border border-gray-300 rounded" required/>
      </div>
  
      <div>
        <label htmlFor="destination" className="block text-lg text-gray-700 mb-1">Destination:</label>
        <select id="destination" name="destination" className="w-full p-3 border border-gray-300 rounded" required>
          <option value="">Select your destination</option>
          <option>Paris</option>
          <option>Dubai</option>
          <option>Italy</option>
          <option>Istanbul</option>
          <option>New York</option>
          <option>Tokyo</option>
          <option>Sydney</option>
          <option>London</option>
        </select>
      </div>
  
      <div>
        <label htmlFor="travel-date" className="block text-lg text-gray-700 mb-1">Travel Date:</label>
        <input type="date" id="travel-date" name="travel-date" className="w-full p-3 border border-gray-300 rounded" required/>
      </div>
  
      <button type="submit" onClick={handelButtton} className="w-full bg-yellow-400 hover:bg-yellow-300 text-black p-3 rounded transition duration-300">Book Ticket</button>
    </form>
  </div>  
  )
}

export default About

