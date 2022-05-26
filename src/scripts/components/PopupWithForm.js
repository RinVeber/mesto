import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, callbackFormSubmit }) {
    super(popupSelector);
    this._callbackFormSubmit = callbackFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form')
    this._inputList = this._popup.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }
  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }
  setUserUX(isSending) {
    this._button.textContent = isSending ? 'Загрузка...' : this._buttonDefaultText;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callbackFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}
