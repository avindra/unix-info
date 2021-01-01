.PHONY: dev build clean


dev:
	@mdbook serve

build: clean
	@mdbook build

clean:
	@mdbook clean
