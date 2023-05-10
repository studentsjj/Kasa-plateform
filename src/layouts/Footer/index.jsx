import React from "react";
import logo_white from "../../assets/logo_white.png";
import "./footer.scss";

function Footer() {
    return (
      
        <footer className="footer">
            <img src={logo_white} alt="logo" />
            <p>©2020 Kasa. All rights reserved</p>
        </footer>
        
    );
}
export default Footer;
