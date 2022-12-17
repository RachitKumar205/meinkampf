var buttons = document.querySelectorAll('input[type="button"]');

function displayQuote() {
  document.getElementById("quote").innerHTML = "test string";
}

function btnMinecraft() {
  var sound = document.getElementById("btnAudioClick");
  sound.play();
}