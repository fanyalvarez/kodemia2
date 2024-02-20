const http = require('node:http');

const hostname = '192.168.100.35'; //localhost
const port = 3001;

const server = http.createServer((req, res) => {
    //console.log(req);
    res.statusCode = 200;
    //   --html
      res.setHeader('Content-Type', 'text/html');
      res.end(`<h1> Hola mundo </h1>`);

    //  ---json
  //   res.setHeader('Content-Type', 'application/json');
  //   res.end(`{
  //   "hola":"mundo"
  // }`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 