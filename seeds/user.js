const { User } = require("../models");

const userData = [
  {
    username: "Tyler8",
    email: "tyler.rudman@gmail.com",
    password: "password1",
  },
  {
    username: "KyleK",
    email: "kyle@gmail.com",
    password: "password1",
  },
  {
    username: "MatthewC",
    email: "matt@gmail.com",
    password: "password1",
  },
  {
    username: "JakobA",
    email: "jakob@gmail.com",
    password: "password1",
  },
  {
    username: "Pavel",
    email: "pavel@gmail.com",
    password: "password1",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
