var tableData = data;

// YOUR CODE HERE!
var form = d3.select("#datetime");
var button = d3.select("#filter-btn");

form.on("submit",runEnter);                        // event handlers
button.on("click", runEnter);

function runEnter() {

    var outputValue = d3.select("tbody");
    d3.event.preventDefault();                        // prevent page from refreshing
    outputValue.html(" ");                      // empty the html for the data displayed (if any)
   
    var dateInputElement = d3.select("#datetime");
    var cityInputElement = d3.select("#city");
    var stateInputElement = d3.select("#state");
    var countryInputElement = d3.select("#country");
    var shapeInputElement = d3.select("#shape");

    var dateInputValue = dateInputElement.property("value");
    var cityInputValue = cityInputElement.property("value").toLowerCase();
    var stateInputValue = stateInputElement.property("value").toLowerCase();
    var countryValue = countryInputElement.property("value").toLowerCase();
    if (countryValue == "canada") {
        var countryInputValue = "ca"; 
    }
    else if (countryValue == "usa") {
        var countryInputValue = "us"; 
    }
    var shapeInputValue = shapeInputElement.property("value").toLowerCase();

    if (dateInputValue.length != 0) {
        var filteredReports1 = tableData.filter(entry  => entry.datetime == dateInputValue);
    }
    else {
        var filteredReports1 = tableData;
    }

    if (cityInputValue.length != 0){
        var filteredReports2 = filteredReports1.filter(entry  => entry.city == cityInputValue);
    }
    else {
        var filteredReports2 = filteredReports1;
    }
    if (stateInputValue.length != 0){
        var filteredReports3 = filteredReports2.filter(entry  => entry.state == stateInputValue);
    }
    else {
        var filteredReports3 = filteredReports2;
    }

    if (countryInputValue.length != 0){
        var filteredReports4 = filteredReports3.filter(entry  => entry.country == countryInputValue);
    }
    else {
        var filteredReports4 = filteredReports3;
    }
    if (shapeInputValue.length != 0){
        var filteredReports5 = filteredReports4.filter(entry  => entry.shape == shapeInputValue);
    }     
    else {
        var filteredReports5 = filteredReports4
    }

    console.log(dateInputValue);
    console.log(cityInputValue);
    console.log(stateInputValue);
    console.log(countryInputValue);
    console.log(shapeInputValue);
    console.log(filteredReports5);
    
    filteredReports5.forEach((report) =>{
        var row = outputValue.append("tr");
        Object.entries(report).forEach( ([key,value]) => {
            var cell =  row.append("td").text(value);
        });
    });

}

