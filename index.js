import quotes from "./src/data/quotes.js";
import { handleQuote } from "./src/handlers/quote.js";
import { toggleFavorite, hideFavoriteBtn } from "./src/handlers/favorites.js";

let currentQuote = null;

const favoritesContainer = document.getElementById("favorites-container");
const favoriteBtn = document.getElementById("favorite-btn");
hideFavoriteBtn(favoriteBtn);
favoriteBtn.addEventListener("click", () =>
  toggleFavorite({
    quote: currentQuote,
    btn: favoriteBtn,
    container: favoritesContainer,
  }),
);

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () =>
  handleQuote(quotes, setCurrentQuote),
);

export { favoriteBtn };
