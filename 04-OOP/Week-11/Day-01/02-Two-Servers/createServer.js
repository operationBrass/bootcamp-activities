const http = require("http");

function createQuote(port, quote)
{
    const server = http.createServer((request,response) => {
        response.end(quote);
    });

    server.listen(port);
    console.log("listening on ", port)
}

module.exports = createQuote;
