const editProfile = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('#popup-edit');
const closeButton = popupEdit.querySelector('.popup__close-button');
const submitButton = popupEdit.querySelector('.popup__submit-button');

function openPopup(popup) {
	popup.classList.add('popup_opened');
	
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

editProfile.addEventListener('click', () => {openPopup(popupEdit)})
closeButton.addEventListener('click', () => {closePopup(popupEdit)})

const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description');

let editElement = popupEdit.querySelector('.popup__form');
let nameInput = popupEdit.querySelector('.popup__input_type_name');
let descriptionInput = popupEdit.querySelector('.popup__input_type_description');

nameInput.value = userName.textContent;
descriptionInput.value = userDescription.textContent;

function formSubmitHandlerEdit(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	userName.textContent = nameInput.value;
	userDescription.textContent = descriptionInput.value;

	closePopup(popupEdit);
}

editElement.addEventListener('submit', formSubmitHandlerEdit);
