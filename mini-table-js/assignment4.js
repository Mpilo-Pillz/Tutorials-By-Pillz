console.log(" JS connected");
// Create variables to initialize your row number, background color and lightness.
// let rowNumber = 0;
var backgroundColor;
var lightness;

// Store a variable reference to the HTML element “table”, we will be using this variable to insert our rows.
var miTable = document.getElementById("myTable");
// let cell = 0;
//Create the following text inside element, e.g. “Row 5” (where 5 will be the row number variable).

for ( var rowNumber = 0; rowNumber < 6; rowNumber++) {
    var row = miTable.insertRow(rowNumber);
   var cell = row.insertCell(rowNumber);
    cell.innerHTML = "Row " + rowNumber;
}



//adding the text row + rowNumber into the cell
// cell1.innerHTML = "Row " + rowNumber;





