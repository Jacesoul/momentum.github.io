const quotes = [
  {
    quote: "목표 없이 살아간다는 것은 나침반 없이 항해하는 것과 같다",
    author: "J.러스킨",
  },
  {
    quote: "희망을 가져본 적이 업는 자는 절망할 자격도 없다.",
    author: "버나드 쇼",
  },
  {
    quote: "우리가 쓰는 것 중 값비싼 것은 시간이다.",
    author: "테오프라스토스",
  },
  {
    quote: "자신을 믿는 ,순간 어떻게 살아갈지를 알게 된다.",
    author: "괴테",
  },
  {
    quote: "사람들이 모든일을 해내는 것은 할 수 있다고 생각하기 때문이다.",
    author: "비르길리우스",
  },
  {
    quote: "인내가 무력보다 더많은 것을 성취한다",
    author: "E. 버크",
  },
  {
    quote: "아무리 잘드는 칼날도 뭉툭한 숫돌로 만들어진다",
    author: "J 릴리",
  },
  {
    quote: "절약은 그자체가 큰 수입이다",
    author: "키케로",
  },
  {
    quote: "정직만큼 훌륭한 유산은 없다.",
    author: "셰익스피어",
  },
  {
    quote: "그대의 욕망이 끝이 없다면, 그대의 걱정과 두려움또한 그러할 것이다.",
    author: "T. 플러",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
