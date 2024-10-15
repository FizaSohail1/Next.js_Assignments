import React from 'react';
import Image from 'next/image';
import styles from './destination.module.css';
import { StarRates } from '../component/starrate/StarRate';

function Destinations() {
  const destinationsData = [
    { 
      image: '/paris.jpg', 
      title: 'Paris, France', 
      price: '$4.5K', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' 
    },
    { 
      image: '/dubai.jpg', 
      title: 'Dubai, UAE', 
      price: '$14.5K', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' 
    },
    { 
      image: '/Rome.jpg', 
      title: 'Rome, Italy', 
      price: '$7.5K', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' 
    },
    { 
      image: '/istambul.jpg', 
      title: 'Istanbul, Turkey', 
      price: '$7.5K', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' 
    },
    { 
      image: '/Tokyo.jpg', 
      title: 'Tokyo, Japan', 
      price: '$17.5K', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' 
    },
    { 
      image: '/newYork.jpg', 
      title: 'New York, USA', 
      price: '$14.5K', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' 
    },
    { 
      image: '/sydney.jpg', 
      title: 'Sydney, Australia', 
      price: '$18.2K', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' 
    },
    { 
      image: '/london.jpg', 
      title: 'London, UK', 
      price: '$10.2K', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' 
    },
  ];

  const placesData = [
    { 
      image: '/hotel1.jpg', 
      name: 'Hotel', 
      rating: 5, 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' 
    },
    { 
      image: '/hotel2.jpg', 
      name: 'Hotel', 
      rating: 4, 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' 
    },
    { 
      image: '/hotel3.jpg', 
      name: 'Hotel', 
      rating: 3, 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' 
    },
    {
     image: '/hotel4.jpg', 
      name: 'Hotel', 
      rating: 4, 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' 
    },
    { 
      image: '/hotel5.jpg', 
      name: 'Hotel', 
      rating: 5, 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus, similique.' 
    }
  ];

  return (
    <div>
      <section className={styles.desSection}>
        <div className={styles.Section}>
          <h1 className={styles['secondSection-heading']}>Our Top Destinations</h1>
          <p className={styles['secondSection-p']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, perferendis. Maxime alias quia numquam sit vitae, optio omnis neque! Reprehenderit maxime ipsam sunt?</p>
        </div>
        <div className={styles.destinations}>
          {destinationsData.map((destination, index) => (
            <div key={index}>
              <Image
                src={destination.image}
                alt=''
                height={300}
                width={300}
                className={styles['destinations-img']}
              />
              <div className={styles['card-info']}>
                <h3 className={styles['destinations-h3']}>{destination.title}</h3>
                <p className={styles['card-info-p']}>{destination.price}</p>
              </div>
              <p className={styles['destinations-p']}>{destination.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className={styles.Section}>
          <h1 className={styles['placesHeading']}>We Provide The Best Places To Live</h1>
          <p className={styles['secondSection-p']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, perferendis. Maxime alias quia numquam sit vitae, optio omnis neque! Reprehenderit maxime ipsam sunt?</p>
        </div>
        <div className={styles.places}>
          {placesData.map((place, index) => (
            <div className={styles['places-card']} key={index}>
              <Image
                src={place.image}
                alt={place.name}
                height={230}
                width={400}
                className={styles['places-img']}
              />
              <div className={styles['card-info']}>
                <h3 className={styles['places-h3']}>{place.name}</h3>
                <p className={styles['card-info-p']}><StarRates ratings={place.rating} /></p>
              </div>
              <p className={styles['places-p']}>{place.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Destinations;
