import react from "react";
import styles from "./Resume.module.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
function Resume() {
  return (
    <>
      <NavBar />
      <div className={styles.Resume}>
      <p>Resume</p>
      </div>
      <Footer />
    </>
  );
}

export default Resume;
