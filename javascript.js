/* Get value from input field
 Choose a state
 Show total cost with state tax from choosen state */

var statesUs = ["Alabama", "Alaska", "Arizona", "Arkanas", "California", "Colorado"];
var countries = ["Switzerland", "United+States", "Sweden", "Canada", "United+Kingdom"];
var stateUk = ["England", "Wales", "Ireland"];
var selectedState;
$(document).ready(function(){
	$.each(countries,function(countries, countries) 
	{   
    $("#countriesSelect").append('<option value=' + countries + '>' + countries + '</option>');
	});
	
	// Get value from input field
	var selectedCountry = $("#countriesSelect option:selected").val();

	$("#countriesSelect").change(function(event) {
		/* Act on the event */
			selectedCountry = $("#countriesSelect option:selected").val();

			console.log(selectedCountry);
			if (selectedCountry == "United+States"){
				$.each(statesUs,function(statesUs, statesUs) {   
				  selectedState = $("#stateSelect").append('<option value=' + statesUs + '>' + statesUs + '</option>');
				});
			}else if(selectedCountry == "United+Kingdom"){
				$.each(stateUk, function(stateUk, stateUk){
					selectedState = $("#stateSelect".append('<option value=' + stateUk + '>' + stateUk + '</option>'));
				});
			}
	});
	
	$("#calculate").click(function(event){
		var cost = $("#amount").val();
		var total = calculateCost(cost, 1.25);
		$("#totalCost").val(total);
	});

	function calculateCost(cost, tax){
		var totalCost = cost * tax;
		return totalCost;
	};
});