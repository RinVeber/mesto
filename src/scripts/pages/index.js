import '../../pages/index.css';

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  validateOption,
  inputProfileName,
  inputProfileDescription,
  buttonEditProfile,
  buttonAddCard,
  cardElements,
} from "../utils/utils.js";

const formProfileValid = new FormValidator(validateOption,".popup__form_type-edit");
const formCardValid = new FormValidator(validateOption, ".popup__form_type_card");

formProfileValid.enableValidation();
formCardValid.enableValidation();

const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardEl = new Card(item, ".card_type_template", () => {
        popupImage.open(item);
      }).generate();

      cardList.addItem(cardEl);
    },
  },
  cardElements);

cardList.renderItems();
const popupProfile = new PopupWithForm({
  popupSelector: ".popup_type_edit", callbackFormSubmit: (item) => {
    const userInfo = new UserInfo(item);
    userInfo.setUserInfo();
  },
});
popupProfile.setEventListeners();

const popupCard = new PopupWithForm({
  popupSelector: ".popup_type_card", callbackFormSubmit: (item) => {
    const cardEl = new Card(item, ".card_type_template", () => {
      popupImage.open(item);
    }).generate();

    cardList.addItem(cardEl);
  },
});
popupCard.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  const userInfo = new UserInfo({}).getUserInfo();
  inputProfileName.value = userInfo.name;
  inputProfileDescription.value = userInfo.description;

  popupProfile.open();

  formProfileValid.checkButtonStateOpenPopup();
});

buttonAddCard.addEventListener("click", () => {
  popupMesto.open();
  formCardValid.checkButtonStateOpenPopup();
});