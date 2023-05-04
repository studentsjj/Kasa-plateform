import React, { useState } from "react";
import icon_collapse from "../../assets/icon_collapse.png";

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
                    <img
                        src={icon_collapse}
                        alt="flèche accès contenu"
                        className={!isOpen ? "icon-rotate": undefined}
                    />
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
