help:
	@echo
	@echo "💥  Please use 'make <target>' where <target> is one of the commands below:"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e "s/\\$$//" | sed -e "s/##//"
	@echo

# ------------------------------------------------------------------------------------ #

dist-chrome: ## makes a development mode plugin for chrome
	mkdir -p dist/chrome
	cp chrome/manifest.json dist/chrome
	cp -R chrome/lib/* dist/chrome/lib
	zip dist/chrome.zip dist/chrome

dist: dist-chrome

tag: ## create a tag for plugin
	git tag
