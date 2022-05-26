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
export const profileAvatarSelector = document.querySelector(".profile__avatar");

export const inputProfileName = document
  .querySelector(".popup_type_edit")
  .querySelector(".popup__input_type_name");
export const inputProfileDescription = document
  .querySelector(".popup_type_edit")
  .querySelector(".popup__input_type_about");

export const buttonEditProfile= document.querySelector(".profile__edit");
export const buttonAddCard = document.querySelector(".profile__add");
export const buttonEditAvatar = document.querySelector(".profile__avatar-overlay");

export const cardElements = document.querySelector(".elements__list");
export const cardSelector =  document.querySelector(".card_type_template");
