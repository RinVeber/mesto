import initialCards from './initialCards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const cardAdd = document.querySelector('.profile__add');
const popupAdd = document.querySelector('#popup-add');
const formCardAdd = popupAdd.querySelector('.popup__form');
const inputPlaceName = popupAdd.querySelector('.popup__input_type_placeName');
const inputPlaceLink = popupAdd.querySelector('.popup__input_type_placeLink');
const buttonCloseAdd = popupAdd.querySelector('.popup__close-button');

const profileEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('#popup-edit');
const buttonClose = popupEdit.querySelector('.popup__close-button');
const buttonEdit = popupEdit.querySelector('.profile__edit')
const buttonAddCard = document.querySelector('.profile__add')

const cardElements = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description');

const editElement = popupEdit.querySelector('.popup__form');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const descriptionInput = popupEdit.querySelector('.popup__input_type_description');


 const validateOption = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__submit-button',
	inactiveButtonClass: 'popup__submit-button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible',
  };

  
  const validationPopupEdit = new FormValidator(validateOption, popupEdit);
  const validationPopupAdd = new FormValidator(validateOption, formCardAdd);
  
  validationPopupEdit.enableValidation();
  validationPopupAdd.enableValidation();

  const generateCard = (card) => new Card(card, '#card-template').generate();

  const renderCards = (cards) => (
	cards.reverse().forEach((card) => cardElements.append(generateCard(card)))
  );

  const addCard = () => {
	const newCard = generateCard({
	  name: inputPlaceName.value,
	  link: inputPlaceLink.value,
	}, '#card-template');
  
	cardElements.prepend(newCard);
  };


function openPopup(popup) {
	popup.classList.add('popup_opened');
	popup.addEventListener('click', closePopupOverlay);
	document.addEventListener('keydown', handleEscPress);
}

function closePopup(popup) {
	document.removeEventListener('keydown', handleEscPress);
	popup.classList.remove('popup_opened');
}

function resetCardAdd() {
	inputPlaceName.value = "";
	inputPlaceLink.value = "";
	closePopup(popupAdd);
}

function checkInfoProfileEdit() {
	const name = nameInput.value;
	const description = descriptionInput.value;

	if (name !== userName.textContent) {
		userName.textContent = name;
	}
	if (description !== userDescription.textContent) {
		userDescription.textContent = description;
	}
};

  const submitFormHandlerAdd = (evt) => {
	evt.preventDefault();
	addCard();
	closePopup(popupAdd);
  };

function openPopupEdit() {
	nameInput.value = userName.textContent;
	descriptionInput.value = userDescription.textContent;
	validationPopupEdit.resetPopupForm();
	openPopup(popupEdit);
}

const openAddPhotoPopup = () => {
	formCardAdd.reset();
	validationPopupAdd.resetPopupForm();
	openPopup(popupAdd);
  };
  

function submitFormHandlerEdit(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	checkInfoProfileEdit();
	closePopup(popupEdit);
}

const handleEscPress = (evt) => {
	if (evt.key === 'Escape') {
		const popup = document.querySelector('.popup_opened');
		resetCardAdd();
		closePopup(popup);
	}
}

const closePopupOverlay = (evt) => {
	if (evt.target !== evt.currentTarget) {
		return;
	}
	const popup = document.querySelector('.popup_opened');
	resetCardAdd();
	closePopup(popup);
}

buttonAddCard.addEventListener('click', openAddPhotoPopup);
profileEdit.addEventListener('click', openPopupEdit);

buttonClose.addEventListener('click', () => { closePopup(popupEdit) });
buttonCloseAdd.addEventListener('click',() => { closePopup(popupAdd) });

editElement.addEventListener('submit', submitFormHandlerEdit);
formCardAdd.addEventListener('submit', submitFormHandlerAdd);

renderCards(initialCards);

export { openPopup, closePopup, handleEscPress };