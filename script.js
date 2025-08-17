function updateClock() {
  const hourHand = document.getElementById("hour");
  const minuteHand = document.getElementById("minute");
  const secondHand = document.getElementById("second");
  const digital = document.getElementById("digitalTime");

  const now = new Date();
  const milliseconds = now.getMilliseconds();
  const seconds = now.getSeconds() + milliseconds / 1000;
  const minutes = now.getMinutes() + seconds / 60;
  const hours = now.getHours() % 12 + minutes / 60;

  const secondDeg = (seconds / 60) * 360 - 90;
  const minuteDeg = (minutes / 60) * 360 - 90;
  const hourDeg   = (hours / 12) * 360 - 90;

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform   = `rotate(${hourDeg}deg)`;

  let hh = now.getHours().toString().padStart(2, "0");
  let mm = now.getMinutes().toString().padStart(2, "0");
  let ss = now.getSeconds().toString().padStart(2, "0");
  digital.textContent = `${hh}:${mm}:${ss}`;

  requestAnimationFrame(updateClock);
}

updateClock();
