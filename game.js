function start() {

    var time = Math.floor((Math.random() * 100) + 200);
    var karma = Math.floor((Math.random() * 100) + 10);;
    document.getElementById("karma").innerHTML = "Karma: " + karma;
    document.getElementById("time").innerHTML = "Time: " + time + "s";
    var counter=setInterval(timer, 1000);

    function timer()
    {
      time=time-1;
      if (time <= 0)
      {
         clearInterval(counter);
         //counter ends, do end game alert over here
         return;
      }
      document.getElementById("time").innerHTML = "Time: " + time + "s";;
    }

}
window.onload = start;
