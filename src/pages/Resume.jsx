import react from "react";
import styles from "./Resume.module.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import pic1 from "../img/lowPic/logo.jpg";

function Resume() {
  return (
    <>
      <NavBar />
      <div className={styles.Resume}>
        <div className={styles.resumeSidebar}>
          <img src={pic1} alt="" />
          <h4>Mustafa Shamohammadi</h4>
          <h5>Front-end developer</h5>
          <p>may 30 , 1985</p>
          <p>Tehran , Iran</p>
          <p>shahmohammadi1986 @yahoo.com</p>
          <p>+989128982040</p>
          <button>Download CV</button>
        </div>
        <div className={styles.resumeMain}>
          <h3>About me</h3>
          <p>
             I’m web development and ui/ux designer from Tehran , Iran
            . working in web development and print media. I enjoy turning
            complex problems into simple , beautiful and infinitive designs. My
            job is to build your website so that it is functional and
            user-friendly but at the same time attractive moreover . I add
            personal touch to your product and make sure that is eye-catching
            and easy to use my aim is to bring across your message and identify
            in the most creative way . I created web design for many famous
            brand companies.
          </p>
          <h3>Skills</h3>
          <div className={styles.skills}>
          <p>JavaScript</p>
          <p>Reactjs</p>
          <p>Nextjs</p>
          <p>TypeScript</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Git</p>
          <p>Cpp</p>
          </div>
          <h3>Education</h3>
          <p>Master</p>
          <h3>Experiences</h3>
          <p>AlphaPars</p>
          <p>western Asia Network</p>

          

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Resume;
