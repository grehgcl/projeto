const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'greg',
    password: '12345',
    database: 'agenda-petshop'
})

module.exports = conexao