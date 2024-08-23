const { db } = require('./database');

class Flight {
  constructor(id, origin, destination, flightNumber, departureTime, arrivalTime, polygonBoundary) {
    this.id = id;
    this.origin = origin;
    this.destination = destination;
    this.flightNumber = flightNumber;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.polygonBoundary = polygonBoundary;
  }

  static createTable() {
    const query = `
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
    db.run(query, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Flights table created or already exists.');
      }
    });
  }

  static insert(flight) {
    const query = `
      INSERT INTO flights (origin, destination, flight_number, departure_time, arrival_time, polygon_boundary)
      VALUES (?, ?, ?, ?, ?, ?);
    `;
    db.run(query, flight.origin, flight.destination, flight.flightNumber, flight.departureTime, flight.arrivalTime, flight.polygonBoundary, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Flight inserted into the database.');
      }
    });
  }

  static getAll() {
    const query = `
      SELECT * FROM flights;
    `;
    return new Promise((resolve, reject) => {
      db.all(query, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  static getById(id) {
    const query = `
      SELECT * FROM flights WHERE id = ?;
    `;
    return new Promise((resolve, reject) => {
      db.get(query, id, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }
}

module.exports = Flight;