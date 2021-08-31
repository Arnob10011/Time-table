// program to display time every 3 seconds
function showTime() {
  // return new date and time
  let dateTime = new Date();

  // returns the current local time

  const hour = dateTime.getHours();
  const min = dateTime.getMinutes();
  const sec = dateTime.getSeconds();

  const hourEl = document.querySelector(".hour");
  const minEl = document.querySelector(".min");
  const secEl = document.querySelector(".sec");

  hourEl.textContent = `${hour}   :`;
  minEl.textContent = `${min}   :`;
  secEl.textContent = sec;

  setTimeout(showTime, 1000);
}

showTime();
