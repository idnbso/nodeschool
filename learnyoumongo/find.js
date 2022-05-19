const util = require("util");
const mongo = require("mongodb").MongoClient;

const getParrotsWithAtleastAge = async (age) => {
  const client = await getMongoClientConnection();

  try {
    const db = client.db("learnyoumongo");
    const parrotsCollection = db.collection("parrots");

    const parrots = await parrotsCollection
      .find({ age: { $gt: age } })
      .toArray();

    console.log(JSON.parse(JSON.stringify(parrots)));
  } catch (err) {
    console.error(err);
  } finally {
    if (client) {
      client.close();
    }
  }
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

const age = process.argv[2];
getParrotsWithAtleastAge(Number(age));
