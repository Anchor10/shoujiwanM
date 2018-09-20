$(function() {
	
	$('.footer').append("<div class='gtop' id='gtop'></div>");
	
	var $toTop = $('#gtop');
	$(window).scroll(function() {
		if($(this).scrollTop() > 20) {
			$toTop.fadeIn();
		} else {
			$toTop.fadeOut();
		}
	});
	$toTop.click(function() {
		$('html, body').animate({scrollTop:0});
	});
});