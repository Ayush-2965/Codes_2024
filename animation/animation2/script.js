let card = document.getElementsByClassName("card")
let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let tl = gsap.timeline({});


gsap.to(".nav", {
   
    backgroundColor: "#191e1e",     
   
   
    scrollTrigger: {

        trigger: ".page1",
        
        start: "top 0%",
        end: "top 0%",
        scrub:true
        
    }
})
gsap.to(".nav svg", {
   
    fill: "white",     
  
   
    scrollTrigger: {

        trigger: ".page1",
        
        start: "top 0%",
        end: "top 0%",
        scrub:true
        
    }
})
gsap.to(".nav .righticon", {
   
    color: "white",     
  
   
    scrollTrigger: {

        trigger: ".page1",
        
        start: "top 0%",
        end: "top 0%",
        scrub:true
        
    }
})
gsap.to(".nav .profileicon", {
   
    outline: "2px solid white",    
  
   
    scrollTrigger: {

        trigger: ".page1",
        
        start: "top 0%",
        end: "top 0%",
        scrub:true
        
    }
})
gsap.to(".capsule", {
    backgroundColor: "#ffffffeb",
    outline:"0.5px solid black",
    scrollTrigger: {

        trigger: ".page1",
        
        start: "top 0%",
        end: "top 0%",
        scrub: true,
        // pin:true
    }
})
gsap.from(".page3", {
    opacity:0,
    scrollTrigger: {

        trigger: ".page3",

        start: "top 60%",
        end: "top 25%",
        scrub: 2,
        
    }
})

tl.from(".part2 .features", {
    opacity: 0,
    scrollTrigger: {

        trigger: "#part2",

        start: "top 50%",
        end: "top 15%",
        scrub: 2,
        // pin:true
    }
})
tl.from(".part2 .comp", {
    opacity: 0,
    scrollTrigger: {

        trigger: "#part2",

        start: "top 50%",
        end: "top 15%",
        scrub: 2,
        // pin:true
    }
})

tl.from(".card1", {
    opacity: 0,
    // duration:5,
    scrollTrigger: {

        trigger: ".page2",

        start: "top 50%",
        end: "top 0%",
        scrub: 2,
        // pin:true
    }
})

tl.from(".card2", {
    opacity: 0,
    // duration:5,
    scrollTrigger: {

        trigger: ".page2",
        start: "top 35%",
        end: "top 1%",

        scrub: 2,
        // pin:true
    }
})
tl.from(".card3", {
    opacity: 0,
    // duration:5,
    scrollTrigger: {

        trigger: ".page2",
        start: "top 35%",
        end: "top 0%",

        scrub: 2
    }
})
tl.from(".card4", {
    opacity: 0,
    // duration:5,
    scrollTrigger: {

        trigger: ".page2",
        start: "top 21%",
        end: "top 0%",

        scrub: 2
    }
})


tl.to(".toptext", { y: 70,scale: 1.5,opacity: 1,
    
    scrollTrigger: {

        trigger: ".page2",
        start: "top 80%",
        end: "top 0%",
        scrub: 2

    }
})



//card image floating animation on hover

var currentAnimation;

document.querySelectorAll('.overlay').forEach(function (card) {
    card.addEventListener('mouseenter', function (e) {
        if (currentAnimation) {
            currentAnimation.kill(); // Stop any existing animation
        }
        cardindex = parseInt(e.target.id);
        //  console.log(cardindex)
        cardhover = `.card${cardindex}`
        currentAnimation = gsap.to(`${cardhover} .img`, { duration: 2, y: -20, ease: Power1.easeInOut, repeat: -1, yoyo: true }); // Move up along the y-axis
    });

    card.addEventListener('mouseleave', function (e) {
        if (currentAnimation) {
            currentAnimation.kill(); // Stop the animation on mouse leave
        }
        cardindex = parseInt(e.target.id);
        //  console.log(cardindex)
        cardhover = `.card${cardindex}`
        gsap.to(`${cardhover} .img`, { duration: 0.5, y: 0 }); // Reset position along the y-axis
    });
});

//feature section 

let boxColor = function () {
    document.querySelectorAll(".box").forEach((element) => {
        element.style.cssText = "background-color:white;color:black";
    })


}
let hide = function () {
    document.querySelectorAll('.comp').forEach(function (e) {
        e.setAttribute("style", "opacity:0")
    })
}
box1.addEventListener('click', function () {
    boxColor()
    box1.style.cssText = "background-color:black;color:white";

    hide()
    for (let i = 1; i < 5; i++) {
        document.querySelector(`.comp${i}`).setAttribute("style", "opacity:1")

    }
})
box2.addEventListener('click', function () {
    boxColor()
    box2.style.cssText = "background-color:black;color:white";

    hide()
    for (let i = 5; i < 8; i++) {
        document.querySelector(`.comp${i}`).setAttribute("style", "opacity:1")

    }
})
box3.addEventListener('click', function () {

    boxColor()
    box3.style.cssText = "background-color:black;color:white";

    hide()
    for (let i = 8; i < 11; i++) {
        document.querySelector(`.comp${i}`).setAttribute("style", "opacity:1")
    }
})

//review card and autoplay

const wrapper = document.querySelector(".wrapper");
const carousel =document.querySelector(".carousel");
const firstcardwidth =document.querySelector(".reviewcard").offsetWidth;
const carouselChildrens = [...carousel.children];

let isdragging= false,isAutoPlay = true,startX,startScrollLeft,timeoutId;
const dragstart=(e)=>{
    isdragging=true;
    carousel.classList.add("dragging")
    startX=e.pageX;
    startScrollLeft=carousel.scrollLeft;
}

const gridItems = document.querySelectorAll('.carousel');

    // scale animation with transform origin set to center
    
let play=()=>{
    gsap.from(".carousel .reviewcard",{
        // x:10,
        scale: 0.999,opacity:0, transformOrigin: "center center" ,
    duration:1.5
})
gridItems.forEach(item => {
    gsap.fromTo(item, 
      { scale: 0.95,opacity:0, transformOrigin: "center center" }, 
      { scale: 1, opacity:1,duration: 1.5, }
    );
  });

}

let cardPerView = Math.round(carousel.offsetWidth / firstcardwidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.classList.remove("no-transition");

const dragging=(e) =>{
    if(!isdragging){return};
   
if (startX>=e.pageX) {
    
    carousel.scrollLeft=startScrollLeft+firstcardwidth
    
    
} else {
    carousel.scrollLeft=startScrollLeft-firstcardwidth
    
}

console.log(carousel.scrollLeft)

}


const dragstop=()=>{
    isdragging=false;
    carousel.classList.remove("dragging")
}

console.log(carousel.scrollWidth)
console.log(carousel.offsetWidth)
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - ( 2*carousel.offsetWidth);
        
        carousel.classList.remove("no-transition");
        console.log("end")
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        
        carousel.classList.remove("no-transition");
        console.log("starend")


    }


    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 300 || !isAutoPlay) return; 
    
    // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => {
        play();
        carousel.scrollLeft += firstcardwidth
        
    }, 2500);
    
}
autoPlay();

console.log(carousel.scrollLeft)
carousel.addEventListener("mousedown",dragstart);
carousel.addEventListener("mousemove",dragging);
document.addEventListener("mouseup",dragstop);
carousel.addEventListener("scroll",infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);




// const reviewanimation=()=>{
// tlreview=new TimelineMax({ repeat: -1 })
// .to(".autoplay5",{
//     opacity:1,
//     x:5,
    
//     duration:1
// })

// .from(".autoplay5",{
//     opacity:1,
//     x:5,
//     scale:0.95,
//     delay:2,
//     duration:1.5
// })
// .to(".autoplay4",{
//     opacity:0,
//     x:5,
//     scale:1.05,
//     delay:2,
//     duration:1.5
// })
// .from(".autoplay3",{
//     opacity:0,
//     x:5,
//     scale:1.05,
//     delay:2,
//     duration:1.5
// })
// .to(".autoplay2",{
//     opacity:0,
//     x:5,
//     scale:1.05,
//     delay:2,
//     duration:1.5
// })
// .to(".autoplay1",{
//     opacity:0,
//     x:5,
//     scale:1.05,
//     delay:2,
//     duration:1.5
// })
// }


