# Makefile not needed, just puts all the tools in one place

all:
	grunt

clean:
	grunt clean

test:
	npm test

.PHONY: all test clean