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