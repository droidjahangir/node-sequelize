const sq = require('sequelize')

const sequelize = new sq('socialnetwork', 'root', 'jahangirdevs', { 
    host: '127.0.0.1', 
    dialect: 'mysql', 
    operatorAliases: false
})

module.exports = sequelize;
global.sequelize = sequelize;