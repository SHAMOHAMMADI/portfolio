import './App.css';
import {Route , Routes} from 'react-router-dom' 
import Home from './pages/Home';
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'



function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/Home" element={<Home/>}>Home</Route>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/Projects" element={<Projects/>}>Projects</Route>
      <Route path="/Resume" element={<Resume/>}>Resume</Route>
      <Route path="/Contact" element={<Contact/>}>Contact</Route>
     </Routes>
     
    


    </div>
  );
}

export default App;
