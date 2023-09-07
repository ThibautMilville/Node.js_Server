http = require('http');

// Create server
http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, {
    'Content-Type': 'text/json'
  });
  // Write response in the terminal
  console.log('Request received');
  // Write response in the browser
  res.write('{ "name": "John", "age": 30, "city": "New York"}')
  // End response
  res.end();
}).listen(8080, () => {
  console.log('Server is running...');
});