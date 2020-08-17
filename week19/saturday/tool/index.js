const fs = require('fs')

const http = require('http')

const img = './qyqx.jpg'

fs.stat(img, (err, stats) => {
    http.request('localhost:3001/s', (res) => {
        
    })
})