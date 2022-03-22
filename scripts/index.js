const editProfile = document.querySelector('.profile__edit');
const popupElement= document.querySelector('.popup');
const closeButton = popupElement.querySelector('.popup__close-button');
const submitButton = popupElement.querySelector('.popup__submit-button');

function openPopup() {
	nameInput.value = userName.textContent;
	descriptionInput.value = userDescription.textContent;

	popupElement.classList.add('popup_opened');
}

function closePopup() {
	popupElement.classList.remove('popup_opened');
}

editProfile.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)

const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description'); 

let editElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let descriptionInput = document.querySelector('.popup__input_type_description');

function formSubmitHandler (evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    userName.textContent = nameInput.value;
	userDescription.textContent = descriptionInput.value;

	closePopup();
}

editElement.addEventListener('submit', formSubmitHandler); 

      