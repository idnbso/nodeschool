const util = require("util");
const mongo = require("mongodb").MongoClient;

const getParrotsWithAtleastAge = async (age) => {
  const client = await getMongoClientConnection();

  const db = client.db("learnyoumongo");

  db.collection("parrots")
    .find({ age: { $gt: age } }, { projection: { _id: 0 } })
    .toArray((err, parrots) => {
      if (err) {
        console.error(err);
        return client.close();
      }

      console.log(JSON.parse(JSON.stringify(parrots)));
      client.close();
    });
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
