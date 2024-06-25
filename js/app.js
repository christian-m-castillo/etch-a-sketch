document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  
  generateGrid();
  armSquares();

  function generateGrid() {
    for (let i = 0; i < 16; i++) {
      let gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      container.appendChild(gridSquare);
      console.log('gridSquare added.')
    }
  }

  function armSquares() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
      square.addEventListener('click', drawColor)
    });
  }

  function drawColor() {
    this.style.backgroundColor = 'green';
  }
});