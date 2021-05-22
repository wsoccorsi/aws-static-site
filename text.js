console.log('here')
// Grab the Header with h1
var header = document.querySelector("#soft-eng")

// Then you can interface with the object.

// Interface with the style.
//You will see a ton of options show up!
header.style.color = 'red'


function getRandomColor() {
  var letters = "FFFFFF";
  var color = '#';
  for (var i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}


function changeHeaderColor() {
  colorInput = getRandomColor()
  header.style.color = colorInput;
}


setInterval("changeHeaderColor()", 500);
