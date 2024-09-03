import React from 'react'
import {Link } from "./style"

export default function NavbarLinks({navText , navLink , color} ) {
  return (
        <Link style={{color:color}} href={navLink}>{navText}</Link>
  )
}
