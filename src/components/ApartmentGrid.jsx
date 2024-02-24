import React from 'react'
import './ApartmenGrid.scss'
import ApartmentCard from './ApartmentCard.jsx'

function ApartmentGrid() {
  return (
    <div className='grid'>
        <ApartmentCard/>
        <ApartmentCard/>
        <ApartmentCard/>
        <ApartmentCard/>
        <ApartmentCard/>
        <ApartmentCard/>
    </div>
  )
}

export default ApartmentGrid