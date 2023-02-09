const { Post } = require("../models");

const postData = [
  {
    title: "Bahamas",
    post_text: "This was a once in a lifetime vacation!",
    user_id: 1,
  },
  {
    title: "Cancun",
    post_text: "Went for spring break and it was amazing!",
    user_id: 2,
  },
  {
    title: "San Diego, California",
    post_text: "Beaches were beautiful!",
    user_id: 3,
  },
  {
    title: "Italy",
    post_text: "Amazing vacation to visit my family!",
    user_id: 4,
  },
  {
    title: "Spain",
    post_text: "Food was delicious!",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
