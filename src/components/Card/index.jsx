import React from "react";
import "./card.scss";

function Card({ cover, title }) {
    return (
        <div className="card">
            <img src={cover} alt={title} />
            <h2> {title} </h2>
        </div>
    );
}
export default Card;
