import React from 'react';

// TODO: Add a comment explaining what a react component is
//independent reusable bits of code
function HelloReact() {
  const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // is JSX string representing HMTL in javascript. The curly braces are placeholders for JS variables
  return <p>Hello World! Here is {text}</p>;
}

export default HelloReact;
