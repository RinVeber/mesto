import './index.css';

import FormValidator from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import {
  initialCards,
  validateOption,
  inputProfileName,
  inputProfileDescription,
  buttonEditProfile,
  buttonAddCard,
  cardElements,
  profileNameSelector,
  profileDescriptionSelector
} from "../scripts/utils/constants";

const formProfileValid = new FormValidator(validateOption, ".popup__form_type-edit");
const formCardValid = new FormValidator(validateOption, ".popup__form_type_card");

formProfileValid.enableValidation();
formCardValid.enableValidation();

const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();

const createCard = (item) => {
  const card = new Card(item, ".card_type_template", (data) => {
    popupImage.open(data);
  })
  return card.generate();
}


const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  cardElements);

const userInfo = new UserInfo(".profile__name", ".profile__description");

cardList.renderItems();
const popupProfile = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  callbackFormSubmit: (item) => {
    userInfo.setUserInfo(item);
  },
});
popupProfile.setEventListeners();

const popupCard = new PopupWithForm({
  popupSelector: ".popup_type_card",
  callbackFormSubmit: (item) => {
    cardList.addItem(createCard(item));
  },
});
popupCard.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  const getInfo = userInfo.getUserInfo();
  inputProfileName.value = getInfo.name;
  inputProfileDescription.value = getInfo.description;


  popupProfile.open();
  formProfileValid.resetPopupForm();
});

buttonAddCard.addEventListener("click", () => {
  popupCard.open();
  formCardValid.resetPopupForm();
});