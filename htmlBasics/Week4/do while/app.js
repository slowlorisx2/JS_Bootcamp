// // Do while loops
// function doWhileTest() {
//     var num = 0;
//     do {
//         console.log(num+1)
//         num ++;
//     }
//     while (num < 10) {
//     }
// }
// doWhileTest();

// // for loops
// //    counter   cond   execution-after   
// for (let i = 0; i < 10; i++) {
//     document.write(`Loop number ${i} <br>`) 
// }
// console.log(`The final value of i is ${i}`)
 
// Break statement

// function breakTest() {
//     var loopBoolean = true;
//     var myValue = "";
//     while(loopBoolean) {

//       myValue = prompt("Enter data", myValue);
//       if (!myValue) break; // breaks the loop right here

//           if (myValue) {
//             loopBoolean = false;
//             alert ("Thank you, " + myValue + ".")
//           }
//     }
//   }
//   breakTest();


// Continue statement

// var leapY = 0;
// var curY = 2001;

// while(curY <=2100) {
//     curY++;
//     if(curY % 4) continue;

//     leapY ++;
//     document.write(curY + " ");
// }
// document.write(`<strong>The total of leap years between 2001 and 2100 is ${leapY}</strong>`)
// for (let i = 0; i <= 100; i++) {
//     if (i % 7) {
//         continue;
//     }
//     document.write(i + "<br>")
// }

// // Switch Statement
// var favoriteNumber = prompt("What is your favorite number from 1-10?","1")

// switch (favoriteNumber) {
//   case "1" :
//     alert("That means you're number 1!");
//     break;

//   case "2" :
//     alert("You value partnership in all aspects of life!");
//     break;

//   case "3" :
//     alert("People who pick 3 tend to be more open-minded than the rest!");
//     break;

//   case "4" :
//     alert("Choosing 4 shows you have a lot of heart, and that you don't fear death.");
//     break;

//   case "5" :
//     alert("You value order and prefer to tackle difficult tasks in steps.")
//     break;

//   case "6" :
//     alert("You are a logical person but think outside the box.");
//     break;

//   case "7" :
//     alert("You're superstitious, but luck is in your favor.");
//     break;

//   case "8" :
//     alert("You spend too much time programming!")
//     break;

//   case "9" :
//     alert("Picking 9 means you are a person of strong character.");
//     break;

//   case "10" :
//     alert("You go for the best outcome in every situation!");
//     break;

//   default :
//     alert("Enter a number! Just a number!!! You messed it all up!");
//     break;
// }


function switchTest(SetOption) {
    OptionsSelect = document.frmOne.SetOption.value;
    
    switch (OptionsSelect) {
        case "1":
            alert("Arizona");
            break;
        case "2":
            alert("New Mexico");
            break;
        case "3":
            alert("California");
            break;
        
        default:
            alert("Unknown");
    }
}