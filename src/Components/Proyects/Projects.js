
import * as S from './Projects.style';
import{projectsportfolio} from './ProyectsData';
import logoGithub from '../../svg/github.svg';
import logowebsite from '../../svg/website.svg';


const Projects = () => {
  return<S.ContainerProjects id="projects">
    <S.Title>
       some of{" "} 
       <span> 
        {""}
        <br/>
        My projects
        </span> 
    </S.Title>
    <S.ContentProject>
    {projectsportfolio.map((project,index)=>(
     <S.ProjectContent key={index}>
        <S.TitleProject>{project.title} </S.TitleProject>
        <S.ContainerImage>
          <img src={project.image}alt={project.title} loazy="true"/>
        </S.ContainerImage>
        <S.ContainerTechs>
          {project.techs.map((tech,index)=>(
            <div key={index}>
            <img src={tech.src}alt={tech.name}/>
            <p>{tech.name}</p>
            </div>
          ))}
        </S.ContainerTechs>
        <S.Description>{project.description}</S.Description>
        <S.ContainerFooter>
          {project.repository &&(
         <a href={project.repository }target="_blank" rel="noreferrer">
          <img src={logoGithub}alt={project.description}/>
          </a> 
           )}
            {project.website &&(
         <a href={project.website }target="_blank" rel="noreferrer">
          <img src={logowebsite}alt={project.description}/>
          </a> 
           )}
        </S.ContainerFooter>
     </S.ProjectContent>
    )) }
    </S.ContentProject>
  </S.ContainerProjects>;
}

export default Projects