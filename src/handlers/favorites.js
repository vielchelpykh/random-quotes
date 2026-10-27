import { quoteFavoriteBtn } from "../../index.js";
import { removeFavoriteQuote } from "../../index.js";

function toggleFavoriteCard(quote, container) {
  quote.isFavorite ? showFavoriteCard(quote, container) : removeFavoriteCard(quote.id);
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.dataset.favoriteQuoteId = id;
  favoriteCard.innerHTML = `
  <div class="favorite-card-content">
    <p>${text}</p>
    <p class="favorite-card-author">${author}</p>
  </div>
  <button class="btn btn-danger">Remove from favorites<i class="far fa-trash-alt"></i></button>
  `;
  container.appendChild(favoriteCard);

  const removeButton = favoriteCard.querySelector(".btn-danger");
  removeButton.addEventListener("click", () => removeFavoriteQuote(id));
}

function removeFavoriteCard(id) {
  const card = document.querySelector(`[data-favorite-quote-id="${id}"]`);
  card && card.remove();
}

function showFavoriteBtn(isFavorite) {
  const btn = quoteFavoriteBtn;
  if (btn.style.display === "none") quoteFavoriteBtn.style.display = "inline-block";

  btn.classList.toggle("fa-solid", isFavorite);
  btn.classList.toggle("fa-regular", !isFavorite);
}

function hideFavoriteBtn() {
  quoteFavoriteBtn.style.display = "none";
}


export { 
  toggleFavoriteCard,
  hideFavoriteBtn, 
  showFavoriteCard, 
  showFavoriteBtn, 
  removeFavoriteCard,
};
