#!/bin/bash

# Install Node
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Init a project
npm init -y

# Install Express
npm install express

# Install Leaflet.js
npm install leaflet

# Start the server
node app.js