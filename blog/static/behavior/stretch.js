export default {
  connect(textarea, minHeight) {
		textarea.addEventListener('input', function (event) {
		  textarea.style.height = ""; /* Reset the height */
		  textarea.style.height = Math.max(textarea.scrollHeight, minHeight) + "px";
		})
  }
}