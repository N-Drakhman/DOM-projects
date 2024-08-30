// Variables
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#newquote");

let quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  { quote: "So many books, so little time", author: "Frank Zappa" },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    author: "Albert Einstein",
  },
  {
    quote: `Be the change that you wish to see in the world`,
    author: "Mahatma Gandi",
  },
];

let haveIt = [];

function pasteQuote() {
  let rand = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[rand].quote;
  author.innerText = quotes[rand].author;

  //   if (!haveIt.includes(rand)) {
  //     haveIt.push(rand);
  //     return rand;
  //   } else {

  //     if (haveIt.length < quotes.length) {
  //       return pasteQuote();
  //     } else {
  //       console.log("restart");
  //     //   haveIt = [];
  //       return false;
  //     }
  //   }
}

btn.addEventListener("click", pasteQuote);
