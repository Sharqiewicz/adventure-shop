import React from 'react'
import Menu from '../Common/Menu';
import Footer from '../Common/Footer';

interface LayoutChildren{
    children: string[] | JSX.Element[] | string | JSX.Element;
}

export default function index({children}: LayoutChildren) {
    return (
        <div className="default__layout">
            <Menu/>
            {children}
            <Footer/>
        </div>
    )
}
