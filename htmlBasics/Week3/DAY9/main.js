var numCorrect = 0;

function takeTest() {
var response="";
var points = 0;

var q1 = "What company developed Javascript?";
var a1 = "NETSCAPE";

var q2 = "Using Javascript operator precedence,\n what is the result of the following expression? 2 + 4 * 6";
var a2 = 26;

var q3 = "With what object-oriented programming language\n is Javascript often compared and confused?";
var a3 = "JAVA";

response = prompt(q1,"");
if (response) points = runningTotal((response.toUpperCase() == a1) ? 1 : 0);
alert(points);

response = prompt(q2,"");
if (response) points = runningTotal((response == a2) ? 1 : 0);
alert(points);

response = prompt(q3,"");
if (response) points = runningTotal((response.toUpperCase() == a3) ? 1 : 0);
alert("You answered a total of " + points + " correctly.");

numCorrect = 0;
points = 0;
}

function runningTotal(i) {
  numCorrect += i;
  return numCorrect;
}