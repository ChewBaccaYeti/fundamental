const elements = document.querySelectorAll('.toggle-list_item')

for (const element of elements) {
	element.addEventListener('click', function () {
		if (!this.dataset.clicked) {
			this.setAttribute('data-clicked', 'true')
			this.style.opacity = '1'
			this.style.height = '240px'
			this.style.paddingBottom = '140px'
			this.style.position = 'relative'
		} else {
			this.removeAttribute('data-clicked')
			this.removeAttribute('style')
		}
	})

	const paragraphs = document.querySelectorAll('.toggle-paragraph')

	for (const paragraph of paragraphs) {
		paragraph.addEventListener('click', function () {
			if (!this.dataset.clicked) {
				this.setAttribute('data-clicked', 'true')
			} else {
				this.removeAttribute('data-clicked')
				this.removeAttribute('style')
			}
		})

		const toggleText = element.querySelectorAll('.toggle-text')

		for (const text of toggleText) {
			text.addEventListener('click', function () {
				if (!this.dataset.clicked) {
					this.setAttribute('data-clicked', 'true')
					this.style.opacity = '1'
					this.style.fontSize = '18px'
					this.style.paddingTop = '28px'
				} else {
					this.removeAttribute('data-clicked')
					this.removeAttribute('style')
				}
			})
		}
	}
}
