import { MongoClient } from "mongodb";
MongoClient.connect("mongodb://127.0.0.1:27017")

.then((client)=>{
    console.log("database connection success");
    const db=client.db("University");
    console.log(`Database "${dbName}" is created`);
    client.close();
})
.catch((err)=>{
    console.log("Error:",err);
})