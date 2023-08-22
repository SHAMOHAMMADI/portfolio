import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Test from "./pages/test";
import { createContext , useRef, useState} from "react";
import "./App.css"
import PageNotFound from "./Components/404";
export const AppContext = createContext(null);

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [theme , setTheme] = useState(false);
  // const tagRef = useRef(null); 
  
  // const handleChange =()=>{
  //   setTheme((c)=>(
     
  //   ))
  // }



  return (
    <AppContext.Provider value={{isLogin , setIsLogin , theme ,setTheme}}>
      <div className="App" >
        <Routes>
          <Route path="/Home" element={<Home />}>
            Home
          </Route>
          <Route path="*" element={<PageNotFound />}>
          </Route>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/Projects" element={<Projects />}>
            Projects
          </Route>
          <Route path="/Resume" element={<Resume />}>
            Resume
          </Route>
          <Route path="/Contact" element={<Contact />}>
            Contact
          </Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
