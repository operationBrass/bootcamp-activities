//File system object from node
// copy the file path from the command line 
// create a buffer of the files contents

const fs = require("fs");
const fileToRead = process.argv[2]; 
const buffer = fs.readFileSync(fileToRead);
const fileContents = buffer.toString();
const count = fileContents.split("\n");

console.log(count.length-1);








