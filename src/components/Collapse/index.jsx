import React, { useState } from "react";
import icon_min from "../../assets/icon_min.png";
import icon_plus from "../../assets/icon_plus.png";
import "./collapse.scss";

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse-container">
            <span className="collapse-label">
                {title}
                <button
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    {isOpen ? (
                        <img src={icon_min} alt="flèche réduction contenu" />
                    ) : (
                        <img src={icon_plus} alt="flèche affichage contenu" />
                    )}
                </button>
            </span>
            {isOpen ? (
                Array.isArray(content) ? (
                    content.map((content, index) => (
                        <span key={index}>
                            <ul className="collapse-content-ul">
                                <li>{content}</li>
                            </ul>
                        </span>
                    ))
                ) : (
                    <span className="collapse-content">{content}</span>
                )
            ) : null}
        </div>
    );
}
export default Collapse;
