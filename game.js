var time;
var karma;

function start() {
  time = Math.floor((Math.random() * 100) + 200);
  karma = Math.floor((Math.random() * 100) + 10);
  document.getElementById("karma").innerHTML = "Karma: " + karma;
  document.getElementById("time").innerHTML = "Time: " + time + "s";

  var counter=setInterval(timer, 1000);
  function timer()
    {
      time=time-1;
      if (time <= 0)
      {
         clearInterval(counter);
         document.getElementById("gamegif").src = "images/gameover.gif"
         window.alert("You are dead!");
         return;
      }
      document.getElementById("time").innerHTML = "Time: " + time + "s";
      document.getElementById("karma").innerHTML = "Karma: " + karma;

    }

    document.getElementById('volunteer').addEventListener("click",volunteer);
    document.getElementById('plant').addEventListener("click",plant);
    document.getElementById('car').addEventListener("click",car);
    document.getElementById('drink').addEventListener("click",drink);
    document.getElementById('fight').addEventListener("click",fight);
    document.getElementById('vacation').addEventListener("click",vacation);
    document.getElementById('trade').addEventListener("click",trade);
    document.getElementById('random').addEventListener("click",random);
    document.getElementById('movie').addEventListener("click",movie);
}
window.onload = start;

function volunteer() {
  document.getElementById('gamegif').src = "images/volunteer.gif";
  time += 100;
  karma += 100;
}
function plant() {
  document.getElementById('gamegif').src = "images/plant.gif";
  time += 100;
  karma += 100;
}
function drink() {
  document.getElementById('gamegif').src = "images/drink.gif";
  time += 100;
  karma += 100;
}
function movie() {
  document.getElementById('gamegif').src = "images/movie.gif";
  time += 100;
  karma += 100;
}
function car() {
  document.getElementById('gamegif').src = "images/car.gif";

}
function fight() {
  document.getElementById('gamegif').src = "images/fight.gif";
}

function vacation() {
  document.getElementById('gamegif').src = "images/vacation.gif";
}

function trade() {
  document.getElementById('gamegif').src = "images/trade.gif";
}
