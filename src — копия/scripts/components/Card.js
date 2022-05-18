export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardEl = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardEl;
  }

  _getLikeEl() {
    this._element
      .querySelector(".element__heart")
      .classList.toggle("element__heart_active");
  }

  _getRemoveEl() {
    this._element.remove();
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__photo")
      .addEventListener("click", () => {
        this._handleCardClick(this._data);
      });

    this._element
      .querySelector(".element__heart")
      .addEventListener("click", () => this._getLikeEl());

    this._element
      .querySelector(".element__delete")
      .addEventListener("click", () => this._getRemoveEl());
  }

  generateCard() {
    this._element = this._getTemplate();
    const titleEl = this._element.querySelector(".element__text");
    const imgEl = this._element.querySelector(".element__photo");
    titleEl.textContent = this._name;
    imgEl.src = this._link;
    imgEl.alt = `Это ${this._name}? Не похоже) Введите корректную ссылку.`;

    this._setEventListeners();

    return this._element;
  }
}