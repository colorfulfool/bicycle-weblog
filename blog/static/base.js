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
	document.querySelectorAll('[data-backup][contenteditable]').forEach(function (contenteditable) {
		contenteditable.innerHTML = fetchFromLocalStorage(contenteditable.id)
	})

	$('[data-backup][contenteditable]').change(function (event) {
		saveToLocalStorage(event.target.id, event.target.innerHTML)
	})	
})

function saveToLocalStorage(key, value) {
	localStorage.setItem(key, value)
}

function fetchFromLocalStorage(key) {
	return localStorage.getItem(key)
}

function redeemLocalStorage(key) {
	localStorage.removeItem(key)
}