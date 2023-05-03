import React from "react";
import Collapse from "../../components/Collapse";
import Rating from "../../components/Rating";
import Tag from "../../components/Tag";
import "./cardLogement.css";

function CardLogement({ accomodations }) {
   
      return (
         <div>
               <div className="accomodation-banner">
                  <div className="accomodation-banner-title">
                     <h1>{accomodations.title}</h1>
                     <h2>{accomodations.location}</h2>
                     <div className="accomodation-container-tag">
                           {accomodations.tags.map((tag, index) => (
                              <Tag tags={tag} key={index} />
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
                  <Collapse
                     title="Description"
                     content={accomodations.description}
                  />
                  <Collapse
                     title="Equipements"
                     content={accomodations.equipments}
                  />
               </div>
         </div>
      );
}
export default CardLogement;
