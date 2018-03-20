$(document).ready(function () {
	document.querySelectorAll('[data-backup]').forEach(function (input) {
		input.value = fetchFromLocalStorage(input.id)

		input.addEventListener('input', function (event) {
			saveToLocalStorage(event.target.id, event.target.value)
		})
	})
  
	document.querySelectorAll('[data-backup-purge]').forEach(function (button) {
    purgeTrigger = button.getAttribute('data-backup-purge')
    
		button.addEventListener(purgeTrigger, function (event) {
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