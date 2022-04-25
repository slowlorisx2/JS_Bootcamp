// All cupcakes have these ingredients
//Cupcake Class with all shared ingredients for all cupcakes flavors

// These ingredients are for 16 cupcakes
const BUTTER = 5.2;
const SUGAR = 2.6;
const EGG = 1;
const VANILLA_EXTRACT = 3;
const FLOUR = 1.1;
const SALT = 5;
const BAKINGPOWDER = 5;
const WATER = 1;
const BUTTER_MILK = 1;

// For Chocolate
const BAKING_COCOA = 1;


const submitBtn = document.getElementById("resultBtn");
const resultP = document.getElementById("resultP");
var numOfDozens = document.getElementById("dozensAmount").value;


function printIngredients(){
    var numOfDozens = document.getElementById("dozensAmount").value;
    
    var result = `Butter: ${BUTTER*numOfDozens} <br> Sugar: ${SUGAR*numOfDozens} <br> Flour: ${FLOUR*numOfDozens}<br>
                  Egg:`;
    resultP.innerHTML = result;
}

 