const editProfile = document.querySelector('.profile__edit');
const popupElement = document.querySelector('#popup-edit');
const closeButton = popupElement.querySelector('.popup__close-button');
const submitButton = popupElement.querySelector('.popup__submit-button');

function openPopupEdit() {
	popupElement.classList.add('popup_opened');
}

function closePopupEdit() {
	popupElement.classList.remove('popup_opened');
}

editProfile.addEventListener('click', openPopupEdit)
closeButton.addEventListener('click', closePopupEdit)

const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description');

let editElement = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('.popup__input_type_name');
let descriptionInput = popupElement.querySelector('.popup__input_type_description');

nameInput.value = userName.textContent;
descriptionInput.value = userDescription.textContent;

function formSubmitHandlerEdit(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	userName.textContent = nameInput.value;
	userDescription.textContent = descriptionInput.value;

	closePopupEdit();
}

editElement.addEventListener('submit', formSubmitHandlerEdit);
