
const button = document.getElementById("button1");
const heading2 = document.getElementById("heading2")

button.addEventListener("click", cupcakeCreator);



class cupcake {
    constructor(sugar, flour, butter, eggs) {
        this.sugar = sugar;
        this.flour = flour;
        this.butter = butter;
        this.eggs = eggs;
        this.message = "Baking cupcakes with " + this.sugar + "g of sugar, " + this.flour + "g of flour, " + this.eggs+ "eggs and " + this.butter + "g of butter."
    }
}

function cupcakeCreator() {

    var eggses = document.getElementById("eggs").value;
    var butter = document.getElementById("butter").value;
    var sugar =  document.getElementById("sugar").value;
    var flour =  document.getElementById("flour").value;

    const cupcake1 = new cupcake(sugar, flour, butter, eggses);
    var outputVal = heading2.innerHTML = cupcake1.message;
    return outputVal;
    
}

