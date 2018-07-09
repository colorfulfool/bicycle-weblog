$(document).ready(function () {
	document.querySelectorAll('[data-stretch-from]').forEach(function (textarea) {
		textarea.addEventListener('input', function (event) {
			var textarea = event.target;
    	var minHeight = parseInt(event.target.getAttribute('data-stretch-from'));

		  textarea.style.height = ""; /* Reset the height */
		  textarea.style.height = Math.max(textarea.scrollHeight, minHeight) + "px";
		})
	})
  
	document.querySelector('[data-target="form.content"]').focus()
})