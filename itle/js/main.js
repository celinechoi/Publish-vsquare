/*+-----------------------------------+
| Author: JS |
| Title : Main Script |
+-------------------------------------+*/
$(function(){
	// * ========== Visual Slider
	if($(".visual__slider").length > 0 || $(".visual__clone-slider").length > 0) {
		var $visualSlider = $(".visual__slider"),
				$visualCloneSlider = $(".visual__clone-slider");
		var $visualPagination = $(".visual__pagination").find(".pagination-inner");
		$visualSlider.on('init', function(event, slick) {
			$visualPagination.find('.pagination__cur').text("0"+ (slick.currentSlide + 1));
			$visualPagination.find('.pagination__total').text("0"+slick.slideCount);
		})
		$visualSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			dots:false,
			autoplay: false,
			speed:1000,
			infinite:true,
			easing: 'easeInOutQuint',
			pauseOnHover:false,
			prevArrow: '.visual__remote .visual__prev',
			nextArrow: '.visual__remote .visual__next',
			zIndex:1,
			asNavFor: '.visual__clone-slider'
		});
		$visualSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			$visualPagination.find('.pagination__cur').text("0"+(nextSlide + 1));
		});
		$visualCloneSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			dots:false,
			autoplay: false,
			speed:1000,
			infinite:true,
			easing: 'easeInOutQuint',
			pauseOnHover:false,
			asNavFor: '.visual__slider',
		});
	}
	// * Visual Slider ==========
	// * ========== Contanier Slider
	if($(".notice-box__slider").length > 0) {
		var noticeSwiper = new Swiper(".flex-box__left .notice-box__slider", {
			effect: "fade",
			loop: true,
			fadeEffect: {
				crossFade: true
			},
			slidesPerView: 1,
			autoplay: false,
			navigation: {
				prevEl: '.flex-box__left .notice-box__remote .notice-box__prev',
				nextEl: '.flex-box__left .notice-box__remote .notice-box__next',
			},
			pagination: {
				el: ".flex-box__left .notice-box__pagination",
				type: "fraction",
				clickable: true,
				formatFractionCurrent: function (number) {
					return ('0' + number).slice(-2);
				},
				formatFractionTotal: function (number) {
					return ('0' + number).slice(-2);
				},
				renderFraction: function (currentClass, totalClass) {
					return '<span class="'+currentClass+' num"+"></span><span class="slash">/</span><span class="'+totalClass+' num montserrat"></span>';
				},
			},
		});
		var noticeSwiper2 = new Swiper(".flex-box__right .notice-box__slider", {
			effect: 'fade',
			loop: true,
			fadeEffect: {
				crossFade: true
			},
			slidesPerView: 1,
			autoplay: false,
			navigation: {
				prevEl: '.flex-box__right .notice-box__remote .notice-box__prev',
				nextEl: '.flex-box__right .notice-box__remote .notice-box__next',
			},
			pagination: {
				el: ".flex-box__right .notice-box__pagination",
				type: "fraction",
				clickable: true,
				formatFractionCurrent: function (number) {
					return ('0' + number).slice(-2);
				},
				formatFractionTotal: function (number) {
					return ('0' + number).slice(-2);
				},
				renderFraction: function (currentClass, totalClass) {
					return '<span class="'+currentClass+' num"+"></span><span class="slash">/</span><span class="'+totalClass+' num montserrat"></span>';
				},
			},
		});
	}
	// * Container Slider ==========
});