// Use Moment.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate = "12/12/2002";
$("#1a").text(moment(gradDate).format("MMMM Do YYYY"));


// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay = "1/1/2022";
$("#2a").text(moment(weekDay).format("dddd"));

// TODO: 3. Out of 365, what day of the year is today?
var now;
$("#3a").text(moment(now).format("dddd"));

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time;
$("#4a").text(moment(time).format("HH MM SS"));


// TODO: 5. What is the current Unix timestamp?
var unix;
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat;
$("#6a").text(unixFormat);

