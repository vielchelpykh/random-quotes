import { currentQuote } from "./quote.js";

const favoritesContainer = document.getElementById("favorites-container");
const toggleBtn = document.getElementById("toggle-favorite-btn");
toggleBtn.addEventListener("click", toggleFavorite);
hideBtn(toggleBtn);

function toggleFavorite() {
  currentQuote.isFavorite = !currentQuote.isFavorite;

  toggleFavoriteIcon(currentQuote.isFavorite, toggleBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.text,
      currentQuote.author,
      favoritesContainer,
    );
  } else {
    hideFavoriteCard(currentQuote.text);
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

function toggleFavoriteIcon(isFavorite, el) {
  el.classList.toggle("fa-regular", !isFavorite);
  el.classList.toggle("fa-solid", isFavorite);
}

function handleFavorite(isFavorite) {
  showBtn(toggleBtn);

  toggleFavoriteIcon(isFavorite, toggleBtn);
}

export { handleFavorite };
