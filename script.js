
function loading(){
  var tl = gsap.timeline()

tl.to(".yellow1",{
  top:"-100%",
  delay: 0.5,
  duration:0.6,
  ease:"expo.out",
})
tl.from(".yellow2",{
  top:"100%",
  delay: 0.5,
  duration:0.8,
  ease:"expo.out",
},"anim")
tl.to(".load h1",{
  delay:0.6,
  duration:0.5,
  color:" black",
},"anim")
tl.to(".loader",{
  opacity: 0,
})
tl.to(".loader",{
  display:"none"
})
}
loading()

function image(){
  var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector(".page2")
elems.forEach(function(e){
  e.addEventListener("mouseenter",function(){
  var bgimg =  e.getAttribute("data-img")
  page2.style.backgroundImage = `url(${bgimg})`
  })
})
}
image()

const scroll = new LocomotiveScroll({
  el: document.querySelector('.wrapper'),
  smooth: true
});

document.querySelector(".scroll-down").addEventListener("click", () =>{
  scroll.scrollTo(650);
})
document.querySelector(".scroll-down2").addEventListener("click", () =>{
  scroll.scrollTo(1300);
})
document.querySelector(".top").addEventListener("click", () =>{
  scroll.scrollTo(0);
})
