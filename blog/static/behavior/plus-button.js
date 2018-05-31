$(document).ready(function () {
	$('[data-behavior="plus-button"]').hover(function () {
		$(this).removeClass('button--transparent');
	}, function () {
		$(this).addClass('button--transparent');
	});
  
	$('[data-behavior="plus-button"]').click(function (){
		window.open($(this).attr('data-url'));
	});
  
});