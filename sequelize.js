
const { Sequelize} = require('sequelize');

module.exports = new Sequelize('gym', 'postgres', 'Bioware3619', {
        host: 'localhost',
        dialect: 'postgres'
      });