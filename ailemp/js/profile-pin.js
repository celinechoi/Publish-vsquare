/*+-----------------------------------+
| Author: JS |
| Title : DEMO Sub Script |
+-------------------------------------+*/
$(function(){

	var $pinInputs = $('.pinNum'); // 모든 인풋 요소
	var currentIndex = 0; // 현재 인풋의 인덱스

	$pinInputs.eq(currentIndex).prop('disabled', false); // 현재 인풋 활성화

	$pinInputs.on('input', function(e) {
		var $input = $(this);
		var inputValue = $input.val();

		// 숫자만 입력되도록 검사
		var numericValue = inputValue.replace(/\D/g, ''); // 숫자 이외의 문자 제거

		if (numericValue !== inputValue) {

			$input.val(numericValue); // 숫자만 입력되도록 값을 강제로 변경

		}

		if (numericValue.length === 1) {

			$input.addClass('active');

			if (currentIndex < $pinInputs.length - 1) { // 다음 인풋이 존재하는 경우

				currentIndex++;
				$pinInputs.eq(currentIndex).prop('disabled', false).focus(); // 다음 인풋 활성화하고 포커스 이동

			} else { // 마지막 인풋인 경우 입력을 막음

				$pinInputs.blur();

			}
		}
	});

	$pinInputs.on('keydown', function(e) {
		var $input = $(this);

		if (e.keyCode === 8 && $input.val().length === 0) { // 백스페이스 키를 눌렀고 값이 없는 경우

			$input.removeClass('active');

			if (currentIndex > 0) { // 이전 인풋이 존재하는 경우

				currentIndex--;
				$pinInputs.eq(currentIndex).prop('disabled', false).val('').focus(); // 이전 인풋 활성화하고 포커스 이동

			}
		}
	});


});