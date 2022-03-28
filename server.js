const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = https://bd-json.herokuapp.com/ || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
