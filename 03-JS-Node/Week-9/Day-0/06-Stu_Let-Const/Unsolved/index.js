// TODO: Fix the declarations so that the function works properly.
const addGreetingMessage = (name) => {
  var greeting = 'How are you?';

  if (name.length > 0) {
    var message = `Hello ${name}\n${greeting}`;
  }

  console.log(message);
};

addGreetingMessage('Tammy');

// TODO: Fix the declarations so that the function works properly.
const calloutCounter = () => {
  var calloutOuter = 'Outside of the loop';
  var counter = 5;

  while (counter > 0) {
    var callout = 'Inside the loop';
    console.log(counter, callout);
    counter--;
  }

  console.log(calloutOuter);
};

calloutCounter();

// TODO: Fix the declarations so that the function works properly.
const countMatrix = (matrix) => {
  for (var i = 0; i < matrix.length; i++) {
    var line = matrix[i];
    for (var j = 0; j < line.length; j++) {
      var element = line[j];
      console.log(element);
    }
  }
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);
