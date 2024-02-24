import React from "react";
import "./ApartmentDescription.scss";

export function ApartmentDescription(){
    return (
        <div className="apartment__description">
        <p className='description__header'>
            <span>Description</span>
            <i className="fa-solid fa-chevron-down"></i>    
        </p>
        <p className='description__content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsam molestias rerum optio impedit soluta, delectus ipsa omnis quia fuga dolores commodi voluptates in asperiores voluptatem hic animi quod sunt quasi! Reprehenderit, necessitatibus. Ipsum nihil consequatur quisquam voluptates, molestiae reprehenderit ea nobis eveniet accusamus laudantium unde, delectus id animi repellat.
        </p>
    </div>
    );
}
