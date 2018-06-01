$(document).ready(function () {
  
	$('body').on('mouseenter', '[data-reveal-transparent]', function () {
		$(this).find('.transparent').addBack('.transparent')
      .removeClass('transparent').addClass('transparent--revealed')
	});
	$('body').on('mouseleave', '[data-reveal-transparent]', function () {
		$(this).find('.transparent--revealed').addBack('.transparent--revealed')
      .removeClass('transparent--revealed').addClass('transparent')
	});
  
});