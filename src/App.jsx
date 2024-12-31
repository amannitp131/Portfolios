import './App.css';
import Achievement from './Components/Achievement';
import Background from './Components/Background';
import Education from './Components/Education';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Experience from './Components/Experience'

function App() {
  return (
    <>
      <div className="app-background"></div> {/* Background container */}
      <Background />
      <div className="content">
       <Navbar/>
       <Home/>
       <Projects/>
       <Achievement/>
       <Education/>
       <Experience/>
      </div>
    </>
  );
}

export default App;
