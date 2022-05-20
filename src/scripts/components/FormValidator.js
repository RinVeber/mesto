export default class FormValidator {
  constructor(validateOption, formSelector) {
    this._validateOption = validateOption;
    this._formSelector = formSelector;
    this._formElement = document.querySelector(this._formSelector);
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
  _showError(inputElement) {
    const errorElement = this._getErrorElement(inputElement);
    inputElement.classList.add(this._validateOption.inputErrorClass);
    errorElement.classList.add(this._validateOption.errorClass);
    errorElement.textContent = inputElement.validationMessage;;
  }

  _hideError(inputElement) {
    const errorElement = this._getErrorElement(inputElement);
    inputElement.classList.remove(this._validateOption.inputErrorClass);
    errorElement.classList.remove(this._validateOption.errorClass);
    errorElement.textContent = "";
  }

  _checkValidity(inputElement) {
    const inputValid = inputElement.validity.valid;
    if (!inputValid) {
      this._showError(inputElement);
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

    this._toggleButtonState();  

    const inputListIterator = (inputElement) => {
      const handleInput = () => {
        this._checkValidity(inputElement);
        this._toggleButtonState();
      };
      inputElement.addEventListener('input', handleInput);
    };
    this._inputList.forEach(inputListIterator);
  }

    enableValidation() {
      this._formElement.addEventListener('submit', (evt) => evt.preventDefault());
      this._setEventListeners(this._formElement, this._validateOption);
    }
  resetPopupForm() {
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
    this._setDisabledOnSubmitButton();
  };
}
