const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url, req.method);
});

server.listen(3000, 'localhost', () => {
    console.log('listening the server');
});

app.get("/", (req, res) => {
    res.send("<h2>Hello World</h2>");
  });