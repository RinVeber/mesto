export default  class FormValidator {
    constructor(validateOption, formElement) {
      this._validateOption = validateOption;
      this._formElement = formElement;
      this._submitButtonElement = this._formElement.querySelector(this._validateOption.submitButtonSelector);
      this._errorFields = this._formElement.querySelectorAll(this._validateOption.errorTextSelector);
      this._inputs = this._formElement.querySelectorAll(this._validateOption.inputSelector);
    }
  
    _getErrorElement(formElement, inputElement) {
      return formElement.querySelector(`#${inputElement.id}-error`);
    }
  
    _showError(formElement, inputElement, errorMessage, errorClass, inputErrorClass) {
      const errorElement = this._getErrorElement(formElement, inputElement);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(errorClass);
      inputElement.classList.add(inputErrorClass);
    }
  
    _hideError(formElement, inputElement, errorClass, inputErrorClass) {
      const errorElement = this._getErrorElement(formElement, inputElement);
      errorElement.textContent = '';
      errorElement.classList.remove(errorClass);
      inputElement.classList.remove(inputErrorClass);
    }
  
    _checkValidity(formElement, inputElement, errorClass, inputErrorClass) {
        const errorMessage = inputElement.validationMessage;
      if (!inputElement.validity.valid) {
        this._showError(formElement, inputElement, errorMessage, errorClass, inputErrorClass);
      } else {
        this._hideError(formElement, inputElement, errorClass, inputErrorClass);
      }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
      }
  
    _toggleButtonState(inputList, submitButtonElement, inactiveButtonClass) {
      const hasInput = this._hasInvalidInput(inputList);
      if (hasInput) {
        submitButtonElement.classList.add(inactiveButtonClass);
        submitButtonElement.setAttribute('disabled', true);
      } else {
        submitButtonElement.classList.remove(inactiveButtonClass);
        submitButtonElement.removeAttribute('disabled', false);
      }
    }
  
    _setEventListeners(formElement, validationObj) {
      const { inputSelector,
        submitButtonSelector,
        inactiveButtonClass,
        inputErrorClass,
        errorClass } = validationObj;

      const inputList = Array.from(formElement.querySelectorAll(inputSelector));
      const submitButtonElement = formElement.querySelector(submitButtonSelector);
      this._toggleButtonState(inputList, submitButtonElement, inactiveButtonClass);  

      const inputListIterator = (inputElement) => {
        const handleInput = () => {
          this._checkValidity(formElement, inputElement, errorClass, inputErrorClass);
          this._toggleButtonState(inputList, submitButtonElement, inactiveButtonClass);
        };
  
        inputElement.addEventListener('input', handleInput);
      };
      this._toggleButtonState(inputList, submitButtonElement, inactiveButtonClass);
      inputList.forEach(inputListIterator);
    }

    enableValidation() {
      this._formElement.addEventListener('submit', (evt) => evt.preventDefault());
      this._setEventListeners(this._formElement, this._validateOption);
    }
  
    _setDisabledOnSubmitButton() {
      this._submitButtonElement.classList.add(this._validateOption.inactiveButtonClass);
      this._submitButtonElement.disabled = true;
    };
  
    resetPopupForm() {
      this._errorFields.forEach((field) => field.textContent = '');
      this._inputs.forEach((input) => input.classList.remove(this._validateOption.inputErrorClass));
      this._setDisabledOnSubmitButton();
    };
  }