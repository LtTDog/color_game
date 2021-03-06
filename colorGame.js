let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let h1 = document.querySelector("h1");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();    
    setupSquares();
    reset();
}

function setupSquares(){
    for (let i = 0; i < squares.length; i++) {
   
        //add click listners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor)
            {
                messageDisplay.textContent = "Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function setupModeButtons(){
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //figure out how many squares to show
            if(this.textContent === "Easy"){
                numberOfSquares = 3;
            } else {
                numberOfSquares = 6;
            }
            reset();
        });
    }
}

function reset(){
    //generate all new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors"
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    let arr = [];
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }

    //return that array
    return arr;
}

function randomColor(){
    // pick number between 0 and 255;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    //return rgb(r, g, b)
    return "rgb(" + r + ", " + b + ", " +  g + ")";
}