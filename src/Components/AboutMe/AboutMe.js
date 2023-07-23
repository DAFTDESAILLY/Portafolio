import React from 'react'
import * as S from './AboutMe.style';
import logoGithub from '../../svg/github.svg';
import logolinkedin from '../../svg/linkedin.svg';
import logoweb from '../../svg/website.svg';

const AboutMe = () => {
    const socialNetworks=[
        {
            name: "GitHub",
            url:"https://github.com/DAFTDESAILLY",
            logo:logoGithub
        },
        {
            name: "Linkedin",
            url:"https://github.com/DAFTDESAILLY",
            logo:logolinkedin
        },
        {
            name: "Web",
            url:"https://github.com/DAFTDESAILLY",
            logo:logoweb
        }
    ]



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
          {socialNetworks.map((network,index)=>(
            <a key={index}href={network.link}target="_blank"rel="noreferrer">
                <img src={network.logo}alt={network.name}/>
            </a>
          ))}
        </S.ContainerIcons>
     </S.ContainerText>
     <S.ContainerImage>
        <img src="/img/foto.jpeg"alt="Desailly"/>
     </S.ContainerImage>
    </S.ContainerFlex>
    </S.ContainerAboutMe>;
  
};

export default AboutMe