import React, { useState } from "react";
import icon_collapse from "../../assets/icon_collapse.png";

import "./collapse.scss";

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <span className="collapse__label">
                {title}
                <img
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    src={icon_collapse}
                    alt="flèche accès contenu"
                    className={!isOpen ? "icon-rotate" : undefined}
                />
            </span>
            {isOpen ? (
                Array.isArray(content) ? (
                    content.map((content, index) => (
                        <ul key={index} className="collapse__content--ul">
                            <li>{content}</li>
                        </ul>
                    ))
                ) : (
                    <span className="collapse__content">{content}</span>
                )
            ) : null}
        </div>
    );
}
export default Collapse;
