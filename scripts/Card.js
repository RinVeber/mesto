import { openPopup } from './indexx.js';

export default class Card {
  _popupPhoto = document.querySelector('#popup-photo');
  _buttonClosePhoto = this._popupPhoto.querySelector('.popup__close-button');
  _photoShow = this._popupPhoto.querySelector('.popup__image');
  _photoText = this._popupPhoto.querySelector('.popup__image-subtitle');

  constructor(data, selector) {
    this._data = data;
    this._selector = selector;
    this._toggleLike = this._toggleLike.bind(this);
    this._deleteCard = this._deleteCard.bind(this);
  }

  _getElement() {
    this._element = document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  _resetShowPhotoPopup() {
    this._photoShow.src = '';
    this._photoShow.alt = '';
    this._photoText.textContent = '';
  }

  _openShowPhotoPopup({ name, link }) {
    this._resetShowPhotoPopup();
    this._photoShow.src = link;
    this._photoShow.alt = name;
    this._photoText.textContent = name;

    openPopup(this._popupPhoto);
  }

  _toggleLike() {
    this._element.querySelector('.element__heart').classList.toggle('element__heart_active');
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    const image = this._element.querySelector('.element__photo');
    image.addEventListener('click', () => this._openShowPhotoPopup(this._data));

    const like = this._element.querySelector('.element__heart');
    like.addEventListener('click', this._toggleLike);

    const trash = this._element.querySelector('.element__delete');
    trash.addEventListener('click', this._deleteCard);
  }

  generate() {
    this._getElement();
    this._setEventListeners();

    const photo = this._element.querySelector('.element__photo');
    photo.alt = this._data.name;
    photo.src = this._data.link;

    this._element.querySelector('.element__title').textContent = this._data.name;

    return this._element;
  }
}