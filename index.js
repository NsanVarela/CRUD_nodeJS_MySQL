// require(`dotenv`).config();
// const mysql = require("mysql");
// const express = require("express");
// const app = express();
// const bodyparser = require("body-parser");

// app.use(bodyparser.json);

// // Create connection
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     port: process.env.DB_PORT,
// })

// // app.get('createdb', (req, res) => {
// //     let sql = 'CREATE DATABASE nodemysql'
// //     db.query(sql, (err, result) => {
// //         if(err) throw err
// //         console.log(result)
// //         res.send('database created...')
// //     })
// // })

// // Connect
// db.connect((err) => {
//     !err
//         ? console.log("DB connection succeded!")
//         : console.log(`DB connection failed 
//                 Error :${JSON.stringify(err, undefined, 2)}`)
// })

// app.listen(3030, () =>
//     console.log("Express server is running at port n°: 3030")
// )

// app.get(`/users`, (req, res) =>  {
//     // let sql = 'SELECT * FROM Users'
//     db.query(`SELECT * FROM Users`, (err, res) => {
//         if(err) {
//             console.log('error', err)
//             result(null, err)
//             return
//         }
//         console.log(`users: `, res)
//         result(null, res)
//     })
// })

// // User.getAll = result => {
// //     sql.query(`SELECT * FROM Users`, (err, res) => {
// //         if(err) {
// //             console.log('error', err)
// //             result(null, err)
// //             return
// //         }
// //         console.log(`users: `, res)
// //         result(null, res)
// //     })
// // }