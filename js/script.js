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
      button[ind].style.boxShadow = " 0 .4vw .8vw 0 red";
      button[ind].style.width = "19vw";
      if (ind===0) {
        m = 0; //indicator for zoomIn
        body[0].style.cursor = "zoom-in";
      }
      else {
        m = 1; //indicator for zoomOut
        body[0].style.cursor = "zoom-out";
      }
      n = 1;
      console.log("m is: ", m)
    }
    else {
      if (m===ind) {
        button[ind].style.border = "none";
        button[ind].style.width = "18vw";
        button[ind].style.boxShadow = "none";
        body[0].style.cursor = "default";
        n=0;
        m=2;
      }
      else {
        $(".btn").css({"border":"none", "width": "18vw", "height":"12vw", "box-shadow": "none"});
        n = 0;
        m = ind;
        zoom(ind);
      }
    }
  }

  // move the shape
  var x = 0;
  $(".shape").click(function(){
    console.log(x);
    if (m===0) {
      $(".shape").css({"transform": `translateX(${2+x}vh)`});
      x = x + 6;
    }
    if (m===1) {
      $(".shape").css({"transform": `translateX(-${2+x}vh)`});
      x = x + 4;
    }
  });


  // event listener for zoom in and out
  button[0].addEventListener("click", function zoomIn() {zoom(0);});
  button[1].addEventListener("click", function zoomOut() {zoom(1);});

}
