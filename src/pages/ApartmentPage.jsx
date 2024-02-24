import React, {Component} from 'react';
import "./ApartmentPage.scss";
import DescriptionPanel from "../components/DescriptionPanel.jsx";
import ImageBanner from "../components/ImageBanner.jsx";
import ApartmentHeader from "../components/ApartmentHeader.jsx";

export class ApartmentPage extends Component {
  render() {
    return (
      <>   
      <div className="apartment-page"> 
        <ImageBanner/>
        <ApartmentHeader/>

        <div className='apartment__description__area'>
        <DescriptionPanel/>
        <DescriptionPanel/>        
        </div>
      
      </div>
      </>
    );
  }
}

export default ApartmentPage;


