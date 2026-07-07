//Create / Connect to Database

import {MongoClient} from 'mongodb'
const url = "mongodb://127.0.0.1:27017";
const dbName = "university";

MongoClient.connect(url)
  .then((client) => {
    console.log("Database connection established successfully");
    const db = client.db(dbName);
    console.log(`Database "${dbName}" is created`); 
    client.close();
  })
  .catch((err) => {
    console.error("An error occurred:", err);
  });
