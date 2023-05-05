import React from "react";
import Collapse from "../Collapse";
import Rating from "../Rating";
import Tag from "../Tag";
import "./cardAccomodation.scss";

function CardAccomodation({ accomodations }) {
   return (
      <>
         <div className="accomodation__banner">
            <div className="accomodation__banner--content">
               <h1>{accomodations.title}</h1>
               <h2>{accomodations.location}</h2>
               <div className="accomodation__tags">
                  {accomodations.tags.map((tag, index) => (
                     <Tag tag={tag} key={index} />
                  ))}
               </div>     
            </div>
            <div className="accomodation__rating-host">
               <Rating value={"5"} rating={accomodations.rating} />
                  <div className="accomodation__host--content">
                     <p>{accomodations.host.name}</p>
                     <img src={accomodations.host.picture} alt="" />
                  </div>
            </div>
         </div>
         <div className="accomodation__collapse">
            <span className="accomodation__collapse--content">
               <Collapse
                  title="Description"
                  content={accomodations.description}
                  />
            </span>
            <span className="accomodation__collapse--content">
               <Collapse
                  title="Equipements"
                  content={accomodations.equipments}
               />
            </span>
         </div>
      </>
   );
}
export default CardAccomodation;
