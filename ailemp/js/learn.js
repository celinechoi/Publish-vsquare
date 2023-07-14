/*+-----------------------------------+
| Author: JS |
| Title : Common Script |
+-------------------------------------+*/
$(function(){
	var $windowW = $(window).outerWidth();

	//학습카드 좋아요 버튼
	var like = $('.learn-box').find('.btn-like');
	if(like.length > 0){

		like.off('click').on('click', function (e){
			e.preventDefault();

			var jThis = $(this);

			if(jThis.hasClass('active')){

				jThis.removeClass('active');

			} else {

				jThis.addClass('active');

			}
		});
	}

	// //학습 성과 뱃지
	var badgeSwiper = new Swiper(".badge-swiper", {
		slidesPerView: 5,
		grid: {
			rows: 1,
		},
		spaceBetween: 25,
		slidesPerGroup: 5,
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
			formatFractionCurrent: function (number) {
				return ('0' + number).slice(-2);
			},
			formatFractionTotal: function (number) {
				return ('0' + number).slice(-2);
			},
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span>' +
					' / ' +
					'<span class="' + totalClass + '"></span>';
			}
		},
		navigation: {
			nextEl: ".swiper-btn.next",
			prevEl: ".swiper-btn.prev",
		},
		breakpoints: {
			1281: {
				slidesPerView:  5,
				spaceBetween: 25,
				grid: {
					rows: 1,
				},
				slidesPerGroup: 5,
			},
			768: {
				slidesPerView:  3,
				spaceBetween: 20,
				grid: {
					rows: 2,
				},
				slidesPerGroup: 3,
			},
			0: {
				slidesPerView:  1,
				spaceBetween: 16,
				grid: {
					rows: 2,
				},
				slidesPerGroup: 1,
			},
		},
	});
});