const mobile_nav=document.querySelector(".menu a .about1");
const nav_header =document.querySelector(".container");

const toggleNavbar = ()=>{
    nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click",()=>toggleNavbar());

let button = document.querySelector("body .btn3 a");
button.addEventListener("click",()=>{
    const span= document.querySelector("a span");
    button.style.visibility="";
    setTimeout(() =>{
        span.style.visibility="";
        button.style.transition=".3s ease-in-out";
        button.style.paddingRight="0px";
    
    },3000);
})