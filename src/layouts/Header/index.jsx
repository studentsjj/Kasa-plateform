import React from "react";
import {NavLink} from "react-router-dom";
import logo_red from "../../assets/logo_red.png"
import "./header.scss"

function Header(){
    return(
      <header className="header">
          <img src={logo_red} alt="logo" />
          <ul className="navbar">
            <li className="navbar-li">
              <NavLink to="/" className={({isActive}) => isActive? "active" : undefined}>Accueil</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/About" className={({isActive}) => isActive? "active" : undefined}>à propos</NavLink>
            </li>
          </ul>
      </header>
    );
  }
export default Header;