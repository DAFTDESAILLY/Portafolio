import chakraImage from "../../images/techs/chakra.png";
import reactBootstrapImage from "../../images/techs/react-bootstrap.png";
import reactRouterdomImage from "../../images/techs/react-router-dom.png";
import sassImage from "../../images/techs/sass.png";
import reactImage from "../../images/techs/react.png";
import semanticImage from "../../images/techs/semantic.png";
import styledImage from "../../images/techs/styled-logo.png";
import viteImage from "../../images/techs/vite.png";
import cssImage from "../../images/techs/css.png";
//import simpsonProject from "../../images/projects/simpson.jpg";
import dymamicFormProject from "../../images/projects/dynamic.jpg";
import gasolineraProject from "../../images/projects/gasolinera.jpg";
import marvelProject from "../../images/projects/marvel.jpg";
import rickMorty from "../../images/projects/rick-morty.jpg";
import tareasProject from "../../images/projects/todo.jpg";

export const projectsportfolio=[
    {
        title: "Rick & Morty API",
        image: rickMorty,
        techs: [
          { name: "React ", src: reactImage },
          { name: "CSS", src: cssImage },
        ],
        description:
          "Application created with React JS and CSS to make a request an external API of Rick & Morty.",
        repository: "https://github.com/DAFTDESAILLY/Rick-Morty",
        website: "#!",
      },
      {
        title: "Note App",
        image: tareasProject,
        techs: [
          { name: "React ", src: reactImage },
          { name: "Semantic UI React", src: semanticImage },
        ],
        description:
          "Application created with React JS and Semantic UI to make a list of tasks where you can add or remove it.",
        repository: "https://github.com/DAFTDESAILLY/note-app",
        website: "#!",
      },
      {
        title: "Estacion de gasolina",
        image: gasolineraProject,
        techs: [
          { name: "Vite", src: viteImage },
          { name: "Chakra", src: chakraImage },
          { name: "React Router DOM", src: reactRouterdomImage },
        ],
        description:
          "Application created with Vite where you can save the information and see it on a summary",
        repository: "https://github.com/DAFTDESAILLY/gasolinera",
        website: "#!",
      },
      {
        title: "Cart App",
        image: gasolineraProject,
        techs: [
          { name: "Vite", src: viteImage },
          { name: "Chakra", src: chakraImage },
          { name: "React Router DOM", src: reactRouterdomImage },
        ],
        description:
          "Aplicacion de carro de compras",
        repository: "https://github.com/DAFTDESAILLY/CartApp",
        website: "https://beautiful-biscochitos-380777.netlify.app/",
      },






];