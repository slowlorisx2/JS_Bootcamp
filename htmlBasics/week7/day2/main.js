// class Car{
//     constructor(make, model, year, hp, topSpeed) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.hp = hp;
//         this.topSpeed = topSpeed;
//         this.engineSound = function () {
//             return "GRRRR, GRRRR"
//         }
//     }
// }

// class MuscleCar extends Car {
//     constructor (make, model, year, hp, topSpeed, cylinders) {
//         super(make, model, year, hp, topSpeed);
//         this.cylinders = cylinders;
//         this.engineSound = function() {
//             return "RUBMLEEEE, RUUMBLEessssss"
//         }
//     }
// }

class Employee{
    constructor(name, department, extension) {
        this.name = name;
        this.department = department;
        this.extension = extension;
        this.email = function() {
            email = name+"@ecorp.com"
        }
        this.showEmployee = showEmployee;
    }
}

function showEmployee() {
    var info = "";
    info += "Employee: " + this.name + "\n";
    info += "Department: " + this.department + "\n";
    info += "Extension: " + this.extension + "\n";
    info += "Email: " + this.email + "\n";
}

var employees = new Array();
employees[0] = "Select Employee";
employees[1] = new Employee("Mai Li", "Sales", 551);
employees[2] = new Employee("Bob", "SysAdmin", 552);
employees[3] = new Employee("Alice", "IT", 550);

var len = employees.length;

function showAllEmployees() {
    var info = "";
    for (let i = 1; i < len; i++) {
        info += "Employee: " + employees[i].name + "\n";
        info += "Department: " + employees[i].department + "\n";
        info += "Extension: " + employees[i].extension + "\n";
        info += "Email: " + employees[i].email + "\n\n";
    }
    console.log(info);
}

const emp0 = document.getElementById("emp0");
const emp1 = document.getElementById("emp1");
const emp2 = document.getElementById("emp2");
const emp3 = document.getElementById("emp3");

emp0.innerText = employees[0].name;
emp1.innerText = employees[1].name;
emp2.innerText = employees[2].name;
emp3.innerText = employees[3].name;
