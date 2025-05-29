clean:
	rm -rf ./build \
	rm tsconfig.tsbuildinfo

buildDocker:
	docker build -t monsters/monsters-client .
