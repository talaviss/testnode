/**
 * Created by tal avissar on 27/05/2014.
 *
 * this is the main enterance file
 */
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) = > {
    res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n');
}).
listen(port, hostname, () = > {
    console.log(`Server running at http://${hostname}:${port}/`);
})
;