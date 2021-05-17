const http = require("http");

function createQuote(port, quote)
{
    const server = http.createServer((request,repsonse) => {
        response.write(quote);
        response.end();
    });

    server.listen(port);
}

module.exports = createQuote;
