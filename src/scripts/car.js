let elements = document.querySelectorAll('.toggle-item')

for (element of elements) {
	element.addEventListener('click', function () {
		this.style.backgroundColor = '#b0d5f7'

		let container = this.querySelector('.change-my-name')

		console.log(container)

		container.classList.toggle('active')
	})
}

let toggleButton = document.querySelector('.toggle-item')

function toggle() {
	let div = document.getElementsByClassName('toggle-item')
	if (div.style.display === 'none') {
		div.style.display = 'block'
	} else {
		div.style.display = 'none'
	}
}
