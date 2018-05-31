$(document).ready(function () {
	$('.plus-button').hover(function () {
		$(this).removeClass('button--transparent');
	}, function () {
		$(this).addClass('button--transparent');
	});
  
	$('.plus-button').click(function (){
		window.open($(this).attr('data-url'));
	});
  
});