const { Post } = require('../models');

const postdata = [
  {
    title: 'New Iphone?',
    post_url: 'https://www.apple.com',
    user_id: 1
  },
  {
    title: 'New Pokemon?',
    post_url: 'https://www.pokemon.com',
    user_id: 2
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
