http = require('http');
// File system
fs = require('fs');
url = require('url');

// Create server
http.createServer((req, res) => {
  //console.log(url.parse(req.url, true).query.nom);
  fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('File not found');
    }
    else {
      res.writeHead(200, {
        'Content-Type': 'text/html, charset=utf-8'
      });
      res.write(data.replace('****', url.parse(req.url, true).query.nom));
    }
    res.end();
  });
}).listen(8080, () => {
  console.log('Server is running...');
});