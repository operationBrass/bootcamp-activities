// Require/import the HTTP module
//The http module contains the function to create the server
const http = require('http');

// Define a port AND a host to listen for incoming requests

// The value localhost is a special private address that computers use to refer to themselves. It’s typically the equivalent of the internal 
// IP address 127.0.0.1 and it’s only available to the local computer, not to any local networks we’ve joined or to the internet.
//Ports 8080 and 8000 are typically used as default ports in development, 
//and in most cases developers will use them rather than other ports for HTTP servers.
//http://localhost:8080 in your browser to visit the server 
const host = "localhost";
const PORT = 8080;

// Create a generic function to handle requests and responses
const handleRequest = (request, response) => {
  // Send the below string to the client when the user visits the PORT URL
  // add response code 200 to indicate everything was OK 
  response.writeHead(200)
  response.end(`It Works!! Path Hit: ${request.url}`);
};

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});