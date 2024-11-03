import Image from "next/image";
import mainImg from "../public/main.jpg";
import { StarRates } from "./components/StarRate/page";
import Link from "next/link";

export default function Home() {
  const destinationsData = [
    {
      image: '/paris.jpg',
      title: 'Paris, France',
      price: '$4.5K',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.',
    },
    {
      image: '/newYork.jpg',
      title: 'New Tork, USA',
      price: '$14.5K',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.',
    },
    {
      image: '/Rome.jpg',
      title: 'Rome, Italy',
      price: '$7.5K',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.',
    },
    {
      image: '/istambul.jpg',
      title: 'Istanbul, Turkey',
      price: '$17.5K',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.',
    },
  ];

  return (
    <>
      <section className="relative h-[60vh] flex justify-center items-center text-center mt-3 md:h-[90vh]">
        <div className="absolute z-[-1] h-full w-full">
          <Image
            src={mainImg}
            alt="Beautiful destination"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div>
            <h1 className="text-[40px] font-bold text-white">Travel To Any Corner Of <span className="text-yellow-400">The World!</span></h1>
            <p  className="text-lg text-gray-300 mt-4 mx-auto max-w-[600px]" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa maiores odit voluptatem, labore nostrum et, delectus eum neque doloribus minima nesciunt sint!</p>

            <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition">
              <Link href="/destinations">Explore Now</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <h1 className="text-[36px] font-bold text-gray-800 border-b-4 border-yellow-400 inline-block mb-4">Our Top Destinations</h1>
        <p className=" text-md  md:text-lg text-gray-600 mb-8 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, perferendis. Maxime alias quia numquam sit vitae, optio omnis neque! Reprehenderit maxime ipsam sunt?
        </p>
        <div className="grid-cols-1 md:grid-cols-4 mx-auto grid md:flex justify-around gap-6 md:mx-10">
          {destinationsData.map((destination, index) => (
            <div key={index} className="text-left">
              <Image
                src={destination.image}
                alt={destination.title}
                height={300}
                width={300}
                className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300 mx-auto md:mx-0"
              />
              <div className="flex justify-between items-center mt-4">
                <h3 className="text-xl font-semibold mx-auto md:mx-0">{destination.title}</h3>
                <p className="text-lg font-medium text-gray-700 mx-auto md:mx-0">{destination.price}</p>
              </div>
              <p className="text-gray-600 mt-2 max-w-[300px] mx-auto md:mx-0">{destination.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="my-12">
        <section className="text-center ">
          <div className="mb-8">
            <p className="text-gray-800 font-bold text-2xl">Testimonials</p>
            <h1 className="text-[30px] font-bold mt-6">See What Our Clients Say About Us</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
          <div className="flex flex-col items-center p-6 border-solid border-[1px] border-gray-800 rounded-lg shadow-lg">
          <div className="w-24 h-24 overflow-hidden rounded-full">
             <Image
              src="/testimonial2.jpg"
              alt="Muhammad"
              width={100} 
              height={100} 
              objectFit="cover"
            />
           </div>
          <h3 className="mt-4 text-xl font-semibold">Muhammad</h3>
          <div className="flex mt-2">
          <StarRates ratings={4} />
          </div>
           <p className="mt-4 text-center text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tenetur voluptatibus aperiam ullam nulla ea inventore cupiditate non quam, eveniet, autem placeat nihil distinctio debitis perferendis officiis quasi. Perferendis, pariatur! 
           </p>
          </div>


          <div className="flex flex-col items-center p-6 border-solid border-[1px] border-gray-800 rounded-lg shadow-lg">
          <div className="w-24 h-24 overflow-hidden rounded-full">
             <Image
              src="/testimonial1.jpg"
              alt="ali"
              width={100} 
              height={100} 
              objectFit="cover"
            />
           </div>
          <h3 className="mt-4 text-xl font-semibold">Ali Raza</h3>
          <div className="flex mt-2">
          <StarRates ratings={5} />
          </div>
           <p className="mt-4 text-center text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, porro deleniti et nobis adipisci debitis tenetur labore autem numquam aspernatur impedit sint placeat rerum quis error nisi explicabo laudantium distinctio? 
           </p>
          </div>
          <div className="flex flex-col items-center p-6 border-solid border-[1px] border-gray-800 rounded-lg shadow-lg">
          <div className="w-24 h-24 overflow-hidden rounded-full">
             <Image
              src="/testimonial3.jpg"
              alt="Muhammad"
              width={100} 
              height={100} 
              objectFit="cover"
            />
           </div>
          <h3 className="mt-4 text-xl font-semibold">Lora smit</h3>
          <div className="flex mt-2">
          <StarRates ratings={5} />
          </div>
           <p className="mt-4 text-center text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet perferendis, eos laboriosam molestiae necessitatibus itaque ducimus error iure cumque aperiam iste quod adipisci recusandae quis aliquid explicabo deserunt iusto! Nostrum.
           </p>
          </div>
          </div>

        </section>
      </div>
    </>
  );
}
