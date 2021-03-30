import React from 'react'
import translate from 'counterpart';
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import HeaderPhoto from '../../images/sunglasses2.jpeg';

export default function Header() {
    return (
        <div className="welcome__container">
            <div className="welcome__header">
                <div className="header__text"> {translate('heading', { scope: 'home.header'})} </div>
            </div>
            <div className="socials__container">
                <ul className="socials__list">
                    <div className="social__container social--facebook"><FaFacebook/></div>
                    <div className="social__container social--instagram"><FaInstagram/></div>
                    <div className="social__container social--youtube"><FaYoutube/></div>
                </ul>
            </div>
            <div className="welcome__body">
                <div className="welcome__intro">
                    <div className="adv__brand">Premium Shop</div>
                    <button className="adv__button">découvrir</button>
                    <button className="adv__button">explorer</button>
                </div>
                <div className="welcome__imgcontainer">
                    <img src={HeaderPhoto} className="welcome__image"/>
                </div>
            </div>
        </div>
    )
}
