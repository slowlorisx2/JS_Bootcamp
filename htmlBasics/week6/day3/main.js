var myArray = ["Cow","Dog","Chicken","Ant","Owl","Aardvark"];

myArray.forEach(sayHi);

function sayHi(anmial, index, array) {
    console.log((index+1) + " Hello friend " + anmial + ", member of " + array)
}
                                                                        