const profileEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('#popup-edit');
const buttonClose = popupEdit.querySelector('.popup__close-button');

function openPopup(popup) {
	popup.classList.add('popup_opened');
	popup.addEventListener('click', closePopupOverlay);
	document.addEventListener('keydown', handleEscPress);
}

function closePopup(popup) {
	document.removeEventListener('keydown', handleEscPress);
	popup.classList.remove('popup_opened');
}
buttonClose.addEventListener('click', () => { closePopup(popupEdit) })

const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description');

const editElement = popupEdit.querySelector('.popup__form');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const descriptionInput = popupEdit.querySelector('.popup__input_type_description');

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

function openPopupEdit() {
	nameInput.value = userName.textContent;
	descriptionInput.value = userDescription.textContent;
	openPopup(popupEdit);
}

function formSubmitHandlerEdit(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	checkInfoProfileEdit();
	closePopup(popupEdit);
}

profileEdit.addEventListener('click', openPopupEdit);
editElement.addEventListener('submit', formSubmitHandlerEdit);

const handleEscPress = (evt) => {
	if (evt.key === 'Escape') {
	  const popup = document.querySelector('.popup_opened');
	  resetCardAdd();
	  closePopup(popup);
	}}

const closePopupOverlay = (evt) => {
	if (evt.target !== evt.currentTarget) {
	  return;
	}
	const popup = document.querySelector('.popup_opened');
	resetCardAdd();
	closePopup(popup);
}

function resetCardAdd () {
	inputPlaceName.value = null;
	inputPlaceLink.value = null;
	closePopup(popupAdd);
}