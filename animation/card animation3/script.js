let index = 1;
let right = document.getElementsByClassName("right")[0]
let left = document.getElementsByClassName("left")[0]
let main = document.querySelector(".backmodel");

main.addEventListener("mousemove", (det) => {
    console.log(det.y)
    if (det.y<=600) {
        
        gsap.to(".cursor", {
            x: (det.x / 1.1),
            y: (det.y / 1.2),
            duration: 0.2,
            opacity: 1
        })
    }

    if (det.y <= 180) {
        gsap.to(".backmodel", {
            backgroundPosition: `${det.x}px ${det.y}px`

        })

    }
   
    else {
        gsap.to(".backmodel", {
            backgroundPosition: `0px 180px`

        })
    }
    if (det.x >= 870 ) {
        
        gsap.to(".backmodel", {
            backgroundPosition: `300px 80px`

        })
    }
    
})
main.addEventListener("mouseleave", (det) => {
    gsap.to(".cursor", {
        opacity: 0,
        duration: 0.2
    })
    gsap.to(".backmodel", {
        backgroundPosition: "0px 0px"
    })
})


left.addEventListener(`click`, () => {

    if (index <= 1) {
        index = 4;
    } else {
        index -= 1;
    }
    if (index == 4) {
        gsap.to(`.upu .color1`, {
            rotate: '-=180',
            transformOrigin: "50% 200%",
            duration: 1.5,



        })

        gsap.from('.upu .color1', {
            opacity: 0,
            duration: 1.5
        })
        gsap.from('.upu .color4', {
            opacity: 0,
            duration: 1.5
        })
        gsap.to(`.upu .color4`, {
            rotate: '-=180',
            transformOrigin: "50% 200%",
            duration: 1.5,



        })
    }
    else {
        gsap.to(`.upu .color${index + 1}`, {
            rotate: '-=180',
            transformOrigin: "50% 200%",

            duration: 1.5,

        })

        gsap.from(`.upu .color${index + 1}`, {
            opacity: 0,
            duration: 1.5
        })
        gsap.to(`.upu .color${index}`, {
            rotate: '-=180',
            transformOrigin: "50% 200%",
            duration: 1.5


        })
        gsap.from(`.upu .color${index}`, {
            opacity: 0,
            duration: 2
        })
    }

})



right.addEventListener(`click`, () => {

    if (index >= 4) {
        index = 1;
    } else {
        index += 1;
    }
    if (index == 1) {
        gsap.to(`.upu .color4`, {
            rotate: '+=180',
            transformOrigin: "50% 200%",
            duration: 1.5


        })
        gsap.from('.upu .color1', {
            opacity: 0,
            duration: 1.5
        })
        gsap.from('.upu .color4', {
            opacity: 0,
            duration: 1.5
        })

        gsap.to(`.upu .color1`, {
            rotate: '+=180',
            transformOrigin: "50% 200%",
            duration: 1.5


        })
    }
    else {
        gsap.to(`.upu .color${index - 1}`, {
            rotate: '+=180',
            transformOrigin: "50% 200%",
            
            duration: 1.5


        })
        gsap.from(`.upu .color${index + 1}`, {
            opacity: 0,
            duration: 1.5
        })

        gsap.to(`.upu .color${index}`, {
            rotate: '+=180',
            transformOrigin: "50% 200%",
            duration: 1.5


        })
        gsap.from(`.upu .color${index}`, {
            opacity: 0,
            duration: 2
        })
    }

})

const floatAnimation = () => {
    const tlthunder = new TimelineMax({repeat:-1});
    /*thunder Animation*/
   tlthunder
       //move top left
   .to('.thunder > img', 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:Power1.easeInOut})
   
       //move down right
   .to('.thunder > img', 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})
   
   
   .to('.thunder > img', 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})
   
   .to('.thunder > img', 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
   
   
   .to('.thunder > imgn', 3, { y:'-=50', ease:Power1.easeInOut})
      
   .to('.thunder > img', 3, { y:'+=50', ease:Power1.easeInOut})
   
   
   .to('.thunder > img', 3, { y:'-=30', ease:Power1.easeInOut})
      
   .to('.thunder > img', 3, { y:'+=30', ease:Power1.easeInOut})
   
   
   .to('.thunder > img', 2, { y:'-=30', ease:Power1.easeInOut})
      
   .to('.thunder > img', 2, { y:'+=30', ease:Power1.easeInOut})

 gsap.to(tlthunder, 27, {ease:Power1.easeInOut})

}
floatAnimation();




// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       type: "fraction",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   var swiper = new Swiper(".mySwiper1", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     freeMode: true,
//     pagination: {
//       el: ".swiper-pagination",
//       dynamicBullets: true,
//     },
//   });