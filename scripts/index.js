const profileEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('#popup-edit');
const buttonClose = popupEdit.querySelector('.popup__close-button');

function openPopup(popup) {
	popup.classList.add('popup_opened');	
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

profileEdit.addEventListener('click', () => {openPopup(popupEdit)})
buttonClose.addEventListener('click', () => {closePopup(popupEdit)})

const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description');

const editElement = popupEdit.querySelector('.popup__form');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const descriptionInput = popupEdit.querySelector('.popup__input_type_description');

function formSubmitHandlerEdit(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	userName.textContent = nameInput.value;
	userDescription.textContent = descriptionInput.value;

	closePopup(popupEdit);
}

editElement.addEventListener('submit', formSubmitHandlerEdit);
