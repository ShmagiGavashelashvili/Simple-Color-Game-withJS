let numOfSquares = 6;

let colors = generateRandomColors(numOfSquares);
const squares = document.querySelectorAll('.square');
const colorDisplay = document.getElementById('colorDisplay');
const h1 = document.querySelector('h1');
const messageDisplay = document.getElementById('message');
const resetButton = document.getElementById('reset');
const modeButtons = document.querySelectorAll('.mode');

let pickedColor = pickColor();

colorDisplay.innerText = pickedColor;

for(let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function(){
       modeButtons[0].classList.remove('selected');
       modeButtons[1].classList.remove('selected');
       this.classList.add('selected');
       if(this.innerText === 'EASY') {
           numOfSquares = 3;
       } else {
           
           numOfSquares = 6;
       }
       reset();
    }); 
}


for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', function() {
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
           changeColor(pickedColor);
        } else {
            messageDisplay.innerText = 'Try Again!';
            this.style.backgroundColor = '#232323';
        }
    });
}

function reset() {
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.innerText = pickedColor;
    messageDisplay.innerText = '';
    h1.style.backgroundColor = 'steelblue';
    for(let i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
      if(colors[i]) {
         squares[i].style.display = 'block';
      } else {
         squares[i].style.display = 'none';
      }
    }
}

resetButton.addEventListener('click', function(){
   reset();
});



function randomColor () {
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   return `rgb(${r}, ${g}, ${b})`
}

function generateRandomColors(num){
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}


function pickColor(){
   let random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function changeColor(color) {
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
    messageDisplay.innerText = 'Correct!'
}



