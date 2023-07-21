import React, { useState } from 'react';
import * as S from './Navbar.styles';

function Navbar() {
  const [showMenuBurguer, setShowMenuBurguer] = useState(false);

  return (
    <S.ContainerNavbar>
      <S.ContainerLogo>
        <S.ImageLogo src="/img/desailly-logo.png" alt="de-logo" />
        <div>
          <h1>Daniel Desailly</h1>
          <h2>Frontend Dev</h2>
        </div>
      </S.ContainerLogo>

      <S.ContainerBurger onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
        <S.BurgerMenu />
        <S.BurgerMenu />
        <S.BurgerMenu />
        
      </S.ContainerBurger>

      <S.ContainerItems showMenuBurguer={showMenuBurguer}>
        <p>About me</p>
        <p>Projects</p>
        <S.Button>Contact me</S.Button>
      </S.ContainerItems>
    </S.ContainerNavbar>
  );
};

export default Navbar;
