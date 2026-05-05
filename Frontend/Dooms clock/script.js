function selector(selectorName) {
  return document.querySelector(selectorName);
}

const hoursTxt = selector(".hours");
const minutesTxt = selector(".minutes");
const secondsTxt = selector(".seconds");

const hourHand = selector(".hour-hand");
const minuteHand = selector(".minute-hand");
const secondHand = selector(".sec-hand");

function updateTime() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  hoursTxt.textContent = `${hour}`.padStart(2, "0");
  minutesTxt.textContent = `${minute}`.padStart(2, "0");
  secondsTxt.textContent = `${second}`.padStart(2, "0");

  const hourDeg = (360 / 12) * (hour % 12) - 90;
  const minDeg = (360 / 60) * minute - 90;
  const secDeg = (360 / 60) * second - 90;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  secondHand.style.transform = `rotate(${secDeg}deg)`;

}

setInterval(updateTime, 1000);
