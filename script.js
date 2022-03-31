function createGrid() {
    for(let i=0; i<16; i++)
    {
        const newDiv = document.createElement("div");
        newDiv.classList.add('square');
        const gridContainer = document.getElementById("gridContainer");
        gridContainer.appendChild(newDiv);
    }
}

createGrid();

let click = false;
// On left click color the square being hovered over
//If mouse is still held down continue to color all over the squares being hovered over
// Cease coloring squares on mouse release

document.querySelectorAll('.square').forEach(item => {
    item.addEventListener('click', event=> {
        item.classList.add('colored');
        click == true;
        alert();
    })
    item.addEventListener('mouseover', event => {
        if(click)
        item.classList.add('colored');
    })
 })

// document.querySelectorAll('.square').forEach(item => {
    
//     item.addEventListener('mouseover', event => {
//         document.getElementById("playerHand").src = `./images/${item.id}Left.png`;
//     })
//     // change playerHand back to rock when no longer mouseover
//     item.addEventListener('mouseleave', event => {
//         document.getElementById("playerHand").src = "./images/rockLeft.png";
//     })