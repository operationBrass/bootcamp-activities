const createQuote = require("./createServer");

const servers = require(createServer);
const PORT = process.env.PORT;
createQuote(PORT,"It is what it is what it isnt");