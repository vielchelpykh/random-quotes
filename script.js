import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author: qouteAuthor } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = qouteAuthor;
}

generateBtn.addEventListener("click", generateRandomQuote);

// Generate a random quote when the page loads
generateRandomQuote();
