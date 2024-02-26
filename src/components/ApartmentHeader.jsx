import React from 'react';
import "./ApartmentHeader.scss";

 function ApartmentHeader(props) {
    const flat= props.flat;
    const name =flat.host.name;
    const [firstname, lastname] =name.split(" ");

  return (
    <div className='apartment__header'>
    <div className="apartment__title">
        <h1> {flat.title}</h1>
        <h2> {flat.location}</h2>
        <div className='apartment__tags'>
        {flat.tags.map((tag) => (
            <span key={tag}>{tag}</span>
        ))}
        </div>
    </div>
    <div className="apartment__owner">
        <div className='apartment__owner__details'>
            <h3>
            <span>{firstname}</span> 
            <span>{lastname}</span>
            </h3>
            <div className='apartment__owner__badge'>
            <img src={flat.host.picture} alt="/"></img>
            </div>
        </div>

            <div className="apartment__owner__stars">

            {[1, 2, 3, 4, 5].map((num) => (
                <span key={num} className={props.flat.rating >= num ? "on" : ""}>★</span>
            ))}

            </div>
    </div>
</div>
  )
}

export default ApartmentHeader;
