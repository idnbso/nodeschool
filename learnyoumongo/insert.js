const util = require("util");
const mongo = require("mongodb").MongoClient;

const insertDoc = async (firstName, lastName) => {
  const client = await getMongoClientConnection();

  const db = client.db("learnyoumongo");

  const doc = {
    firstName,
    lastName,
  };
  await db.collection("docs").insertOne(doc);

  console.log(JSON.stringify(doc));
  client.close();
};

const getMongoClientConnection = () => {
  try {
    const url = "mongodb://localhost:27017";
    const connect = util.promisify(mongo.connect);
    return connect(url);
  } catch (err) {
    console.error(err);
  }
};

const firstName = process.argv[2];
const lastName = process.argv[3];
insertDoc(firstName, lastName);
