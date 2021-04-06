import React from 'react'
import logo from "../../images/logo.png";
import {FaInbox, FaSearch, FaUser} from "react-icons/fa";
import Menu from "./Menu";

export default function Navbar() {
    return (
        <div className="navbar__container">
            <img src={logo} className="navbar__logo"></img>
            <div className="navbar__text"></div>
            <div className="navbar__center">
                <FaInbox/>
                <FaSearch/>
                <FaUser/>
                <Menu/>
            </div>
        </div>
    )
}
