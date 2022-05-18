export default class Card {
  constructor(card, selector, handleCardClick) {
    this._name = card.name;
    this._link = card.link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
  }

  _getElement() {
    this._element = document
      .querySelector(this._selector)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._element.querySelector(".element__photo").addEventListener("click", () => {
        this._handleCardClick();
      });

    this._element.querySelector(".element__heart")
    .addEventListener("click", () => this._toggleLike());

    this._element.querySelector(".element__delete")
      .addEventListener("click", () => this._deleteCard());
  }
  _deleteCard() {
    this._element.remove();
    this._element = null;
  }
  
  _toggleLike() {
    this._element.querySelector('.element__heart')
    .classList.toggle('element__heart_active');
  }

  generate() {
    this._getElement();
    this._setEventListeners();
   
    const photo = this._element.querySelector('.element__photo');
    photo.alt = this._name;
    photo.src = this._link;

    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }
}
