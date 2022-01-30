import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-success ">
        <ul className="navbar-nav">
          <li className="nav-item">
            
            <NavLink to="/" className="nav-link text-white" >2NM</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-white" >Accueil</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/localisation" className="nav-link text-white" >Localisation</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/contact" className="nav-link text-white" >Contact</NavLink>
          </li>
        </ul> 
      </nav>
    </div>
  );
};
export default Navbar;
