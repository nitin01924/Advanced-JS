const clock = document.querySelector(".clock");

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");
  let ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24h → 12h
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 ko 12 bana do
  hours = String(hours).padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);