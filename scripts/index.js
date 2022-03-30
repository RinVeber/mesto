const profileEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('#popup-edit');
const buttonClose = popupEdit.querySelector('.popup__close-button');

function openPopup(popup) {
	popup.classList.add('popup_opened');
}

function closePopup(popup) {
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
