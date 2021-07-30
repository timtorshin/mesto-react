import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const { isOpen, onClose } = props;

  return (
    <PopupWithForm name='add' title='Новое место' buttonText='Создать' isOpen={isOpen} onClose={onClose}>
      <input type="text" className="popup__input popup__input_type_title" id="element-title" name="name" minLength="2" maxLength="30" placeholder="Название" required />
      <span className="popup__input-error popup__input-error_type_title" id="element-title-error"></span>
      <input type="url" className="popup__input popup__input_type_link" id="element-link" name="link" placeholder="Ссылка на картинку" required />
      <span className="popup__input-error popup__input-error_type_link" id="element-link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
