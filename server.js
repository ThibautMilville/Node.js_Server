http = require('http');
fs = require('fs');

// Create server
http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('File not found');
    }
    else {
      res.writeHead(200, {
        'Content-Type': 'text/html, charset=utf-8'
      });
      res.write(data);
    }
    res.end();
  }).listen(8080, () => {
    console.log('Server is running...');
  });
});