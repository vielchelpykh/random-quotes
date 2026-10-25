import { handleFavorite } from "./favorites.js";
import { generateRandomInt } from "../utils.js";

function displayQuote(quote, btn) {
  const { text, author, isFavorite } = quote;

  const quoteElement = document.getElementById("quote");
  const quoteAuthorElement = document.getElementById("quote-author");

  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;

  handleFavorite(isFavorite);
}

function chooseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes);
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}

export { handleQuote };
