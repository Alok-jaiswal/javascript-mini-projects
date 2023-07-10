function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondElement = document.getElementById("second");

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondElement.textContent = seconds;
}

setInterval(updateClock, 1000);
