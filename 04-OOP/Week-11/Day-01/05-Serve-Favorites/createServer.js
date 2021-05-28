const http = require("http");
const fs = require("fs");
const PORT = 8080;



const home = ((res) =>
{
    fs.readFile("./index.html", (err,data) =>
    {
        if (err) throw Error;
        res.writeHead(200,{  'Content-Type': 'text/html' });
        res.end(data);
    });
});



const FOOD = (req) => 
{
    req.writeHead(200, {  'Content-Type': 'text/html' })
    req.end(
    `<HTML>
    <BODY>
    <H1> Favorite Foods  </H1>
    <OL>
        <LI> Mcc and Cheese </LI>
        <LI> Tika Masala </LI>
    </OL>
    </BODY>
    </HTML>`);
}

const MOVIES = (req) => 
{
    req.writeHead(200, {  'Content-Type': 'text/html' });
    req.end(
    `<HTML>
    <BODY>
    <H1> Favorite Movies  </H1>
    <OL>
        <LI> Die Hard </LI>
        <LI> Faceoff </LI>
    </OL>
    </BODY>
    </HTML>`);
}

const CSS = (req) => 
{
    req.writeHead(200, {  'Content-Type': 'text/html' });
    req.end(
    `<HTML>
    <BODY>
    <H1> Favorite CSS Frameworks  </H1>
    <OL>
        <LI> Bulma </LI>
        <LI> Bootstrap </LI>
    </OL>
    </BODY>
    </HTML>`);
}

const server = http.createServer((request,response) => {

    const getUrl = request.url;
    console.log(getUrl);
    switch (getUrl) {
        case "/":
        return home(response);
        case "/foods.html":
        return FOOD(response);
        case "/css.html":
        return  CSS(response);
        case "/movies.html":
        return  MOVIES(response);
        default:
        break;
    }
});

server.listen(PORT,() => {
    console.log("Listening on port: ", PORT);
});


module.exports = server;
