/*
 * 💥 Nuketube content script
 * Copyright 2018 @ guicheffer.me
 *
 * Plugin for chrome/firefox which removes all the elements from the page and let only the youtube video tag plays
 *
*/

// Adds query values into a global "getQueryStrings" variable
if (!window.getQueryStrings) {
	window.getQueryStrings = () => {
		const itself = {}
		const fullQs = window.location.search.substring(1)
		const params = fullQs.split('&')

		for (let i=0; i<params.length; i++) {
			const pair = params[i].split('=')

			if (typeof itself[pair[0]] === 'undefined') {
				itself[pair[0]] = pair[1]
			} else if (typeof itself[pair[0]] === 'string') {
				const arr = [ itself[pair[0]], pair[1] ]
				itself[pair[0]] = arr
			} else {
				itself[pair[0]].push(pair[1])
			}
		}

		return itself
	}
}

(() => {
	const queryStrings = getQueryStrings()

	if (!queryStrings.v || typeof queryStrings.v === 'undefined') return window.alert('💥 No youtube video found! 😭')

	const isThereAFullScreenAlready = document.querySelector('#iframe-video-nuketube')
	if (isThereAFullScreenAlready) return window.location.reload()

	const bodyElement = document.querySelector('body')
	const iframeStyleInline = 'position: absolute;'
	bodyElement.innerHTML = ''

	const cloneVideoElement = document.createElement( 'div' )
	cloneVideoElement.innerHTML = `
		<iframe id="iframe-video-nuketube" width="100%" height="100%"
			src="https://www.youtube.com/embed/${queryStrings.v}?autoplay=1"
			style="${iframeStyleInline}"
			frameborder="0" allowfullscreen autoplay>
		</iframe>
	`

	bodyElement.appendChild(cloneVideoElement)
})()
