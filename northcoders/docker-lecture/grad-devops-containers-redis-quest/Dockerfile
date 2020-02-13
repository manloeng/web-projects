FROM node:10

# explicitly choose a place to save your work
WORKDIR /usr/src/app

# copies the package files into current directory
# this is copied first so that it only needs to run when new dependancies are updated
COPY package*.json ./

RUN npm install

COPY . .

# explicitly describes what port is being used
# EXPOSE 8080

CMD [ "npm", "start" ]