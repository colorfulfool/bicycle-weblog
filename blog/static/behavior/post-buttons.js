$(document).ready(function () {
	$('[data-behavior="post-list"]').on('click', '[data-behavior="post-delete"]', function () {
		self = $(this);
		$.ajax($(this).attr('data-url'), {
			type: 'POST',
			success: function (response) {
				self.parents('[data-behavior="post"]').hide(200);
			}
		});
	});
  
	$('[data-behavior="post-list"]').on('click', '[data-behavior="post-update"]', function () {
		self = $(this);
		if (self.hasClass('active'))
		{
			$.ajax($(this).attr('data-url'), {
				type: 'POST',
				data: { content: toMarkdown(self.parents('[data-behavior="post"]').find('[data-behavior="post-content"]').html()) },
				success: function (response) {
					self.removeClass('active');
					self.parents('[data-behavior="post"]').find('[data-behavior="post-content"]').removeAttr('contenteditable');
				}
			});

		}
		else
		{
			self.addClass('active');
			self.parents('[data-behavior="post"]').find('[data-behavior="post-content"]').attr('contenteditable','true');
		}

	});

});