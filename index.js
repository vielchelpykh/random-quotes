import quotes from "./src/quotes.js";
import {
  showFavoriteCard,
  hideFavoriteCard,
  togglefavoriteIcon,
} from "./src/favoritesHandlers.js";
import { generateRandomInt } from "./src/utils.js";

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

function generateRandomQuote() {
  const randomIndex = generateRandomInt(quotes.length);
  const { quote, author } = quotes[randomIndex];
  currentQuoteIndex = randomIndex;

  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;

  togglefavoriteIcon(quotes[randomIndex].isFavorite, toggleFavoriteBtn);

  toggleFavoriteBtn.style.display = "inline-block";
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;

  togglefavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.quote,
      currentQuote.author,
      favoritesContainer,
    );
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateBtn.addEventListener("click", generateRandomQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);
// Generate a random quote when the page loads
// generateRandomQuote();
