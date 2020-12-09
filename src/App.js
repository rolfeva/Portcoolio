import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Sections/Contact';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Home from './components/Sections/Home';


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
