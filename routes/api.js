const express = require('express');
const apiRouter = express.Router();
const { processFlightRequest } = require('./controllers/flightController');

apiRouter.post('/flight', async (req, res) => {
  try {
    const flightRequest = req.body;
    const flightData = await processFlightRequest(flightRequest);
    res.json(flightData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to process flight request' });
  }
});

module.exports = { apiRouter };