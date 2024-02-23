//! HTTP API with vanilla node.js

const http = require('http')

//* create a http server and handle requests:
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        //? http state and handle headers:
        res.writeHead(200, { 'Content-Type': 'application/json' })

        //? send response
        res.end(JSON.stringify({ message: 'Request is successfully handled.' }))
    }
    if (req.method === 'POST' && req.url === "/new") {
        //? http state and handle headers:
        res.writeHead(201, { 'Content-Type': 'application/json' })

        //? send response
        res.end(JSON.stringify({ message: 'Request is successfully created.' }))
    }
})

// which port is going to be used for server:
server.listen(3007, '127.0.0.1', () => {
    console.log('Server started listening on port 3007');
})