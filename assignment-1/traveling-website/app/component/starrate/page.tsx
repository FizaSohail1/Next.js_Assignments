import React from 'react';
import { FaStar } from "react-icons/fa";
import styles from '../../page.module.css'; 

interface StarRatesProps {
  ratings: number;
}

const StarRates: React.FC<StarRatesProps> = ({ratings}) => {
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


export default StarRates;

