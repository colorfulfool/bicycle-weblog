$(document).ready(function () {
  
	$('body').on('mouseenter', '[data-reveal-concealed]', function () {
		$(this).find('.concealed').addBack('.concealed')
      .removeClass('concealed').addClass('concealed--revealed')
	});
	$('body').on('mouseleave', '[data-reveal-concealed]', function () {
		$(this).find('.concealed--revealed').addBack('.concealed--revealed')
      .removeClass('concealed--revealed').addClass('concealed')
	});
  
});