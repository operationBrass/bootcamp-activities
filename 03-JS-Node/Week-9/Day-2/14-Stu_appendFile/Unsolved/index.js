// TODO: What are we importing?
const fs = require('fs'); // return file system object

// TODO: Add comments to explain each of the three arguments of appendFile()

// add file log.txt, another argument .. reutrn the first parameter and new line break, third parameter error - arrow function.

fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')

  /*a condition followed by a question mark (?), then an expression to execute if the condition is truthy 
  followed by a colon (:), and finally the expression to execute if the condition is falsy.*/
  
);
