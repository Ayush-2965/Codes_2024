let tl = gsap.timeline();

// tl.from(".round .slides",{
//     rotateZ:-10,
//     translateY:200,
//     translateX:15,
//     duration:35,
//     scrollTrigger:{
//         trigger:".page1",


//         start:"top 0",

//         scrub:5,
//         pin:true
//     }
// })

gsap.from(".cont1 h1", {
    opacity: 0,
    duration: 1,
    color: "yellow",
    // stagger:1,
    repeat: -1,
    yoyo: true
})

tl.to(".image2", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".image2",


        start: "top 90%",
        end:"top 10%",
        markers:true,
        scrub: 2,
    }
})

tl.to(".round .slides", {
    rotateY: 310,
    rotateZ: 10,
    translateY: -100,
    translateX: 15,
    duration: 35,
    ease: "linear",
    scrollTrigger: {
        trigger: ".page1",


        start: "top 0",

        scrub: 5,
        pin: true


    }
})
let sun=document.querySelector(".circle img")

console.log(sun)
let foot=document.getElementsByClassName("footinset")[0]
let page1=document.getElementsByClassName("page1")[0]
let page2=document.getElementsByClassName("page2")[0]
let main = document.getElementsByClassName("main")[0];
let cont1 = document.getElementsByClassName("cont1")[0];
let firstpage = document.getElementsByClassName("image2")[0];
let image = document.getElementsByClassName("image")[0];
let button = document.getElementsByClassName("circle")[0];
let toggle = document.getElementsByClassName("toggle")[0];
toggle.addEventListener('click', (e) => {
    console.log(sun)
    // toggle.setAttribute("style","justify-content: flex-end");

    if (button.style.left == "0px") {
        button.style.left = "80px"
        toggle.style.backgroundColor="#abaaaa";
        button.style.backgroundColor="#626060";
        sun.src="images/moon (1).png";
        image.setAttribute("style", "background-image: url('images/off.jpg')");
        image.style.boxShadow= "inset 0 0 20px 14px black";
        page1.style.boxShadow="0 13px 10px black"
        foot.style.boxShadow="inset 0px -9px 8px 0px black"
        firstpage.style.boxShadow="inset 0 13px 10px black"
        firstpage.style.backgroundImage = `url("images/dark-background-b59iy2towqy5yrgb.jpg")`;
        main.style.backgroundColor="black";
        page2.style.backgroundColor="black";
        gsap.from(".main",{
            opacity:0,
            duration:1.5

        })
        gsap.from(".image",{
            opacity:0,
            duration:1.5
        })
        gsap.to(".image2", {
            opacity: 1,
            scrollTrigger: {
                trigger: ".image2",


                start: "top 90%",
                end:"top 10%",
                markers:true,
                scrub: 2,
            }
        })
        console.log("end")
    }
    else {
        button.style.left = 0
        toggle.style.backgroundColor="#ede4248c";
        button.style.backgroundColor="#ffff00";
        image.setAttribute("style", "background-image: url('images/on.png')");
        image.setAttribute("style", "box-shadow: inset 0 0 20px 14px #f7e5db");
        page1.style.boxShadow="0 13px 10px #072f3c"
        foot.style.boxShadow="inset 0px -9px 8px 0px #072f3c"
        firstpage.style.boxShadow="inset 0 13px 10px #f7e5db"

        firstpage.style.backgroundImage = `url("images/day.png")`;
        main.style.backgroundColor="#f7e5db";
        sun.src="images/sun.png"
        main.style.backgroundColor="#f7e5db";
        page2.style.backgroundColor="#072f3c";
        gsap.from(".main",{
            opacity:0,
            duration:1.5

        })
        gsap.from(".image",{
            opacity:0,
            duration:1.5
        })
        gsap.to(".image2", {
            opacity: 1,
            scrollTrigger: {
                trigger: ".image2",


                start: "top 90%",
                end:"top 10%",
                markers:true,
                scrub: 2,
            }
        })
        console.log("start")
    }

})

