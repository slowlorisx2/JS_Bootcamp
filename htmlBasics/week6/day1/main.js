// // https://mega.nz/file/bcYxQJiQ#OmeekbcDtiz8Y5FT62Hkicg11TGECZdX1_qsbB9vPNU

// function hostNameCheck() {
//     var emailValidator = /^\w+@\w+\.\w{2,}/gi;
//     var userEmail = prompt("Enter your email");
    
//     while (!emailValidator.test(userEmail)) {
//             alert("Enter a valid Email address");
//             hostNameCheck();
//             return;
//     }
//     var start = userEmail.indexOf("@" + 1);
//     var hostname = userEmail.substring(start, userEmail.length);
//     alert("Your domain is " + hostname);
// }

    //   function regularExpressionCheck() {
    // //Put your regular expression here. Use at least one modifier and at least one
    // //special character/metacharacter. Don't forget about regex101.com!
    //     var myRegEx = /^\w+\d/i;
    // //Use the first argument of this prompt() call to tell the user what they must
    // //input to meet your conditions. ie. "Please enter a word starting with X."
    // //you may prefill an acceptable answer in the second parameter if you desire.
    //     var userInput = prompt("Enter a word with a digit replacing a letter, ex: M3xico, but do not start with the digit : ","");
    // //Remember that the "!" means "not"--this code fires if the user's input does
    // //not match your regexp.
    //     while (!myRegEx.test(userInput)){
    // //Change this flavor text to suit your regexp. ie. "Please enter a word
    // //starting with X."
    //       alert("You entered " + userInput + ".\n This is not valid. Please enter a valid entry.");
    //       regularExpressionCheck();
    //       return;
    //     }
    // //Change this flavor text to match, as well. ie. "That started with X! Great!"
    //     alert("You entered \"" + userInput + ".\" That was a valid entry! :)");
    //   }
    
      function phoneCheck() {
        var myRegEx = /\d\d\d-\d\d\d-\d\d\d\d/;
        //Use the first argument of this prompt() call to tell the user what they must
        //input to meet your conditions. ie. "Please enter a word starting with X."
        //you may prefill an acceptable answer in the second parameter if you desire.
            var userInput = prompt("Enter a phone number using the following format ###-###-#### : ","");
        //Remember that the "!" means "not"--this code fires if the user's input does
        //not match your regexp.
            while (!myRegEx.test(userInput)){
        //Change this flavor text to suit your regexp. ie. "Please enter a word
        //starting with X."
              alert("You entered " + userInput + ".\n This is not valid. Please enter a valid entry.");
              phoneCheck();
              return;
            }
        //Change this flavor text to match, as well. ie. "That started with X! Great!"
            alert("You entered \"" + userInput + ".\" That was a valid entry! :)");
          }


//YOUR REGEXP HERE:
var phoneRegEx = /^\d{3}-?\d{3}-?\d{4}$/;  // /^\d\d\d(-|)\d\d\d(-|)\d\d\d\d$/; 

function phoneNumberCheck() {
var userPhoneNo = prompt("Please enter your phone number.","");
while (!phoneRegEx.test(userPhoneNo)){
    alert("You entered " + userPhoneNo + ". This is not a valid phone number. :( Try again, please.");
    phoneNumberCheck();
    return;
}
alert("You entered the phone number " + userPhoneNo + ". Congratulations, this is a valid phone number! :)");
}