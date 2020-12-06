import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Sections/Contact';
import CV from './components/Sections/CV';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';


function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Projects/>
      <CV/>
      <Contact/>
    </>
  );
}

export default App;
