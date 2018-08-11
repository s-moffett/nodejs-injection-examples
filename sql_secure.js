
// Import Express library
// and create an HTTP server.
const express = require('express');
const app = express();

// Import sqlstring library.
const sqlstring = require('sqlstring');

// Create default route.
app.get('/', (req, res) => {
  res.send('Add a SQL expression to the URL.');
});

// Encode the untrusted input with the htmlEncode()
// function from the htmlencode library.
app.get('/:data', (req, res) => {

  var encodedString = sqlstring.escape(req.params['data']);
  var sql = 'SELECT * FROM Users WHERE LastName = \'' + encodedString + '\';';
  console.log('SELECT * FROM Users WHERE LastName = \'' + encodedString + '\';');
  res.send('Executing command: ' + sql);
});

// Begin server.
app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
