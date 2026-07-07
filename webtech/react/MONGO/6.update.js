//Update One Document

import {MongoClient} from 'mongodb'
const url = "mongodb://127.0.0.1:27017";
const dbName = "university";

MongoClient.connect(url)
  .then(client => {
    const db = client.db(dbName);
    const collection = db.collection("student");

    const query = { name: "Ajay" };
    const update = { $set: { name: "Krishna", age: 21 } };

    return collection.updateOne(query, update)
      .then(res => {
        console.log("Matched:", res.matchedCount, "Modified:", res.modifiedCount);
        return client.close();
      });
  })
  .catch(err => {
    console.error("Error:", err);
  });
