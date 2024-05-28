$(document).ready(function() {
	// плавная прокрутка и изменение active в меню
	$('nav a[href^="#"]').click(function() {
		let target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		},500);
		$('nav a[href^="#"]').parent().removeClass('active');
		$(this).parent().addClass('active');
		$('.menu__mobile .menu').toggle(500);
		$('.menu__burger').toggleClass('close');
		return false;
	});
	// меню бургер
	$('.menu__burger').click(function(){
		$('.menu__mobile .menu').toggle(500);
		$(this).toggleClass('close');

	});
});