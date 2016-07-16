function type_in_heading(text, delay) {
	var i = 0
	var timer = setInterval(function () { $('.blog-title').append(text[i++]) }, delay)
}

$(function () {
	var img = new Image();
	img.onload = function() {
		$('.blog-title').html('&#x200b;')
		type_in_heading('Bicycle for the mind', 100)
		// setTimeout(function () {
		// 	type_in_heading(' как ты?', 100)
		// }, 100*11 + 700)
	}
	img.src = "/static/ferry.jpg"
})