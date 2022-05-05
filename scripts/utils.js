function openPopup(popup) {
	popup.classList.add('popup_opened');
	popup.addEventListener('click', closePopupOverlay);
	document.addEventListener('keydown', handleEscPress);
}

function closePopup(popup) {
	document.removeEventListener('keydown', handleEscPress);
    popup.removeEventListener('click', closePopupOverlay);
	popup.classList.remove('popup_opened');
}

const handleEscPress = (evt) => {
	if (evt.key === 'Escape') {
		const popup = document.querySelector('.popup_opened');
		
		closePopup(popup);
	}
}

const closePopupOverlay = (evt) => {
	if (evt.target !== evt.currentTarget) {
		return;
	}
	const popup = document.querySelector('.popup_opened');
	closePopup(popup);
}

export {openPopup, closePopup, handleEscPress, closePopupOverlay}