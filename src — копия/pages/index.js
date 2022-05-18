import './index.css';
import {
  initialCards,
  validateOption,
  nameInput,
  descriptionInput,
  profileButtonEdit,
  buttonAddCard,
  cardElements,
} from "../script/utils/utils.js";
import FormValidator from "../script/components/FormValidator.js";
import Section from "../script/components/Section.js";
import Card from "../script/components/Card.js";
import PopupWithImage from "../script/components/PopupWithImage.js";
import PopupWithForm from "../script/components/PopupWithForm.js";
import UserInfo from "../script/components/UserInfo.js";

// Активация валидации форм
const formProfileValidator = new FormValidator(
  validateOption,
  ".popup__form_type-edit"
);
formProfileValidator.enableValidation();

const formCardValidator = new FormValidator(
  validateOption,
  ".popup__form_type-card"
);
formCardValidator.enableValidation();

// Функция создания карточки
const createCardEl = (item) => {
  return new Card(item, ".template_type_default", (data) => {
    popupImage.open(data);
  }).generateCard();
}

// Инициализация попапа Изображение
const popupImage = new PopupWithImage(".popup_type_image");

// Добавление карточек на страницу из массива
const cardList = new Section(
  {
    itemsArr: initialCards,
    renderer: (item) => {
      createCardEl(item);
      cardList.addItem(createCardEl(item));
    },
  },
  cardElements
);
cardList.renderItems();
popupImage.setEventListeners();

// Инициализация класса по добалению данных пользователя
const userInfo = new UserInfo();

// Инициализация попапа Профиль
const popupProfile = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    popupProfile.close();
  },
});
popupProfile.setEventListeners();

// инициализация попапа "Место"
const popupMesto = new PopupWithForm({
  popupSelector: ".popup_type_card",
  handleFormSubmit: (item) => {
    createCardEl(item);
    popupMesto.close();
    cardList.addItem(createCardEl(item));
  },
});
popupMesto.setEventListeners();

// слушатель для попапа Профиль
profileButtonEdit.addEventListener("click", () => {
  const getUserInfo = userInfo.getUserInfo();
  nameInput.value = getUserInfo.name;
  descriptionInput.value = getUserInfo.description;

  popupProfile.open();

  formProfileValidator.checkButtonStateOpenPopup();
});

// слушатель для попапа "Место"
buttonAddCard.addEventListener("click", () => {
  popupMesto.open();

  formCardValidator.checkButtonStateOpenPopup();
});