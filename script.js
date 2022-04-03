const gridDefault = 24;
const slider = document.getElementById('slider');
let clicked = false;
let eraserActive = false;
let gridOutline = true;
var colorPicker = new iro.ColorPicker("#picker", {
  // Set the size of the color picker
  width: 150,
  // Set the initial color to pure red
  color: "#f00"
});

//creates the grid
function createGrid(gridSize) {
  for(let i=0; i<gridSize ** 2; i++)
  {
      const newDiv = document.createElement("div");
      newDiv.classList.add('square');
      const gridContainer = document.getElementById("grid");
      gridContainer.appendChild(newDiv);
  }
  for (const grid of document.querySelectorAll('.grid')) {
    grid.style.setProperty('--cols', Math.ceil(Math.sqrt(grid.children.length)));
  }
  addListeners();
  
}

function toggleErase() {
  eraserActive = !eraserActive;
}

function toggleGridOutline() {
  const gridContainer = document.getElementById("grid");
  if(gridOutline) {
    gridContainer.style.columnGap = '0px';
    gridContainer.style.rowGap = '0px';
  }
  if(!gridOutline) {
    gridContainer.style.columnGap = '1px';
    gridContainer.style.rowGap = '1px';
  }
  gridOutline = !gridOutline;

}
//Delete current grid
function clearGrid() {
    var grid = document.getElementById('grid');
    while ( grid.firstChild ) grid.removeChild( grid.firstChild );
    createGrid(slider.value);
}

createGrid(gridDefault);
// On left click color the square being hovered over
//If mouse is still held down continue to color all over the squares being hovered over
// Cease coloring squares on mouse release

function addListeners() {
  document.querySelectorAll('.square').forEach(item => {
    // On left click color the square being hovered over
    item.addEventListener('mousedown', event=> {
      clicked = true
      if(!eraserActive)
        item.classList.add('colored');
      if(eraserActive)
        item.classList.remove('colored');
        //If mouse is still held down continue to color all over the squares being hovered over
    })
    item.addEventListener('mouseenter', function () {
        if(clicked)
        item.classList.add('colored');
        if(clicked && eraserActive)
        item.classList.remove('colored');
    })
        //ends drag when left click is released
    item.addEventListener('mouseup', function () {
        clicked = false;
    })
})
}

// Sidebar functions

// toggles grid outline on button click
document.getElementById('gridOutlineBtn').addEventListener('click', event => {
  toggleGridOutline();
})
// clears grid on button click
document.getElementById('clearBtn').addEventListener('click', event => {
    clearGrid();
})

// turns on eraser on button click
document.getElementById('eraseBtn').addEventListener('click', event => {
  toggleErase();
})

// creates grid based on slider value
slider.addEventListener('change', event => {
  clearGrid();
})

colorPicker.on('color:change', function(color) {
  // when color changes make that the color for the square
  document.querySelectorAll('.square.colored').forEach(item => { 
    item.style.background = color.hexString
  })
});