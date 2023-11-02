var http  = require ('http'); // allows you to create a HTTP server and handle HTTP requests and responses.

http.createServer(function (req, res) { // creates HTTP server instance takes in two parameters - request and response
    res.writeHead(200, {'Content-Type': 'text/html'}); // outputs status code 200, meaning ok, and content type of text/html. res.writeHead() method is used to send an HTTP response header to the requestor.
    res.end('Testing...'); // sends string 'Testing...' as response body. res.end() method is used to send the response to the client and indicate that the server has completed sending the response.
}).listen(8080); // tells the server to listen on port 8080 a common choice for testing, but in this case the port doesnt really matter. When a client makes a request to the server's 
// IP address on port 8080, the server will handle the request and send the specified response.