export default class Card {
  constructor({
    card,
    myInfo,
    selector,
    checkLike,
    checkDeleteLike,
    handleCardClick,
    handleDelClick,
    
  }) {
    this._name = card.name;
    this._link = card.link;
    this._card = card;
    this._selector = selector;
    this._likesArr = card.likes;
    this._userId = card.owner._id;
    this._myId = myInfo._id;
    this._handleCardClick = handleCardClick;
    this._handleDelClick = handleDelClick;
    this._checkLike = checkLike;
    this._checkDeleteLike = checkDeleteLike;
  }

  _getElement() {
    this._element = document 
    .querySelector(this._selector) 
    .content.querySelector(".element") 
    .cloneNode(true); 
  }

  getCurrentCard() {
    return this._card;
  }

  deleteCard() {
    this._element.remove();
  }

  checkLike(item) {
    this._likesArr = item.likes;
    this._getLikeValue(item);
    if (this._checkMyLike()) {
      this._like.classList.add("element__heart_active");
    } else {
      this._like.classList.remove("element__heart_active");
    }
  }

    _getLikeValue(item) {
    this._likeCount.textContent = item.likes.length;
  }

  _checkMyLike() {
    return Boolean(this._likesArr.find((card) => card._id === this._myId));
  }
  
  _setEventListeners() {
    this._photo.addEventListener("click", () => {
        this._handleCardClick(this._card);
      });

    this._like
      .addEventListener("click", () => {
        if (this._checkMyLike()) {
          this._checkDeleteLike();
        } else {
          this._checkLike();
        }
      });

    this._delete
      .addEventListener("click", () => this._handleDelClick(this._card._id));
  }

  generate() {
    this._getElement();
    this._title = this._element.querySelector(".element__title");
    this._photo = this._element.querySelector(".element__photo");
    this._like = this._element.querySelector(".element__heart");
    this._likeCount = this._element.querySelector(".element__like-counter");
    this._delete = this._element.querySelector(".element__delete");

    if (this._userId === this._myId)
      this._delete.classList.add("element__delete_active");
    if (this._checkMyLike()) {
      this._like.classList.add("element__heart_active");
    }

    this._likeCount.textContent = this._likesArr.length;
    this._title.textContent = this._name;
    this._photo.src = this._link;
    this._photo.alt = `Ошибочка`;

    this._setEventListeners();

    return this._element;
  }
}
