require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
});
// console.log("🔐 Password from .env:", process.env.DB_PASSWORD);

connection.connect((err) => {
  if (err) {
    console.error("❌ Azure MySQL connection error:", err.message);
  } else {
    console.log("✅ Connected to Azure MySQL!");
  }
});

module.exports = connection;
