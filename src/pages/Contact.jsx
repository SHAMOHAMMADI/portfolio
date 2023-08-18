import react from "react";
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import styles from "./Contact.module.css"

function Contact() {
  return (
    <>
    <NavBar />
    <div className={styles.Contact}> 
      <div>Contact</div>
    </div>
      <Footer/>
    </>
  );
}

export default Contact;
