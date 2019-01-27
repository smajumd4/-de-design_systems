// change cursor when clicked
// change random behaviours of first image through cursor
// random behaviours - brightness, contrast, zoom

window.onload = function() {
  var img = document.getElementsByClassName("img");
  var body = document.getElementsByTagName("body");
  var button = document.getElementsByClassName("btn");

  // change cursor with clicks
  var n = 0;
  var m;
  function zoom(ind) {
    if (n===0) {
      if (ind===0) {
        console.log("zoomin");
        m = 1; //indicator for zoomIn
        body[0].style.cursor = "zoom-in";
      }
      else {
        console.log("zoomout");
        m = 2; //indicator for zoomOut
        body[0].style.cursor = "zoom-out";
      }
      n = 1;
    }
    else {
      console.log("donothing");
      body[0].style.cursor = "default";
      n=0;
      m=0;
    }
  }
  // function zoomOut() {
  //   m = 2; //indicator for zoomOut
  //   if (n===0) {
  //     body[0].style.cursor = "zoom-out";
  //     n = 1;
  //   }
  //   else {
  //     body[0].style.cursor = "default";
  //     n=0;
  //   }
  // }

  // event listener for zoom in and out
  button[0].addEventListener("click", function zoomIn() {zoom(0);});
  button[1].addEventListener("click", function zoomOut() {zoom(1);});
}
