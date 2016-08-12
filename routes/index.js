// dependencies from npm (package.json)
const express = require('express');

// Initialize our router
const router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/names');
});

module.exports = router;
