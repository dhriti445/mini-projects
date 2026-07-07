//Drop Collection

import {MongoClient} from 'mongodb'
const url = "mongodb://127.0.0.1:27017";
const dbName = "university";

MongoClient.connect(url)
  .then(client => {
    const db = client.db(dbName);
    return db.collection("student").drop()
      .then(res => {
        console.log("Collection dropped:", res);
        return client.close();
      });
  })
  .catch(err => {
    console.error("Error:", err);
  });
