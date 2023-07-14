/*+-----------------------------------+
| Author: JS |
| Title : DEMO Sub Script |
+-------------------------------------+*/
$(function(){
	var $this;
	// @i_recruit_support_status_company 지원자리스트
	$(".js-apply").on("click", function(){
		$this = $(this);
		if(!$this.hasClass("on")) {
			$this.addClass("on");
		} else {
			$this.removeClass("on");
		}
		$this.next().slideToggle();
	});
	// @c_mental_test 직업심리검사(워크넷) 결과 및 팝업
	$('.job').hide();
	$('.survey-result').on('click',function (e){
		$('.job').show();
	});
	// 팝업
	$('.job-guide__btn').on('click', function (e){
		var activeBtn = $(this).attr('data-tab');

		$('#' + activeBtn).addClass('active');
		$('body').addClass('none-scroll');
	});
	$('.job-check').on('click', function (e){
		$('.popup-recommend').addClass('active');
		$('body').addClass('none-scroll');
	});
	//팝업 닫기
	$('.close-btn, .popup-bg').on('click', function (e){
		$('.popup-wrap').removeClass('active');
		$('body').removeClass('none-scroll');
	});
	// @c_info_job_step 직업정보(워크넷)
	$('.search__job .select__item-list li, .search__job .select__item-list2 li').on('click', function(){
		var jThis = $(this);
		jThis.parent().find('.on').removeClass('on');
		jThis.addClass('on');
	})

	$('.search__job .step1 .select__item-list li').on('click', function(){
		var jThis = $(this);
		var step1 = $('.select__item.step1');
		var step2 = $('.select__item.step2');
		var step3 = $('.select__item.step3');

		// 아래는 임시
		var jContent = $('<li>경영 · 사무 · 금융 · 보험</li>\n' +
									'<li>연구 · 공학기술</li>\n' +
									'<li>교육 · 법률 · 사회복지 · 경찰 · 소방 · 군인</li>\n' +
									'<li>경영 · 사무 · 금융 · 보험</li>\n' +
									'<li>연구 · 공학기술</li>\n' +
									'<li>경영 · 사무 · 금융 · 보험</li>\n' +
									'<li>연구 · 공학기술</li>\n' +
									'<li>경영 · 사무 · 금융 · 보험</li>\n' +
									'<li>연구 · 공학기술</li>\n' +
									'<li>경영 · 사무 · 금융 · 보험</li>\n' +
									'<li>연구 · 공학기술</li>\n' +
									'<li>보건 · 의료</li>');

		var jEmpty = $('<li class="empty">\n' +
									 '<img src="./img/common/icon-alert-circle-outline.svg" alt="">\n' +
									 '<p>먼저 대분류를 선택해주세요.</p>\n' +
									 '</li>')

		if(step1.hasClass('show')){
			step1.removeClass('show').addClass('after');
			step2.addClass('show');

			// 임시
			step2.find('.select__item-list').empty().append(jContent);
			step2Item()

		} else if(step1.hasClass('after')){
			step1.removeClass('after').addClass('show');
			step2.removeClass('show');

			// 임시
			step2.find('.select__item-list').empty().append(jEmpty);
		} else if(step1.hasClass('selected')){
			step1.removeClass('selected').addClass('after');
			step2.removeClass('selected').addClass('show');
			step3.removeClass('show').removeClass('after');
		}
	})
	$('.search__job .step1 .select__item--title').on('click', function(){
		var step1 = $('.select__item.step1');
		var step2 = $('.select__item.step2');
		var step3 = $('.select__item.step3');

		if(step1.hasClass('after')){
			step1.removeClass('after').addClass('show');
			step2.removeClass('show');
		} else if(step1.hasClass('selected')){
			step1.removeClass('selected').addClass('show');
			step2.removeClass('selected');
			step3.removeClass('show').removeClass('after');
		}
	})
	$('.search__job .step2 .select__item-list li').on('click', function(){
		var jThis = $(this);
		var step1 = $('.select__item.step1');
		var step2 = $('.select__item.step2');
		var step3 = $('.select__item.step3');

		if(step2.hasClass('show')){
			step1.removeClass('after').addClass('selected');
			step2.removeClass('show').addClass('selected');
			step3.addClass('show');
		} else if(step2.hasClass('selected')){
			step1.removeClass('selected').addClass('after');
			step2.removeClass('selected').addClass('show');
		}
	})

	$('.search__job .step2 .select__item--title').on('click', function(){
		var step1 = $('.select__item.step1');
		var step2 = $('.select__item.step2');
		var step3 = $('.select__item.step3');

		if(step1.hasClass('selected')){
			step1.removeClass('selected').addClass('after');
			step2.removeClass('selected').addClass('show');
			step3.removeClass('show').removeClass('after');
		}
	})

	$('.search__job .step3 .select__item-list2 li, .search__job .step3 .select__item--title').on('click', function(){
		var jThis = $(this);
		var step1 = $('.select__item.step1');
		var step2 = $('.select__item.step2');
		var step3 = $('.select__item.step3');

		if(step3.hasClass('show')){
			step3.removeClass('show').addClass('after');
		} else if(step3.hasClass('after')){
			step3.removeClass('after').addClass('show');
		}
	})

	function step2Item(){
		$('.search__job .step2 .select__item-list li').on('click', function(){
			var jThis = $(this);
			var step1 = $('.select__item.step1');
			var step2 = $('.select__item.step2');
			var step3 = $('.select__item.step3');
			$('.search__job .step2 .select__item-list').find('.on').removeClass('on');
			$(this).addClass('on');
	
			if(step2.hasClass('show')){
				step1.removeClass('after').addClass('selected');
				step2.removeClass('show').addClass('selected');
				step3.addClass('show');
			} else if(step2.hasClass('selected')){
				step1.removeClass('selected').addClass('after');
				step2.removeClass('selected').addClass('show');
				step3.removeClass('show').removeClass('after');
			}
		})
	}
	// * ========== Mark
	// @i_resume_manage 대표이력서 지정
	$(".js-resume").on("click", function(){
		let confirmAlert;
		if(!$(".icon-starcolor").hasClass("on")){ // 대표이력서 하기전
			confirmAlert = confirm("대표이력서로 지정하시겠습니까?");
			if(confirmAlert == true) {	
				$(this).addClass("on");
			} else {
				
			}
		} else {
			confirmAlert = confirm("대표이력서에서 제거하시겠습니까?");
			if(confirmAlert == true) {	
				$(this).removeClass("on");
			} else {
				
			}
		}
	});
	$(".js-bookmark").on("click", function(){
		let bookAlert; 
		if(!$(".icon-bookmark").hasClass("on")){ // 북마크 하기전
			bookAlert = confirm("북마크에 지정하시겠습니까?");
			if(bookAlert == true) {
				$(this).addClass("on");
			} else {
				
			}
		} else {
			bookAlert = confirm("북마크에 제거하시겠습니까?");
			if(bookAlert == true) {
				$(this).removeClass("on");
			} else {
				
			}
		}
	});
	// * Mark END ==========
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
	// @이력서 수정 삭제 드롭박스
	$('.resume-menu').on('click', function (e){
		var jThis = $(this);
		var jThisMenuBox = jThis.parent().find('.resume-btn');
		jThisMenuBox.toggleClass('active');
	});
	// * Board Edit Box END ==========
	// @희망직종 팝업
	$('.job-select').on('click', function (e){
		$('.popup-select').addClass('active');
		$('body').addClass('none-scroll');
	});
	// @자격증/면허증 검색 팝업
	$('.setting-search').on('click', function (e){
		$('.popup-certified').addClass('active');
		$('body').addClass('none-scroll');
	});
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
	// @cm_sign_up2 약관동의 체크박스
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
	// @i_resume 체크박스
	var placeItem = $('.work-place');
	var placeAllChk = placeItem.find('input[name=chkAll]');
	var placeChk = placeItem.find('input[name=chkEx]');

	placeAllChk.on('click', function (e){
		if(placeAllChk.is(":checked")){
			placeChk.prop('checked', true);
		} else {
			placeChk.prop('checked', false);
		}
	});
	placeChk.on('click', function (e){
		var chkTotal = placeChk.length;
		var chkActive = placeItem.find('input[name=chkEx]:checked').length;

		if(chkTotal != chkActive){
			placeAllChk.prop('checked', false);
		} else {
			placeAllChk.prop('checked', true);
		}
	});
	// * All Checkbox END ==========
	// ========== * Common Popup
	$('.js-popup-btn').on('click', function (e){
		var activeBtn = $(this).attr('data-tab');
		$('#' + activeBtn).addClass('active');
		$('body').addClass('none-scroll');
	});
	// Common Popup * ==========
});