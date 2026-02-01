

document.getElementById("test").onsubmit = function(event) {
  event.preventDefault();
  alertUser();
};

//testing
function alertUser() {
    alert("Congratulations!\nYou got the script running.");
}
