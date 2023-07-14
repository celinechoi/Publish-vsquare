/*+-----------------------------------+
| Author: JS |
| Title : Main Script |
+-------------------------------------+*/
$(function () {
	// * ========== Visual Slider
	if ($(".visual__slider .swiper-slide").length > 1) {
		var visualSlider = new Swiper(".visual__slider", {
			autoplay: {
				delay: 4000,
			},
			autoplay: false,
			loop:true,
			speed: 600,
			spaceBetween: 24,
			slidesPerView: 1,
			pagination: {
				el: ".swiper-page",
				type: "fraction",
				formatFractionCurrent: function (number) {
					return ('0' + number).slice(-2);
				},
				formatFractionTotal: function (number) {
					return ('0' + number).slice(-2);
				},
				renderFraction: function (currentClass, totalClass) {
					return '<span class="' + currentClass + ' montserrat"></span>' + '<div id="progress"><span>-</span></div>' + '<span class="' + totalClass + ' montserrat"></span>';
				},
			},
			navigation: {
				nextEl: ".visual__slider .remote-package .swiper-button-next",
				prevEl: ".visual__slider .remote-package .swiper-button-prev",
			},
			watchOverflow : true,
			observer: true,
			observeParents: true,
		});
	} else {
		$(".remote-package").hide();
	}
	// * Visual Slider ==========
	// * ========== Responsive Baner Slider (Slick.js)
	var windowW = window.innerWidth;
	function windowSize(windowW) {
		if (windowW < 1249) {
			// tm
			if (!$(".res-list__slider").hasClass("slick-initialized")) {
				$(".res-list__slider").slick({
					autoplay: true,
					responsive: [{
						breakpoint: 3500,
						settings: "unslick"
					}, {
						breakpoint: 1249,
						settings: {
							variableWidth: true,
							slidesToShow: 3,
							slidesToScroll: 1,
							arrows: false,
							dots: true,
							infinite: true
						}
					}]
				});
			}
			if (!$(".res-list__slider2").hasClass("slick-initialized")) {
				$(".res-list__slider2").slick({
					autoplay: true,
					responsive: [{
						breakpoint: 3500,
						settings: "unslick"
					}, {
						breakpoint: 1249,
						settings: {
							variableWidth: false,
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: false,
							dots: true,
							infinite: true
						}
					}]
				});
			}
		} else {
			// pc
			if ($(".res-list__slider, .res-list__slider2").hasClass("slick-initialized")) {
				$(".res-list__slider, .res-list__slider2").slick("destroy");
				$(".res-list__slider, .res-list__slider2").removeClass("slick-initialized");
			}
		}
	}
	windowSize(windowW);
	$(window).on("resize", function () {
		windowW = window.innerWidth;
		windowSize(windowW);
	});
	// * Responsive Baner Slider (Slick.js) ==========
});