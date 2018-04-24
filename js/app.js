const testColor = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(255, 255, 255)",
  "rgb(255, 0, 255)",
  "rgb(255, 0, 255)"
]
const color = document.querySelectorAll(".colors");
let pickColor = pickedColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");

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
