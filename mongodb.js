const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-app'

 MongoClient.connect(connectionURL, {useNewUrlParser: true},
   (error, client) => {
   if(error) {
     return console.log("Error occured while connecting to database")
   }
   const db = client.db(databaseName)

   db.collection('users').findOne({name: "Jesus"}, (error, user) => {
     if(error) {
       return console.log(error);
     }
     console.log(user)
   })
 })
