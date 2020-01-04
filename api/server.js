const express = require('express');
const helmet = require('helmet');

const chefRoute = require('./chef_route/chef_route_router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/chef", chefRoute);


module.exports = server;