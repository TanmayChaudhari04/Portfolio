import React, { useState, useEffect } from 'react';
import './App.css'
import Nav from './Components/Nav.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Experience from './Components/Experience.jsx';
import Contact from './Components/Contact.jsx';
import Assistant  from './Components/Assistant.jsx';
import ResumeString from './assets/Resume.jsx';

export const Context = React.createContext();

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        "role": "system",
        "content": ResumeString
      }
    ]);

  }, []);

  return (
    <Context.Provider value={[ messages, setMessages]}>
    <div className="bg-gray-900 w-full">
      <Nav></Nav>
      <Assistant></Assistant>
      {/* <About></About> */}
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
      <Contact></Contact>
    </div>
    </Context.Provider>
  );
}

export default App;