$(document).ready( function() {
  // your code here
  //
  //var audio = document.getElementsByTagName('tagName')

  //
  $(".note.c").click(function () {
      // reset so it plays from beginning
      $("#cAudio").get(0).currentTime=0;
      // play the audio
      $("#cAudio").get(0).play();
    });
  $(".note.d").click(function () {
      $("#dAudio")[0].currentTime=0;
      $("#dAudio")[0].play();
    });
  $(".note.e").click(function () {
      $("#eAudio")[0].currentTime=0;
      $("#eAudio")[0].play();
    });
  $(".note.f").click(function () {
      $("#fAudio")[0].currentTime=0;
      $("#fAudio")[0].play();
    });
  $(".note.g").click(function () {
      $("#gAudio")[0].currentTime=0;
      $("#gAudio")[0].play();
    });
  $(".note.a").click(function () {
      $("#aAudio")[0].currentTime=0;
      $("#aAudio")[0].play();
    });
  $(".note.b").click(function () {
      $("#bAudio")[0].currentTime=0;
      $("#bAudio")[0].play();
    });
});
