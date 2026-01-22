const express = require('express');
const clientRouter = express.Router();

clientRouter.get('/', (req, res) => {
  res.json({ name: 'Scoolkit Store Client', version: '1.0.0' });
});

module.exports = clientRouter;