import React, { useState, useEffect } from 'react'
import './ApartmenGrid.scss'
import ApartmentCard from './ApartmentCard.jsx'
import {useApartments} from './../hooks/useApartments.jsx';


function ApartmentGrid() {
const apartments =useApartments ();

  return (
    <div className="grid">
        {apartments.map((apartment) => (
          <ApartmentCard 
          key={apartment.id} 
          title = {apartment.title} 
          imageUrl={apartment.cover} 
          id={apartment.id}/>
        ))}
    </div>
  );

}
export default ApartmentGrid


