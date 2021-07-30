import React from 'react';
import { api } from './../utils/api';
import avatarButton from './../images/profile-avatar-button.svg';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props;

  React.useEffect(() => {
    api.getUserData()
      .then((card) => {
        setUserName(card.name);
        setUserDescription(card.about);
        setUserAvatar(card.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <div style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar" />
          <img src={avatarButton} alt="Иконка редактирования аватара" onClick={onEditAvatar} className="profile__avatar-edit" />
        </div>
        <div className="profile__info">
          <div className="profile__biography">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" aria-label="Редактировать профиль" onClick={onEditProfile} className="profile__edit-button"></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button type="button" aria-label="Добавить фотографию" onClick={onAddPlace} className="profile__add-button"></button>
      </section>
      <section className="elements">
        {cards.map(card => <Card card={card} key={card._id} onCardClick={onCardClick} />)}
      </section>
    </main>
  );
}

export default Main;
