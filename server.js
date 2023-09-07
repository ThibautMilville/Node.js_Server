http = require('http');

// Create server
http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, {
    'Content-Type': 'text/html, charset=utf-8'
  });
  // Write response in the terminal
  console.log('Request received');
  // Write response in the browser
  res.write('Hello <b>World</b>!');
  // End response
  res.end();
}).listen(8080, () => {
  console.log('Server is running...');
});