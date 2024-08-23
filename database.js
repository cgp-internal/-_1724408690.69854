const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    initDbSchema();
  }
});

function initDbSchema() {
  const flightsTable = `
    CREATE TABLE IF NOT EXISTS flights (
      id INTEGER PRIMARY KEY,
      origin TEXT,
      destination TEXT,
      flight_number TEXT,
      departure_time TEXT,
      arrival_time TEXT,
      polygon_boundary TEXT
    );
  `;
  db.run(flightsTable, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Flights table created or already exists.');
    }
  });
}

module.exports = { db };