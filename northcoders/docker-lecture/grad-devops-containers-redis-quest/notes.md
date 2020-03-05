## To build the image

- create a Dockerfile
- install packages
- application code -> image
- provide a npm start

## To build the network between the app and the redis server

- provision of a volume to save data
- ensure redis is configured to save data
- redis image -> to run a server main js can connect to
- build the image from the dockerfile
- main js needs the redis server url in the env
- open an interactive shell with the app
- ensure the server is running before the app