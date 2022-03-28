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
	like.addEventListener('click',  function(evt) {
		evt.target.classList.toggle('element__heart_active')});
	
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

  const popupShow = document.querySelector('#popup-show');
  const popupImage = popupShow.querySelector('.popup__image');
  const popupText = popupShow.querySelector('.popup__image-subtitle');


const openPhoto = (name, link) => {
	popupText.textContent = name;
  	popupImage.src = link;
  	popupImage.alt = name;
  openPopupPhoto();
};

function openPopupPhoto() {
	popupShow.classList.add('popup_opened');
}
function closePopupPhoto() {
	popupShow.classList.remove('popup_opened');
}
popupShow.addEventListener('click', openPopupPhoto)
closeButtonAdd.addEventListener('click', closePopupPhoto)
