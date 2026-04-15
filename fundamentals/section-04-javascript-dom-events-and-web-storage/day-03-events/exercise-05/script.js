const cells = document.querySelectorAll(".cell");

let currentPlayerx = true;
document.getElementById("restart-button").addEventListener("click", startGame);

function startGame(){
    cells.forEach(cell => {
        cell.textContent="";
        cell.addEventListener("click", handleClick , {once:true});
    })
        
    };
function handleClick(event){
    event.target.textContent = currentPlayerx ? "X" : "O";
    currentPlayerx = !currentPlayerx;

    checkWinner();
}


startGame();

const winningCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;

        if (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            alert(cells[a].textContent + " wins!");
            startGame();
            return;
        }
    }
}

