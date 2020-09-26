// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Add data to the table
tableData.forEach(UFO =>{
    var row = tbody.append("tr");

    Object.entries(UFO).forEach(([key,value]) => {
        console.log(key,value)

        // Append a cell to the row for each value
        // in the UFO dataset
        var cell = row.append("td");
        cell.text(value);
    })
})

// Filter button
var button = d3.select("#filter-btn");

button.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Input field
    var inputField = d3.select("#datetime");

    // Grab input value
    var userInput = inputField.property("value");

    // Filter table based on user input
    var filterTable = tableData.filter(data => data.datetime == userInput);
    console.log(filterTable)

    // Clear table
    tbody.html("")

    // Add filtered data
    filterTable.forEach(UFO => {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value)
        })
    })
  
    // We can use d3 to see the object that dispatched the event
    console.log("Table filtered");
  });