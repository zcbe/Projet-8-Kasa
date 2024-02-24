import React, { Component } from 'react';
import "./ApartmentPage.scss"
import {ApartmentDescription} from "../components/ApartmentDescription.jsx";
import {ApartmentBanner} from "../components/ApartmentBanner.jsx"
import {ApartmentHeader} from "../components/ApartmentHeader.jsx"

export class ApartmentPage extends Component {
  render() {
    return (
      <div className="apartment-page"> 
        <ApartmentBanner/>
        <ApartmentHeader/>

        <div className='apartment__description__area'>
        <ApartmentDescription />
        <ApartmentDescription />
        
        </div>
      
      </div>
    );
  }
}

export default ApartmentPage;



