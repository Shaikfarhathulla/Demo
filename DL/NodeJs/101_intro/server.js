// Importing the http package
const http = require('http');

// Creating the server
const server = http.createServer(function (request, response) {
    console.log(request.url);

    response.write('Welcome to Node JS App');
    response.end();
});

// Starting the http server and listening for the changes.
server.listen(4000, function () {
    console.log('Server is running on port no 4000');
});