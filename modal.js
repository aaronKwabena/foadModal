const modalBtn = document.getElementById("modal-btn");
const modalContainer = document.getElementById("modal-container");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalQuantity = document.getElementById("modal-quantity");
const modalCloseBtn = document.getElementById("modal-close-btn");

modalBtn.addEventListener("click", () => {
  // les details avec le nom de l'article et le prix
  modalTitle.textContent = "Pantalon";
  modalPrice.textContent = "€19.99";
  modalQuantity.value = 1;

  
  modalContainer.style.display = "block";
});

modalCloseBtn.addEventListener("click", () => {
  // cacher l'image
  modalContainer.style.display = "none";
});
