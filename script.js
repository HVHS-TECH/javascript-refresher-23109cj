//testing
function alertUser() {
    alert("Congratulations!\nYou got the script running.");
}

let element = null;
var textInput = null;
function userInput(){
  textInput = i_text.value.trim();
  element = document.getElementById("welcomeMessage");
  console.log(element);
  element.innerHTML = textInput;
}



function timeToSec(){
  var hoursMinDECSec = prompt("Enter time in the format hoursmins.sec, eg 1:36.24 would be 136.24");
  var timeSEC = null;
  var run = true;
  var winner = null;
  var points = null;
  while (run){
    console.log(timeSEC);
    if (hoursMinDECSec >= 100){
      hoursMinDECSec = hoursMinDECSec - 100;
      timeSEC = timeSEC + 3600
    } else if(hoursMinDECSec >= 1){
      hoursMinDECSec = hoursMinDECSec - 1;
      timeSEC = timeSEC + 60;
    } else if(hoursMinDECSec >= 0.1 ){
      hoursMinDECSec = hoursMinDECSec - 0.1;
      timeSEC = timeSEC + 10;
    }else if(hoursMinDECSec > 0 ){
      hoursMinDECSec = hoursMinDECSec - 0.01;
      timeSEC = timeSEC + 1
    }

    if(hoursMinDECSec <= 0){
      run = false;
      alert("time in secs is: " + timeSEC);
    }
  }
  console.log("While end")
  winner = prompt("Please enter the winners time in seconds")
  points = ((winner/timeSEC) * 25);
  points = Math.round(points * 100)/100;
  alert("the points are " + points);
}
