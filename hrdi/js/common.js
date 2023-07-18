/*+-----------------------------------+
| Author: JS |
| Title : Common Script |
+-------------------------------------+*/
$(function(){
	var $windowW = $(window).outerWidth();
	var $this;
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

	// * ========== Board Heart Mark
	// @ 하트 아이콘 클릭 기능 : 
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
	$(".js-click").off().on("click", function(){
		console.log("click?");
		if($(this).hasClass("on")) {
			$(this).removeClass("on");
		} else {
			$(this).addClass("on");
		}
	});
	// * Click Event END ==========

	// ========== window size
	// @ header, footer
	// * header
	$(".gnb-list__txt").each(function(z,titleVal){
		if($(titleVal).siblings(".depth2-list").children("li").length > 0){
			$(this).addClass("there");
		} else {
			$(this).removeClass("there");
		}
	});
	if($windowW > 1024) { //pc
		// * header
		$(".gnb-list__txt.there").removeClass("now");
		$(".gnb-list__txt.there").siblings(".depth2-list").hide();
		$(".header__bottom").show();
		$(".gnb-list").off("mouseenter").on("mouseenter", function(){
			$(".header__bottom--bg, .header__dim").stop().fadeIn();
			$(".gnb-list__txt.there").siblings(".depth2-list").stop().fadeIn('fast');
		});
		$(".header__bottom").off("mouseleave").on("mouseleave", function(){
			$(".header__bottom--bg, .header__dim").stop().fadeOut();
			$(".gnb-list__txt.there").siblings(".depth2-list").stop().fadeOut('fast');
		});
		// whole menu
		$(".js-whole-menu").off("click").on("click", function(){
			$("html, body").addClass("page-style");
			$(".js-whole-page").addClass("open");
			$('.js-whole-page, .site-map__dim').stop().fadeIn(300, function () {
				$('.site-map__page').stop().slideDown(300);
			});
		});
		$(".js-whole-close").off("click").on("click", function(){
			$("html, body").removeClass("page-style");
			$(".js-whole-page").removeClass("open");
			$(".site-map__page").stop().slideUp(300, function () {
				$('.js-whole-page, .site-map__dim').stop().fadeOut(300);
			});
		});
		// * footer
		$(".ars-frame__list-frame").show();
	} else { //tm
		// * header
		$(".gnb-list").off("mouseenter");
		$(".header__bottom").off("mouseleave");
		$(".header__bottom").hide();
		$(".js-menu-show").off("click").on("click", function(){ // show tm menu 
			$this = $(this);
			$(".header__bottom").fadeIn();
			$("html, body").addClass("page-style");
		});
		$(".js-menu-hide").off("click").on("click", function(){ // hide tm menu 
			$this = $(this);
			$(".header__bottom").hide();
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
		// * footer
		$(".ars-frame__list-frame").hide();
		$(".ars-frame__txt").on("click", function(){
			$this = $(this);
			if($this.hasClass("on")){
				$this.removeClass("on");
				$this.next(".ars-frame__list-frame").stop().slideUp();
			} else {
				$this.addClass("on");
				$this.next(".ars-frame__list-frame").stop().slideDown();
			}
		});
	}
	// * window size ==========

	// * ========== window resize
	// @ header, footer
	$(window).on("resize", function(){
		$windowW = $(window).outerWidth();
		$("html, body").removeClass("page-style");
		$(".js-whole-page").removeClass("open").hide();
		if($windowW > 1024) { //pc
			// * header
			$(".gnb-list__txt.there").removeClass("now");
			$(".gnb-list__txt.there").siblings(".depth2-list").hide();
			$(".header__bottom").show();
			$(".gnb-list").off("mouseenter").on("mouseenter", function(){
				$(".header__bottom--bg, .header__dim").stop().fadeIn();
				$(".gnb-list__txt.there").siblings(".depth2-list").stop().fadeIn('fast');
			});
			$(".header__bottom").off("mouseleave").on("mouseleave", function(){
				$(".header__bottom--bg, .header__dim").stop().fadeOut();
				$(".gnb-list__txt.there").siblings(".depth2-list").stop().fadeOut('fast');
			});
			// whole menu
			$(".js-whole-menu").off("click").on("click", function(){
				$("html, body").addClass("page-style");
				$(".js-whole-page").addClass("open");
				$('.js-whole-page, .site-map__dim').stop().fadeIn(300, function () {
					$('.site-map__page').stop().slideDown(300);
				});
			});
			$(".js-whole-close").off("click").on("click", function(){
				$("html, body").removeClass("page-style");
				$(".js-whole-page").removeClass("open");
				$(".site-map__page").stop().slideUp(300, function () {
					$('.js-whole-page, .site-map__dim').stop().fadeOut(300);
				});
			});
			// * footer
			$(".ars-frame__list-frame").show();
			if($(".ars-frame__txt").hasClass("on")) {
				$(".ars-frame__txt").removeClass("on");
			}
		} else { //tm
			// * header
			$(".gnb-list").off("mouseenter");
			$(".header__bottom").off("mouseleave");
			$(".header__bottom").hide();
			$(".js-menu-show").off("click").on("click", function(){ // show tm menu 
				$this = $(this);
				$(".header__bottom").fadeIn();
				$("html, body").addClass("page-style");
			});
			$(".js-menu-hide").off("click").on("click", function(){ // hide tm menu 
				$this = $(this);
				$(".header__bottom").hide();
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
			// * footer
			if($(".ars-frame__txt").hasClass("on")) {
				$(".ars-frame__txt").removeClass("on");
			} else {
				$(".ars-frame__list-frame").hide();
				$(".ars-frame__txt").off("click").on("click", function(){
					$this = $(this);
					if($this.hasClass("on")){
						$this.removeClass("on");
						$this.next(".ars-frame__list-frame").stop().slideUp();
					} else {
						$this.addClass("on");
						$this.next(".ars-frame__list-frame").stop().slideDown();
					}
				});
			}
		}
	});
	// * ========== window resize
});