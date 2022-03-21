// // Constructor Function
// function Person(fName, lName, dob){
//     this.fName = fName;
//     this.lName = lName;
//     this.dob = new Date(dob);
//     //Method of the Person Object -- See prototype part down there
//     // this.getBirthYear = function(){
//     //     return this.dob.getFullYear();
//     // }
// }

// // A best way to create a methd is by using a prototype
// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// // Creating a class with methods - Yet another way
// class Person {
//     constructor(fName, lName, dob){
//         this.fName = fName;
//         this.lName = lName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
// }


// // Instanciate an Object
// const person1 = new Person("Roberto", "Quinones", "02/02/1990");
// const person2 = new Person("Glenise", "Quinones", "09/02/1991");

// console.log(person1.getBirthYear());

