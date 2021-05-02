const inquirer = require('inquirer');
inquirer.prompt(
    [{
    name: "Question1",
    type: "input",
    message:"What is your name?"
},
{
    name: "Question2",
    type: "input",
    message:"What languages do you know?"
},
{
    name: "Question3",
    type: "input",
    message:"What is your last name?"
},])

.then(function(answer)
{
    //access file system
    const fs = require("fs");
    fs.appendFile("test.txt",answer.Question1 + "\n" + answer.Question2 + "\n" + answer.Question3, function(err){console.log(err)});
    console.log(answer.Question1);
})
