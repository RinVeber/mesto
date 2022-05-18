
export const nameInput = popupEdit.querySelector('.popup__input_type_name');
export const descriptionInput = popupEdit.querySelector('.popup__input_type_description');


export const popupAddCard = document.querySelector('#popup-add');
export const buttonAddCard = document.querySelector('.profile__add')

export const formCardAdd = popupAddCard.querySelector('.popup__form');
export const inputPlaceName = popupAddCard.querySelector('.popup__input_type_placeName');
export const inputPlaceLink = popupAddCard.querySelector('.popup__input_type_placeLink');
export const buttonCloseAdd = popupAddCard.querySelector('.popup__close-button');


export const cardElements = document.querySelector('.elements__list');

export const popupPhotoShow = document.querySelector('#popup-photo');
export const buttonClosePhotoShow = popupPhotoShow.querySelector('.popup__close-button');

export const userName = document.querySelector('.profile__name');
export const userDescription = document.querySelector('.profile__description');

const sakura = new URL('../../image/card/card_1.jpg', import.meta.url);
const zakat = new URL('../../image/card/card_4.jpg', import.meta.url);
const kamchatka = new URL('../../image/card/card_5.jpg', import.meta.url);

export const initialCards = [
    {
      name: 'Девушка под Сакурой',
      link: sakura
    },

    {
      name: 'Закат',
      link: zakat
    },
    {
      name: 'Камчатка',
      link: kamchatka
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

