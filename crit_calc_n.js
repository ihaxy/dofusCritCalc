
function main(){
//Total agility on character. It cannot be negative value
    var agility = parseInt(document.getElementById("agility_inp").value,10);
    if(agility < 0){
    agility = 0;
    }
    if (Number.isNaN(agility) == true){
    agility = 0;
    }
// Weapon or spell crit rate
    var baseCrit = parseInt(document.getElementById("base_crit").value,10);
//Total +crits on character from equipment
    var equipCrit = parseInt(document.getElementById("plus_crit").value,10);
    if (Number.isNaN(equipCrit) == true){
    equipCrit = 0;
    }
//Calculates critical chance
    var critChance = finalCrit();
//Critchance cannot be worse than baseCrit-eqipCrit, lower than 1/2 and higher than 1/basecrit
    if (critChance > baseCrit-equipCrit || baseCrit < critChance){
        critChance = baseCrit-equipCrit;
    }
    if (critChance < 2){
        critChance = 2;
    }
     if (Number.isNaN(critChance) == true){
    critChance = "Please fill out fields above";
    }
//Return result
    document.getElementById("result").value = critChance;

    function finalCrit(){
    crit = Math.floor((baseCrit-equipCrit)*((Math.E*1.1) / Math.log(agility+12)));
    return crit;
    }
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 45){
        return false;
    }
    return true;
}

function isValidNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)){
        return false;
    }
    return true;
}
