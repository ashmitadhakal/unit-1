//Source code of Ashmita Dhakal
//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define an array of objects for cities and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//create the table element
	var table = document.createElement("table");

	//create a header row
	var headerRow = document.createElement("tr");

	//add the "City" column
	var cityHeader = document.createElement("th");
	cityHeader.innerHTML = "City";
	headerRow.appendChild(cityHeader);

	//add the "Population" column
	var popHeader = document.createElement("th");
	popHeader.innerHTML = "Population";
	headerRow.appendChild(popHeader);

	//add the row to the table
	table.appendChild(headerRow);

	//loop to add a new row for each city
	//FOREACH LOOP WITH OBJECT FOR LOOP...Example 2.4 line 25
	for(var i = 0; i < cityPop.length; i++){
		//assign longer html strings to a variable
		var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
		//add the row's html string to the table
		table.insertAdjacentHTML('beforeend',rowHtml);
	}
	document.querySelector("#mydiv").appendChild(table);

	addColumns(cityPop);
	addEvents();

};
//Function to add new column to the table
	function addColumns(cityPop){
		//selecting all table rows and itirating over them using foreach
		document.querySelectorAll("tr").forEach(function(row, i){

			if (i == 0){

				row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
			} else {
				//determining size based on the population values
				var citySize;

				if (cityPop[i-1].population < 100000){
					citySize = 'Small';

				} else if (cityPop[i-1].population < 500000){
					citySize = 'Medium';

				} else {
					citySize = 'Large';
				};
				//adding new row values to the city Size column
				row.insertAdjacentHTML('beforeend','<td>' + citySize + '</td>');
			};
		});
	};
//Function to add event listner to the table elements: it adds hover to table where the color of text changes randomly
	function addEvents(){

		document.querySelector("table").addEventListener("mouseover", function(){
			
			var color = "rgb(";
//Using loop to generate random RGB values
			for (var i=0; i<3; i++){

				var random = Math.round(Math.random() * 255);

				color += random;

				if (i<2){
					color += ",";
				
				} else {
					color += ")";
			};
//Setting background color to the generated colors
			document.querySelector("table").style.color = color;
		}});
//function to display alert message when the table is clicked
		function clickme(){

			alert('Hey, you clicked me!');
		};
//adding event listener to the table
		document.querySelector("table").addEventListener("click", clickme)
	};
	document.addEventListener('DOMContentLoaded',initialize)
	
//Lab 3 Solution
	function debugCallback(response){
		document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(response))
	};
	function debugAjax(){
	
		fetch("data/MegaCities.geojson")
			.then(function(response){
				console.log(response)
				return response.json();
			}).then(function(myData){
				debugCallback(myData);
			})
	};
	debugAjax()