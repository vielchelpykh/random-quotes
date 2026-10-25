import { favoriteBtn } from "../../index.js";

function toggleFavorite({ quote, btn, container }) {
  quote.isFavorite = !quote.isFavorite;

  toggleFavoriteBtnIcon(quote.isFavorite, btn);

  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    hideFavoriteCard(quote.id);
  }
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.dataset.quoteId = id;
  favoriteCard.innerHTML = `
  <p>${text}</p>
  <p class="author">${author}</p>
  `;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
  card && card.remove();
}

function showFavoriteBtn() {
  favoriteBtn.style.display = "inline-block";
}

function hideFavoriteBtn() {
  favoriteBtn.style.display = "none";
}

function toggleFavoriteBtnIcon(isFavorite, el) {
  el.classList.toggle("fa-regular", !isFavorite);
  el.classList.toggle("fa-solid", isFavorite);
}

function handleFavorite(isFavorite) {
  showFavoriteBtn(favoriteBtn);

  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}

export { handleFavorite, toggleFavorite, hideFavoriteBtn };
