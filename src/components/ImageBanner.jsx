import React from 'react';
import ApartmentImage from '../assets/apartment.jpg';
import './ImageBanner.scss'

function ImageBanner() {
  return (
        <div className='image__banner'>
          <img src={ApartmentImage} alt="Apartment"/>
        </div>  
        );
}


export default ImageBanner;




