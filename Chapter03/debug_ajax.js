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
