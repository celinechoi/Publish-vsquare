/*+-----------------------------------+
| Author: JS |
| Title : Main Script |
+-------------------------------------+*/
$(function () {
	var $windowW = $(window).outerWidth();
	var $this;
	// * ========== 교육장소를 찾아보세요'
	if($windowW < 1025) { // tablet, mobile
		if($(".main-map__con").hasClass("on")){
			$(".main-map__list").removeClass("off");
		} else {
			$(".js-main-map").removeClass("on icon-chevron_down").addClass("icon-chevron_up");
			$(".main-map__list").addClass("off");
		}
	} else { // pc
		$(".main-map__list").removeClass("off");
	}
	$(window).on("resize", function(){
		$windowW = $(window).outerWidth();
		$(".main-map__con").removeClass("on");
		if($windowW < 1025) { // tablet, mobile
			if($(".main-map__con").hasClass("on")){
				$(".main-map__list").removeClass("off");
			} else {
				$(".js-main-map").removeClass("on icon-chevron_down").addClass("icon-chevron_up");
				$(".main-map__list").addClass("off");
			}
		} else { // pc
			$(".main-map__list").removeClass("off");
		}
	});
	$(".js-main-map").off("click").on("click", function(){
		if(!$(this).hasClass("on")){
			$(this).removeClass("icon-chevron_up");
			$(this).addClass("on icon-chevron_down");
			$(this).parents(".main-map__con").addClass("on");
			$($(this).parents(".main-map__con")).find(".main-map__list").removeClass("off");
		} else {
			$(this).addClass("icon-chevron_up");
			$(this).removeClass("on icon-chevron_down");
			$(this).parents(".main-map__con").removeClass("on");
			$($(this).parents(".main-map__con")).find(".main-map__list").addClass("off");
		}
	});
	// * 교육장소를 찾아보세요 ==========
	// * ========== Visual Slider
	if ($(".visual__slider .swiper-slide").length > 1) {
		$(".visual__slider--prev.swiper-button-prev, .visual__slider--next.swiper-button-next").show();
		var visualSlider = new Swiper(".visual__slider", {
			autoplay: {
				delay: 4000,
			},
			autoplay: false,
			speed: 600,
			loop: true,
			slidesPerView: 1,
			pagination: {
				el: ".visual__slider .swiper-pagination",
				clickable: true,
			},
			navigation: {
				prevEl: ".visual__slider--prev.swiper-button-prev",
				nextEl: ".visual__slider--next.swiper-button-next"
			}
		});
	} else {
		$(".visual__slider--prev.swiper-button-prev, .visual__slider--next.swiper-button-next, .visual__slider .swiper-pagination").hide();
	}
	// * Visual Slider ==========
  // * ========== Main Slider
  if ($(".main__slider-fraction .swiper-slide").length > 1) {
		var visualSlider = new Swiper(".main__slider-fraction", {
			loop: true,
			pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
		});
	} else {
		$(".main__slider-fraction .fraction-remote").hide();
	}
	if ($(".main__slider-article .swiper-slide").length > 1) {
		var visualSlider = new Swiper(".main__slider-article", {
			loop: true,
			spaceBetween: 7,
			pagination: {
        el: ".swiper-pagination",
      },
		});
	} else {
		$(".main__slider-article .swiper-pagination").hide();
	}
  // * Main Slider ==========
	// * FamilySite Slider ==========
	if($(".banner-list__slider").length > 0) {
		var bannerListSwiper = new Swiper(".banner-list__slider", {
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			slidesPerView: 5,
			// spaceBetween: 10,
			speed: 500,
			navigation: {
				prevEl: '.banner-list__control .banner-list__prev',
				nextEl: '.banner-list__control .banner-list__next',
			},
			breakpoints: {
				1025: {
					slidesPerView: 5,
					spaceBetween: 20
				},
				850: {
					slidesPerView: 4,
					spaceBetween: 20
				},
				650: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				550: {
					slidesPerView: 2,
					spaceBetween: 20
				}
			}
		});
		$(".banner-list__control .banner-list__stop").on("click", function () {
			if (!$(this).hasClass("flag")) { // flag 없다면
				$(this).removeClass("icon-pause_outline");
				$(this).addClass("flag icon-caret_forward_outline");
				bannerListSwiper.autoplay.stop(); // 멈춤
			} else { // flag 있다면
				$(this).addClass("icon-pause_outline");
				$(this).removeClass("flag icon-caret_forward_outline");
				bannerListSwiper.autoplay.start(); // 재생 
			}
		});
	}
	// * ========== FamilySite Slider
	// * ========== Popup Slider
	if ($(".main-popup__slider .swiper-slide").length > 1) {
		$(".main-popup__slider--prev.swiper-button-prev, .main-popup__slider--next.swiper-button-next").show();
		var visualSlider = new Swiper(".main-popup__slider", {
			autoplay: {
				delay: 3500,
			},
			autoplay: false,
			speed: 600,
			loop: true,
			slidesPerView: 1,
			pagination: {
        el: ".main-popup__slider--pagination",
        type: "fraction",
      },
			navigation: {
				prevEl: ".main-popup__slider--prev.swiper-button-prev",
				nextEl: ".main-popup__slider--next.swiper-button-next"
			}
		});
	} else {
		$(".main-popup__slider--prev.swiper-button-prev, .main-popup__slider--next.swiper-button-next, .main-popup__slider--pagination").hide();
	}
	// * Popup Slider ==========
});