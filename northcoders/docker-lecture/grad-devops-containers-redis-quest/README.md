# RedisQuest

A fun lil' app that stores a user's quest on a redis server.

To make it work in its current form, you'll need to ensure you have redis installed on your computer (`brew install redis`) and have the server running (`redis-server`).

Then just make sure to run `npm install`, and run `npm start` to launch the app.

## Challenge

### How to approach this challenge

You may have noticed in the Docker session, there isn't actually much code to write in order to containerise an application you've written - the difficulties with Docker lie more in _finding_ the right solution for your architecture rathen than _enacting_ it. Docker is a huge technology and any one project will barely scratch the surface of its capabilities, so the aim of these challenges is to give your a basic familiarity with the tools so you feel equipped to utilise it in your own situations.

We'd really like you to create a Readme for your app, which should do the following:
  - explain how to containerise your app, and any other way it can be used
  - code fence a copy of any `Dockerfile` you've created with a description of what each instruction does (with reference to your `.dockerignore` if you have one)
  - do the same with any `docker-compose.yml` file
  - list any changes you make to the source code in order to allow this to happen

There's every chance that you will stumble upon chunks of code that say how to achieve these problems as you explore the internet for solutions. But there's also every chance they will contain outdated, unnecessary, ineffective or just plain wrong solutions for your specific situation. Accounting for every line will ensure you know that it has value for your code.

### TASK: **Containerise a node CLI app with a Redis store**

You can use the app which is partially set up in the challenge folder. This example app uses [Inquirer](https://github.com/SBoudrias/Inquirer.js/), an npm package, to create an interactive CLI app. It stores and retrieves the data from Redis. Currently, you can get it to work by following the instructions on the README in that folder.

You will need to create two containers:
  - a node container for the app itself, and
  - a [Redis](https://redis.io/) container for the server...
  
...thereby eliminating the need for the host machine to have either node or Redis installed!

The app should allow the user to save some sort of record under a key of their name in a Redis store, and reach the records of others who have previously used the app.

To do this, you will need to complete:
  - a `Dockerfile` (and a `.dockerignore`) for the node app
  - a `docker-compose.yml` to network the node app with a container running a Redis server.

You should be able to run the node app via the docker-compose file, ensuring that the server is ready to collect the data from your app.

Once you have this functioning, how will you ensure that the data you are collecting is persisted on the Redis server, even when you tear down the network and its containers with `docker-compose down`?
