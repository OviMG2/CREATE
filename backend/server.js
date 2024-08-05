const express = require('express');
const pool = require('./db'); // Importă pool-ul de conexiuni

const app = express();
const port = 5000; // Portul pentru backend

app.get('/api/data', (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.listen(port, () => {
  console.log(`Serverul rulează la http://localhost:${port}`);
});
