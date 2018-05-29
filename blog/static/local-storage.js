$(document).ready(function () {
	document.querySelectorAll('[data-backup]').forEach(function (input) {
    property = input.getAttribute('data-backup')
		input[property] = fetchFromLocalStorage(input.id)
    input.dispatchEvent( new CustomEvent('input') )

		input.addEventListener('input', function (event) {
			saveToLocalStorage(input.id, input[property])
		})
	})
  
	document.querySelectorAll('[data-backup-purge-on]').forEach(function (button) {
    purgeEvent = button.getAttribute('data-backup-purge-on')
    
		button.addEventListener(purgeEvent, function (event) {
			purgeLocalStorage()
		})
	})
})

function saveToLocalStorage(key, value) {
	localStorage.setItem(key, value)
}

function fetchFromLocalStorage(key) {
	return localStorage.getItem(key)
}

function purgeLocalStorage() {
	localStorage.clear()
}