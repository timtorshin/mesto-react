import React from 'react';

function Card(props) {
  const { card, onCardClick } = props;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <img src={card.link} alt={card.name} name="name" onClick={handleClick} className="element__image" />
      <div className="element__caption">
        <h2 name="link" className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button type="button" aria-label="Поставить лайк" className="element__like-button"></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" aria-label="Удалить фотографию" className="element__delete-button"></button>
    </article>
  );
}

export default Card;
