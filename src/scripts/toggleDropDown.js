const elements = document.querySelectorAll('.toggle-list_item')

for (const element of elements) {
	element.addEventListener('click', function () {
		if (!this.dataset.clicked) {
			this.setAttribute('data-clicked', 'true')
			this.style.opacity = '1'
			this.style.backgroundColor = '#b0d5f7'
			this.style.height = '240px'
			this.style.padding = '140px'
		} else {
			this.removeAttribute('data-clicked')
			this.removeAttribute('style')
		}
	})

	const paragraphs = element.querySelectorAll('.toggle-paragraph')

	for (const paragraph of paragraphs) {
		paragraph.addEventListener('click', function () {
			if (!this.dataset.clicked) {
				this.setAttribute('data-clicked', 'true')
				this.style.opacity = '1'
				this.style.fontSize = '18px'
			} else {
				this.removeAttribute('data-clicked')
				this.removeAttribute('style')
			}
		})
	}
}

function toggle(element) {
	const parent = element.parentNode
	const content = parent.querySelector('.toggle-paragraph_content')

	if (!content.dataset.clicked) {
		content.setAttribute('data-clicked', 'true')
		content.style.paddingTop = '32px'
	} else {
		content.removeAttribute('data-clicked')
		content.removeAttribute('style')
	}
}
