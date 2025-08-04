//Navbar
const toggler = document.querySelector(".nav__toggler");
const nav = document.querySelector(".header__nav");
toggler.addEventListener("click", (e)=> {
    nav.classList.toggle("nav__expanded");
})