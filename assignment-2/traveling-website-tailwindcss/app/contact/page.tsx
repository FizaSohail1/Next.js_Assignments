import React from 'react'
import Image from 'next/image'

function Contact() {
  return (
    <div className="p-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <h1 className="text-[2.25rem] font-bold text-black mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-6">If you have any questions, feel free to reach out. We are here to help!</p>
          <div className="mb-8">
            <p className="text-base mb-2"> <strong className="text-gray-800">Email:</strong> support@example.com</p>
            <p className="text-base mb-2"> <strong className="text-gray-800">Phone:</strong> +123 456 7890 </p>
            <p className="text-base mb-2"> <strong className="text-gray-800">Address:</strong> 123 Travel Road, XYZ City </p>
          </div>

          <form className="flex flex-col space-y-4 max-w-md">
            <label htmlFor="email" className="text-lg font-semibold"> Get special offers and more:</label>
            <input type="email" id="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-md"/>
            <button type="submit" className="px-4 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-800 transition-colors duration-300"> Subscribe</button>
          </form>
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/main.jpg"
            alt="Contact Us Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
