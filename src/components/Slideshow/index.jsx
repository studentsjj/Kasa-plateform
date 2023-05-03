import { useState } from "react";
import icon_prev from "../../assets/icon_prev.png";
import icon_next from "../../assets/icon_next.png";
import "./slideshow.css";

function Slideshow({ accomodations }) {
    const lenghtPictures = accomodations.pictures.length;
    const [count, setCount] = useState(0);
    const pictures = () => {
        return accomodations.pictures.map(
            (picture, index) =>
                index === count && <img key={index} src={picture} alt="" />
        );
    };
    const btnSlideshow = () => {
        return lenghtPictures > 1 ? (
            <div className="slideshow-btn-count">
                <div className="btn-slideshow">
                    <button
                        id="btn-prev"
                        onClick={() =>
                            count === 0
                                ? setCount(lenghtPictures - 1)
                                : setCount(count - 1)
                        }
                    >
                        <img src={icon_prev} alt="" />
                    </button>
                    <button
                        id="btn-next"
                        onClick={() =>
                            count === lenghtPictures - 1
                                ? setCount(0)
                                : setCount(count + 1)
                        }
                    >
                        <img src={icon_next} alt="" />
                    </button>
                </div>
                <span className="slideshow-count">
                    {count + 1}/{lenghtPictures}
                </span>
            </div>
        ) : null;
    };

    return (
        <div className="slideshow">
            <div className="img-slideshow">{pictures()}</div>
            <div className="btn-slideshow-container">{btnSlideshow()}</div>
        </div>
    );
}
export default Slideshow;
