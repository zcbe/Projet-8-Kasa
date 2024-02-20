import React from 'react'
import './ApartmenGrid.css'
import Apartment from './Apartment.jsx'

function ApartmentGrid() {
  return (
    <div className='grid'>
        <Apartment/>
        <Apartment/>
        <Apartment/>
        <Apartment/>
    </div>
  )
}

export default ApartmentGrid