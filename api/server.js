const express = require('express');
const helmet = require('helmet');

const validateToken = require('./middleware/ValidateToken');

const chefRoute = require('./chef_route/chef_route_router');
const userRoute = require('./user_route/user_route_router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/chef", validateToken, chefRoute);
server.use("/api/user", userRoute);


module.exports = server;