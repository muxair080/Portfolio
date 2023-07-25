
import './App.css';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import Home from './PortfolioContainer/Home/Home';
import About from './PortfolioContainer/AboutMe/About';
import Resume from './PortfolioContainer/Resume/resume';
import Contact from './PortfolioContainer/ContactMe/Contact';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Resume/>
     <Contact/>
    </div>
  );
}
export default App;
