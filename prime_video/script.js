console.log("welcome")
let topele=document.getElementsByClassName("top")[0]
console.log(topele)

let homeext=document.getElementsByClassName("homeext")[0]
console.log(homeext)
topele.addEventListener("mouseover",()=>{
    // if (homeext.style.top=="0px") {
        homeext.style.top="0px";
    //     console.log(homeext.style.top)
    // } 
    // else {
    //     homeext.style.top="0px";
    // }
    

})
topele.addEventListener("mouseout",()=>{
    // if (homeext.style.top=="0px") {
        homeext.style.top="-206px";
})
