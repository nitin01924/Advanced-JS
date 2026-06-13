let timeDisplay = document.querySelector(".time");
let set = document.querySelector(".settime");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;

set.addEventListener("click", function () {
  let input = prompt("Enter the time in HH:MM:SS ->");
  let parts = input.split(":");
  hours = parseInt(parts[0]);
  minutes = parseInt(parts[1]);
  seconds = parseInt(parts[2]);

  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");

  timeDisplay.textContent = `${h}:${m}:${s}`;
});

pause.addEventListener("click", function () {
  clearInterval(timer);
});

start.addEventListener("click", function () {
  if (timer !== null) clearInterval(timer);
  timer = setInterval(reducetimer, 1000);
});

function reducetimer() {
  if (hours == 0 && minutes == 0 && seconds == 0) {
    clearInterval(timer);
    alert("Time's up!");
    return;
  }

  if (seconds > 0) {
    seconds--;
  } else {
    seconds = 59;
    if (minutes > 0) {
      minutes--;
    } else {
      minutes = 59;
      if (hours > 0) {
        hours--;
      }
    }
  }

  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");

  timeDisplay.textContent = `${h}:${m}:${s}`;
}