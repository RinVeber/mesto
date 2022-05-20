import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(".popup__image");
    this._popupSubtitle = this._popup.querySelector(".popup__image-subtitle");
  }

  open(card) {
    super.open();
    
    this._popupImage.src = card.link;
    this._popupImage.alt = card.name;
    this._popupSubtitle.textContent = card.name;

  }
}
