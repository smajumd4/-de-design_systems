// change cursor when clicked
// change random behaviours of first image through cursor
// random behaviours - brightness, contrast, zoom

window.onload = function() {
  var img = document.getElementsByClassName("img");
  var div = document.getElementsByTagName("div");
  var button = document.getElementsByClassName("btn");
  // console.log(body[1]);
  function once() {
    console.log("Done.");
  }

  button[0].addEventListener("click", once);
}
