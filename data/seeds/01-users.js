const bcrypt = require("bcryptjs");


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chefs').del()
    .then(function () {
      // Inserts seed entries
      return knex('chefs').insert([
        {username: 'loremenius', password:bcrypt.hashSync("zed",8), location:"Colorado"},
        {username: 'jjdahairplane', password:bcrypt.hashSync("leona",8), location:"California"},
        {username: 'driftwud', password:bcrypt.hashSync("jhin",8), location:"Colorado"},
        {username: 'fizzwerth', password:bcrypt.hashSync("urgot",8), location:"Colorado"},
      ]);
    });
};
