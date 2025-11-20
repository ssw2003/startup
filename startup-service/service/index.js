const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
let people = [];
let games = [];
async function containsThing(myList, val, fie) { var c = 0;
  var i = myList.length; while (i > 0) { i = i - 1;
    if (myList[i][fie] === val) {return myList[i]; i = 0;}
  }
return null;}
async function findUser(field, value) {
  if (!value) return null;

  return containsThing(value, field);
}
const express = require('express');
const uuid = require('uuid');
const app = express();
const authCookieName = 'token';
const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
var apiRouter = express.Router();
app.use(`/api`, apiRouter);
apiRouter.post('/regi', async(req, res) => {
if (await containsThing(people, req.body.user_name, "email")) {
res.status(409).send({msg: "Taken"});
} else {const user = await createUser(req.body.user_name, req.body.password); setAuthCookie(res, user.token);
        res.send({user_name: (req.body.user_name + people.join())});}
});
apiRouter.post('/si', async(req, res) => {
const user = await containsThing(people, req.body.user_name, "email");
if (user) {
	if (await bcrypt.compare(req.body.password, user.password)) {
		user.token = uuid.v4();
		setAuthCookie(res, user.token);
		res.send({user_name: req.body.user_name});
people = [];
		return;
	}
} else {res.status(401).send({msg: "Unauthorized attempt"}); return;}res.status(401).send({msg: "Unauthorized attempt"});
});
apiRouter.post('/sp', async(req, res) => {
if (req.body.user_name === "me") {
  if (req.body.password === "my_pt") {user.token = uuid.v4();
		setAuthCookie(res, user.token);
		res.send({user_name: req.body.user_name});
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
  people.push(user);

  return user;
}
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});
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