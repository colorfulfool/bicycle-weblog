$(document).ready(function () {
	var minHeight = 243;

	document.querySelectorAll('textarea').forEach(function (textarea) {
		textarea.addEventListener('input', function (event) {
			var textarea = event.target;

		  textarea.style.height = ""; /* Reset the height */
		  textarea.style.height = Math.max(textarea.scrollHeight, minHeight) + "px";
		})
	})
  
	document.querySelector('[data-behavior="post-content"]').focus()
})