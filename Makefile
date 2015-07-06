dist-chrome:
	mkdir -p dist/chrome
	cp chrome/manifest.json dist/chrome
	cp -R lib/* dist/chrome
	zip dist/chrome.zip dist/chrome

dist: dist-chrome
