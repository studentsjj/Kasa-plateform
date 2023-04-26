import React from "react";
import logo_red from "../../assets/logo_red.png"
import {Link} from "react-router-dom";

import "./Header.css"

function Header(){
    return(
      <header className="header">
          <img src={logo_red} alt="logo" />
          <ul className="navbar">
            <li className="navbar-li">
              <Link to="/" style={{"textDecorationLine":"none"}}>Accueil</Link>
            </li>
            <li className="navbar-li">
              <Link to="/About" style={{"textDecorationLine":"none"}}>à propos</Link>
            </li>
          </ul>
      </header>
    );
  }
export default Header;