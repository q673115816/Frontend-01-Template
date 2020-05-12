const http = require('http')
const util = require('util')
const server = http.createServer((req, res) => {
    console.log('visit');
    
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
});
server.listen(8888, () => {
    console.log('server start')
})