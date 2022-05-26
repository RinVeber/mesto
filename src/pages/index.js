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
  validateOption,
  inputProfileName,
  inputProfileDescription,
  buttonEditProfile,
  buttonAddCard,
  cardElements,
  buttonEditAvatar
} from "../scripts/utils/constants";

const formProfileValid = new FormValidator(validateOption, ".popup__form_type-edit");
const formCardValid = new FormValidator(validateOption, ".popup__form_type_card");
const formAvatarValid = new FormValidator(validateOption, ".popup__form_type_avatar");

formProfileValid.enableValidation();
formCardValid.enableValidation();
formAvatarValid.enableValidation();

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-41",
  token: "229f91f0-a39c-41b3-9031-5892deafd93d"
});

const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();

const userInfo = new UserInfo(".profile__name", ".profile__description",".profile__avatar");

let myInfo;
Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([cardInfo, cardArr]) => {
    myInfo = cardInfo;
    userInfo.setUserInfo(cardInfo);
    cardList.renderItems(cardArr);
    console.log(cardInfo);
    console.log(cardArr);
  })
  .catch((error) => {
    console.log(error);
  });

const cardList = new Section(
  {
    renderer: (item) => {
      createCard(item);
      cardList.addItemAppend(createCard(item));
    },
  },
  cardElements
);

const createCard = (item) => {
  const card = new Card({
    card: item,
    myInfo: myInfo,
    selector: ".card_type_template",
    handleCardClick: (card) => popupImage.open(card),
    handleDelClick: (cardId) => {
      popupDeleteCard.setSubmitAction(() => {
        api.deleteCard(cardId)
          .then(() => {
            card.deleteCard();
            popupDeleteCard.close();
          })
          .catch(() => {
            console.log("Ошибка удаления");
          });
      });
      popupDeleteCard.open();
    },
    checkLike: () => {
      api.addLikeCard(card.getCurrentCard()._id)
        .then((itemCard) => {
          card.checkLike(itemCard);
        })
        .catch(() => console.log("Ошибка"));
    },
    checkDeleteLike: () => {
      api.removeLikeCard(card.getCurrentCard()._id)
        .then((itemCard) => {
          card.checkLike(itemCard);
        })
        .catch(() => console.log("Ошибка"));
    },
  });
  return card.generate();
};

const popupDeleteCard = new PopupDelete({
  popupSelector: ".popup_type_delete",
});
popupDeleteCard.setEventListeners();

const popupProfile = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  callbackFormSubmit: (data) => {
    popupProfile.isLoadingMessage(true);
    api.setProfile(data)
      .then((dataInfo) => {
        userInfo.setUserInfo(dataInfo);
        popupProfile.close();
      })
      .catch((err) => console.log(err))
      .finally(() => popupProfile.isLoadingMessage(false));
  },
});
popupProfile.setEventListeners();

const popupCard = new PopupWithForm({
  popupSelector: ".popup_type_card",
  callbackFormSubmit: (item) => {
    popupCard.isLoadingMessage(true);
    api.addNewCard(item)
      .then((itemCard) => {
        const newCard = createCard(itemCard);
        cardList.addItemPrepend(newCard);
        popupCard.close();
      })
      .catch((err) => console.log(err))
      .finally(() => popupCard.isLoadingMessage(false));
  },
});
popupCard.setEventListeners();

const popupAvatar = new PopupWithForm({
  popupSelector: ".popup_type_avatar",
  callbackFormSubmit: (data) => {
    popupAvatar.isLoadingMessage(true);
    api.editAvatar(data)
      .then((cardInfo) => {
        userInfo.setUserInfo(cardInfo);
        popupAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => popupAvatar.isLoadingMessage(false));
  },
});
popupAvatar.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  const getUserInfo = userInfo.getUserInfo();
  inputProfileName.value = getUserInfo.name;
  inputProfileDescription.value = getUserInfo.about;
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