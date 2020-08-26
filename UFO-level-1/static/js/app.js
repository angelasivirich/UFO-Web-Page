// from data.js
var tableData = data;

// YOUR CODE HERE!
var form = d3.select("#datetime");
var button = d3.select("#filter-btn");

form.on("submit",runEnter);                        // event handlers
button.on("click", runEnter);

function runEnter() {

  var outputValue = d3.select("tbody");
  d3.event.preventDefault();                        // prevent page from refreshing
  outputValue.html(" ");   

  var dateInputElement = d3.select("#datetime");
  var dateInputValue = dateInputElement.property("value");

  var filteredReport = tableData.filter(entry => entry.datetime == dateInputValue );

  filteredReport.forEach((report) => {
      var row = outputValue.append("tr");
      Object.entries(report).forEach( ([key,value]) => {
          var cell =  row.append("td").text(value);
      });
  });
};
