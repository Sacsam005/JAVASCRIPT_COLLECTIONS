const clock = document.getElementById("clock");

function updateClock() {
  // get the current date
  let currentTime = new Date();

  // extract hour, mins, secs from the date
  let currentHour = currentTime.getHours();
  let currentMin = currentTime.getMinutes();
  let currentSec = currentTime.getSeconds();

  // pad 0 if mins or secs is less than 10 or single digit
  currentMin = (currentMin < 10 ? "0" : "") + currentMin;
  currentSec = (currentSec < 10 ? "0" : "") + currentSec;

  // convert railway clock to AM PM
  currentHour = currentHour == 00 ? 12 : currentHour;

  let timeOfDay = currentHour < 12 ? "AM" : "PM";
  currentHour = currentHour > 12 ? currentHour - 12 : currentHour;

  // prepare the time string from hour mins and secs
  let currentTimeStr = `${currentHour} : ${currentMin} : ${currentSec} ${timeOfDay}`;

  // get the time inside the clock invented (dom)
  clock.innerHTML = `<h3><b>${currentTimeStr}</b></h3>`;
}
