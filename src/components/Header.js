import React from 'react';
import mestoLogo from './../images/mesto-logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={mestoLogo} alt="Логотип Mesto Russia" className="header__logo" />
    </header>
  );
}

export default Header;
