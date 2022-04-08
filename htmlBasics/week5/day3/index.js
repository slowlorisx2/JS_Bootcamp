// // Practicing Strings stuff

// var greeting ='"this is quote", this is a\ttab space'
// console.log(greeting.toLowerCase());

// // Anonymous function here
// stringFunct = function(){
//     stuffHere = ("We can do a lot of things, like \n new lines, \nmore new lines,").toUpperCase();
//     console.log(stuffHere);
// }
// stringFunct();


// // String objectification
// var firstString = new String("Hello there");

// var secondString = "Hello world";
// //secondString = secondString.toString();

// var thirdString = "ONly text here"

// console.log(thirdString.toUpperCase());

//-------
// var myString;

// function doubleMe(){
//     return this.toString() + " " + this.toString();
// }

// String.prototype.echo = doubleMe;
// String.prototype.echoDesc = "The description goes here";

// function echoTest(){
//     console.log(String.prototype.echoDesc);
//     do{
//         myString = prompt("Enter a string", "here");
//     } while (myString == (null));
//     console.log(myString.echo());
// }
    
// echoTest();

// function indexOfCheck(){
//     var userEmail = prompt("Enter your email");
//     while (userEmail.indexOf("@", 0) == -1){
//         alert("Enter a valid email");
//         indexOfCheck();
//         return;
//     }
//     alert("Thanks for sign up, you will receive a confirmation email at" + userEmail + " right now.");
// }
