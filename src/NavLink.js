import React from "react";
import { Link } from "react-router-dom";
import './NavLink.css'
const NavLink = () => {
    return(
        <div className="NavBar">
            <Link className="Navitem" to='/'>Home</Link>
            <Link className="Navitem" to='/Student'>Student</Link>
            <Link className="Navitem" to='/Contact'>Contact</Link>

        </div>
    )
}
export default NavLink;