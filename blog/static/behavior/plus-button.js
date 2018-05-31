$(document).ready(function () {
  
	$('[data-behavior="plus-button"]').click(function (){
		window.open($(this).attr('data-url'));
	});
  
});