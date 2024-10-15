import Image from "next/image";
import styles from "./page.module.css";
import mainImg from "../public/main.jpg";
import StarRates from "./component/starrate/page";
import Link from "next/link";

export default function Home() {

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

  ];

  return (
   <>
  <section className={styles.heroSection}>
  <div className={styles.image}>
    <Image
      src={mainImg}   
      alt="Beautiful destination"
      layout="fill"    
      objectFit="cover"
    />
  </div>

  <div className={styles.overlay}>
    <div className={styles.mainHeading}>
      <h1 className={styles.heading}>
        Travel To Any Corner Of <span>The World!</span>
      </h1>
      <p className={styles.description}>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa maiores odit voluptatem, labore nostrum et, delectus eum neque doloribus minima nesciunt sint!
      </p>
      <button className={styles.expBtn}><Link href='/destinations'>Explore Now</Link></button>
    </div>
  </div>
</section>


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

   <div className={styles.review}>
   
   <section className={styles.testimonials}>
   <div className={styles.testimonialHeading}>
   <p>Testimonials</p>
    <h1 className={styles['secondSection-h1']}>See What Our Clients Say About Us</h1>
    </div>
   <div className={styles['testimonial-card']}>
   <Image
        src="/testimonial2.jpg"
        alt="Beautiful destination"
        width={100}
        height={100}
        objectFit="cover"
        className={styles['testimonial-img']}
      />
   <p className={styles['testimonial-p']}><b>Muhammad</b><br></br> <StarRates ratings={4}/> <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corrupti, natus quia vel saepe quam magni rerum maiores quis, fugit laboriosam vero. 
     
    </p>
   </div>
   <div className={styles['testimonial-card']}>
   <Image
        src="/testimonial1.jpg"
        alt="Beautiful destination"
        width={100}
        height={100}
        objectFit="cover"
        className={styles['testimonial-img']}
      />
   <p className={styles['testimonial-p']}><b>Ali Raza</b><br></br> <StarRates ratings={5}/> <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corrupti, natus quia vel saepe quam magni rerum maiores quis, fugit laboriosam vero. 
     
    </p>
   </div>
   <div className={styles['testimonial-card']}>
   <Image
        src="/testimonial3.jpg"
        alt="Beautiful destination"
        width={100}
        height={100}
        objectFit="cover"
        className={styles['testimonial-img']}
      />
   <p className={styles['testimonial-p']}><b>Loara smit</b><br></br>  <StarRates ratings={3}/> <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corrupti, natus quia vel saepe quam magni rerum maiores quis, fugit laboriosam vero. 
     
    </p>
   </div>
   </section>
   </div>
   </>
  );
}
