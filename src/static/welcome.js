const welcome__header = document.querySelector('.welcome__header');
const adv__buttons = document.querySelectorAll('.adv__button');
const socials = document.querySelector('.socials__list');
const adv__brand = document.querySelector('.adv__brand')
const all = [ welcome__header, ...adv__buttons, socials, adv__brand]
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
.fromTo( welcome__header,{y:"+=100"}, {duration: 1, autoAlpha: 1, y: "-=50" })
.fromTo( adv__brand, {y:"+=50"}, {duration: .6, autoAlpha: 1, y: "-=50"}, "-=0.6" )
.fromTo( adv__buttons[0], {x: "+=50"}, {duration: 1, autoAlpha: 1, x:"-=50"}, "-=0.3")
.fromTo( adv__buttons[1], {x: "+=50"}, {duration: 1, autoAlpha: 1, x:"-=50"}, "-=0.5")
.fromTo(socials, {x: "-=100"}, { duration: 0.6, autoAlpha: 1, x:"+=100"})