/**
 * Main
 * Custom Scripts
 */

$(function() {
	// Document Ready

	jcf.setOptions('Select', {
		wrapNative: true
	});

	jcf.replaceAll();

	$('[data-toggle="tooltip"]').tooltip(); 

	setTimeout(function(){
		AOS.init({
			offset: 20,
			duration: 800,
			easing: 'linear'
		});
	}, 500);

	setTimeout(function(){
		progressively.init({
			delay: 50,
			throttle: 300,
			smBreakpoint: 600,
			onLoad: function(elem) {
				// console.log(elem);
			},
			onLoadComplete: function() {
				// console.log('All images have finished loading!');
			}
		});
	}, 400);

	// $(window).on('resize', function(){
	// 	$('.progressive-image').progressiveImage();
	// 	AOS.init();
	// });
})

$(window).smartresize(function() {
	// Debouncing function from John Hann
	// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
});
