'use strict'

const btnModuleOpen = document.querySelector('.btn')
const modal = document.querySelector('.modal')
const modalClose = document.querySelectorAll('.modal_close')
const overlay = document.querySelector('.overlay')
const img = document.querySelector('.img')

function delTab() {
	const focus = document.querySelectorAll(
		"button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
	)
	focus.forEach(element => {
		if (!modal.contains(element)) {
			element.setAttribute('tabindex', '-1')
		}
	})
}

const modalOpen = () => {
	modal.classList.remove('hidden')
	overlay.classList.remove('hidden')
	delTab()
}

function closeModal() {
	modal.classList.add('hidden')
	overlay.classList.add('hidden')
}

btnModuleOpen.addEventListener('click', modalOpen)

modalClose.forEach(val => {
	val.addEventListener('click', () => {
		closeModal()
	})
})

overlay.addEventListener('click', () => {
	closeModal()
})

document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		modal.classList.add('hidden')
		overlay.classList.add('hidden')
	}
})

function randomNumber() {
	const num = Math.trunc(Math.random() * (700 - 600 + 1)) + 600
	console.log(num)
	img.setAttribute('src', `https://picsum.photos/700/${num}?random`)
}
const randomImageBtn = document
	.querySelector('.modal_btn-random')
	.addEventListener('click', randomNumber)
