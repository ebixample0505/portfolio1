let mySong = document.getElementById("mySong");
let icon = document.getElementById("icon");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "./images2/pause.png";
  } else {
    mySong.pause();
    icon.src = "./images2/play.png";
  }
};