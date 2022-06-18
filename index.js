document.querySelector(".btn-time").addEventListener("click", showCurrentTime);

function showCurrentTime() {
  document.querySelector(".time-text").innerHTML = Date();
}
