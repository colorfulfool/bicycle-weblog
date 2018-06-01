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