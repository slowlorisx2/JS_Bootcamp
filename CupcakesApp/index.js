// All cupcakes have these ingredients
//Cupcake Class with all shared ingredients for all cupcakes flavors

class CupcakeIngr{
    BUTTER = null;
    SUGAR = null;
    EGG = null;
    FLOUR = null;
    VANILLA_ING = null;
    SALT = null;
    BAKINGPOWDER = null;
}

const submitBtn = document.getElementById("resultBtn");
const resultP = document.getElementById("resultP");


submitBtn.onclick(resultP.innerHTML = "Hello world");