let gameBoard = [
    ["","",""],
    ["","",""],
    ["","",""]
]

let currentPlayer = "X";
let noOfPlays = 0;
let isGameOver = false;

function playerMove(cell) {
    if(isGameOver){
        document.getElementById('playerTurn').innerHTML = "Game over! Restart Game";
        return;
    }
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;

    //check if the click valid
    if(gameBoard[row][col] === "") {
        //upadate the particular cell on gameBoard and UI\
        gameBoard[row][col] = currentPlayer;
        cell.innerHTML = currentPlayer;
        noOfPlays++;

        if(checkWinner()){ //check the winne
            document.getElementById('result').innerHTML = `player '${currentPlayer}' won!`
            isGameOver = true;
        } else  if (checkTie()) {//else checkfor a tie
            document.getElementById('result').innerHTML = `It is a tie!`
        } else { // the game continues

        if(currentPlayer ===  'X'){
            currentPlayer = 'O';
        } 
        else{
            currentPlayer = 'X';
        }
        document.getElementById('playerTurn').innerHTML = `Now it  is the turn of '${currentPlayer}'!`
    }
    }

}
function checkWinner(){
    //rows
    for(let i= 0; i<3; i++){
        if(gameBoard[i][0] === currentPlayer
            && gameBoard[i][1] === currentPlayer
            && gameBoard[i][2] === currentPlayer){
                return true;
            }
    }
    //columns
    for(let i= 0; i<3; i++){
        if(gameBoard[0][i] === currentPlayer
            && gameBoard[1][i] === currentPlayer
            && gameBoard[2][i] === currentPlayer){
                return true;
            }
    }
    //diagonal 1
    if(gameBoard[0][0] === currentPlayer
            && gameBoard[1][1] === currentPlayer
            && gameBoard[2][2] === currentPlayer){
                return true;
            }

    //diagonal 2
    if(gameBoard[0][2] === currentPlayer
        && gameBoard[1][1] === currentPlayer
        && gameBoard[2][0] === currentPlayer){
            return true;
        }        
     
}

function checkTie(){
    if(noOfPlays == 9){
        return true;
    }
    return false;
}

function restartGame() {
    window.location.reload();
}