import React from 'react';
import { FaStar } from "react-icons/fa";
import styles from '../../page.module.css'; 

type StarRatesProps = {
  ratings: number;
}
<<<<<<< HEAD
=======

>>>>>>> 1b155cb3654070e67539e29fb80d44b3383203b1
function StarRates({ ratings }: StarRatesProps) {
  const totalStars = 5;

  return (
    <>
      {[...Array(totalStars)].map((_, index) => (
        <FaStar 
          key={index} 
          className={index < ratings ? styles['star-filled'] : styles['star-empty']} 
        />
      ))}
    </>
  );
}

<<<<<<< HEAD

export default StarRates;
=======
export default StarRates
>>>>>>> 1b155cb3654070e67539e29fb80d44b3383203b1
