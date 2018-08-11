
// Import Express library
// and create an HTTP server.
const express = require('express');
const app = express();

// Import htmlencode library.
const htmlencode = require('htmlencode');

// Create default route.
app.get('/', (req, res) => {
  res.send('Add a JS expression to the URL.');
});

// Encode the untrusted input with the htmlEncode()
// function from the htmlencode library.
app.get('/:data', (req, res) => {
  var encdodedString = htmlencode.htmlEncode(req.params['data']);
  res.send(encdodedString);
});

// Begin server.
app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
