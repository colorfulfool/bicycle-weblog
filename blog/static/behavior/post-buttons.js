$(document).ready(function () {
  $('.post-header .button').css('opacity', 0);
  
	$('.post-list').on('mouseenter', '.post-header', function () {
		$(this).find('.button').animate({ opacity: 1 }, 200);
	});
	$('.post-list').on('mouseleave', '.post-header', function () {
		$(this).find('.button').animate({ opacity: 0 }, 200);
	});
  
	$('.post-list').on('click', '.post-delete', function () {
		self = $(this);
		$.ajax($(this).attr('data-url'), {
			type: 'POST',
			success: function (response) {
				self.parents('.post').hide(200);
			}
		});
	});
  
	$('.post-list').on('click', '.post-update', function () {
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
  
	$('.post-list').on('click', '.trueness', function () {
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