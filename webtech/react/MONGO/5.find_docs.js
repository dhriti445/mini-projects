//Find Documents

import {MongoClient} from 'mongodb'
const url = "mongodb://127.0.0.1:27017";
const dbName = "university";

MongoClient.connect(url)
  .then(client => {
    const db = client.db(dbName);
    const collection = db.collection("student");

    return collection.find({}, { projection: { _id: 0, name: 1 } }).toArray()
      .then(docs => {
        console.log("Documents found:", docs);
        return client.close();
      });
  })
  .catch(err => {
    console.error("Error:", err);
  });
