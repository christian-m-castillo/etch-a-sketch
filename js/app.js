document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const containerStyle = window.getComputedStyle(container);
  const containerWidth = containerStyle.getPropertyValue('width');
  const containerWidthNumericalValue = parseFloat(containerWidth);
  const resizeSquareButton = document.querySelector('#resizeSquare');

  let gridArea = 16;

  resizeSquareButton.addEventListener('click', resizeGrid)
  
  generateGrid();
  armSquares();

  function generateGrid() {
    container.innerHTML = '';
    for (let i = 0; i < gridArea; i++) {
      let gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      container.appendChild(gridSquare);
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

  function resizeGrid() {
    let sizeInput = prompt('Enter grid side length:'); 
    if (sizeInput <= 10) {
    gridArea = sizeInput * sizeInput;
    generateGrid();
    armSquares();
    sizeSquares();
    } else {
      alert('Enter value less than or equal to 10.')
    }
  }

  function sizeSquares() {
    const gridSquares = document.querySelectorAll('.grid-square')
    const gridAreaSquareRoot = Math.sqrt(gridSquares.length);
    let squareWidth = containerWidthNumericalValue / gridAreaSquareRoot;
    gridSquares.forEach(gridSquare => {
      gridSquare.style.width = squareWidth * .96  + 'px';
      console.log(containerWidthNumericalValue);
      console.log(squareWidth);
    });
  }
});

// The error in this code is with the sizeSquare function.
// The squares are rendered too narrow, and too tall.
// In the line 'container.style.width', I may not actually be retrieving the container's width value.
// Learn how to retrieve 