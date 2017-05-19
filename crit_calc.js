
function main(){
//Total agility on character. It cannot be negative value
    var agility = parseInt(document.getElementById("agility_inp").value,10);
    if(agility < 0 ){
    agility = 0;
    }
// Weapon or spell crit rate
    var baseCrit = parseInt(document.getElementById("base_crit").value,10);
//Total +crits on character from equipment
    var equipCrit = parseInt(document.getElementById("plus_crit").value,10);
//Calculates critical chance
    var critChance = finalCrit();
//Critchance cannot be worse than baseCrit-eqipCrit, lower than 1/2 and higher than 1/basecrit
    if (critChance > baseCrit-equipCrit){
        critChance = baseCrit-critChance;
    }
    if (critChance < 2){
        critChance = 2;
    }
//Return result
    document.getElementById("result").value = critChance;

    function finalCrit(){
    crit = Math.floor((baseCrit-equipCrit)*((Math.E*1.1) / Math.log(agility+12)));
    return crit;
    }
}