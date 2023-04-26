import {useState} from "react"
import {useParams } from "react-router-dom";
import datas from "../../datas.json"
import "./slideshow.css"
import icon_prev from "../../assets/icon_prev.png"
import icon_next from "../../assets/icon_next.png"
 
function Slideshow () {
    const {id} = useParams();
    const accomodations = datas.find(accomodation => accomodation.id === id);
    const lenghtPictures = accomodations.pictures.length
    const [count, setCount] = useState(0)

    return (
        <div className="slideshow">
            <div className="img-slideshow">
            {accomodations.pictures.map((picture, index) =>
            index ===count && <img key={index} src={picture} alt="" /> 
            )}
            </div>
            {lenghtPictures > 1? 
            (< div className="btn-slideshow">
                <button id ="btn-prev" onClick={() => count===0? setCount(lenghtPictures -1) : setCount(count -1)}><img src={icon_prev} alt=""/></button>
                <button id="btn-next" onClick={() => count=== lenghtPictures -1 ? setCount(0) : setCount(count +1)}><img src={icon_next} alt="" /></button>
                <span>{count+1}/{lenghtPictures}</span>
            </div>) : null}
        </div>
    )
}
export default Slideshow