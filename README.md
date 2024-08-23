Flight API Web Server Application

This is a Node.js web server application that provides a RESTful API for handling flight requests and sending responses in JSON format. The application uses Express.js as the web framework and Leaflet.js for interactive mapping.

How to Run
-----------

1. Install Node.js (if not already installed) and navigate to the project directory.
2. Run `./run.sh` to install necessary dependencies and start the server.

Note: Make sure you have the necessary permissions to run the script.

Project Structure
-----------------

The project is structured as follows:

* `app.js`: Main entry point for the web server application.
* `routes/api.js`: Defines routes for handling flight requests and sending responses in JSON format.
* `controllers/flightController.js`: Contains logic for processing flight requests based on polygon boundaries.
* `services/flightService.js`: Provides functions for processing polygon boundaries and sending requests to flight APIs.
* `models/flight.js`: Defines schema for storing flight request data.
* `database.js`: Sets up SQLite database connection and initializes database schema.
* `public/index.html`: Main HTML file for the web server application, includes Leaflet.js for interactive mapping.
* `public/js/index.js`: JavaScript code for handling user interactions on the map and sending requests to the backend API.

Troubleshooting
---------------

If you encounter any issues while running the application, check the console logs for errors and consult the project documentation for further assistance.