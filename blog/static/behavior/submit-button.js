$(document).ready(function () {
  submitButton = document.querySelector('[data-target="submit"]')
  
	$(submitButton).click(function () {
		$.ajax($(submitButton).attr('data-url'), {
			type: 'POST',
			data: { content: $('[data-target="post-content"]').val() },
			success: function (response) {
        submitButton.dispatchEvent( new CustomEvent('request:success') )
  			$('.post').fadeOut(200)
        
        window.close()
        window.opener.location.reload()
			}
		});
	});
});