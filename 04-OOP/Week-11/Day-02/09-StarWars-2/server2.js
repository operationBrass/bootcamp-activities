// Dependencies
const express = require('express');

const app = express();
const PORT = 3000;

// Data
const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000,
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200,
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Knight',
    age: 60,
    forcePoints: 1350,
  },
];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

/*Route parameters are named URL segments that are used to capture the values specified at their position in the URL. */

app.get('/:character', (req, res) => {
  const chosen = req.params.character; /* The captured values are populated in the req.params object, 
  with the name of the route parameter specified in the path as their respective keys.*/

  // What does this log? Logs the text after the / in normal case that is the character.
  console.log(chosen);


  res.end();
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
