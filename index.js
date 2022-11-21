const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-list');
const hamburger = document.querySelector('.hamburger');

menu.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
})

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
})