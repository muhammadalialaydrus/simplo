/**
 * Navbar
 */

function stickyHeader() {
 	var lastScroll = 300;
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		
		if(st < 100) {
			$('body').removeClass('on-scroll');
			$('.floating-button').removeClass('show');
		} else {
			$('body').addClass('on-scroll');
			$('.floating-button').addClass('show');
		}

		lastScroll = st;
	});
}

function stickyClass() {
	$(window).scroll(function(event){
		var scroll = $(window).scrollTop();
		
		$('.floating-button').toggleClass('show',
			scroll >= $('section:nth-child(2n)').offset().top - 54
		);
	});
}

$(function() {

	// Navbar toggler
	var navbarToggler = $('.js-navbar-toggler'),
		navbarOpened = 'navbar--opened';

	navbarToggler.on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('navbar--opened');
	});

	/*
	Add class to navbar after certain amount of pixels are scrolled
	if navbar has class navbar-fixed-top then enable it
	e.g. when you want to provide some opacity to the background color
	*/
	var navbar = $('.js-navbar'),
		navbarScrolled = 'navbar--scrolled';

	if (navbar.hasClass('navbar--fixed')) {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				navbar.addClass(navbarScrolled);
			} else {
				navbar.removeClass(navbarScrolled);
			}
		});
	}


	// Sidebar Category toggle
	var sidebarCollapse = $('.product .sidebar-head.collapse-button'),
		sidebarCollapseOpened = 'navbar--opened';

	sidebarCollapse.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('open').siblings(".sidebar-body").slideToggle();
	});



	$(".toggle-down").click(function(){
		$(this).toggleClass("toggleDrawer").parents(".header-fix").toggleClass("show-menu").parents().find(".burger-menu").toggleClass("show");
	});

	$(".close-toggle").click(function(){
		$(this).parents(".burger-menu").toggleClass("show").parents().find(".header-fix").toggleClass("show-menu").find(".toggle-down").toggleClass("toggleDrawer");
	});

	$(".backdrop").click(function(){
		$(this).parents(".burger-menu").toggleClass("show").parents().find(".header-fix").toggleClass("show-menu").find(".toggle-down").toggleClass("toggleDrawer");
	});

	$(".search-web .button-search").click(function(){
		$(this).parents(".search-input").toggleClass("show").parents().siblings(".search-field").toggleClass("show").parents(".header-fix").toggleClass("show-search");
	});



	// $(document).ready(function () {
	stickyHeader();

	// if ($('.floating-button').length > 0) {
	// 	stickyClass();
	// }
	// });
})
