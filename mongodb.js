const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-app'

 MongoClient.connect(connectionURL, {useNewUrlParser: true},
   (error, client) => {
   if(error) {
     return console.log("Error occured while connecting to database")
   }
   const db = client.db(databaseName)

// Searching for a document that doesn't exist return a value of null
   db.collection('users').findOne({name: "Jesus"}, (error, user) => {
     if(error) {
       return console.log("Unable to fetch.");
     }
     console.log(user)
   })

   // To search by id you must use ObjectID
   db.collection('users').findOne({_id: new ObjectID("5f764a1ad5096d2ff16dc824")}, (error, user) => {
     if(error) {
       return console.log(error);
     }
     console.log(user)
   })
 })
