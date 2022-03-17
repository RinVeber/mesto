const editProfile = document.querySelector('.profile__edit');
const popupElement= document.querySelector('.popup');
const closeButton = popupElement.querySelector('.popup__close-button');
const submitButton = popupElement.querySelector('.popup__submit-button');

function openPopup() {
	popupElement.classList.remove('popup_closed');
}

function closePopup() {
	popupElement.classList.add('popup_closed');
}

editProfile.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)

const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description'); 

let editElement = document.querySelector('.popup__edit-profile');
let nameInput = document.querySelector('.popup__name');
let descriptionInput = document.querySelector('.popup__description');

nameInput.value = userName.textContent;
descriptionInput.value = userDescription.textContent;

function formSubmitHandler (evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    userName.textContent = nameInput.value;
	userDescription.textContent = descriptionInput.value;

	closePopup();
}

editElement.addEventListener('submit', formSubmitHandler);

let elementLikeList = document.querySelectorAll('.element__heart');

elementLikeList.forEach((elementLike, i, a) => {
    elementLike.addEventListener('click', () => {
        elementLike.classList.toggle('element__heart_active');
    })
}); 
    

      