import React from 'react'
import ApartmentImage from '../assets/apartment.jpg';
import './ApartmentBanner.scss'

export function ApartmentBanner() {
  return (
        <div className='apartment__banner'>
          <img src={ApartmentImage} alt="Apartment"/>
        </div>  
        );
}






