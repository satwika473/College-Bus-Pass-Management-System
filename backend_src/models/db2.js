const mysql = require('mysql2');
require('dotenv').config();

const db2 = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'admin_auth'
});

db2.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

module.exports = db2;
