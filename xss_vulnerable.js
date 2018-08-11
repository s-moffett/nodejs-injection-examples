
// Import Express library
// and create an HTTP server.
const express = require('express');
const app = express();

// Create default route.
app.get('/', (req, res) => {
  res.send('Add a JS expression to the URL.');
});

/* 
  Insecure route.

  This route is open to cross-site scripting attacks.
  Sending a JavaScript expression as a route parameter 
  will cause the app to return the expression and the 
  client browser to execute the expression as code. 

  Example: http://localhost:3000/<script>alert('XSS Attack');<%2fscript>
*/
app.get('/:data', (req, res) => {
  res.send(req.params['data']);
});

// Begin server.
app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
