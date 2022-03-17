// fName = prompt("What is your first name?");
// lName = prompt("What is your last name?");

// function showName(firstName, lastName){
//     document.write("<strong>Your first name is: ");
//     document.write(firstName + "<br>");
//     document.write("<strong>Your last name is: ");
//     document.write(lastName + "<br>");
// }

// showName(fName, lName);

var userName;

function showName(){
    getName();
    alert("Hello " + userName);
}

function getName(){
    userName = prompt("Enter your username");
}

showName();