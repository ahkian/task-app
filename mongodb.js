const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-app'
 MongoClient.connect(connectionURL, {useNewUrlParser: true},
   (error, client) => {
   if(error) {
     return console.log("Error occured while connecting to database")
   }
   console.log("Connected to database");
 })
