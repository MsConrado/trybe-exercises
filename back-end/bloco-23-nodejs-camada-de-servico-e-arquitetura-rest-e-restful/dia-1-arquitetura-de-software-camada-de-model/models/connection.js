const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'matheus',
  password: '25030606',
  database: 'model_example',
});

module.exports = connection;
