
import * as S from './Projects.style';
import{projectsportfolio} from './ProyectsData';



const Projects = () => {
  return<S.ContainerProjects>
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
     </S.ProjectContent>
    )) }
    </S.ContentProject>
  </S.ContainerProjects>;
}

export default Projects