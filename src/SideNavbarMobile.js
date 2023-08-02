import React, { useState } from 'react';
import logo_arrow_down from './icon-arrow-down.svg'
import logo_arrow_up from './icon-arrow-up.svg'
import {PopUpMenu} from './PopupMenuFeaturesMobile'
import {PopUpMenuCompany} from './PopupMenuCompanyMobile'


export const SideNavbarMobile = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [showMenuCompany, setShowMenuCompnay] = useState(false);

    const toggleMenuCompnay = () => {
        setShowMenuCompnay(!showMenuCompany);
      };
    
      const toggleMenu = () => {
        setShowMenu(!showMenu);
      };

    return (
        <div className='dim'>
         <div className='sidenavbar-mobile'>
                <ul>
                    <li id='toplist' onClick={toggleMenu}>Features <img src={showMenu ? logo_arrow_up : logo_arrow_down} alt="logo"></img> {showMenu && <PopUpMenu />}</li>
                    <li onClick={toggleMenuCompnay}>Compnay <img src={showMenuCompany ? logo_arrow_up : logo_arrow_down} alt="logo"></img>{showMenuCompany && <PopUpMenuCompany />}</li>
                    <li>Careers</li>
                    <li>About</li>
                    <li><button className="login-mobile">Login</button></li>
                    <li><button id='register-mobile' className="register-mobile">Register</button></li>
                </ul>
        </div>

       </div>
    )
}