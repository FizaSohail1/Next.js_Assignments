import React from 'react';
import Image from 'next/image';
import { StarRates } from '../components/StarRate/page';

function Destinations() {
  const destinationsData = [
    { image: '/paris.jpg', title: 'Paris, France', price: '$4.5K', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' },
    { image: '/Dubai.jpg', title: 'Dubai, UAE', price: '$14.5K', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' },
    { image: '/Rome.jpg', title: 'Rome, Italy', price: '$7.5K', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' },
    { image: '/istambul.jpg', title: 'Istanbul, Turkey', price: '$7.5K', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' },
    { image: '/Tokyo.jpg', title: 'Tokyo, Japan', price: '$17.5K', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' },
    { image: '/newYork.jpg', title: 'New York, USA', price: '$14.5K', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' },
    { image: '/sydney.jpg', title: 'Sydney, Australia', price: '$18.2K', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' },
    { image: '/London.jpg', title: 'London, UK', price: '$10.2K', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' },
  ];

  const placesData = [
    { image: '/hotel1.jpg', name: 'Hotel 1', rating: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' },
    { image: '/hotel2.jpg', name: 'Hotel 2', rating: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' },
    { image: '/hotel3.jpg', name: 'Hotel 3', rating: 3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' },
    { image: '/hotel2.jpg', name: 'Hotel 4', rating: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' },
    { image: '/hotel1.jpg', name: 'Hotel 5', rating: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' }
  ];

  return (
    <div>
      <section className=' py-12 text-gray-600'>
        <div className='text-center'>
          <h1 className='inline-block font-bold text-black text-[2.5rem] mb-6 border-b-[5px] border-solid border-yellow-400 pb-[5px]'>Our Top Destinations</h1>
          <p className='text-lg text-gray-800 mb-10 max-w-[700px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, perferendis. Maxime alias quia numquam sit vitae, optio omnis neque! Reprehenderit maxime ipsam sunt?</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mx-10'>
          {destinationsData.map((destination, index) => (
            <div key={index} className='flex flex-col items-center'>
              <Image
                src={destination.image}
                alt={`Image of ${destination.title}`}
                height={300}
                width={300}
                className='rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg object-cover'
              />
              <div className='flex justify-between w-full mt-3'>
                <h3 className="text-xl font-semibold mx-auto md:mx-0">{destination.title}</h3>
                <p className="text-lg font-medium text-gray-700 mx-auto md:mx-0">{destination.price}</p>
              </div>
              <p className='text-lg text-[#2b2a2a] mt-2 max-w-[300px] mb-3'>{destination.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='py-12'>
        <div className='text-center'>
          <h1 className='inline-block font-bold text-black text-[2.5rem] mb-6 border-b-[5px] border-solid border-yellow-400 pb-[5px]'>We Provide The Best Places To Live</h1>
          <p className='text-lg text-gray-800 mb-10 max-w-[700px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, perferendis. Maxime alias quia numquam sit vitae, optio omnis neque! Reprehenderit maxime ipsam sunt?</p>
        </div>
    <div className='grid grid-cols-1 md:grid-cols-3 justify-around gap-6 mx-auto md:mx-10'>
  {placesData.map((place, index) => (
    <div className='max-w-[400px] bg-gray-200 rounded-[15px] shadow-md shadow-gray-700 mx-auto md:mx-0' key={index}>
      <Image
        src={place.image}
        alt={`Image of ${place.name}`}
        height={230}
        width={400}
        className='object-cover rounded-t-[15px]' />
      <div className='flex justify-between p-3'>
        <h3>{place.name}</h3>
        <StarRates ratings={place.rating} />
      </div>
      <p className='text-[1.2rem] text-gray-700 my-[10px] mx-[15px]'>{place.description}</p>
    </div>
  ))}
</div>

      </section>
    </div>
  );
}

export default Destinations;
