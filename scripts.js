///// this section is written in global pattern 


// let gameboard = document.querySelector("#gameboard");
// let info = document.querySelector("#info");

// let startCells = [];
// for (let i = 0; i < 9; i++) {
//   startCells.push("");
//   console.log(startCells);
// }

// let go = "circle";

// function creatBoard() {
//   startCells.forEach((cell, index) => {
//     let cellElement = document.createElement("div");
//     console.log("creating div");
//     cellElement.classList.add("square");
//     console.log("add ing child");
//     cellElement.id = index;
//     cellElement.addEventListener("click", addGo);
//     gameboard.appendChild(cellElement);
//   });
// }
// creatBoard();
// function addGo(e) {
//   console.log(e.target);
//   let goDisplay = document.createElement("div");
//   goDisplay.classList.add(go);
//   e.target.append(goDisplay);
//   go = go === "circle" ? "cross" : "circle";
//   e.target.removeEventListener("click", addGo);
//   checkScore();
// }
// const winningCombinations = [
//   [0, 1, 2], // Top row
//   [3, 4, 5], // Middle row
//   [6, 7, 8], // Bottom row
//   [0, 3, 6], // Left column
//   [1, 4, 7], // Middle column
//   [2, 5, 8], // Right column
//   [0, 4, 8], // Diagonal from top-left to bottom-right
//   [2, 4, 6], // Diagonal from top-right to bottom-left
// ];
// let checkScore = function () {
//   let allSquares = document.querySelectorAll(".square");
//   winningCombinations.forEach((array) => {
//     let circleWins = array.every((cell) =>
//       allSquares[cell].firstChild?.classList.contains("circle")
//     );
//     if (circleWins) {
//       console.log("circle wins");
//       info.textContent = "CIRCLE WINS!";
//       allSquares.forEach((square) =>
//         square.replaceWith(square.cloneNode(true))
//       );
//     }
//   });
//   winningCombinations.forEach((array) => {
//     let crossWins = array.every((cell) =>
//       allSquares[cell].firstChild?.classList.contains("cross")
//     );
//     if (crossWins) {
//       console.log("cross wins");
//       info.textContent = "cross WINS!";
//       allSquares.forEach((square) =>
//         square.replaceWith(square.cloneNode(true))
//       );
//     }
//   });
// };

//this section is written in modules pattern and objecrtss
//using the immediately invoked functions


let TicTacToeGame = (function () {
  //private dom selectors
  let gameboard = document.querySelector("#gameboard");
  let info = document.querySelector("#info");
  //private variables
  let currentPlayer
  let startCells = [];
  const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  const initializeBoard = () => {
    for (let i = 0; i < 9; i++) {
      startCells.push("");
      console.log(startCells);
    }
  };
  const createBoard = ()=>{
    startCells.forEach((cell, index) => {
        let cellElement = document.createElement("div");
        console.log("creating div");
        cellElement.classList.add("square");
        console.log("add ing child");
        cellElement.id = index;
        cellElement.addEventListener("click", addGo);
        gameboard.appendChild(cellElement);
      });
  }
  const addGo = (e) =>{
    console.log(e.target);
    let goDisplay = document.createElement("div");
    goDisplay.classList.add(currentPlayer.marker);
    e.target.append(goDisplay);
    currentPlayer.marker = currentPlayer.marker === "circle" ? "cross" : "circle";
    e.target.removeEventListener("click", addGo);
    checkScore();
    
  }
  let checkScore = function () {
    let allSquares = document.querySelectorAll(".square");
    winningCombinations.forEach((array) => {
      let circleWins = array.every((cell) =>
        allSquares[cell].firstChild?.classList.contains("circle")
      );
      if (circleWins) {
        console.log("circle wins");
        info.textContent = "CIRCLE WINS!";
        allSquares.forEach((square) =>
          square.replaceWith(square.cloneNode(true))
        );
        
      }
    });
    winningCombinations.forEach((array) => {
      let crossWins = array.every((cell) =>
        allSquares[cell].firstChild?.classList.contains("cross")
      );
      if (crossWins) {
        console.log("cross wins");
        info.textContent = "cross WINS!";
        allSquares.forEach((square) =>
          square.replaceWith(square.cloneNode(true))
        );
        
      }
    });
   
  };

  let startGame = ()=>{
    
    initializeBoard()
    createBoard()
    currentPlayer  = CreatePlayer('p1', "cross")

  }
  let CreatePlayer = (name, marker)=>{
    return {name, marker}
    }
  return{
    startGame
  }
})();

TicTacToeGame.startGame()
