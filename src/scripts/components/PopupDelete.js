import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });
  }
}