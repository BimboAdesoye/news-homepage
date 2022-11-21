 const hamburger = document.querySelector('.homepage nav .nav-list .hamburger');
 const mobile_menu = document.querySelector('.homepage nav .nav-list ul');
 const header = document.querySelector('.background.homepage');


hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})