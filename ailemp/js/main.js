/*+-----------------------------------+
| Author: JS |
| Title : Main Script |
+-------------------------------------+*/
$(function () {
	// * ========== Visual Slider
	if ($(".visual__slider").length > 0) {
		var visualSlider = new Swiper(".visual__slider", {
			autoplay: {
				delay: 3000,
			},
			/*autoplay: false,*/
			speed: 800,
			loop: true,
			slidesPerView: 1,
			pagination: {
				el: ".visual__slider .swiper-control .swiper-pagination",
				type: "fraction",
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
			navigation: {
				nextEl: ".visual__slider .swiper-control .next",
				prevEl: ".visual__slider .swiper-control .prev",
			},
		});
	}
	// * Visual Slider ==========

	// * ========== 학습 콘텐츠 슬라이드
	if ($(".learning__slider").length > 0) {
		var learningSlider = new Swiper(".learning__slider", {
			direction: 'horizontal',
			autoplay: {
				delay: 2500,
			},
			/*autoplay: false,*/
			speed: 700,
			loop: true,
			slidesPerView: 'auto',
			spaceBetween: 32,
			centeredSlides: true,
			createElements: true,
			navigation: {
				prevEl: ".learning__slider .swiper-control .prev",
				nextEl: ".learning__slider .swiper-control .next",
			},
			pagination: {
				el: ".learning__slider .swiper-control .swiper-pagination",
			},
			/*scrollbar: {
				el: ".learning__slider .swiper-scrollbar",
				/!*draggable: true,*!/
			},*/
			breakpoints: {
				1448: {
					spaceBetween: 20
				},
				767: {
					spaceBetween: 16
				}
			}
		});
	}
	// * 학습 콘텐츠 슬라이드 ==========

	// * ========== 우수한 학습자는 누구일까요 슬라이드
	if ($(".great__slider").length > 0) {
		var greatSlider = new Swiper(".great__slider", {
			direction: 'horizontal',
			autoplay: {
				delay: 2500,
			},
			autoplay: false,
			speed: 700,
			loop: true,
			slidesPerView: 'auto',
			spaceBetween: 49,
			navigation: {
				prevEl: ".great__slider +.swiper-control .prev",
				nextEl: ".great__slider +.swiper-control .next",
			},
			pagination: {
				el: ".great__slider +.swiper-control .swiper-pagination",
			},
			breakpoints: {
				1600: {
					slidesPerView: 2,
					spaceBetween: 40
				},
				1280: {
					slidesPerView: 1,
					spaceBetween: 30
				}
			}
		});
	}
	// * ========== 바우처 가맹점 현황
	function voucherFunc(){
		var JT = JT || {};
		JT.is_screen = function(max_width){
			if(window.matchMedia){
				return window.matchMedia('(max-width:'+ max_width +'px)').matches;
			}else{
				return window.innerWidth <= max_width;
			}
		};
		var marqueeSpeed = ( JT.is_screen(860) ) ? 35 : 50;
		var marqueeTimeline = [];
		var selector = '.main-service__group';
		var item = '.main-service__item';

		// Init
		$(selector).each(function(idx){

			var $element = $(this);

			$element.addClass('ke-marquee');
			$element.find(item).wrapAll('<div class="ke-marquee__items">');

			var $elementItem = $element.find('.ke-marquee__items');
			var containerWidth = $element.width();
			var itemWidth = $elementItem.width();
			var itemLength = Math.ceil(containerWidth/itemWidth) + 1;
			var loopDuration = itemWidth/marqueeSpeed - (idx*2);

			// Lazyload support
			$elementItem.find('.ke-lazyload').each(function(){
				var $this = $(this);
				var $img = $this.find('img');
				$img.attr('src', $img.attr('data-unveil')).addClass('ke-lazyload--loaded');
				$this.addClass('ke-lazyload--loaded');
			});

			// Clone item
			for( var i=0 ; i<itemLength ; i++ ) {
				$elementItem.clone().appendTo($element);
			}

			$element.find('.ke-marquee__items').wrapAll('<div class="ke-marquee__inner">');

			var $marquee = $element.find('.ke-marquee__inner');
			var marqueeEndpoint = null;

			if( ( idx % 2 == 0 ) ) {
				gsap.set( $marquee , {x: -itemWidth} );
				marqueeEndpoint = -itemWidth * 2;
			} else {
				gsap.set( $marquee , {x: -(itemWidth*2)} );
				marqueeEndpoint = 0;
			}

			marqueeTimeline[idx] = gsap.timeline({ repeat: -1, paused: true });
			marqueeTimeline[idx].to( $marquee, { duration: 0, x: -itemWidth, ease: 'none' });
			marqueeTimeline[idx].to( $marquee, { duration: loopDuration, x: marqueeEndpoint, ease: 'none' });

			// Hover
			$element.find('.ke-marquee__items').find('.main-service__item').on({
				mouseenter: function(){
					marqueeTimeline[idx].pause();
					$(this).find('.main-service__link').addClass('on');
				},
				mouseleave: function(){
					marqueeTimeline[idx].play();
					$(this).find('.main-service__link').removeClass('on');
				}
			});

			// Inview
			ScrollTrigger.create({
				trigger: $element,
				once: false,
				onEnter: function(){
					$element.addClass('ke-marquee--play').removeClass('ke-marquee--pause');
					marqueeTimeline[idx].play();
				},
				onEnterBack: function(){
					$element.addClass('ke-marquee--play').removeClass('ke-marquee--pause');
					marqueeTimeline[idx].play();
				},
				onLeave: function(){
					$element.addClass('ke-marquee--pause').removeClass('ke-marquee--play');
					marqueeTimeline[idx].pause();
				},
				onLeaveBack: function(){
					$element.addClass('ke-marquee--pause').removeClass('ke-marquee--play');
					marqueeTimeline[idx].pause();
				}
			});

		});

	}
	voucherFunc();
	// * ========== 꿈을 향한 슬라이드
	if ($(".dream__slider .slide").length > 1) {
		$(".dream-section__title .slick-control").css({display: 'flex'});
		$(".dream__slider").slick({
			prevArrow: $(".dream-section__title .slick-control .banner-list__prev"),
			nextArrow: $(".dream-section__title .slick-control .banner-list__next"),
			/*slickPause: $(".dream-section__title .slick-control .banner-list__stop"),*/
			autoplay: true,
			infinite: true,
			pauseOnFocus: true,
			pauseOnHover: true,
			speed: 700,
			/*slidesToShow: 4,*/
			settings: {
				slidesToScroll: 1,
				rows: 2
			}

		});
		$(".dream-section__title .slick-control .banner-list__stop").on("click", function () {
			if (!$(this).hasClass("flag")) { // flag 없다면
				$(this).removeClass("icon-pause_outline");
				$(this).addClass("flag icon-caret_forward_outline");
				$('.dream__slider').slick('slickPause'); // 멈춤
			} else { // flag 있다면
				$(this).addClass("icon-pause_outline");
				$(this).removeClass("flag icon-caret_forward_outline");
				$('.dream__slider').slick('slickPlay'); // 멈춤
			}
		});
	}
	$(".dream__slider .slide-grid .main-service__link").on("mouseenter", function (){
		$(this).addClass("on");
	});
	$(".dream__slider .slide-grid .main-service__link").on("mouseleave", function (){
		$(this).removeClass("on");
	});
});