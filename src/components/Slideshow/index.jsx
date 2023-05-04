import { useState } from "react";
import icon_prev from "../../assets/icon_prev.png";
import icon_next from "../../assets/icon_next.png";
import "./slideshow.scss";

function Slideshow({ accomodations }) {
    const lenghtPictures = accomodations.pictures.length;
    const [count, setCount] = useState(0);
    const prevSlide = () => {
        count === 0 ? setCount(lenghtPictures - 1) : setCount(count - 1);
    };
    const nextSlide = () => {
        count === lenghtPictures - 1 ? setCount(0) : setCount(count + 1);
    };

    return (
        <div className="slideshow">
                {accomodations.pictures.map((picture, index) => {
                    return (
                        index === count && (
                            <img className="slideshow-img" key={index} src={picture} alt="" />
                        )
                    );
                })}
            
                {lenghtPictures > 1 ?
                (<div className="btn-count-accomodation">
                        
                                <img id="btn-prev" onClick={prevSlide} src={icon_prev} alt="" />
                            
                           
                                <img id="btn-next" onClick={nextSlide} src={icon_next} alt="" />
                           
                        
                        <span className="slideshow-count">
                            {count + 1}/{lenghtPictures}
                        </span>
                    
               </div>) : null }
           
        </div>
    );
}
export default Slideshow;
