const mysql = require('mysql2');
require('dotenv').config();

const db1 = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'deptco_auth'
});

db1.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

module.exports = db1;
