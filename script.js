window.onload = function(){ 
let gridNumber;
gridNumber = 16;
gridNumber = prompt("Insert a number of tiles you would like to have in each row and collumn")

const board = document.querySelector("#board");
for (let i = 0; i < gridNumber; i++ ) {
    const row = document.createElement("p");
    row.classList.add("row");
    board.append(row);
    for (let j = 0; j < gridNumber; j++ ) {
    const tile = document.createElement("div")
    tile.classList.add("tile")
    row.append(tile)
    tile.addEventListener('mouseover', () => {
        tile.style.backgroundColor = 'black';
      });
    }
}
const button = document.querySelector('#refresh');
button.addEventListener('mouseover', () => {
 
  button.style.backgroundColor = 'darkblue';
  button.style.color = "white";
});
button.addEventListener("mouseout", () => {
    
    button.style.backgroundColor = "";
    button.style.color = "";
  });
  button.addEventListener("click", () =>{
    window.location.reload()
  } )
}


