const initSelect = () => {
	const select = document.getElementById('mode')
	const { body: { classList } } = document
	select.addEventListener('change', ({ target: { value, options } }) => {
		for (const { value } of options) {
			classList.remove(value)
		}
		classList.add(value)
	})

	return { select }
}

const initModeButton = ({ select }) => {
	for (const button of document.querySelectorAll('a.mode')) {
		button.addEventListener('click', ({ target }) => {
			select.value = target.getAttribute('rel')
			select.dispatchEvent(new Event('change'))
		})
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const { select } = initSelect()

	initModeButton({ select })
})
