const { User } = require("../models");

const userData = [
  {
    username: "Tyler8",
    email: "tyler.rudman@gmail.com",
    password: "$2b$10$MY6HYz3jhaK84UWRDu4HA.JPEA96oJy.vPB6WQahnQoTX1ycr0nau",
  },
  {
    username: "KyleK",
    email: "kyle@gmail.com",
    password: "$2b$10$MY6HYz3jhaK84UWRDu4HA.JPEA96oJy.vPB6WQahnQoTX1ycr0nau",
  },
  {
    username: "MatthewC",
    email: "matt@gmail.com",
    password: "$2b$10$MY6HYz3jhaK84UWRDu4HA.JPEA96oJy.vPB6WQahnQoTX1ycr0nau",
  },
  {
    username: "JakobA",
    email: "jakob@gmail.com",
    password: "$2b$10$MY6HYz3jhaK84UWRDu4HA.JPEA96oJy.vPB6WQahnQoTX1ycr0nau",
  },
  {
    username: "Pavel",
    email: "pavel@gmail.com",
    password: "$2b$10$MY6HYz3jhaK84UWRDu4HA.JPEA96oJy.vPB6WQahnQoTX1ycr0nau",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
