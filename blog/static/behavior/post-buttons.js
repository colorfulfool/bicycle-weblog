$(document).ready(function () {
	$('.button').css('opacity', 0);
	$('.post-header').off('mouseenter mouseleave');
  
	$('.post-header').hover(function () {
		$(this).find('.button').animate({ opacity: 1 }, 200);
	}, function () {
		$(this).find('.button').animate({ opacity: 0 }, 200);
	});
	$('.post-delete').off('click');
	$('.post-delete').click(function (){
		self = $(this);
		$.ajax($(this).attr('data-url'), {
			type: 'POST',
			success: function (response) {
				self.parents('.post').hide(200);
			}
		});
	});
	$('.post-update').off('click');
	$('.post-update').click(function (){
		self = $(this);
		if (self.hasClass('active'))
		{
			$.ajax($(this).attr('data-url'), {
				type: 'POST',
				data: { content: toMarkdown(self.parents('.post').find('#post-content').html()) },
				success: function (response) {
					self.removeClass('active');
					self.parents('.post').find('#post-content').removeAttr('contenteditable');
				}
			});

		}
		else
		{
			self.addClass('active');
			self.parents('.post').find('#post-content').attr('contenteditable','true');
		}

	});
	$('.trueness').off('click');
	$('.trueness').click(function (){
		self = $(this);
		$.ajax($(this).parents('.trueness-container').attr('data-url'), {
			type: 'POST',
			data: { trueness: $(this).attr('data-value') },
			success: function (response) {
				self.parents('.trueness-container').find('.trueness').removeClass('active');
				self.addClass('active');
				self.parents('.post').attr('data-trueness', self.attr('data-value'));
			}
		});
	});
});