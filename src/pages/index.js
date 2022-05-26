import './index.css';

import FormValidator from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupDelete from "../scripts/components/PopupDelete.js";
import Api from "../scripts/components/Api.js";
import {
  initialCards,
  validateOption,
  inputProfileName,
  inputProfileDescription,
  buttonEditProfile,
  buttonAddCard,
  cardElements,
  profileNameSelector,
  profileDescriptionSelector,
  buttonEditAvatar
} from "../scripts/utils/constants";

const formProfileValid = new FormValidator(validateOption, ".popup__form_type-edit");
const formCardValid = new FormValidator(validateOption, ".popup__form_type_card");
const formAvatarValid = new FormValidator(validateOption, ".popup__form_type_avatar");

formProfileValid.enableValidation();
formCardValid.enableValidation();
formAvatarValid.enableValidation();

const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();

const api = new Api({
  url: "cohort-41",
  token: "229f91f0-a39c-41b3-9031-5892deafd93d"
})

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

const userInfo = new UserInfo(".profile__name", ".profile__description", ".profile__avatar");

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

const popupAvatar = new PopupWithForm({
  popupSelector: ".popup_type_avatar",
  callbackFormSubmit: (data) => {
    popupAvatar.setUserUX(true);

    api.editUserAvatar(data)
      .then((objectInfo) => {
        userInfo.setUserInfo(objectInfo);
        popupAvatar.close();
      })
      .catch((error) => console.log(error))
      .finally(() => popupAvatar.setUserUX(false));
  },
});
popupAvatar.setEventListeners();

const popupDelCard = new PopupDelete({
  popupSelector: ".popup_type_delete",
});
popupDelCard.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  const getInfo = userInfo.getUserInfo();
  inputProfileName.value = getInfo.name;
  inputProfileDescription.value = getInfo.about;


  popupProfile.open();
  formProfileValid.resetPopupForm();
});

buttonAddCard.addEventListener("click", () => {
  popupCard.open();
  formCardValid.resetPopupForm();
});

buttonEditAvatar.addEventListener("click", () => {
  popupAvatar.open();

  formAvatarValid.resetPopupForm();
});