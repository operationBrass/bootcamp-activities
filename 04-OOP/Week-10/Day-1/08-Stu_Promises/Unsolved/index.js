// Prompt the user to enter what they are currently doing
const userInput = process.argv[2];
console.log('Current user activity:', userInput);


// If the user does not enter anything, return an error message
if (!userInput) {
  console.error(
    '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
  );
  process.exit();
}

// If the user enters anything other than the word 'coding', set 'studentDistracted' to 'true'
const studentDistracted = userInput !== 'coding';

// TODO: Refactor the following to use promises
// TODO: Refactor to call 'practiceCoding()' and chain a 'then()' to log "We are coding in promises!" in the console
// TODO: Chain a 'catch()' to log "Promise rejected: " and the error

const practiceCoding = new Promise((resolve, reject) => 
{

  if (!studentDistracted) {
    const coder = "We are coding in promises";
    resolve(coder);
  } 

  else {

    const slacking = {
      issue: 'Distracted',
      message: 'Coding stopped',
    }
    reject(slacking);
  }

})
.then((result) => {
  console.log(result);
})
.catch((err) => {
  console.log(`Error: user is ${err.issue}, ${err.message}`);
});


