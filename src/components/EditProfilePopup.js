import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  const { isOpen, onClose } = props;

  return (
    <PopupWithForm name='edit' title='Редактировать профиль' buttonText='Сохранить' isOpen={isOpen} onClose={onClose}>
      <input type="text" className="popup__input popup__input_type_name" id="profile-name" name="name" minLength="2" maxLength="40" placeholder="Имя" required />
      <span className="popup__input-error popup__input-error_type_name" id="profile-name-error"></span>
      <input type="text" className="popup__input popup__input_type_description" id="profile-description" name="description" minLength="2" maxLength="200" placeholder="О себе" required />
      <span className="popup__input-error popup__input-error_type_description" id="profile-description-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
