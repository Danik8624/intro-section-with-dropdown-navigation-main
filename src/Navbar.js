import React, { useState } from 'react';
import logo_snap from './logo-snap.svg'
import {PopUpMenu} from './PopUpMenuFeatures'
import {PopUpMenuCompany} from './PopUpMenuCompany'
import logo_arrow_down from './icon-arrow-down.svg'
import logo_arrow_up from './icon-arrow-up.svg'
export const Navbar = () => {

const [showMenu, setShowMenu] = useState(false);
const [showMenuCompany, setShowMenuCompnay] = useState(false);


const toggleMenuCompnay = () => {
    setShowMenuCompnay(!showMenuCompany);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

return (
    <div className="Navbar">
        <div className="Navbar_elements">
        <img src={logo_snap} alt="logo"></img>
        <ul>
            <li onClick={toggleMenu} >Features {showMenu && <PopUpMenu />}<img src={showMenu ? logo_arrow_up : logo_arrow_down} alt="logo"></img></li>
            <li onClick={toggleMenuCompnay} >Compnay {showMenuCompany && <PopUpMenuCompany />}<img src={showMenuCompany ? logo_arrow_up : logo_arrow_down} alt="logo"></img></li>
            <li>Careers</li>
            <li>About</li>
        </ul>
        </div>
        <div className="Navbar_buttons">
        <button className="login">Login</button>
        <button className="register">Register</button>  
        </div>
    </div>
)
}

