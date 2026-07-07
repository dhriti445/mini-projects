//Insert Many
import {MongoClient} from 'mongodb'
const url = "mongodb://127.0.0.1:27017";
const dbName = "university";

MongoClient.connect(url)
  .then(client => {
    const db = client.db(dbName);
    const collection = db.collection("student");
    const docs = [
      { name: "Ayush", srn: "104" },
      { name: "Ajay", srn: "105" }
    ];

    return collection.insertMany(docs)
      .then(res => {
        console.log(`${res.insertedCount} documents inserted.`);
        return client.close();
      });
  })
  .catch(err => {
    console.error("Error:", err);
  });
