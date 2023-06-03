// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.


// 3. Use this function to update the filters. 
function updateFilters() {if-statement syntax

    // 4a. Save the element that was changed as a variable.
    if ( condition ) { code to execute }
    // 4b. Save the value that was changed as a variable.
    if (a date is entered)
    // 4c. Save the id of the filter that was changed as a variable.

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();var tbody = d3.select("tbody"); 
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {data.forEach((dataRow) => { let row = tbody.append("tr");

  
    // 8. Set the filtered data to the tableData.
    const tableData = data; 
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
function listLoop(userList) {
  for (var i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  };
  d3.selectAll("#filter-btn").on("click", handleClick);
  buildTable(tableData);
  function handleClick()
  }
  
  // 2. Attach an event to listen for changes to each filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  
  // Build the table when the page loads
  buildTable(tableData);
