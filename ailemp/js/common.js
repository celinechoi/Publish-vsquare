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
				1400: {
					slidesPerView: 5,
					spaceBetween: 20
				},
				1024: {
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
	/*var tallestElement = null;
	var $item = $('.depth2-list');

	$item.each(function() {
		var elementHeight = $(this).height();

		if (!tallestElement || elementHeight > tallestElement.height()) {
			tallestElement = $(this);
		}

	});
	var bgHeight = tallestElement.outerHeight();*/


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

	/*프로필 더보기*/
	$(".login-after").on("click", function (){
		if(!$(this).hasClass("flag")) {
			$(this).addClass("flag");
		} else {
			$(this).removeClass("flag");
		}
		$(this).next().toggle();
	});

	/*테블릿, 모바일 2depth 구현*/
	$(".tm-depth2 .title").on("click", function (){
		if(!$(this).hasClass("flag")) {
			$(this).addClass("flag");
			$(this).parents("header").addClass("depth-active");
		} else {
			$(this).removeClass("flag");
			$(this).parents("header").removeClass("depth-active");
		}
		$(this).next().toggle();
	});

	/*테블릿, 모바일 3depth 구현*/
	$(".board__tab-frame .title").on("click", function (){
		if(!$(this).parents(".board__tab-frame").hasClass("flag")) {
			$(this).parents(".board__tab-frame").addClass("flag");
		} else {
			$(this).parents(".board__tab-frame").removeClass("flag");
		}
		$(this).parents(".board__tab-frame").find(".board__tab").toggle();
	});

	/*2depth 구현*/
	$(".gnb-list__txt.there").removeClass("now");
	/*$(".gnb-list__txt.there").siblings(".depth2-list").hide();*/
	/*gnb 반응형*/
	var tabTitle,
		$tabTitle,
		tabCon,
		$tabFrame,
		$tabConFirst,
		scrollFooterBottom,
		$floating,
		thisTop,
		footerHei,
		$parentFix;
	var $top = $(".floating-top");
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
	if($windowW > 1280) { //pc
		/*sub-visual height*/
		if($(".tm-depth2").length > 0) {
			$(".sub-visual").css({height: '320px', paddingTop: '120px'});
			/*3depth*/
			$(".sub-visual .board__tab").css({display: 'flex'});
		} else {
			$(".sub-visual").css({height: '260px', paddingTop: '60px'});
		}
		/*2depth focus*/
		$(".gnb-list>li").off("mouseenter").on("mouseenter", function(){
			/*$(".header-box__bg").stop().slideDown();*/
			$(".gnb-list>li").removeClass("on");
			$(this).addClass("on");
			/*$(this).find(".depth2-list").stop().fadeIn('fast');*/
		});
		$(".gnb-list>li").off("mouseleave").on("mouseleave", function(){
			/*$(".header-box__bg").stop().slideUp();*/
			$(".gnb-list>li").removeClass("on");
			/*$(this).find(".depth2-list").stop().fadeOut('fast');*/
		});
	}  else if ($windowW < 1281) { //tablet
		/*sub-visual height*/
		if($(".tm-depth2").length > 0) {
			$(".sub-visual").css({height: '240px', paddingTop: '76px'})
		} else {
			$(".sub-visual").css({height: '188px', paddingTop: '24px'})
		}
			$(".gnb-list>li").off("mouseenter");
			$(".gnb-list>li.on .depth2-list").off("mouseleave");
			/*테블릿, 모바일 메뉴 탭*/
			tabTitle = document.querySelectorAll('.menu-tab li');
			$tabTitle = $('.menu-tab li');
			tabCon = document.querySelectorAll('.header-box__bottom .menu-box');
			for(let i = 0; i < tabTitle.length; i++) {
				tabTitle[i].setAttribute('data-title', 'tab'+i);
				tabCon[i].setAttribute('id', 'tab'+i);
				tabCon[i].classList.add('dis-none');
			}
			$tabFrame = $('.header-box__bottom');
			for(let z = 0; z < $tabFrame.length; z++) {
				$tabConFirst = $($tabFrame[z]).children('.menu-box')[0];
				$($tabConFirst).removeClass("dis-none");
			}
			$tabTitle.on('click',function () {
				$tabTitle.removeClass("on");
				$(this).addClass("on");
				$(this).closest("div").find(".menu-box").addClass('dis-none');
				let activeTab = $(this).attr("data-title");
				$("#" + activeTab).removeClass('dis-none');
			});
			/*테블릿, 모바일 메뉴 탭 끝*/

			$(".js-menu-show").off("click").on("click", function(){ // show tm menu
				$this = $(this);
				console.log($this);
				$this.parents(".header").find(".header-box").addClass("on");
				$("html, body").addClass("page-style");
			});
			$(".js-menu-hide").off("click").on("click", function(){ // hide tm menu
			$this = $(this);
			$this.parents(".header").find(".header-box").removeClass("on");
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
		} else if ($windowW < 768) { // mobile
		/*sub-visual height*/
		if($(".tm-depth2").length > 0) {
			$(".sub-visual").css({height: '234px', paddingTop: '100px'})
		} else {
			$(".sub-visual").css({height: '182px', paddingTop: '48px'})
		}
	}
	// * ========== header : window size

	/* alert box */
	$(".js-alert").on("click", function (){
		$(this).siblings(".js-alert-body").toggle();
	});

	/* chat bot */
	$(".chat-box").on("mouseenter", function (){
		$(this).addClass("on");
	});
	$(".chat-box").on("mouseleave", function (){
		$(this).removeClass("on");
	});
	$(window).on("scroll", function () {
		if($('.floating, .footer, .container, .chat-box').length > 0) {
			$floating = $(".floating");
			thisTop = $(this).scrollTop();
			footerHei = $('footer').outerHeight();
			$parentFix = $('.container').offset().top - 100;
			$childFix = $('.chat-box').offset().top - 100;
			scrollFooterBottom = $(document).height() - $(window).height() - footerHei;
			if ($(window).scrollTop() >= $parentFix) {
				$floating.addClass("fixed");
				setTimeout(function(){
					$(".chat-box").removeClass("on");
				},3000);
			} else {
				$floating.removeClass("fixed");
				$(".chat-box").addClass("on");
			}
			/*top button*/
			$windowW = $(window).outerWidth();
			if($windowW <= 1280) { //ta, mo
				if (thisTop >= 70) {
					if (thisTop >= scrollFooterBottom) {
						$top.addClass("no-fixed");
						$(".chat-box").addClass("no-fixed");
					} else {
						$top.removeClass("no-fixed");
						$(".chat-box").removeClass("no-fixed");
					}
					$top.stop().fadeIn();
				} else {
					/*console.log(thisTop);*/
					$top.stop().fadeOut();
				}
			}
		}
	});
	// * ========== header : window resize
	$(window).on("resize", function(){
		$windowW = $(window).outerWidth();
		$("html, body").removeClass("page-style");
		if($windowW > 1280) { //pc
			/*sub-visual height*/
			if($(".tm-depth2").length > 0) {
				$(".sub-visual").css({height: '320px', paddingTop: '120px'});
				/*3depth*/
				$(".sub-visual .board__tab").css({display: 'flex'});
			} else {
				$(".sub-visual").css({height: '260px', paddingTop: '60px'});
			}
			/*2depth focus*/
			$(".gnb-list>li").off("mouseenter").on("mouseenter", function(){
				/*$(".header-box__bg").stop().slideDown();*/
				$(".gnb-list>li").removeClass("on");
				$(this).addClass("on");
				/*$(this).find(".depth2-list").stop().fadeIn('fast');*/
			});
			$(".gnb-list>li").off("mouseleave").on("mouseleave", function(){
				/*$(".header-box__bg").stop().slideUp();*/
				$(".gnb-list>li").removeClass("on");
				/*$(this).find(".depth2-list").stop().fadeOut('fast');*/
			});
		}  else if ($windowW < 1281) { //tablet
			/*sub-visual height*/
			if($(".tm-depth2").length > 0) {
				$(".sub-visual").css({height: '240px', paddingTop: '76px'})
			} else {
				$(".sub-visual").css({height: '188px', paddingTop: '24px'})
			}
			$(".gnb-list>li").off("mouseenter");
			$(".gnb-list>li.on .depth2-list").off("mouseleave");
			/*테블릿, 모바일 메뉴 탭*/
			tabTitle = document.querySelectorAll('.menu-tab li');
			$tabTitle = $('.menu-tab li');
			tabCon = document.querySelectorAll('.header-box__bottom .menu-box');
			for(let i = 0; i < tabTitle.length; i++) {
				tabTitle[i].setAttribute('data-title', 'tab'+i);
				tabCon[i].setAttribute('id', 'tab'+i);
				tabCon[i].classList.add('dis-none');
			}
			$tabFrame = $('.header-box__bottom');
			for(let z = 0; z < $tabFrame.length; z++) {
				$tabConFirst = $($tabFrame[z]).children('.menu-box')[0];
				$($tabConFirst).removeClass("dis-none");
			}
			$tabTitle.on('click',function () {
				$tabTitle.removeClass("on");
				$(this).addClass("on");
				$(this).closest("div").find(".menu-box").addClass('dis-none');
				let activeTab = $(this).attr("data-title");
				$("#" + activeTab).removeClass('dis-none');
			});
			/*테블릿, 모바일 메뉴 탭 끝*/

			$(".js-menu-show").off("click").on("click", function(){ // show tm menu
				$this = $(this);
				console.log($this);
				$this.parents(".header").find(".header-box").addClass("on");
				$("html, body").addClass("page-style");
			});
			$(".js-menu-hide").off("click").on("click", function(){ // hide tm menu
				$this = $(this);
				$this.parents(".header").find(".header-box").removeClass("on");
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
		} else if ($windowW < 768) { // mobile
			/*sub-visual height*/
			if($(".tm-depth2").length > 0) {
				$(".sub-visual").css({height: '234px', paddingTop: '100px'})
			} else {
				$(".sub-visual").css({height: '182px', paddingTop: '48px'})
			}
		}
	});
	// * ========== header : window resize

	//모바일에서 풀사이징 자동화
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	//기간 인풋
	$('.date-input').on('input', function() {
		var input = $(this).val();
		var inputConditions = input.replace(/[^0-9.]/g, ''); // 숫자와 점 이외의 문자 제거

		// YYYY.MM.DD 형식으로 변환
		var datePart = inputConditions.substring(0, 10); // 년도, 월, 일 부분만 가져오고 그 외 자르기
		var formattedInput = datePart.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');

		$(this).val(formattedInput);

	});

	//컨텐츠 탭(카테고리) 버튼
	$('.tab-box').find('.item').on('click', function (e){
		var jThis = $(this);

		$('.tab-box').find('.item').removeClass('current');
		jThis.addClass('current');

	});

	//학습자 변경 셀렉트 박스
	$('.learner-current').on('click', function() {
		var jThis = $(this);
		var jThisParent = jThis.parents('.learner-select');

		jThisParent.toggleClass('open');

	});

	//금액 관련 인풋 자동 콤마
	$('.input-amount').on('input', function() {
		var input = $(this).val();

		// 숫자만
		var sanitizedInput = input.replace(/[^0-9]/g, '');

		// 4자리 이상일 때 콤마 추가
		if (sanitizedInput.length >= 4) {
			var formattedInput = addCommas(sanitizedInput);

			$(this).val(formattedInput);

		} else {

			$(this).val(sanitizedInput);

		}
	});

	// 콤마 추가 함수
	function addCommas(number) {
		var parts = number.toString().split('.');

		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		return parts.join('.');
	}

	/*heart*/
	$(".icon-custom-heart").on("click", function () {
		$this = $(this);
		if (!$this.hasClass("full")) {
			$this.addClass("full");
		} else {
			$this.removeClass("full");
		}
	});
});