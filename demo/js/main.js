/*+-----------------------------------+
| Author: JS |
| Title : Main Script |
+-------------------------------------+*/
$(function () {
	// * ========== Visual Slider
	if ($(".visual__slider").length > 0) {
		var visualSlider = new Swiper(".visual__slider", {
			autoplay: {
				delay: 4000,
			},
			speed: 600,
			loop: true,
			slidesPerView: 1,
			pagination: {
				el: ".visual__slider .swiper-pagination",
				clickable: true,
			},
		});
	}
	// * Visual Slider ==========
	// * ========== Responsive Baner Slider (Slick.js)
	var windowW = window.innerWidth;
	function windowSize(windowW) {
		if (windowW < 1025) {
			// tm
			if (!$(".res-list__slider").hasClass("slick-initialized")) {
				$(".res-list__slider").slick({
					autoplay: false,
					responsive: [{
						breakpoint: 3500,
						settings: "unslick"
					}, {
						breakpoint: 1025,
						settings: {
							variableWidth: true,
							slidesToShow: 3,
							slidesToScroll: 1,
							arrows: false,
							infinite: true
						}
					}]
				});
			}
		} else {
			// pc
			if ($(".res-list__slider").hasClass("slick-initialized")) {
				$(".res-list__slider").slick("destroy");
				$(".res-list__slider").removeClass("slick-initialized");
			}
		}
	}
	windowSize(windowW);
	$(window).on("resize", function () {
		windowW = window.innerWidth;
		windowSize(windowW);
	});
	// * Responsive Baner Slider (Slick.js) ==========
	// * ========== Banner Slider
	if ($(".list__slider").length > 0) {
		$(".list__slider").slick({
			// autoplay: true,
			variableWidth: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			infinite: true,
			adaptiveHeight: true,
			responsive: [{
				breakpoint: 1025,
				settings: {
					variableWidth: true,
					arrows: false,
					slidesToShow: 3
				}
			}, {
				breakpoint: 768,
				settings: {
					variableWidth: true,
					arrows: false,
					slidesToShow: 2
				}
			}]
		});
	}
	// * Banner Slider ==========
});