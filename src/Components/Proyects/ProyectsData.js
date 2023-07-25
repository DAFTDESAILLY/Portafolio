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
import cartapp from "../../images/projects/carapp.png";

export const projectsportfolio=[
    {
        title: "Rick & Morty API",
        image: rickMorty,
        techs: [
          { name: "React ", src: reactImage },
          { name: "CSS", src: cssImage },
        ],
        description:
        "Aplicación creada con React JS y CSS para realizar una solicitud a una API externa de Rick & Morty.",
        repository: "https://github.com/DAFTDESAILLY/Rick-Morty",
        website: "https://iridescent-muffin-042838.netlify.app/",
      },
      {
        title: "Note App",
        image: tareasProject,
        techs: [
          { name: "React ", src: reactImage },
          { name: "Semantic UI React", src: semanticImage },
        ],
        description:
        "Aplicación creada con React JS y Semantic UI para crear una lista de tareas donde puedes agregar o eliminar tareas.",
        repository: "https://github.com/DAFTDESAILLY/note-app",
        website: "https://gregarious-churros-53347d.netlify.app/",
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
        "Aplicación creada con Vite donde puedes guardar información y verla en un resumen.",
        repository: "https://github.com/DAFTDESAILLY/gasolinera",
        website: "https://eclectic-biscochitos-73c570.netlify.app",
      },
      {
        title: "Cart App",
        image: cartapp,
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