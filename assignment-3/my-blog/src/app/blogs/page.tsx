"use client";
import React, { useState } from "react";
import Footer from "../components/Footer/page";
import Navbar from "../components/Navbar/page";
import { Irish_Grover } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const irishGrover = Irish_Grover({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

function Blog() {
  const categories = {
    traditional: [
      {
        id: 1,
        title: "Biryani",
        image: "/food-1.jpg",
        description: "Biryani isnt just a dish, its an experience. With its tantalizing aroma, vibrant colors,",
      },
      {
        id: 2,
        title: "Karahi",
        image: "/traditional-2.jpg",
        description:"Karahi, a beloved dish from South Asia, holds a special place in the hearts.",
      },
      {
        id: 3,
        title: "Nihari",
        image: "/traditional-3.jpg",
        description:"its a tradition deeply rooted in Pakistans culinary culture. Known for its rich, spicy.",
      },
    ],
    FastFood: [
      {
        id: 4,
        title: "Samosas and pakoras",
        image: "/streetFood-1.jpg",
        description:"Samosas and Pakoras are iconic street foods in South Asia, loved for their crispiness and bold flavors.",
      },
      {
        id: 5,
        title: "Spicy Tikka",
        image: "/streetFood-2.jpg",
        description: "Spicy Tikka is a flavor-packed dish inspired by traditional Pakistani barbecue.",
      },
      {
        id: 6,
        title: "Channa Chat",
        image: "/streetFood-3.jpg",
        description: "Channa Chat is a tangy and spicy dish made with boiled chickpeas, chopped onions, tomatoes, and fresh herbs.",
      },
    ],
    desserts: [
      {
        id: 7,
        title: "Kheer",
        image: "/blog-2.jpg",
        description: "Kheer is a creamy, luxurious rice pudding that is a quintessential dessert in South Asia.",
      },
      {
        id: 8,
        title: "Gulab Jamun",
        image: "/sweet-1.jpg",
        description: "Gulab Jamun is a decadent and irresistible dessert, consisting of soft, golden-brown dumplings made from milk solids.",
      },
      {
        id: 9,
        title: "Ras Malai",
        image: "/desserts-1.jpg",
        description: "Ras Malai is a sophisticated and delightful dessert made from soft paneer dumplings soaked in sweetened, thickened milk.",
      },
    ],
  };
  const relatedBlog = [
    {
      id: "10",
      title: "The Importance of Food",
      image: "/imp-food.jpg",
      description: "Food is more than just sustenance it is a vital component of our existence, culture, and well-being.",
    },
    {
      id: "11",
      title: "Health Benefits of Pakistani Cuisine",
      image: "/healthy-food.jpg",
      description: "Pakistani cuisine is rich in flavor, diversity, and culture, offering a wide variety of dishes that have been passed down through generations.",
    },
    {
      id: "12",
      title: "Top 3 Traditional Pakistani Foods You Must Try",
      image: "/street-food.jpg",
      description: "Pakistani cuisine is a flavorful journey of rich spices, aromatic herbs, and vibrant colors, reflecting the country diverse culture and traditions.",
    },
  ];

  const latestBlogs = [
    {
      id: "1",
      title: "Authentic Pakistani Biryani",
      image: "/food-1.jpg",
      description:
        "Biryani isnt just a dish, its an experience. With its tantalizing aroma, vibrant colors,",
    },
    {
      id: "5",
      title: "Spicy Tikka",
      image: "/streetFood-2.jpg",
      description:
        "Spicy Tikka is a flavor-packed dish inspired by traditional Pakistani barbecue.",
    },
    {
      id: "7",
      title: "Kheer",
      image: "/blog-2.jpg",
      description:
        "Kheer is a creamy, luxurious rice pudding that is a quintessential dessert in South Asia.",
    },
  ];
   type BlogCategory = "traditional" | "FastFood" | "desserts";

  const [selectedCategory, setSelectedCategory] =
    useState<BlogCategory>("traditional");
  // Handle category change
  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Navbar />
      <div className="md:mx-16 lg:mx-32 mx-5">
        <div className="flex justify-center  mt-10">
          <div className="bg-gray-200 h-[500px] w-[300px] lg:w-[400px] mx-1 md:mx-4">
            <Image
              src={"/blogmain.jpg"}
              alt="main1"
              className="h-[500px] w-full object-cover"
            />
          </div>
          <div className="bg-gray-200 h-[430px] w-[300px] my-10 mx-1 md:mx-4">
            <Image
              src="/blog-2.jpg"
              alt="main2"
              className="h-[430px] object-cover"
            />
          </div>
          <div className="bg-gray-200 h-[500px] w-[300px] lg:w-[400px] mx-1 md:mx-4">
            <Image
              src={"/blog-1.jpg"}
              alt="main1"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="">
        <h1 className={`${irishGrover.className} text-3xl md:text-5xl md:mx-auto text-center mt-10 md:mt-16 py-2`}>
          Explore Our Categoriese
        </h1>

        <div className="md:mx-16 lg:mx-32 mx-5">
          <div className="flex justify-center gap-4 mt-4 mb-10 md:mb-16">
            <button
              className={`cursor-pointer px-6 py-2 text-sm md:text-base font-semibold rounded-full transition-all 
                ${ selectedCategory === "traditional" ? "bg-black text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}
                `}
              onClick={() => handleCategoryChange("traditional")}
            >
              Traditional Dishes
            </button>
            <button
              className={`cursor-pointer px-6 py-2 text-sm md:text-base font-semibold rounded-full transition-all ${
                selectedCategory === "FastFood" ? "bg-black text-white": "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryChange("FastFood")}
            >
              Snack and Sizzle
            </button>
            <button
              className={`cursor-pointer px-6 py-2 text-sm md:text-base font-semibold rounded-full transition-all ${
                selectedCategory === "desserts" ? "bg-black text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryChange("desserts")}
            >
              Desserts
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 gap-8">
            {categories[selectedCategory].map((item) => (
              <div key={item.id} className="bg-white hover:shadow-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={100}
                  width={300}
                  objectFit="cover"
                  className="w-full h-[260px] rounded-lg object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 mt-3 text-center">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link href={`/blogs/${item.id}`}>
                    <button className="text-blue-500 font-semibold hover:text-blue-600 flex gap-2 mt-2">
                      Read More <FaArrowRight className="mt-1" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h1
          className={`${irishGrover.className} text-3xl md:text-5xl md:mx-auto text-center my-10 md:my-16 py-2`}
        >
          Latest and Greatest Blogs
        </h1>

        <div className="md:mx-16 lg:mx-28 mx-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 gap-8">
            {latestBlogs.map((item) => (
              <div key={item.id} className=" bg-white shadow-lg rounded-lg ">
                <Image
                  src={item.image}
                  alt="food 1"
                  height={100}
                  width={180}
                  objectFit="cover"
                  className="w-full h-[280px] rounded-xl object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 mt-3 text-center">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-4"> {item.description} </p>
                  <Link href={`/blogs/${item.id}`}>
                    <button className="text-blue-500 font-semibold hover:text-blue-600 flex gap-2 mt-2">
                      Read More <FaArrowRight className="mt-1" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[370px] w-full">
          <Image
            src={"/newsletter-home.jpg"}
            alt="main"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="absolute inset-0 px-4">
            <h2 className="text-4xl font-bold text-white mb-4 mt-10 mx-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-200 mb-6 mx-4 text-xl w-[50%]">
              Subscribe for our newsletter to explore exclusive tips, delicious
              recipes, and behind-the-scenes stories from the world of culinary
              delights.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[20%] px-4 py-2 rounded-md text-gray-900 outline-none border-none focus:ring-2 focus:ring-white"
              />
              <button type="submit" className=" bg-blue-600 font-bold py-2 rounded-md transition w-[20%]"
                onClick={() => alert("Thank you for subscribing!")}>
                Subscribe Now
              </button>
            </form>
            <p className="text-white text-md mt-4  mx-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <h1 className={`${irishGrover.className} text-3xl md:text-5xl md:mx-auto text-center my-10 md:my-16 py-2`}>
          Related Post
        </h1>
        <div className="md:mx-16 lg:mx-28 mx-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 gap-8">
            {relatedBlog.map((item) => (
              <div key={item.id} className=" bg-white shadow-lg rounded-lg ">
                <Image
                  src={item.image}
                  alt="food 1"
                  height={100}
                  width={180}
                  objectFit="cover"
                  className="w-full h-[280px] rounded-xl object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 mt-3 text-center">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-4"> {item.description} </p>
                  <Link href={`/blogs/${item.id}`}>
                    <button className="text-blue-500 font-semibold hover:text-blue-600 flex gap-2 mt-2">
                      Read More <FaArrowRight className="mt-1" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;
