import React from "react";
import "./card.scss"


function Card({cover,title}){
    
    return (
        
            <div className ="card">
                <img className="card-img" src={cover} alt={title} />
                
                <h2 className="card-title"> {title} </h2>
            </div>
         )
}
export default Card