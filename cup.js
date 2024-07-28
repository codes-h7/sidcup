gsap.to(".nav",{
   backgroundColor:"black",
   duration:0.8,
   height:"100px",
   scrollTrigger:{
    trigger:".nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top 11%",
    scrub:1
   }    
})
let crsr = document.querySelector(".cursour")
var blur = document.querySelector(".cursour-blur")
document.addEventListener("mousemove",function(dets){
crsr.style.left = dets.x+10+"px"
crsr.style.top = dets.y+"px"
blur.style.left = dets.x-200+"px"
blur.style.top = dets.y-200+"px"
})

gsap.to(".page2 , .main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end:"top -100%",
        scrub:2,
    }
})
gsap.from(".about-us img , .abouts ",{
    opacity:0,
    stagger:1,
    duration:2,
    delay:1,
    y:50,   
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})
gsap.from(".card-container ",{
opacity:0,
    y:60,
    duration:1,
    stagger:2,
    scrollTrigger:{
        trigger:".card-container",
        scroller:"body",
        start: "top 70%",
        end:"top 65%",
        scrub:3,
    }
   
})
gsap.from("#colom1",{

    y:-100,
    x:-100,
   
    scrollTrigger:{
        trigger:"#colom1",
        scroller:"body",
        start: "top 50%",
        end:"top 95%",
        scrub:3 ,
      
        // markers:true,

    }
})
gsap.from("#colom2",{

    y:100,
    x:100,
   
    scrollTrigger:{
        trigger:"#colom1",
        scroller:"body",
        start: "top 50%",
        end:"top 40%",
        scrub:3 ,
        // markers:true,

    }
})
gsap.from(".page4>h1",{
    y:50,
    scrollTrigger:{
        trigger:" .page4>h1",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:4,
        // markers:true
    }
})
var h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 3
    crsr.style.border= "0.5px solid #fff"
    crsr.style.backgroundColor="transparent"
    crsr.style.transition="0.1s"
        
})
elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
    crsr.style.border= "0px solid "
    crsr.style.backgroundColor="#95c11e"
    crsr.style.transition="0.1s"
   
})
})