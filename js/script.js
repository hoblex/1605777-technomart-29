const buttonSliderNext=document.querySelector(".change-slide-next"),buttonSliderPrev=document.querySelector(".change-slide-prev"),radioSliderNext=document.querySelector(".change-slide-radio-next"),radioSliderPrev=document.querySelector(".change-slide-radio-prev"),bigSliderButtons=document.querySelectorAll(".content-container-slider-item"),radioButtons=document.querySelectorAll(".change-slide-radio");radioSliderNext.onclick=buttonSliderNext.onclick=function(){for(let e=0;e<bigSliderButtons.length;e++)bigSliderButtons[e].classList.toggle("current-slide"),radioButtons[e].classList.toggle("current-slide")},radioSliderPrev.onclick=buttonSliderPrev.onclick=function(){for(let e=0;e<bigSliderButtons.length;e++)bigSliderButtons[e].classList.toggle("current-slide"),radioButtons[e].classList.toggle("current-slide")};const buttonShowDeliveryDescription=document.querySelector(".button-delivery"),buttonShowGuaranteeDescription=document.querySelector(".button-guarantee"),buttonShowCreditDescription=document.querySelector(".button-credit"),listOptionServices=document.querySelectorAll(".services-option-item"),listDescriptionServices=document.querySelectorAll(".services-description-item");buttonShowDeliveryDescription.onclick=function(){listOptionServices[0].classList.contains("activated-current-service")||(listOptionServices[0].classList.add("activated-current-service"),listDescriptionServices[0].classList.add("activated-current-service")),listOptionServices[1].classList.remove("activated-current-service"),listOptionServices[2].classList.remove("activated-current-service"),listDescriptionServices[1].classList.remove("activated-current-service"),listDescriptionServices[2].classList.remove("activated-current-service")},buttonShowGuaranteeDescription.onclick=function(){listOptionServices[1].classList.contains("activated-current-service")||(listOptionServices[1].classList.add("activated-current-service"),listDescriptionServices[1].classList.add("activated-current-service")),listOptionServices[0].classList.remove("activated-current-service"),listOptionServices[2].classList.remove("activated-current-service"),listDescriptionServices[0].classList.remove("activated-current-service"),listDescriptionServices[2].classList.remove("activated-current-service")},buttonShowCreditDescription.onclick=function(){listOptionServices[2].classList.contains("activated-current-service")||(listOptionServices[2].classList.add("activated-current-service"),listDescriptionServices[2].classList.add("activated-current-service")),listOptionServices[0].classList.remove("activated-current-service"),listOptionServices[1].classList.remove("activated-current-service"),listDescriptionServices[0].classList.remove("activated-current-service"),listDescriptionServices[1].classList.remove("activated-current-service")};const buttonOpenMap=document.querySelector(".common-information-map-pickup"),displayModalOpenMap=document.querySelector(".modal-map"),buttonCloseMap=document.querySelector(".close-modal-map");buttonOpenMap.addEventListener("click",function(e){e.preventDefault(),displayModalOpenMap.classList.add("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&displayModalOpenMap.classList.contains("modal-show")&&(e.preventDefault(),displayModalOpenMap.classList.remove("modal-show"))}),buttonCloseMap.addEventListener("click",function(e){displayModalOpenMap.classList.contains("modal-show")&&(e.preventDefault(),displayModalOpenMap.classList.remove("modal-show"))});const buttonContactUs=document.querySelector(".button-contact-us"),displayModalFeedback=document.querySelector(".modal-feedback"),buttonCloseFeedback=document.querySelector(".close-modal-feedback");buttonContactUs.addEventListener("click",function(e){e.preventDefault(),displayModalFeedback.classList.add("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&displayModalFeedback.classList.contains("modal-show")&&(e.preventDefault(),displayModalFeedback.classList.remove("modal-show"))}),buttonCloseFeedback.addEventListener("click",function(e){displayModalFeedback.classList.contains("modal-show")&&(e.preventDefault(),displayModalFeedback.classList.remove("modal-show"))});const buttonProductToBuy=document.querySelectorAll(".link-product-to-buy"),displayModalGoodInCart=document.querySelector(".modal-good-in-cart"),buttonCloseModalGoodInCart=document.querySelector(".close-modal-good-in-cart");for(let e=0;e<buttonProductToBuy.length;e++)buttonProductToBuy[e].addEventListener("click",function(e){e.preventDefault(),displayModalGoodInCart.classList.add("modal-show")});window.addEventListener("keydown",function(e){27===e.keyCode&&displayModalGoodInCart.classList.contains("modal-show")&&(e.preventDefault(),displayModalGoodInCart.classList.remove("modal-show"))}),buttonCloseModalGoodInCart.addEventListener("click",function(e){displayModalGoodInCart.classList.contains("modal-show")&&(e.preventDefault(),displayModalGoodInCart.classList.remove("modal-show"))});
