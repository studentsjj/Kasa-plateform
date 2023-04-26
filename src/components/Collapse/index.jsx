import React, {useState} from "react"
import icon_min from "../../assets/icon_min.png"
import icon_plus from "../../assets/icon_plus.png"
import "../Collapse/collapse.css"

function Collapse({title,text}){
    
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="collapse-container">
                <span className="collapse-label">{title}<button onClick={() => {setIsOpen(!isOpen)}} >{isOpen? <img src={icon_min} alt="flèche réduction contenu"/> :<img src={icon_plus} alt="flèche affichage contenu"/>}</button></span>
                {isOpen && <span className="collapse-text">{text}</span>}
        </div>
    ) 
}  
export default Collapse
