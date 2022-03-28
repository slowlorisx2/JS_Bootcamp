// function ifIsOne() {
//     var userinput = prompt("Enter the number between 1 and 3", "");
//     if ((userinput >= 1) && (userinput <=3)) {
//         console.log("You are a genius!, you chose " + userinput);
//     }
//     else{
//         console.log("you're ok, you just need some more work")
//         ifIsOne();
//     }
//     console.log("We are done")
// }



function checkGrade(form) {
    var myGrade = form.myselect.options[form.myselect.selectedIndex].text;
    if (myGrade >= 91) {
        console.log("You got an A");
    }
    else if (myGrade < 91 && myGrade >= 81) {
        console.log("You got an B");
    }
    else {
        console.log("You got an C");
    }
    console.log(myGrade < 91 == myGrade >= 81);
  }
