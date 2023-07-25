import React, { useState } from 'react';
import * as S from './Navbar.styles';

function Navbar() {
  const [showMenuBurguer, setShowMenuBurguer] = useState(false);
  
  const clickItemNav = (item) => {
    console.log(item);
    document.getElementById(item).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <S.ContainerNavbar>
      <S.ContainerLogo>
        <S.ImageLogo src="/img/desailly-logo.png" alt="de-logo" />
        <div>
          <h1>Daniel Desailly</h1>
          <h2>Frontend Developer</h2>
        </div>
      </S.ContainerLogo>

      <S.ContainerBurger onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
        <S.BurgerMenu />
        <S.BurgerMenu />
        <S.BurgerMenu />
        
      </S.ContainerBurger>

      <S.ContainerItems showMenuBurguer={showMenuBurguer}>
        <p onClick={() => clickItemNav("about-me")}>About me</p>
        <p onClick={() => clickItemNav("projects")}>Projects</p>
        <S.Button onClick={() => clickItemNav("contact")}>Contact me</S.Button>
      </S.ContainerItems>
    </S.ContainerNavbar>
  );
};

export default Navbar;
