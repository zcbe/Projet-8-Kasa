import React, {useState, useEffect} from 'react';
import "./ApartmentPage.scss";
import DescriptionPanel from "../components/DescriptionPanel.jsx";
import ImageBanner from "../components/ImageBanner.jsx";
import ApartmentHeader from "../components/ApartmentHeader.jsx";
import {useLocation} from "react-router-dom";

function ApartmentPage(){
  const location = useLocation();
  console.log("location", location);
  //console.log("our apartment id is :", location.state.apartmentId);
  const [flat, setFlat] = useState(null);
  console.log("flat",flat);

  useEffect(fetchApartmentData,[]);

function fetchApartmentData () {
  fetch("db.json")
    .then((res) => res.json())
    .then((flats) => {
      const flat = flats.find ((flat) => flat.id === location.state.apartmentId);
      //console.log("selectedFlat", selectedFlat);
      setFlat(flat);
    })
    .catch(console.error);
}
if (flat == null) return <div>Loading...</div>;
    return (
      <>   
      <div className="apartment-page"> 
        <ImageBanner pictures= {flat.pictures}/>
        <ApartmentHeader flat={flat}/>

        <div className='apartment__description__area'>
        <DescriptionPanel title ="Description" content={flat.description} />
        <DescriptionPanel 
          title ="Equipements" 
          content={flat.equipments.map((eq, i) => (
          <li key={i}>{eq}</li>
          ))} 
        />        
        </div>
      
      </div>
      </>
    );
  }


export default ApartmentPage;


