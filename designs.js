// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
  event.preventDefault()
var hVal = document.getElementById('inputHeight')
var wVal = document.getElementById('inputWeight')
var table = document.getElementById('pixelCanvas')

var td, tr, output;

// Your code goes here!
var cols = hVal.value, rows = wVal.value

if (table.children.length > 0) {
  $('table').empty()

}
// Scrap the previous table if exists
for (var i = 0; i < rows; i++) {
  tr = document.createElement('tr')
  for (var j = 0; j < cols; j++) {
    td=  document.createElement('td')
    tr.appendChild(td)
  }
  table.appendChild(tr)
}

//console.log(output);


// Create the table and add it to DOM (no columns)
console.log("Function Ran")
// With the table stored in a variable, insert rows and columns, making sure to update in dom

}
