import Image from "next/image";
import Navbar from "./components/Navbar/page";
import { Irish_Grover } from 'next/font/google';
import { FaArrowRight } from "react-icons/fa";
import Footer from "./components/Footer/page";
import Link from "next/link";


const irishGrover = Irish_Grover({
    weight: '400',
    subsets: ['latin'],
    display:'swap',
});

export default function Home() {

  const latestBlogs = [
   {
    id: "1", 
    title: "Authentic Pakistani Biryani", 
    image: "/food-1.jpg", 
    description: "Biryani isnt just a dish, its an experience. With its tantalizing aroma, vibrant colors,"
   },
   {
    id: "5",
    title: "Spicy Tikka",
    image: "/streetFood-2.jpg",
    description: "Spicy Tikka is a flavor-packed dish inspired by traditional Pakistani barbecue."
   },
   {
    id: "7",
    title: "Kheer",
    image: "/blog-2.jpg",
    description: "Kheer is a creamy, luxurious rice pudding that is a quintessential dessert in South Asia."
   }
  ]
  return (
   <div>
    <Navbar />
     <div className="relative">
    <div className="relative w-full h-[600px] ">
       <Image
        src={'/main2.png'}
        alt="main"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      /> 
    <div className="absolute inset-0 flex flex-col h-[250px] md:h-[300px] lg:h-[350px] my-[30%] md:my-[10%] items-center justify-center bg-black/60 backdrop-blur-md rounded-lg shadow-lg text-center text-white px-6 md:px-10 max-w-3xl mx-auto">
  <p className="text-xl md:text-2xl lg:text-3xl font-semibold italic text-gray-100 leading-relaxed tracking-wide my-5 md:my-8">
   Welcome to <span className="text-yellow-400">The Foodies Journal</span>, where flavors come alive! Explore authentic recipes, discover culinary secrets, and embark on a delicious journey through the world of traditional and modern Pakistani cuisine.
  </p>
</div>

     </div>
  </div>

  <h1 className={`${irishGrover.className} text-3xl md:text-5xl md:mx-auto text-center my-10 md:my-16 py-2`}>Latest and Greatest Blogs</h1> 
  
  <div className="md:mx-16 lg:mx-28 mx-5">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 gap-8">
    {latestBlogs.map((item) => (
        <div key={item.id} className=" bg-white shadow-lg rounded-lg ">
        <Image src={item.image} alt="food 1" height={100} width={180} objectFit="cover" className="w-full h-[280px] rounded-xl object-cover" />
        <div className="p-4">
        <h2 className="text-xl font-bold mb-2 mt-3 text-center">{item.title}</h2>
        <p className="text-gray-600 mb-4"> {item.description} </p>
       <Link href={`/blogs/${item.id}`}>
       <button className="text-blue-500 font-semibold hover:text-blue-600 flex gap-2 mt-2">
          Read More <FaArrowRight className="mt-1"/>
        </button>
       </Link>
        </div>
        </div>

    ))}
   </div>
  </div>
 


 <div className="relative h-[400px] w-full">
  <Image
    src={'/main2.png'}
    alt="main"
    layout="fill"
    objectFit="cover"
    className="w-full h-full"
  /> 
  <div className="absolute inset-0 bg-black opacity-60"></div>

  <div className="absolute inset-0 flex items-center justify-center px-4">
  <h1 className={`${irishGrover.className} text-white text-4xl md:text-5xl lg:text-6xl font-semibold text-center py-2 lg:w-[80%]`}>
      Experience the vibrant, rich, and aromatic flavors of Pakistani cuisine.
    </h1>
  </div>
</div>

  <div className="container category mx-auto py-16 px-4 overflow-hidden">
  <h2 className={`${irishGrover.className} text-3xl text-center md:text-5xl md:mx-auto my-10  font-bold py-2`}>Explore Our Categories</h2> 
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {
      [
        { title: "Traditional Dishes",image:"/food-2.jpg", description:"Discover the authentic flavors of traditional Pakistani cuisine."},
        { title: "Snack and Sizzle", image: "/snack-1.jfif", description: " Explore popular street snacks that are a part of everyday life."},
        { title: "Sweets & Desserts", image: "/sweet-1.jpg", description: " Indulge in the sweetness of traditional Pakistani desserts."}
      ].map((category) => (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <img src={category.image} alt="Traditional Dishes" className="w-full h-[200px] object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
          <p className="text-gray-600 text-sm">
          {category.description}
          </p>
        </div>
      </div>
      ))
    }
  </div>
</div>

  <h1 className={`${irishGrover.className} text-3xl text-center md:mx-16 md:text-5xl lg:mx-auto  my-10 md:my-16 lg:w-[50%] font-bold py-2`}>A Journey Through Taste: Explore the Traditional Food</h1> 
   
   <div className="lg:mx-28 md:mx-16 thirdSec my-10 md:my-16 mx-5">
  <div className="block lg:flex lg:space-x-6">   
    <div className="flex-1 imgcontainer">
      <div className="lg:w-[90%]">
        <Image src={'/thirdSec.jpg'} alt="food 1" height={400} width={700} objectFit="cover" className="h-[300px] md:h-[400px] lg:h-[450px] w-full border-solid border-white border-[2px]" />
      </div>

      <h1 className="text-3xl mt-10 mb-5 font-bold text-center lg:text-left">Discover the Flavors of Pakistan</h1>
      <p className="text-md text-gray-600 lg:w-[80%]">
        From the Heart of Pakistan: A Taste of Tradition and Heritage where flavors come alive! Explore authentic recipes, discover culinary secrets, and embark on a delicious journey through the world of traditional and modern Pakistani cuisine.
        <br/><br/>
        Welcome to a celebration of Pakistan's rich culinary heritage! Here, we dive into the flavors, aromas, and stories behind each dish—from traditional favorites passed down through generations to modern twists that bring new life to classic recipes. Whether you are craving spicy street foods, indulgent sweets, or regional specialties that showcase the diversity of Pakistani culture, you will find inspiration and authentic flavors in every post. Join us as we explore the tastes that make Pakistans cuisine so unique and beloved around the world.
        <br/><br/>
         Join us on a delicious journey through Pakistan's food culture, where each dish is a testament to the warmth, hospitality, and history of the people who created it. Whether you are seeking inspiration for an authentic Pakistani feast or curious about the stories behind each ingredient, this site is here to guide you. Lets dive into the tastes, textures, and traditions that make Pakistani cuisine truly unforgettable.
      </p>
    </div>

    <div className="side py-2 my-10 lg:my-0 space-y-10">
      {
        [
          { id:"10", title: "The Importance of Food", image: "/imp-food.jpg", description: "Food is more than just sustenance it is a vital component of our existence"},
          { id:"11", title: "Health Benefits of Pakistani Cuisine", image: "/healthy-food.jpg", description: "Pakistani cuisine is rich in flavor, diversity, and culture, offering a wide variety of dishes"},
          { id:"12", title: "Top 3 Traditional Pakistani Foods You Must Try", image: "/street-food.jpg", description: "Pakistani cuisine is a flavorful journey of rich spices, aromatic herbs, and vibrant colors."},
        ].map((item) => (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105  lg:w-[350px] ">
        <img src={item.image} alt="Organic and Healthy" className="w-full h-[130px] object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">
            {item.description}
          </p>
        <Link href={`/blogs/${item.id}`}>
        <button className="text-blue-500 font-semibold hover:text-blue-600 flex gap-2 mt-2">
            Read More <FaArrowRight className="mt-1"/>
          </button>
        </Link>
        </div>
      </div>

        ))
      }
    </div>
  </div>
</div>

   <Footer/>
  </div> 
 
  
  );
}
