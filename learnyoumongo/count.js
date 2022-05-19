const util = require("util");
const mongo = require("mongodb").MongoClient;

const countParrotsByAge = async (databaseName, collectionName, age) => {
  const client = await getMongoClientConnection();

  const db = client.db(databaseName);

  const totalParrots = await db.collection(collectionName).count({
    age: { $gt: age },
  });

  console.log(totalParrots);
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

const databaseName = "learnyoumongo";
const collectionName = "parrots";
const age = process.argv[2];
countParrotsByAge(databaseName, collectionName, +age);
