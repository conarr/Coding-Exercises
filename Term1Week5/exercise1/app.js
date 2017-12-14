document.getElementById('stopLight').onclick = function() {

  function changeclass() {

var NAME = document.getElementById("stopLight")

NAME.className="stopLightOn"

};

function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "green";
  

}

document.getElementById('goLight').onclick = function() {
    document.getElementById('goLight').style.backgroundColor = "red";
};

function illuminateGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}