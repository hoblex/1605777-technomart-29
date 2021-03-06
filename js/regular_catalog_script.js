//Обработка событий модального окна "Товар в корзине"

const buttonProductToBuy = document.querySelectorAll('.link-product-to-buy');
const displayModalGoodInCart = document.querySelector('.modal-good-in-cart');
const buttonCloseModalGoodInCart = document.querySelector('.close-modal-good-in-cart');


for (let i = 0; i <buttonProductToBuy.length; i++) {
  buttonProductToBuy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    displayModalGoodInCart.classList.add("modal-show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (displayModalGoodInCart.classList.contains("modal-show")) {
      evt.preventDefault();
      displayModalGoodInCart.classList.remove("modal-show");
    }
  }
});

buttonCloseModalGoodInCart.addEventListener("click", function (evt) {
  if (displayModalGoodInCart.classList.contains("modal-show")) {
    evt.preventDefault();
    displayModalGoodInCart.classList.remove("modal-show");
  }
});
