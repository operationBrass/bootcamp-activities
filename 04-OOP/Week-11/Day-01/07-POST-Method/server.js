const HTTP = require("http");
const FS = require("fs");

const HOST = "localhost";
const PORT = 8080;

function formSubmit(request, response)
{
    if (request.method === "GET") 
    {
        FS.readFile("./index.html",(err,data) => 
        {
            if (err) throw Error;
            response.writeHead(200,{  'Content-Type': 'text/html' });
            response.end(data);
        });
    }
   else if(request.method === "POST")
    {
    //start with empty string
    let usersFormData = "";
    // data is sent in chunks, this will append each chunk into above string
    request.on("data",(chunk) => {
        usersFormData += chunk;
    });
    //once all data is received this close event is triggers and we return the users form input
    request.on("close",() => {
        console.log("Users form data: ", usersFormData);
    });

    request.on("error", () => {

    })

    }

}

const server = HTTP.createServer(formSubmit);
server.listen(PORT,HOST,() => { console.log("im listening")});