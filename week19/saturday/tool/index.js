const fs = require('fs')

const http = require('http')

const path = require('path')

const img = 'download.jpg'

fs.stat(img, (err, stats) => {

    const options = {
        host: 'localhost',
        port: 3001,
        path: `/s?filename=${img}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/octet-stream',
            'Content-Length': stats.size
        }
    }
    const req = http.request(options, (res) => {

    })

    req.on('error', (e) => console.log(e))
    let readStream = fs.createReadStream(path.join(__dirname, img))
    readStream.pipe(req)
    readStream.on('end', () => {
        req.end()
    })
})