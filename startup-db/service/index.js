const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');
async function getGames() {
console.log("Reached here");
let b = DB.getGames();
return b;
}
async function findUser(field, value) {
  if (!value) return null;

    if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}
async function findGame(value) {

  return DB.findGame(value);
}

const authCookieName = 'token';

// The service port may be set on the command line
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/regi', async(req, res) => {
if (await findUser("email", req.body.user_name)) {
res.status(409).send({msg: "Taken"});
} else {const user = await createUser(req.body.user_name, req.body.password); setAuthCookie(res, user.token);
        res.send({user_name: (req.body.user_name)});}
});
apiRouter.post('/jsp', async(req, res) => {
if (await findUser("email", req.body.user_name)) {
const user = await findGame(req.body.game_name);
if (user) {
if (user.sp) {res.status(409).send({msg: "Seat taken"}); return;}
else{user.sp = req.body.user_name;await DB.updateGame(user); return;}
}
else{res.status(409).send({msg: "Bad game name"}); return;}
}
else{res.status(409).send({msg: "Unauthenticated"});
}});
apiRouter.post('/jp', async(req, res) => {
const gm=await findGame(req.body.game_name);
if (gm) {
res.status(409).send({msg: "taken game name"}); return;}
await DB.createGame({gn: req.body.game_name});
});
apiRouter.post('/lg', async(req, res) => {
if (await findUser("email", req.body.user_name)) {
getGames().then(b=>{res.send({msg: b});});
return;
}
res.status(409).send({msg: "Unauthenticated"});
});
apiRouter.post('/jfp', async(req, res) => {
if (await findUser("email", req.body.user_name)) {const user = await findGame(req.body.game_name);
if (user) {
if (user.fp) {res.status(409).send({msg: "Seat taken"});  return;}
else {user.fp = req.body.user_name; 
await DB.updateGame(user);  return;}
}
res.status(409).send({msg: "Bad game name"}); return;
} else { 
res.status(409).send({msg: "Unauthenticated"}); }
});
apiRouter.post('/si', async(req, res) => {
const user = await findUser("email", req.body.user_name);
if (user) {
	if (await bcrypt.compare(req.body.password, user.password)) {
		user.token = uuid.v4();
		setAuthCookie(res, user.token);
		res.send({user_name: req.body.user_name});
  await DB.updateUser(user);
		return;
	}
} else {res.status(401).send({msg: "Unauthorized attempt"}); return;}res.status(401).send({msg: "Unauthorized attempt"});
});
apiRouter.post('/sp', async(req, res) => {
if (req.body.user_name === "me") {
  if (req.body.password === "my_pt") {user.token = uuid.v4();
		setAuthCookie(res, user.token);
		res.send({user_name: req.body.user_name});
  await DB.clr();
		return;}
}
res.status(401).send({msg: "Unauthorized attempt"});

});
apiRouter.delete('/so', async(req, res) => {
const user = await findUser('token', req.cookies[authCookieName]);
if (user) {delete user.token;}res.clearCookie(authCookieName);
res.status(204).end();
}
);
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};
async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);

  return user;
}
//app.use(function (err, req, res, next) {
//  res.status(500).send({ type: err.name, message: err.message });
//});
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});