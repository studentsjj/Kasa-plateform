import React from "react";
import "./card.css"


function Card({cover,title}){
    
    return (
        <div  className="card-container">
            <div className ="card"  >
                <img src={cover} alt={title} />
                <div className="card-img-filter">
                    <span> {title} </span>
                </div>
            </div>
        </div>
    )
}
export default Card