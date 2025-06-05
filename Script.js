let currentPlayer = 'X';
const cells = document.querySelectorAll('td');
const statusDisplay = document.querySelector('#playerTurn');
cells.forEach(cell =>{
  cell.addEventListener('click', function() {
    if (!cell.textContent) {
      cell.textContent = currentPlayer;
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      statusDisplay.textContent = `Player ${currentPlayer}'s turn`
      const restartButton = document.querySelector('button');
      restartButton.addEventListener('click',() => {
        cells.forEach(cell => cell.textContent = '');
        currentPlayer = 'X';
        statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
      });
    }
  });
});
function checkWin() {
  const wins = [
    [0,1,2], [3,4,5],[6,7,8],
    [0,3,6], [1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  const cellTexts = Array.from(cells).map(cell => cell.textContent);

  for(const[a,b,c] of wins) {
    if (cellTexts[a] && cellTexts[a] === cellTexts[b] && cellTexts[a] === cellTexts[c]) {
      statusDisplay.textContent = `Play ${cellTexts[a]} Wins!`;
      cells.forEach(cell => cell.removeEventListener('click',clickHandler));
      return true;
    }
  }            
return false;
}
function clickHandler() {
  if (!this.textContent) {
    this.textContent = currentPlayer;
    if (!checkWin()) {
      currentPlayer =currentPlayer ==='X' ? 'O' : 'X';
      statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}
cell.forEach(cell => cell.addEventListener('click',clickHandler));
