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

const toggleButtonState = (inputList, submitButtonElement, validationObj) => {
  const hasInvalidInput = inputList.some((inputElement) => !inputElement.validity.valid);
  if (hasInvalidInput) {
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
  const inputListIterator = (inputElement) => {
    const handleInput = (evt) => {
      checkValidity(formElement, inputElement, validationObj);
      toggleButtonState(inputList, submitButtonElement, validationObj);
    };
    inputElement.addEventListener('input', handleInput);
  };
  toggleButtonState(inputList, submitButtonElement, validationObj);
  inputList.forEach(inputListIterator);
  
}

const enableValidation = (validationObj) => {
  const { formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass } = validationObj;


    
  const formList = Array.from(document.querySelectorAll(formSelector));
  const formListIterator = (formElement) => {
    formElement.addEventListener('submit', (e) => e.preventDefault());
    setEventListeners(formElement, validationObj);
  };
  formList.forEach(formListIterator);
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
});