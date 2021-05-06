// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'

function Developer(name,tech)
{
console.log(this);
this.name = name;
this.tech = tech;
this.intro = () => console.log("Hi ", name, " ", tech);
console.log(this);

}

const johnTheDev = new Developer("john", "JavaScript");
johnTheDev.intro();


// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor

// TODO: Call the 'introduction()' method on the new object
