$(document).ready(function () {
  
	$('[data-target="plus-button"]').click(function (){
		window.open($(this).attr('data-url'));
	});
  
});