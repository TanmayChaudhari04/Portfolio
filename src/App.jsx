import './App.css'
import Nav from './Components/Nav.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Experience from './Components/Experience.jsx';
import Contact from './Components/Contact.jsx';

function App() {

  return (
    <>
    <div className="bg-gray-900 w-full">
      <Nav></Nav>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
      <Contact></Contact>
    </div>
    </>
  );
}

export default App;