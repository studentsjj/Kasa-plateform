import React from "react";
import Collapse from "../Collapse";
import Rating from "../Rating";
import Tag from "../Tag";
import "./cardAccomodation.scss";

function CardAccomodation ({accomodations }) {
   
      return (
         <div>
               <div className="accomodation-banner">
                  <div className="accomodation-banner-title">
                     <h1>{accomodations.title}</h1>
                     <h2>{accomodations.location}</h2>
                     <div className="accomodation-container-tag">
                           {accomodations.tags.map((tag, index) => (
                              <Tag tag={tag} key={index} />
                           ))}
                     </div>
                  </div>
                  <div className="accomodation-container-rating-host">
                     <Rating value={"5"} rating={accomodations.rating} />
                     <div className="accomodation-host">
                           <p>{accomodations.host.name}</p>
                           <img src={accomodations.host.picture} alt="" />
                     </div>
                  </div>
               </div>
               <div className="accomodation-collapse-container">
               <span className="accomodation-collapse">
                  <Collapse
                     title="Description"
                     content={accomodations.description}
                     id="accomodation-collapse-description"
                  /></span>
                  <span className="accomodation-collapse">
                  <Collapse
                     title="Equipements"
                     content={accomodations.equipments}
                     
                  /></span>
               </div>
         </div>
      );
}
export default CardAccomodation;
