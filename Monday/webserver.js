const http = require("http");

let server = http.createServer(function(request, response) {
    console.log("Got request");
    response.write("Hello!");
    response.end();
}); 

server.listen(3000);