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
      button[ind].style.boxShadow = " 0 .4vw .8vw 0 #DB5432";
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
        $(".btn").css({"border":"none", "width": "18vw", "box-shadow": "none"});
        n = 0;
        m = ind;
        zoom(ind);
      }
    }
  }

  // move the shape
  var x = 0;
  $(".grid-block").click(function(){
    console.log(x);
    if (m===0) {
      x = x + 4;
      $(".shape").each(function(i) {
        var y = Math.floor(Math.random() * Math.floor(8));
        console.log(y);
        $(this).css({"transform": `translateX(${x+y}vw)`});
      })
      if (x>= 41) {
        $(".shape").css({"transform": `translateX(-3vw)`});
        x = 0;
      }
    }
    if (m===1) {
      x = x - 4;
      $(".shape").each(function(i) {
        var y = Math.floor(Math.random() * Math.floor(8));
        $(this).css({"transform": `translateX(${x-y}vw)`});
      })
      if (x<=-1) {
        x = x + 50;
        $(".shape").css({"transform": `translateX(${x}vw)`});
      }
    }
  });

  // move the block
  var z = 0;
  $(".shape").click(function(){
    if (m===0) {z = z + 6;}
    if (m===1) {z = z - 6;}
    $(".grid-block").css({'transform': `rotate(${z}deg)`});
  });

  // hover over the block
  $(".grid-block").hover(
    function(){
      $(".shape").css({"background-color": "#1E3F3F", "box-shadow": "0.1vw .4vw .8vw 0.2vw #FF7654"});
    }, function(){
      $(".shape").css({"background-color": "#D62A00", "box-shadow": "none"});
    }
  );

  // hover over the shape
  $(".shape").hover(
    function(){
      $(".grid-block").css({"background-color": "#D62A00", "box-shadow": "0.1vw .4vw .8vw 0.2vw #1C8989"});
    }, function(){
      $(".grid-block").css({"background-color": "#1E3F3F", "box-shadow": "none"});
    }
  );

  // hover over the image
  $(".img").hover(
    function(){
      $(this).css({"box-shadow": "0.1vw .4vw .8vw 0.2vw #331D3F, 0.2vw .6vw .7vw 0.3vw #8E5572"});
    }, function(){
      $(this).css({"box-shadow": "none"});
    }
  );


  var topofDiv = $("#alert-container").offset().top; //gets offset of alert

  // scroll event
  $(window).scroll(function(){
    if (m===2) {
      if ($(window).scrollTop() >= (topofDiv)) {
        $('.alert > p:first-child').css({'color': '#BA2500'});
        $('.alert > p:last-child').css({'color': '#CCC8CE'});
      }
      else {
        $('.alert > p:first-child').css({'color': '#CCC8CE'});
        $('.alert > p:last-child').css({'color': '#CCC8CE'});
      }
    }
    else {
      $('.alert > p:first-child').css({'color': '#CCC8CE'});
      $('.alert > p:last-child').css({'color': '#BA2500 '});

    }
  });

  // image property change
  // img-1
  var brit = 100;
  $(".img-3").click(function(){
    if (m===0) {
      brit = brit + 20;
      $(".img-1").css({'filter': `brightness(${brit}%)`});
      $(".notes-1 > p").text(`Brightness changed to ${brit-100}%`)
    }
    if (m===1) {
      brit = brit - 10;
      $(".img-1").css({'filter': `brightness(${brit}%)`});
      $(".notes-1 > p").text(`Brightness changed to ${brit-100}%`)
    }
  });
  // img-2
  var cont = 100;
  $(".img-1").click(function(){
    if (m===0) {
      cont = cont + 20;
      $(".img-2").css({'filter': `contrast(${cont}%)`});
      $(".notes-2 > p").text(`Contrast changed to ${cont-100}%`)
    }
    if (m===1) {
      console.log('img-2 clicked');
      cont = cont - 10;
      $(".img-2").css({'filter': `contrast(${cont}%)`});
      $(".notes-2 > p").text(`Contrast changed to ${cont-100}%`)
    }
  });
  // img-3
  var blur = 10;
  $(".img-2").click(function(){
    if (m===0) {
      blur = blur + 8;
      $(".img-3").css({'filter': `blur(${blur}px)`});
      $(".notes-3 > p").text(`Blur changed to ${blur}px`)
    }
    if (m===1) {
      blur = blur - 8;
      $(".img-3").css({'filter': `blur(${blur}px)`});
      $(".notes-3 > p").text(`Blur changed to ${blur}px`)
    }
  });


  // event listener for zoom in and out
  button[0].addEventListener("click", function zoomIn() {zoom(0);});
  button[1].addEventListener("click", function zoomOut() {zoom(1);});

}
