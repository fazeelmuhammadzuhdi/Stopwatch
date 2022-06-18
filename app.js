let hours = 00;
let minutes = 00;
let seconds = 00;
let milliseconds = 00;
let interval;
const jam = document.getElementById("hours");
const menit = document.getElementById("minutes");
const detik = document.getElementById("seconds");
const ms = document.getElementById("milliseconds");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

const startTimer = () => {
  clearInterval(interval);
  interval = setInterval(startWatch, 10);
};

const stopTimer = () => {
  clearInterval(interval);
};

const resetTimer = () => {
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  ms.innerHTML = "00";
  detik.innerHTML = "00";
  jam.innerHTML = "00";
  menit.innerHTML = "00";
};

function startWatch() {
  milliseconds++;
  if (milliseconds < 9) {
    ms.innerHTML = `0${milliseconds}`;
  } else if (milliseconds > 99) {
    milliseconds = 0;
    ms.innerHTML = "00";
    seconds++;
  } else {
    ms.innerHTML = milliseconds;
  }
  if (seconds < 10) {
    detik.innerHTML = `0${seconds}`;
  } else if (seconds > 59) {
    seconds = 0;
    detik.innerHTML = "00";
    minutes++;
  } else {
    detik.innerHTML = seconds;
  }
  if (minutes < 10) {
    menit.innerHTML = `0${minutes}`;
  } else if (minutes > 59) {
    minutes = 0;
    menit.innerHTML = "00";
    hours++;
  } else {
    menit.innerHTML = minutes;
  }
  if (hours < 10) {
    jam.innerHTML = `${hours}`;
  } else {
    jam.innerHTML = hours;
  }
}
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
