// Add all scripts to the JS folder
function myFunc(){
    var mydiv= document.getElementById("mydiv");
    mydiv.innerHTML="Hello World";
};
window.onload=myFunc();

//initialize function to call when script loads
function initialize(){
    cities();
}

//function to create table with cities names and their population
function cities(){
    //define two arrays for city names and population
    var cities=[
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population=[
        233209,
        594833,
        104067,
        27244
    ];
    //create table elements
    var table=document.createElement("table");
    //create header row
    var headerRow=document.createElement("tr");
    //add the "City" Column
    var cityHeader=document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);
    //add "population header"
    var popHeader=document.createElement("th");
    popHeader.innerHTML="Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
    
}