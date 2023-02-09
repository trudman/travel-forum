const { Comment } = require("../models");

const commentData = [
  {
    comment_text:
      "Beautiful location!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      "Would love to visit someday!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text:
      "My wife and I are visiting this summer!",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "Can't wait to visit!",
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text: "Weather was perfect.",
    user_id: 5,
    post_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
