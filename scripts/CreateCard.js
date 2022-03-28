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
function createCard(name, link) {
	const newCard = cardTemplate.querySelector('.card').content.firstElementChild.cloneNode(true);

	const elementName = newCard.querySelector('.element__title');
	elementName.textContent = name;

	const elementPhoto = newCard.querySelector('.element__photo');
	elementPhoto.querySelector('.element__title').textContent = name;
	elementPhoto.querySelector('.element__photo').src = link;
  
	const like = newCard.querySelector('.element__heart');
	like.addEventListener('click',  function(evt) {
		evt.target.classList.toggle('element__heart_active')});

	return newCard;
}

function openPhoto (evt) {
	photoFull.src = evt.target.src;
	photoCaption.textContent = evt.target.alt;
	openPopup(popupPhoto);
}

const renderCards = (cards) => (
	cards.reverse().forEach((card) => cardElements.append(createCard(card)))
  );
  renderCards(initialCards);
let elementLikeList = document.querySelectorAll('.element__heart');
elementLikeList.forEach((elementLike, i, a) => {
	elementLike.addEventListener('click', () => {
		elementLike.classList.toggle('element__heart_active');
	})
});