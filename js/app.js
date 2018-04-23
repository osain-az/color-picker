const test = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(255, 255, 255)",
  "rgb(255, 0, 255)",
  "rgb(255, 0, 255)"
]
var color = document.querySelectorAll(".colors");
for (const i = 0; i < color.length; i++) {
  color[i].style.backgroundColor =  test[i];
};
