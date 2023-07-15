
const hamburger = document.querySelector(".hamburger");
const navMenuDefault = document.querySelector(".nav-menu-default");
const navMenuHamburger = document.querySelector(".nav_menu_hamburger");
const body = document.querySelector("body")
hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenuDefault.classList.toggle("active");
    navMenuHamburger.classList.toggle("active");
    if (hamburger.classList.contains("active")) {
        hamburger.style.display = "none";
        document.body.classList.add("no-scroll");   // this will fix background until responsive nav will be active 
    } else {
        hamburger.style.display = "block";
        document.body.classList.remove("no-scroll");   // this will remove fix background class when responsive nav will be deactive 
    }     
};


// const svg = document.querySelector(".UpperSvg2");
//   svg.addEventListener("click",remov)
//   console.log("working")
//   function remov(){
//     hamburger.classList.a("active");
//     navMenuDefault.classList.toggle("active");
//     navMenuHamburger.classList.toggle("active");
//   }