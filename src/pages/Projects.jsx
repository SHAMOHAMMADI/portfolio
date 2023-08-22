import react from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ProjectsList from "../Components/ProjectsList"
import styles from './Projects.module.css'
import SlideShow from '../Components/SlideShow'


function Projects(){
    return (
        <>
        <NavBar/>
        <div className={styles.SlideShow}>

         <SlideShow/>
        </div>
        <div className={styles.Projects}>
         <ProjectsList/>
            </div>

        <Footer/>
        </>
    )
}

export default Projects;