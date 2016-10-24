# TWTR 

Twitter application utilizing Node, Express, and React. This is a very simple application that provides a auto updating live stream for a predefined tag or mention. In this case I have set the app up to display tweets with "@CNNPolitics".

------------------------------------------------------------------------
In the spirit of full disclosure, it had been a while since I worked with either Node or React, and given the quick turnaround needed for the assessment, I utilized the following article as a referennce to the get the basics of the app up and running. I customized it and made it my own, but I didn't want there to be suprises if some it may look familiar. I do feel that the ability to find and utilize resources when conducting our type of work is one of the most important skills.

------------------------------------------------------------------------

The application requires Node and NPM. Downloads and instructions available at https://nodejs.org

## Install Node Dependencies

In root directory run the following command :
```
npm install
```

## Build App

Start Mongo.
```
mongod
```

Create local MongoDB database called *react-tweets*.
```
mongo
> use react-tweets
```

Compile the Javascript
```
npm run build
```

Start the local server
```
node server.js
```

Once the the app is built and the server is started it can be accessed at http://localhost:8080

