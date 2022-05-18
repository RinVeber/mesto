const sakura = new URL('../../image/card_1.jpg', import.meta.url);
const jinx = new URL('../../image/card_2.jpg', import.meta.url);
const kosmos = new URL('../../image/card_3.jpg', import.meta.url)

export const initialCards = [
  {
    name: 'Девушка под Сакурой',
    link: sakura
  },
  {
    name: 'Остров',
    link: 'https://images.unsplash.com/photo-1509280951623-4a17506e3eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    name: 'Белый лис',
    link: 'https://images.unsplash.com/photo-1484312152213-d713e8b7c053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Закат',
    link: 'https://cdn.pixabay.com/photo/2016/05/25/03/17/sunset-1413848_1280.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Улица в Чикаго',
    link: 'https://images.unsplash.com/photo-1515963665762-77ef90e624fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
  },
  {
    name: 'Китай, Императоры Ян и Хуан',
    link: 'https://images.unsplash.com/photo-1632367652130-a5ac609f4e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
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

export const profileName = document.querySelector(".profile__name");
export const profileDescription = document.querySelector(".profile__description");

export const inputProfileName = document
  .querySelector(".popup_type_edit")
  .querySelector(".popup__input_type_name");
export const inputProfileDescription = document
  .querySelector(".popup_type_edit")
  .querySelector(".popup__input_type_description");

export const buttonEditProfile= document.querySelector(".profile__edit");
export const buttonAddCard = document.querySelector(".profile__add");

export const cardElements = document.querySelector(".elements__list");
