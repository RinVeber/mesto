const cardAdd = document.querySelector('.profile__add');
const addPopup = document.querySelector('#popup-add');
const formCard = addPopup.querySelector('.popup__form');
const inputPlaceName = addPopup.querySelector('.popup__input_type_placeName');
const inputPlaceLink = addPopup.querySelector('.popup__input_type_placeLink');

const closeButtonAdd = addPopup.querySelector('.popup__close-button');

const cardElements = document.querySelector('.elements__list');
const card = document.querySelector('#card').content;

function openPopupAdd() {
	addPopup.classList.add('popup_opened');
}

function closePopupAdd() {
	addPopup.classList.remove('.popup_opened');
}

cardAdd.addEventListener('click', openPopupAdd)
closeButtonAdd.addEventListener('click', closePopupAdd)

function formSubmitHandlerAdd(evt) {
	evt.preventDefault();
	addCard();
	closePopupAdd();
};

formCard.addEventListener('submit', formSubmitHandlerAdd);

function createCard(name, link) {
	const newCard = card.querySelector('.element').cloneNode(true);

	const elementName = newCard.querySelector('.element__title');
	elementName.textContent = name;

	const elementImage = newCard.querySelector('.element__photo');
	elementImage.alt = name;
	elementImage.src = link;
	elementImage.addEventListener('click', function () {
		openShowPhotoPopup({ name, link });
	});
	return newCard;
}

function addCard() {
	cardElements.prepend(createCard({
		name = inputPlaceName.value,
		link = inputPlaceLink.value,
	}))
}

let elementLikeList = document.querySelectorAll('.element__heart');
elementLikeList.forEach((elementLike, i, a) => {
	elementLike.addEventListener('click', () => {
		elementLike.classList.toggle('element__heart_active');
	})
});


