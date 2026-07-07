//Delete One Document

import {MongoClient} from 'mongodb'
const url = "mongodb://127.0.0.1:27017";
const dbName = "university";

MongoClient.connect(url)
  .then(client => {
    const db = client.db(dbName);
    const collection = db.collection("student");
    const query = { name: "Ayush" };

    return collection.deleteOne(query)
      .then(res => {
        console.log("Deleted:", res.deletedCount);
        return client.close();
      });
  })
  .catch(err => {
    console.error("Error:", err);
  });
