export default {
  connect(element, property) {
		element[property] = fetchFromLocalStorage(element.id)
    element.dispatchEvent( new CustomEvent('input') )

		element.addEventListener('input', function (event) {
			saveToLocalStorage(element.id, element[property])
		})
  },
  
  purge() {
    purgeLocalStorage()
  }
}



function saveToLocalStorage(key, value) {
	localStorage.setItem(key, value)
}

function fetchFromLocalStorage(key) {
	return localStorage.getItem(key)
}

function purgeLocalStorage() {
	localStorage.clear()
}