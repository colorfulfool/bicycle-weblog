$(document).ready(function () {
	$('[data-behavior="post-list"]').on('mouseenter', '[data-behavior="post__header"]', function () {
		$(this).find('.button').removeClass('button--transparent');
	});
	$('[data-behavior="post-list"]').on('mouseleave', '[data-behavior="post__header"]', function () {
		$(this).find('.button').addClass('button--transparent');
	});
  
	$('[data-behavior="post-list"]').on('click', '[data-behavior="post-delete"]', function () {
		self = $(this);
		$.ajax($(this).attr('data-url'), {
			type: 'POST',
			success: function (response) {
				self.parents('.post').hide(200);
			}
		});
	});
  
	$('[data-behavior="post-list"]').on('click', '[data-behavior="post-update"]', function () {
		self = $(this);
		if (self.hasClass('active'))
		{
			$.ajax($(this).attr('data-url'), {
				type: 'POST',
				data: { content: toMarkdown(self.parents('.post').find('[data-behavior="post-content"]').html()) },
				success: function (response) {
					self.removeClass('active');
					self.parents('.post').find('[data-behavior="post-content"]').removeAttr('contenteditable');
				}
			});

		}
		else
		{
			self.addClass('active');
			self.parents('.post').find('[data-behavior="post-content"]').attr('contenteditable','true');
		}

	});
  
	$('[data-behavior="post-list"]').on('click', '[data-behavior="trueness"]', function () {
		self = $(this);
		$.ajax($(this).parents('[data-behavior="trueness-container"]').attr('data-url'), {
			type: 'POST',
			data: { trueness: $(this).attr('data-value') },
			success: function (response) {
				self.parents('[data-behavior="trueness-container"]').find('.trueness').removeClass('active');
				self.addClass('active');
				self.parents('.post').attr('data-trueness', self.attr('data-value'));
			}
		});
	});
});