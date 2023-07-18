/*+-----------------------------------+
| Author: JS |
| Title : Common Script |
+-------------------------------------+*/
$(function(){
	var $windowW = $(window).outerWidth();
	var $this;
	// * ========== #gnb
	$(".gnb-title").each(function(i,v){
		var index = i,
				$v = $(v);
		$(".gnb-list__title").each(function(z,titleVal){
			if(index == $(titleVal).data("index")) {
				var title = $(titleVal).text();
				$v.text(title);
			}
			// console.log($(titleVal).siblings(".depth2-page-frame").find(".depth2-page__list > li").length);
			if($(titleVal).siblings(".depth2-page-frame").find(".depth2-page__list > li").length > 0){
				// console.log($(this));
				$(this).addClass("there");
			}
		});
	});

	$("header .icon-menu_outline").on("click", function(){
		$("html, body").css({
			overflowY: "hidden",
			height: "100%"
		});
		$("#top").hide();
		$(".gnb-list-frame, .gnb-page").stop().fadeIn('fast');
	});
	$("header .icon-close_outline").on("click", function () {
		$("html, body").css({
			overflowY: "initial",
			height: "auto"
		});
		$("#top").show();
		$(".gnb-list-frame, .gnb-page").stop().fadeOut('fast');
	});
	// * #gnb ==========
	// * ========== #top Function
	var $top = $("#top");
	var scrollFooterBottom;
	if ($top) {
		$top.on("click", function () {
			$("html, body").animate({
				scrollTop: 0
			});
			return false;
		});
	} else {
		// return null;
	}
	var thisTop;
	$(window).on("scroll", function () {
		thisTop = $(this).scrollTop();
		footerHei = $('footer').outerHeight();
		scrollFooterBottom = $(document).height() - $(window).height() - footerHei;
		if (thisTop >= 70) {
			if (thisTop >= scrollFooterBottom) {
				$top.addClass("no-fixed");
			} else {
				$top.removeClass("no-fixed");
			}
			$top.stop().fadeIn();
		} else {
			$top.stop().fadeOut();
		}
	});
	// * #top Function ==========
	// * FamilySite Slider ==========
	// * ========== FamilySite Slider
	if($(".main-list__slider").length > 0) {
		var mainListSwiper = new Swiper(".main-list__slider", {
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			slidesPerView: 5,
			// spaceBetween: 10,
			speed: 500,
			navigation: {
				prevEl: '.main-list__control .main-list__prev',
				nextEl: '.main-list__control .main-list__next',
			},
			breakpoints: {
				500: {
					slidesPerView: 2,
					spaceBetween: 20
				},
			}
		});
		$(".main-list__control .main-list__stop").on("click", function () {
			// console.log("zz");
			if (!$(this).hasClass("flag")) { // flag 없다면
				$(this).removeClass("icon-pause_outline");
				$(this).addClass("flag icon-caret_forward_outline");
				mainListSwiper.autoplay.stop(); // 멈춤
			} else { // flag 있다면
				$(this).addClass("icon-pause_outline");
				$(this).removeClass("flag icon-caret_forward_outline");
				mainListSwiper.autoplay.start(); // 재생 
			}
		});
	}
	// window size ==========
	if($windowW > 1248) { //pc
		$(".gnb-list__title").off("mouseenter").on("mouseenter", function(){
			$this = $(this);
			$(".gnb-list__title").removeClass("on");
			$(".depth2-page-frame").each(function(i,v){
				// $(".depth2-page-frame").stop().fadeOut();
				if($this.data("index") == $(v).data("num")){
					if($(v).find(".depth2-page__list > li").length == 0) { // 2depth none
						$(v).stop().fadeOut();
						$("header").removeClass("header-on");
						$("html, body").css({ overflowY: 'auto' });
					} else { // 2depth there
						$this.addClass("on");
						$(v).stop().fadeIn();
						$("header").addClass("header-on");
						$("html, body").css({ overflowY: 'hidden' });
					}
				} else {
					$(v).stop().fadeOut();
					// $("header").removeClass("header-on");
				}
			});
		});
		$("header, .depth2-page-frame").on("mouseleave", function(){
			$("header").removeClass("header-on");
			$(".gnb-list__title").removeClass("on");
				$("html, body").css({ overflowY: 'auto' });
				$(".depth2-page-frame").stop().fadeOut();
		});
	} else { 
		$(".gnb-list__title").off("mouseenter");
		$("header, .depth2-page-frame").off("mouseleave");
		$(".gnb-list__title").off("click").on("click", function(){
			$this = $(this);
			// $(".gnb-list__title").removeClass("on");
			$(".depth2-page-frame").each(function(i,v){
				// $(".depth2-page-frame").stop().fadeOut();
				if($this.data("index") == $(v).data("num")){
					if($(v).find(".depth2-page__list > li").length == 0) { // 2depth none
						$(v).stop().fadeOut();
						$("header").removeClass("header-on");
						$("html, body").css({ overflowY: 'auto' });
					} else { // 2depth there
						if(!$this.hasClass("on")){
							$(".gnb-list__title").removeClass("on");
							$this.addClass("on");
							$(v).stop().fadeIn();
						} else {
							$this.removeClass("on");
							$(v).stop().fadeOut();
						}
					}
				} else {
					$(v).stop().fadeOut();
					// $("header").removeClass("header-on");
				}
			});
		});
	}
	// * ========== window size
	// * ========== window resize
	$(window).on("resize", function(){
		$windowW = $(window).outerWidth();
		if($windowW > 1248) { //pc
			$(".gnb-list-frame").show();
			$(".gnb-list__title").off("mouseenter").on("mouseenter", function(){
				$this = $(this);
				$(".gnb-list__title").removeClass("on");
				$(".depth2-page-frame").each(function(i,v){
					// $(".depth2-page-frame").stop().fadeOut();
					if($this.data("index") == $(v).data("num")){
						if($(v).find(".depth2-page__list > li").length == 0) { // 2depth none
							$(v).stop().fadeOut();
							$("header").removeClass("header-on");
							$("html, body").css({ overflowY: 'auto' });
						} else { // 2depth there
							$this.addClass("on");
							$(v).stop().fadeIn();
							$("header").addClass("header-on");
							$("html, body").css({ overflowY: 'hidden' });
						}
					} else {
						$(v).stop().fadeOut();
						// $("header").removeClass("header-on");
					}
				});
			});
			$("header, .depth2-page-frame").on("mouseleave", function(){
				$("header").removeClass("header-on");
				$(".gnb-list__title").removeClass("on");
					$("html, body").css({ overflowY: 'auto' });
					$(".depth2-page-frame").stop().fadeOut();
			});
		} else { // not pc
			$(".gnb-list-frame, .gnb-page").hide();
			$(".gnb-list__title").off("mouseenter");
			$("header, .depth2-page-frame").off("mouseleave");
			$(".gnb-list__title").off("click").on("click", function(){
				$this = $(this);
				// $(".gnb-list__title").removeClass("on");
				$(".depth2-page-frame").each(function(i,v){
					// $(".depth2-page-frame").stop().fadeOut();
					if($this.data("index") == $(v).data("num")){
						if($(v).find(".depth2-page__list > li").length == 0) { // 2depth none
							$(v).stop().fadeOut();
							$("header").removeClass("header-on");
							$("html, body").css({ overflowY: 'auto' });
						} else { // 2depth there
							if(!$this.hasClass("on")){
								$(".gnb-list__title").removeClass("on");
								$this.addClass("on");
								$(v).stop().fadeIn();
							} else {
								$this.removeClass("on");
								$(v).stop().fadeOut();
							}
						}
					} else {
						$(v).stop().fadeOut();
						// $("header").removeClass("header-on");
					}
				});
			});
		}
	});
	// * ========== window resize
});