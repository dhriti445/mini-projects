//Insert One

import {MongoClient} from 'mongodb'
const url = "mongodb://127.0.0.1:27017";
const dbName = "university";

MongoClient.connect(url)
  .then(client => {
    const db = client.db(dbName);
    const collection = db.collection("student");
    return collection.insertOne({ name: "PAC", srn: "000" })
      .then(res => {
        console.log("1 document inserted:", res.insertedId);
        return client.close();
      });
  })
  .catch(err => {
    console.error("Error:", err);
  });
