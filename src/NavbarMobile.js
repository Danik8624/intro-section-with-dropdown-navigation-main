import logo_snap from './logo-snap.svg'
import logo_menu from './icon-menu.svg'
import logo_menu_close from './icon-close-menu.svg'
import {SideNavbarMobile} from './SideNavbarMobile'
import React, { useState } from 'react';

export const NavbarMobile = () => {

const [sideBar, setSideBar ] = useState(false);

const viewSideBar = () => {
    setSideBar(!sideBar)
}

    
    return (
        <div className='navbar_mobile'>
            <img src={logo_snap} alt="logo"></img>
            <button onClick={viewSideBar}> {sideBar ? <img src={logo_menu} alt="logo"></img> : <img src={logo_menu_close} alt="logo"></img>}</button>
            {!sideBar && <SideNavbarMobile></SideNavbarMobile>}
        </div>
    ) 
}


