const http = require('http')
const url = require('url')
const https = require('https')

const server = http.createServer((req, res, next) => {
    if(req.url.match(/^\/auth/)) {
        // http.request()
        const parseUrl = url.parse(req.url, true)
        const {code} = parseUrl.query
        let params = 'client_id=Iv1.ffc7186734249e56&client_secret=e851d6cb5e18899aee08d2a096e56ba0d321de12&code=' + code

        const options = {
            hostname: 'github.com',
            method: 'POST',
            path: '/login/oauth/access_token?' + params
        };

        const request = https.request(options, (response) => {
            let data = ''
            response.on('data', (d) => {
                data += d
                process.stdout.write(d);
            });
            response.on('end', () => {
                res.end(data)
                console.log('响应中已无数据');
            });
        });
        request.end()
        return;
    }
    res.end('root')
})

server.listen(8080, () => {
    console.log('http server in 8080');
})