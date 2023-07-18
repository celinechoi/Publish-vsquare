/*+-----------------------------------+
| Author: JS |
| Title : HRDIKoreatech Sub Script |
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
	$jsToggle.off().on("click", function () {
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
	var categoryList,
			overallTarget,
			separateTargets,
			separateTargetsChk;
	// 로딩시 큰 체크박스 클릭되었을 경우,
	$("input[class='overhead']").each(function(loadingI, loadingV){
		overallTarget = $(loadingV).parent().next().find("input[class='overall']"), // 중간
		separateTargets = $(loadingV).parent().next().find("input[class='separate']"); // 작은
		if($(loadingV).is(":checked")) {
			$(overallTarget).prop("checked", true); // 중간
			$(separateTargets).prop("checked", true); // 작은
			// @ 2depth drop
			$(loadingV).parents("li:eq(0)").find(".category-list").stop().slideDown();
		} else {
			$(overallTarget).prop("checked", false); // 중간
			$(separateTargets).prop("checked", false); //작은
			// @ 2depth drop
			$(loadingV).parents("li:eq(0)").find(".category-list").stop().slideUp();
		}
	});
	// 각 작은, 중간 체크박스
	$(".category-list").each(function (i, v){
		$(v).find("input[class='separate']").on("click", function (){
			optionTotal = $(v).find("input[class='separate']").length,
			optionCheck = $(v).find("input[class='separate']:checked").length;
			if(optionTotal !== optionCheck){
				$(v).find("input[class='overall']").prop("checked", false);
			} else {
				$(v).find("input[class='overall']").prop("checked", true);
			}
		});
		$(v).find("input[class='overall']").on("click", function (){
			if($(v).find("input[class='overall']").is(":checked")) {
				$(v).find("input[class='separate']").prop("checked", true);
			} else {
				$(v).find("input[class='separate']").prop("checked", false);
			}

		});
	});
	// 작은 체크박스
	$("input[class='separate']").on("click", function (){
		categoryList = $(this).parents(".category-list");
		optionTotal = $(categoryList).find("input[class='separate']").length,
		optionCheck = $(categoryList).find("input[class='separate']:checked").length;
		if(optionTotal !== optionCheck) {
			$(categoryList).find("input[class='overall']").prop("checked", false); // 중간 체크박스
			$(categoryList).prev().find("input[class='overhead']").prop("checked", false); // 전체 체크박스
		} else {
			$(categoryList).find("input[class='overall']").prop("checked", true); // 중간 체크박스
			$(categoryList).prev().find("input[class='overhead']").prop("checked", true); // 전체 체크박스
		}
	});
	// 중간 체크박스
	$("input[class='overall']").each(function (mI, mVal){
		$(mVal).on("click", function(){
			categoryList = $(this).parents(".category-list");
			optionAllTotal = $(categoryList).find("input[class='overall']").length,
			optionAllCheck = $(categoryList).find("input[class='overall']:checked").length;
			if(optionAllTotal !== optionAllCheck) {
				$(categoryList).prev().find("input[class='overhead']").prop("checked", false);
			} else {
				$(categoryList).prev().find("input[class='overhead']").prop("checked", true);
			}
		});
	});
	// 전체 체크박스
	$("input[class='overhead']").each(function (allI, allVal){ // 전체
		$(allVal).on("click", function (){
			overallTarget = $(allVal).parent().next().find("input[class='overall']"), // 중간
			separateTargets = $(allVal).parent().next().find("input[class='separate']"); // 작은
			if($(this).is(":checked")) {
				$(overallTarget).prop("checked", true); // 중간
				$(separateTargets).prop("checked", true); // 작은
				// @ 2depth drop
				$(this).parents("li:eq(0)").find(".category-list").stop().slideDown();
			} else {
				$(overallTarget).prop("checked", false); // 중간
				$(separateTargets).prop("checked", false); //작은
				// @ 2depth drop
				$(this).parents("li:eq(0)").find(".category-list").stop().slideUp();
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
			if (window.innerWidth < 1025) {
				if($(".js-grid-change")){
					$this.removeClass("list-on");
					$(".js-grid-change").removeClass("list-transform");
				}
			} else {

			}
		});
	});
	// * List Type Change END ==========
	// * ========== Click More Btn
	$(".js-more-btn").on("click", function(){
		var thisFence = $(this).parents(".list-table-ellipsis");
				thisParent = $(this).parent();
		if(!$(thisFence).hasClass("unfold")){
			$(thisFence).addClass("unfold");
			$(thisParent).addClass("unfold-frame");
			$(thisParent).find(".js-more-btn").children().removeClass("icon-chevron_down").addClass("icon-chevron_up");
			$(thisParent).find(".js-more-btn").contents()[0].textContent = "접기 ";
		} else {
			$(thisFence).removeClass("unfold");
			$(thisParent).removeClass("unfold-frame");
			$(thisParent).find(".js-more-btn").children().removeClass("icon-chevron_up").addClass("icon-chevron_down");
			$(thisParent).find(".js-more-btn").contents()[0].textContent = "더보기 ";
		}
	});
	// * Click More Btn ========== 
	// * ========== Sub Slider
	// @ 클린룸 슬라이드
	if ($(".box-clean__slider .swiper-slide").length > 1) {
		$(".box-clean__slider--prev.swiper-button-prev, .box-clean__slider--next.swiper-button-next").show();
		var visualSlider = new Swiper(".box-clean__slider", {
			autoplay: {
				delay: 4000,
			},
			autoplay: false,
			speed: 600,
			loop: true,
			slidesPerView: 1,
			pagination: {
				el: ".box-clean__slider-pagination.swiper-pagination",
				clickable: true,
			},
			navigation: {
				prevEl: ".box-clean__slider--prev.swiper-button-prev",
				nextEl: ".box-clean__slider--next.swiper-button-next"
			}
		});
	} else {
		$(".box-clean__slider--prev.swiper-button-prev, .box-clean__slider--next.swiper-button-next, .box-clean__slider-pagination.swiper-pagination").hide();
	}
	// @ 시설안내 슬라이드
	if ($(".box-facility__slider .swiper-slide").length > 1) {
		var visualSlider = new Swiper(".box-facility__slider", {
			autoplay: {
				delay: 4000,
			},
			// autoplay: false,
			speed: 600,
			loop: true,
			slidesPerView: 1,
			pagination: {
				el: ".box-facility__slider-pagination.swiper-pagination",
				clickable: true,
			}
		});
	} else {
		$(".box-facility__slider-pagination.swiper-pagination").hide();
	}
	// @ 나의강의실 슬라이드
	var $multiSlider = $('.notice__slider-frame');
	$multiSlider.find('.notice__slider').each(function(i){
		$(".notice__slider").eq(i).prev(".list-come__con--title").find(".fraction-remote").find(".swiper-pagination").addClass("type"+i);
		$(".notice__slider").eq(i).prev(".list-come__con--title").find(".fraction-remote").find("[class^='swiper-button']").addClass("type"+i);
		var slider  = new Swiper($(".notice__slider").eq(i), {
			slidesPerView: 1,
			loop: true,
			observer: true,
			observeParents: true,
			speed: 700, 
			autoplay: {
				delay: (i+1)*2000, 
				disableOnInteraction: false
			},
			pagination: {
				el: $(".notice__slider").eq(i).prev(".list-come__con--title").find(".fraction-remote").find(".swiper-pagination.type"+i),
				type: 'fraction'
			},
			navigation: {
				nextEl: $(".notice__slider").eq(i).prev(".list-come__con--title").find(".fraction-remote").find(".swiper-button-next.type"+i),
				prevEl: $(".notice__slider").eq(i).prev(".list-come__con--title").find(".fraction-remote").find(".swiper-button-prev.type"+i)
			}
		});
	});
	// * Sub Slider ==========
	// * ========== Scroll Fixed Tab
	// @상세내용, 학습목차 탭 fixed 기능
	if($('.js-fix-parent').length > 0){
		var $parentFix = Math.floor($('.js-fix-parent').offset().top);
		if($('#tabCon01').length > 0) {
			var $tabCon01 = Math.floor($('#tabCon01').offset().top),
			$tabCon02 = Math.floor($('#tabCon02').offset().top);
			// @스크롤시 fixed 되는 기능 + 해당 섹션 영역일 경우 스타일 on : application_detail.html
		}
		$(window).on('scroll', function () {
			$parentFix = Math.floor($('.js-fix-parent').offset().top);

			if($('#tabCon01').length > 0) {
				$tabCon01 = Math.floor($('#tabCon01').offset().top - 68),
				$tabCon02 = Math.floor($('#tabCon02').offset().top - 68);
				if ($(window).scrollTop() < $tabCon01) {
					$('.js-fix-tab>li').removeClass('now');
					$('.js-fix-tab>li').eq(0).addClass('now');
				} else if ($(window).scrollTop() > $tabCon01 && $(window).scrollTop() < $tabCon02) {
					$('.js-fix-tab>li').removeClass('now');
					$('.js-fix-tab>li').eq(0).addClass('now');
				} else if ($(window).scrollTop() > $tabCon02) {
					$('.js-fix-tab>li').removeClass('now');
					$('.js-fix-tab>li').eq(1).addClass('now');
				}
			}
			if ($(window).scrollTop() >= Number(178)) {
				$('.js-fix').addClass('fixed');
			} else {
				$('.js-fix').removeClass('fixed');
			}
			if($(window).scrollTop() >= Number($parentFix)) {
				$('.js-fix-tab').addClass('fixed');
			} else {
				$('.js-fix-tab').removeClass('fixed');
			}
		});
		$('.js-fix-tab>li>a').off('click').on('click', function (e) {
			$parentFix = $parentFix = Math.floor($('.js-fix-parent').offset().top),
			$tabCon01 = Math.floor($('#tabCon01').offset().top - 60),
			$tabCon02 = Math.floor($('#tabCon02').offset().top - 60);
			e.preventDefault();
			var $this = $(this);
			var $index = $this.parent().index();
			$('.js-fix-tab>li').removeClass();
			if ($index == 0) {
				$('html,body').animate({
					scrollTop: $tabCon01
				}, 500);
			} else if ($index == 1) {
				$('html,body').animate({
					scrollTop: $tabCon02
				}, 500);
			}
			// * Scroll Fixed Tab ==========
		});
	}
	// * Scroll Fixed Tab ==========
});