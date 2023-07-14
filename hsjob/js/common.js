/*+-----------------------------------+
| Author: JS |
| Title : Common Script |
+-------------------------------------+*/
$(function(){
	var $windowW = $(window).outerWidth();
	var $this;
	// * ========== header search 
	if($(".js-search-show")){
		$(".js-search-show").next(".search-show").css({ display: "none" });
		$(".js-search-show").on("click", function(){
			// $(this).css({ display: "none" });
			$(this).next(".search-show").show();
			$("body, html").css({overflowY: "hidden"});
			return false;
		});
	}
	// 다른곳 누르면 검색창 사라지는 기능
	// var $headerSearch = $(".header__search");
	// $(document).on("click", $headerSearch, function (e) {
	// 		if (e.target.id === "searchShow") {
	// 				// $headerSearch.find(".js-search-show").css({ display: "none" });
	// 				$headerSearch.find(".search-show").stop().fadeIn();
	// 		} else if (!$(e.target).hasClass("search-show") && !$(e.target).hasClass("js-option") && !$(e.target).hasClass("js-remove")) {
	// 			// $headerSearch.find(".js-search-show").css({ display: "block" });
	// 			$headerSearch.find(".search-show").css({ display: "none" });
	// 		}
	// });
	// tm 검색창 사라지는 기능
	$(".js-tm-search-cancel").on("click", function(){
		$(this).parent().hide();
		$("body, html").css({overflowY: "auto"});
	});
	// * header search ==========

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
	if($(".banner-list__slider").length > 0) {
		var bannerListSwiper = new Swiper(".banner-list__slider", {
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				allowTouchMove: true
			},
			// autoplay: false,
			slidesPerView: 5,
			spaceBetween: 30,
			speed: 500,
			navigation: {
				prevEl: '.banner-list__control .banner-list__prev',
				nextEl: '.banner-list__control .banner-list__next',
			},
			breakpoints: {
				1249: {
					slidesPerView: 4,
					spaceBetween: 20
				},
				650: {
					slidesPerView: 3,
					spaceBetween: 10
				},
				550: {
					slidesPerView: 2,
					spaceBetween: 0
				}
			}
		});
		$(".banner-list__control .banner-list__stop").on("click", function () {
			// console.log("zz");
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

	// * ========== Click Event
	$(".js-click").on("click", function(){
		if($(this).hasClass("on")) {
			$(this).removeClass("on");
		} else {
			$(this).addClass("on");
		}
	});
	// @ input-button, input-icon focus
	$(".input-button input, .input-icon input").on("focus", function(){
		if($(this).parent().hasClass("on")) {
			// $(this).removeClass("on");
		} else {
			$(this).parent().addClass("on");
		}
	});
	$(".input-button input, .input-icon input").on("blur", function(){
		if($(this).parent().hasClass("on")) {
			$(this).parent().removeClass("on");
		}
	});
	// * Click Event END ==========

	// header : window size ==========
	$(".gnb-list__txt").each(function(z,titleVal){
		// console.log(z);
		// console.log($(titleVal).siblings(".depth2-list").children("li").length);
		if($(titleVal).siblings(".depth2-frame").find(".depth2-list").children("li").length > 0){
			// console.log($(this));
			$(this).addClass("there");
		} else {
			$(this).removeClass("there");
		}
	});
	if($windowW > 1249) { //pc
		$(".header-box").show();
		$(".gnb-list__txt.there").removeClass("now");
		$(".depth2-frame").hide();
		$(".gnb-list__txt.there").off("mouseenter").on("mouseenter", function(){
			$(this).siblings(".depth2-frame").stop().fadeIn('fast');
		});
		$(".gnb-list__txt.there").parent().off("mouseleave").on("mouseleave", function(){
			$(this).find(".depth2-frame").stop().fadeOut('fast');
		});
	} else { //tm
		$(".header-box").hide();
		$(".gnb-list__txt.there").off("mouseenter");
		$(".gnb-list__txt.there").parent().off("mouseleave");
		if($(".gnb-list__txt.there").hasClass("now")) {
			$(this).removeClass("now");
		}
		$(".js-menu-show").off("click").on("click", function(){ // show tm menu 
			$this = $(this);
			$(".header-box").show();
			$("html, body").addClass("page-style");
		});
		$(".js-menu-hide").off("click").on("click", function(){ // hide tm menu 
			$this = $(this);
			$(".header-box").hide();
			$("html, body").removeClass("page-style");
		});
		$(".gnb-list__txt.there").off("click").on("click", function(){ // click tm menu
			$this = $(this);
			$(".gnb-list__txt.there").removeClass("now");
			if(!$this.hasClass("now")){
				$this.addClass("now");
				$(".depth2-frame").stop().slideUp();
				$this.next(".depth2-frame").stop().slideDown();
			} else {
				$(".gnb-list__txt.there").removeClass("now");
				$this.next(".depth2-frame").stop().slideUp();
			}
		});
	}
	// * ========== header : window size

	// * ========== header : window resize
	$(window).on("resize", function(){
		$windowW = $(window).outerWidth();
		$("html, body").removeClass("page-style");
		if($windowW > 1249) { //pc
			$(".header-box").show();
			$(".gnb-list__txt.there").removeClass("now");
			$(".depth2-frame").hide();
			$(".gnb-list__txt.there").off("mouseenter").on("mouseenter", function(){
				$(this).siblings(".depth2-frame").stop().fadeIn('fast');
			});
			$(".gnb-list__txt.there").parent().off("mouseleave").on("mouseleave", function(){
				$(this).find(".depth2-frame").stop().fadeOut('fast');
			});
		} else { //tm
			$(".header-box").hide();
			$(".gnb-list__txt.there").off("mouseenter");
			$(".gnb-list__txt.there").parent().off("mouseleave");
			if($(".gnb-list__txt.there").hasClass("now")) {
				$(this).removeClass("now");
			}
			$(".js-menu-show").off("click").on("click", function(){ // show tm menu 
				$this = $(this);
				$(".header-box").show();
				$("html, body").addClass("page-style");
			});
			$(".js-menu-hide").off("click").on("click", function(){ // hide tm menu 
				$this = $(this);
				$(".header-box").hide();
				$("html, body").removeClass("page-style");
			});
			$(".gnb-list__txt.there").off("click").on("click", function(){ // click tm menu
				$this = $(this);
				$(".gnb-list__txt.there").removeClass("now");
				if(!$this.hasClass("now")){
					$this.addClass("now");
					$(".depth2-frame").stop().slideUp();
					$this.next(".depth2-frame").stop().slideDown();
				} else {
					$(".gnb-list__txt.there").removeClass("now");
					$this.next(".depth2-frame").stop().slideUp();
				}
			});
		}
	});
	// * ========== header : window resize
});