import { currentQuote } from "../../index.js";

const favoritesContainer = document.getElementById("favorites-container");
const favoriteBtn = document.getElementById("favorite-btn");
favoriteBtn.addEventListener("click", () => toggleFavorite(currentQuote));

hideBtn(favoriteBtn);

function toggleFavorite(quote) {
  quote.isFavorite = !quote.isFavorite;
  const { text, author, isFavorite } = quote;

  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);

  if (isFavorite) {
    showFavoriteCard(text, author, favoritesContainer);
  } else {
    hideFavoriteCard(text);
  }
}

function showFavoriteCard(text, author, container) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `
  <p>${text}</p>
  <p class="author">${author}</p>
  `;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(text) {
  const favoriteCards = document.querySelectorAll(".favorite-card");
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(text)) {
      card.remove();
    }
  });
}

function showBtn(btn) {
  btn.style.display = "inline-block";
}

function hideBtn(btn) {
  btn.style.display = "none";
}

function toggleFavoriteBtnIcon(isFavorite, el) {
  el.classList.toggle("fa-regular", !isFavorite);
  el.classList.toggle("fa-solid", isFavorite);
}

function handleFavorite(isFavorite) {
  showBtn(favoriteBtn);

  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}

export { handleFavorite };
