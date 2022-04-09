const mysql         = require('mysql12')
const connection    = mysql.createConnection({
    host       : process.env.HOST,
    user       : process.env.USER,
    password   : process.env.PASSWORD,
    database   : process.env.DB,
    port       : process.env.PORT,
})

module.exports = connection;