export default class FormValidator {
  constructor(validateOption, formSelector) {
    this._validateOption = validateOption;
    this._formSelector = formSelector;
    this._formElement = document.querySelector(this._formSelector);
    this._submitButtonElement = this._formElement.querySelector(this._validateOption.submitButtonSelector);
    this._errorFields = this._formElement.querySelectorAll(this._validateOption.errorTextSelector);
    this._submitButtonElement = this._formElement.querySelector(this._validateOption.submitButtonSelector);
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._validateOption.inputSelector)
    );
  }
  _getErrorElement(inputElement) {
    return this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
  }
  _showError(inputElement, errorMessage) {
    const errorElement = this._getErrorElement(inputElement);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validateOption.errorClass);
    inputElement.classList.add(this._validateOption.inputErrorClass);
  }

  _hideError(inputElement) {
    const errorElement = this._getErrorElement(inputElement);
    errorElement.textContent = "";
    errorElement.classList.remove(this._validateOption.errorClass);
    inputElement.classList.remove(this._validateOption.inputErrorClass);
  }

  _checkValidity(inputElement) {
    const inputValid = inputElement.validity.valid;
    const errorMessage = inputElement.validationMessage;
    if (!inputValid) {
      this._showError(inputElement, errorMessage);
    } else {
      this._hideError(inputElement);
    }
  }
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    const hasInput = this._hasInvalidInput();
    if (hasInput) {
      this._setDisabledOnSubmitButton();
    } else {
      this._submitButtonElement.removeAttribute("disabled", false);
      this._submitButtonElement.classList.remove(this._validateOption.inactiveButtonClass);
    }
  }
  _setDisabledOnSubmitButton() {
    this._submitButtonElement.classList.add(this._validateOption.inactiveButtonClass);
    this._submitButtonElement.disabled = true;
  };
  _setEventListeners(formElement, validationObj) {
    const { inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass } = validationObj;

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const submitButtonElement = formElement.querySelector(submitButtonSelector);
    this._toggleButtonState(inputList, submitButtonElement, inactiveButtonClass);  

    inputList.forEach(inputListIterator);
  }

  enableValidation() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
  resetPopupForm() {
    this._errorFields.forEach((field) => field.textContent = '');
    this._inputList.forEach((input) => input.classList.remove(this._validateOption.inputErrorClass));
    this._setDisabledOnSubmitButton();
  };

  checkButtonStateOpenPopup() {
    this._inputList.forEach((inputElement) => {
      this._toggleButtonState();
      this._hideError(inputElement);
    });
  }
}
