import React from 'react'
import NavbarData from './NavbarData'
import NavbarLinks from './NavbarLinks'
import {useLocation} from "react-router-dom"
import theme from '../../../config';


export default function NavbarItems() {
    const items = NavbarData();
    const route = useLocation()
    return items.map(links =>{
            return(
                <NavbarLinks 
                navLink={links.navLink} 
                key={links.id} 
                navText={links.navText}
                color={route.pathname=== links.navLink ? theme.active : theme.white} />

            );
        })
    }

