const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'eusp_bot',
    'root',
    'root',
    {
        host: '',
        port: '',
        dialect: ''
    }
)
