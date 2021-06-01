# Star Wars 05

## File

* `server5.js`

## Instructions

* Spend a few moments researching what `express.json` is for and what `req.body` means in the context of Express.

express.json - Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option.
req.body - Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.

  * Then research how you can POST data to the Express server.
express object called app
app.post()
app.all()
app.method()

### Bonus

* Use Insomnia Core to send a POST request to the server you've been provided. Confirm that your character has been added to the database correctly.
