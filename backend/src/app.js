const express = require('express');
const cors = require('cors');
const healthRoutes = require('./routes/health');
const nudgesRoutes = require('./routes/nudges');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/health', healthRoutes);
app.use('/api/nudges', nudgesRoutes);

module.exports = app;
