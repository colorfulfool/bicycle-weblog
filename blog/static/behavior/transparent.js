$(document).ready(function () {
  
	$('body').on('mouseenter', '[data-reveal-transparent]', function () {
		$(this).find('.button--transparent').addBack('.button--transparent')
      .removeClass('button--transparent').addClass('button--transparent--revealed')
	});
	$('body').on('mouseleave', '[data-reveal-transparent]', function () {
		$(this).find('.button--transparent--revealed').addBack('.button--transparent--revealed')
      .removeClass('button--transparent--revealed').addClass('button--transparent')
	});
  
});