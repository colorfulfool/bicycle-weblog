$(document).ready(function () {
	document.querySelectorAll('[data-backup]').forEach(function (input) {
		input.value = fetchFromLocalStorage(input.id)

		input.addEventListener('input', function (event) {
			saveToLocalStorage(event.target.id, event.target.value)
		})
	})
  
	document.querySelectorAll('[data-backup-purge]').forEach(function (button) {
    inputId = button.getAttribute('data-backup-purge')
    
		button.addEventListener('click', function (event) {
			purgeLocalStorage(inputId)
		})
	})
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