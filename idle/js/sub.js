/*+-----------------------------------+
| Author: JS |
| Title : Sub Script |
+-------------------------------------+*/
$(function(){
	// * ========== Sub Slider
	if($(".sub-main-box__slider .swiper-slide").length > 1){
		var $subMainSwiper = new Swiper(".sub-main-box__slider", {
			loop: true,
			autoplay: true,
			pagination: {
				el: ".sub-main-box__slider .swiper-pagination",
			}
		})
	} else {
		$(".sub-main-box__slider .swiper-pagination").hide();
	}
	$(".js-drop-down").on("click", function(){
		if($(".js-drop-down").hasClass("on")){
			$(this).removeClass("on");
			if($(this).next(".shortcuts-box__list")) {
				$(this).next(".shortcuts-box__list").stop().slideUp();
			}
			if($(this).next(".drop-menu__list")) {
				$(this).next(".drop-menu__list").stop().slideUp();
			}
		} else {
			$(this).addClass("on");
			if($(this).next(".shortcuts-box__list")){
				$(this).next(".shortcuts-box__list").stop().slideDown();
			}
			if($(this).next(".drop-menu__list")){
				$(this).next(".drop-menu__list").stop().slideDown();
			}
		}
		
	});
	// * Sub Slider ==========
	// * ========== Board Drop Box
	var $dropBoxList = $(".board__drop-box> li");
	$($dropBoxList).each(function(i, v){
		if(i == 0){
			$(v).addClass("on");
			$(v).find(".board__drop-con").stop().slideDown();
		}
		$(v).find(".board__drop-title").on("click", function(){
			$($dropBoxList).find(".board__drop-con").stop().slideUp();
			if($(this).parent().hasClass("on")){
				console.log("있음");
				$($dropBoxList).removeClass("on");
				$(this).parent().removeClass("on");
				$(this).next(".board__drop-con").stop().slideUp();
			} else {
				console.log("없음");
				$($dropBoxList).removeClass("on");
				$(this).parent().addClass("on");
				$(this).next(".board__drop-con").stop().slideDown();
			}
		});
	});
	// * Board Drop Box ==========
	// * ========== Board Edit Box
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
	// * Board Edit Box ==========
	// * ========== Board Heart Mark
	$(".js-hover-heart").find(".icon__heart").addClass("dis-none");
	$(".js-hover-heart").on("mouseenter", function () {
			$this = $(this);
			$this.find(".icon__heart").removeClass("dis-none");
			return false;
	});
	$(".js-hover-heart").on("mouseleave", function () {
			$this = $(this);
			$this.find(".icon__heart").addClass("dis-none");
			return false;
	});
	$(".js-hover-heart").css({ position: 'relative' });
	$(".icon__heart").on("click", function () {
			$this = $(this);
			if (!$this.hasClass("full")) {
					$this.addClass("full");
			} else {
					$this.removeClass("full");
			}
	});
	// * Board Heart Mark ==========
	// * ========== All Checkbox
	// @약관동의 체크박스
	// @수강신청 필터 체크박스
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
			console.log("***");
			optionTotal = $(v).find("input.separate").length, 
			optionCheck = $(v).find("input.separate:checked").length;
			if(optionTotal !== optionCheck){
				$(v).find("input.overall").prop("checked", false);
			} else {
				$(v).find("input.overall").prop("checked", true);
			}
		});
		$(v).find("input.overall").on("click", function (){
			console.log("all");
			if($(v).find("input.overall").is(":checked")) {
				$(v).find("input.separate").prop("checked", true);
			} else {
				$(v).find("input.separate").prop("checked", false);
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

	// * All Checkbox ==========

	// * ========== Table Drop Down 
	$(".js-table-con, .js-list-con").hide();
	$(".js-table-drop").on("click", function(){
		var thisTableCon = $(this).parent("tr").next().children(".js-table-con");
		var thisListCon = $(this).parent("li").next().children(".js-list-con");
		if($(this).hasClass("on")){
			if($(thisTableCon)){
				$(thisTableCon).stop().slideUp("fast");
			}
			if($(thisListCon)){
				$(thisListCon).stop().slideUp("fast");
			}
			$(this).removeClass("on");
		} else {
			if($(thisTableCon)){
				$(thisTableCon).stop().slideDown("fast");
			}
			if($(thisListCon)){
				$(thisListCon).stop().slideDown("fast");
			}
			$(this).addClass("on");
		}
	});
	// * Table Drop Down  ==========
});