import react from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ProjectsList from "../Components/ProjectsList"
import styles from './Projects.module.css'
import SlideShow from '../Components/SlideShow'
import {useEffect , useState} from 'react' 
import axios from 'axios'


function Projects(){
    const [data , setData] = useState([])
    useEffect(()=>{
     axios.get("http://localhost:3001/Projects").then(result=>{
      setData(result.data.websites)
     }).catch((err)=>{
     console.log(err)
     })
    },[])
  
    return (
        <>
        <NavBar/>
        <div className={styles.SlideShow}>

         {/* <SlideShow/> */}
        </div>
        <div className={styles.Projects}>
         {data.map((websites)=>(
           <ProjectsList key={websites.id} websites={websites}/>
         ))}
            </div>

        <Footer/>
        </>
    )
}

export default Projects;