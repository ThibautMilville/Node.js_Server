http = require('http');
// File system and url modules
fs = require('fs');
url = require('url');

// Create server
http.createServer((req, res) => {
  //console.log(url.parse(req.url, true).query.nom);
  fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) {
      // Manage error
      res.writeHead(404);
      res.write('File not found');
    }
    else {
      // Write content of the HTML file and replace the **** with the name
      res.writeHead(200, {
        'Content-Type': 'text/html, charset=utf-8'
      });
      if(url.parse(req.url, true).query.nom == undefined)
        res.write(data.replace('*****', ''));
      else {
        res.write(data.replace('*****', url.parse(req.url, true).query.nom));
      }
    }
    res.end();
  });
}).listen(8080, () => {
  console.log('Server is running...');
});