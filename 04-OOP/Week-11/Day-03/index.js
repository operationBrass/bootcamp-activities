const http = require("http");

const httpRequest = (req,res) => {

let postMessage = "";

request.on("data",(data) => { // this function is called each time new data is sent over the HTTP. this is like the on mouse over function as well. 

    postMessage += data;

}; 

request.on("end",(data) => {

    res.setHeader("Content-Type","text-plain");
    res.end();

}

}

const server = http.createServer(httpRequest);
{

server.listen(8080, () => {
    console.log("I am listening");
});