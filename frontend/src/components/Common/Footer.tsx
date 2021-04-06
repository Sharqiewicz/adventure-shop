import React from 'react';
import {FaReact, FaPython} from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer__container">
            <div className="footer__content">
                <div className="footer__row">
                    <div className="footer__header">INFORMATIONS</div>
                    <div className="footer__info">
                        <div className="info__item">à propos de nous</div>
                        <div className="info__item">blog</div>
                        <div className="info__item">avis sur les lunettes de soleil</div>
                        <div className="info__item">de gros</div>
                        <div className="info__item">contact</div>
                    </div>
                </div>
                <div className="footer__row">
                    <div className="footer__header">L'AIDE</div>
                    <div className="footer__info">
                        <div className="info__item">factorage</div>
                        <div className="info__item">retours / réclamations</div>
                        <div className="info__item">méthodes de payement</div>
                        <div className="info__item">comment choisir la forme des cadres</div>
                        <div className="info__item">règlements</div>
                    </div>
                </div>

            </div>
            <div className="footer__row">
                <div className="footer__sign">{`COPYRIGHT © ${new Date().getFullYear()} SHARQIEWICZ KACPER SZARKIEWICZ`}</div>
                <div className="footer__technologies"> Created with
                    <span>
                        <FaReact/>
                        <FaPython/>
                    </span>
                </div>
            </div>
        </div>
    )
}
