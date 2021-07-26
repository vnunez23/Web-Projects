
var result;
function convertType(){
	var value = document.getElementById("inputVal").value;
	var unit = document.getElementById("unitToConvert").value;

	if (unit == "litres"){
		
		result = value / 3.785;

	}
	else if (unit == "gallons"){
		result =  value * 3.785;
	}
	else if (unit == "meters"){
		result =  value * 3.281;
	}
	else if (unit == "feet"){
		result =  value/ 3.281;
	}
	else if (unit == "sqMeters"){
		result =  value * 10.764;
	}
	else if (unit == "sqFeet"){
		result =  value / 10.764;
	}
	else if (unit == "km"){
		result =  value / 1.609;
	}
	else{
		result =  value * 1.609;
		
	}
	document.getElementById("value").innerHTML = result;
}