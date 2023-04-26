import React from "react";
import "./Card.css"


function Card({cover,title}){
    
    return (
        <div  className="card-container">
            
            <div className ="card"  >
                <img src={cover} alt={title} />
                <span> {title} </span>
            </div>
            
        </div>
   

    )
}
export default Card