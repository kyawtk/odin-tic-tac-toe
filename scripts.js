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

// let TicTacToeGame = (function () {
//   //private dom selectors
//   let getRemainingSpots = ()=>{return remainingSpots}
//   let gameboard = document.querySelector("#gameboard");
//   let info = document.querySelector("#info");
//   //private variables
//   let currentPlayer;
//   let remainingSpots = 9;
//   let startCells = [];
//   const winningCombinations = [
//     [0, 1, 2], // Top row
//     [3, 4, 5], // Middle row
//     [6, 7, 8], // Bottom row
//     [0, 3, 6], // Left column
//     [1, 4, 7], // Middle column
//     [2, 5, 8], // Right column
//     [0, 4, 8], // Diagonal from top-left to bottom-right
//     [2, 4, 6], // Diagonal from top-right to bottom-left
//   ];

//   const initializeBoard = () => {
//     for (let i = 0; i < 9; i++) {
//       startCells.push("");
//       console.log(startCells);
//     }
//   };
//   const createBoard = ()=>{
//     startCells.forEach((cell, index) => {
//         let cellElement = document.createElement("div");
//         console.log("creating div");
//         cellElement.classList.add("square");
//         console.log("add ing child");
//         cellElement.id = index;
//         cellElement.addEventListener("click", addGo);
//         gameboard.appendChild(cellElement);

//       });
//   }
//   const addGo = (e) =>{
//     console.log(e.target);
//     let goDisplay = document.createElement("div");
//     goDisplay.classList.add(currentPlayer.marker);
//     e.target.append(goDisplay);
//     currentPlayer.marker = currentPlayer.marker === "circle" ? "cross" : "circle";
//     e.target.removeEventListener("click", addGo);
//     remainingSpots--
//     checkScore();
//   }
//   // let checkScore = function () {
//   //   let allSquares = document.querySelectorAll(".square");
//   //   winningCombinations.forEach((array) => {
//   //     let circleWins = array.every((cell) =>
//   //       allSquares[cell].firstChild?.classList.contains("circle")
//   //     );
//   //     if (circleWins) {
//   //       console.log("circle wins");
//   //       info.textContent = "CIRCLE WINS!";
//   //       allSquares.forEach((square) =>
//   //         square.replaceWith(square.cloneNode(true))
//   //       );

//   //     }
//   //   });
//   //   winningCombinations.forEach((array) => {
//   //     let crossWins = array.every((cell) =>
//   //       allSquares[cell].firstChild?.classList.contains("cross")
//   //     );
//   //     if (crossWins) {
//   //       console.log("cross wins");
//   //       info.textContent = "cross WINS!";
//   //       allSquares.forEach((square) =>
//   //         square.replaceWith(square.cloneNode(true))
//   //       );

//   //     }
//   //   });

//   // };
//   // Check for a win condition or a tie
// const checkScore = () => {
//   let allSquares = document.querySelectorAll('.square');
//   let circleWins = false;
//   let crossWins = false;

//   // Check for winning combinations
//   winningCombinations.forEach(array => {
//     if (array.every(cell => allSquares[cell].firstChild?.classList.contains("circle"))) {
//       circleWins = true;
//     }
//     if (array.every(cell => allSquares[cell].firstChild?.classList.contains("cross"))) {
//       crossWins = true;
//     }
//   });

//   if (circleWins) {
//     console.log("circle wins");
//     info.textContent = "CIRCLE WINS!";
//     info.style.display  = "block"
//     allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
//   } else if (crossWins) {
//     console.log("cross wins");
//     info.textContent = "CROSS WINS!";
//     info.style.display  = "block"

//     allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
//   } else if (remainingSpots === 0){
//     console.log("It's a draw!");
//     info.style.display  = "block"
//     info.textContent = "It's a draw!";
//   }
// };
// const restartGame = () => {
//   // Clear the gameboard
//   gameboard.innerHTML = '';

//   // Reset the startCells array
//   startCells = [];

//   // Reset remainingSpots
//   remainingSpots = 9;

//   // Recreate the gameboard
//   initializeBoard();
//   createBoard();

//   info.display.style = 'none'
//   // Reset the currentPlayer
//   currentPlayer = CreatePlayer('p1', 'cross');

//   // Clear the info message
//   info.textContent = '';
// };

//   let startGame = ()=>{

//     initializeBoard()
//     createBoard()
//     currentPlayer  = CreatePlayer('p1', "cross")
//     const restartButton = document.querySelector('#restart');
//     restartButton.addEventListener('click', restartGame);
//   }
//   let CreatePlayer = (name, marker)=>{
//     return {name, marker}
//     }
//   return{
//     startGame,
//     getRemainingSpots
//   }
// })();

// TicTacToeGame.startGame()

class TicTacToeGame {
  constructor() {
    // private dom selectors
    this.gameboard = document.querySelector("#gameboard");
    this.info = document.querySelector("#info");
    
    // private variables
    this.currentPlayer;
    this.remainingSpots = 9;
    this.startCells = [];
    
    // Winning combinations
    this.winningCombinations = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal from top-left to bottom-right
      [2, 4, 6], // Diagonal from top-right to bottom-left
    ];
  }
  
  initializeBoard() {
    for (let i = 0; i < 9; i++) {
      this.startCells.push("");
      console.log(this.startCells);
    }
  }
  
  createBoard() {
    this.startCells.forEach((cell, index) => {
      let cellElement = document.createElement("div");
      console.log("creating div");
      cellElement.classList.add("square");
      console.log("adding child");
      cellElement.id = index;
      cellElement.addEventListener("click", this.addGo.bind(this));
      this.gameboard.appendChild(cellElement);
    });
  }
  
  addGo(e) {
    console.log(e.target);
    let goDisplay = document.createElement("div");
    goDisplay.classList.add(this.currentPlayer.marker);
    e.target.append(goDisplay);
    this.currentPlayer.marker = this.currentPlayer.marker === "circle" ? "cross" : "circle";
    e.target.removeEventListener("click", this.addGo);
    this.remainingSpots--;
    this.checkScore();
  }

  checkScore() {
    let allSquares = document.querySelectorAll('.square');
    let circleWins = false;
    let crossWins = false;

    // Check for winning combinations
    this.winningCombinations.forEach(array => {
      if (array.every(cell => allSquares[cell].firstChild?.classList.contains("circle"))) {
        circleWins = true;
      }
      if (array.every(cell => allSquares[cell].firstChild?.classList.contains("cross"))) {
        crossWins = true;
      }
    });

    if (circleWins) {
      console.log("circle wins");
      this.info.textContent = "CIRCLE WINS!";
      this.info.style.display = "block";
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
    } else if (crossWins) {
      console.log("cross wins");
      this.info.textContent = "CROSS WINS!";
      this.info.style.display = "block";
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
    } else if (this.remainingSpots === 0) {
      console.log("It's a draw!");
      this.info.style.display = "block";
      this.info.textContent = "It's a draw!";
    }
  }
  
  restartGame() {
    // Clear the gameboard
    this.gameboard.innerHTML = '';
    
    // Reset the startCells array
    this.startCells = [];
    
    // Reset remainingSpots
    this.remainingSpots = 9;
    
    // Recreate the gameboard
    this.initializeBoard();
    this.createBoard();
    
    this.info.style.display = 'none';
    
    // Reset the currentPlayer
    this.currentPlayer = this.createPlayer('p1', 'cross');
    
    // Clear the info message
    this.info.textContent = '';
  }
  
  startGame() {
    this.initializeBoard();
    this.createBoard();
    this.currentPlayer = this.createPlayer('p1', 'cross');
    
    const restartButton = document.querySelector('#restart');
    restartButton.addEventListener('click', this.restartGame.bind(this));
  }
  
  createPlayer(name, marker) {
    return { name, marker };
  }
  
  getRemainingSpots() {
    return this.remainingSpots;
  }
}

const game = new TicTacToeGame();
game.startGame();
