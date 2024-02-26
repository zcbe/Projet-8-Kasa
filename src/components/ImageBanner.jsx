import React from 'react';
import './ImageBanner.scss'

function ImageBanner(props) {
  const imageUrl = props.imageUrl ? props.imageUrl : '/bannerapropos.png';

  return (
        <div className='image__banner'>
          <img src={imageUrl} alt=""/>
        </div>  
        );
}


export default ImageBanner;



