
function main(){
//Total agility on character
var agility = parseInt(document.getElementById("agility_inp").value,10);
console.log(agility);
//parseInt(prompt("What is your total agility?"),10);
//Agility cannot be negative
if(agility < 0){
    agility === 0;
}
// Weapon crit rate
var baseCrit = parseInt(document.getElementById("base_crit").value,10);
console.log(baseCrit);
//parseInt(prompt("Weapon or spell critchance: 1/"),10);
//Total +crits on character from equipment
var equipCrit = parseInt(document.getElementById("plus_crit").value,10);
//parseInt(prompt("Your current +crit bonus?"),10);
//Calculates critical chance
var critChance = finalCrit();
//Critchance cannot be worse than baseCrit-eqipCrit and lower than 1/2
if (critChance > baseCrit-equipCrit){
    critChance = baseCrit-critChance;
}
if (critChance < 2){
    critChance = 2
}
//Return result
document.getElementById("result").value = critChance;

function finalCrit(){
critChance = Math.floor((baseCrit-equipCrit)*((Math.E*1.1) / Math.log(agility+12)));
return critChance;
}
}