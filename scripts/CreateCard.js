const cardAdd = document.querySelector('.profile__add');
const addPopup = document.querySelector('#popup-add');
const formCard = addPopup.querySelector('.popup__form');
const inputPlaceName = addPopup.querySelector('.popup__input_type_placeName');
const inputPlaceLink = addPopup.querySelector('.popup__input_type_placeLink');

const closeButtonAdd = addPopup.querySelector('.popup__close-button');

const cardElements = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

function openPopupAdd() {
	addPopup.classList.add('popup_opened');
}
function closePopupAdd() {
	addPopup.classList.remove('popup_opened');
}
cardAdd.addEventListener('click', openPopupAdd)
closeButtonAdd.addEventListener('click', closePopupAdd)

function formSubmitHandlerAdd(evt) {
	evt.preventDefault();
	addCard();
	closePopupAdd();
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

	newCard.querySelector('.element__photo').src = card.link;
	newCard.querySelector('.element__photo').alt = card.name;

	const like = newCard.querySelector('.element__heart');
	like.addEventListener('click', function (evt) {
		evt.target.classList.toggle('element__heart_active')
	});

	const remove = newCard.querySelector('.element__delete');
	remove.addEventListener('click', deleteCard);

	const photo = newCard.querySelector('.element__photo');
	photo.addEventListener('click', () => openPhoto(card));

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

const openPhoto = (card) => {
	popupPhoto.classList.add('popup_opened');
	popupPhoto.querySelector('.popup__image').src = card.link;
	popupPhoto.querySelector('.popup__image-subtitle').textContent = card.name;
	
};

function openPopupPhoto() {
	popupPhoto.classList.add('popup_opened');
}
function closePopupPhoto() {
	popupPhoto.classList.remove('popup_opened');
}
popupPhoto.addEventListener('click', openPopupPhoto)

closeButtonPhoto.addEventListener('click', function(evt){
	evt.stopPropagation();
	closePopupPhoto();
})
