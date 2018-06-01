$(document).ready(function () {
  submitButton = document.querySelector('[data-behavior="submit"]')
  
	$(submitButton).click(function () {
		$.ajax($(submitButton).attr('data-url'), {
			type: 'POST',
			data: { content: $('[data-behavior="post-content"]').val() },
			success: function (response) {
        submitButton.dispatchEvent( new CustomEvent('request:success') )
  			$('.post').fadeOut(200)
        
        window.close()
        window.opener.location.reload()
			}
		});
	});
});