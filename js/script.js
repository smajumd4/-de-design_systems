// change cursor when clicked
// change random behaviours of first image through cursor
// random behaviours - brightness, contrast, zoom

window.onload = function() {
  var img = document.getElementsByClassName("img");
  var body = document.getElementsByTagName("body");
  var button = document.getElementsByClassName("btn");

  // change cursor with clicks
  // ind = 0 => zoomin; ind=1 => zoom out
  // n = 0 => clicked once; n = 1 => clicked twice
  // m=0 => zoomin; m=1 => zoomout; m=2 => unselected
  var n = 0;
  var m = 2;
  function zoom(ind) {
    if (n===0) {
      button[ind].style.border = "2px white solid";
      if (ind===0) {
        m = 0; //indicator for zoomIn
        body[0].style.cursor = "zoom-in";
      }
      else {
        m = 1; //indicator for zoomOut
        body[0].style.cursor = "zoom-out";
      }
      n = 1;
    }
    else {
      if (m===ind) {
        button[ind].style.border = "none";
        body[0].style.cursor = "default";
        n=0;
        m=2;
      }
      else {
        button[0].style.border = "none";
        button[1].style.border = "none";
        n = 0;
        m = ind;
        zoom(ind);
      }
    }
  }


  // event listener for zoom in and out
  button[0].addEventListener("click", function zoomIn() {zoom(0);});
  button[1].addEventListener("click", function zoomOut() {zoom(1);});
}
