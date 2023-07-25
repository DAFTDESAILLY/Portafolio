import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Container from './Components/Container/Container';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Proyects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Container>
     <AboutMe/>
     <Projects/>
     <Contact/>
    </Container>
    </>
  );
}

export default App;
