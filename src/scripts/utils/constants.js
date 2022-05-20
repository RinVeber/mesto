const sakura = new URL('../../image/card_1.jpg', import.meta.url);
const jinx = new URL('../../image/card_2.jpeg', import.meta.url);
const kosmos = new URL('../../image/card_3.jpg', import.meta.url);
const china = new URL('../../image/card_4.jpg', import.meta.url);
const whitefox = new URL('../../image/card_5.jpg', import.meta.url);
const zakat = new URL('../../image/card_6.jpg', import.meta.url);
const island = new URL('../../image/card_7.jpg', import.meta.url);
const kamchatka = new URL('../../image/card_8.jpg', import.meta.url);
export const initialCards = [
  {
    name: 'Девушка под Сакурой',
    link: sakura
  },
  {
    name: 'Остров',
    link: island
  },
  {
    name: 'Белый лис',
    link: whitefox
  },
  {
    name: 'Закат',
    link: zakat
  },
  {
    name: 'Камчатка',
    link: kamchatka
  },
  {
    name: 'Китай, Императоры Ян и Хуан',
    link: china
  },
  {
    name: 'Джинкс',
    link: jinx
  },
  {
    name: 'Черная дыра',
    link: kosmos
  }
  ]; 

export const validateOption = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__submit-button',
	inactiveButtonClass: 'popup__submit-button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible',
};

export const formCard = document
  .querySelector(".popup_type_card")
  .querySelector(".popup__form");

export const profileNameSelector = document.querySelector(".profile__name");
export const profileDescriptionSelector = document.querySelector(".profile__description");

export const inputProfileName = document
  .querySelector(".popup_type_edit")
  .querySelector(".popup__input_type_name");
export const inputProfileDescription = document
  .querySelector(".popup_type_edit")
  .querySelector(".popup__input_type_description");

export const buttonEditProfile= document.querySelector(".profile__edit");
export const buttonAddCard = document.querySelector(".profile__add");

export const cardElements = document.querySelector(".elements__list");
export const cardSelector =  document.querySelector(".card_type_template");
