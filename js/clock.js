const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const years = String(date.getFullYear());
  const months = String(date.getMonth()).padStart(2, 0);
  const days = String(date.getDay()).padStart(2, 0);
  const toadys = getTodayLabel();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${years}년 ${months}월 ${days}일 ${toadys}
  ${hours}:${minutes}:${seconds}`;
}

function getTodayLabel() {
  var week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );

  var today = new Date().getDay();
  var todayLabel = week[today];

  return todayLabel;
}

getClock();
setInterval(getClock, 1000);
