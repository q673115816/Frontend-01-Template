const net = require('net');

class Request {
    // method, url = host + port + path
    // body: k/v
    // headers
    constructor(options) {
        this.method = options.method || 'GET'
        this.host = options.host
        this.port = options.port || 80
        this.path = options.path || '/'
        this.body = options.body || {}
        this.headers = options.headers || {}
        if (!this.headers['Content-Type']) {
            this.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }
        if (this.headers['Content-Type'] === 'application/json') {
            this.bodyText = JSON.stringify(this.body)
        } else if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            this.bodyText = Object.keys(this.body)
                .map(key => `${key}=${encodeURIComponent(this.body[key])}`)
                .join('&')
        }
        this.headers['Content-Length'] = this.bodyText.length

    }
    toString() {
        return `${this.method} ${this.path} HTTP/1.1\n${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\n')}\n
        \n
        ${this.bodyText}
        `
    }
    open(method, url) {

    }
    send(connection) {
        return new Promise((resolve, reject) => {
            const parser = new ResponseParser
            if(connection) {
                connection.write(this.toString())
            } else {
                connection = net.createConnection({
                    host: this.host,
                    port: this.port
                }, () => {
                    connection.write(this.toString())
                })
                connection.on('data', (data) => {
                    parser.receive(data.toString())
                    // resolve(data.toString())
                    connection.end()
                })
                connection.on('error', (err) => {
                    resolve(err)
                    connection.end()
                })
            }
        })


    }
}

class Response {

}

class ResponseParser {
    constructor() {
        this.WAITING_STATUS_LINE = 0
        this.WAITING_STATUS_LINE_END = 1
        this.WAITING_HEADER_NAME = 2
        this.WAITING_HEADER_VALUE = 3
        this.WAITING_HEADER_LINE_END = 4
        this.WAITING_HEADER_BLOCK_END = 5

        this.current = this.WAITING_STATUS_LINE
        this.statusLine = ''
        this.headers = {}
        this.headerName = ''
        this.headerValue = ''
    }
    receive(string) {
        console.log(string.length);
        
        for(let i = 0;i<string.length;i++) {
            this.receiveChar(string.charAt(i))
        }
    }
    receiveChar(char) {
        if(this.current === this.WAITING_STATUS_LINE) {
            if(char === '\n') {
                console.log('qwe')
            }
            this.statusLine += char
        }
    }
}

class TRunkedBufferParser {

}

void async function () {
    let requset = new Request({
            method: 'POST',
            host: '127.0.0.1',
            port: '8888',
            path: '/',
            headers: {
                ['X-Foo']: 'customed'
            },
            body: {
                name: 'qqx'
            }
        })
        let response = await requset.send()
        console.log(response)
}()



// const client = net.createConnection({
//     host: '127.0.0.1',
//     port: 8888
// }, () => {
//     // 'connect' 监听器
//     console.log('已连接到服务器');
//     // client.write(`GET / HTTP/1.1\n
//     // Content-Type: application/x-www-form-urlencoded\n
//     // Content-Length: 11\n
//     // \n
//     // name=winter`)
//     let requset = new Request({
//         method: 'POST',
//         host: '127.0.0.1',
//         port: '8888',
//         path: '/',
//         headers: {
//             ['X-Foo']: 'customed'
//         },
//         body: {
//             name: 'qqx'
//         }
//     })
//     client.write(requset.toString())
// });
// client.on('data', (data) => {
//     console.log(data.toString());
//     client.end();
// });
// client.on('end', () => {
//     console.log('已从服务器断开');
// });

// client.on('error', (err) => {
//     console.log(err)
// })