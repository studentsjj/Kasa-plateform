import img_home from "../../assets/img_home.png"
import "./banner.scss"

function Banner (){
    return (
        <article>
            <img src={img_home} alt="bord de mer" />
            <h1>Chez vous, partout et ailleurs</h1>
        </article>
    )
}
export default Banner