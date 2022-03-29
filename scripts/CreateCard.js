const cardAdd = document.querySelector('.profile__add');
const popupAdd = document.querySelector('#popup-add');
const formCard = popupAdd.querySelector('.popup__form');
const inputPlaceName = popupAdd.querySelector('.popup__input_type_placeName');
const inputPlaceLink = popupAdd.querySelector('.popup__input_type_placeLink');

const buttonCloseAdd = popupAdd.querySelector('.popup__close-button');

const cardElements = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

cardAdd.addEventListener('click', () => {openPopup(popupAdd)})
buttonCloseAdd.addEventListener('click', () => {closePopup(popupAdd)})

function formSubmitHandlerAdd(evt) {
	evt.preventDefault();
	addCard();
	closePopup(popupAdd);
}

formCard.addEventListener('submit', formSubmitHandlerAdd);

function addCard() {
	cardElements.prepend(createCard({
		name: inputPlaceName.value,
		link: inputPlaceLink.value,
	}))
}
function createCard(card) {
	const newCard = cardTemplate.querySelector('.card').cloneNode(true);

	newCard.querySelector('.element__title').textContent = card.name;

	const photo = newCard.querySelector('.element__photo');
	photo.alt = card.name;
	photo.src = card.link;
	photo.addEventListener('click', () => openPhoto(card));

	const like = newCard.querySelector('.element__heart');
	like.addEventListener('click', function (evt) {
		evt.target.classList.toggle('element__heart_active')
	});

	const remove = newCard.querySelector('.element__delete');
	remove.addEventListener('click', deleteCard);

	return newCard;
}
const deleteCard = (evt) => {
	const card = evt.target.closest('.card');
	card.remove();
};
const renderCards = (cards) => (
	cards.reverse().forEach((card) => cardElements.append(createCard(card)))
);
renderCards(initialCards);

const popupPhoto = document.querySelector('#popup-photo');
const closeButtonPhoto = popupPhoto.querySelector('.popup__close-button');
const photoShow = popupPhoto.querySelector('.popup__image');
const photoText = popupPhoto.querySelector('.popup__image-subtitle');

const openPhoto = (card) => {
	openPopup(popupPhoto);
	photoShow.src = card.link;
	photoText.textContent = card.name;
	
};

popupPhoto.addEventListener('click', () => {openPopup(popupPhoto)})

closeButtonPhoto.addEventListener('click', function(evt){
	evt.stopPropagation();
	closePopup(popupPhoto);
})
