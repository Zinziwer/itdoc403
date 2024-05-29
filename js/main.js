let burgerIcon = document.querySelector('.menu__burger');
let menu = document.querySelector('.header__menu');
let hb = document.querySelector('.header__buttons');
let body = document.querySelector('body');
burgerIcon.addEventListener('click', function(){
    burgerIcon.classList.toggle('active');
    menu.classList.toggle('active');
	hb.classList.toggle('active');
    body.classList.toggle('lock');
})