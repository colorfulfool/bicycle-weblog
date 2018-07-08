$(document).ready(function () {
	$('[data-target="post-list"]').on('click', '[data-target="post-delete"]', function () {
		self = $(this);
		$.ajax($(this).attr('data-url'), {
			type: 'POST',
			success: function (response) {
				self.parents('[data-target="post"]').hide(200);
			}
		});
	});
  
	$('[data-target="post-list"]').on('click', '[data-target="post-update"]', function () {
		self = $(this);
		if (self.hasClass('button--active'))
		{
			$.ajax($(this).attr('data-url'), {
				type: 'POST',
				data: { content: toMarkdown(self.parents('[data-target="post"]').find('[data-target="post-content"]').html()) },
				success: function (response) {
					self.removeClass('button--active');
					self.parents('[data-target="post"]').find('[data-target="post-content"]').removeAttr('contenteditable');
				}
			});

		}
		else
		{
			self.addClass('button--active');
			self.parents('[data-target="post"]').find('[data-target="post-content"]').attr('contenteditable','true');
		}

	});

});