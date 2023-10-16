SHELL=/bin/bash

.PHONY: generate
generate: clean
	buf --verbose generate proto

.PHONY: clean
clean:
	rm -rf gen/

build: generate
	npm ci || npm install && npm run buildit
