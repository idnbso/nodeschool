const util = require("util");
const mongo = require("mongodb").MongoClient;

const removeUser = async (databaseName, collectionName, id) => {
  const client = await getMongoClientConnection();

  const db = client.db(databaseName);

  await db.collection(collectionName).remove({
    _id: id,
  });

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

const databaseName = process.argv[2];
const collectionName = process.argv[3];
const id = process.argv[4];
removeUser(databaseName, collectionName, id);
