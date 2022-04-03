
//total height and width of the grid is 700px
//User inputs the amount of squares desired
//divde 700 by number of squares
//make each square the correct amount of pixels
//create the grid

const gridHeight = 700;
const gridWidth = 700;

function inputSquares() {
    let numSquares = prompt();
}

//creates the grid
function createGrid() {
  for(let i=0; i<64; i++)
  {
      const newDiv = document.createElement("div");
      newDiv.classList.add('square');
      const gridContainer = document.getElementById("grid");
      gridContainer.appendChild(newDiv);
  }
  for (const grid of document.querySelectorAll('.grid')) {
    grid.style.setProperty('--cols', Math.ceil(Math.sqrt(grid.children.length)));
  }
  
}


//Delete current grid
//remake new grid? seperate functions probably
function clearGrid() {
    document.getElementById("gridContainer").remove;
    const gridContainer = document.createElement("div");
    gridContainer.classList.add('gridContainer');
    document.body.appendChild(gridContainer);
    createGrid();
}

createGrid();
let clicked = false;
// On left click color the square being hovered over
//If mouse is still held down continue to color all over the squares being hovered over
// Cease coloring squares on mouse release

document.querySelectorAll('.square').forEach(item => {
    // On left click color the square being hovered over
    item.addEventListener('mousedown', event=> {
        item.classList.add('colored');
        clicked = true
        //If mouse is still held down continue to color all over the squares being hovered over
    })
    item.addEventListener('mouseenter', function () {
        if(clicked)
        item.classList.add('colored');
    })
        //ends drag when left click is released
    item.addEventListener('mouseup', function () {
        clicked = false;
    })
})

document.getElementById('clearBtn').addEventListener('click', event => {
    clearGrid();
})


