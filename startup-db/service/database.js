const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const gameCollection = db.collection('games');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

async function getUser(email) {
  return userCollection.findOne({ email: email });
}
async function createGame(game) {
await gameCollection.insertOne(game);
}
async function getGames() {
  //return gameCollection.find({_id: {$gt: 0}}).toArray();
let m = "{";

await gameCollection.find({}).forEach(function(d){let n="Game: "+d.gn;if (d.fp){n=n+"\n    First Player: "+d.fp;}else{n=n+"\n    First Player: NULL";}
if (d.sp){n=n+"\n    Second Player: "+d.sp;}else{n=n+"\n    Second Player: NULL";}m=m+"\n,\n"+n;

//m=m+"\n"+d;});
});
m=m+"\n}";

return m.toString();
}
async function updateGame(game) {
await gameCollection.updateOne({ gn: game.gn }, { $set: game });
}
function findGame(b) {
return gameCollection.findOne({ gn: b });
}

async function clr() {
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

//async function addScore(score) {
//  return scoreCollection.insertOne(score);
//}

//function getHighScores() {
//  const query = { score: { $gt: 0, $lt: 900 } };
//  const options = {
//    sort: { score: -1 },
//    limit: 10,
//  };
//  const cursor = scoreCollection.find(query, options);
//  return cursor.toArray();
//}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  createGame,
  getGames,
  updateGame,
  findGame,
  clr
};
