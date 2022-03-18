// fName = prompt("What is your first name?");
// lName = prompt("What is your last name?");

// function showName(firstName, lastName){
//     document.write("<strong>Your first name is: ");
//     document.write(firstName + "<br>");
//     document.write("<strong>Your last name is: ");
//     document.write(lastName + "<br>");
// }

// showName(fName, lName);

// var userName;

// function showName(){
//     getName();
//     alert("Hello " + userName);
// }

// function getName(){
//     userName = prompt("Enter your username");
// }

// showName();

// function returnValue(){
//     var myProduct;
//     myProduct = document.form1.input1.value * document.form1.input2.value;
//     return myProduct;
// }

function phraseGenerator(){
    let part1 = '"If a man has not discovered something that he will die for';
    let part2 = ', he isn\'t fit to live."';
    let combinedParts = part1 + part2;
    return combinedParts;
}

function phraseAddAuthor(){
    let addAuthor = phraseGenerator() + " Martin Luther King Jr.";
    return alert(addAuthor);
}
