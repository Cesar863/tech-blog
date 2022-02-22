const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'cesar',
    email: 'cesar@aol.com',
    password: 'password123'
  },
  {
    username: 'notcesar',
    email: 'notcesar@aol.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
