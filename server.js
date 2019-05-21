const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();

const router = jsonServer.router('./db.json');
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789';

const expiresIn = '1h';

const createToken = payload => jwt.sign(payload, SECRET_KEY, { expiresIn });

const verifyToken = token => jwt.verify(token, SECRET_KEY, (err, decode) => (decode !== undefined ? decode : err));

const isAuthenticated = ({ email, password }) => {
  const indexUser = userdb.users.findIndex(
    user => user.email === email && user.password === password
  );
  if (indexUser < 0) return false;

  const currentUser = userdb.users[indexUser];
  const userData = {
    id: currentUser.id,
    name: currentUser.name,
    email: currentUser.email,
    image: currentUser.image
  };
  return userData;
};

server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = isAuthenticated({ email, password });
  if (user) {
    const access_token = createToken({ email, password });
    res.status(200).json({
      ...user,
      access_token
    });
  }
  const status = 401;
  const message = 'Incorrect email or password';
  res.status(status).json({ status, message });
});

server.get('/auth/me', (req, res) => {
  console.log(req.headers);
  const { email, password } = verifyToken(
    req.headers.authorization.split(' ')[1]
  );
  const user = isAuthenticated({ email, password });
  if (user) {
    const access_token = createToken({ email, password });
    res.status(200).json({
      ...user,
      access_token
    });
  }
  const status = 401;
  const message = 'access_token is not correct';
  res.status(status).json({ status, message });
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined
    || req.headers.authorization.split(' ')[0] !== 'Bearer'
  ) {
    const status = 401;
    const message = 'Error in authorization format';
    res.status(status).json({ status, message });
    return;
  }
  try {
    verifyToken(req.headers.authorization.split(' ')[1]);
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error access_token is revoked';
    res.status(status).json({ status, message });
  }
});

server.listen(3000, () => {
  console.log('Run Auth API Server');
});
