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
   // db.collection('users').findOne({name: "Jesus"}, (error, user) => {
   //   if(error) {
   //     return console.log("Unable to fetch.");
   //   }
   //   console.log(user)
   // })

   // To search by id you must use ObjectID
   // db.collection('users').findOne({_id: new ObjectID("5f764a1ad5096d2ff16dc824")}, (error, user) => {
   //   if(error) {
   //     return console.log(error);
   //   }
   //   console.log(user)
   // })

   // Find many can be used to search many different criteria.
   // It doesn't return an array of documents matching the query.
   // Instead it returns a cursor which can be used to fine tune the data you get back.
   //  Cursor docs http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html

   // db.collection('users').find({age: 26}).toArray((error, users) => {
   //   if(error) {
   //     return console.log(error);
   //   }
   //   users.map((user) => {
   //     if(user.name !== "Daniel") {
   //       console.log(user);
   //     }
   //   })
   // })

   db.collection('tasks').findOne({_id: new ObjectID("5f7f42ce3e0914cb82035a1d")}, (error, task) => {
     if(error) {
       return console.log(error);
     }
     console.log(task);
   })

  db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    if(error) {
      return console.log(error)
    }
    console.log(tasks);
  })
 })
