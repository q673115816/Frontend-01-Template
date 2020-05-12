const net = require('net');
const client = net.createConnection({
    host: '127.0.0.1',
    port: 8888
}, () => {
    // 'connect' 监听器
    console.log('已连接到服务器');
        client.write('POST / HTTP/1.1\r\nContent-Length: 11\r\nContent-Type: appliction/x-www-form-urlencoded\r\n\r\nfield=aa')
});
client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});
client.on('end', () => {
    console.log('已从服务器断开');
});

client.on('error', (err) => {
    console.log(err)
})