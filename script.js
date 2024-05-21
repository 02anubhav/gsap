var a = gsap.timeline()


a.from("#nav h3",{
    duration: 0.4,
    y: -50,
    opacity: 0,
    ease: "back",
    stagger:0.3
   
})

a.from("#main h1",{
  x:-500,
  opacity:0,
  duration:0.8,
  stagger:0.3,
  // ease: "power2"
  ease:"back"


})

a.from("img",{
  x:100,
  rotate:45,
  opacity:0,
  duration:0.5,
  stagger:0.5
})
