const showInputError = (formElement, inputElement, errorMessage, validationObj) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.add(validationObj.errorClass);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(validationObj.inputErrorClass);
};

const hideInputError = (formElement, inputElement, validationObj) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(validationObj.errorClass);
  errorElement.textContent = ' ';
  inputElement.classList.remove(validationObj.inputErrorClass);
};

const checkValidity = (formElement, inputElement, validationObj) => {
  const errorMessage = inputElement.validationMessage;
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, errorMessage, validationObj);
  } else {
    hideInputError(formElement, inputElement, validationObj);
  }
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, submitButtonElement, validationObj) => {
  const hasInput = hasInvalidInput(inputList);
  if (hasInput) {
    submitButtonElement.classList.add(validationObj.inactiveButtonClass);
    submitButtonElement.setAttribute('disabled', true);
  } else {
    submitButtonElement.classList.remove(validationObj.inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled', false);
  }
};

const setEventListeners = (formElement, validationObj) => {
  const inputList = Array.from(formElement.querySelectorAll(validationObj.inputSelector));
  const submitButtonElement = formElement.querySelector(validationObj.submitButtonSelector);
  toggleButtonState(inputList, submitButtonElement, validationObj);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkValidity(formElement, inputElement, validationObj);
      toggleButtonState(inputList, submitButtonElement, validationObj);
    });
  });
};

const enableValidation = (validationObj) => {
  const { formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass } = validationObj;

  const formList = Array.from(document.querySelectorAll(formSelector));

  const formSetList = (formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault()
    });
    setEventListeners(formElement, validationObj);
  };
  formList.forEach(formSetList);
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
});