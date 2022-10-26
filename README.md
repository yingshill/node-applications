# node-applications

## Notes App
This project uses the file system and command line arguments to create a note taking app. It deals with how to get input from the user, work with JSON, and create a place to store user data. You can add, remove and read a list of notes in the app. NPM packages like Chalk, Yarg, and nodemon are used to optimize the development experience. 

### Specifications
#### Getting Input from Users
Use process.argv with **Yargs** to set up a more complex of arguments. Users can pass in the title and the body of their notes, and other data such as their name, email, or address

#### Features
Add the ability for users to add, remove, and read notes and refactor the code with arrow function syntax

#### Debugging Node.js
Use **inspect** the built-in debugger in chrome developer tool.

## Weather App
The goal of the project is to use asynchronous nature of Node.js and make HTTP API request to third-party APIs, so that we can pull in data into the application. 

### Specifications
Use npm package **request** to fetch real-time weather data from Dark Sky API and apply **setTimeout** function as a callback pattern. 

Use **Express** to serve up the website and JSON data and enable users to interact with app to retrieve real-time weather data via the broswer. Furthermore, , we use npm **Handlerbars** package to render dynamicc pages with templating.



