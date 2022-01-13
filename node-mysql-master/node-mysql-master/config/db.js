require('dotenv').config();

const mysql = require('mysql2');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});
console.log('connected to db')
    // let sql = "SELECT * FROM posts;";

// pool.execute(sql, function(err, result) {
//     if (err) throw err;
//     console.log(result);

//     // to iterate
//     result.forEach((res) => {
//         console.log(res.body)
//     })
// });

module.exports = pool.promise();

// Run: node config/db.js