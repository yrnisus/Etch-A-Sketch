
const slider = document.getElementById('slider');
const gridBtn = document.getElementById('gridOutlineBtn');
const eraseBtn = document.getElementById('eraseBtn');
const output = document.getElementById('output');

let clicked = false;
let eraserActive = false;
let gridOutline = true;
const gridDefault = 24;
const mobileDefault = 12;
let selectedColor = 'black';
const defaultColor = '#eee';
let screenWidth = screen.width;
let pickerWidth;


if(screenWidth < 800) {
  pickerWidth = 150;
  createGrid(mobileDefault);
  slider.value = mobileDefault;
  output.innerText = `${slider.value} x ${slider.value}`;
}
else {
  pickerWidth = 200;
  createGrid(gridDefault);
}
var colorPicker = new iro.ColorPicker("#picker", {
  // Set the size of the color picker
  width: pickerWidth,
  // Set the initial color to pure red
  color: "#f00"
});

//creates the grid
function createGrid(gridSize) {
  for (let i = 0; i < gridSize ** 2; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('square');
    const gridContainer = document.getElementById("grid");
    gridContainer.appendChild(newDiv);
    gridContainer.addEventListener('mouseleave', function () {
      clicked = false;
    })
  }
  for (const grid of document.querySelectorAll('.grid')) {
    grid.style.setProperty('--cols', Math.ceil(Math.sqrt(grid.children.length)));
  }
  addListeners();

}

function toggleErase() {
  eraserActive = !eraserActive;
}

// toggles the square grid outlines 
function toggleGridOutline() {
  const gridContainer = document.getElementById("grid");
  if (gridOutline) {
    gridContainer.style.columnGap = '0px';
    gridContainer.style.rowGap = '0px';
  }
  if (!gridOutline) {
    gridContainer.style.columnGap = '1px';
    gridContainer.style.rowGap = '1px';
  }
  gridOutline = !gridOutline;

}
//Delete current grid
function clearGrid() {
  var grid = document.getElementById('grid');
  while (grid.firstChild) grid.removeChild(grid.firstChild);
  createGrid(slider.value);
}
// On left click color the square being hovered over
//If mouse is still held down continue to color all over the squares being hovered over
// Cease coloring squares on mouse release

function addListeners() {
  document.querySelectorAll('.square').forEach(item => {
    // On left click color the square being hovered over   
    item.addEventListener('mousedown', event => {
      clicked = true
      if (!eraserActive) {
        // item.classList.add('colored');
        item.style.background = selectedColor;
      }
      if (eraserActive) {
        // item.classList.remove('colored');
        item.style.background = defaultColor;
      }
      //If mouse is still held down continue to color all over the squares being hovered over
    })
    item.addEventListener('mouseenter', function () {
      if (clicked)
        item.style.background = selectedColor;
      if (clicked && eraserActive)
        item.style.background = defaultColor;
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
  if (gridOutline)
    gridBtn.classList.add('on');
  if (!gridOutline)
    gridBtn.classList.remove('on');
})
// clears grid on button click
document.getElementById('clearBtn').addEventListener('click', event => {
  clearGrid();
})

// turns on eraser on button click
document.getElementById('eraseBtn').addEventListener('click', event => {
  toggleErase();
  if (eraserActive)
  eraseBtn.classList.add('on');
if (!eraserActive)
  eraseBtn.classList.remove('on');
})

// clears grid on button click
document.getElementById('fillBtn').addEventListener('click', event => {
  document.querySelectorAll('.square').forEach(item => {
        item.style.background = selectedColor;
      })
})



// creates grid based on slider value
slider.addEventListener('change', event => {
  clearGrid();
})


colorPicker.on('color:change', function (color) {
  // when color changes make that the color for the square
  selectedColor = color.hexString;
// change body color
  document.getElementById('headerText').style.color = selectedColor;
});



// Mobile Sidebar
document.getElementById('gridOutlineBtnMobile').addEventListener('click', event => {
  toggleGridOutline();
  if (gridOutline)
    gridBtn.classList.add('on');
  if (!gridOutline)
    gridBtn.classList.remove('on');
})
// clears grid on button click
document.getElementById('clearBtnMobile').addEventListener('click', event => {
  clearGrid();
})

// turns on eraser on button click
document.getElementById('eraseBtnMobile').addEventListener('click', event => {
  toggleErase();
  if (eraserActive)
  eraseBtn.classList.add('on');
if (!eraserActive)
  eraseBtn.classList.remove('on');
})

// clears grid on button click
document.getElementById('fillBtnMobile').addEventListener('click', event => {
  document.querySelectorAll('.square').forEach(item => {
        item.style.background = selectedColor;
      })
})