import React, { useState } from "react";
import "./DescriptionPanel.scss";

function DescriptionPanel(props){
    const [isDescriptionVisible, setDescriptionVisible] = useState(false);

    const toggleDescription = () => {
        setDescriptionVisible(!isDescriptionVisible);
    };

    return (
        <div className="description__panel">
            <p className='description__header' onClick={toggleDescription}>
                <span>{props.title}</span>
                <i className={`fa-solid fa-chevron-${isDescriptionVisible ? 'up' : 'down'}`}></i>    
            </p>
            {isDescriptionVisible && (
                <p className='description__content'>
                    {props.content}
                </p>
            )}
        </div>
    );
}

export default DescriptionPanel;
