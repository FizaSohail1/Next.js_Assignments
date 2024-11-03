import React from 'react';
import { FaStar } from "react-icons/fa";

interface StarRatesProps {
  ratings: number;
}

export const StarRates = ({ ratings }: StarRatesProps) => {
  const totalStars = 5;

  return (
    <div className='flex justify-center'>
      {[...Array(totalStars)].map((_, index) => (
        <FaStar key={index} size={15} color={index < ratings ? '#e0a800' : 'rgb(155, 154, 154)'} className='' />
      ))}
    </div>
  );
};
