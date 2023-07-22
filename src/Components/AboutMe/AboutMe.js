import React from 'react'
import * as S from './AboutMe.style';

const AboutMe = () => {
  return <S.ContainerAboutMe>
    <S.ContainerFlex>
     <S.ContainerText>
        <S.Title>
            <p>Hello Im</p>
            <p>Daniel Desailly Gonzalez</p>
            <p>Frontend developer</p>
        </S.Title>
        <S.DescriptionText>
        En mi portafolio, encontrarás algunos de los pequeños proyectos que he creado con React. Estos proyectos reflejan mi dedicación y pasión por la programación, así como mi capacidad para aprender y enfrentar nuevos desafíos.
        </S.DescriptionText>
        <S.ContainerIcons>
            //continuar
        </S.ContainerIcons>
     </S.ContainerText>
     
    </S.ContainerFlex>
    </S.ContainerAboutMe>;
  
};

export default AboutMe