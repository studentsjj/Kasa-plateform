import React from "react"
import {useParams} from 'react-router-dom'
import datas from "../../datas.json"
import Collapse from "../../components/Collapse"
import Rating from "../../components/Rating"


function CardLogement() {
   const {id} = useParams();
   const accomodations = datas.find(accomodation => accomodation.id === id);

   return (  
         <div>
            <p>{accomodations.title}</p>
            <p>{accomodations.location}</p>
            <span>{accomodations.tags.map((tag,index) => <ul key={index}>
                  <li>{tag}</li>
               </ul>)}</span>
            <Rating value={5} rating={accomodations.rating} />
            <p>{accomodations.host.name}</p>
            <img src={accomodations.host.picture} alt=""/>
            <Collapse title="Description" text ={accomodations.description}/> 
            <Collapse title="Equipements" text={accomodations.equipments.map((equipment,index) => <ul key={index}>
                  <li>{equipment}</li>
               </ul>)} /> 
         </div>
    )
}
export default CardLogement