cd server
docker image build --tag socket-server:base --file Dockerfile.base .

cd ../python-client
docker image build --tag socket-client-python:base --file Dockerfile.base .

cd ../js-client
docker image build --tag js-socket-client:base --file Dockerfile.base .

cd ..
docker compose build
docker compose up