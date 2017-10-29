function typeHeading(text, delay) {
	var i = 0
	var timer = setInterval(function () { $('.blog-title').append(text[i++]) }, delay)
}

$(function () {
	var img = new Image();
	// img.onload = function() {
	// 	$('.blog-title').html('&#x200b;')
	// 	typeHeading('Bicycle for the mind', 100)
	// 	setTimeout(function () {
	// 		typeHeading(' как ты?', 100)
	// 	}, 100*11 + 700)
	// }
	img.src = "/static/ferry.jpg"
})


$(document).ready(function () {
	document.querySelectorAll('[data-backup]').forEach(function (input) {
		input.value = fetchFromLocalStorage(input.id)

		input.addEventListener('input', function (event) {
			saveToLocalStorage(event.target.id, event.target.value)
		})
	})

	document.getElementById('post-content').focus()
})

function saveToLocalStorage(key, value) {
	localStorage.setItem(key, value)
}

function fetchFromLocalStorage(key) {
	return localStorage.getItem(key)
}

function purgeLocalStorage(key) {
	localStorage.removeItem(key)
}


$(document).ready(function () {
	var heightLimit = 243;

	document.querySelectorAll('textarea').forEach(function (textarea) {
		input.addEventListener('input', function (event) {
		  textarea.style.height = ""; /* Reset the height */
		  textarea.style.height = Math.max(textarea.scrollHeight, heightLimit) + "px";
		})
	})
})