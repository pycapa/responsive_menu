'use strict'
// variables
let navbar = document.getElementById('navbar');
let button = document.getElementById("toggle-button");
let menu = document.getElementById("navbarNav");
let checked = document.getElementById('toggle-button');
let label = document.getElementById('label-toggle-button');
let icon = document.getElementById('icon-menu');

button.addEventListener("click", () =>{
    if(checked.checked){
        menu.classList.add('show-menu');
        label.classList.add('show-checked-button');
        navbar.classList.add('menu-responsive');
        icon.classList.remove('fa-ellipsis-v');
        icon.classList.add('fa-times');
        
    }else {
        menu.classList.remove('show-menu');
        label.classList.remove('show-checked-button');
        navbar.classList.remove('menu-responsive');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-ellipsis-v');
    };    
}); 


window.addEventListener("resize", ()=>{
    let window_width = window.innerWidth;
    if (window_width>=700 && checked.checked){
        checked.click();
    }
})