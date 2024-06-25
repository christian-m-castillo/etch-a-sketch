document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  
  generateGrid();

  function generateGrid() {
    for (let i = 0; i < 16; i++) {
      let gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      container.appendChild(gridSquare);
      console.log('gridSquare added.')
    }
  }
});