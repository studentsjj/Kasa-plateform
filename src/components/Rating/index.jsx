import star_empty from "../../assets/star_empty.png";
import star_full from "../../assets/star_full.png";
import "./rating.scss";

function Rating({ value, rating }) {
    const nbStars = value;
    const emptyStars = Array.from({ length: nbStars }, (star, index) => "");
    const ratingStars = () => {
        return emptyStars.map((star, index) =>
            index < rating ? (
                <img key={index} src={star_full} alt="" />
            ) : (
                <img key={index} src={star_empty} alt="" />
            )
        );
    };

    return <div className="rating">{ratingStars()}</div>;
}
export default Rating;
