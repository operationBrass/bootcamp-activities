const http = require("http");

function createQuote(port, quote)
{
    const server = http.createServer((request,repsonse) => {
        Response.write(quote);
        Response.end();
    });

    server.listen(port);
}

module.exports = createQuote;
