const mysql = require('mysql')

// Create a connection to the database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
})

// Open the MySQL connection
db.connect((error) => {
    !error ? console.log(`DB connecion succeded!`) : console.log('DB connecion failed \n Error :' + JSON.stringify(err, undefined, 2))
})

module.exports = db