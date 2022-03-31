//creates the grid
function createGrid() {
    for(let i=0; i<16; i++)
    {
        const newDiv = document.createElement("div");
        newDiv.classList.add('square');
        const gridContainer = document.getElementById("gridContainer");
        gridContainer.appendChild(newDiv);
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
