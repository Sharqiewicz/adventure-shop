const welcome__header = document.querySelector('.welcome__header');
const all = [welcome__header]
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
.to(welcome__header, {duration: 1, autoAlpha: 1 })