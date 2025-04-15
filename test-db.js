const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'tasktracker.mysql.database.azure.com',
  user: 'prabhat@tasktracker',
  password: 'Dawn@0000',
  database: 'tasktracker',
  port: 3306,
  ssl: {
    rejectUnauthorized: false
  }
});

connection.connect((err) => {
  if (err) {
    return console.error('❌ Connection error:', err.message);
  }
  console.log('✅ Successfully connected to Azure MySQL!');
  connection.end();
});
