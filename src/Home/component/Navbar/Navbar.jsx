import React from 'react'
import {NavbarWrapper  , LinksWrapper ,NavTitle  ,NavbarContainer , Event} from './style'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarItems from './NavbarItems';


export default function Navbar() {
  return (
    <NavbarWrapper>
    <div className="container" >
        <NavbarContainer>
        <div>
        <NavTitle>New<Event> Event</Event></NavTitle>
        </div>
        <LinksWrapper>
        <NavbarItems />
        </LinksWrapper>
        </NavbarContainer>
    </div>
    </NavbarWrapper>
  )
}
