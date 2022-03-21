const editProfile = document.querySelector('.profile__edit');
const popupElement= document.querySelector('.popup');
const closeButton = popupElement.querySelector('.popup__close-button');
const submitButton = popupElement.querySelector('.popup__submit-button');

function openPopup() {
	nameInput.value = userName.textContent;
	descriptionInput.value = userDescription.textContent;

	popupElement.classList.remove('popup_opened');
}

function closePopup() {
	nameInput.value = null;
	descriptionInput.value = null;

	popupElement.classList.add('popup_opened');
}

editProfile.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)
submitButton.addEventListener('click', formSubmitHandler)

const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description'); 

let editElement = document.querySelector('.popup__edit-profile');
let nameInput = document.querySelector('.popup__name_input');
let descriptionInput = document.querySelector('.popup_description_input');

function formSubmitHandler (evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    userName.textContent = nameInput.value;
	userDescription.textContent = descriptionInput.value;

	closePopup();

	
}


      