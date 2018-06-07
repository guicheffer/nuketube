help:
	@echo
	@echo "💥  Please use 'make <target>' where <target> is one of the commands below:"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e "s/\\$$//" | sed -e "s/##//"
	@echo

# ------------------------------------------------------------------------------------ #

clean: ## removes `dist` files
	rm -rf ./dist

dist-chrome: ## makes a prod version of nuketube plugin
	make clean
	mkdir -p dist/
	cp -R ./chrome/* dist/
	cd dist/ && zip -r nuketube.zip *

dist: dist-chrome

tag: ## create a tag for plugin
	git tag
