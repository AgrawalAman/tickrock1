var time;
var karma;

function start() {
  time = Math.floor((Math.random() * 100) + 60);
  karma = Math.floor((Math.random() * 100) + 50);
  document.getElementById("karma").innerHTML = "Karma: " + karma;
  document.getElementById("time").innerHTML = "Time: " + time + "s";
  document.getElementById('volunteer').addEventListener("click",volunteer);
  document.getElementById('plant').addEventListener("click",plant);
  document.getElementById('car').addEventListener("click",car);
  document.getElementById('vacation').addEventListener("click",vacation);
  document.getElementById('fight').addEventListener("click",fight);
  document.getElementById('trade').addEventListener("click",trade);

  var counter=setInterval(timer, 1000);
  function timer()
    {
      time=time-1;
      if (time <= 0 || karma <=0)
      {
         clearInterval(counter);
         document.getElementById("gamegif").src = "images/gameover.gif"
         window.alert("You are dead!");
         return;
      }
      
      document.getElementById("time").innerHTML = "Time: " + time + "s";
      document.getElementById("karma").innerHTML = "Karma: " + karma;

    }


}
window.onload = start;

function volunteer() {
  document.getElementById('gamegif').src = "images/volunteer.gif";
  time -= 50;
  karma += 100;
  playSound();
}

function plant() {
  document.getElementById('gamegif').src = "images/plant.gif";
  time -= 100;
  karma += 250;
  playSound();
}
function car() {
  document.getElementById('gamegif').src = "images/car.gif";
  time -= 300;
  karma -= 1000;
  playSound();
}
function vacation() {
  document.getElementById('gamegif').src = "images/vacation.gif";
  time -= 1000;
  karma -= 1000;
  playSound();
}
function fight() {
  document.getElementById('gamegif').src = "images/fight.gif";
  time += 300;
  karma -= 100;
  playSound();
}
function trade() {
  document.getElementById('gamegif').src = "images/trade.gif";
  time += 100;
  karma -= 200;
  playSound();
}

function playSound () {
    document.getElementById('play').play();
}
