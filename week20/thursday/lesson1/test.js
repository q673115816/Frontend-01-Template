const http = require('http')

http.createServer((req, res, next) => {
    res.end('<div>hello world!</div>')
}).listen(3000, () => {
    console.log('server live in 3000')
})