/*+-----------------------------------+
| Author: JS |
| Title : DEMO Sub Script |
+-------------------------------------+*/
$(function(){
	var $this;
	// * ========== Drop Box
	// @board FAQ 드롭박스 : board_faq.html
	// @sidebar gnb 메뉴 드롭박스 : process_list_v3.html
	var $dropBoxList = $(".js-drop> li");
	$(".js-drop-con").hide();
	$($dropBoxList).each(function(i, v){
		// if(i == 0){
		// 	$(v).addClass("on");
		// 	$(v).find(".js-drop-con").stop().slideDown();
		// }
		if($(v).hasClass("on")){
			$(v).find(".js-drop-con").stop().slideDown();
		}
		$(v).find(".js-drop-title").on("click", function(){
			$($dropBoxList).find(".js-drop-con").stop().slideUp();
			if($(this).parent().hasClass("on")){
				$($dropBoxList).removeClass("on");
				$(this).parent().removeClass("on");
				$(this).next(".js-drop-con").stop().slideUp();
			} else {
				$($dropBoxList).removeClass("on");
				$(this).parent().addClass("on");
				$(this).next(".js-drop-con").stop().slideDown();
			}
		});
	});
	// * Drop Box END ==========
	// * ========== Single Drop Box
	// @카테고리 드롭 박스 : process_list_v2.html
	// @상세검색 드롭 박스 + 태블릿 3depth : process_list_v3.html
	var $jsToggle = $(".js-toggle"),
	toggleCon = $jsToggle.siblings(".js-toggle-con");
	$jsToggle.css({ cursor: "pointer" });
	if(!$(toggleCon).hasClass("filter-fence__flexible")){
		$(this).hide();
	} else {
		$(this).show();
	}
	$jsToggle.on("click", function () {
		toggleCon = $(this).siblings(".js-toggle-con");
		if (!$(this).hasClass("on")) {
			$(this).addClass("on");
			$(toggleCon).stop().slideDown();
		} else {
			$(this).removeClass("on");
			$(toggleCon).stop().slideUp();
		}
	});
	// $(window).on("resize", function(){
	// 	if (window.innerWidth < 1249) { // tm
	// 		if($("filter-fence__flexible")){
	// 			$(".filter-fence__flexible").show();
	// 		} 
	// 	} else { // pc
	// 		if($("filter-fence__flexible")){
	// 			$(".filter-fence__flexible").();
	// 		} 
	// 	}
	// });
	// if (window.innerWidth < 1249) { // tm
	// 	if($("filter-fence__flexible")){
	// 		$(".filter-fence__flexible").show();
	// 	} 
	// }
	// * Single Drop Box END ==========
	// * ========== Board Edit Box
	// @수정 삭제 드롭박스
	$(".js-edit").on("click", function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(this).css({ color: "#000" });
			$(this).next(".board__detail-show-box").stop().slideDown();
		} else {
			$(this).removeClass("on");
			$(this).css({ color: "#9e9e9e" });
			$(this).next(".board__detail-show-box").stop().slideUp();
		}
	});
	// * Board Edit Box END ==========
	// * ========== Member Tab 
	// @비밀번호 찾기 탭 : member_findpwd.html
	$(".js-member-tab>li[data-index='0']").addClass("now");
	$(".js-member-con").hide();
	$(".js-member-con[data-num='0']").show();
	$(".js-member-tab>li").on("click", function(){
		$this = $(this);
		if($this.hasClass("now")){
		} else {
			$(".js-member-tab>li").removeClass("now");
			$this.addClass("now");
		}
		$(".js-member-con").each(function(z,vv){
			if($this.data("index") == $(vv).data("num")) {
				$(vv).fadeIn()
			} else {
				$(vv).hide();
			}
		});
	});
	// * Member Tab END ==========
	// * ========== All Checkbox
	// @약관동의 체크박스 : member_sign_up.html
	// @카테고리 필터 체크박스 : process_list_v2.html
	var optionTotal = $("input.separate").length, 
	optionCheck = $("input.separate:checked").length;
	if(optionTotal !== optionCheck){
		$("input.overall").prop("checked", false);
	} else {
		$("input.overall").prop("checked", true);
	} 
	$(".js-all-chkbox").each(function (i, v){
		
		optionTotal = $(v).find("input.separate").length, 
		optionCheck = $(v).find("input.separate:checked").length;
		if(optionTotal !== optionCheck){
			$(v).find("input.overall").prop("checked", false);
		} else {
			$(v).find("input.overall").prop("checked", true);
		}
		$(v).find("input.separate").on("click", function (){
			
			optionTotal = $(v).find("input.separate").length, 
			optionCheck = $(v).find("input.separate:checked").length;
			if(optionTotal !== optionCheck){
				$(v).find("input.overall").prop("checked", false);
			} else {
				$(v).find("input.overall").prop("checked", true);
			}
		});
		$(v).find("input.overall").on("click", function (){
			var wholeParent = $(this).parents('.js-all-chkbox');
			if($(this).is(":checked")) {
				$(wholeParent).find("input.separate").prop("checked", true);
			} else {
				$(wholeParent).find("input.separate").prop("checked", false);
			} 
		});
 	});
	//  single 일때, 아래 주석 참고
	// var total = $("input.separate").length;
	// var checked = $("input.separate:checked").length;
	// if(total !== checked) {
	// 		$("input.overall").prop("checked", false);
	// 	} else {
	// 		$("input.overall").prop("checked", true);
	// 	} 
	// $("input.overall").click(function() {
	// 	if($("input.overall").is(":checked")) {
	// 		$("input.separate").prop("checked", true);
	// 	} else {
	// 		// console.log("no chek");
	// 		$("input.separate").prop("checked", false);
	// 	}
	// });
	// $("input.separate").click(function() {
	// 	total = $("input.separate").length,
	// 	checked = $("input.separate:checked").length;
	// 	if(total !== checked) {
	// 		$("input.overall").prop("checked", false);
	// 	} else {
	// 		$("input.overall").prop("checked", true);
	// 	} 
	// });
	// * All Checkbox END ==========

	// * ========== Click Remove Bookmark
	// @북마크 아이콘 기능 : mypage_bookmark.html 
	$(".js-bookmark").on("click", function(){
		const confirmAlert = confirm("북마크를 삭제하시겠습니까?");
		if(confirmAlert == true) {
			$(this).removeClass("icon-bookmark");	
			$(this).addClass("icon-bookmark_outline");
		} else {
			$(this).removeClass("icon-bookmark_outline");
			$(this).addClass("icon-bookmark");	
		}
	});
	// * Click Remove Bookmark END ==========

	// * ========== Filter Page Responsive
	// @sidebar 필터 반응형 : process_list.html
	var $jsFilter = $(".js-filter"),
			$jsFilterPage = $(".js-filter-page");
	fliterPage($jsFilter, $jsFilterPage);
	function fliterPage($filter, $page) {
		$filter.on("click", function () {
			if (window.innerWidth < 1025) { // tm
				$page.addClass("open");
				$("html, body").addClass("page-style");
			} else { // pc
				$page.removeClass("open");
				$("html, body").removeClass("page-style");
			}
			$(window).resize(function () {
				$page.removeClass("open");
			});
		});
	}
	$(".js-filter-hide").on("click", function(){
		$jsFilterPage.removeClass("open");
		$("html, body").removeClass("page-style");
	});
	// * Filter Page Responsive END ==========
	// * ========== List Type Change 
	// @리스트 및 바둑판 타입 변경 기능 : process_list.html
	$(".js-grid").on("click", function(){
		$this = $(this);
		if($this.hasClass("list-on")){
			$this.removeClass("list-on");
			$(".js-grid-change").removeClass("list-transform");
		} else {
			$(this).addClass("list-on");
			$(".js-grid-change").addClass("list-transform");
		}
		$(window).resize(function(){
			if (window.innerWidth < 1025) { // tm
				if($(".js-grid-change")){
					$this.removeClass("list-on");
					$(".js-grid-change").removeClass("list-transform");
				}
			} else {

			}
		});
	});
	// * List Type Change END ==========
	// * ========== Scroll Fixed Tab
	// @스크롤시 fixed 되는 기능 + 해당 섹션 영역일 경우 스타일 on : process_detail.html
	if($('.js-fix-parent').length > 0){
		var $parentFix = $('.js-fix-parent').offset().top;
		var $section01 = $('#section01').offset().top;
		var $section02 = $('#section02').offset().top;
		var $section03 = $('#section03').offset().top;
		// var $scrollTop = $(window).scrollTop() + 1;
		// $(window).scrollTop($scrollTop);
		$(window).on('scroll', function () {
			if ($(window).scrollTop() >= $parentFix) {
				$('.js-fix').addClass('fixed');
			} else {
				$('.js-fix').removeClass('fixed');
			}
			if ($(window).scrollTop() < $section01) {
				$('.js-fix>li').removeClass('now');
				$('.js-fix>li').eq(0).addClass('now');
			} else if ($(window).scrollTop() > $section01 && $(window).scrollTop() < $section02) {
				$('.js-fix>li').removeClass('now');
				$('.js-fix>li').eq(1).addClass('now');
			} else if ($(window).scrollTop() > $section02 && $(window).scrollTop() < $section03) {
				$('.js-fix>li').removeClass('now');
				$('.js-fix>li').eq(2).addClass('now');
			} 
			// else if ($(window).scrollTop() > $section03) {
			// 	$('.js-fix li').removeClass('now');
			// 	$('.js-fix li').eq(2).addClass('now');
			// } 
		});
		$('.js-fix>li>a').on('click', function (e) {
			$parentFix = $('.js-fix-parent').offset().top;
			$section01 = $('#section01').offset().top - 85;
			$section02 = $('#section02').offset().top - 85;
			$section03 = $('#section03').offset().top - 85;
			e.preventDefault();
			var $this = $(this);
			var $index = $this.parent().index();
			$('.js-fix li').removeClass();
			if ($index == 0) {
				$('html,body').animate({
					scrollTop: $section01
				}, 500);
			} else if ($index == 1) {
				$('html,body').animate({
					scrollTop: $section02
				}, 500);
			} else if ($index == 2) {
				$('html,body').animate({
					scrollTop: $section03
				}, 500);
			} 
			// * Scroll Fixed Tab ==========
		});
	}
	// @스크롤시 fixed 되는 기능 + 해당 섹션 영역일 경우 스타일 on : systems_guide.html
	if($('.js-guide-fix').length > 0){
		// var $scrollTop = $(window).scrollTop() + 1;
		// $(window).scrollTop($scrollTop);
		$(window).on('scroll', function () {
			// if ($(window).scrollTop() > 0) {
			// 	$('.js-guide-fix').addClass('fixed');
			// } else {
			// 	$('.js-guide-fix').removeClass('fixed');
			// }
			var $guideFixTop = $('.js-guide-fix').offset().top;
			var $title01Top = $('#title01').offset().top - 65;
			var $title02Top = $('#title02').offset().top - 65;
			var $title03Top = $('#title03').offset().top - 65;
			var $title04Top = $('#title04').offset().top - 65;
			var $title05Top = $('#title05').offset().top - 65;
			var $title06Top = $('#title06').offset().top - 65;
			var $title07Top = $('#title07').offset().top - 65;
			var $title08Top = $('#title08').offset().top - 65;
			var $scrollBottom = $(document).height() - $(window).height();
			if ($(window).scrollTop() > $title01Top && $(window).scrollTop() < $title02Top) {
				$('.js-guide-menu>li').removeClass('now');
				$('.js-guide-menu>li').eq(0).addClass('now');
			} else if ($(window).scrollTop() > $title02Top && $(window).scrollTop() < $title03Top) {
				$('.js-guide-menu>li').removeClass('now');
				$('.js-guide-menu>li').eq(1).addClass('now');
			} else if ($(window).scrollTop() > $title03Top && $(window).scrollTop() < $title04Top) {
				$('.js-guide-menu>li').removeClass('now');
				$('.js-guide-menu>li').eq(2).addClass('now');
			} else if ($(window).scrollTop() > $title04Top && $(window).scrollTop() < $title05Top) {
				$('.js-guide-menu>li').removeClass('now');
				$('.js-guide-menu>li').eq(3).addClass('now');
			} else if ($(window).scrollTop() > $title05Top && $(window).scrollTop() < $title06Top) {
				$('.js-guide-menu>li').removeClass('now');
				$('.js-guide-menu>li').eq(4).addClass('now');
			} else if ($(window).scrollTop() > $title06Top && $(window).scrollTop() < $title07Top) { // 폼
				$('.js-guide-menu>li').removeClass('now');
				$('.js-guide-menu>li').eq(5).addClass('now');
			} else if ($(window).scrollTop() > $title07Top && $(window).scrollTop() < $scrollBottom) { // 리스트
				$('.js-guide-menu>li').removeClass('now');
				$('.js-guide-menu>li').eq(6).addClass('now');
			} else if ($(window).scrollTop() >= $scrollBottom && $(window).scrollTop() < $title08Top){ // 팝업
				$('.js-guide-menu>li').removeClass('now');
				$('.js-guide-menu>li').eq(7).addClass('now');
			} else if ($(window).scrollTop()<=0){ // 영역X
				$('.js-guide-menu>li').removeClass('now');
			}
			// else if ($(window).scrollTop() > $title03) {
			// 	$('.js-fix li').removeClass('now');
			// 	$('.js-fix li').eq(2).addClass('now');
			// } 
		});
		$('.js-guide-menu>li>a').on('click', function (e) {
			$guideFixTop = $('.js-guide-fix').offset().top;
			$title01Top = $('#title01').offset().top - 64;
			$title02Top = $('#title02').offset().top - 64;
			$title03Top = $('#title03').offset().top - 64;
			$title04Top = $('#title04').offset().top - 64;
			$title05Top = $('#title05').offset().top - 64;
			$title06Top = $('#title06').offset().top - 64;
			$title07Top = $('#title07').offset().top - 64;
			$title08Top = $('#title08').offset().top - 64;
			$scrollBottom = $(document).height() - $(window).height();
			e.preventDefault();
			var $this = $(this);
			var $index = $this.parent().index();
			if ($index == 0) {
				$('html,body').animate({
					scrollTop: $title01Top
				}, 500);
			} else if ($index == 1) {
				$('html,body').animate({
					scrollTop: $title02Top
				}, 500);
			} else if ($index == 2) {
				$('html,body').animate({
					scrollTop: $title03Top
				}, 500);
			} else if ($index == 3) {
				$('html,body').animate({
					scrollTop: $title04Top
				}, 500);
			} else if ($index == 4) {
				$('html,body').animate({
					scrollTop: $title05Top
				}, 500);
			} else if ($index == 5) {
				$('html,body').animate({
					scrollTop: $title06Top
				}, 500);
			} else if ($index == 6) {
				$('html,body').animate({
					scrollTop: $title07Top
				}, 500);
			} else if ($index == 7) {
				$('html,body').animate({
					scrollTop: $scrollBottom
				}, 500);
			}
		});
	}
	// * Scroll Fixed Tab ==========
	var jsNum = $(".js-num>li").length;
	$(".js-num-count").append(jsNum);
});