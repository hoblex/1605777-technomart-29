
//Обработка событий слайдера
const buttonSliderNext = document.querySelector('.change-slide-next');
const buttonSliderPrev = document.querySelector('.change-slide-prev');

const radioSliderNext = document.querySelector('.change-slide-radio-next');
const radioSliderPrev = document.querySelector('.change-slide-radio-prev');

const bigSliderButtons = document.querySelectorAll('.content-container-slider-item');
const radioButtons = document.querySelectorAll('.change-slide-radio');

radioSliderNext.onclick = buttonSliderNext.onclick = function () {
  for (let i = 0; i < bigSliderButtons.length; i++ ) {
    bigSliderButtons[i].classList.toggle('current-slide');
    radioButtons[i].classList.toggle('current-slide');
  }
};

radioSliderPrev.onclick = buttonSliderPrev.onclick = function () {
  for (let i = 0; i < bigSliderButtons.length; i++ ) {
    bigSliderButtons[i].classList.toggle('current-slide');
    radioButtons[i].classList.toggle('current-slide');
  }
};


//Обработка событий переключателя описания сервисов
const buttonShowDeliveryDescription =document.querySelector('.button-delivery');
const buttonShowGuaranteeDescription =document.querySelector('.button-guarantee');
const buttonShowCreditDescription =document.querySelector('.button-credit');

const listOptionServices = document.querySelectorAll('.services-option-item');
const listDescriptionServices = document.querySelectorAll('.services-description-item');

buttonShowDeliveryDescription.onclick = function () {
  if (!listOptionServices[0].classList.contains('activated-current-service')) {
    listOptionServices[0].classList.add('activated-current-service');
    listDescriptionServices[0].classList.add('activated-current-service')
  }
  listOptionServices[1].classList.remove('activated-current-service');
  listOptionServices[2].classList.remove('activated-current-service');
  listDescriptionServices[1].classList.remove('activated-current-service')
  listDescriptionServices[2].classList.remove('activated-current-service')
}

buttonShowGuaranteeDescription.onclick = function () {
  if (!listOptionServices[1].classList.contains('activated-current-service')) {
    listOptionServices[1].classList.add('activated-current-service');
    listDescriptionServices[1].classList.add('activated-current-service')
  }
  listOptionServices[0].classList.remove('activated-current-service');
  listOptionServices[2].classList.remove('activated-current-service');
  listDescriptionServices[0].classList.remove('activated-current-service')
  listDescriptionServices[2].classList.remove('activated-current-service')
}


buttonShowCreditDescription.onclick = function () {
  if (!listOptionServices[2].classList.contains('activated-current-service')) {
    listOptionServices[2].classList.add('activated-current-service');
    listDescriptionServices[2].classList.add('activated-current-service')
  }
  listOptionServices[0].classList.remove('activated-current-service');
  listOptionServices[1].classList.remove('activated-current-service');
  listDescriptionServices[0].classList.remove('activated-current-service')
  listDescriptionServices[1].classList.remove('activated-current-service')
}

//Обработка событий модального окна "Карты"

const buttonOpenMap = document.querySelector('.common-information-map-pickup');
const displayModalOpenMap = document.querySelector('.modal-map');
const buttonCloseMap = document.querySelector('.close-modal-map');


buttonOpenMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  displayModalOpenMap.classList.add("modal-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (displayModalOpenMap.classList.contains("modal-show")) {
      evt.preventDefault();
      displayModalOpenMap.classList.remove("modal-show");
    }
  }
});

buttonCloseMap.addEventListener("click", function (evt) {
  if (displayModalOpenMap.classList.contains("modal-show")) {
    evt.preventDefault();
    displayModalOpenMap.classList.remove("modal-show");
  }
});


//Обработка событий модального окна обратной связи

const buttonContactUs = document.querySelector('.button-contact-us');
const displayModalFeedback = document.querySelector('.modal-feedback');
const buttonCloseFeedback = document.querySelector('.close-modal-feedback');


buttonContactUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  displayModalFeedback.classList.add("modal-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (displayModalFeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      displayModalFeedback.classList.remove("modal-show");
    }
  }
});

buttonCloseFeedback.addEventListener("click", function (evt) {
  if (displayModalFeedback.classList.contains("modal-show")) {
    evt.preventDefault();
    displayModalFeedback.classList.remove("modal-show");
  }
});


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
