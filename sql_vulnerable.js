
// Import Express library
// and create an HTTP server.
const express = require('express');
const app = express();

// Create default route.
app.get('/', (req, res) => {
  res.send('Add a SQL expression to the URL.');
});

// Insecure route.
app.get('/:data', (req, res) => {
  
  var sql = 'SELECT * FROM Users WHERE LastName = \'' + req.params['data'] + '\';';
  res.send('Executing command: ' + sql);
});

// Begin server.
app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
