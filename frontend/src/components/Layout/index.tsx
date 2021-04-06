import React, {useEffect, useRef} from 'react'
import Footer from '../Common/Footer';
import Navbar from '../Common/Navbar';
import gsap from 'gsap';

interface LayoutChildren{
    children: JSX.Element[] | JSX.Element;
}

export default function Index({children}: LayoutChildren) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(()=>{

        const elements = ref.current;
            if(elements && elements){
                const welcome__header = elements.querySelector('.welcome__header');
                const adv__buttons = elements.querySelectorAll('.adv__button');
                const socials = elements.querySelector('.socials__list');
                const adv__brand = elements.querySelector('.adv__brand')
                const all = [ welcome__header, adv__buttons, socials, adv__brand]

                gsap.set( all, { autoAlpha: 0});

                const tl = gsap.timeline({defaults: { ease: 'power3.inOut'}});

                tl.to(".first", {
                    duration: .7,
                    top: "-100%"
                })
                .to(".second", {
                    duration: .7,
                    top: "-100%"
                }, "-=0.5")
                .to(".third", {
                    duration: .7,
                    top: "-100%"
                }, "-=0.5")
                .to( welcome__header, {duration: 1, autoAlpha: 1, y: "-=10", position: 'relative', zIndex: 3})
                .fromTo( adv__brand, {y:"+=50"}, {duration: .6, autoAlpha: 1, y: "-=50"}, "-=0.6" )
                .fromTo( adv__buttons[0], {x: "+=50"}, {duration: 1, autoAlpha: 1, x:"-=50"}, "-=0.3")
                .fromTo( adv__buttons[1], {x: "+=50"}, {duration: 1, autoAlpha: 1, x:"-=50"}, "-=0.5")
                .fromTo(socials, {x: "-=100"}, { duration: 0.6, autoAlpha: 1, x:"+=100"})
            }

    }, [])

    return (
        <div className="default__layout" ref={ref}>
            <Navbar/>
            <div className="overlay first"></div>
            <div className="overlay second"></div>
            <div className="overlay third"></div>
            {children}
            <Footer/>
        </div>
    )
}
