//console.log("connected");

// random colour generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 8; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// h1 tag's colour changer
var header = document.querySelector("h1");
function h1ColourChanger(){
  colour_input = getRandomColor();
  header.style.color = colour_input;
}
// interval for colour changer
setInterval('h1ColourChanger()', 500);


//p tag's behaviours
var para1 = document.querySelector("#para1");
var para2 = document.querySelector("#para2");

para1.addEventListener('mouseover', function(){
  para1.textContent = "Didn't believe it? Try playing once";
  //para1.style.color = 'DodgerBlue';
  //para1.style.color = getRandomColor();
})

para1.addEventListener('mouseout', function(){
  para1.textContent = "This is a simple game";
  //para1.style.color = 'black';
  //para1.style.color = getRandomColor();
})



//restart game button
var restart = document.querySelector('#b');

// grab all the squares
var squares = document.querySelectorAll('td');

// clear all the squares

function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click', clearBoard);


function changeMarker(){
    if (this.textContent === ''){
      this.textContent = 'X';
    } else if (this.textContent === 'X') {
      this.textContent = 'O';
    } else if (this.textContent === 'O') {
      this.textContent = '';
    }
  }


for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker);
}

// check the markers
