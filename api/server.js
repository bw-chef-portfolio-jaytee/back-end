const express = require('express');
const helmet = require('helmet');

const chefRoute = require('./chef_route/chef_route_router');
const userRoute = require('./user_route/user_route_router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/chef", chefRoute);
server.use("/api/user", userRoute);


module.exports = server;