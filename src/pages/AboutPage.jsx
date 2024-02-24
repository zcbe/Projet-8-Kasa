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
    <DescriptionPanel/>
    <DescriptionPanel/>
    <DescriptionPanel/>
    <DescriptionPanel/>
    </div>
    </>
  );
}
}

export default AboutPage;
