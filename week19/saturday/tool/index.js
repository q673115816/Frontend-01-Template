const fs = require('fs')

const http = require('http')

const img = './qyqx.jpg'

fs.stat(img, (err, stats) => {

    const options = {
        host: 'localhost',
        port: 3001,
        path: '/s?filename=qyqx.jpg',
        method: 'POST',
        headers: {
            'Content-Type': 'application/octet-stream',
            'Content-Length': stats.size
        }
    }
    const req = http.request(options, (res) => {

    })

    req.on('error', (e) => console.log(e))
    let readStream = fs.createReadStream(img)
    readStream.pipe(req)
    readStream.on('end', () => {
        req.end()
    })
})