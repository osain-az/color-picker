let numOfSquares = 6
let testColor = generateRandomColors(numOfSquares);
const resetButton = document.querySelector("#reset")
let color = document.querySelectorAll(".colors");
let pickColor = pickedColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn =  document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares= 3
  testColor = generateRandomColors(numOfSquares);
  pickColor = pickedColor();
  colorDisplay.textContent = pickColor;
  for ( let i = 0; i < color.length; i++) {
    if (color[i]) {
      color[i].style.backgroundColor = testColor[i];
    }
  }
  for ( let i = 3; i < color.length; i++){
    if ( color[i]){
      color[i].style.display = "none";
    }
  }
});
hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numOfSquares = 6
  testColor = generateRandomColors(numOfSquares);
  pickColor = pickedColor();
  colorDisplay.textContent = pickColor;
  for ( let i = 0; i < color.length; i++) {
    if (color[i]) {
      color[i].style.backgroundColor = testColor[i];
      color[i].style.display = "block"
    }
  }
  // for ( let i = 3; i < color.length; i++){
  //   if ( color[i]){
  //     color[i].style.display = "none";
  //   }

});

resetButton.addEventListener("click", function () {
  // Generate all new colorDisplay
  testColor = generateRandomColors(numOfSquares);
  // pick a new color from the array
  pickColor = pickedColor();
  // change the colorDisplay to match the new picked color
  colorDisplay.textContent = pickColor;
  messageDisplay.textContent = ""
  this.textContent = "New colors"
// change colors of the square box
for (let i = 0; i < color.length; i++) {
  color[i].style.backgroundColor = testColor[i]
};
h1.style.backgroundColor = "purple";
});
colorDisplay.textContent = pickColor;
for (let i = 0; i < color.length; i++) {
  //adding initia color
  color[i].style.backgroundColor =  testColor[i];
  // adddinng click listetening
  color[i].addEventListener("click", function(){
    // grab the clicked color
    const clickedColor = this.style.backgroundColor;
    // compare to the picked colors
    if(clickedColor === pickColor){
      messageDisplay.textContent = "Correct!!!!, nice job"
      ChangeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again !!!!"

    }
    else {
     this.style.backgroundColor = "grey";
     messageDisplay.textContent = "Try again!!!!"

    };

  });
};

// Looping through and changing all color to match the correct color.
function ChangeColors(matchColor) {
  // loop the colors
  for( let i = 0; i < color.length; i++){
    // change all the color to match the correct color
    color[i].style.backgroundColor = matchColor;
  }

}
// Sellecting random colors
 function pickedColor(){
  let random = Math.floor(Math.random() * testColor.length);
  return testColor[random];

 }

 function generateRandomColors(num) {
  // make an array
   const arr = [];
     // add random color to array
   for (let i = 0; i < num; i++) {
     // get random color and push it to array(with new function)
     arr.push(randomColor())
   };
  // return that array
  return arr;

 };

function randomColor(){
  // pic a "red" from 0 - 255
  const r = Math.floor(Math.random() * 256);
  // pic aa "green" from  0 - 255
  const g = Math.floor(Math.random() * 256);
  // pick a "blue"  from 0 -255
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
