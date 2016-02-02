function type_a_letter(symbol) {
	$('.blog-title').append(symbol)
}

function type_in_heading(text, delay) {
	var i = 0
	var timer = setInterval(function () { $('.blog-title').append(text[i++]) }, delay)
}

$(function () {
	$('.blog-title').html(' ')
	type_in_heading('Привет Люба', 100)
	setTimeout(function () {
		type_in_heading(' как ты?', 100)
	}, 100*11 + 700)
})