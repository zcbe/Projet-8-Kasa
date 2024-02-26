import React, {Component} from 'react';
import ImageBanner from "../components/ImageBanner.jsx";
import "../pages/AboutPage.scss";
import DescriptionPanel from '../components/DescriptionPanel.jsx';


export class AboutPage extends Component {
  render() {
  return (
    <>
    <ImageBanner/>
    <div className='about__container'>  
    <DescriptionPanel title ="Fiabilité" content= "Les annonces postées sur Kasa garantissant u.."/>
    <DescriptionPanel title ="Respect" content="texte"/>
    <DescriptionPanel title ="Service" content="texte"/>
    <DescriptionPanel title ="Responsabilité" content="texte"/>
    </div>
    </>
  );
}
}

export default AboutPage;
