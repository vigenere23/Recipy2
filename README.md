# Recipy2

> **Warning**: Not finished!

Hi! This is the version 2.0 of the original [recipy](https://github.com/vigenere23/recipy) project. 

## New features compared to version 1

This version includes many new features wich makes the app much more component-oriented and up-to-date. Those include:

* Client-side component framework
* Better web architecture
    * Dedicated API
    * Use of services, models and database
* Using lastest technologies
    * Webpack for bundling the app
    * Babel for using 100% ES6 without breaking older browsers or Node.js
    * MongoDB as the database

## Install

Simple as 1,2...
```bash
git clone <url>
cd recipy2
yarn install
```

To run, open two terminals:
```bash
#first
cd API
yarn dev

#second
cd UI
yarn dev
```

> You will also need to create your own `.env` file and provide the entries found in the `.env-sample` file, all located in the API folder. This will contain your MongoDB connection string. 

Have fun playing around!

## Be warned

This project is clearly not finished... Like you can't even add recipes yet... But hey, everything has a start, right? :) 