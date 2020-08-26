const process = require('child_process')
const http = require('http')
const https = require('https')
const { CODEURL } = require('./config')
const url = require('url')


process.exec(`start ${CODEURL}`)

const server = http.createServer((req, res, next) => {
    if (req.url === '/favicon.ico') {
        return res.end('')
    }
    const parseUrl = url.parse(req.url, true)
    const {
        access_token: token } = parseUrl.query
        console.log(token);
    const options = {
        hostname: 'api.github.com',
        method: 'GET',
        path: '/user',
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Authorization': `token ${token}`
        }
    };
    const request = https.request(options, (response) => {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));  
        let data = ''
        response.on('data', (d) => {
            console.log(d);
            data += d
        });
        response.on('end', () => {
            console.log(data);
            // res.end(data)
            response.pipe(res)
        })
    })
    request.end()
})

server.listen(3000, () => {
    console.log('server working in 3000');
})