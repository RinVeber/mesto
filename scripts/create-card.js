const cardAdd = document.querySelector('.profile__add');
const popupAdd = document.querySelector('#popup-add');
const formCardAdd = popupAdd.querySelector('.popup__form');
const inputPlaceName = popupAdd.querySelector('.popup__input_type_placeName');
const inputPlaceLink = popupAdd.querySelector('.popup__input_type_placeLink');
const buttonCloseAdd = popupAdd.querySelector('.popup__close-button');

const buttonSubmit = document.querySelector('.popup__submit-button');
const cardElements = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

const popupPhoto = document.querySelector('#popup-photo');
const buttonClosePhoto = popupPhoto.querySelector('.popup__close-button');
const photoShow = popupPhoto.querySelector('.popup__image');
const photoText = popupPhoto.querySelector('.popup__image-subtitle');

function handleSubmitAddForm(evt) {
	evt.preventDefault();
	addCard();
	DisableButtonSubmit(popupAdd);
	closePopup(popupAdd);
	inputPlaceName.value = "";
	inputPlaceLink.value = "";
}

function addCard() {
	cardElements.prepend(createCard({
		name: inputPlaceName.value,
		link: inputPlaceLink.value,
	}))
}

function createCard(card) {
	const newCard = cardTemplate.querySelector('.element').cloneNode(true);
	newCard.querySelector('.element__title').textContent = card.name;

	const photo = newCard.querySelector('.element__photo');
	photo.alt = card.name;
	photo.src = card.link;
	photo.addEventListener('click', () => openPhoto(card));

	const like = newCard.querySelector('.element__heart');
	like.addEventListener('click', function (evt) {
		evt.target.classList.toggle('element__heart_active')
	});

	const trash = newCard.querySelector('.element__delete');
	trash.addEventListener('click', deleteCard);

	return newCard;
}

const deleteCard = (evt) => {
	const card = evt.target.closest('.element');
	card.remove();
};
const renderCards = (cards) => (
	cards.reverse().forEach((card) => cardElements.append(createCard(card)))
);

renderCards(initialCards);

const openPhoto = (card) => {
	openPopup(popupPhoto);
	photoShow.src = card.link;
	photoShow.alt = card.name;
	photoText.textContent = card.name;
};

function disableButtonSubmit(popup) {
	buttonSubmit.classList.add('popup__submit-button_disabled');
	buttonSubmit.disabled = true;
	closePopup(popup);
}

cardAdd.addEventListener('click', () => { openPopup(popupAdd) });
buttonCloseAdd.addEventListener('click', () => { resetCardAdd(popupAdd) });
popupPhoto.addEventListener('click', () => { openPopup(popupPhoto) });
buttonClosePhoto.addEventListener('click', function (evt) {
	evt.stopPropagation();
	closePopup(popupPhoto);
});

formCardAdd.addEventListener('submit', handleSubmitAddForm);