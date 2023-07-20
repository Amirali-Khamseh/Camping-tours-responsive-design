const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');
const navLinks = document.querySelectorAll('.nav-link');

//Removing the mobile menu upon clicking any link
const linkRemoval = ()=>{
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n=>n.addEventListener('click',linkRemoval));


//Showing and hiding the menu 
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
       navMenu.classList.remove('show-menu');

    })
}