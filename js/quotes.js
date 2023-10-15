const quotes = [
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다. ",
    author: "- 괴테",
  },
  {
    quote: "내일이란 오늘의 다른 이름일 뿐이다. ",
    author: "- 윌리엄 포크너",
  },
  {
    quote: "건강에 대한 지나친 걱정만큼 건강에 치명적인 것은 없다. ",
    author: "- 벤자민 프랭클린",
  },
  {
    quote: "오늘이란 신어야 할 신발과 같은 것이다. ",
    author: "- 스티브 올렌",
  },
  {
    quote: " 계획이란 미래에 대한 현재의 결정이다. ",
    author: "- 드래커",
  },
  {
    quote: "시간을 선택하는 것은 시간을 절약하는 것이다. ",
    author: "- 베이컨",
  },
  {
    quote: "시간 엄수는 군주의 예절이다. ",
    author: "- 루이 18세",
  },
  {
    quote: "시간에의 충실, 그것이 행복이다. ",
    author: "- 에머슨",
  },
  {
    quote: " 시간을 얻는 사람은 만사를 얻는다. ",
    author: "- 디즈레일리",
  },
  {
    quote: "시간의 날개를 타고 슬픔은 날아가 버린다. ",
    author: "- 라 퐁테느",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;
