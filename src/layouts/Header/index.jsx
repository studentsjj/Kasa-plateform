import React from "react";
import {Link} from "react-router-dom";
import logo_red from "../../assets/logo_red.png"
import "./header.scss"

function Header(){
    return(
      <header className="header">
          <img src={logo_red} alt="logo" />
          <ul className="navbar">
            <li className="navbar-li">
              <Link to="/" >Accueil</Link>
            </li>
            <li className="navbar-li">
              <Link to="/About">à propos</Link>
            </li>
          </ul>
      </header>
    );
  }
export default Header;