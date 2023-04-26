import star_empty from "../../assets/star_empty.png"
import star_full from "../../assets/star_full.png"



function Rating ({value,rating}) {
    const emptyStars = Array.from({length: value}, (star,index) => <img key={index} src={star_empty} alt=""/> )
    const fullStars = Array.from({length : rating}, (star,index) => <img key={index} src={star_full} alt=""/>)
    
/*{(parseInt(ficheLogement.rating) > count && count < 5?  setCount(count +1) && <img src={star_red} alt=""/>
        : <img src={star_grey} alt=""/>)}
        {console.log(count)}*/
    return (
        <div className="rating">
            {rating > 0 ? 
               emptyStars.splice(0, rating) && fullStars.push(...emptyStars): null}
                {fullStars}   
        </div>    
    )
}
export default Rating