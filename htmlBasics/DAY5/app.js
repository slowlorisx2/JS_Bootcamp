document.write("Welcome to day 5, meet the Queen of Blades!");
var scRaces = ["Terran", "Zerg", "Prottos"];
console.log(scRaces);
document.write("My favorite race is "+ scRaces[0] + " ");

var name = "Roberto", lname = "Quinones", nikname = "Bob", inHouse = true;
console.log(inHouse, nikname, lname);

var superHero = prompt("What is your favorite Super Hero: ");
console.log(superHero);

//Global Scope


//Local scope 
function raceCheck(){
    const race = "Terran";  //SC race variable
    document.write(race);
}
