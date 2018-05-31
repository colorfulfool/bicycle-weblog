$(document).ready(function () {
	$('.plus-button').css('opacity', 0);
  
	$('.plus-button').hover(function () {
		$(this).animate({ opacity: 1 }, 200);
	}, function () {
		$(this).animate({ opacity: 0 }, 200);
	});
  
	$('.plus-button').click(function (){
		window.open($(this).attr('data-url'));
	});
  
});