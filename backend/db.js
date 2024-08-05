const { Pool } = require('pg');

const pool = new Pool({
  user: 'utilizator',           // Numele utilizatorului PostgreSQL
  host: 'localhost',            // Adresa serverului PostgreSQL
  database: 'numele_bazei_de_date', // Numele bazei de date
  password: 'parola',           // Parola utilizatorului PostgreSQL
  port: 5432,                   // Portul PostgreSQL (implicit este 5432)
});

pool.connect((err) => {
  if (err) {
    console.error('Eroare de conexiune:', err.stack);
  } else {
    console.log('Conectat la baza de date!');
  }
});

module.exports = pool;
