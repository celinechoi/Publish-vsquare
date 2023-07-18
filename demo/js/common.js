/*+-----------------------------------+
| Author: JS |
| Title : Common Script |
+-------------------------------------+*/
$(function(){
	var $windowW = $(window).outerWidth();
	var $this;
	// * ========== header search 
	if($(".js-search-show")){
		$(".js-search-show").next(".tm-search-show").css({ display: "none" });
		$(".js-search-show").on("click", function(){
			$(this).css({ display: "none" });
			$(this).next(".tm-search-show").fadeIn();
			return false;
		});
	}
	// 다른곳 누르면 검색창 사라지는 기능
	var $headerSearch = $(".header__search");
	$(document).on("click", $headerSearch, function (e) {
			if (e.target.id === "searchShow") {
					$headerSearch.find(".js-search-show").css({ display: "none" });
					$headerSearch.find(".tm-search-show").stop().fadeIn();
			} else if (!$(e.target).hasClass("tm-search-show") && !$(e.target).hasClass("js-option") && !$(e.target).hasClass("js-remove")) {
				$headerSearch.find(".js-search-show").css({ display: "block" });
				$headerSearch.find(".tm-search-show").css({ display: "none" });
			}
	});
	// tm 검색창 사라지는 기능
	$(".js-tm-search-cancel").on("click", function(){
		$(this).parent().hide();
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
			},
			slidesPerView: 6,
			// spaceBetween: 10,
			speed: 500,
			navigation: {
				prevEl: '.banner-list__control .banner-list__prev',
				nextEl: '.banner-list__control .banner-list__next',
			},
			breakpoints: {
				1248: {
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

	// * ========== Board Heart Mark
	// @ 하트 아이콘 클릭 기능 : 
	// index.html
	// process_list_v2.html, process_list_v3.html
	// board_gallery.html
	$(".js-hover-heart").find(".icon-custom-heart--bg, .icon-custom-heart").addClass("dis-none");
	$(".js-hover-heart").on("mouseenter focus", function () {
			$this = $(this);
			$this.find(".icon-custom-heart--bg, .icon-custom-heart").removeClass("dis-none");
			return false;
	});
	$(".js-hover-heart").on("mouseleave", function () {
			$this = $(this);
			$this.find(".icon-custom-heart--bg, .icon-custom-heart").addClass("dis-none");
			return false;
	});
	$(".js-hover-heart").css({ position: 'relative' });
	$(".icon-custom-heart--bg, .icon-custom-heart").on("click", function () {
			$this = $(this);
			if (!$this.hasClass("full")) {
					$this.addClass("full");
			} else {
					$this.removeClass("full");
			}
	});
	// * Board Heart Mark END ==========

	// * ========== Click Event
	$(".js-click").on("click", function(){
		if($(this).hasClass("on")) {
			$(this).removeClass("on");
		} else {
			$(this).addClass("on");
		}
	});
	// * Click Event END ==========

	// header : window size ==========
	$(".gnb-list__txt").each(function(z,titleVal){
		// console.log(z);
		// console.log($(titleVal).siblings(".depth2-list").children("li").length);
		if($(titleVal).siblings(".depth2-list").children("li").length > 0){
			// console.log($(this));
			$(this).addClass("there");
		} else {
			$(this).removeClass("there");
		}
	});
	if($windowW > 1024) { //pc
		$(".header-box").show();
		$(".gnb-list__txt.there").removeClass("now");
		$(".gnb-list__txt.there").siblings(".depth2-list").hide();
		$(".gnb-list").off("mouseenter").on("mouseenter", function(){
			$(".header-box__bg").stop().slideDown();
			$(".gnb-list__txt.there").siblings(".depth2-list").stop().fadeIn('fast');
		});
		$(".header").off("mouseleave").on("mouseleave", function(){
			$(".header-box__bg").stop().slideUp();
			$(".gnb-list__txt.there").siblings(".depth2-list").stop().fadeOut('fast');
		});
	} else { //tm
		$(".header-box").hide();
		$(".gnb-list").off("mouseenter");
		$(".header").off("mouseleave");
		$(".js-menu-show").off("click").on("click", function(){ // show tm menu 
			$this = $(this);
			console.log("size");
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
			if($this.hasClass("now")){
				$this.removeClass("now");
				$this.next(".depth2-list").stop().slideUp();
			} else {
				$(".gnb-list__txt.there").removeClass("now");
				$this.addClass("now");
				$(".depth2-list").stop().slideUp();
				$this.next(".depth2-list").stop().slideDown();
			}
		});
	}
	// * ========== header : window size

	// * ========== header : window resize
	$(window).on("resize", function(){
		$windowW = $(window).outerWidth();
		$("html, body").removeClass("page-style");
		if($windowW > 1024) { //pc
			$(".header-box").show();
			$(".gnb-list__txt.there").removeClass("now");
			$(".gnb-list__txt.there").siblings(".depth2-list").hide();
			$(".gnb-list").off("mouseenter").on("mouseenter", function(){
				$(".header-box__bg").stop().slideDown();
				$(".gnb-list__txt.there").siblings(".depth2-list").stop().fadeIn('fast');
			});
			$(".header").off("mouseleave").on("mouseleave", function(){
				$(".header-box__bg").stop().slideUp();
				$(".gnb-list__txt.there").siblings(".depth2-list").stop().fadeOut('fast');
			});
		} else { //tm
			$(".header-box").hide();
			$(".gnb-list").off("mouseenter");
			$(".header").off("mouseleave");
			$(".js-menu-show").off("click").on("click", function(){ // show tm menu 
				$this = $(this);
				console.log("resize");
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
				if($this.hasClass("now")){
					$this.removeClass("now");
					$this.next(".depth2-list").stop().slideUp();
				} else {
					$(".gnb-list__txt.there").removeClass("now");
					$this.addClass("now");
					$(".depth2-list").stop().slideUp();
					$this.next(".depth2-list").stop().slideDown();
				}
			});
		}
	});
	// * ========== header : window resize
});