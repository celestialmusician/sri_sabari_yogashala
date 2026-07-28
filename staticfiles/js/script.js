const navbar = document.getElementById("mainNavbar");
const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        navbar.classList.add("navbar-scrolled");

    }else{

        navbar.classList.remove("navbar-scrolled");

    }

    if(window.scrollY > 500){

        scrollTop.classList.add("show");

    }else{

        scrollTop.classList.remove("show");

    }

});

scrollTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});