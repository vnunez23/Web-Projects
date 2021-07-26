window.onload=initfunction;

function initfunction()
{
    var current_datetime = new Date()
    var formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()

    document.getElementById("dtfield").innerHTML = formatted_date;
}
function buttonclick(){
var MargQty = document.getElementById("Margherita").value * 12;
var SchnitzelQty = document.getElementById("Schnitzel").value * 8.5;
var CoffeeQty = document.getElementById("Coffee").value * 2;
var QuattroQty = document.getElementById("Quattro Formaggi").value * 12.5;
var MixedGrillQty = document.getElementById("mixed_grill").value * 9.5;
var LatteQty = document.getElementById("latte").value * 2.5;
var CapQty = document.getElementById("capricciosa").value * 13;
var BeefQty = document.getElementById("big_beef").value * 10;
var SoftQty = document.getElementById("softdrink").value * 1.75;

var total = MargQty + SchnitzelQty + CoffeeQty + QuattroQty + MixedGrillQty
+ LatteQty + CapQty + BeefQty + SoftQty;
document.getElementById("output").innerHTML = "Your total is $" + total;

}
