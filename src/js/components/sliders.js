$(function() {

	// $('.swiper-slide.swiper-slide-active [data-aos]').removeClass('aos-animate');

	var swiper = new Swiper('.hero-banner .swiper-container', {
		spaceBetween: 0,
		keyboard: {
			enabled: true,
		},
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 1,
		spaceBetween: 50,
		autoHeight: false,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
	});

	var swiperNav1 = new Swiper('.product-slider .nav-slider .swiper-container', {
		keyboard: {
			enabled: true,
		},
		// grabCursor: false,
		allowTouchMove: false,
		slidesPerView: 6,
		// freeMode: true,
		// watchSlidesProgress: true,
		autoHeight: true,
		loop: false,
		loopFillGroupWithBlank: true,
		spaceBetween: 0,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
		breakpoints: {
			767: {
				spaceBetween: 0,
				slidesPerView: 6,
				pagination: false,
			},
		}
	});

	var swiper1 = new Swiper('.product-slider .image-slider .swiper-container', {
		keyboard: {
			enabled: true,
		},
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		grabCursor: true,
		slidesPerView: 1,
		autoHeight: true,
		loop: true,
		loopFillGroupWithBlank: true,
		spaceBetween: 30,
		navigation: false,
		centeredSlides: true,
		pagination: false,
		thumbs: {
			swiper: swiperNav1,
		},
		breakpoints: {
			767: {
				pagination: false,
			},
		}
	});

	var swiper = new Swiper('.brands-slider .swiper-container', {
		spaceBetween: 0,
		keyboard: {
			enabled: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 3,
		spaceBetween: 10,
		autoHeight: false,
		loop: true,
		loopFillGroupWithBlank: true,
		navigation: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
		breakpoints: {
			767: {
				slidesPerView: 5,
				spaceBetween: 30
			},
		}
	});

	var galleryThumbs = new Swiper('.image-thumb .thumb-slider .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		slidesPerView: 5,
		// autoHeight: true,
		loop: false,
		direction: "horizontal",
		loopFillGroupWithBlank: true,
		spaceBetween: 5,
		centeredSlides: true,
		centeredSlidesBounds: true, 
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		pagination: false,
		breakpoints: {
			767: {
				spaceBetween: 5,
				slidesPerView: 5,
				pagination: false,
				direction: 'vertical',
			},
			1023: {
				spaceBetween: 5,
				slidesPerView: 6,
				pagination: false,
				direction: 'vertical',
			},
		}
	});

	var galleryMain = new Swiper('.image-primary .primary-slider .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 1,
		autoHeight: true,
		effect: 'coverflow',
		loop: false,
		loopFillGroupWithBlank: true,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		preventInteractionOnTransition: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: false,
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 150,
			modifier: 4,
			slideShadows : false,
		},
		thumbs: {
			swiper: galleryThumbs,
		},
		breakpoints: {
			1200: {
				slidesPerView: 2,
			},
			1000: {
				slidesPerView: 2,
			},
		},
	});

	galleryMain.on("slideChangeTransitionStart", function () {
		galleryThumbs.slideTo(galleryMain.activeIndex);
	});

	galleryThumbs.on("transitionStart", function () {
		galleryMain.slideTo(galleryThumbs.activeIndex);
	});
})