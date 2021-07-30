import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const { isOpen, onClose } = props;

  return (
    <PopupWithForm name='avatar' title='Обновить аватар' buttonText='Сохранить' isOpen={isOpen} onClose={onClose}>
      <input type="url" className="popup__input popup__input_type_link" id="profile-avatar" name="link" placeholder="Ссылка на картинку" required />
      <span className="popup__input-error popup__input-error_type_link" id="profile-avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
