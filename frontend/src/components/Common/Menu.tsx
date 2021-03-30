import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import translate from 'counterpart';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div onClick={() => setIsOpen(state => !state)} className={`menu__container ${isOpen ? "is--active" : ""}`}>
            <div className="menustick__container">
                <div className="menustick__stick"></div>
                <ul className="menu__list">
                    <li><Link to="#">{translate("discover", {scope: 'home.header'})}</Link></li>
                    <li><Link to="#">{translate("explore", {scope: 'home.header'})}</Link></li>
                </ul>
            </div>
        </div>
    )
}
