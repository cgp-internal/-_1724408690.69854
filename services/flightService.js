const axios = require('axios');

class FlightService {
  async processPolygonBoundaries(polygonBoundaries) {
    try {
      const apiUrl = 'https://example-flight-api.com/api/flights'; // replace with actual API URL
      const response = await axios.post(apiUrl, { polygonBoundaries });
      const flightData = response.data;
      return flightData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = { processPolygonBoundaries: FlightService.prototype.processPolygonBoundaries.bind(new FlightService()) };