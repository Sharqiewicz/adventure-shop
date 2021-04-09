import React from 'react';

interface FooterInformation{
    header: String;
    items: String[];
}

const footerInfo: FooterInformation[] = [{
    header: "informations",
    items: ["à propos de nous", "blog", "avis sur les lunettes de soleil", "de gros", "contact"]
},
{
    header: "l'aide",
    items: ["factorage", "retours / réclamations", "méthodes de payement", "comment choisir la forme des cadres", "règlements"]
}
]

export default function Footer() {
    return (
        <div className="footer__container">
            <div className="footer__content">
                {
                    footerInfo.map( section => (

                    <div className="footer__row">
                    <div className="footer__header">{section.header.toUpperCase()}</div>
                        <div className="footer__info">
                            {
                                section.items.map( info => <div className="info__item">{info}</div>)
                            }
                        </div>
                    </div>
                    ))
                }
            </div>
            <div className="footer__row">
                <div className="footer__sign">{`COPYRIGHT © ${new Date().getFullYear()} SHARQIEWICZ KACPER SZARKIEWICZ`}</div>
            </div>
        </div>
    )
}
